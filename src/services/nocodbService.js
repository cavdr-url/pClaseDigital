const TOKEN = import.meta.env.VITE_NOCODB_TOKEN;
const BASE_URL = import.meta.env.VITE_NOCODB_BASE_URL;

export const NOCODB_TABLES = {
  videos: import.meta.env.VITE_NOCODB_VIDEOS_TABLE_ID,
  indiceVideo: import.meta.env.VITE_NOCODB_INDICE_TABLE_ID,
};

export const getRecordsList = (response) => {
  const records = Array.isArray(response)
    ? response
    : response?.records || response?.list || response?.data || [];

  if (!Array.isArray(records)) {
    return [];
  }

  return records.map((record) => {
    if (!record?.fields || typeof record.fields !== "object") {
      return record;
    }

    return {
      Id: record.id,
      ...record.fields,
    };
  });
};

const getApiUrl = (endpoint) => {
  if (!BASE_URL) {
    throw new Error(
      "NocoDB no está configurado: falta VITE_NOCODB_BASE_URL."
    );
  }

  return `${BASE_URL.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;
};

const getHeaders = (hasBody = false) => {
  if (!TOKEN) {
    throw new Error(
      "NocoDB no está configurado: falta VITE_NOCODB_TOKEN."
    );
  }

  return {
    Accept: "application/json",
    "xc-token": TOKEN,
    ...(hasBody && { "Content-Type": "application/json" }),
  };
};

const request = async (endpoint, options = {}) => {
  const response = await fetch(getApiUrl(endpoint), {
    ...options,
    headers: {
      ...getHeaders(Boolean(options.body)),
      ...options.headers,
    },
  });

  let responseBody;
  try {
    responseBody = await response.json();
  } catch {
    responseBody = null;
  }

  if (!response.ok) {
    const message =
      responseBody?.message ||
      responseBody?.error ||
      `NocoDB respondió con el estado ${response.status}.`;

    throw new Error(message);
  }

  return responseBody;
};

const buildQueryString = (params = {}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

export const getRecords = async ({ tableId, viewId, ...params }) => {
  try {
    if (!tableId) {
      throw new Error("Debes indicar el ID de tabla para consultar NocoDB.");
    }

    const query = buildQueryString({ viewId, ...params });
    return await request(
      `/${encodeURIComponent(tableId)}/records${query}`
    );
  } catch (error) {
    throw new Error(
      `No fue posible obtener los registros de NocoDB: ${error.message}`,
      { cause: error }
    );
  }
};

export const createRecord = async ({ tableId, data }) => {
  try {
    if (!tableId) {
      throw new Error("Debes indicar el ID de tabla para crear un registro.");
    }

    return await request(
      `/${encodeURIComponent(tableId)}/records`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    throw new Error(
      `No fue posible crear el registro en NocoDB: ${error.message}`,
      { cause: error }
    );
  }
};

export const updateRecord = async ({ tableId, recordId, data }) => {
  try {
    if (!tableId || !recordId) {
      throw new Error("Debes indicar tableId y recordId para actualizar un registro.");
    }

    return await request(
      `/${encodeURIComponent(tableId)}/records/${encodeURIComponent(recordId)}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    throw new Error(
      `No fue posible actualizar el registro en NocoDB: ${error.message}`,
      { cause: error }
    );
  }
};

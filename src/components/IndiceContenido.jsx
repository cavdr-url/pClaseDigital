import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getRecords,
  getRecordsList,
  NOCODB_TABLES,
} from "../services/nocodbService";

const parseTimeToSeconds = (time) => {
  const parts = String(time).split(":").map(Number);
  if (parts.some(Number.isNaN)) return 0;

  return parts.reduce((total, part) => total * 60 + part, 0);
};

const getRelatedId = (value) => {
  if (value && typeof value === "object") {
    return value.id ?? value.Id ?? value.value;
  }

  return value;
};

function IndiceContenido({ onSelectTime }) {
  const [temas, setTemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const videosResponse = await getRecords({
          tableId: NOCODB_TABLES.videos,
          limit: 1,
        });
        const [video] = getRecordsList(videosResponse);

        if (!video) {
          throw new Error("No se encontró el video para cargar su índice.");
        }

        if (!NOCODB_TABLES.indiceVideo) {
          throw new Error(
            "Falta VITE_NOCODB_INDICE_TABLE_ID en el archivo .env."
          );
        }

        const indexResponse = await getRecords({
          tableId: NOCODB_TABLES.indiceVideo,
        });

        const videoId = String(video.Id);
        const matchingTopics = getRecordsList(indexResponse).filter(
          (item) => String(getRelatedId(item.video_id)) === videoId
        );

        setTemas(
          matchingTopics.sort(
            (first, second) =>
              parseTimeToSeconds(first.tiempo) - parseTimeToSeconds(second.tiempo)
          )
        );
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  return (
    <motion.div
      className="card shadow-sm border-0 h-100"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body">

        <h4 className="text-success mb-4">
          <i className="bi bi-list-ul me-2"></i>
          Índice de Contenidos
        </h4>

        {loading && (
          <div className="text-center py-4">
            <div className="spinner-border spinner-border-sm text-success" role="status">
              <span className="visually-hidden">Cargando índice...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="alert alert-warning mb-0" role="alert">
            <i className="bi bi-exclamation-circle me-2"></i>
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="list-group">
            {temas.map((item, index) => (
            <motion.div
              key={item.Id || `${item.tiempo}-${index}`}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              role="button"
              tabIndex="0"
              onClick={() => onSelectTime(parseTimeToSeconds(item.tiempo))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onSelectTime(parseTimeToSeconds(item.tiempo));
                }
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#f8f9fa",
              }}
            >
              <span>{item.tema}</span>
              <span className="badge bg-success">{item.tiempo}</span>
            </motion.div>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
}

export default IndiceContenido;
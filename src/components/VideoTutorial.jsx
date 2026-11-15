import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getRecords,
  getRecordsList,
  NOCODB_TABLES,
} from "../services/nocodbService";

const getVideoId = (url) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1);
    }

    return parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").pop();
  } catch {
    return null;
  }
};

const getEmbedUrl = (url, seconds = 0) => {
  const videoId = getVideoId(url);
  if (!videoId) return url;

  return `https://www.youtube.com/embed/${videoId}?start=${seconds}`;
};

function VideoTutorial({ currentTime = 0 }) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVideo = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getRecords({
          tableId: NOCODB_TABLES.videos,
          limit: 1,
        });
        const [firstVideo] = getRecordsList(response);

        if (!firstVideo) {
          throw new Error("No hay videos disponibles en NocoDB.");
        }

        setVideo(firstVideo);
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, []);

  return (
    <motion.div
      className="card shadow-sm border-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body p-4">

        <h3 className="text-success mb-4">
          <i className="bi bi-play-circle-fill me-2"></i>
          {video?.titulo || "Videotutorial"}
        </h3>

        {loading && (
          <div className="ratio ratio-16x9 d-flex align-items-center justify-content-center rounded bg-light">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Cargando video...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="alert alert-warning mb-0" role="alert">
            <i className="bi bi-exclamation-circle me-2"></i>
            {error}
          </div>
        )}

        {!loading && !error && video && (
          <>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe
                key={`${video.url}-${currentTime}`}
                src={getEmbedUrl(video.url, currentTime)}
                title={video.titulo || "Videotutorial"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <h5>Descripción</h5>
              <p className="text-muted mb-0">{video.descripcion}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default VideoTutorial;
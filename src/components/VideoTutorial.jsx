import { motion } from "framer-motion";

function VideoTutorial() {
  return (
    <motion.div
      id="video"
      className="card shadow-sm border-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body p-4">

        <h3 className="text-success mb-4">
          <i className="bi bi-play-circle-fill me-2"></i>
          Videotutorial
        </h3>

        <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">

          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Tutorial Google Sheets"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </div>

        <div className="mt-4">

          <h5>
            Descripción
          </h5>

          <p className="text-muted mb-0">
            Este videotutorial permitirá al estudiante comprender
            los conceptos fundamentales relacionados con los tipos
            de datos en Google Sheets. El contenido servirá como
            apoyo visual para reforzar los conocimientos adquiridos
            mediante la lectura del material PDF y la realización
            de actividades prácticas.
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default VideoTutorial;
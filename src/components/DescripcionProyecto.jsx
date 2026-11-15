import { motion } from "framer-motion";

function DescripcionProyecto() {
  return (
    <motion.div
      className="card shadow-sm border-0"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-body">

        <h2 className="text-success mb-3">
          <i className="bi bi-info-circle-fill me-2"></i>
          Descripción del Proyecto
        </h2>

        <p className="text-muted">
          Este Plan de Clase Digital Interactivo tiene como
          objetivo enseñar los diferentes tipos de datos en
          Google Sheets mediante recursos educativos digitales.
        </p>

        <p className="text-muted">
          Los estudiantes tendrán acceso a un libro digital en PDF,
          un videotutorial con índice de contenidos y una evaluación
          interactiva para reforzar los conocimientos adquiridos.
        </p>

        <p className="text-muted mb-0">
          La información será administrada mediante NocoDB para
          facilitar la actualización de recursos y el seguimiento
          del progreso académico.
        </p>

      </div>
    </motion.div>
  );
}

export default DescripcionProyecto;
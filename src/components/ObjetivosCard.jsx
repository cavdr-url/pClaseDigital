import { motion } from "framer-motion";

function ObjetivosCard({
  competencia,
  indicadorLogro,
}) {
  return (
    <motion.div
      className="card shadow-sm border-0"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-body">

        <h2 className="text-success">
          <i className="bi bi-bullseye me-2"></i>
          Objetivos de Aprendizaje
        </h2>

        <hr />

        <h5 className="text-primary">
          Competencia
        </h5>

        <p>
          {competencia}
        </p>

        <h5 className="text-primary">
          Indicador de Logro
        </h5>

        <p className="mb-0">
          {indicadorLogro}
        </p>

      </div>
    </motion.div>
  );
}

export default ObjetivosCard;
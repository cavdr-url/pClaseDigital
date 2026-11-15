import { motion } from "framer-motion";

function ContenidoCard({
  icono,
  titulo,
  descripcion
}) {
  return (
    <motion.div
      className="card h-100 border-0 shadow-sm"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -5
      }}
      transition={{
        duration: 0.4
      }}
    >
      <div className="card-body text-center p-4">

        <div
          className="display-4 mb-3"
          style={{ color: "#0F9D58" }}
        >
          {icono}
        </div>

        <h4 className="card-title fw-bold">
          {titulo}
        </h4>

        <p className="text-muted">
          {descripcion}
        </p>

      </div>
    </motion.div>
  );
}

export default ContenidoCard;
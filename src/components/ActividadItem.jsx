import { useState } from "react";
import { motion } from "framer-motion";

function ActividadItem({ actividad }) {
  const [completada, setCompletada] = useState(false);

  return (
    <motion.div
      className="card shadow-sm border-0 h-100"
      whileHover={{ scale: 1.03 }}
    >
      <div className="card-body">
        <h5>{actividad}</h5>

        <p>
          Estado{" "}
          {completada ? (
            <span className="text-success fw-bold">Completada</span>
          ) : (
            <span className="text-warning fw-bold">Pendiente</span>
          )}
        </p>

        <button
          className={completada ? "btn btn-success" : "btn btn-outline-success"}
          onClick={() => setCompletada(!completada)}
        >
          {completada ? "Marcar Pendiente" : "Marcar Completada"}
        </button>
      </div>
    </motion.div>
  );
}

export default ActividadItem;

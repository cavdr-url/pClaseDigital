import { useState } from "react";
import { motion } from "framer-motion";

function EvaluacionCard() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    alert(
      `Evaluación registrada\n\nNombre: ${nombre}\nCorreo: ${correo}`
    );
  };

  return (
    <motion.div
      className="card shadow-sm border-0"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body p-4">

        <h3 className="card-title text-success mb-4">
          <i className="bi bi-clipboard-check me-2"></i>
          Evaluación Diagnóstica
        </h3>

        <form onSubmit={enviarFormulario}>

          <div className="mb-3">
            <label className="form-label">
              Nombre completo
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Correo electrónico
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) =>
                setCorreo(e.target.value)
              }
              required
            />
          </div>

          <div className="alert alert-info">

            <strong>Próximamente:</strong>

            <br />

            Las preguntas se cargarán desde
            NocoDB y los resultados se
            almacenarán automáticamente
            para el seguimiento del progreso
            del estudiante.

          </div>

          <motion.button
            type="submit"
            className="btn btn-success"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-send-check me-2"></i>
            Iniciar Evaluación
          </motion.button>

        </form>

      </div>
    </motion.div>
  );
}

export default EvaluacionCard;
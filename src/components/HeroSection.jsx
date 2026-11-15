import { motion } from "framer-motion";
import logoGSheets from "../assets/logoGSheets.svg";

function HeroSection() {
  return (
    <motion.section
      className="bg-light rounded-4 shadow-sm p-5 mb-5"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row align-items-center">

        <div className="col-lg-4 text-center">

          <motion.img
            src={logoGSheets}
            alt="Google Sheets"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
            whileHover={{
              scale: 1.08,
              rotate: 3
            }}
            transition={{
              type: "spring",
              stiffness: 300
            }}
          />

        </div>

        <div className="col-lg-8">

          <motion.h1
            className="display-5 fw-bold text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Tipos de Datos en Google Sheets
          </motion.h1>

          <motion.p
            className="lead text-muted mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Aprende a identificar, diferenciar y utilizar
            correctamente los tipos de datos más importantes
            dentro de Google Sheets mediante recursos digitales,
            ejercicios prácticos y una evaluación interactiva.
          </motion.p>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >

            <span className="badge bg-success me-2 p-2">
              Texto
            </span>

            <span className="badge bg-primary me-2 p-2">
              Numérico
            </span>

            <span className="badge bg-warning text-dark me-2 p-2">
              Fecha
            </span>

            <span className="badge bg-info text-dark me-2 p-2">
              Hora
            </span>

            <span className="badge bg-danger p-2">
              Operadores
            </span>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default HeroSection;
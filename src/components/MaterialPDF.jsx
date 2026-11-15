import { motion } from "framer-motion";

function MaterialPDF() {

  const descargarPDF = () => {
    window.open("/pdf/02. TIPOS DE DATOS.pdf", "_blank");
  };

  return (
    <motion.div
      id="pdf"
      className="card border-danger shadow-sm"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-body p-4">

        <div className="row align-items-center">

          <div className="col-md-3 text-center">

            <motion.i
              className="bi bi-file-earmark-pdf-fill text-danger"
              style={{
                fontSize: "5rem"
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5
              }}
            />

          </div>

          <div className="col-md-9">

            <h3 className="text-danger">
              Libro Digital
            </h3>

            <p className="text-muted mb-3">
              Descarga el material de apoyo para aprender
              sobre los tipos de datos en Google Sheets.
              Este recurso contiene explicaciones,
              ejemplos prácticos y ejercicios para reforzar
              los conocimientos adquiridos durante la clase.
            </p>

            <ul className="list-group mb-3">

              <li className="list-group-item">
                ✅ Datos de texto
              </li>

              <li className="list-group-item">
                ✅ Datos numéricos
              </li>

              <li className="list-group-item">
                ✅ Fechas y horas
              </li>

              <li className="list-group-item">
                ✅ Operadores
              </li>

            </ul>

            <motion.button
              className="btn btn-danger"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={descargarPDF}
            >
              <i className="bi bi-download me-2"></i>
              Descargar PDF
            </motion.button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default MaterialPDF;
import { motion } from "framer-motion";

function IndiceContenido() {
  const temas = [
    {
      tiempo: "00:55",
      tema: "Cambiar formato regional",
    },
    {
      tiempo: "01:21",
      tema: "Datos numéricos",
    },
    {
      tiempo: "05:08",
      tema: "Tipos de datos",
    },
    {
      tiempo: "07:35",
      tema: "Datos de texto",
    },
    {
      tiempo: "10:20",
      tema: "Fechas y horas",
    },
    {
      tiempo: "13:45",
      tema: "Operadores",
    },
  ];

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

        <div className="list-group">

          {temas.map((item, index) => (
            <motion.div
              key={index}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#f8f9fa",
              }}
            >
              <span>
                {item.tema}
              </span>

              <span className="badge bg-success">
                {item.tiempo}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.div>
  );
}

export default IndiceContenido;
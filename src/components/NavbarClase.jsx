import { motion } from "framer-motion";

function NavbarClase() {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-success shadow sticky-top"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">

        <a className="navbar-brand fw-bold" href="#inicio">
          <i className="bi bi-file-earmark-spreadsheet-fill me-2"></i>
          Plan de Clase Digital
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarPrincipal"
          aria-controls="navbarPrincipal"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarPrincipal"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#objetivos">
                Objetivos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contenido">
                Contenido
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pdf">
                PDF
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#video">
                Video
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#actividades">
                Actividades
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#evaluacion">
                Evaluación
              </a>
            </li>

          </ul>
        </div>

      </div>
    </motion.nav>
  );
}

export default NavbarClase;
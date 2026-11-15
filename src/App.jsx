import { useState } from "react";
import "./App.css";

import NavbarClase from "./components/NavbarClase";
import HeroSection from "./components/HeroSection";
import DescripcionProyecto from "./components/DescripcionProyecto";
import ObjetivosCard from "./components/ObjetivosCard";
import ContenidoCard from "./components/ContenidoCard";
import MaterialPDF from "./components/MaterialPDF";
import VideoTutorial from "./components/VideoTutorial";
import IndiceContenido from "./components/IndiceContenido";
import ActividadItem from "./components/ActividadItem";
import EvaluacionCard from "./components/EvaluacionForm";
import Footer from "./components/Footer";

function App() {
  const [videoTime, setVideoTime] = useState(0);

  return (
    <>
      <NavbarClase />

      <div className="container py-4">

        {/* HERO */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* DESCRIPCIÓN */}
        <section className="mb-5">
          <DescripcionProyecto />
        </section>

        {/* OBJETIVOS */}
        <section
          id="objetivos"
          className="mb-5"
        >
          <ObjetivosCard
            competencia="Identificar y utilizar correctamente los diferentes tipos de datos dentro de Google Sheets para organizar información y realizar operaciones básicas."
            indicadorLogro="Reconoce y diferencia datos de texto, numéricos, fecha, hora y operadores en ejercicios prácticos."
          />
        </section>

        {/* CONTENIDO */}
        <section
          id="contenido"
          className="mb-5"
        >
          <h2 className="mb-4 text-success">
            <i className="bi bi-book me-2"></i>
            Contenido del Curso
          </h2>

          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <ContenidoCard
                icono="📝"
                titulo="Texto"
                descripcion="Datos formados por letras, palabras, símbolos y caracteres utilizados para almacenar información descriptiva."
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ContenidoCard
                icono="🔢"
                titulo="Numérico"
                descripcion="Valores que permiten realizar cálculos matemáticos y operaciones dentro de Google Sheets."
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ContenidoCard
                icono="📅"
                titulo="Fecha"
                descripcion="Datos utilizados para representar días, meses y años en formatos reconocidos por la hoja de cálculo."
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ContenidoCard
                icono="🕒"
                titulo="Hora"
                descripcion="Valores destinados a representar horarios y períodos de tiempo específicos."
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ContenidoCard
                icono="➕"
                titulo="Operadores"
                descripcion="Símbolos utilizados para realizar operaciones matemáticas y comparaciones entre datos."
              />
            </div>

          </div>
        </section>

        {/* PDF */}
        <section className="mb-5">
          <MaterialPDF />
        </section>

        {/* VIDEO + ÍNDICE */}
        <section id="video" className="mb-5">

          <h2 className="mb-4 text-success">
            <i className="bi bi-play-circle me-2"></i>
            Recursos Multimedia
          </h2>

          <div className="row g-4">

            <div className="col-lg-8">
              <VideoTutorial currentTime={videoTime} />
            </div>

            <div className="col-lg-4">
              <IndiceContenido onSelectTime={setVideoTime} />
            </div>

          </div>

        </section>

        {/* ACTIVIDADES */}
        <section
          id="actividades"
          className="mb-5"
        >

          <h2 className="mb-4 text-success">
            <i className="bi bi-list-check me-2"></i>
            Actividades de Aprendizaje
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <ActividadItem
                actividad="Leer el material PDF"
              />
            </div>

            <div className="col-md-4">
              <ActividadItem
                actividad="Visualizar el videotutorial"
              />
            </div>

            <div className="col-md-4">
              <ActividadItem
                actividad="Resolver la evaluación"
              />
            </div>

          </div>

        </section>

        {/* EVALUACIÓN */}
        <section
          id="evaluacion"
          className="mb-5"
        >
          <EvaluacionCard />
        </section>

        <Footer />

      </div>
    </>
  );
}

export default App;
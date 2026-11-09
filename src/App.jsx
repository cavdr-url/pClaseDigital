import { useState } from 'react'
import './App.css'
import logoGSheets from './assets/logoGSheets.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center>
        <h1 className="mt-4">Plan de Clase Digital</h1>
      </center>
      <div className="container mt-4">
        {/* Tu icono ahora cargará de manera local y ultra rápida */}
        <p className="subtitle h5">
          <i className="bi bi-info-circle text-primary me-2"></i> 
          Descripción del Plan de Clase Digital
        </p>
        <div className="text-justify text-muted">
          Mi proyecto de clase digital (prototipo) consistirá en mostrar los diferentes tipos de datos en Google Sheets, otorgándole al estudiante recursos digitales como un libro en formato PDF con información del tema, un videotutorial (de Aulaenlanube) y un pequeño test. 
          El libro digital servirá como apoyo de lectura y se podrá descargar directamente desde este plan de clase. Por otro lado, el videotutorial estará incrustado dentro del sitio web con marcas de tiempo (índice de contenidos) para que los alumnos encuentren la información relevante de forma rápida al momento de realizar el ejercicio descrito en el PDF. 
          Para esto, haré uso de NocoDB con el fin de almacenar tanto las marcas de tiempo como el enlace del video; de esta manera, se asegura que el recurso siempre esté disponible y sea fácil de actualizar en caso de que el video de YouTube sea modificado o reemplazado. 
          El test guardará el progreso y el resultado del usuario en otra tabla de la misma base de datos de NocoDB, la cual servirá como indicador para la calificación. Esta sección la programaré con el apoyo de Inteligencia Artificial para asegurar la implementación de las mejores prácticas de desarrollo. 
          Por último, las preguntas y respuestas de la prueba estarán almacenadas en una tabla independiente llamada "Evaluación".
        </div>
        <div className="text-center mt-4">
          <img src={logoGSheets} alt="Logo de Google Sheets" className="img-fluid" width={250} onClick={() => {setCount(count + 1);}} />
          <p className="mt-2">Has hecho clic en el logo {count} veces.</p>
        </div>
      </div>
    </>  
  )
}

export default App

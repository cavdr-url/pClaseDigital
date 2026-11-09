## PROYECTO: PLAN DE CLASE DIGITAL
Mi proyecto de clase digital (prototipo) consistirá en mostrar los diferentes tipos de datos en Google Sheets, otorgándole al estudiante recursos digitales como un libro en formato PDF con información del tema, un videotutorial (de Aulaenlanube) y un pequeño test. 
<br>
El libro digital servirá como apoyo de lectura y se podrá descargar directamente desde este plan de clase. Por otro lado, el videotutorial estará incrustado dentro del sitio web con marcas de tiempo (índice de contenidos) para que los alumnos encuentren la información relevante de forma rápida al momento de realizar el ejercicio descrito en el PDF. 
<br>
Para esto, haré uso de NocoDB con el fin de almacenar tanto las marcas de tiempo como el enlace del video; de esta manera, se asegura que el recurso siempre esté disponible y sea fácil de actualizar en caso de que el video de YouTube sea modificado o reemplazado. 
<br>
El test guardará el progreso y el resultado del usuario en otra tabla de la misma base de datos de NocoDB, la cual servirá como indicador para la calificación. Esta sección la programaré con el apoyo de Inteligencia Artificial para asegurar la implementación de las mejores prácticas de desarrollo. Por último, las preguntas y respuestas de la prueba estarán almacenadas en una tabla independiente llamada "Evaluación".
// Datos de ejemplo de calificaciones
const calificaciones = [
    [5.5, 8.6, 10],
    [8.0, 5.5, 10],
    [9.0, 4.1, 7.8],
    [10, 2.2, 8.1],
    [7.0, 9.0, 7.1],
    [9.0, 4.0, 6.0],
    [6.5, 5.0, 5.0],
    [8.0, 9.0, 10],
    [9.0, 8.1, 9.2],
    [9.0, 4.6, 7.5]
];
// Llenar la tabla con las calificaciones
function mostrarCalificaciones() {
    const tablaCuerpo = document.querySelector('#calificaciones-table tbody');
    tablaCuerpo.innerHTML = ''; // Limpiar contenido previo
    calificaciones.forEach((alumno, index) => {
        const fila = document.createElement('tr');
        const columnaAlumno = document.createElement('td');
        columnaAlumno.textContent = `Alumno ${index + 1}`;
        fila.appendChild(columnaAlumno);
        alumno.forEach(nota => {
            const columnaNota = document.createElement('td');
            columnaNota.textContent = nota.toFixed(1);
            fila.appendChild(columnaNota);
        });
        tablaCuerpo.appendChild(fila);
    });
}
// Función para calcular los resultados
function caclularResultados() {
    const promedios = calificaciones.map(alumno => alumno.reduce((a, b) => a + b, 0) / alumno.length);
    const promedioMasAlto = Math.max(...promedios);
    const promedioMasBajo = Math.min(...promedios);
    const cantidadReprobados = promedios.filter(promedio => promedio < 7).length;
    // Distribución de calificaciones
    const distribucion = {
        "0-5.9": 0,
        "6.0-6.9": 0,
        "7.0-7.9": 0,
        "8.0-8.9": 0,
        "9.0-10": 0
    };
    promedios.forEach(promedio => {
        if (promedio >= 0 && promedio <= 5.9)
            distribucion["0-5.9"]++;
        else if (promedio >= 6.0 && promedio <= 6.9)
            distribucion["6.0-6.9"]++;
        else if (promedio >= 7.0 && promedio <= 7.9)
            distribucion["7.0-7.9"]++;
        else if (promedio >= 8.0 && promedio <= 8.9)
            distribucion["8.0-8.9"]++;
        else if (promedio >= 9.0 && promedio <= 10.0)
            distribucion["9.0-10"]++;
    });
    // Mostrar resultados
    const resultados = `
        <p class="result-item">Promedios: ${promedios.join(', ')}</p>
        <p class="result-item">Promedio más alto: ${promedioMasAlto}</p>
        <p class="result-item">Promedio más bajo: ${promedioMasBajo}</p>
        <p class="result-item">Cantidad de reprobados: ${cantidadReprobados}</p>
        <p class="result-item">Distribución de calificaciones finales 0-5.9: ${distribucion["0-5.9"]}, 6.0-6.9: ${distribucion["6.0-6.9"]}, 7.0-7.9: ${distribucion["7.0-7.9"]}, 8.0-8.9: ${distribucion["8.0-8.9"]}, 9.0-10: ${distribucion["9.0-10"]}</p>
    `;
    document.getElementById('resultados').innerHTML = resultados;
}
// Inicializar la tabla de calificaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarCalificaciones();
    document.getElementById('calcular-button').addEventListener('click', caclularResultados);
});

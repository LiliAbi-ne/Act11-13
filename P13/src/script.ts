
type Calificaciones = number[][];


const calificaciones: Calificaciones = [
    [5.5, 8.6, 10],
    [8.0, 5.5, 10],
    [9.0, 4.1, 7.8],
    [10, 2.2, 8.1],
    [7.0, 9.4, 7.1],
    [6.5, 5.0, 5.0],
    [9.0, 10.0, 9.0],
    [4.0, 7.0, 4.0],
    [10, 9.0, 9.2],
    [9.0, 4.6, 7.5]
];

// Función para calcular los resultados
function calcularResultados(): void {
    const promedios: number[] = calificaciones.map(alumno => alumno.reduce((a, b) => a + b, 0) / alumno.length);
    const promedioMasAlto: number = Math.max(...promedios);
    const promedioMasBajo: number = Math.min(...promedios);
    const cantidadReprobados: number = promedios.filter(promedio => promedio < 7).length;

    // Distribución de calificaciones
    const distribucion = {
        "0-5.9": 0,
        "6.0-6.9": 0,
        "7.0-7.9": 0,
        "8.0-8.9": 0,
        "9.0-10": 0
    };

    promedios.forEach(promedio => {
        if (promedio >= 0 && promedio <= 5.9) distribucion["0-5.9"]++;
        else if (promedio >= 6.0 && promedio <= 6.9) distribucion["6.0-6.9"]++;
        else if (promedio >= 7.0 && promedio <= 7.9) distribucion["7.0-7.9"]++;
        else if (promedio >= 8.0 && promedio <= 8.9) distribucion["8.0-8.9"]++;
        else if (promedio >= 9.0 && promedio <= 10.0) distribucion["9.0-10"]++;
    });

    
    const resultados = `
        <p class="result-item"><span>Promedios por alumno:</span> ${promedios.map(p => p.toFixed(2)).join(', ')}</p>
        <p class="result-item"><span>Promedio más alto:</span> ${promedioMasAlto.toFixed(2)}</p>
        <p class="result-item"><span>Promedio más bajo:</span> ${promedioMasBajo.toFixed(2)}</p>
        <p class="result-item"><span>Cantidad de reprobados:</span> ${cantidadReprobados}</p>
        <p class="result-item"><span>Distribución de calificaciones finales:</span></p>
        <ul class="result-item">
            <li><span>0-5.9:</span> ${distribucion["0-5.9"]}</li>
            <li><span>6.0-6.9:</span> ${distribucion["6.0-6.9"]}</li>
            <li><span>7.0-7.9:</span> ${distribucion["7.0-7.9"]}</li>
            <li><span>8.0-8.9:</span> ${distribucion["8.0-8.9"]}</li>
            <li><span>9.0-10:</span> ${distribucion["9.0-10"]}</li>
        </ul>
    `;
    const resultadosElement: HTMLElement | null = document.getElementById('resultados');
}

// Función para inicializar el evento
function inicializar(): void {
    const button: HTMLElement | null = document.getElementById('calcular-button');
}

// Inicializamos el evento cuando se carga el DOM
document.addEventListener('DOMContentLoaded', inicializar);

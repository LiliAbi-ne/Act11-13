document.getElementById('generarMatrizBtn').addEventListener('click', () => generarMatrizRecursiva(5, 10));
function generarMatrizRecursiva(filas, columnas, i = 0, j = 0, matriz = []) {
    const matrizContainer = document.getElementById('matriz-container');
    if (i === 0 && j === 0) {
        matrizContainer.innerHTML = ''; 
        matriz = Array(filas).fill(null).map(() => Array(columnas).fill(0));
    }
    if (i >= filas) {
        calcularResultados(matriz, 0, 0, [], [], [], []);
        return;
    }
    const input = document.createElement('input');
    input.type = 'number';
    input.value = Math.floor(Math.random() * 100).toString();
    matrizContainer.appendChild(input);
    matriz[i][j] = parseFloat(input.value);
    if (j < columnas - 1) {
        generarMatrizRecursiva(filas, columnas, i, j + 1, matriz);
    }
    else {
        generarMatrizRecursiva(filas, columnas, i + 1, 0, matriz);
    }
}
function calcularResultados(matriz, i, j, sumaFilas, promedioFilas, sumaColumnas, promedioColumnas) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    if (i >= filas) {
        mostrarResultados(sumaFilas, promedioFilas, sumaColumnas, promedioColumnas, 0, 0);
        return;
    }
    if (j === 0) {
        const sumaFila = matriz[i].reduce((acc, curr) => acc + curr, 0);
        sumaFilas.push(sumaFila);
        promedioFilas.push((sumaFila / columnas).toFixed(2));
        let sumaColumna = 0;
        for (let x = 0; x < filas; x++) {
            sumaColumna += matriz[x][i];
        }
        sumaColumnas.push(sumaColumna);
        promedioColumnas.push((sumaColumna / filas).toFixed(2));
    }
    calcularResultados(matriz, i + 1, 0, sumaFilas, promedioFilas, sumaColumnas, promedioColumnas);
}
function mostrarResultados(sumaFilas, promedioFilas, sumaColumnas, promedioColumnas, fila, columna) {
    if (fila >= sumaFilas.length && columna >= sumaColumnas.length)
        return;
    const sumaFilasDiv = document.getElementById('suma-filas');
    const promedioFilasDiv = document.getElementById('promedio-filas');
    const sumaColumnasDiv = document.getElementById('suma-columnas');
    const promedioColumnasDiv = document.getElementById('promedio-columnas');
    sumaFilasDiv.innerHTML = sumaFilas.join(', ');
    promedioFilasDiv.innerHTML = promedioFilas.join(', ');
    sumaColumnasDiv.innerHTML = sumaColumnas.join(', ');
    promedioColumnasDiv.innerHTML = promedioColumnas.join(', ');
}

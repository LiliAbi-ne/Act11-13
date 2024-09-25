const ventas = [
    [5, 16, 10, 12, 24],
    [40, 55, 10, 11, 18],
    [35, 22, 11, 15, 20],
    [50, 70, 11, 12, 25],
    [80, 90, 22, 20, 29],
    [100, 50, 22, 25, 30],
    [50, 40, 22, 30, 25],
    [20, 30, 12, 18, 50],
    [30, 60, 22, 25, 25],
    [20, 80, 24, 25, 20],
    [50, 33, 10, 15, 82],
    [40, 46, 15, 16, 22]
];
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
// Recursividad para encontrar la mayor venta
function encontrarMayorVenta(mes = 0, dia = 0, max = { valor: -Infinity, mes: 0, dia: 0 }) {
    if (mes === ventas.length)
        return max;
    if (ventas[mes][dia] > max.valor) {
        max = { valor: ventas[mes][dia], mes, dia };
    }
    if (dia < ventas[mes].length - 1) {
        return encontrarMayorVenta(mes, dia + 1, max);
    }
    else {
        return encontrarMayorVenta(mes + 1, 0, max);
    }
}
// Recursividad para encontrar la menor venta
function encontrarMenorVenta(mes = 0, dia = 0, min = { valor: Infinity, mes: 0, dia: 0 }) {
    if (mes === ventas.length)
        return min;
    if (ventas[mes][dia] < min.valor) {
        min = { valor: ventas[mes][dia], mes, dia };
    }
    if (dia < ventas[mes].length - 1) {
        return encontrarMenorVenta(mes, dia + 1, min);
    }
    else {
        return encontrarMenorVenta(mes + 1, 0, min);
    }
}
// Recursividad para calcular la venta total
function calcularVentaTotal(mes = 0, dia = 0, total = 0) {
    if (mes === ventas.length)
        return total;
    total += ventas[mes][dia];
    if (dia < ventas[mes].length - 1) {
        return calcularVentaTotal(mes, dia + 1, total);
    }
    else {
        return calcularVentaTotal(mes + 1, 0, total);
    }
}
function ventasPorDia(dia, mes = 0, suma = 0) {
    if (mes === ventas.length)
        return suma;
    suma += ventas[mes][dia];
    return ventasPorDia(dia, mes + 1, suma);
}
function mostrarResultados() {
    const mayor = encontrarMayorVenta();
    const menor = encontrarMenorVenta();
    const total = calcularVentaTotal();
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Mayor venta: ${mayor.valor}, Mes: ${mayor.mes + 1}, Día: ${diasSemana[mayor.dia]}</p>
        <p>Menor venta: ${menor.valor}, Mes: ${menor.mes + 1}, Día: ${diasSemana[menor.dia]}</p>
        <p>Venta total: ${total}</p>
    `;
    diasSemana.forEach((dia, index) => {
        const sumaDia = ventasPorDia(index);
        resultadosDiv.innerHTML += `<p>${dia}: $${sumaDia}</p>`;
    });
    const tabla = document.getElementById('ventas-table');
    tabla.innerHTML = '';
    ventas.forEach((fila) => {
        const filaHTML = document.createElement('tr');
        fila.forEach((venta) => {
            const celda = document.createElement('td');
            celda.textContent = venta.toString();
            filaHTML.appendChild(celda);
        });
        tabla.appendChild(filaHTML);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('calcular-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarResultados);
});

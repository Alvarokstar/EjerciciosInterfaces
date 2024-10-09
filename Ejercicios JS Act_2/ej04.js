function calcularDescuento(precioOriginal, porcentajeDescuento) {
    const descuento = (precioOriginal * porcentajeDescuento) / 100;
    return precioOriginal - descuento;
}

function aplicarDescuento() {
    const precioOriginal = parseFloat(prompt("Inserta el precio original del producto:"));
    const porcentajeDescuento = parseFloat(prompt("Inserta el porcentaje de descuento a aplicar:"));

    const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento);
    console.log(`El precio final del producto después de aplicar un descuento del ${porcentajeDescuento}% es: ${precioFinal.toFixed(2)} euros.`);
}

aplicarDescuento();

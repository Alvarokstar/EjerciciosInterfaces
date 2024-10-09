function calcularGastosViaje() {
    const alojamiento = parseFloat(prompt("Gastos de alojamiento (€):"));
    const alimentacion = parseFloat(prompt("Gastos de alimentación (€):"));
    const entretenimiento = parseFloat(prompt("Gastos de entretenimiento (€):"));

    const total = alojamiento + alimentacion + entretenimiento;
    console.log(`El coste total del viaje es: ${total.toFixed(2)}€`);
}

calcularGastosViaje();

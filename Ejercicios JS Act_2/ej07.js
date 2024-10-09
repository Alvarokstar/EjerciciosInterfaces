function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertirTemperatura() {
    const tipoConversion = parseInt(prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):"));
    const temperatura = parseFloat(prompt("Inserta la temperatura a convertir:"));

    if (tipoConversion === 1) {
        const fahrenheit = celsiusAFahrenheit(temperatura);
        console.log(`${temperatura} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
    } else if (tipoConversion === 2) {
        const celsius = fahrenheitACelsius(temperatura);
        console.log(`${temperatura} grados Fahrenheit equivalen a ${celsius.toFixed(2)} grados Celsius.`);
    } else {
        console.log("Tipo de conversión no válida.");
    }
}

convertirTemperatura();

function calculateFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

function factorial() {
    const number = parseInt(prompt("Inserta un número entero no negativo:"));
    if (number < 0) {
        console.log("Por favor, inserta un número no negativo.");
        return;
    }

    const resultado = calculateFactorial(number);
    console.log(`El factorial de ${number} es: ${resultado}.`);
}

factorial();

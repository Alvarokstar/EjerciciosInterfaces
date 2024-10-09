function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function numerosPrimos() {
    const num1 = parseInt(prompt("Inserta el primer número:"));
    const num2 = parseInt(prompt("Inserta el segundo número:"));
    const primos = [];

    for (let i = num1; i <= num2; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    console.log(`Los números primos entre ${num1} y ${num2} son: ${primos.join(", ")}.`);
}

numerosPrimos();

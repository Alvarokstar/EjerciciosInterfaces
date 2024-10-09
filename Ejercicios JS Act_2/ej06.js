function fibonacci(n) {
    const secuencia = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        secuencia.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }

    return secuencia;
}

function generarFibonacci() {
    const n = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));
    const secuencia = fibonacci(n);
    console.log(`Los primeros ${n} términos de la secuencia Fibonacci son: ${secuencia.join(", ")}.`);
}

generarFibonacci();

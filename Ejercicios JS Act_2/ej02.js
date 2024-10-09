function edadCanina() {
    const edadPerro = parseInt(prompt("Edad del perro (años):"));
    const edadHumana = edadPerro * 7;

    console.log(`La edad del perro en años humanos es: ${edadHumana} años.`);
}

edadCanina();


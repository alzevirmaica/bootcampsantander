function tabuada(numero) {
    const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    multiplicadores.forEach((multiplicador) => {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
  });
}

tabuada(7)


function numeroPar() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numerospares = []

    numeros.forEach(n => {
        if(n % 2 === 0) {
            numerospares.push(n)
        }
    })

    return numerospares

}

console.log(numeroPar())
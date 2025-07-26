/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1-Preço do combustível;
2-Gasto médio de combustível do carro por KM;
3-Distância em KM da viagem.
*/

const precoCombustivel = 5.79
const kmPorLitros = 5.79
const distanciaEmKm = 100

function calcularLitrosConsumidos(distancia, consumo) {
    return distancia / consumo;
}

function calcularValorGasto(distancia, consumo, preco) {
    const litros = calcularLitrosConsumidos(distancia, consumo);
    return litros * preco;
}

const litros = calcularLitrosConsumidos(distanciaEmKm, kmPorLitros);
const gasto = calcularValorGasto(distanciaEmKm, kmPorLitros, precoCombustivel);

console.log(`Litros consumidos: ${litros.toFixed(2)}`);
console.log(`Valor gasto: R$ ${gasto.toFixed(2)}`);
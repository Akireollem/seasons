// Outono: 20 de março de 2021, às 06h38;
// Inverno: 21 de junho de 2021, às 00h32;
// Primavera: 22 de setembro de 2021, às 16h21;
// Verão: 21 de dezembro de 2021, às 12h59.

const miliParaDias = 24 * 60 * 60 * 1000; // calculo que transforma os milisegundos em dias
const ano = new Date().getFullYear(); //puxa o ano 
const verao = new Date(`12-21-${ano}`);
const outono = new Date(`03-20-${ano}`);
const inverno = new Date(`06-21-${ano}`);
const primavera = new Date(`09-22-${ano}`);


const hoje = new Date(); //dia de hoje
let estacao; 
let genero;
let diferenca;
let cor;


function calcularDiferenca(estc, totalDeDiasDaEstacao) {
    return totalDeDiasDaEstacao - (Math.floor(hoje/miliParaDias) - Math.floor(estc/miliParaDias)) + 1;
}

if (hoje >= verao || hoje < outono) { 
    estacao = `verão`
    genero = 'o'
    diferenca = calcularDiferenca(verao, 92);
    cor = `#ffe999`
} else if (hoje >= outono && hoje < inverno) {
    estacao = `outono`
    genero = 'o'
    diferenca = calcularDiferenca(outono, 92);
    cor = `#fe750c`
} else if (hoje >= inverno && hoje < primavera) {
    estacao = `inverno`
    genero = 'o'
    diferenca = calcularDiferenca(inverno, 92);
    cor = `#1a346e`
} else {
    estacao = `primavera`
    genero = 'a'
    diferenca = calcularDiferenca(primavera, 89);
    cor = `#68a3bf`
}

const span = document.getElementById(`estacoes`);
span.innerText = `n${genero} ${estacao}`;

const mensagem = document.getElementById(`msg`);
// ternario para verificar se a variavel diferenca é diferente de 1 
mensagem.innerText = `Falta${diferenca !== 1 ? 'm' : ''} ${diferenca} dia${diferenca !== 1 ? 's' : ''} para acabar ${genero} ${estacao}.`;

const img = document.getElementById(estacao);
img.style.display = 'block';

const body = document.body
body.style.background = cor









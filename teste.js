// console.log(diaAtual)

// if (mesAtual < mesAniversario) {
//     console.log('eu ainda nao fiz aniversario')
//     // quantos meses faltam para o meu aniversario?
//     // se o mes atual é 8 e eu faço dia 10, entao faltam 2 meses (10 - 8)
//     console.log(`eu tenho ${(anoAtual - anoNascimento) - 1 } anos e faltam ${(mesAniversario + 1) - (mesAtual + 1)} meses para o meu aniversario`)
// } else {
//     console.log('Eu ja fiz aniversario')
//     // ja fazem 2 meses que eu fiz aniversariom, porque eu fiz aniversario no mes 6 e estamos no mes 8 ( mes 8 - mes 6)
//     console.log(`Eu tenho ${anoAtual - anoNascimento} anos e ja fezem ${(mesAtual + 1) - (mesAniversario + 1)} meses que eu fiz aniversario`)
// };

// // dito isso: eu ja vivi:
// // 23 anos (2025 - 2002)
// // 2 meses (mes 8 - mes 6)
// // e 14 dias (que é igual a quantidade de dias que se passaram depois deste mes)
// //
// // logicamente falando:

// console.log(`
//     Eu tenho ${anoAtual - anoNascimento} anos, ${(mesAtual + 1) - (mesAniversario + 1)} meses e ${diaAtual} dias de vida.`);

// // agora, digamos que eu faça aniversario dia 04/12/1996, entao, eu tenho 28 anos, 8 meses ( fazem 8 meses desde o meu anniversaro)

// console.log((12 - 8) - 12)


// dia atual - dia aniversaio


// se o dia passou do dia 13 entao o "mes" estta completto, e apartir dele comeca a contar de 1 atté o proimo dia 13

const meuAniversario = new Date(2002, 5, 13);
const dataAtual = new Date();

const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth();
const diaAtual = dataAtual.getDate()

const anoNascimento = meuAniversario.getFullYear();
const mesAniversario = meuAniversario.getMonth();
const diaAniversario = meuAniversario.getDate()

let resultadoAno
let resultadoMes
let resultadoDia


if (mesAtual > mesAniversario) {
    resultadoAno = anoAtual - anoNascimento
}

if (mesAtual === mesAniversario) {
    if (diaAtual >= diaAniversario &&) {
        resultadoAno = anoAtual - anoNascimento
    } else {
        resultadoAno = (anoAtual - anoNascimento) - 1
    }
}

if (mesAtual < mesAniversario) {
    resultadoAno = (anoAtual - anoNascimento) - 1
}

if ( diaAtual >= diaAniversario) {
    resultadoMes = mesAtual - mesAniversario + 1
} else {
    resultadoMes = ((mesAtual - mesAniversario) - 1) + 1
}

if (resultadoMes < 0) resultadoMes += 12


if (diaAtual >= diaAniversario) {
    resultadoDia = diaAtual - diaAniversario
} else {
    resultadoDia = quantosDiasTemNoMes(mesAtual - 1) - (diaAniversario - diaAtual)
}

console.log(`${resultadoAno} anos, ${resultadoMes} meses e ${resultadoDia} dias`)



function quantosDiasTemNoMes(mes) {
    if (mes < 0) return 11

    if (mes === 1) { return 28 }

    if (mes === 3 || mes === 5 || mes === 8 || mes === 10 ) { return 30 }

    return 31
}

//Valores avalidos como falsos:
/* 
FALSY VALUES
false(literalmente falso)
0
`` "" '' (strings vazias)
null/undefined
Nan
QUALQUER COISA DIFERENTE DISSO, AVALIA EM TRUE NO JAVASCRIPT
*/
//Quando a avaliacao possui apenas valores true, o ultimo valor eh retornado
// console.log("Rafael" && "Ingrid")
//Se encontrar valor false, retorna o valor false
console.log("Rafael" && `` && "Ingrid")
// Aplicacao pratica: caso eu queria chamar uma funcao que retorna Oi, apenas se uma variavel 'falaoi' for true?

function falaOi() {
  return console.log("Oi")
}

let podeFalarOi

podeFalarOi && falaOi()
/*
Operador logico OR retorna o primeiro valor verdadeiro da comparacao
*/
const A = NaN
const B = false
const C = 0
const D = ""
const E = "false"
console.log(A || B || C || D || E)

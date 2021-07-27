// Aula sobre if, else if e else parte 2;
const number = 10
if (number <= 10) {
  console.log("O numero eh menor ou igual a 10")
} else if (number >= 0 && number <= 5) {
  console.log("O numero esta entre 0 e 5!")
} else if (number >= 6 && number <= 8) {
  /* 
    O primeiro valor verdadeiro de uma condicao else if(ou if) eh considerado  como absoluto, ou seja, caso a condicao 
    seja suprida, codigo ira parar nessa condicao
    */
  console.log("O numero esta entre 6 e 8*")
} else if (number >= 9 && number <= 11) {
  console.log("O numero esta entre 9 e 11")
} else {
  console.log("O numero nao esta entre 0 e 11")
}
console.log("...default values apears here")

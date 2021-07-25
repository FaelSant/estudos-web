// const souUmDado = function () {
//   console.log("Sim, eu sou uma variavel recebendo uma função");
// };
// function recebeFuncao(funcao) {
//   console.log("Posso executar uma funcao passada: ");
//   funcao();
// }

// recebeFuncao(souUmDado);

// const funcObj = {
//   falar: function faladora() {
//     console.log("Deve ta falando...");
//   },
// };
// funcObj.falar();

// Quando a função é declarada como function, é possivel utilizar o arguments que seria um objeto que armazena todas os argumentos que são passados pra essa função. Ex:

// function funcao() {
//   console.log("Esses são os argumentos passados: ", arguments);
// }
// os argumentos passados vão assumir as variaveis criadas como argumentos na função, de forma ordenada. Ex: se foi passado 1,2,3 para função e as variaveis da função são a,b,c, então a = 1, b = 2 e c = 3; Também é possível declarar um valor padrão para o argumento
// function funcao(a, b = 1, c = 2) {
//   console.log(a + b + c);
// }
// funcao(1, undefined, 7);

//posso receber valores na função por meio de desestruturação de objetos ou array:
// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1 + valor2 + valor3 + arguments[0][3]);
//   console.log("Argumentos", arguments);
// }
// funcao([1, 2, 4, 5]);
// Eu posso fazer uma variavel declarada como parametro receber todo o resto passado para os argumentos;
// function conta(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === "+") acumulador += numero;
//     if (operador === "-") acumulador -= numero;
//     if (operador === "/") acumulador /= numero;
//     if (operador === "*") acumulador *= numero;
//   }
//   console.log(acumulador);
// }
// conta("*", 1, 1, 2, 3);

// function criaMultiplicador(multiplicador) {
//   console.log("multiplicador: ", multiplicador);
//   return function (n) {
//     console.log("n: ", n);
//     return n * multiplicador;
//   };
// }
// const duplica = criaMultiplicador(2);

// console.log(duplica(10));

// function retornaFuncao() {
//   const name = "Rafael";
//   return function () {
//     return name;
//   };
// }
// const funcao = retornaFuncao();

// console.dir(funcao);
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;

  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Olá mundo!");
//     });
//   });
// });

f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Olá mundo!");
}

// IIEF

// (function () {
//   const nome = "Rafael";
//   console.log("Feito", nome);
// })();
// const nome = "Ingrid";

// console.log("Nome fora da função: ", nome);

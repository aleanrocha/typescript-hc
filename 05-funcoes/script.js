"use strict";
// FUNÇÕES
// 01 - Função sem retorno
// Podemos ter funções que não retornam valores e nesse caso utilizamos o VOID
console.log('\n----------------------- Função sem Retorno -----------------------');
function whithoutReturn() {
    console.log('Função sem retorno!');
}
whithoutReturn();
console.log('----------------------- ------------------ -----------------------\n');
// 02 - Callback como argumento
// Podemos inserir uma função de callback como argumento de função
// Nela conseguimos definir o tipo de argumento aceito pela callback
// E também o tipo de retorno da mesma
console.log('\n----------------------- Callback como argumento -----------------------');
function greeting(name) {
    return `Olá, ${name}!`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!', f);
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Zezingo');
preGreeting(greeting, 'Matheus');
console.log('----------------------- ----------------------- -----------------------\n');
// 03 - Generic Function
/*

  É uma estratégia para quando o tipo de retorno e relacionado
  ao tipo do argumento;

  Por exemplo, um tipo de um array pode ser, string, boolean ou number;

  Normalmente são utilizadas letras como T ou U para definir os generics

*/
console.log('\n----------------------- Generic Function -----------------------');
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([true, 'a', 1, {}]));
// console.log(firstElement('teste'))
const mergeObject = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const newObject = mergeObject({ name: 'Zezinho' }, { age: 32, job: 'Programmer' });
console.log(newObject);
console.log('----------------------- ---------------- -----------------------\n');
// 04 - Constraints nas generic functions
/*
  As Generic Functions podem ter sue escopo reduzido por constraints;
  Basicamente limitamos os tipos que podem seu utilizados no generic;
  Isso faz com que nosso escopo seja menos abrangente;
*/
console.log('\n----------------------- Constraints -----------------------');
function biggesNUmber(a, b) {
    let bigges;
    if (+a > +b) {
        bigges = a;
    }
    else {
        bigges = b;
    }
    return bigges;
}
console.log((biggesNUmber(4, 8)));
console.log((biggesNUmber('12', '4')));
//console.log((biggesNUmber(true, false)))
//console.log((biggesNUmber('1', 2)))
console.log('----------------------- ----------- -----------------------\n');
// 05 - Definindo tipo de parâmetros
/*
  Em Generic Functions temos que utilizar parâmetros de tipos
  semelhantes, se não recebemos um erro;

  Porém há a possibilidade de determinar o tipo também dos
  parãmentros aceitos, com uma sintaxe especial;

  Isso faz com que a validação do TS aceite os tipos escolhidos;
*/
console.log('\n----------------------- Definindo tipo de parâmetros -----------------------');
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(['a', 'b', 'c'], ['d', 'e', 'f']));
// determina o tipo dos parãmetros aceitos
console.log(mergeArrays([10, 20, 30], ['OI', 'TUDO', 'BEM']));
console.log('----------------------- ---------------------------- -----------------------\n');
// 06 - Argumentos Opcionais
/*
  Nem sempre utiizamos todos os parãmetros de uma função;
  Mas, se ele for opcional precisamos declarar isso para o TS;
*/
console.log('\n----------------------- Argumentos Opcionais -----------------------');
const modernGreeting = (name, greet) => {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
};
console.log(modernGreeting('Matheus'));
console.log(modernGreeting('João', 'Dr.'));
console.log('----------------------- -------------------- -----------------------\n');
// 07 - Argumento Default
/*
  Os Argumentos default são os que já possuem um valor definido;
  Se não passarmos para a função, é utilizado esse valor;
*/
console.log('\n----------------------- Argumento Default -----------------------');
function sum(n1, n2 = 10) {
    return `A soma de ${n1} + ${n2} = ${n1 + n2}.`;
}
console.log(sum(15));
console.log(sum(15, 15));
console.log('----------------------- ----------------- -----------------------\n');
// 08 - Tipo unknown
/*
  O tipo unknown é semelhante ao any, ele aceita qualquer tipo de dado;
  Porém a diferença é que ela não deixa algo ser executado sem avalidação de tipo;
  Ou seja, adiciona uma trava de segurança;
*/
console.log('\n----------------------- Tipo unknown -----------------------');
function doSomething(x) {
    console.log(x);
    if (Array.isArray(x)) {
        console.log(x[1]);
    }
    else if (typeof x === 'number') {
        console.log('Número', x);
    }
}
doSomething('OI');
doSomething([1, 2, 3, 4]);
doSomething(334);
console.log('----------------------- ------------ -----------------------\n');
// 09 - Tipo never
/*
  O tipo never é semelhante ao tipo void;
  Porém é utilizado quando a função não retorna nada;
  Um exemplo: retorno de erros;
*/
console.log('\n----------------------- Tipo never -----------------------');
function showErrorMessage(msg) {
    throw new Error(msg);
}
// Descomente para funcionar
// showErrorMessage('Deu ruim!')
console.log('----------------------- ---------- -----------------------\n');
// 10 - Rest Parameters - Para aplicá-lo basta definir o tipo de dado com a sintaxe REST(...)
console.log('\n----------------------- Rest Parameters -----------------------');
function sumAll(...n) {
    return n.reduce((number, num) => num + number);
}
console.log('A soma de todos os números é', sumAll(1, 2, 3, 4));
console.log('A soma de todos os números é', sumAll(10, 20, 30, 40));
console.log('A soma de todos os números é', sumAll(100, 200, 300, 400));
console.log('----------------------- --------------- -----------------------\n');
// 11 - Destructuring - Precisamos apenas determinar -
// o tipo de cada dado que será desentruturado.
console.log('\n----------------------- Destructuring -----------------------');
function showProductDetails({ name, price }) {
    console.log(`O nome do produto é ${name} e custa R$${price}.`);
}
showProductDetails({ name: 'Camisa', price: 150 });
showProductDetails({ name: 'Sapato', price: 250 });
console.log('----------------------- ------------- -----------------------\n');

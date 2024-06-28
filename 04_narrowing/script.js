"use strict";
// NARROWING
/*

  Narrowing é um recurso do TS para verificar tipos de dados;

  Dando assim uma execução diferente ao fluxo do programa, baseado
  no tipo que foi indentificado;

  Há situações em que os tipos posem ser imprevisíveis, e queremos
  executar algo diferente para cada uma das possibilidades;
  
  Isso é fundamental também para evitar possíveis erros do copilador;

*/
// Typeof Type gaurd => é uma validação do tipo utilizando o typeof
console.log('\n----------------------- TYPEOF TYPEGAURD -----------------------');
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(`A soma de ${a} + ${b} = ${parseFloat(a) + parseFloat(b)}`);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(`A soma de ${a} + ${b} = ${a + b}`);
    }
    else {
        console.log('Não é possível fazer esse cálculo');
    }
}
sum('5', '5');
sum(12, 12);
sum('7', 7);
console.log('----------------------- ---------------- -----------------------');
// Checando se um valor existe
console.log('\n----------------------- Checando se um valor esiste -----------------------');
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const oper = arr.reduce((prev, next) => prev + next);
            console.log(`A soma de todos os items é ${oper}`);
        }
        else if (operation === 'multiply') {
            const oper = arr.reduce((prev, next) => prev * next);
            console.log(`A multiplicação de todos os items é ${oper}`);
        }
        else {
            console.log('Ests operação é inválida!');
        }
    }
    else {
        console.log('Por favor, defina uma operação!');
    }
}
operations([1, 2, 3, 4], 'sum');
operations([1, 2, 3, 4], 'multiply');
operations([1, 2, 3, 4]);
console.log('----------------------- --------------------------- -----------------------');
// INSTANCEOF => Serve para checar se um dado pertence a uma classe
console.log('\n----------------------- instanceof -----------------------');
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Matheus = new User('Matheus');
const Zezinho = new SuperUser('Zezinho');
console.log(Matheus);
console.log(Zezinho);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}! Deseja acessar todo o sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}!`);
    }
}
userGreeting(Matheus);
userGreeting(Zezinho);
console.log('----------------------- ----------- ----------------------\n');
// OPERADOR IN => é utilizado para checar se existe uma propiedadde no oibjeto.
console.log('\n----------------------- Operador in -----------------------');
class Dog {
    constructor(name, greed) {
        this.name = name;
        if (greed) {
            this.greed = greed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('greed' in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.greed}.`);
    }
    else {
        console.log(`O cachorro é um SRD!`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
console.log('----------------------- ----------- -----------------------\n');

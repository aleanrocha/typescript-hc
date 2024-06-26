"use strict";
// ARRAYS
const numbers = [2, 3, 4, 5, 7,];
// numbers.push('8') // só aceita números
numbers.push(8);
console.log(numbers, typeof numbers);
const names = ['João', 'Maria', 'Paulo', 'Pedro'];
names.push('Lucas');
console.log(names, typeof names);
// OUTRA SINTAXE DE ARRAY
const nums = [1000, 2000, 3000];
const animals = ['Cat', 'Dog'];
console.log(nums, typeof nums);
console.log(animals, typeof animals);
// ANY => O any transmite ao TS que qualquer tipo satisfaz a variável
console.log('-------------------------------ANY--------------------------------');
const items = [7, true, {}, 'Manga'];
items.push([80, 90, 100]);
console.log(items, typeof items);
// TIPOS EM FUNÇÕES 
console.log('-------------------------------TIPOS EM FUNÇÕES--------------------------------');
function sum(n1, n2) {
    console.log(`A soma de ${n1} + ${n1} é ${n1 + n2}.`);
}
sum(10, 10);
// sum('a','b')
// tipando o retorno das funções
function greeting(name) {
    return `Olá, ${name}.`;
}
console.log(greeting('João'));
// console.log(greeting(332))
// Funções anónimas
setTimeout(() => {
    let number = 100;
    // number = 'oi'
    console.log(number);
}, 1000);

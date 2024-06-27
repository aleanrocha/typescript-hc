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
console.log('-------------------------------TIPOS EM OBJETOS--------------------------------');
function passCoordinates(coor) {
    console.log('Coordenadas x', coor.x);
    console.log('Coordenadas y', coor.y);
}
passCoordinates({ x: 2323, y: 3232 });
// passCoordinates({xBurger: 2323, yBurger: 3232}) // preciso passar os nomes exatos
const obj = { name: 'Zé', age: 12 };
console.log(obj);
// Propiedades opcionais
function showNumbers(a, b, c) {
    console.log('A ', a);
    console.log('B ', b);
    if (c) {
        console.log('C ', c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 6);
// Validando parâmetro opcional
/*
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName) {
    console.log(`Olá eu sou o ${firstName} ${lastName}.`)
  }
  console.log(`Olá eu sou o ${firstName}`)
}

advancedGreeting('João')
advancedGreeting('João', 9999)
*/
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        // console.log(`Olá eu sou o ${firstName} ${lastName}.`)
        return `Olá eu sou o ${firstName} ${lastName}.`;
    }
    // console.log(`Olá eu sou o ${firstName}`)
    return `Olá eu sou o ${firstName}`;
}
console.log(advancedGreeting('Matheus'));
console.log(advancedGreeting('Matheus', 'Battisti'));
// console.log(advancedGreeting())
// Union Type
function showBalance(balance) {
    console.log(balance);
}
showBalance(600);
showBalance('900');
// showBalance(true)
const arr = ['OI', 10, true];
console.log(arr);
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado';
    }
    return 'Usuário aprovado';
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));

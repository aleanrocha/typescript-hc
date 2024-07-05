"use strict";
// CLASSES
/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
  a classe com campos para os futuros dados dos objetos, que serão as
  propiedades dos objetos instanciados, estes campos podem ser tipados
  também, note que um campo declarado como vazio deve conter o sinal de !.
*/
// 01 - Campos em Classe
class User {
}
const matheus = new User();
matheus.name = 'Matheus';
matheus.age = 12;
// matheus.job = 'Programmer'
console.log(matheus.name);
console.log(matheus.age);
console.log('----------------------------------------------------');
// 02 - CONSTRUCTOR
class NewUser {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const ze = new NewUser('Zé', 26, 'Developer');
const zedagaia = new NewUser('Zé da Gaia', 29, 'Dev');
console.log(ze);
console.log(zedagaia);
console.log('----------------------------------------------------');
// 03 - Propiedades readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car1 = new Car('Fusca');
const car2 = new Car('Ferrari');
console.log(car1);
console.log(car2);
car1.name = 'Gol';
// car1.wheels = 8 // erro - o valor não pode ser alterado
console.log(car1);
console.log('----------------------------------------------------');
// 04 - Herança e Super 
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const newCar = new Machine('Toro');
const trator = new KillerMachine('Trator', 55);
console.log(newCar);
console.log(trator);
trator.guns = 120;
console.log(trator);
console.log('----------------------------------------------------');
// 05 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Olá ${this.name}, tudo bem?`;
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy);
console.log(jimmy.name);
console.log(jimmy.greeting());

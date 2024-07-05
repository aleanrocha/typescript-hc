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
console.log('----------------------------------------------------');
// 06 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhão do modelo ${this.model}, tem ${this.hp} cavalos de potẽncia.`);
    }
}
const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 600);
volvo.showDetails();
scania.showDetails();
console.log('----------------------------------------------------');
// 07 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // retorna e também pode mpdificar o retorno
    get fullname() {
        return `Seu nome completo é ${this.name} ${this.surname}`;
    }
}
const zedamanga = new Person('Zé', 'da Manga');
const mat = new Person('Matheus', 'Battisti');
console.log(zedamanga.fullname.toLocaleUpperCase());
console.log(mat.fullname.toLocaleLowerCase());
console.log('----------------------------------------------------');
// 08 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso!');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso!');
    }
    get getCoords() {
        return `As coordenadas são x:${this.x} y:${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillY = 353453;
myCoords.fillX = 0;
myCoords.fillX = 753643;
console.log(myCoords);
console.log(myCoords.getCoords);
console.log('----------------------------------------------------');
class Blog {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const newPost = new Blog('Título de Teste');
console.log(newPost.title);
console.log(newPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O outro título do post é ${this.title}`;
    }
}
const otherPost = new Blog('Hello Developer`s');
console.log(otherPost.title);
console.log(otherPost.itemTitle());
console.log('----------------------------------------------------');
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log('Alguma coisa - Origem - Classe PAI');
    }
}
class Nova extends Base {
    // subistitui o método da classe que herdamos - override
    someMethod() {
        console.log('Alguma coisa - Origem - Daqui mesmo');
    }
}
const myObject = new Nova();
myObject.someMethod();
console.log('----------------------------------------------------');
// 11 - Visibilidade de propiedades e métodos
/*
  Visibilidade é o conceito de expor nossos métodos de classes;
  PUBLIC: Default, pode ser acessado de qualquero lugar;
  PROTECTED: Acessível apenas a subclasses da classe do método;
  PRIVATE: Apenas a classe que declarou o método pode utilizar;
*/
// Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
    constructor() {
        super(...arguments);
        this.y = 20;
    }
}
const cInstance = new C();
const dInstance = new D();
console.log('Class C - PAI', cInstance.x);
console.log('Class D', dInstance.x);
// Protected
class E {
    constructor() {
        this.x = 50;
    }
    protectedY() {
        return `Eu sou um método com protected da classe E`;
    }
}
// só posso acessar uma propiedade herdada com protected através de um método
class F extends E {
    showX() {
        return `O valor da propiedade x herdada de E é ${this.x}`;
    }
    showProtectedY() {
        return this.protectedY();
    }
}
const fInstance = new F();
console.log(fInstance.showX());
console.log(fInstance.showProtectedY());
// Private
class PrivateClass {
    constructor(name, age) {
        this.name = name;
        if (age) {
            this.age = age;
        }
    }
    get showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Eu sou um Private Method');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
/*
class testingPrivateClass extends PrivateClass {
  method() {
    this.privateMethod()
  }
}
*/
const zezinho = new PrivateClass('Zezinho');
console.log('Eu sou Private e meu nome é', zezinho.showName);
zezinho.showPrivateMethod();
console.log('----------------------------------------------------');
// 12 - Static Members
class StaticMembers {
    static staticMethod() {
        return 'Eu sou um método estático';
    }
}
StaticMembers.prop = 'Lá ele';
console.log(StaticMembers);
console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());
console.log('----------------------------------------------------');
// 13 - Generic Class
class Items {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    showItems() {
        return `O primeiro item é ${this.first} e o segundo é ${this.second}`;
    }
}
const newItem = new Items('Caixa', 'Misteriosa');
const anotherItem = new Items(18, true);
console.log(newItem);
console.log(newItem.showItems());
console.log(newItem.first, typeof newItem.first);
console.log(newItem.second, typeof newItem.second);
console.log(anotherItem);
console.log(anotherItem.showItems());
console.log(anotherItem.first, typeof anotherItem.first);
console.log(anotherItem.second, typeof anotherItem.second);
console.log('----------------------------------------------------');
// 14 - Parameters Properties
class ParametersProperties {
    constructor(name, qtn, price) {
        this.name = name;
        this.qtn = qtn;
        this.price = price;
        this.name = name;
        this.qtn = qtn;
        this.price = price;
    }
    get showQtn() {
        return `A quantidade é ${this.qtn}!`;
    }
    get showPrice() {
        return `O preço é ${this.price}!`;
    }
}
const shirt = new ParametersProperties('Camisa', 2, 99.99);
console.log(shirt);
console.log(shirt.name);
// console.log(shirt.price)
console.log(shirt.showQtn);
console.log(shirt.showPrice);
console.log('----------------------------------------------------');
// 15 - Class Expressions
const classExpression = class {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get showName() {
        return `O nome do indivíduo é ${this.name}!`;
    }
};
const newPerson = new classExpression('Bartolomeu');
console.log(classExpression);
console.log(newPerson);
console.log(newPerson.showName);

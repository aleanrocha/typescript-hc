// CLASSES

/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
  a classe com campos para os futuros dados dos objetos, que serão as
  propiedades dos objetos instanciados, estes campos podem ser tipados
  também, note que um campo declarado como vazio deve conter o sinal de !.
*/

// 01 - Campos em Classe

class User {
  name!: string
  age!: number
}

const matheus = new User()

matheus.name = 'Matheus'
matheus.age = 12

// matheus.job = 'Programmer'

console.log(matheus.name)
console.log(matheus.age)

console.log('----------------------------------------------------')

// 02 - CONSTRUCTOR

class NewUser {
  name 
  age
  job
  constructor(name: string, age: number, job: string) {
    this.name = name
    this.age = age
    this.job = job
  }
}

const ze:NewUser = new NewUser('Zé', 26, 'Developer')
const zedagaia:NewUser = new NewUser('Zé da Gaia', 29, 'Dev')

console.log(ze)
console.log(zedagaia)

console.log('----------------------------------------------------')

// 03 - Propiedades readonly

class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const car1 = new Car('Fusca')
const car2 = new Car('Ferrari')

console.log(car1)
console.log(car2)

car1.name = 'Gol'
// car1.wheels = 8 // erro - o valor não pode ser alterado

console.log(car1)

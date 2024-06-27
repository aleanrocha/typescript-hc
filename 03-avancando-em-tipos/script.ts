// ARRAYS

const numbers: number[] = [2,3,4,5,7,]

// numbers.push('8') // só aceita números
numbers.push(8)

console.log(numbers, typeof numbers)

const names: string[] = ['João', 'Maria', 'Paulo', 'Pedro']

names.push('Lucas')

console.log(names, typeof names)

// OUTRA SINTAXE DE ARRAY

const nums: Array<number> = [1000, 2000, 3000]
const animals: Array<string> = ['Cat', 'Dog']

console.log(nums, typeof nums)
console.log(animals, typeof animals)


// ANY => O any transmite ao TS que qualquer tipo satisfaz a variável

console.log('-------------------------------ANY--------------------------------')

const items: any = [7, true, {}, 'Manga']

items.push([80, 90, 100])

console.log(items, typeof items)


// TIPOS EM FUNÇÕES 

console.log('-------------------------------TIPOS EM FUNÇÕES--------------------------------')

function sum(n1: number, n2: number) {
  console.log(`A soma de ${n1} + ${n1} é ${n1+n2}.`)
}

sum(10, 10)
// sum('a','b')

// tipando o retorno das funções

function greeting(name: string): string {
  return `Olá, ${name}.`
}

console.log(greeting('João'))
// console.log(greeting(332))

// Funções anónimas

setTimeout(() => {
  let number: number = 100
  // number = 'oi'
  console.log(number)
}, 1000)

console.log('-------------------------------TIPOS EM OBJETOS--------------------------------')

function passCoordinates(coor: {x: number, y:number}) {
  console.log('Coordenadas x', coor.x)
  console.log('Coordenadas y', coor.y)
}

passCoordinates({x: 2323, y: 3232})
// passCoordinates({xBurger: 2323, yBurger: 3232}) // preciso passar os nomes exatos

const obj:{name: string, age: number} = {name: 'Zé', age: 12}

console.log(obj)

// Propiedades opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log('A ', a)
  console.log('B ', b)
  if (c) {
    console.log('C ', c)
  }
}

showNumbers(1,2,3)
showNumbers(4,6)

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

function advancedGreeting(firstName: string, lastName?: string): string {
  if (lastName !== undefined) {
    // console.log(`Olá eu sou o ${firstName} ${lastName}.`)
    return `Olá eu sou o ${firstName} ${lastName}.`
  }
  // console.log(`Olá eu sou o ${firstName}`)
  return `Olá eu sou o ${firstName}`
}
console.log(advancedGreeting('Matheus'))
console.log(advancedGreeting('Matheus', 'Battisti'))
// console.log(advancedGreeting())


// Union Type

function showBalance(balance: string | number) {
  console.log(balance)
}

showBalance(600)
showBalance('900')
// showBalance(true)

const arr: Array<string | number | boolean> = ['OI', 10, true]

console.log(arr)

function showUserRole(role: string | boolean) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado'
  }
  return 'Usuário aprovado'
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))


// TYPE ALIAS

type ID = string | number

const showId = (id: ID /*id: number | string*/) => {
  console.log(`O ID é ${id}`)
}

showId(5830465803)
showId('kakufbyq3r7823ifQ')

// INTERFACES

interface Point {
  x: number
  y: number
  z: number
}

function showCoords(coor: Point) {
  console.log(`Coordenadas X ${coor.x}`)
  console.log(`Coordenadas Y ${coor.y}`)
  console.log(`Coordenadas Z ${coor.z}`)
}

const coorObj: Point = {
  x: 472,
  y: 133,
  z: 232
}

showCoords(coorObj)

// Diferença entre type alias e interface
// A única diferença e que a interface pode ser alterada ao longo do código, já o alias não.

interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {
  name: 'Zezinho',
  age: 12
}

console.log(somePerson)

type PersonType = {
  name: string
  age: number
}

/*
type PersonType = {
  job: string
}
*/

const somePerson2: PersonType = {
  name: 'Manoel',
  age: 34
}

console.log(somePerson2)

// LITERAL TYPES

let test: 'testando' // tipando a variável com um valor

// test = 'oi' // a variavel só pode conter o valor tipado

test = 'testando'

console.log(test)

// uso real

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é ${direction}`)
}

showDirection("left")
// CRIAÇÃO DE TIPOS EM TYPESCRIPT

/*
  Há a possibilidade de gerar novos tipos em TS, como nos generics,
  porém existem outros operadores que visam facilitar nossa vida
  neste assunto.
*/




// GENERICS => Aceita mais de um tipo, melhor que o any.

console.log('\n----------------------- GENERICS -----------------------')

// Aceita qualquer tipo de dado e converte em String
function showData<T>(arg: T): string {
  return `Ò dado é ${arg}` 
}

console.log(showData('OI'))
console.log(showData(8777))
console.log(showData(['abaisvbabjkd']))
console.log(showData(true))
console.log(showData(777), ', ele é uma', typeof showData(true))

console.log('----------------------- -------- ----------------------\n')




// CONSTRAINT EM GENERICS => Nos ajudam a limitar os tipos aceitos

console.log('----------------------- CONSTRAINT EM GENERICS -----------------------')

const showProductNames = <T extends { name: string }> (obj: T) => {
  return `O nome do produto é ${obj.name}`
}

console.log(showProductNames({name: 'Calça'}))
console.log(showProductNames({name: 'Bermuda', price: 45.99, isAvaliable: true}))

// erro - ele espera o nome especificado do produto
// console.log(showProductNames({price: 99.99, original: false})) 

console.log('----------------------- ---------------------- -----------------------\n')



// INTERFACE COM GENERICS - Podemos criar tipos complexos para objetos

console.log('----------------------- INTERFACE COM GENERICS -----------------------')

interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

interface Pessoa<T, U> {
  name: string,
  age: number,
  weight: T,
  height: U
}

type car = MyObject<number, number, string>
type pen = MyObject<boolean, boolean, string>

type p1 = Pessoa<number, number>
type p2 = Pessoa<string, string>

const myCar:car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco'}
const myPen:pen = {name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul'}

const zedamanga:p1 = {name: 'Zé da Manga', age: 27, height: 1.78, weight: 82.56}
const zedagaia:p2 = {name: 'Zé da Gaia', age: 45, height: '1.69m', weight: '89kg'}

console.log(myCar)
console.log(myPen)

console.log(zedamanga)
console.log(zedagaia)

console.log('----------------------- ---------------------- -----------------------\n')


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



// TYPE PARAMETERS 

console.log('----------------------- TYPE PARAMETERS -----------------------')

const getSomeKeys = <T, K extends keyof T> (obj: T, key: K) => {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '256GB',
  ram: '32GB'
}

console.log(getSomeKeys(server, "ram"))

console.log('----------------------- -------------- -----------------------\n')




// KEYOF TYPE OPERATOR

/*
  Com o keyof Type Operator podemos criar um novo tipo,
  ele aceita dados do tipo objeto, como object literals e arrays,
  podemos criar os tipos baseados nas chaves do objeto, passado como parãmetro.
*/

console.log('----------------------- KEYOF TYPE OPERATOR -----------------------')

type Chacarter = {name: string, age: number, hasDriveLincense: boolean}

type C = keyof Chacarter

const showCharName = (obj: Chacarter, key: C):string => {
  return `Vocẽ escolheu => ${obj[key]}`
}

const myChar:Chacarter = {name: 'Zé', age: 23, hasDriveLincense: true}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
console.log(showCharName(myChar, "hasDriveLincense"))

// console.log(showCharName(myChar, "teste"))

console.log('----------------------- ------------------- -----------------------\n')



// Typeof Type Operator - Cria um novo tipo baseado no tipo de algum dado

console.log('----------------------- TYPEOF TYPE OPERATOR -----------------------')

const userName1: string = 'Zezinho'

const userName2: typeof userName1 = 'Matheus'

console.log(userName1)
console.log(userName2)

type x = typeof userName1

const y:x = 'João'

console.log(y)

console.log('----------------------- ------------------- -----------------------\n')



// Indexed AcCess Types - Cria um tipo baseado na chave de um objeto

console.log('----------------------- Indexed Access Types -----------------------')

type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck:Truck = {
  km: 1280,
  kg: 3900,
  description: 'Carga Pesada'
}

const newCar:Truck = {
  km: 900,
  kg: 90,
  description: 'Carro'
}

const showKm = (km: Km):string => {
  return `O veículo rodou ${km}km`
}

console.log(showKm(newTruck.km))
console.log(showKm(newCar.km))

console.log('----------------------- ------------------- -----------------------\n')




// Conditional Types - Cria um novo tipo com base no if/else

console.log('----------------------- Conditional Types -----------------------')

interface A {}
interface B extends A {}
interface Test {
  showName(): string
}

type myType = B extends A ? number : string

const n1:myType = 123
// const n2:myType = '123' // erro - só aceita número

type myTypeB = Test extends {showName(): string} ? string : boolean

const myName:myTypeB = 'ZeDaGaia'

console.log(myName)

console.log('----------------------- ----------------- -----------------------\n')



// Template Literals Type - Criar tipos com template literals

console.log('----------------------- Template Literals Type -----------------------')

type testA = `text`

type custumType = `Some ${testA}`

const testing:custumType = 'Some text'
// const testing2:custumType = 'Some text 2'

console.log(testing)

type a1 = 'Testando'
type a2 = 'Union'
type a3 = `${a1}` | `${a2}`

const testA:a3 = 'Testando'
const testA2:a3 = 'Union'
//const testA3:a3 = 'Uni'

console.log(testA, testA2)

console.log('----------------------- ---------------------- -----------------------\n')


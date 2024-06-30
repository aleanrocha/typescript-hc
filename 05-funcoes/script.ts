// FUNÇÕES

// 01 - Função sem retorno
// Podemos ter funções que não retornam valores e nesse caso utilizamos o VOID

console.log('\n----------------------- Função sem Retorno -----------------------')

function whithoutReturn():void {
  console.log('Função sem retorno!')
}

whithoutReturn()

console.log('----------------------- ------------------ -----------------------\n')

// 02 - Callback como argumento
// Podemos inserir uma função de callback como argumento de função
// Nela conseguimos definir o tipo de argumento aceito pela callback
// E também o tipo de retorno da mesma

console.log('\n----------------------- Callback como argumento -----------------------')

function greeting(name: string) : string {
  return `Olá, ${name}!`
}

function preGreeting(f: (name: string) => string, userName : string) {
  console.log('Preparando a função!', f)
  const greet = f(userName)
  console.log(greet)
}

preGreeting(greeting, 'Zezingo')
preGreeting(greeting, 'Matheus')

console.log('----------------------- ----------------------- -----------------------\n')

// 03 - Generic Function
/*

  É uma estratégia para quando o tipo de retorno e relacionado
  ao tipo do argumento;

  Por exemplo, um tipo de um array pode ser, string, boolean ou number;

  Normalmente são utilizadas letras como T ou U para definir os generics

*/


console.log('\n----------------------- Generic Function -----------------------')

function firstElement<T>(arr : T[]) : T {
  return arr[0]
}

console.log(firstElement([1,2,3,4]))
console.log(firstElement(['a','b','c']))
console.log(firstElement([true,'a',1,{}]))
// console.log(firstElement('teste'))

const mergeObject = <U, T> (obj1: U, obj2: T) => {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObject({ name: 'Zezinho' }, { age: 32, job: 'Programmer'})

console.log(newObject)

console.log('----------------------- ---------------- -----------------------\n')

// 04 - Constraints nas generic functions
/*
  As Generic Functions podem ter sue escopo reduzido por constraints;
  Basicamente limitamos os tipos que podem seu utilizados no generic;
  Isso faz com que nosso escopo seja menos abrangente;
*/

console.log('\n----------------------- Constraints -----------------------')

function biggesNUmber<T extends number | string>(a: T, b: T): T {
  let bigges: T

  if (+a > +b) {
    bigges = a
  } else {
    bigges = b
  }
  return bigges
}

console.log((biggesNUmber(4, 8)))
console.log((biggesNUmber('12', '4')))
//console.log((biggesNUmber(true, false)))
//console.log((biggesNUmber('1', 2)))

console.log('----------------------- ----------- -----------------------\n')

// 05 - Definindo tipo de parâmetros
/*
  Em Generic Functions temos que utilizar parâmetros de tipos
  semelhantes, se não recebemos um erro;

  Porém há a possibilidade de determinar o tipo também dos
  parãmentros aceitos, com uma sintaxe especial;

  Isso faz com que a validação do TS aceite os tipos escolhidos;
*/

console.log('\n----------------------- Definindo tipo de parâmetros -----------------------')

function mergeArrays<T>(arr1: T[], arr2: T[] ): T[] {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [4,5,6]))
console.log(mergeArrays(['a','b','c'], ['d','e','f']))

// determina o tipo dos parãmetros aceitos
console.log(mergeArrays<string | number>([10,20,30], ['OI','TUDO','BEM']))

console.log('----------------------- ---------------------------- -----------------------\n')

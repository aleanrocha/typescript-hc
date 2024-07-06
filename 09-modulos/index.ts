// MÓDULOS 

/*
  Os módulos são a forma que temos para importar código em arquivos,
  podemos exportar código com o 'export default', e importar com 'import'.
  Criamos os arquivos co .TS, mas importaremos com .JS. Isso nos dá mais
  flexibilidade, podendo separar as responsabilidades em arquivos.

  Utilizaremos o Node.js para executar os arquivos com módulos
*/

// 01 - Importando a função

import greet from './exports/greet.js'

greet()

console.log('------------------------------------------------')

// 02 - Importando variáveis

import { x } from './exports/variable.js'

console.log(x)

console.log('------------------------------------------------')

// 03 - Múltiplas Importações

import { firstname, age, greeting } from './exports/multiple.js'

console.log('Nome:', firstname)
console.log('Idade:', age)

console.log(greeting(firstname))

console.log('------------------------------------------------')

// 04 - Alias - Podemos mudar o nome do que foi importado

import { someName as name } from './exports/changeName.js'

console.log(`Meu nome é ${name}`)

console.log('------------------------------------------------')


// MÓDULOS 

/*
  Os módulos são a forma que temos para importar código em arquivos,
  podemos exportar código com o 'export default', e importar com 'import'.
  Criamos os arquivos co .TS, mas importaremos com .JS. Isso nos dá mais
  flexibilidade, podendo separar as responsabilidades em arquivos.

  Utilizaremos o Node.js para executar os arquivos com módulos
*/

// 01 - Importando a função

import greet from './imports/greet.js'

greet()

console.log('------------------------------------------------')

// 02 - Importando variáveis

import { x } from './imports/variable.js'

console.log(x)


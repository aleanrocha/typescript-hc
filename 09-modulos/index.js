"use strict";
// MÓDULOS 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Os módulos são a forma que temos para importar código em arquivos,
  podemos exportar código com o 'export default', e importar com 'import'.
  Criamos os arquivos co .TS, mas importaremos com .JS. Isso nos dá mais
  flexibilidade, podendo separar as responsabilidades em arquivos.

  Utilizaremos o Node.js para executar os arquivos com módulos
*/
// 01 - Importando a função
const greet_js_1 = __importDefault(require("./exports/greet.js"));
(0, greet_js_1.default)();
console.log('------------------------------------------------');
// 02 - Importando variáveis
const variable_js_1 = require("./exports/variable.js");
console.log(variable_js_1.x);
console.log('------------------------------------------------');
// 03 - Múltiplas Importações
const multiple_js_1 = require("./exports/multiple.js");
console.log('Nome:', multiple_js_1.firstname);
console.log('Idade:', multiple_js_1.age);
console.log((0, multiple_js_1.greeting)(multiple_js_1.firstname));
console.log('------------------------------------------------');
// 04 - Alias - Podemos mudar o nome do que foi importado
const changeName_js_1 = require("./exports/changeName.js");
console.log(`Meu nome é ${changeName_js_1.someName}`);
console.log('------------------------------------------------');
// 05 - Importando tudo com o caractere coringa *
const myNumbers = __importStar(require("./exports/numbers.js"));
console.log(myNumbers);
const n1 = myNumbers.n1;
console.log('O primeiro número é', n1);
myNumbers.showNumber(myNumbers.n4);

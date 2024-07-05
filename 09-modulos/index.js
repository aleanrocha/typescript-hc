"use strict";
// MÓDULOS 
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
const greet_js_1 = __importDefault(require("./imports/greet.js"));
(0, greet_js_1.default)();

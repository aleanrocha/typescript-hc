"use strict";
// INFERENCE E ANNOTATION
/*
  INFERENCE => É quando o TS indentifica e define o tipo de dado para nós.
  ANNOTATION => É quando o tipo de dado manualmente.
*/
// Exemplo de Annotation
let myName = 'Zezinho'; // Definimos o tipo manualmente
console.log(myName);
// Exemplo de Inference
let age = 19; // O própio TS vai definir o tipo com base no valor
console.log(age);

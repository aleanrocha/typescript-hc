"use strict";
// CLASSES
/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
  a classe com campos para os futuros dados dos objetos, que serão as
  propiedades dos objetos instanciados, estes campos podem ser tipados
  também, note que um campo declarado como vazio deve conter o sinal de !.
*/
// Campos em Classe
class User {
}
const matheus = new User();
matheus.name = 'Matheus';
matheus.age = 12;
// matheus.job = 'Programmer'
console.log(matheus.name);
console.log(matheus.age);
console.log('----------------------------------------------------');

"use strict";
// CRIAÇÃO DE TIPOS EM TYPESCRIPT
/*
  Há a possibilidade de gerar novos tipos em TS, como nos generics,
  porém existem outros operadores que visam facilitar nossa vida
  neste assunto.
*/
// GENERICS => Aceita mais de um tipo, melhor que o any.
console.log('\n----------------------- GENERICS -----------------------');
// Aceita qualquer tipo de dado e converte em String
function showData(arg) {
    return `Ò dado é ${arg}`;
}
console.log(showData('OI'));
console.log(showData(8777));
console.log(showData(['abaisvbabjkd']));
console.log(showData(true));
console.log(showData(777), ', ele é uma', typeof showData(true));
console.log('----------------------- -------- ----------------------\n');
// CONSTRAINT EM GENERICS => Nos ajudam a limitar os tipos aceitos
console.log('----------------------- CONSTRAINT EM GENERICS -----------------------');
const showProductNames = (obj) => {
    return `O nome do produto é ${obj.name}`;
};
console.log(showProductNames({ name: 'Calça' }));
console.log(showProductNames({ name: 'Bermuda', price: 45.99, isAvaliable: true }));
// erro - ele espera o nome especificado do produto
// console.log(showProductNames({price: 99.99, original: false})) 
console.log('----------------------- ---------------------- -----------------------\n');
// INTERFACE COM GENERICS - Podemos criar tipos complexos para objetos
console.log('----------------------- INTERFACE COM GENERICS -----------------------');
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };
const zedamanga = { name: 'Zé da Manga', age: 27, height: 1.78, weight: 82.56 };
const zedagaia = { name: 'Zé da Gaia', age: 45, height: '1.69m', weight: '89kg' };
console.log(myCar);
console.log(myPen);
console.log(zedamanga);
console.log(zedagaia);
console.log('----------------------- ---------------------- -----------------------\n');

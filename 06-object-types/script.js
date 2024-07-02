"use strict";
// Object Types
/*
  O que são Object Types? São os dados que tem como o tipo
  objeto. Por exemplo, Object Literals e Arrays.

  Temos diversos recursoa para explorar sobre estes tipos,
  como Interfaces, Readonly, Tupla e outros.

  Isso nos dá possibilidades a mais para o javascript;

  Nesta seção focaremos nestes detalhes que são super
  importantes para p Typescript.
*/
// Interface
/*
  O caso de uso para interface é simplificar os parãmentros
  de objetos de funções, ou seja, em vez de passar parãmetros lonmgos
  para n funcões, passamos apenas a inteface.
*/
console.log('\n----------------------- Interface -----------------------');
const showProductDetails = (product) => {
    console.log(`O produto é ${product.name} e custa R$${product.price}.`);
    if (product.isAvaliable) {
        console.log('O produto está disponível! \n');
    }
};
const shirt = {
    name: 'Camisa',
    price: 120,
    isAvaliable: true
};
const pants = {
    name: 'Calça',
    price: 99.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails(pants);
showProductDetails({ name: 'Relógio', price: 540.27, isAvaliable: false });
const showUserDetails = (user) => {
    console.log(`\nO usuário tem o e-mail ${user.email}.`);
    if (user.role) {
        console.log(`O usuário tem a função de ${user.role}!`);
    }
};
const u1 = { email: 'zezinho@gmail.com', role: 'Admin' };
const u2 = { email: 'zedagaia@gmail.com' };
showUserDetails(u1);
showUserDetails(u2);
console.log('----------------------- ---------- ----------------------\n');
// Propiedades readonly
/*
  As propiedades readonly, só pedem ser alteradas apenas uma vez,
  na criacção do novo dado. É uma forma de criar um valor constante
  em um objeto.
*/
console.log('----------------------- Propiedade readonly -----------------------');
const car1 = { brand: 'Ferrari', wheels: 4 };
car1.brand = 'BMW';
// car1.wheels = 6' // Não posso alterar pq é uma propiedade read-only
console.log(car1);
console.log('----------------------- -------------------- ----------------------\n');
// Index Signature
/*
  Utilizamos o Index Signature quando não sabemos os nomes das chaves,
  mas já sabemos quais os tipos de um objeto ou array, isso restringe
  a tipos que não devem ser utilizados, uma barreira de segurança a mais
  na nossa variável.
*/
console.log('----------------------- Index Signature  -----------------------');
const coords = {
    x: 5454
};
coords.y = 8573;
// coords.z = 'teste' // Erro - Não é do tipo number
coords.z = 6564;
console.log(coords);
console.log('----------------------- -------------------- ----------------------\n');
// Extending TYpes
/*
  Utilizamos o Extending TYpes como uma herança para criar tipos mais
  complexos por meio de uma interface, ou seja, uma interface pode herdar
  as propiedades e tipos já definidos de outra, isso acontece por meio do extends.
*/
console.log('----------------------- Extending Types  -----------------------');
const zedagaia = {
    name: 'Zé da Gaia',
    job: 'Fazendeiro'
};
const goku = {
    name: 'Goku',
    job: 'Herói',
    superpowers: ['Kamehameha', 'Genki Dama']
};
console.log(zedagaia);
console.log(goku);
console.log(goku.superpowers[1]);
console.log('----------------------- --------------- ----------------------\n');
// Intersection TYpes
/*
  Intersection types são utilizados para criar interfaces mais complexas
  a partir de duas interfaces, podemos concatenar os tipos com &.
*/
console.log('----------------------- Intersection Types  -----------------------');
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold.name);
console.log(arnold);
console.log('----------------------- ------------------ ----------------------\n');
// ReadOnlyArray
/*
  O ReadOnlyArray é um tipo para array, que deixa os itgens como readonly,
  podemos aplicar um tipo para os itens do array além dessa propiedade especial,
  a modificação de itens pode ser feita através de método, mas nçao podemos aumentar o array.
*/
console.log('----------------------- ReadOnlyArray -----------------------');
let fruits = ['Morango', 'Maça', 'Pera', 'Abacaxi'];
console.log(fruits);
fruits[0] = 'Banana';
console.log('Fruta alterada na posição 0 para', fruits[0]);
let moreFruits = ['Laranja', 'Pessego', 'Melancia', 'Manga'];
// moreFruits[0] = 'Pera' // não posso alterar
console.log(moreFruits);
moreFruits.forEach((fruit) => {
    console.log(`Fruta: ${fruit}`);
});
console.log('----------------------- ------------- -----------------------\n');
// Tuplas
/*
  Tupla é um tipo de array, porém definimos a quantidade e o tipo de elementos,
  Basicamente criamos um novo type, e nele inserimos o array com os tipos necessários,
  cada tipo conta também como um elemento.
*/
console.log('----------------------- TUPLAS -----------------------');
const myAnimals = ['Dog', 'Cat', 'Horse'];
// const myAnimals2:animals = ['Dog', 'Cat', 'Horse', 'Cow'] // quantidade superior a quantidade definida
// const myAnimals3:animals = [2332, 444, 667] // Precisa ser do tipo especificado - string
console.log(myAnimals);
const pessoa = ['Zé da Manga', 27];
console.log(pessoa, typeof pessoa);
pessoa[0] = 'Ze da Gaia';
pessoa[1] = 34;
console.log(pessoa, typeof pessoa);
console.log('----------------------- ------ -----------------------\n');

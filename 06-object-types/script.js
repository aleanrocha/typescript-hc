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

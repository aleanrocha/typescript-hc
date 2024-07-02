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

console.log('\n----------------------- Interface -----------------------')

interface Product {
  name: string,
  price: number,
  isAvaliable: boolean
}

const showProductDetails = (product: Product) => {
  console.log(`O produto é ${product.name} e custa R$${product.price}.`)
  if (product.isAvaliable) {
    console.log('O produto está disponível! \n')
  }
}

const shirt:Product = {
  name: 'Camisa',
  price: 120, 
  isAvaliable: true
}

const pants:Product = {
  name: 'Calça',
  price: 99.99, 
  isAvaliable: true
}

showProductDetails(shirt)
showProductDetails(pants)
showProductDetails({name: 'Relógio', price: 540.27, isAvaliable: false})

// Interface com parâmetro opcional

interface User {
  email: string,
  role?: string
}

const showUserDetails = (user:User) => {
  console.log(`\nO usuário tem o e-mail ${user.email}.`)
  if (user.role) {
    console.log(`O usuário tem a função de ${user.role}!`)
  }
}

const u1:User = {email: 'zezinho@gmail.com', role: 'Admin'}
const u2:User = {email: 'zedagaia@gmail.com'}

showUserDetails(u1)
showUserDetails(u2)

console.log('----------------------- ---------- ----------------------\n')



// Propiedades readonly

/*
  As propiedades readonly, só pedem ser alteradas apenas uma vez,
  na criacção do novo dado. É uma forma de criar um valor constante 
  em um objeto.
*/

console.log('----------------------- Propiedade readonly -----------------------')

interface Car {
  brand: string,
  readonly wheels: number
}

const car1:Car = {brand: 'Ferrari', wheels: 4}

car1.brand = 'BMW'
// car1.wheels = 6' // Não posso alterar pq é uma propiedade read-only

console.log(car1)

console.log('----------------------- -------------------- ----------------------\n')



// Index Signature

/*
  Utilizamos o Index Signature quando não sabemos os nomes das chaves,
  mas já sabemos quais os tipos de um objeto ou array, isso restringe
  a tipos que não devem ser utilizados, uma barreira de segurança a mais
  na nossa variável.
*/

console.log('----------------------- Index Signature  -----------------------')

interface Coords {
  [index: string]: number
}

const coords:Coords = {
  x: 5454
}

coords.y = 8573
// coords.z = 'teste' // Erro - Não é do tipo number
coords.z = 6564

console.log(coords)

console.log('----------------------- -------------------- ----------------------\n')

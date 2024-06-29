// FUNÇÕES

// 01 - Função sem retorno
// Podemos ter funções que não retornam valores e nesse caso utilizamos o VOID

console.log('\n----------------------- Função sem Retorno -----------------------')

function whithoutReturn():void {
  console.log('Função sem retorno!')
}

whithoutReturn()

console.log('----------------------- ------------------ -----------------------\n')

// 02 - Callback como argumento
// Podemos inserir uma função de callback como argumento de função
// Nela conseguimos definir o tipo de argumento aceito pela callback
// E também o tipo de retorno da mesma

console.log('\n----------------------- Callback como argumento -----------------------')

function greeting(name: string) : string {
  return `Olá, ${name}!`
}

function preGreeting(f: (name: string) => string, userName : string) {
  console.log('Preparando a função!', f)
  const greet = f(userName)
  console.log(greet)
}

preGreeting(greeting, 'Zezingo')
preGreeting(greeting, 'Matheus')

console.log('----------------------- ----------------------- -----------------------\n')

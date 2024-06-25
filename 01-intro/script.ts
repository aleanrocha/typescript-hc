const firstName = 'João'
const anotherName = 'Paulo'
const x = 1
const y = true

// Nesse momento estamos tipando o name como uma String
const greeting = (name: string) => {
  console.log(`Olá, ${name} :)`)
}

greeting(firstName)
// greeting(x) // Não funciona pois a função espera uma string
// greeting(y) // Não funciona pois a função espera uma string
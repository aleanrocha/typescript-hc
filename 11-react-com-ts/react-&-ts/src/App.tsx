// 03 - Criando e importando componente

import FirstComponent from './components/FirstComponent'

const App = () => {

  // 01 - Variáveis

  const name: string = 'Zezinho'
  const age: number = 34
  const isWorking: boolean = true

  // 02 - Funções

  type myName = string

  const showUserName = (name: myName):myName => {
    return `Olá ${name}, tudo bem?`
  }

  return (
    <>
     <h1>Hello React with TypeScript</h1>
     <div>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && <p>Está trabalhando!</p>}

      {showUserName(name)}

      <FirstComponent />
      <FirstComponent />

     </div>
    </>
  )
}

export default App

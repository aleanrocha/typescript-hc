// 03 - Criando e importando componente

import FirstComponent from './components/FirstComponent'

// 04 destructuring

import SecondComponent from './components/SecondComponent'

// 5 + enum
import Destructuring, { Category } from './components/Destructuring'

// - 5 useState

import { State } from './components/State'

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

      <SecondComponent name='João' />
      <SecondComponent name='Matheus' />

      <Destructuring 
        title='Hello World'
        content='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
        commentsQty={87}
        category={Category.TS}
        tags={['Lorem', 'Ipsum', 'Programming', 'TV', 'Movies']}
      />

      <State />
     </div>
    </>
  )
}

export default App

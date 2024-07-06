// 03 - Criando e importando componente

import FirstComponent from './components/FirstComponent'

// 04 destructuring

import SecondComponent from './components/SecondComponent'

// 6 + enum
import Destructuring, { Category } from './components/Destructuring'

// - 5 useState

import { State } from './components/State'
import { createContext } from 'react'

// 8 - Context

interface IAppContext {
  language: string
  framework: string
  projectsQtn: number
}

export const AppContext = createContext<IAppContext | null>(null) 

import Context from './components/Context'

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

  // 7 types

  type textOrNull = string | null
  type Fixed = 'Eu' | 'TU' | 'ELE'

  const textExemple:textOrNull = 'Eu sou um texto'
  const textExemple2:textOrNull = null
  
  //const textExemple3:Fixed = 'Outro Tipo'
  const textExemple3:Fixed = 'Eu'
  
  console.log(textExemple3)

  const contextValeus:IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projectsQtn: 5
  }

  return (
    <AppContext.Provider value={contextValeus}>
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

      {textExemple &&
        <h4>{textExemple}</h4>
      }

      {textExemple2 &&
        <h4>{textExemple2}</h4>
      }
     </div>
     <Context />
    </AppContext.Provider>
  )
}

export default App

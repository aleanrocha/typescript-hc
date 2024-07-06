import { useContext } from 'react'
import { AppContext } from '../App'

const Context = () => {

  const context = useContext(AppContext)

  return (
    <>
      {context &&
        <div>
          <h2>Context</h2>
          <h3>Linguagem: {context.language}</h3>
          <p>Framework: {context.framework}</p>
          <p>Quantidade de projetos: {context.projectsQtn}</p>
        </div>
      }
    </>
  )
}

export default Context
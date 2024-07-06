const App = () => {

  // 01 - Variáveis

  const name: string = 'Zezinho'
  const age: number = 34
  const isWorking: boolean = true
  
  return (
    <>
     <h1>Hello React with TypeScript</h1>
     <div>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && <p>Está trabalhando!</p>}
     </div>
    </>
  )
}

export default App

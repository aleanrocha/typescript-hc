// 01 - iniciando projeto

// console.log('TS + EXPRESS')

// 02 - init express


import express from 'express'

const app = express()
const port = 3001

// Habilitando json

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 03 - Rota POST

app.post('/api/product', (req, res) => {
  console.log(req.body)
  return res.send({ message: 'Produto adicionado!' })
})

// 04 - Rota para todos os verbos - CORINGA

app.all('/api/product/check', (req, res) => {
  if (req.method === 'POST') {
    return res.send({ message: 'Inseriu algum registro!'})
  } else if (req.method === 'GET') {
    return res.send({ message: 'Leu algum registro!'})
  } else {
    return res.send({ message: 'Não podemos realizar está operação! '})
  }
})

app.listen(port, () => console.log(`Server started on port ${port} 🚀`))

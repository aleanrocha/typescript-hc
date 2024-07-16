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

app.listen(port, () => console.log(`Server started on port ${port} 🚀`))

// 01 - iniciando projeto

// console.log('TS + EXPRESS')

// 02 - init express


import express, { Request, Response} from 'express'

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

// 5 - interfaces do express

app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send({ message: 'Utilizando interfaces do express'})
})

// 6 - enviando json

app.get('/api/json', (req: Request, res: Response) => {
  res.json({
    name: 'Shirt',
    price: 99.99,
    color: 'Black',
    sizes: ['P', 'M', 'G', 'GG']
  })
})

// 7 - router parameters

app.get('/api/product/:id', (req: Request, res: Response) => {
  const id = req.params.id
  if (id === '1') {
    const data:object = {
      name: 'Short',
      price: 99.99,
      color: 'blue'
    }
    return res.json({ product: data })
  } else {
    return res.json('Produto não encontrado!')
  }
})

// 8 - rotas mais complexas

app.get('/api/product/:productId/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params)
  const productId = req.params.productId
  const reviewId = req.params.reviewId
  return res.send(`Acessando review ${reviewId} do produto ${productId}`)
})

app.listen(port, () => console.log(`Server started on port ${port} 🚀`))

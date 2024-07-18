// 01 - iniciando projeto

// console.log('TS + EXPRESS')

// 02 - init express


import express, { NextFunction, Request, Response} from 'express'

const app = express()
const port = 3001

// Habilitando json

app.use(express.json())

// 11 - middleware para todas as rotas

const hello = (req: Request, res: Response, next: NextFunction) => {
  console.log('Hello world')
  next()
}
app.use(hello)

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

// 9 - router handler
const getUser = (req: Request, res: Response) => {
  console.log(`Resgatando uúsario com o ID ${req.params.id}`)
  return res.send('O usuário foi encontrado! ')
}

// 10 - middleware

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id
  if(userId === '1') {
    console.log('Acesso permitido!')
    next()
  } else {
    console.log('Acesso negado!')
  }
}

app.get('/api/user/:id', checkUser, (req: Request, res: Response) => {
  return res.json({ msg: 'Seja muito bem vindo!'})
})

// 12 - interfaces de requisição e resposta

app.get('/api/user/:id/details/:name', 
  (
    req: Request<{ id: string, name: string}>,
    res: Response<{ status: boolean}>
  ) => {
    const id = req.params.id
    const name = req.params.name
    console.log(`ID: ${id}`)
    console.log(`NAME: ${name}`)
    return res.json({ status: true })
})

// 13 - tratando erros

app.get('/api/error', (req: Request, res: Response) => {
  try {
    // sua lógica
    throw new Error('Ops, algo deu ruim!')
  } catch (err: any) {
    return res.status(500).json({ error: err.message})
  }
})

app.get('/api/user/:id', getUser)

app.listen(port, () => console.log(`Server started on port ${port} 🚀`))

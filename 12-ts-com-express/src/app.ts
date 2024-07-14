// 01 - iniciando projeto

// console.log('TS + EXPRESS')

// 02 - init express


import express from 'express'

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Server started on port ${port} 🚀`))

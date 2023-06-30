import express from 'express'
import { getDepartamentos, getDepartamento } from './departamentos.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Oi Dev')
})

app.get('/departamento', (req, res) => {

  const result = getDepartamentos()
  res.json(result)

})

app.get('/departamento/:id_departamento', (req, res) => {
  const { id_departamento } = req.params
  const result = getDepartamento(id_departamento)
  res.json(result)
})

app.listen(3033, () => console.log('Servidor online'))
import express from 'express'
import pug from 'pug'
import { getDepartamentos, getDepartamento } from './departamentos.js'


const app = express()

app.get('/meuDepartamento', async (req, res) => {

  // Acessar o arquivo
  const currentFileUrl = import.meta.url
  const filePath = new URL('./templates/departamentos.pug', currentFileUrl).pathname.replace('/', '')

  const result = pug.renderFile(filePath, {
    name: 'João',
    idade: 10
  })

  res.send(result)
})


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

app.listen(3035, () => console.log('Servidor online'))
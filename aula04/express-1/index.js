import express from 'express'

const app = express()

// acessa toda pasta public e se por endpoint do html acessa o que tem no html tanto o css
app.use(express.static('public'))

// pagina inicial
app.get('/', (req, res) => res.send('Olá Dev'))

// Post
app.post('/', (req, res) => res.send('Recebi um POST'))
// comando terminal
// curl -X POST http://localhost:3033

// Rota Cliente
app.get('/clientes', (req, res) => res.send('Pagina de Clientes'))


app.get('/users/:usuario/repos', (req, res) => {
    const { usuario } = req.params
    res.send(`Funciona! o nome do usuario é ${usuario}`)
  })

// subir servidor http na porta 3033
app.listen(3033, () => console.log('Servidor online'))
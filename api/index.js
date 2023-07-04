import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.get('/', (req, res) => {
    res.send('Oi dev')
})

app.listen(3033, () => {
    console.log('Servidor Online')
})
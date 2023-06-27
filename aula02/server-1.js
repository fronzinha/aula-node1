import http from 'http'
import { readFile } from 'fs'
import currentDate from './currentDate.js'
import { myName, myCity } from './myName.js'
// const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

    // Logica - ela fica dentro apenas do BE

    const total = (25 + 36) / 2
    const frutas = ['banana', 'laranja', 'uva', 'melão']
    let texto = ''

    frutas.map(f => {
        texto += `<p>${f}</p>`
    })

    res.write(`<p>Ola mundo - aula 02 ${currentDate()}!</p><hr/>${texto}<hr/>`)
    res.write(`<span>Seu nome é: ${myName()} <br/>sua cidade é: ${myCity()}</span><hr/>`)


    // SEMPRE PRECISA TER O END
    res.end()

}).listen(3033)
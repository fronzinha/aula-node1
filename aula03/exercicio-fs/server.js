import http from 'http'
import { read, readFile } from 'fs'

http.createServer((req, res) => {
    const { url } = req
    const file = url === '/' ? 'index.html' : `${url.replace('/','')}.html`

    
    readFile(file, 'utf-8', (err, data) => {

        if (!err) {
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.write(data)
        } else {
            res.write('Nao Encontrado')
        }

        res.end()

    })

}).listen(3033)
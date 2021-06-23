const WebSocket = require("ws")
const express = require('express')
const app = express()

const wss = new WebSocket.Server({port: 8080})



app.listen(3000, () => console.log('http server is running smoothly'))


wss.on('connection', (ws, req) => {
   console.log(JSON.stringify({user: 'Server', body: 'you are connected'}))
   ws.on('open', () => console.log("a client connection was established"))
   ws.on('message', message => {
       console.log(message)
       wss.clients.forEach(client => {
           client.send(message)
       })
   })
})

// app.get('/', (req, res) => {
//     console.log("in")
// })








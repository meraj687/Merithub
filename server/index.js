
const WebSocket = require('ws')
const express = require('express')
const app = express()
const path = require('path')

app.use('/',express.static(path.resolve(__dirname,'../client')))

const server = app.listen(9876)

const wss = new WebSocket.Server({
 // port:9876
 server,
 verifyClient:(info)=>{
  return true
 }
})

// const clients = []

wss.on('connection' , function(ws){
 // clients.push(ws)
  ws.on('message',function(data){
   // ws.send(data)
   wss.clients.forEach(function each(client){
    if(client.readyState === WebSocket.OPEN){
     client.send(data);
    }
   })
  })
})
// console.log("Say hi to websocket on port 9876")


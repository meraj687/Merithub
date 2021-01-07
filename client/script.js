const url = `ws://localhost:9876/websocket`
const server = new WebSocket(url)

const message = document.getElementById('messages')
const text  = document.getElementById('text')
const input = document.getElementById('message') 
const button = document.getElementById('send') 

button.disabled = true
button.addEventListener('click' , sendMessage , false)

server.onopen = function(){
 // server.send("Hello")
 // server.send("Hey")
 button.disabled = false
}

server.onmessage = function(event){
 const {data} = event
 // const newMessage = document.createElement('div')
 // newMessage.innerHTML = `Server say data : ${data}`
 // message.appendChild(newMessage)
 generateMessageEntry(data,'Message')

}
function generateMessageEntry(msg,type){
 const newMessage = document.createElement('div')
 newMessage.innerText = `${type} say: ${msg}`
 message.appendChild(newMessage)
}

function sendMessage(){
 const roll = text.value
 const name = input.value
 generateMessageEntry(roll, 'Rollno')
 server.send(name)
}
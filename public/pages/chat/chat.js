// Make connection
var socket = io.connect(process.env.PORT)

var message = document.getElementById('message')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var name = document.getElementById('name')

// events

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message:message.value,
        name:document.getElementById('name').value,
    })
    document.getElementById('message').value = ""
})

// listen for events
socket.on('chat', function(data){
    if (data.message != "") {
        output.innerHTML += '<p>' + data.name+ ": " + data.message + '</p>'
        output.scrollTop = output.scrollHeight
    }
})

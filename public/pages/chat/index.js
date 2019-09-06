var express = require('express')
var socket = require('socket.io')


// app setup
var app = express()
var server = app.listen(process.env.PORT, listening)
function listening(){
    console.log("listening...")
}

// static file
app.use(express.static('../public'))

// socket setup
var io = socket(server)

io.on('connection', function(socket) {
    console.log("make socket connection" + socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    })
})

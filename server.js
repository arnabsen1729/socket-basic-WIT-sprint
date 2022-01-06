const express = require('express');
var cors = require('cors');
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:5500',
        methods: ['GET', 'POST'],
    },
});

app.use(cors());

io.on('connection', (client) => {
    client.emit('init', { data: 'hello world' });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});

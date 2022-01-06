const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (client) => {
    client.emit('init', { data: 'hello world' });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});

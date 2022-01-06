const socket = io('http://localhost:8080');

socket.on('init', handleInit);

function handleInit(msg) {
    console.log(msg);
}

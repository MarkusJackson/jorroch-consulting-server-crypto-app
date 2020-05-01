const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server); // WebSocket-Manager. Verwaltet alle offenen Socket. Jeder User hat einen eigenen Socket.

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
	console.log('CryptoServer: We have a new subscriber.');
	socket.emit('message', 'You are connectdd to the jorroch-consulting realtime crypto push service.');

	socket.on('disconnect', () => {
		console.log('CryptoServer: Subscriber disconnected.');
	});
});
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Crypto-Server has started on port ${PORT}`));

module.exports = io;

require('./coinbaseSocketListener');

/*
 *
 * Create Coinbase-Socket-Client, connect to Coinbase-Socket-Server, subscribe the ticker
 * and send the ticks to all clients, that are connected to the crypto-Server.
 *
 */
const cryptoWebSocketServer = require('./cryptoServer');
const CoinbasePro = require('coinbase-pro');

const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD']);

websocket.on('open', () => {
	console.log('CryptoServer-Coinbase-Listener: Websocket is open');
	cryptoWebSocketServer.emit('message', 'The Server has established a Web-Socket-Connetion to coinbase.');
});

websocket.on('message', (data) => {
	if (data.type === 'ticker') {
		cryptoWebSocketServer.emit('ticker', data);
	}
});
websocket.on('error', (err) => {
	cryptoWebSocketServer.emit('message', 'Coinbase returned an error: ', err);
});
websocket.on('close', () => {
	cryptoWebSocketServer.emit('message', 'The Servers connection to coinbase has been disconnected.');
});

async function reSubscribe() {
	await new Promise((r) => setTimeout(r, 3000));
	console.log('CryptoServer-Coinbase-Listener: Resubscribing.....');

	websocket.unsubscribe({ channels: ['full', 'heartbeat'] });
	websocket.subscribe({ product_ids: ['BTC-USD', 'ETH-USD'], channels: ['ticker'] });
}

reSubscribe();

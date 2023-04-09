export default {
	data: {
		name: 'ping',
		description: 'Ping? Pong!',
	},
	async execute(message) {
		message.reply(`pong\nAPI latency: ${message.client.ws.ping} ms`);
	},
};
module.exports = {
    name: 'ping',
    description: 'Ping? Pong!',
    execute(message) {
        message.reply(`pong\nAPI latency: ${message.client.ws.ping} ms`);
    },
}
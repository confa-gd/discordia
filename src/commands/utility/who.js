const { name } = require('../../../config.json');

module.exports = {
    name: 'who',
    description: 'Who\'s the bot?',
    execute(message) {
        message.channel.send(`I'm ${name}.`);
    },
}
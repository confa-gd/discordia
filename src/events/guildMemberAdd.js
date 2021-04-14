const { greetPhrases, greetChannel } = require('../../config.json');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        // Send the message to a designated channel on a server
        const channel = member.guild.channels.cache.find(ch => ch.name === greetChannel);

        // Do nothing if the channel wasn't found on the server
        // if (!channel) return;

        // Choose one phrase from greetPhrases randomly and construct greeting message
        let greeting = `Полку кармаков прибыло. Привет ${member} ${greetPhrases[Math.floor(Math.random() * greetPhrases.length)]}`;
        channel.send(greeting);
        
    },
};
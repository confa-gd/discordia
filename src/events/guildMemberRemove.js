const { byePhrases, byeChannel } = require('../../config.json');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        // Send the message to a designated channel on a server
        const channel = member.guild.channels.cache.find(ch => ch.name === byeChannel);

        // Do nothing if the channel wasn't found on the server
        if (!channel) return;

        // Choose one phrase from greetPhrases randomly and construct greeting message
        let goodbye = `${byePhrases[0]} ${member} (${member.user.tag})`;
        channel.send(goodbye);
        
    },
};
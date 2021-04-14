const { prefix } = require('../../config.json');

module.exports = {
    name: 'message',
    execute(message, client) {
        console.log(`${message.author.tag}@${message.channel.name}: ${message.content}`);

        // If the message doesnt't start with the prefix or is from a bot, exit early
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        // Parse arguments and separate command provided by user
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
    
        // If command is valid, get if from client's collection
        // If not (or not found in aliases also) exit early
        const command = client.commands.get(commandName) ||
                        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
    
        // Check for server only command, should deny in DMs
        if (command.guildOnly && message.channel.type === 'dm') {
            return message.reply('That command can only be executed on the server')
        }
    
        // Check for arguments presence and provide correct usage
        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}.`;
            if (command.usage) {
                reply += `\nThe proper usage would be:\`${prefix}${command.name} ${command.usage}\``;
            }
            return message.channel.send(reply);
        }
    
        // Call command's .execute() method and pass in message and args
        try {
            command.execute(message, args);
        } catch (err) {
            console.log(err);
        }
        
    },
};
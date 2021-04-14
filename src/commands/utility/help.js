const { prefix } = require('../../../config.json');

module.exports = {
    name: 'help',
    description: 'List all commands of man about specific command',
    aliases: ['commands'],
    usage: '[command name]',
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push(`Command list:\n`);
            data.push(commands.map(command => command.name).join('\n'));
            data.push(`\nuse ${prefix}help [command name] to get manual for specific command`);

            return message.author.send(data, { split: true })
                    .then(() => {
                        if (message.channel.type === 'dm') return;
                        message.reply(`Check DMs`);
                    })
                    .catch(err => {
                        console.err(`Could not send help DM to ${message.author.tag}\n`, err);
                        message.reply(`Can't send you a DM. Do you have DMs disabled?`);
                    });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));

        if (!command) {
            return message.reply(`that is not a valid command.`);
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        // TODO add cooldown here also when it's implemented properly
        // https://discordjs.guide/command-handling/adding-features.html#a-dynamic-help-command
        // data.push(`**Cooldown:** ${command.cooldown || 3} s`);

        message.channel.send(data, { split: true });

    },
};
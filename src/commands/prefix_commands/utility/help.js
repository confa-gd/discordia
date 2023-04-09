import { prefix } from '../../../../config.js';
import chalk from 'chalk';

export default {
	data: {
		name: 'help',
		description: 'List all prefix commands or man about specific command',
		usage: '[command name]',
	},
	async execute(message, args) {
		const data = [];
		const { prefixCommands: commands } = message.client;
		console.log(commands);

		if (!args.length) {
			data.push('Command list:\n');
			data.push(commands.map(command => command.data.name).join('\n'));
			data.push(`\nUse ${prefix} help [command name] to get manual for specific command`);

			return message.author.send({ content: data.join('\n') })
				.then(() => {
					if (message.channel.type === 'dm') {
						return;
					}
					message.reply('Check DMs');
				})
				.catch(error => {
					console.error(chalk.red('[ERROR]'), `Could not send help DM to ${message.author.tag}\n`, error);
					message.reply('Can\'t send you a DM. Do you have DMs enabled?');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name);
		if (!command) {
			return message.reply('That is not a valid command.');
		}

		data.push(`**Name**: ${command.data.name}`);
		if (command.data.description) {
			data.push(`**Description**: ${command.data.description}`);
		}
		if (command.data.usage) {
			data.push(`**Usage**: ${prefix}${command.data.name} ${command.data.usage}`);
		}

		const channel = message.channel;
		channel.send({ content: data.join('\n') });
	},
};
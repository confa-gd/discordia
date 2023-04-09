import { Events } from 'discord.js';
import { greetPhrases, greetChannel } from '../../config.js';
import chalk from 'chalk';

export default {
	name: Events.GuildMemberAdd,
	async execute(member) {
		console.log(chalk.blue('[NEW MEMBER]'), member);
		// Send message to the designated channel
		const channel = member.guild.channels.cache.find(ch => ch.name === greetChannel);

		// Do nothing if the channel wasn't found on the server
		if (!channel) {
			return;
		}

		// Choose one phrase from greetPhrases randomly and send greeting message
		const greeting = `Полку кармаков прибыло. Привет ${member} ${greetPhrases[Math.floor(Math.random() * greetPhrases.length)]}`;
		channel.send(greeting);
	},
};

import { Events } from 'discord.js';
import { byePhrases, byeChannel } from '../../config.js';
import chalk from 'chalk';

export default {
	name: Events.GuildMemberRemove,
	async execute(member) {
		console.log(chalk.yellow('[MEMBER LEFT]'), member);
		// Send message to the designated channel
		const channel = member.guild.channels.cache.find(ch => ch.name === byeChannel);

		// Do nothing if the channels wasn't found on the server
		if (!channel) {
			return;
		}

		// Choose one phrase from byePhrases randomly and send bye message
		const goodbye = `${byePhrases[Math.floor(Math.random() * byePhrases.length)]} ${member} (${member.user.tag})`;
		channel.send(goodbye);
	},
};

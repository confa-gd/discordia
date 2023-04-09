export default {
	data: {
		name: 'avatar',
		description: 'Show user avatar',
	},
	async execute(message) {
		if (!message.mentions.users.size) {
			message.reply(`${message.author}'s avatar: ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
			return;
		}

		await message.mentions.users.map(user => {
			message.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ format: 'png', dynamic: true })}`);
		});
	},
};
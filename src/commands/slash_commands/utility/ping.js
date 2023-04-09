import { SlashCommandBuilder } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping? Pong!'),
	async execute(interaction) {
		await interaction.reply(`Pong!\nAPI latency: ${interaction.client.ws.ping} ms`);
	},
};

import { Events } from 'discord.js';
import chalk from 'chalk';

// Listener for interactions of slash command type
export default {
	name: Events.InteractionCreate,
	async execute(interaction) {
		// If interaction is not slash command type, return then
		if (!interaction.isChatInputCommand()) {
			return;
		}

		// If no such slash command
		const slashCommand = interaction.client.slashCommands.get(interaction.commandName);
		if (!slashCommand) {
			console.log(chalk.yellow(['WARNING']), `Someone called non-existent command: ${interaction.commandName}`);
			return;
		}

		// If OK, proceed with the command
		try {
			await slashCommand.execute(interaction);
		}
		catch (error) {
			console.error(chalk.red['ERROR'], error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There war an error while executing this command', ephemeral: true });
			}
			else {
				await interaction.reply({ content: 'There was an error while executeing this command', ephemeral: true });
			}
		}

		console.log(chalk.magenta('[INTERACTION]'), interaction);
	},
};
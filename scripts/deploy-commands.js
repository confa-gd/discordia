import 'dotenv/config.js';
import { REST, Routes } from 'discord.js';
import { listCommandFiles } from '../src/lib/load_commands.js';

const token = process.env.DISCORDIA_TOKEN;
const clientId = process.env.DISCORDIA_CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];

// Grab all the command files
// TODO define command types/paths in config and import as constans
const commandFiles = listCommandFiles('slash_commands');

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const { default: command } = await import(file);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// Deploy commands
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(

			// Global registration
			Routes.applicationCommands(clientId),

			// Guild registration
			// Routes.applicationGuildCommands(clientId, guildId),

			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands`);
	}
	catch (error) {
		console.error(error);
	}
})();
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
import { Collection } from 'discord.js';
import chalk from 'chalk';

// Returns Collection of commands of the provided type
const loadCommandCollection = async (cmdType) => {
	const cmdCollection = new Collection();
	const commandFiles = listCommandFiles(cmdType);

	for (const file of commandFiles) {
		try {
			const { default: command } = await import(file);
			if (command && 'data' in command && 'execute' in command) {
				// Set a new item in the Collection with the key as the command name
				// and the value as the exported module
				cmdCollection.set(command.data.name, command);
			}
			else {
				console.error(
					chalk.red('[ERROR]'),
					`unable to load ${relative('./src/commands', file)}. Bad module export or structure?`,
				);
			}
		}
		catch (error) {
			console.error(error);
		}
	}

	return cmdCollection;
};

// Returns array of absolute file paths for commands of the provided type
export const listCommandFiles = (cmdType) => {
	const filePaths = [];

	// Absolute path to the command type dir
	const cmdTypePath = join(
		dirname(
			fileURLToPath(new URL('.', import.meta.url)),
		),
		`./commands/${cmdType}`,
	);

	// Gather command file paths from all categories of the type
	const cmdCategories = readdirSync(cmdTypePath);
	for (const category of cmdCategories) {
		const cmdPath = join(cmdTypePath, category);
		const cmdFiles = readdirSync(cmdPath).filter(file => file.endsWith('.js'));
		for (const file of cmdFiles) {
			const filePath = join(cmdPath, file);
			filePaths.push(filePath);
		}
	}

	return filePaths;
};

export default loadCommandCollection;

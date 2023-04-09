import { Client, GatewayIntentBits } from 'discord.js';
import loadCommandCollection from './lib/load_commands.js';

// Command types located in paths relative to ./commands
const SLASH_COMMANDS = 'slash_commands';
const PREFIX_COMMANDS = 'prefix_commands';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessages,
	],
});

// Load command collections
console.log(`Loading commands/${SLASH_COMMANDS}`);
client.slashCommands = await loadCommandCollection(SLASH_COMMANDS);
console.log(`Loading commands/${PREFIX_COMMANDS}`);
client.prefixCommands = await loadCommandCollection(PREFIX_COMMANDS);

// Load events
// TODO legacy refactoring
console.log('Loading events');
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
const eventsPath = join(
	dirname(
		fileURLToPath(new URL('.', import.meta.url)),
	),
	'./src/events/',
);
const eventFiles = readdirSync(eventsPath).filter(f => f.endsWith('.js'));
for (const file of eventFiles) {
	const filePath = join(eventsPath, file);
	const { default: event } = await import(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

export { client };
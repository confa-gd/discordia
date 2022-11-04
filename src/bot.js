require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const token = process.env.DISCORDIA_TOKEN;
const { prefix } = require('../config.json');

const client = new Discord.Client({
    restRequestTimeout: 600000,
});

// Make array of event files
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
// Read event files
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.commands = new Discord.Collection();
// Read array of command subfolders, starting with ./src because runtime path
// is one level above the bot.js location
const commandFolders = fs.readdirSync('./src/commands');
// Read command files in those subfolders and set commands to the collection client.commands
for (const folder of commandFolders) {{
    const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}}

client.login(token);
import { allowedRoles } from '../../../../config.js';
import chalk from 'chalk';

export default {
	data: {
		name: 'role',
		description: 'Provide requested role to user',
		guildOnly: true,
		args: true,
		usage: '<role>',
	},
	async execute(message, args) {
		const { cache } = message.guild.roles;
		// TODO implement many roles assignment
		const role = cache.find(r => r.name === args[0]);
		if (role) {
			// ! THIS SECURITY CHECK IS CRUCIAL
			if (!allowedRoles.includes(role.name)) {
				message.reply(`You can't have this role. Allowed roles are:\n${allowedRoles.join('\n')}`);
				return;
			}
			else if (message.member.roles.cache.has(role.id)) {
				message.member.roles.remove(role);
				message.reply(`You no longer have the role **${role.name}**.`);
			}
			// Check for role permissions here for better secutiry
			// if (role.permissions...) {}
			else {
				message.member.roles.add(role)
					.then(member => message.reply(`You now have the role **${role.name}**.`))
					.catch(error => {
						console.error(chalk.red('[ERROR]'), error);
						message.reply('Can\'t add role.');
					});
			}
		}
		else {
			message.reply('No such role on this server.');
		}
	},
};
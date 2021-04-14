const { allowedRoles } = require('../../../config.json');

module.exports = {
    name: 'role',
    description: 'Provide requested role to user',
    guildOnly: true,
    args: true,
    usage: '<role>',
    execute(message, args) {
        const { cache } = message.guild.roles;
        const role = cache.find(role => role.name === args[0]);
        console.log(args);
        if (role) {
            // THIS CHECK IS SECURITY CRITICAL
            if (!allowedRoles.includes(role.name)) {
                message.reply(`you can't have this role, allowed roles are:\n${allowedRoles.join('\n')}`);
                return;
            }
            else if (message.member.roles.cache.has(role.id)) {
                message.member.roles.remove(role);
                message.reply(`you no longer have the role **${role.name}**.`);
            }
            // Check for role permission here for better security
            // if (role.permissions...) {}
            else {
                message.member.roles.add(role)
                    .then(member => message.reply(`you now have the role **${role.name}**.`))
                    .catch(err => {
                        console.log(err);
                        message.reply('can\'t add role.');
                    });
            }
        }
        else {
            message.reply('no such role on this server.');
        }
    }
}

const config = require('../config.json');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {

        // Slash Commands
        if (interaction.isChatInputCommand()) {

            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (err) {
                console.log(err);
                interaction.reply({ content: "Erreur commande", ephemeral: true });
            }
        }

        // Buttons (tickets)
        if (interaction.isButton()) {

            if (interaction.customId === "create_ticket") {

                const channel = await interaction.guild.channels.create({
                    name: `ticket-${interaction.user.username}`,
                    parent: config.ticketCategoryId,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: ["ViewChannel"]
                        },
                        {
                            id: interaction.user.id,
                            allow: ["ViewChannel", "SendMessages"]
                        }
                    ]
                });

                interaction.reply({ content: `Ticket créé : ${channel}`, ephemeral: true });
            }
        }
    }
};

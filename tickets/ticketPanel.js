const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: "ticketpanel"
    },

    async execute(interaction) {

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('create_ticket')
                    .setLabel('Créer un ticket')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({
            content: "🎫 Support - Clique pour ouvrir un ticket",
            components: [row]
        });
    }
};

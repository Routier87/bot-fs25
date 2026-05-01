const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.login(config.token);

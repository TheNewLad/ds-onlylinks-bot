require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {});

client.on('message', message => {
        setTimeout(() => {
            validateMessage(message);
        }, 5000)
    
});

client.login(process.env.BOT_TOKEN);

const validateMessage = message => {
    if(message.embeds.length === 0) {
        message.delete()
            .catch((error) => console.error(error));
    }
};
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   bot.user.setPresence({
        game: {
            type: "dnd",
        }
});

client.login(process.env.BOT_TOKEN)

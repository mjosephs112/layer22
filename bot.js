const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
	
	bot.user.setStatus('layer22.jp')

  }
});

client.login(process.env.BOT_TOKEN);

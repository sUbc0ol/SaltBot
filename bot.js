/*
Justin Faler
12/8/16
Discord bot for #pizzagate 
*/
var Discord = require('discord.js');
const bot = new Discord.Client(); 
var prefix = ("!")


bot.on('ready', () => {
	console.log('Booting the mother fuck uppppp')
});

bot.on("guildMemberAdd", member => { 
let guild = member.guild; 
guild.defaultChannel.sendMessage('Welcome to the imgur channel! ${member.user}')
});

bot.on("guildCreate", guild => {
	console.log('New guild added :: ${guild.name}, owned by ${guild.owner.user.username}')
guild.defaultChannel.sendMessage('Hello there! my name is gup! thank you for inviting me to **${guild.name}**')
});

//messages 
bot.on("message", msg => {
	if(msg.content.startsWith(prefix + "smoke")) { 
		msg.channel.sendMessage("Weed!")
	}
 else 
	if(msg.content.startsWith(prefix + "who")) { 
        msg.channel.sendMessage("immune is the author!")			
        }
	else 
		if(msg.content.startsWith(prefix + "reddit")) {
			msg.channel.sendMessage("https://www.reddit.com/r/random/")
		}
		else
			if(msg.content.startsWith(prefix + "meme")) {
				msg.channel.sendMessage("https://www.imgur.com/random")
			}
        else 

	    if(msg.content.includes(prefix + "help")) {
		if(msg.author.bot) return;
		msg.channel.sendMessage("Here are some functions !smoke, !who")
}
else 
  if(msg.content.startsWith("")) {
}
})
 
 
 bot.login("Oauth Token") //replace Oauth Token 

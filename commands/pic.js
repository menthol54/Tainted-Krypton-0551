const MessageAttachment = require('discord.js')
module.exports = {
	name: 'pic',
	description: 'send a pic',
	execute(message, _args, Discord, _MessageAttachment){
		const m = require('../lists/picturelist.js')
		const memes = m.pics
        const randMeme = Math.floor(Math.random() * memes.length)
        const select = memes[randMeme] 
		/* message.channel.send('Wait a moment')
		message.channel.send(attach)
		*/
		const meme = new Discord.MessageEmbed()
		.setTitle(`${message.author.username}, Have a meme my little pogchamp.`)
		.setColor(3447003)
		.setImage(select)
		message.channel.send({embed: meme})
		console.log('Attachment sent.')
	}
};

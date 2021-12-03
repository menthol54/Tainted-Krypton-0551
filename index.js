const Discord= require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const prefix = '.';
const fs = require('fs');

client.commands = new Discord.Collection();
const comFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of comFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}



client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'scrape') {
    client.commands.get('scrape').execute(message, args, Discord)
  }
  if (command === 'ping') {
    client.commands.get('ping').execute(message, args, Discord)
  }
  if (command === 'muzan'){
    client.commands.get('muzan').execute(message, args, Discord)
  }
  if (command === 'meme'){
    client.commands.get('pic').execute(message, args, Discord)
  }
  if (command === 'train'){
    client.commands.get('train').execute(message, args, Discord, client)
  }
  if (command === 'list'){
    client.commands.get('list').execute(message, args, Discord)
  }
  if (command === 'clear'){
    client.commands.get('clear').execute(message, args, Discord)
  }
  if (command === 'tvar'){
    client.commands.get('variant').execute(message, args, Discord, client)
  }
  if (command === 'createbreathe'){
    client.commands.get('create').execute(message, args, Discord, client)
  }
  if (command === 'combat'){
    client.commands.get('combat').execute(message, args, Discord)
  }
  if (command === 'ttt'){
    client.commands.get('ttt').execute(message, args, Discord)
  }
});

client.on('message', (msg) =>{
  if(msg.content === 'Muzan prefix'){
    msg.channel.send(`${msg.author} It is ${prefix}`)
  }
  if (msg.content === 'Muzan marry me'){
    msg.channel.send(`Ask my father for permission. He\'s very... protective ${msg.author}`)
  }
  if(msg.content === 'Muzan, breath list'){
    msg.channel.send('https://cdn.discordapp.com/attachments/826649301056487477/849067810562244608/1739af4375e15af9fc0a1df653ad3d332b88180br1-512-265v2_uhq.png')
  }
  if (msg.content === 'Hey Muzan' || msg.content === 'Hey Muzan.'){
    msg.channel.send(`Hey ${msg.author}. How are you?`)
  }
  if (!msg.author.bot && msg.content ==='Muzan?'|| msg.content === 'Are you Muzan?'){
    msg.channel.send(`Ha! You thought it was Muzan Kibutsuji! But it was me: https://tenor.com/view/dio-jojo-anime-cartoon-japanese-gif-7432836`)
  }else{
    return;
  }
client.on('guildMemberAdd', guildMember => {
  const welRole = guildMember.guild.roles.cache.find(r => r.name === 'member')
  guildMember.roles.add(welRole)
})

})

client.on('ready', () => {
  console.log(`${client.user.tag} is online`)
})
//msg.content === 'Muzan?' || msg.content === 'Are you Muzan?' ||'Are you Muzan?' && msg.content !== client.user.tag

client.login(config.BOT_TOKEN)
/*
        message.guild.roles.create({
            data: {
              name: 'Super Cool People',
              color: 'BLUE',
            },
            reason: 'we needed a role for Super Cool People',
          })
            .then(console.log)
            .catch(console.error);
*/
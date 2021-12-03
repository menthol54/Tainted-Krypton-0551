module.exports = {
    name: 'combat',
    description: 'combst dydtrm',
    execute(message, args, Discord, client){
        const score = 0
        const power = 10
        const health = 100
        const enemyPower = 100
        const enemyHealth = 100
        const fight = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} vs Temple Demon`)
        .setColor(3447003)
        .setDescription('You have encountered the **Temple Demon**!')
        .setImage('https://cdn.discordapp.com/attachments/826649301056487477/851464571285798952/temde.png')
        let send = message.channel.send({embed: fight})
    }
}
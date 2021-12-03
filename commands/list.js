module.exports = {
    name: 'list',
    description: 'list of commands',
    execute(message, _args, Discord){
        let list = new Discord.MessageEmbed()
        .setTitle('Known Commands')
        .setDescription('All working commands.')
        .addFields(
            {name: 'Ping', value: '.ping Tells you the ping in ms'}
        )
        message.channel.send(list)
    }
}

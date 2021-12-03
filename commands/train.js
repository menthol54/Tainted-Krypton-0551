module.exports = {
    name:'train',
    description: 'breathing style',
    async execute(message, args, Discord, client){
        require('events').EventEmitter.prototype._maxListeners = 25;
        const channel = '826649301056487477'
        const flameBreathingRole = message.guild.roles.cache.find(role => role.name === 'Flame Breathing')
        const waterBreathingRole = message.guild.roles.cache.find(role => role.name === 'Water Breathing')
        const thunderBreathingRole = message.guild.roles.cache.find(role => role.name === 'Thunder Breathing')
        const windBreathingRole = message.guild.roles.cache.find(role => role.name === 'Wind Breathing')
        const rockBreathingRole = message.guild.roles.cache.find(role => role.name === 'Rock Breathing')
        const insectBreathingRole = message.guild.roles.cache.find(role => role.name === 'Insect Breathing')
        const flameBreathing = '🔥'
        const waterBreathing = '🌊'
        const windBreathing = '💨'
        const rockBreathing = '🏔'
        const thunderBreathing = '⚡'
        const insectBreathing = '🐝'



        let Embed = new Discord.MessageEmbed()
        .setTitle('Demon Slayer Training')
        .setColor(3447003)
        .setDescription('Learn From The Hashira and gain a breathing from.')
        .addFields(
            {name: 'Water', value: `You were trained by Giyuu Tomioka. ${waterBreathing}`},
            {name: 'Fire', value: `You were trained by Kyojuro Rengoku. ${flameBreathing}`},
            {name: 'Wind', value: `You were trained by Senami Shinugazawa. ${windBreathing}`},
            {name: 'Rock', value: `You were trained by Gyomei Himejima. ${rockBreathing}`},
            {name: 'Thunder', value: `You were trained by Jigoro Kuwajima. ${thunderBreathing}`},
            );

    
       let reac = await message.channel.send({embed: Embed}).then(embedMessage => {
            embedMessage.react('🌊')
            embedMessage.react('🔥')
            embedMessage.react('💨')
            embedMessage.react('🏔')
            embedMessage.react('⚡')

            client.on('messageReactionAdd', async (reaction, user) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
                if (reaction.emoji.name === flameBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(flameBreathingRole);
                }
                if (reaction.emoji.name === waterBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(waterBreathingRole);
                }
                if (reaction.emoji.name === thunderBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(thunderBreathingRole);
                }
                if (reaction.emoji.name === rockBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rockBreathingRole);
                }
                if (reaction.emoji.name === windBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(windBreathingRole);
                }            
                if (reaction.emoji.name === insectBreathing){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(insectBreathingRole);
                }       
        })
        });
            client.on('messageReactionRemove', async (reaction, user) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
                if (reaction.message.channel.id === channel) {
                    if (reaction.emoji.name === flameBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(flameBreathingRole);
                    }
                    if (reaction.emoji.name === waterBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(waterBreathingRole);
                    }
                    if (reaction.emoji.name === thunderBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(thunderBreathingRole);
                    }
                    if (reaction.emoji.name === rockBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rockBreathingRole);
                    }
                    if (reaction.emoji.name === windBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(windBreathingRole);
                    }      
                    if (reaction.emoji.name === windBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(insectBreathingRole)
                    }
            } else{
                return;
            }
        })

    }
}
//"🌊", "🔥", "💨", "🏔", "⚡"


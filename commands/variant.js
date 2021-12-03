module.exports = {
    name: 'variant',
    description: 'Water style variations',
    async execute(message, args, Discord, client){
        const insectBreathingRole = message.guild.roles.cache.find(role => role.name === 'Insect Breathing')
        const flowerBreathingRole = message.guild.roles.cache.find(role => role.name === 'Flower Breathing')
        const serpentBreathingRole = message.guild.roles.cache.find(role => role.name === 'Serpent Breathing')
        const loveBreathingRole = message.guild.roles.cache.find(role => role.name === 'Love Breathing')
        const mistBreathingRole = message.guild.roles.cache.find(role => role.name === 'Mist Breathing')
        const beastBreathingRole = message.guild.roles.cache.find(role => role.name === 'Beast Breathing')
        const soundBreathingRole = message.guild.roles.cache.find(role => role.name === 'Sound Breathing')
        const flowerBreathing = '🌹'
        const serpentBreathing = '🐍' 
        const insectBreathing = '🐝'
        const loveBreathing = '❤'
        const mistBreathing = '🌁'
        const beastBreathing = '🐗'
        const soundBreathing = '🔊'


        const channel = '826649301056487477'
        
        if(args[0] === 'water'){
            const waterVar = new Discord.MessageEmbed()
            .setTitle('Water Variant(s)')
            .setColor(3447003)
            .setDescription('Learn A Variant')
            .addFields(
                {name: 'Flower', value: `You were trained by Kanae Kocho. ${flowerBreathing}`},
                {name: 'Serpent', value: `You were trained by Iguro Obanai. ${serpentBreathing}`},
                {name: 'Insect', value: `You were trained by Shinobu Kocho. ${insectBreathing}`},
                );
            const reacWater = await message.channel.send({embed: waterVar}).then(embedMessage => {
                embedMessage.react(flowerBreathing)
                embedMessage.react(serpentBreathing)
                embedMessage.react(insectBreathing)
            });
        };
        if(args[0] === 'fire'){
            const fireVar = new Discord.MessageEmbed()
            .setTitle('Flame Variant(s)')
            .setColor(3447003)
            .setDescription('Learn A Variant')
            .addFields(
                {name: 'Love', value: `You were trained by Mitsuri Kanroji. ${loveBreathing}`},
                );
            const reacFire = await message.channel.send({embed: fireVar}).then(embedMessage =>{
                embedMessage.react(loveBreathing)
            });
        }
        if(args[0] === 'wind'){
            const windVar = new Discord.MessageEmbed()
            .setTitle('Wind Variant(s)')
            .setColor(3447003)
            .setDescription('Learn A Variant')
            .addFields(
                {name: 'Mist', value: `You were trained by Mitsuri Kanroji. ${mistBreathing}`},
                {name: 'Beast', value:`You were raised by wild boars. ${beastBreathing}`}
                );
            const reacWind = await message.channel.send({embed: windVar}).then(embedMessage =>{
                embedMessage.react(mistBreathing)
                embedMessage.react(beastBreathing)
            })
        }
        if(args[0] === 'thunder'){
            const thunderVar = new Discord.MessageEmbed()
            .setTitle('Thunder Variant(s)')
            .setColor(3447003)
            .setDescription('Learn A Variant')
            .addFields(
                {name: 'Sound', value: `You were drained by the Flamboyant God Of Festivites, Tengen Uzui. ${soundBreathing}`}
            );
            const reacThunder = await message.channel.send({embed: thunderVar}).then(embedMessage =>{
                embedMessage.react(soundBreathing)
            })
        } else{
            return message.channel.send(`${message.author} Please do it like this: .tvar fire or water or thunder or wind.`)
        }
    
                client.on('messageReactionAdd', async (reaction, user) => {
                    if(reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;
                    if (reaction.emoji.name === flowerBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(flowerBreathingRole);
                    }
                    if (reaction.emoji.name === serpentBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(serpentBreathingRole);
                    }
                    if (reaction.emoji.name === insectBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(insectBreathingRole);
                    }
                    if (reaction.emoji.name === loveBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(loveBreathingRole);
                    }
                    if (reaction.emoji.name === mistBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(mistBreathingRole)
                    }
                    if (reaction.emoji.name === beastBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(beastBreathingRole)
                    }
                    if (reaction.emoji.name === soundBreathing){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(soundBreathingRole)
                    }
                });
                client.on('messageReactionRemove', async (reaction, user) => {
                    if(reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;
                    if (reaction.message.channel.id === channel) {
                        if (reaction.emoji.name === flowerBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(flowerBreathingRole);
                        }
                        if (reaction.emoji.name === serpentBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(serpentBreathingRole);
                        }
                        if (reaction.emoji.name === flowerBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(flowerBreathingRole);
                        }
                        if (reaction.emoji.name === loveBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(loveBreathingRole)
                        }
                        if (reaction.emoji.name === mistBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(mistBreathingRole)
                        }
                        if (reaction.emoji.name === beastBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(beastBreathingRole)
                        }
                        if (reaction.emoji.name === soundBreathing){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(soundBreathingRole)
                        }
                } else{
                    return;
                }
            })
    }       
};
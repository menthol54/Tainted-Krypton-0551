module.exports = {
    name: 'create',
    description: 'makes roles',
    execute(message, args, Discord, client){
        const flameBreathing = 'Flame Breathing'
        const waterBreathing = 'Water Breathing'
        const windBreathing = 'Wind Breathing'
        const rockBreathing = 'Rock Breathing'
        const thunderBreathing = 'Thunder Breathing'
        const insectBreathing = 'Insect Breathing'
        const flowerBreathing = 'Flower Breathing'
        const serpentBreathing = 'Snake Breathing' 
        const loveBreathing = 'Love Breathing'
        const mistBreathing = 'Mist Breathing'
        const beastBreathing = 'Beast Breathing'
        const soundBreathing = 'Sound Breathing'
        if (client.users.cache.find(user => user.id === '671071359664783382')){
            message.guild.roles.create({
                /*data: {
                  name: 'Sound Breathing',
                  color: '145d66',
                },
                data: {
                    name: 'Water Breathing',
                    color: 'BLUE',
                },
                data : {
                    name: 'Flame Breathing',
                    color: '990000',
                },
                data: {
                    name: 'Rock Breathing',
                    color: '045714',
                },
                data: {
                    name: 'Wind Breathing',
                    color: 'WHITE',
                },
                data: {
                    name: 'Thunder Breathing',
                    color: 'YELLOW',
                },
                data: {
                    name: 'Serpent Breathing',
                    color: 'bec2bd',
                },
                data: {
                    name: flowerBreathing,
                    color: '0f9faf',
                },
                data: {
                    name: insectBreathing,
                    color: 'b321d1',
                },
                data: {
                    name: beastBreathing,
                    color: 'GREY',
                },
                data: {
                    name: loveBreathing,
                    color: 'd11a88',
                },
                data: {
                    name: mistBreathing,
                    color: '6275a2',
                },
                */
                data: {
                    name: 'test',
                    color: 'BLUE',
                }
              })

                .then(console.log)
                .catch(console.error);
        } else {
            return message.channel.send('No')
        }


    }
}
/*
                data: {
                    name: ,
                    color: '',
                },
                */
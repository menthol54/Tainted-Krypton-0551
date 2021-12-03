module.exports = {
    name: 'clear',
    description: 'clears stuff',
async execute(message, args,){
        if(!args[0]) return message.reply('Specify how many huma-- er... maessages... yes. How many message shall I delete?')
        if(isNaN(args[0])) return message.reply('Number please. I may be immortal but time is precious.')

        if (args[0] >= 100) return message.reply('I can only remove 1 time period at a time. Less than 100 messages is ideal')
        if (args[0] < 1) return message.reply('I cannot erase what has not happened. Let\'s keep things positive shall we?')
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        })
    }

}
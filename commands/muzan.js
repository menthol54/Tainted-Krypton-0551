module.exports = {
    name: 'muzan',
    description: 'speaks',
    execute(message, _args, _Discord){
        const mod = require('../lists/jokelist.js')
        let muzanList = mod.muzanLista
        const randMuzan = Math.floor(Math.random() * muzanList.length)
        const select = muzanList[randMuzan] 
		message.channel.send(select)
    }
};
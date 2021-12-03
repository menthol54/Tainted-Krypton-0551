module.exports = {
    name: 'ttt',
    description: 'tiktaktoe',
    execute(message, args, Discord, client){
        const ticTacToe = require('discord-tictactoe') 
        new ticTacToe({language: 'en'}).attach(client)
    }
}
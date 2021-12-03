module.exports={
    name:'ping',
    description: "Latency",
    execute(message, args){
        const ping = Date.now() - message.createdTimestamp
        message.reply(`Latency is ${ping}ms`);
        }
      };
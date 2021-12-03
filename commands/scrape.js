const c = require("cheerio")
const rp = require("request-promise")

module.exports = {
  name: 'scrape',
  description: 'Scapes web site',
  execute(message, _args, Discord) {
    const scrape = rp('https://thegalacticherald.com/article/the-life-of-darth-caldoth', (html, _Discord) => {
      message.channel.send(c.load('<a href=', html));
      message.channel.send(html);
    })
  }
};
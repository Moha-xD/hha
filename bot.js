const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#"
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
client.on("guildMemberAdd", member => {
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {
onoff: 'Off'
}
  if(antibots[member.guild.id].onoff === 'Off') return;
if(member.user.bot) return member.kick()
})
 
fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
 
})
 
client.login(process.env.BOT_TOKEN);

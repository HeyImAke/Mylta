﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "a";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511280736452608041"; // ايدي السررفر
var channel = "523159243302502400";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTIzMTU3MTU3MjIzNDY0OTY5.DvVc5g.bOS5nYES-3xOj2RwVDd1FV7K6l4");

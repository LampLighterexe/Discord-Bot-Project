const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '*';
const { joinVoiceChannle } = require('@discordjs/voice');
/*const connection = joinVoiceChannle({
  channelId: 927590527950553168,
  guildId: 927590080623804416,
  adapterCreator: channel.guild.voiceAdapterCreator,
  });*/



const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity(' Vine Thunds', { type: 'LISTENING' });
    });

//PLAYING: WATCHING: LISTENING: STREAMING:
client.on('message', message => {
  //if(message.content == "Among Us" || "among us"){
     // message.channel.send('you are sus')
  //}
  function thequent(){
  message.channel.send('<@376176320561938434>');
  }
    

    let args = message.content.substring(PREFIX.length).split(" ");

  if (message.author.bot) return;

  if(message.content == 'cs'){
    message.channel.send('cringe')
  }

    switch(args[0]){
      case 'help':
      message.channel.send('Current comands and features: ping: will return a string. funny: will return an image. voise: will join a voice call (noise coming soon). *more to come eventually.* ')
      break;
      case 'ping':
        message.channel.send('*vine boom*');
        break;
      case 'funny':
        message.channel.send({
          files: ['https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png']
        });
        break;
      case 'voice':
        const streamOptions = { seek: 0, volume: 1 };
        var voiceChannel = message.member.voice.channel;
        if(!message.member.voice.channel) return message.channel.send("I can not join the channel if your not in one"); //If you are not in the voice channel, then return a message
        voiceChannel.join()/*.then(connection => {
            const dispatcher = connection.play('vine-boom.mp3');
            dispatcher.on("finish", end => {
                voiceChannel.leave();
            });*/
        //});
        //message.member.voice.channel.join();
        
        break;
      case 'home' :
        for(var i =0; i < 5; i++){
          thequent();
        }
      }
    
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.login(process.env.token);

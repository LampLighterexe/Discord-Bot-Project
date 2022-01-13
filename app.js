const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '*';
const { joinVoiceChannle } = require('@discordjs/voice');
const { OpusEncoder } = require('@discordjs/opus');
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

//function thequent(){
  //message.channel.send('<@376176320561938434>');
  //}
  
//PLAYING: WATCHING: LISTENING: STREAMING:
client.on('message', message => {
     
    let args = message.content.substring(PREFIX.length).split(" ");

  if (message.author.bot) return;

  if(message.content == 'cs'){
    message.channel.send('cringe')
  }

    switch(args[0]){
      case 'help':
      message.channel.send('Current comands and features: ttsVine: will return a tts string. funny: will return an image. vine: will join a voice call and play a noise and leave. ping: will take user input of a name and the number of times. *more to come eventually maybe.* ')
      break;
      case 'ttsVine':
       message.channel.send('*vine boom*',{
         tts: true
         });
       break;
      case 'funny':
        message.channel.send({
          files: ['https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png']
        });
        break;
      case 'vine':
        const streamOptions = { seek: 0, volume: 1 };
        var voiceChannel = message.member.voice.channel;
        if(!message.member.voice.channel) return message.channel.send("I can not join the channel if your not in one"); //If you are not in the voice channel, then return a message
          voiceChannel.join().then(connection => {
           const dispatcher = connection.play('vine-boom.mp3');
            dispatcher.on("finish", end => {
              voiceChannel.leave();
        })
        });
        //message.member.voice.channel.join();
        
        break;
      case 'ping' :
        var num = 5;
       	const taggedUser = message.mentions.users.first();
         var tokens = message.content.split(" ");
         if(tokens.length > 2) {
          console.log(tokens[2]);
          num = tokens[2];
         } else {
           console.log("missing arg")
         }
         
        
        for(var i = 0; i < num; i++){
        message.channel.send('<@' + taggedUser.id + '>');
        }
      break;
      
    }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.login(process.env.token);

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '*';
const { joinVoiceChannle } = require('@discordjs/voice');
const { OpusEncoder } = require('@discordjs/opus');
const today = new Date();
var Timer = 3000;

const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity(' Vine Thunds', { type: 'LISTENING' });
    });
//PLAYING: WATCHING: LISTENING: STREAMING:

client.on('message', async message => {

const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('images/6bf.png');
  
    let args = message.content.substring(PREFIX.length).split(" ");
    let word = message.content.split(" ");

  if (message.author.bot) return;

  
  for (let i = 0; i < word.length; i++) {
    if(word[i] == 'cs'){
    message.channel.send('cringe')
    }
    if (word[i] == "owen"){
    message.channel.send('what the owen doin').then(botMessage => { 
    function edit() {
    botMessage.edit("old nasus");
    botMessage.channel.send({ embeds: [embed], files: ['images/nas.png'] });
    }
      setTimeout(edit, Timer);
      
    })
    }
  }
  

  //TODO figure out await
  //Update I just did a time out instdead becuase of awite being dumb. I may try some other time
  

  
  
//TODO Add an image editor and maybe hangman 
    switch(args[0]){
      case 'help':
      message.channel.send('Current comands and features: ttsVine: will return a tts string. funny: will return an image. vine: will join a voice call and play a noise and leave. ping: will take user input of a name and the number of times. *more to come eventually maybe.* ')
      break;
      
      case 'ttsVine':
       message.channel.send('*vine boom*',{
         tts: false 
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
           const dispatcher = connection.play('sounds/vine-boom.mp3');
            dispatcher.on("finish", end => {
              voiceChannel.leave();
        })
        });
        break;
      
      case 'specialist':
      if(!message.member.voice.channel) return message.channel.send("I can not join the channel if your not in one");
      var voiceChannel = message.member.voice.channel;
      voiceChannel.join().then(connection => {
           const dispatcher = connection.play('sounds/sp.mp3');
            dispatcher.on("finish", end => {
              voiceChannel.leave();
        })
        });
      break;
      
      case 'ping' :
        var num = 5;
       	const taggedUser = message.mentions.users.first();
         var tokens = message.content.split(" ");
         if(tokens.length > 2) {
          //console.log(tokens[2]);
          num = tokens[2];
         } 
         
        
        for(var i = 0; i < num; i++){
        message.channel.send('<@' + taggedUser.id + '>');
        }
      break;

      case 'owensus' :
        message.channel.send('mmmm fromsty')
        message.channel.send({ embeds: [embed], files: ['images/6bf.png'] });
        break;
        
      case 'mysauce' :
        message.channel.send('my limnguine...')
        message.channel.send({ embeds: [embed], files: ['images/pizza.png'] });
        break;

      case 'rot' :
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        //user input 
        let split_lip = message.content.split("");
        for(var j = 0; j < split_lip.length; j++){
          message.channel.send(split_lip[j])
        }
        
        break;
    }

});


// const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://image.png');
// channel.send({ embeds: [embed], files: ['./image.png'] });


client.login(process.env.token);

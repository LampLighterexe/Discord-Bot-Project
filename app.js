const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '*';

// read read UIDs from .env file
const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {



client.login(process.env.token);
package.json;

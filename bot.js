const Discord = require("discord.js");
const newUsers = new Discord.Collection();
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

//adds new member to collection and welcomes them when there are more than a certain number of members
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if(newUsers.size > 1){ //if there are more than 1 member basically...
    const defaultChannel = guild.channels.find(c => permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userList = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("Welcome our newly added users! \n" + userList);
    newUsers.clear();
  }
});

//makes sure bot doesn't greet member that left!
client.on("guildMemberRemove", (member) =>{
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});

//this loop reads the /events/ folder and attaches each event file to the appropriate event
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    //super secret recipe to call events with all their proper arguments *after* the 'client' var
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  //define args...
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //the list of if/else is replaced with those 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  }catch (err) {
    console.log(err);
  }
});

client.login(config.token);
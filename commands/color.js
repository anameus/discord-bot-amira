exports.run = (client, message, args => {
    if(args === "red") { 
        client.addRole(message.author, discord.Object('453643289988562944')) //role ID of Valor
        message.channel.send("RED team Valor!").catch(console.error);
    } if(args === "white") {
        client.replace_roles(message.author, discord.addRole('453641794467659776')) //role ID of everyone
        message.channel.send("White").catch(console.error);
    }
})

//change color for users
//the following code is just an idea...

//python version:
// elif message.content.startswith('.purple'):
//             await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.yellow'):
//             await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.green'):
//             await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.orange'):
//             await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.blue'):
//     await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.darkblue'):
//     await client.replace_roles(message.author, discord.Object(''))
// elif message.content.startswith('.red'):
//     await client.replace_roles(message.author, discord.Object(''))  


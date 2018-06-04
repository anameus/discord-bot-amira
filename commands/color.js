exports.run = (client, message, args => {
    if(args === "blue") { 
        await client.replace_roles(message.author, discord.Object('')) //not sure what to put here yet...role ID?
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


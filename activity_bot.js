const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // Set bot status to: "LISTENING command"
    client.user.setActivity("Command", {type: "LISTENING"})
})

client.login("XXXXXXXXXXX") // Replace XXXXX with your bot token

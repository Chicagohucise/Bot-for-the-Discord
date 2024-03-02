const {REST, Routes, SlashCommandBuilder} = require("discord.js")

const botID = ""
const serverID = ""
const botToken = ""
//process.env.token

const rest = new REST().setToken(botToken)
const slashRegister = async () => {
    try {
        await rest.put(Routes.applicationCommands(botID), {
            body: [
                new SlashCommandBuilder()
                    .setName("ping")
                    .setDescription("Just a ping command, no less.")

            ]
        })
    } catch (error) {
        console.error(error)
    }
}
slashRegister();

module.exports = {
    botToken: ""
};

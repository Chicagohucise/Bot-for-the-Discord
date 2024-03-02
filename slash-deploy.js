const {REST, Routes, SlashCommandBuilder} = require("discord.js")

const botID = "1211815206867435660"
const serverID = "1006449359799459882"
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
    botToken: "MTIxMTgxNTIwNjg2NzQzNTY2MA.GkebZk.IFDGHbncjANcyVmOzTk0nL35Jo48wlqV1bWY7k"
};

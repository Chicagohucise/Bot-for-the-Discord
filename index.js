const Discord = require("discord.js");
const { botToken } = require("./slash-deploy");
const client = new Discord.Client({ intents: ["Guilds"] });

client.on("ready", () => {
    console.log("TeaDog IS READY!");
    client.user.setActivity('PyCharm 2023.3.3');
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand() && interaction.commandName === "ping") {
        const startTime = Date.now();
        const sent = await interaction.reply({
            content: "Pinging...",
            components: [],
        });

        const endTime = Date.now();
        const latency = Math.round((endTime - startTime)/2);

        await interaction.editReply({
            content: `**Pong!**`,
            embeds: [
                {
                    description: `**Latency is ${latency}ms**.`,
                    color: 0x7289DA,
                    footer: {
                        text: `Executed at ${new Date().toUTCString()}`,
                        icon_url: interaction.user.avatarURL(),
                    },
                    timestamp: false,
                },
            ],
        });
    }
});

client.login(botToken);

import { parse } from "fast-xml-parser"
import bent from "bent";


import * as discord from "discord.js"
require('dotenv').config()
import * as plugins from "./plugins"

const client = new discord.Client()

client.on("ready", async () => {
	
})

client.on("message", async (msg) => {
	if (msg.author.bot) return
	for (const key in plugins) {
		if (plugins.hasOwnProperty(key)) {
			const element = plugins[key];
			element.on_message(msg)
		}
	}
});
//client.login(process.env.DISCORD_TOKEN)
client.login("NzAwNjcwNDkwMzY0MjE1MzM2.XregKQ.RHiDhRkaZOr8mKeA68Z-gohM3qA");

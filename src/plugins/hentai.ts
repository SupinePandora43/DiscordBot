import bent from "bent"
import { Message } from "discord.js"

function inside(content){
	switch(content){
		case "hentai":
		case "neko":
		case "trap":
			return true
	}
	return false
}

export async function on_message(msg: Message) {
	if (msg.channel.id === "702482894911832105" && inside(msg.content.toLowerCase())) {
		const url = await bent("json")("https://api.computerfreaker.cf/v1/" + msg.content.toLowerCase().replace("neko", "nsfwneko"))
		msg.reply(url["url"])
	}
}

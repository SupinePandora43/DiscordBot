import { Message } from "discord.js"
import { setTimeout } from "timers";
import { posts } from "rule34js"

export async function on_message(msg: Message) {
	if (msg.content.startsWith("rule34")) {
		let tags = msg.content.split(" ")
		tags.splice(0, 1)
		let tagPost
		tagPost = await posts({ tags: tags }).catch(() => tagPost = [])
		if (tagPost[0]) {
			msg.reply(tagPost[0].file_url)
		} else {
			msg.react("0️⃣")
			setTimeout(async () => {
				msg.reactions.cache.get("0️⃣").remove().catch(async () => { console.log("MANAGE_MESSAGES required") })
			}, 2000)
		}
	}
}

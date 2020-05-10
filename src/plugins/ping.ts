import { Message } from "discord.js"

export function on_message(msg: Message) {
	if (msg.content === "ping") msg.reply(`\n:ping_pong:pong:ping_pong:\n ${Date.now() - msg.createdTimestamp} ms`)
}

import { Message } from "discord.js"
import { parse } from "fast-xml-parser"
import bent from "bent";
import { setTimeout } from "timers";

const options = {
	attributeNamePrefix: "",
	//attrNodeName: false, //default is 'false'
	textNodeName: "#text",
	ignoreAttributes: false,
	ignoreNameSpace: false,
	allowBooleanAttributes: false,
	parseNodeValue: true,
	parseAttributeValue: false,
	trimValues: false,
	cdataTagName: "__cdata", //default is 'false'
	cdataPositionChar: "\\c",
	parseTrueNumberOnly: false,
	arrayMode: false, //"strict"
	stopNodes: ["parse-me-as-string"]
}

export async function on_message(msg: Message) {
	if (msg.content.startsWith("rule34")) {

		let tags: string | string[] = msg.content.split(" ")
		tags.splice(0, 1)
		tags = tags.join("+")
		console.log(tags)
		const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${tags}`

		const getString = bent('string')
		const obj = await getString(url)
		const json = parse(obj, options, true)

		if (json.posts.post && json.posts.post[0]) {
			msg.reply(json.posts.post[0].file_url)
		} else {
			msg.react("0️⃣")
			setTimeout(async () => {
				msg.reactions.removeAll().catch(async () => { console.log("MANAGE_MESSAGES is required") })
			}, 1000)
		}
	}
}

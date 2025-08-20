module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐒𝐡𝐚𝐚𝐧 𝐊𝐡𝐚𝐧",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100016828397863", "100016828397863"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] 𝐘𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐑𝐈𝐅 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐒𝐇𝐀𝐀𝐍 𝐊𝐎 𝐀𝐋𝐋𝐎𝐖𝐄𝐃 𝐇𝐀𝐈 🥀", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
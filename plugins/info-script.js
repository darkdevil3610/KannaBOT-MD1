let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	
	// ‼️ NOTE: Link script Jangan diubah, dihapus atau diganti
let text = `❏ *📮 Script Multi Device*
│• *Script :* 
│• *Base :* 
│↳ github.com/bochilgaming/games-wabot-md/
┗──────────═┅═──────────

❏ *📮 Script Non MD*
│• *Script :* 
│↳ https://instagram.com/dark_devil_3609
┗──────────═┅═──────────
📍 *N o t e :* 
• Follow me on instagram to get Ghithub link of the bot
• https://cutt.ly/mKSJt3s
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'My Github', url: sgh}},
    {index: 2, urlButton: {displayText: 'INSTAGRAM', url: sgc}},
    {index: 3, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
    {index: 4, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler

import MessageType from '@adiwajshing/baileys'


let handler = async (m, { conn, text, usedPrefix, command, args, sOwner, isPrems }) => {

    conn.req = conn.req ? conn.req : {}
    if (!args || !text) return m.reply('Silahkan Masukan Teksnya')
    let lmfao = args[0]
    let bruh = (lmfao + '@s.whatsapp.net')
    let tex = args.slice(1).join(' ')
    let txt = conn.req[bruh].text || m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let _text = (txt)
    conn.reply(m.chat, 'Pesan Anda sudah terkirim', m)
    conn.sendMessage(bruh, _text)
    delete conn.req[bruh]
    
}
handler.help = ['balas'].map(v => v + ' [nomor] [text]')
handler.tags = ['owner']
handler.command = /^(balas|reply)/i

handler.owner = true

handler.fail = null

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
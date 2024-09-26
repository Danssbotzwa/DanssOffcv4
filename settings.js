require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "62882005742954"
global.namaowner = "DanssOffc."
global.namaowner2 = "DanssOffc"

//======== Setting Bot & Link ========//
global.namabot = "DansBotz -" 
global.namabot2 = "DansBotz V4"
global.version = "v4.0.0"
global.foother = "Created By DanssOffc"
global.waowner = "https://wa.me/62882005742954"
global.idsaluran = "-"
global.linkgc = 'https://whatsapp.com/channel/0029Vaof3M1GE56ow9i2Qs3X'
global.linkgc2 = "https://whatsapp.com/channel/0029Vaof3M1GE56ow9i2Qs3X"
global.linksaluran = "https://whatsapp.com/channel/0029Vaof3M1GE56ow9i2Qs3X"
global.linkyt = 'https://whatsapp.com/channel/0029Vaof3M1GE56ow9i2Qs3X'
global.packname = "Created By DanssOffc"
global.author = "DanssOffc"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 3500

//========== Setting Foto ===========//
global.imgreply = "https://telegra.ph/file/72f693c5faa94a3144091.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = "https://telegra.ph/file/72f693c5faa94a3144091.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")


//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = "" //ptla
global.capikey = "" //ptlc

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "0882005742954"
global.gopay = "0882005742954"
global.ovo = "0882005742954"
global.qris = "https://telegra.ph/file/fdb4b885e75448892e542.jpg"
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "SDG2MrxgoJLZ8GDkpWk2PalEn-Vg8PQkjEsPQ_Wy"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "9de948bb1589175a8c9353612759b678";
global.apitoken2 = "poNl1SWzhD3rCUqFwfXwK7iAm2SobqeyLFJWa9nB";
global.tld2 = "skyzo.my.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
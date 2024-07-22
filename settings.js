const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT:-" //ur yt chanel name
global.socialm = "Github hoshi2317" //ur github or insta name
global.location = "Indonesia, jakarta, bandung" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '6283159699851' //ur owner number
global.ownername = 'hoshi' //ur owner name
global.websitex = "-"
global.wagc = "-"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/hoshi2317/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "hoshi\n\n+6283159699851"
global.creator = "6283159699851@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283159699851"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'limit mu sudah habis!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

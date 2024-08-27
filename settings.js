const fs = require('fs')
const chalk = require('chalk')

global.devNumber = ['628xxxxxx'] //Pake nomor mu
global.name = 'Ro0T_N3T' //Isi nama mu
global.namebot = 'Ro0T_N3T' //Isi nama Bot mu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

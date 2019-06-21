const fs = require('fs')

fs.unlink('./src/index.js', () => {
    fs.readdir('./src', (err, components) => {
        const exports = components.map(c => `export ${c} from './${c}'`)
        fs.writeFile('./src/index.js', exports.join('\n'), () => {})
    })
})

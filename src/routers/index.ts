import fs = require('fs')
import path = require('path')

const routers = fs.readdirSync(path.resolve('./', __dirname))
  .filter(file => file.indexOf('.router.') !== -1)
  .map(file => {
    console.log(`Requiring route ${file}`)
    return require(`./${file}`).default
  })

export default routers

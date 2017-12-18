import express = require('express')
import routers from './routers'

const app = express()
const port = process.env.PORT || 3000

routers.forEach(router => {
  app.use(router)
})

const server = app.listen(port, (err) => {
  if (err) throw(err)

  console.log(`server is listening on ${server.address().port}`)
})
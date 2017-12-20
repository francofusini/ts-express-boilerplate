import express = require('express')
import homeRouter from '../home.router'
import rp = require('request-promise')

const app = express()
let port: number

app.use(homeRouter)

beforeAll(cb => {
  const server = app.listen(() => {
    port = server.address().port
    cb()
  })
})

test('it returns Hello World!', async () => {
  const resp = await rp.get({
    json: true,
    uri: `http://localhost:${port}`
  })

  expect(resp.message).toBe('Hello World!')
})

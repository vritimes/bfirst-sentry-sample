import "./instrument.js"

import { setupExpressErrorHandler, setTag } from '@sentry/node'

import express from 'express'
const app: express.Express = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  setTag("userId", "xxx")
  throw new Error("My first Sentry error!");
});

setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

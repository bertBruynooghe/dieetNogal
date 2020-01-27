const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const proxy = require('express-http-proxy')
const remoteCouchDbHost =
'ed4dbd8c-a8fd-4fd7-8ff5-7a9d5481f619-bluemix.cloudantnosqldb.appdomain.cloud'
 
app.use('/db', proxy(remoteCouchDbHost, { https: true }))
app.use(express.static('public/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

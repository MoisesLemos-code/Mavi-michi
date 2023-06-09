const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
app.use(serveStatic(__dirname + '/dist'))
app.use(express.static(__dirname + '/css'))
const port = process.env.PORT || 5000
app.listen(port)
console.log('Servidor iniciado na porta '+ port + '...')
const express = require('express')
const { connectDB } = require('./utiles/connectDB')
const bodyParser = require('body-parser')
require('dotenv').config()
const messagesRoutes = require('./routes/messageRoutes')
const http = require('http')


const app = express()
const server = http.createServer(app)


app.use(bodyParser.json())

//messages endpoints
app.use('/messages',messagesRoutes)

const PORT = process.env.PORT
connectDB().then(()=> {
    server.listen(PORT,() => {
        console.log('the server is running ...')
    })
}).catch(error => {
    console.log(error.message);
})





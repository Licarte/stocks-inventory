require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const fs = require('fs');
const bodyparser = require('body-parser')
const $ip = process.env.SERVER_IP
const $port = process.env.SERVER_PORT

app.use(cors({origin:'*'}))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname+'/public')))
app.use(express.static(path.join(__dirname+'/src')))
app.use(express.static(path.join(__dirname+'/upload')))
app.use(express.static(path.join(__dirname+'/node_modules')))

const http = require('http')
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO(server)


// const directoryPath = 'F:\\'; 
const directoryPath = '\\\\172.18.254.103\\c$'; 

// listFilesAndDirectories(directoryPath);

function listFilesAndDirectories(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.error('Unable to scan directory:', err);
        }
        
        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    return console.error('Unable to get file stats:', err);
                }
                console.log(stats.isFile(), filePath)
                // if (stats.isDirectory()) {
                //     console.log('Directory:', filePath);
                //     // Recursively list the contents of the directory
                //     listFilesAndDirectories(filePath);
                // } else {
                //     console.log('File:', filePath);
                // }
            });
        });
    });
}



server.listen($port,$ip,()=>{
    console.log(`Server is running on http://${$ip}:${$port}`)
})
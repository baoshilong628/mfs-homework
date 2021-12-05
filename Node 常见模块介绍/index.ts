import {RequestListener} from "http";

const http = require('http');
const fs = require('fs');
const requestListener:RequestListener = function (req, res) {
    res.writeHead(200);
    let writer = fs.createWriteStream("./file/file.txt",{encoding:"utf-8"})
    req.on("data",function (chunk) {
        writer.write(chunk)
    })
    req.on("close",function () {
        res.end('Hello, World!');
        writer.close()
    })

}

const server = http.createServer(requestListener);
server.listen(8080);
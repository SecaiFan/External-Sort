const express = require('express');
const fs = require('fs');
const path = require('path');
const cors  =require('cors');
const router = require('./router');

const HOST = '127.0.0.1'
const PORT = 5005

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(router);

function serveStatic(res, path, type, elem) {
    console.log(__dirname+path);
    fs.readFile(__dirname+path, (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        }
        else {
            console.log();
            res.writeHead(200, { 'Content-Type': type });
            res.end(data);
        }
    });
}

const start = async () => {
    try {
        app.listen(PORT, HOST, function() {console.log(`Server start on Port: ${PORT}`);});

    } catch(e) {
        console.log(e);
    }
};

start();
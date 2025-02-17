const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? path.join(__dirname, 'index.html') : path.join(__dirname, req.url);

    const extname = path.extname(filePath);

    let contentType = 'text/html';
    if (extname === '.css') {
        contentType = 'text/css';
    } else if (extname === '.js') {
        contentType = 'application/javascript';
    } else if (extname === '.png') {
        contentType = 'image/png';
    } else if (extname === '.jpg' || extname === '.jpeg') {
        contentType = 'image/jpeg';
    } else if (extname === '.json') {
        contentType = 'application/json';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, '404.html'), (error404, data404) => {
                    if (error404) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Ошибка сервера');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(data404);
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Ошибка сервера');
            }
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});

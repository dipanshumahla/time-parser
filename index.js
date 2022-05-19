const http = require('http');
const router = require('./router/index.router');

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

const server = http.createServer(router);

server.listen(PORT, HOST, () => {
    console.log(`Server started at port: ${PORT}`)
});
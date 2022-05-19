const https = require('https');

const get = (host, path) => {
    const options = {
        hostname: host,
        path,
        port: 443,
        method: 'GET',
    };

    return new Promise((resolve, reject) => {
        https.get(options, (res) => {
            let body = '';

            res.on('data', (chunk) => body += chunk);
            res.on('end', () => resolve(body));
        }).on('error', (e) => reject(e));
    });
}

const http = {
    get
}

module.exports = http;
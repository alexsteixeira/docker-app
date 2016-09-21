let express = require('express');  
let http = require('http');
let app = express();

app.get('/', (req, res) => {
    let opt = {
        host: process.env.API_HOST,
        port: process.env.API_PORT
    };
    http.request(opt, (api) => {
        api.on('data', (chunk) => {
            res.send(`<h1>${chunk}</h1>`);
        });
    }).end();
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

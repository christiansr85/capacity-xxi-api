const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const dbSubscribe = require('../sockets/db-subscriptions');

const parametersModule = require('./parameters');
const registerModule = require('./register');

app.use(cors());

app.get('/', (req, res) => {
    res.json({ test: 'Service running OK' });
});

dbSubscribe(server);

app.use('/parameter', parametersModule);
app.use('/register', registerModule);

const PORT = process.env.PORT || 4000;
const init = () => {
    server.listen(PORT, () =>
        console.log(`Express Server Now Running On localhost:${PORT}`)
    );
};

module.exports = { init, app, server };
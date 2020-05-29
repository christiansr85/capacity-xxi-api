const express = require('express');
const cors = require('cors');
const app = express();

const parametersModule = require('./parameters');
const registerModule = require('./register');

app.use(cors());

app.get('/', (req, res) => {
    res.json({ test: 'Service running OK' });
});

app.use('/parameter', parametersModule);
app.use('/register', registerModule);

const PORT = process.env.PORT || 4000;
const init = () => {
    app.listen(PORT, () =>
        console.log(`Express Server Now Running On localhost:${PORT}`)
    );
};

module.exports = { init, app };
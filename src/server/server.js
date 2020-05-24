const express = require('express');
const app = express();

const parametersModule = require('./parameters');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json({ test: 'Service running OK' });
});

app.use('/parameters', parametersModule);

const init = () => {
    app.listen(PORT, () =>
        console.log(`Express Server Now Running On localhost:${PORT}`)
    );
};

module.exports = { init, app };
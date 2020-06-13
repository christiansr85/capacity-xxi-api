const { pool } = require('../database');
const { Subscriptions, Emits } = require('./Subscriptions');

const TRIGGER_REGISTER = 'watch_registro';

/**
 * Subscribes to server events throguh sockets. In this case, we first connect to dabatase
 * and listen to changes on the "register" table through its trigger.
 * @param {Object} server The application server used to init the sockets.
 */
function subscribe(server) {

    const io = require('socket.io')(server);
    pool.connect((err, client) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('Database connection: SUCCESS!!');

        io.on(Subscriptions.CLIENT_CONNECTED, function (socket) {
            console.log('client connected: ', socket.id);

            client.on(Subscriptions.DB_NOTIFICATION, function (msg) {
                const reg = JSON.parse(msg.payload);
                socket.emit(Emits.NEW_REGISTER, reg)
            });

            socket.on(Subscriptions.CLIENT_DISCONNECTED, function () {
                console.log('client disconnected: ', socket.id);
            });
        });

        const query = client.query(`LISTEN ${TRIGGER_REGISTER}`);
    });
}

module.exports = subscribe;
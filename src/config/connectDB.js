const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'unde924_uwwclub',
    password: '76440@Rishu$',
    database: 'unde924_uwwclub',
});

export default connection;
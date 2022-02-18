const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'shopping',
    password: '0918506237',
    port:5432
})

module.exports = pool;
const { Sequelize } = require('sequelize');

const conn = new Sequelize("registrousuarios1", "root", "", {
    host: 'localhost',
    dialect:'mysql' // o postgres, sqlite3... etc.
} );

module.exports = conn;   
const Sequelize = require('sequelize')
const { config } = require('../config/config')

const { host, port, user, password, database } = config.DB
console.log('1')
const path = `mariadb://${user}:${password}@${host}:${port}/${database}`
console.log('2')
exports.sequelize = new Sequelize(path)
console.log('3')

//const sequelize = new Sequelize(`mysql2://${user}:${password}@${host}:${port}/${database}`)
/*
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: host, 
     user: user, 
     password: password,
     connectionLimit: 5
});
pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

sequelize.authenticate()
  .then(() => {
    console.log('connection established')
  })

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }*/

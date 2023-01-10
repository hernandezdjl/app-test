require('dotenv').config()
module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: "mysql",
    pool: {
      max: 3,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
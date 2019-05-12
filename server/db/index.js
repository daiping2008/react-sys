const mongoose = require('mongoose')
const config = require('../config/config')

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(config.dbs)

    const dbs = mongoose.connection

    dbs.on('open', () => {
      console.log('数据库连接成功')
    })
  })
}
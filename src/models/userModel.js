const sequelize= require('../config/db.config.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
  googleId: {
    type: DataTypes.STRING,
    unique: true
  },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING
});

module.exports = User
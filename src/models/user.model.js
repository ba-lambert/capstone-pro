const {Sequelize, Model} = require('sequelize')
const sequelize = require('../config/db.config.js')
class User extends Model{}

let userSchema = {
    firstname:{
        type:Sequelize.STRING,
        allowNull:false,
        force:true
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false,
        force:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        force:true,
        unique:true
    },
    // password:{
    //     type:Sequelize.STRING
    // },
    // location:{
    //     type:Sequelize.STRING,
    //     allowNull:false
    // }
}
User.init(userSchema,{
    sequelize,
    modelName:'users'
})
module.exports = User
// import { Sequelize,Model } from "sequelize";
// import sequelize from "../config/db.config.js";
const {Sequelize, Model,DataTypes} = require('sequelize')
const sequelize = require('../config/db.config.js')

class Email extends Model{}

const emailSchema = {
    to:DataTypes.ARRAY(DataTypes.TEXT),
    from:{
        type:Sequelize.STRING,
    },
    subject:{
        type:Sequelize.STRING
    },
    text:{
        type:Sequelize.STRING
    },
    html:{
        type:Sequelize.STRING
    }
}

Email.init(emailSchema,{
    sequelize,
    modelName: 'email'
})

module.exports= Email
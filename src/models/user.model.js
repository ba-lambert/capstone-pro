import {Sequelize,Model} from 'sequelize'
import sequelize from '../config/db.config'
class User extends Model{}

let userSchema = {
    name:{
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
    password:{
        type:Sequelize.STRING
    },
}
User.init(userSchema,{
    sequelize,
    className:'users'
})
export default User
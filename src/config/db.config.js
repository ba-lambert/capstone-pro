const Sequelize = require ("sequelize");
const sequelize = new Sequelize('postgres','postgres','jetjaphet',{
    host:'localhost',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})
sequelize.authenticate()
.then(()=>{
    console.log("database has been connected successfully");
})
.catch((err)=>{
    console.log(err);
})
sequelize.sync()
module.exports = sequelize

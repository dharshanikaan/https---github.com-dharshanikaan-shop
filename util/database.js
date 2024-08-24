const Sequelize = require('sequelize');



const sequelize = new Sequelize('node-complete','root','root',{
    host :"localhost",
     dialect:"mysql",
    port: 3305,

});

module.exports = sequelize;
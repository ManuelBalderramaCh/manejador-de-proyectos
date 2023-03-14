const Sequelize = require('sequelize');

const memberModel = require('./models/member');

const sequelize = new Sequelize('manejadorDeProyectos',
'root', '1234', {
    host:'127.0.0.1',
    dialect:'mysql'
});

const Member = memberModel(sequelize, Sequelize);

sequelize.sync({
    force:true
}).then(()=>{
    console.log("Base de datos actualizada");
});

module.exports = { Member }
const Sequelize = require('sequelize');

const memberModel = require('./models/member');
const projectModel = require('./models/project');


const sequelize = new Sequelize(
    'video-club',
    'root', 
    'secret', {
    host:'127.0.0.1',
    dialect:'mysql'
});

const Member = memberModel(sequelize, Sequelize);
const Project = projectModel(sequelize, Sequelize);


sequelize.sync({
    force:true
}).then(()=>{
    console.log("Base de datos actualizada");
});

module.exports = { Member, Project }
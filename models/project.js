module.exports = (sequelize, type) => {
    const Project = sequelize.define('projects', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        nameProject: type.STRING,
        applicationDate: type.STRING,
        startDate: type.STRING,
        description: type.STRING,
        projectManager: type.STRING,
        productOwner: type.STRING,
        //team: type.LIST
    });
    return Project;
};

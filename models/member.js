module.exports = (sequelize, type) => {
    const Member = sequelize.define('members', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        name: type.STRING,
        birthDate: type.STRING,
        curp: type.STRING,
        rfc: type.STRING,
        address: type.STRING,
        //abilities: type.LIST
    });
    return Member;
};
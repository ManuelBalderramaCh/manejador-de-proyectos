const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _description: String,
    _permissionType : {
        enum: ['ScrumMaster', 'ProductOwner', 'Developer']
    }
});

class Rol {
    constructor(description, permissionType){
        this._description = description;
        this._permissionType = permissionType;
    }

    get description(){
        return this._description;
    }
    set description(v){
        this._description = v;
    }

    get permissionType(){
        return this._permissionType;
    }
    set permissionType(v){
        this._permissionType = v;
    }
}

schema.loadClass(Rol);
module.exports = mongoose.model('Rol', schema);
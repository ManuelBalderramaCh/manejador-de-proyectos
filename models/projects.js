const mongoose = require('mongoose');

//Schema
const schema = mongoose.Schema({
    _name:String,
});


//Clase

class Project {
    constructor(name,lastName){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }
}

schema.loadClass(Project);
module.exports = mongoose.model('Project',schema);
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _context:String,
    _priority:String,
    enum: ['Terminado', 'Pendiente', 'Cancelado'],
});

class UserHistory {
    constructor(name, context, priority){
        this._name = name;
        this._context = context;
        this._priority = priority;
    }

    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }

    get context(){
        return this._context;
    }
    set context(v){
        this._context = v;
    }

    get priority(){
        return this._priority;
    }
    set priority(v){
        this._priority = v;
    }
}

schema.loadClass(UserHistory);
module.exports = mongoose.model('UserHistory', schema);
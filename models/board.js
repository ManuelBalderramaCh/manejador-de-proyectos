const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _columna: {
        type: mongoose.Schema.ObjectId,
        ref: 'Column'
    }
});

class Board {
    constructor(name, columna){
        this._name = name;
        this._columna = columna;
    }

    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }

    get columna(){
        return this._columna;
    }
    set columna(v){
        this._columna = v;
    }
}

schema.loadClass(Board);
module.exports = mongoose.model('Board',schema);
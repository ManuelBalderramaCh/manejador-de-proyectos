const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _context:String,
    _priority:String,
    _events: {
        type:String
    },
    enum: ['Terminado', 'Pendiente', 'Cancelado'],
    _column: {
        type: mongoose.Schema.ObjectId,
        ref: "Column"
    }
});

class UserHistory {
    constructor(name, context, priority, events, column){
        this._name = name;
        this._context = context;
        this._priority = priority;
        this._events = events;
        this._column = column;
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

    get events(){
        return this._events;
    }
    set events(v){
        this._events = v;
    }

    get column(){
        return this._column;
    }
    set column(v){
        this._column = v;
    }
}

schema.loadClass(UserHistory);
module.exports = mongoose.model('UsserHistory', schema);
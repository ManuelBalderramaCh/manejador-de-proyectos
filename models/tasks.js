const mongoose = require('mongoose');


const schema = mongoose.Schema({
    _description: String,
    _priority: String,
    _status: String,
    _responsable: String,
});

class Task {
    constructor(description, priority, status, responsable) {
        this._description = description;
        this._priority = priority;
        this._status = status;
        this._responsable = responsable;
    }

    get description(){
        return this._description;
    }

    set description(v) {
        this._description = v;
    }

    get priority(){
        return this._priority;
    }

    set priority(v) {
        this._priority = v;
    }

    get status(){
        return this._status;
    }

    set status(v) {
        this._status = v;
    }

    get responsable(){
        return this._responsable;
    }

    set responsable(v) {
        this._responsable = v;
    }
}

schema.loadClass(Task);
module.exports = mongoose.model('Task', schema);
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _title:String,
    _stories: {
        type: mongoose.Schema.ObjectId,
        ref: "UserHistories"
    }
});

class Column {
    constructor(title, stories){
        this._title = title;
        this._stories = stories;
    }

    get title(){
        return this._title;
    }
    set title(v){
        this._title = v;
    }

    get stories(){
        return this._stories;
    }
    set stories(v){
        this._stories = v;
    }
}

schema.loadClass(Column);
module.exports = mongoose.model('Column', schema);
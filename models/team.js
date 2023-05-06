const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _teamName: String,
    _teamMembers : {
        type: mongoose.Schema.ObjectId,
        ref: 'Member'
    }
});

class Team {
    constructor(teamName, teamMembers){
        this._teamName = teamName;
        this._teamMembers = teamMembers;
    }

    get teamName(){
        return this._teamName
    }
    set teamName(v){
        this._teamName = v;
    }

    get teamMembers(){
        return this._teamMembers;
    }
    set teamMembers(v){
        this._teamMembers = v;
    }
}

schema.loadClass(Team);
module.exports = mongoose.model('Team', schema);
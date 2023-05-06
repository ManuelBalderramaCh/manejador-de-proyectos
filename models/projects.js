const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _projectName:String,
    _applicationDate: String,
    _startUpDate: String,
    _description:String,
    _projectManagerId:String,
    _projectOwnerId:String,
    _team: {
        type: mongoose.Schema.ObjectId,
        ref: 'Team'
    }
});

class Project {
    constructor(projectName, applicationDate, startUpDate, description, projectManagerId, projectOwnerId, team){
        this._projectName = projectName;
        this._applicationDate = applicationDate;
        this._startUpDate = startUpDate;
        this._description = description;
        this._projectManagerId = projectManagerId;
        this._projectOwnerId = projectOwnerId;
        this._team = team;
    }
    
    get projectName(){
        return this._projectName;
    }
    set projectName(v){
        this._projectName = v;
    }

    get applicationDate(){
        return this._applicationDate;
    }
    set applicationDate(v){
        this._applicationDate = v;
    }

    get startUpDate(){
        return this._applicationDate;
    }
    set startUpDate(v){
        this._startUpDate = v;
    }

    get description(){
        return this._description;
    }
    set description(v){
        this._description = v;
    }

    get projectManagerId(){
        return this._projectManagerId;
    }
    set projectManagerId(v){
        this._projectManagerId = v;
    }

    get projectOwnerId(){
        return this._projectOwnerId;
    }
    set projectOwnerId(v){
        this._projectOwnerId = v;
    }

    get team(){
        return this._team;
    }
    set team(v){
        this._team = v;
    }
}

schema.loadClass(Project);
module.exports = mongoose.model('Project',schema);
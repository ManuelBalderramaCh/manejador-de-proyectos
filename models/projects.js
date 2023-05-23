const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _projectName:String,
    _applicationDate: String,
    _startUpDate: String,
    _description:String,
    _projectManager:String,
    _projectOwner:String,
});

class Project {
    constructor(projectName, applicationDate, startUpDate, description, projectManagerId, projectOwnerId, team){
        this._projectName = projectName;
        this._applicationDate = applicationDate;
        this._startUpDate = startUpDate;
        this._description = description;
        this._projectManager = projectManagerId;
        this._projectOwner = projectOwnerId;
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

    get projectManager(){
        return this._projectManager;
    }
    set projectManager(v){
        this._projectManager = v;
    }

    get projectOwner(){
        return this._projectOwner;
    }
    set projectOwnerId(v){
        this._projectOwner = v;
    }

}

schema.loadClass(Project);
module.exports = mongoose.model('Project',schema);
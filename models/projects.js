const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _projectName:String,
    _applicationDate: String,
    _startUpDate: String,
    _description:String,
    _projectManager:String,
    _projectOwner:String,
    _developer: String,
    _tasks: [{_description:String, _status:String, _responsable:String, _priority:String}]
});

class Project {
    constructor(projectName, applicationDate, startUpDate, description, projectManager, projectOwner, developer, tasks){
        this._projectName = projectName;
        this._applicationDate = applicationDate;
        this._startUpDate = startUpDate;
        this._description = description;
        this._projectManager = projectManager;
        this._projectOwner = projectOwner;
        this._developer = developer;
        this._tasks = [tasks];
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
    set projectOwner(v){
        this._projectOwner = v;
    }

    get developer(){
        return this._developer;
    }
    set developer(v){
        this._developer = v;
    }
    get tasks(){
        return this._tasks;
    }
    set tasks(v){
        this._tasks = v;
    }

}

schema.loadClass(Project);
module.exports = mongoose.model('Project',schema);
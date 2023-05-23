const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _lastName:String,
    _birthDay: String,
    _curp: String,
    _rfc: String,
    _address: String,
    _role: String,
    enum: ['Product Owner', 'Project Manager', 'Developer'],
    _abilities: String,
    enum: ['Junior', 'Senior', 'Master'],
    _email: String,
    _password: String,
    _project: String,
    _salt: String,
});

class Member {
    constructor(name,lastName, birthDay, curp, rfc, address, role, abilities, salt, project){
        this._name = name;
        this._lastName = lastName;
        this._birthDay = birthDay;
        this._curp = curp;
        this._rfc = rfc;
        this._address = address;
        this._role = role;
        this._abilities = abilities;
        this._email = email;
        this._password = password;
        this._salt = salt;
        this._project = project;
    }
    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(v){
        this._lastName = v;
    }
    get birthDay(){
        return this._birthDay;
    }
    set birthDay(v){
        this._birthDay = v;
    }
    get curp(){
        return this._curp;
    }
    set curp(v){
        this._curp = v;
    }
    //rfc
    get rfc(){
        return this._rfc;
    }
    set rfc(v){
        this._rfc = v;
    }
    //address
    get address(){
        return this._address;
    }
    set address(v){
        this._address = v;
    }
    //role
    get role(){
        return this._role;
    }
    set role(v){
        this._role = v;
    }
    //abilities
    get abilities(){
        return this._abilities;
    }
    set abilities(v){
        this._abilities = v;
    }
    //project
    get project(){
        return this._project;
    }
    set project(v){
        this._project = v;
    }
    get email(){
        return this._email;
    }
    set email(v){
        this._email = v;
    }
    get password(){
        return this._password;
    }
    set password(v){
        this._password = v;
    }
    get salt(){
        return this._salt;
    }
    set salt(v){
        this._salt = v;
    }
}

schema.loadClass(Member);
module.exports = mongoose.model('Member',schema);
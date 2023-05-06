const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _lastName:String,
    _birthDay: String,
    _email: String,
    _password: String,
    _salt: String,
    _rol: {
        type: mongoose.Schema.ObjectId,
        ref: 'Rol'
    }
});

class Member {
    constructor(name,lastName){
        this._name = name;
        this._lastName = lastName;
        this._birthDay = birthDay;
        this._email = email;
        this._password = password;
        this._salt = salt;
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
        this._salt = salt;
    }
    get roles(){
        return this._roles;
    }
    set roles(v){
        this._roles = v;
    }
}

schema.loadClass(Member);
module.exports = mongoose.model('Member',schema);
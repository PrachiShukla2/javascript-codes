// we are using ere classes to import and xport

export default class user{
    constructor(email, name){
        this._id = email;
        this._name = name;
    }
    greeting(){
        return`hi,my name is ${this._name}`;
    }
}
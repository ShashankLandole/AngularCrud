export class Task{
    id : number;
    email : string;
    password : string;
    phoneNumber : number;
    city : string;
    textArea : string;

    constructor(id : number,email : string, password : string, phoneNumber : number,city : string, textArea : string){
        this.id = id;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.textArea = textArea;
    }

}
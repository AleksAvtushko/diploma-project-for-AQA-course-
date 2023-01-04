export class RegistrationForm {
    login: any;
    password: any;
    name: string;
    age: number;
    sex: string;

    constructor(login: any, password: any, name: string, age: number, sex: string) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    MaxMinSymbolsLog() {
        if (this.login.length > 20) {
            return "We can enter max 20 symbols";
        } else if (this.login.length < 2) {
            return "We should add min 2 symbols";
        } else {
            return `This login name: ${this.login} is correct`;
        }
    }

    MaxMinSymbolsPassword() {
        if (this.password.length > 20) {
            return "We can enter max 20 symbols";
        } else if (this.password.length < 8) {
            return "We should add min 8 symbols";
        } else {
            return `This password: ${this.password} is correct`;
        }
    }

    MinAge() {
        if (this.age < 18) {
            return "You must be over 18";
        } else {
            return `You have more then ${this.age} age. You can check this site`;
        }
    }

    SelectorSex() {
        if (this.sex === "Female") {
            return this.sex;
        } else if (this.sex === "Male") {
            return this.sex;
        } else {
            return "enter correct sex Male or Female";
        }
    }
    NameValue() {
        if (this.name.length < 2) {
            return `The name cannot be empty or have less than 2 characters`;
        } else if (this.name.length > 25) {
            return `The name cannot be have more than 25 characters`;
        } else {
            return this.name;
        }
    }
}

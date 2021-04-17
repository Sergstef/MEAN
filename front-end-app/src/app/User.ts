export class User {
 
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    email: string; 
    pwd: string;
    confirmPwd: string;
 
    constructor(firstName: string, lastName: string, gender: string,
     age: number, email: string, pwd: string, confirmPwd: string,) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.age = age;
      this.email = email;
      this.pwd = pwd;
      this.confirmPwd = confirmPwd;
  }
 
}
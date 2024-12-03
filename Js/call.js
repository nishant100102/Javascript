// function SetUsername(username){
//     // complex db calls
//     this.username=username;
// }

// function createUser(username,email,password){
//     SetUsername(username)
//     this.email=email
//     this.password=password
// }

// const chai =new createUser("chai","chai@fb.com",123)
// console.log(chai);
 
function myMarks(marks){
    this.marks=marks;
    
}

function result(subject,marks){
    this.subject=subject;
    myMarks.call(this,marks);
}
const report = new result("hin","55")
console.log(report);

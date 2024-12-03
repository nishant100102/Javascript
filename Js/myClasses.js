// class user{
//     constructor(username,email,pass){
//         this.username=username;
//         this.email=email;
//         this.pass=pass
//     }
//     encrytPass(){
//         return `${this.pass}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai","mail","123")
// console.log(chai.encrytPass());
// console.log(chai.changeUsername());

// class User{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`Username is: ${this.username}`);
        
//     }
// }

// class Teacher extends User{
//     constructor(username,email,pass){
//         super(username)
//         this.email=email
//         this.password=this.password
//     }
//     add(){
//         console.log(`A new course was added by
//             ${this.username}`);
        
//     }
// }

// const chai=new Teacher("chai","@,com","123")

// chai.add();

// const masalachai= new User("masalachai")

// masalachai.logMe()
// chai.logMe()

// console.log(Math.ceil(Math.PI));
 const ini=0;
 let cart=[1232,344,555]

 const sum=cart.reduce((acc,curr)=>acc+curr,100);
 console.log(sum);
 

// const mysym=Symbol("key1")

// const jsUser={
//     name:"Nishant",
//     age:22,
//     location:"Mtr",
//     email:"nishant@gla.in",
//     [mysym]:"mykey1"
// }
// // console.log(jsUser["age"])
// // console.log(jsUser[mysym])
// jsUser.age=23
// // console.log(jsUser.age)
// // Object.freeze(jsUser)
// jsUser.age=33
// // console.log(jsUser.age)
// // console.log(jsUser)
// jsUser.greeting= function(){
//     console.log(`hello ,${this.name}`);
// }
// console.log(jsUser.greeting());
const tinder = new Object()
tinder.id="123abc"
tinder.name="Nishant"
tinder.isLoggedIn=false
// console.log(tinder);
const regularUser={
    email: "some@gmail.com",
    fullname:{
        fname:"Nishant",
        lname:"Chaudhary"
    }
}
// console.log(regularUser.fullname.fname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"c"}
// const obj3=Object.assign({},obj1,obj2) 
const obj3={...obj1,...obj2}
// console.log(obj3);
const users =[
    {
        id:1,
        email:"ME@gmail.com"
    }
]
// console.log(tinder);
// console.log(Object.keys(tinder));
const course={
    coursename:"js",
    price:999,
    courseInst:"Hitesh"
}
const {courseInst:Inst}=course
console.log(Inst);
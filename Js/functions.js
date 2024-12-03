function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("n");
}
// sayMyName()
// function add(a,b){
//     console.log(a+b);
// }
// add(3,null)
// function add(a,b){
//     // let result = a+b
//     // return result
//     return a+b
// }
// const result =add(2,3)
// console.log(result)
// function loginMessage(username){
//     return `${username} just logged in `
// }
// console.log(loginMessage("Hitesh"))
// function calculateCartPrice(val1,val2,...num1){
//     return num1 
// }
// console.log(calculateCartPrice(2,400,500))
// const user ={
//     username:"hitesh",
//     price: 200
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user)
// const myArray= [100,200,300,400]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond([100,200,3000]))
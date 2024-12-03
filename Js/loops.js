// for(let i=0; i<10;i++){
//     console.log("*")
// }
// arr=[1,2,3,4,5,6,7,8]
// for(let i=0 ; i<=arr.length+1;i++){
//     console.log(arr[i]);
// }
//  for(i=0;i<=5;i++){
//     // console.log(`Outer: ${i}`);
//     for(j=0;j<=10;j++){
//         // console.log(`Inner: ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//  }
//  for (let i = 1; i <= 20; i++) {
//     if (i==5) {
//         console.log("5 detected");
//         continue
//     }
//     console.log(`Value of i is ${i}`);
    
//  }
// let i=0
// while(i<=10){
//     console.log(i);
//     i=i+2
// }
// arr=[1,2,3]
// let i=0
// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }
// let score=11
// do{
//     console.log(score);
//     score++
// }while(score<10);
// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// const greetings="Hello World"
// for(const greet of greetings){
//     console.log(greet);
// }
// const map=new Map()
// map.set('IN',"India")
// map.set("USA","United States of America")
// map.set("FR","France")
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key,value);
// }
// const myObj={
//     'game1':'NFS',
//     'game2':'COD'
// }
// for (const key in myObj) {
//     console.log(myObj[key]);
// }
//  
const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (val) {
//      console.log(val);
// } )
function printMe(input){
    console.log(input);
}
coding.forEach(printMe )
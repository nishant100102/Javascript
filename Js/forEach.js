const coding=[1,2,3,4,5,6,7,8,9,10]
//  const answ=coding.forEach((item)=>{
//      return item
//  })
// const newNums = coding.filter( (num) => {
//     return num>4
// })
// const newNums=[]
// coding.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// const books =[
//     {title:'1',edition:2004},
//     {title:'2',edition:2006},
//     {title:'3',edition:2008},
//     {title:'4',edition:2010}
// ]
// let userBooks=books.filter((bk)=> bk.edition===2008)
// userBooks=books.filter((bk)=>{
//    return bk.edition>=2008 && bk.title>3
// })
// console.log(userBooks);

// const newNums=myNums.map( (num)=> {return num+10})
// console.log(newNums);
// const newNums=myNums
// .map( (num)=> num>1)
// // .map( (num)=> num+1)
// // .filter( (num)=> num>=40)
// console.log(newNums);
const myNums=[1,2,3]


// const myTotal=myNums.reduce( (acc,currVal)=>{
//     console.log(acc,currVal);
//     return acc+currVal
// },0)
const myTotal=myNums.reduce( (acc,currVal)=>acc+currVal,0)

console.log(myTotal);
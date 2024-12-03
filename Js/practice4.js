// const promise1= new Promise(function(resolve,reject){
//     //Async tasks
//      setTimeout(() => {
//         console.log("Task complete");
//         resolve()
//      }, 1000); 
// })

// promise1.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
    
//     })


// const promise3= new Promise(function(resolve,reject){
//      setTimeout(function(){
//         resolve({username:"chai",
//             email:"chai@ec.com"
//         })
//      },1000)
// })

// promise3.then(function(user){
//     console.log(user);
    
// })

// const promise4= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true
//         if(!error){
//             resolve({name:"Nishant",Pass:"123"})
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })

// promise4
// .then((user)=>{
//     console.log(user);
//     return user.name
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch(function(err){
//     console.log(err);  
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected");
    
// })


// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//              let error= true
//              if(!error){
//                  resolve({name:"Nishant",Pass:"123"})
//              }else{
//                  reject('Error:Something went wrong')
//              }
//          },1000)
// })

// async function cosumePromise5(){
//     const response= await promise5
//     console.log(response);
    
// }

// cosumePromise5()

// const promise= new Promise(function(resolve,reject){
//     const user=fetch('https://httpbin.org/')
//     resolve(user)
// })

// promise.then(function(user){
//     console.log(user);
    
// })

fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data);
    
})
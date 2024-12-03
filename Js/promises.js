// const promise1 =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consumed");
    
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",
//                 email:"chai@ex.com"
//         })
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"Nishant",
//                 password:"123"
//             })
//         }else{
//             reject("Error:Galti hogyi");
//         }
//     },1000)
// })

// // promise4
// // .then((user)=>{
// //     console.log(user);
// //     return user.username
// // })
// // .then((username)=>{
// //     console.log(username);
// // })
// // .catch(function(error){
// //     console.log(error);
// // })
// // .finally(()=>{
// //     console.log("the promise is either resolved or rejected");
    
// // })

// async function consumePromise4(){
//     try{const response = await promise4
//     console.log(response);
//     }catch{
//         console.log("error");
        
//     }
// }

// consumePromise4();

// async function getAllUsers() {
//     try{const response = await fetch('https://developer.okta.com/docs/reference/api/users/')
//     const data = await response.json()
//     console.log(data);
//     }catch{
//         console.log(error);
        
//     }
// }

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data.login);
})
.catch((error)=>{
    console.log(error);
})
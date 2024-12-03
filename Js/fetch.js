// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
    
// })

const pr = new Promise(function(resolve,reject){

    setTimeout(function() {
        let error= false;
        if(!error){
            
            resolve("Yesss kam hua")
        }
        else{
            reject("bhaiya error dego")
        }
    },2000)
})

pr.
then(function(data){
    console.log(data);
    
})
.catch(function(data){
    console.log(data);
    
})
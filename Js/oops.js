const user ={
    username:"Hitesh",
    loginCnt:8,
    signnedIn:true,
    getUser:function(){
        console.log(this);
        
    }
}

//console.log(user.getUser());
console.log(this);
const date=new Date()
console.log(date.toLocaleString());


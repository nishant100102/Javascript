const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let interValid;

document.querySelector('#start').addEventListener
('click',function(){
    let changeColor=function(){
        document.body.style.backgroundColor=randomColor();
    }
    if(interValid==null){
        interValid=setInterval(changeColor,1000)};
});

const stop=function(){
    clearInterval(interValid);
    interValid=null;
};
document.querySelector('#stop').addEventListener
('click',stop);

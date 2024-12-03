let myHero = ["hulk","thor"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling" ,

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}

Array.prototype.hitesh= function(){
    console.log("Hitesh is present");
}
// heroPower.hitesh() ;

// heroPower.hitesh();
myHero.hitesh();

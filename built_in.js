console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));

let myMath = {
    PI:Math.PI,
    random:function(){
        return Math.random()
    },
    floor:function(num){
        return Math.floor(num)
    }
}

console.log(myMath.PI);
console.log(myMath.random());
console.log(myMath.floor(4.2));
/*
function person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

person.prototype.sum = function(){
    return this.first + this.second + this.third;
} ---> person공장의 prototype객체에 sum 함수를 만들어줌.
*/ 
class person{
    constructor(name, first, second){  //person공장(생성자)에 대해 설명.
        this.name = name;               //class는 생성자함수이므로 new로 호출가능.
        this.first = first;
        this.second = second;
    }
    sum(){  //person공장의 prototype에 sum 함수를 만들어줌.
        return this.first + this.second;
    }
}

class personPlus extends person{  // personPlus prototype객체는 person prototype객체로부터 상속
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){ //personPlus prototype object(객체)에 sum 함수를 추가.
        return super.sum() + this.third;
    }
    avg(){ //personPlus prototype object에 avg 함수를 추가.
        return (super.sum() + this.third)/3;
    }
}
let kim = new person('kim', 20, 30, 40);
let song = new personPlus('song', 50,50,50);
console.log(kim.sum(), song.sum(), song.avg())
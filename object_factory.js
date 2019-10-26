/* 객체 리터럴 - 수작업 방식 */
let kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    } // this는 this가 속해있는 메소드가 속해있는 객체를 가리킨다.
}

console.log(kim.sum())

/* 객체를 찍어내는 함수 공장 */
function Person(){
    this.name='kim';
    this.first=10;
    this.second=20;
    this.sum=()=>{
        return this.first+this.second;
    }
    return 'return : this is function'
}
console.log(Person()); // 'return : this is function'
console.log(new Person()); // Person { name: 'kim', first: 10, second: 20, sum: [Function] }
                         // -> constructor


/* 입력값을 받는 공장 */
function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum=()=>{
        return this.first+this.second;
    }
    return 'hi'
}

let Song = Person('Song', 20, 30);
//console.log(Song())   ... song is not a function
console.log(Song)   // hi
console.log(Person) // hi

let Park = new Person('Park', 20, 30);  //Person을 constructor로 지정해서 song이라는 새로운객체생성
//console.log(Park()) ...Park is not a function (Song is Object)
console.log(Park.name) //...Park
console.log(Park.sum()) //...50
class Person{
    constructor(){ // constructor는 객체를 생성할 때 이 함수를 자동으로 호출
        console.log('constructor');
    } 
}
var kim = new Person(); // 생성과 동시에 contructor 실행
//console.log(Person()); Class constructor Person cannot be invoked without 'new'...new를 사용하지 않고 Person 생성자(함수)를 호출할 수 없음.
console.log(Person); //[Function: Person]  ...class로 선언한 Person은 내부적으로 함수.
console.log(kim); // Person {} ...Person 생성자(constructor)

//let kim = new Person('kim', 10, 20);
//let lee = new Person('lee', 50, 20);
//kim.sum = function(){
//    return (this.first + this.second) + ' in kim';
//}
//console.log(kim.sum()); // 객체 내부에 sum()이 있어서 먼저 참조하고 종료.  . 30 in kim
//console.log(lee.sum());  객체 내부에 sum()이 없어서 객체 생성자인 person의 prototype 내부에 
                        // sum()이라는 메소드가 정의되어있는지 확인..70 */
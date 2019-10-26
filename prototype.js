/* 생성자 안에 sum 함수가 있으면 필요없어도 객체가 만들어질 때마다 포함되므로
   이 함수를 prototype에 따로 빼서 메모리낭비를 막음 */
function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
} // 이 코드 자체만 놓고보면 단순한 함수( new로 호출할때 맥락상 의미로 constructor가 되는 것 )

/* Person 공장(생성자)으로 만든 객체는 모두 sum 함수를 가지고 있지 않지만
 Person공장의 prototype을 참조해서 사용이 가능하도록 한다. */
Person.prototype.sum = function(){
    return (this.first + this.second);
}  // 여기서 화살표함수를 사용하지 않는다.  화살표함수는 prototype을 가지지 않는다.

let kim = new Person('kim', 10, 20);
let lee = new Person('lee', 50, 20);
kim.sum = function(){
    return (this.first + this.second) + ' in kim';
}
console.log(kim.sum()); // 객체 내부에 sum()이 있어서 먼저 참조하고 종료.  . 30 in kim
console.log(lee.sum()); /* 객체 내부에 sum()이 없어서 객체 생성자인 person의 prototype 내부에 
                         sum()이라는 메소드가 정의되어있는지 확인..70 */
let kim = {name:'kim', first:10, second:20};
let lee = {name:'lee', first:10, second:10};
//lee.__proto__ = kim;   하위객체에서 -> 상위객체(공장)의 내용(prototype)에 연결
//lee = Object.create(kim);  상위객체(kim)의 내용(prototype)에서 -> 하위객체(lee)에 연결  
function sum(prefix){
    return prefix + this.first + this.second;
}   // this가 포함된 독립된 함수
console.log(sum.call(kim, 20));  // 독립된 함수를 kim 객체에서 사용(this==='kim')
console.log(sum.call(lee, 30));  // 독립된 함수를 lee 객체에서 사용(this==='lee')
let kimSum = sum.bind(kim, '=>'); // 독립된 함수(sum)로 새로운 객체(kimSum) 생성
console.log(kimSum());


//prototype === prototype Object
//__proto__ === prototype Link

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
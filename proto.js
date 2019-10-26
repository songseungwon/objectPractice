let superObj = {superVal:'super'};
let subObj = {subVal:'sub'};
subObj.__proto__ = superObj;  //subObj는 superObj의 prototype을 가리킴(__proto__ === prototype Link)
console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superVal = 'transed'; //subObj는 superObj의 prototype에 있는 property도 사용할 수 있는데,
                             //그 중 superVal을 수정.
console.log(subObj.superVal); // 수정된 'transed' 반환
console.log(superObj.superVal); // superObj의 prototype의 속성 superval은 그대로.
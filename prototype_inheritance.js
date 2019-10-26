let superObj = {superVal:'super'};
let subObj = {subVal:'sub'};
subObj.__proto__ = superObj; //(비표준)자바스크립트의 유연함. 자유롭게 상속받을 수 있음.
console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superVal = 'sub'; 
console.log(superObj.superVal);//...super
/* 값만 필요한 Array 그리고
값과 이름(속성, property)이 필요한 Object */

let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log(memberArray[2]);

let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer:'leezhce'
}

console.log(memberObject.developer); //.으로 값에 접근
console.log(memberObject['developer']); //[]로 값에 접근

delete memberObject.manager
console.log(memberObject);
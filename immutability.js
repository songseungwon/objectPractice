let o1 = {name:'kim'};
Object.freeze(o1);
const o2 = {name:'lee'};
o1 = o2;
console.log(o1)  //{name:'lee'}

//const = > 이름을 규제,  freeze = > 값을 규제

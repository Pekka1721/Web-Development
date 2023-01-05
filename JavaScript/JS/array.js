//array : collection of similar objects

let values = new Array();
let values2 = [1,2,3,4,5];
console.log(values2)


values.push(1)
values.push(18)
console.log(values[0]) // values of particular index (indexing starts from 0)

values.unshift(10)
console.log(values)

values2.shift();
console.log(values2)

values2.splice(2,2)
console.log(values2)

let x = 3;
let y = x++;
console.log(x, y) // 4 3

const array = ['a', 'b', 'c'];

for (var index = 0; index < array.length; index++) {
    console.log('In loop #' + index + ' and element is ' + array[index]);
}

console.log('AFTER loop and index= ' + index);

for (let index2 = 0; index2 < array.length; index2++) {
    const element = array[index2];
    console.log(element);
}

//console.log('AFTER loop and index= ' + index2);
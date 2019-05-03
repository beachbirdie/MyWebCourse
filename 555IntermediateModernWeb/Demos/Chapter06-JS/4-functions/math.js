console.log("Math.PI=" + Math.PI);
console.log("Math.round(8.8)=" + Math.round(8.8));
console.log('Math.round(1.2)=' + Math.round(1.2));
console.log('Math.pow(2, 3)=' + Math.pow(2, 3));
console.log('Math.sqrt(49) =' + Math.sqrt(49));
console.log('Math.abs(-1.4)=' + Math.abs(-1.4));
console.log('Math.ceil(3.4)=' + Math.ceil(3.4));
console.log('Math.floor(3.4)=' + Math.floor(3.4));

console.log('');
console.log('');
console.log('5 Random Values');
for (let x = 0; x < 5; x++) {
    console.log('');
    console.log('Math.random()=' + Math.random());
}

console.log('');
console.log('5 Values between 0 and 100');
for (let x = 0; x < 5; x++) {
    console.log('');
    console.log('Math.floor(Math.random() * 101)='
        + Math.floor(Math.random() * 101));
}

console.log('*******');

console.log('call Random function :');
console.log(getRandomInteger(0, 50));

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

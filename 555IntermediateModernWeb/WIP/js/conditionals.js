let numOne = 1;
let stringOne = '1';

console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const day = new Date().getDay();

switch (day) {

case 'Monday':
console.log('Back to work!' );
break;
case 'Wednesday':
console.log('Over the hump!' );
break;
case 'Saturday'||'Sunday':
console.log('It is the weekend!' );
break;
default:
console.log('It is a weekday');
}
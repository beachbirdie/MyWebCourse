
let now = new Date();
console.log(now);

let milliSinceEpoch = new Date(90645645);
console.log(milliSinceEpoch);

let moonLanding = new Date(1969,6,20,20,18,0,0);
console.log(`moonLanding: ${moonLanding}`);

// using Date objects
const start = Date.now();

console.log(`start: ${start}`);
// delay for 3 seconds
setTimeout(function () {
        const end = Date.now();
        const elapsed = end - start; // elapsed time in milliseconds
        console.log(`${elapsed} milliseconds elapsed`);
}, 1000);



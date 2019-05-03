const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}

function logHobbies() {
    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();
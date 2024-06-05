var person = {
    firstName: "Noel",
    age: 20,
    isMale: true,
    dob: new Date (2000, 1, 28).toJSON(),
    address: {
        city: "DSM",
        postal: 20
    }
};

console.log(person)
console.log(person.firstName)
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))
console.log(person.dob)
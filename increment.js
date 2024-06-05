var number = 0;
console.log(++number)
console.log(number--)
console.log(--number)

console.log(10 == 10)
console.log(2 >= 34)
console.log(10 != 10)
console.log(2 > 2)

console.log(10 == 10 && "A" == "A")
console.log(10 == 10 || "A" == "B")

var condition = 0 < 1

if (condition) {
    console.log("Run......")
}

else {
    console.log("Else condition run")
}

var gender = "F"

if (gender == "M") {
    console.log("male")
}

else if (gender == "F") {
    console.log("female")
}

else {
    console.log("unknown")
}

var number = 6

if (number % 2 == 0) {
    console.log("even")
}

else {
    console.log("odd")
}

var number = 103
var result = number % 2 == 0 ? "even": "odd";
console.log(result)

switch(gender) {
    case "M":
        console.log("male")

    case "F":
        console.log("female")
        break
    default:
        console.log("unknown")
}
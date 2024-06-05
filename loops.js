var names = [
    "Noel",
    "Juma",
    "JohnDoe",
    "Bob"
 ];

 for (var i = 0; i < names.length; i++) {
    console.log(names[i])
 }
 

 for (let i = 0; i <= 10; i++) {
    console.log(i)
 }

 console.log("value of i outside the loop " + i)

 for (const name of names) {
    console.log(names)
 }
names.forEach(function(names) {
    console.log(names)
})

var index = 0;

while (index < names.length) {
   console.log(names[index])
   index = index + 1;
}
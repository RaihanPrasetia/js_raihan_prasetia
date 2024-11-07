// javascript intridution


const myname = "Raihan";
document.getElementById("name").innerHTML = myname;

var x = "Hallo";
var y = 10;
var z = x + y;
document.getElementById("demoVar").innerHTML = "Ini menggunakan type data string dan juga int : "
    + z;

const a = 5;
const b = 6;
const c = a + b;
document.getElementById("demoConst").innerHTML = "jika penjumlahan menggunakan int, dengan int maka akan menjumlah nilai: "
    + c;

let d = "Hello!";
let e = " World";
let f = d + e;
document.getElementById("demoLet").innerHTML = "jika menggunakan string dan  dijumalah kan string maka akan menambahkan kata: "
    + f;


let price1 = 10000;
let price2 = 5000;

let baju = price1;
let celana = price2;
const total = price1 + price2;
document.getElementById("baju").innerHTML = "Harga Baju: Rp. " + baju;
document.getElementById("celana").innerHTML = "Harga Celana: Rp. " + celana;
document.getElementById("demo").innerHTML = "Total Harga: Rp. " + total;


var g = 10;
document.write("<p>Nilai x (dengan var): " + g + "</p>");

// Menggunakan let 
let h = 20;
document.write("<p>Nilai y (dengan let): " + h + "</p>");

// Menggunakan const 
let i = 30;
document.write("<p>Nilai z (dengan const): " + i + "</p>");

// Cobalah mengubah nilai variabel 
j = 15; // OK 
k = 25; // OK 

// i = 35; // Error! Karena z adalah konstanta 
document.write("<p>Setelah diubah:</p>");
document.write("<p>Nilai j: " + j + "</p>");
document.write("<p>Nilai k: " + k + "</p>");
document.write("<p>Nilai i: " + i + "</p>");

const pi = 3.14;

const info = "Hallo My name is " + myname + ", Nilai pi =" + pi;

alert(info);

// Javascript Loops and Iteration

console.log('Javascript Loops and Iteration')
function greetMe(name, time) {
    if (!name || !time) {
        console.log("Please provide both name and time.");
        return;
    }
    // TIME TO UPPERCASE TEXT
    const timeUpper = time.toUpperCase();
    // DEFINE GREETINGS
    const greetings = {
        MORNING: `Hi ${name}, Good Morning 🌄`,
        NOON: `Hi ${name}, Good Noon 🌞`,
        AFTERNOON: `Hi ${name}, Good Afternoon 🌆`,
        EVENING: `Hi ${name}, Good Evening 🌃`,
        NIGHT: `Hi ${name}, Good Night 🌉`
    };
    // Check if the time provided matches any key in the greetings object
    if (greetings[timeUpper]) {
        console.log(greetings[timeUpper]);
    } else {
        console.log("Simplify code: Please provide a valid time period (MORNING, NOON, AFTERNOON, EVENING, NIGHT).");
    }
}
greetMe('Elsi', 'evening')


for (let i = 0; i <= 5; i++) {
    let str = 'Da ba dee da ba daa'
    console.log(str)
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i)
}

let timeLeft = 5;
const countDown = setInterval(() => {
    console.log(`Time left is ${timeLeft}`)
    timeLeft--
    if (timeLeft < 0) {
        clearInterval(countDown)
        console.log(`Time's Up!`)
    }
}, 1000)

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// Javascript function
console.log('javascript function')

const printHeart = '<3'
console.log(printHeart)
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3))
console.log(multiply(9, 9))
console.log(multiply(5, 4))

let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid"));
console.log(sayHello("Luna")); 
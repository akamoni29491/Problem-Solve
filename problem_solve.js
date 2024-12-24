// Variables
// Q/A-01

var name= "John";

console.log("Hello", name,"!");

// Q/A-02

a= 5;
b= 10;

let sum= a+b;
console.log(sum);

// Q/A-03

var age=25;

console.log("My age is", age);

// Q/A-04

Math=95;
English=99;
Physics=85;

var totalMarks= Math+English+Physics;
var average= totalMarks/3;
console.log(average);

// Q/A-05

// camel case
var animalName= "Panda";
var fruitName= "Sugarcane";

console.log(animalName,"eats", fruitName);

// snake case

var country_name= "Bangladesh";
var victory_day= "Dec 16"

console.log(country_name, "victory day in", victory_day);


// String Methods 
// Q/A-01
let sentence = "Hello From Javascript";
let search= sentence.search("Hello");

console.log(search);


// Q/A-02 (a)

let greeting= "Hello,";
let user= prompt("Enter your name");
let output= greeting.concat("", user.trim());
console.log(output);

// Q/A-03
let userName= "Sara";
let year= 2018;
let plang= "Python";

let output2= `${userName}, you have been coding in ${plang} since ${year}`;

console.log(output2);

// Q/A-04

let emailAddress= "akamoni29491@gmail.com";
let checkFor= "@yahoo.com";

let searchGmail= emailAddress.toLowerCase().
includes (checkFor.toLowerCase());

console.log(searchGmail);

if (searchGmail === true){
    console.log(emailAddress, "It's Yahoo address");
}
else{
    console.log(emailAddress, "It's not Yahoo address");
}

// Q/A-05 (a)

console.log(10 % 2);

// Q/A-06
let number = 10;

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// Q/A-07 (a)
let input = 20; 

if (typeof input === "string") {
    console.log("The input is a string.");
} else if (typeof input === "number") {
    console.log("The input is a number.");
} else {
    console.log("Neither a string or a number.");
}
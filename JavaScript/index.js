// 
// alert("hello world from js")
// vaariable declare using var keyword
var firstName= "Sangam";
var firstName= "Gopal";//re_declare

console.log(firstName, "FirstName");


 function printfullName()
{
    var lastName = "Mishra"
    console.log(firstName+ " "  +lastName, "FullName inside");//log the fulltname
}

printfullName();
// console.log(lastName, "lastName")

// // vaariable declare using let keyword
let fruit= "Apple";
fruit="banana";
console.log(fruit, "fruit");

const book="Zara";
// const book="Zara"; // Cannot redeclare block-scoped variable 'book'.
// book ="News Book"; // Cannot be re-assigned
console.log(book,"book");

{
    var color="Green";
}
// const and let are block-scope whereas var is function-scope

console.log(color,"colorcolor");
// block


// hoisting
 

//var isValid=true; // Boolean
//var isSelected=null; //null value
//var greet;
// var is declared but value os not assigned so it will return undefined.
//console.log(greet,"greet greet")


let isValid=true; // Boolean
let isSelected=null; //null value
let greet;
console.log(greet,"greet greet");

let x=10;
let y=5;
let z=x+y;
console.log(z,"is the sum of x and y");


// complex data types
// let age="20";
// let name="akash";

let person={
    name: "Ram",
    age: 23,
    height: 6,
};

console.log(person.age,"personpersonperson");
console.log(person["age"],"Age");


let Books=["Harry Potter", "Too good to be true","A Passage to India","To kill a Mockingbird"];
console.log(Books[0],"First Element");
console.log(Books[-1],"Last Element");


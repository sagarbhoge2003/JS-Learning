"use strict"; // treat all js code as newer version
//alert(3 + 3) we are using node js not browser

//console.log(3+3);

let name = "sagar";
let age=20
let isTrue=false

//number => 2 to power 53
//bigint
//string = ""
//boolean => true/false
//null => empty value
//undefined => not defined
//symbol => unique

//object
//function
//array

console.log(typeof undefined);
console.log(typeof name);
console.log(typeof null);


// Primitive dataTypes :

// String, number, Boolean , symbol, null, undefined, symbol


// Reference dataTypes(Non-Primitive datatypes) :

// Array, Objects, Functions

const SagarFavourite =["Aaba", "Mummy", "Sai", "Ankita"]

const Sagar_Portfolio = {
    name :"Sagar",
    age: 21,
}
const myFunc = function(){
    console.log("hello world")
}





//*************************************Storage and Memory Allocation**************************************************************



// primitive DT = Stack (When we call it , it provides copy of original value and when we change it the changes happend in copy)

// non Primitive DT = heap (When we call it , it provides refrence of the original value, and the changes occur in original value.)
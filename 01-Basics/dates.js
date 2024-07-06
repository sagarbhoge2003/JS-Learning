// Dates :

let date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString);
// console.log(date.toLocaleDateString());

//let createmyDate = new Date(2023, 0, 23);
//let createmyDate = new Date(2023, 0, 23, 5, 3);
//let createmyDate = new Date("2023-01-24");
//console.log(createmyDate);
//console.log(typeof createmyDate);
let createmyDate = new Date("01-14-2024");
// console.log(createmyDate.toLocaleString());


let myTime = Date.now();

// console.log(myTime);
// console.log(createmyDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


//`${newDate.getDay()} and the time`


newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month : 'long'
})
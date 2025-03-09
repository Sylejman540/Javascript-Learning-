// document.getElementById("arrow").onclick = function() {
//     var image1 = document.getElementById("image1");
//     var image2 = document.getElementById("image2");

//     image1.classList.toggle("hidden");
//     image2.classList.toggle("hidden");
//   };
  
//  Tuesday
// let iLikeMeat = false;

// if(iLikeMeat){
//   console.log("You are not a vegeterian");
// } else{
//   console.log("Ewwww");
// }






// Wednesday

// let isAge = 24;

// while(isAge >  18){
//   console.log("You can enter");
//   isAge++;
// }

// document.write("You are young");

// for(var isAge = 25; isAge > 18; isAge++){
//   console.log("You can enter");
// }

// document.write("You fucking young");

// for(i = 1; i < 10; i++){
    
//   // if(i === 8){
//   //   break;
//   // }


//   console.log(i);
// }






// Thursday
// let a = 5;
// let b = 4;

// if(isNaN(a)){
//   console.log('You are refering to banana as a number!!??');
// } else{
//   console.log("You are correct!!");
// }

// function Math(a, b){
//   let find =(a + b) * 3;
//   console.log(find);
// }

// Math(4, 5);

// console.log(Math.floor(9.9));



// Second Week


// Arrays
// var myArray = [3, 5, 'hello', true];

// myArray[2] = 'lol';

// console.log(myArray);


// // Objects

// var myPerson = {
//     height: 1.7,
//     weight: 30,
//     activites: "hiking"
// };

// console.log(myPerson);


// var myCar = {
//     speed: 100,
//     driver: "Sylejman Shoferi",
//     drive: function(speed, time) {
//         console.log(speed * time);
//     }
// };

// console.log(myCar);
// myCar.drive(5, 3);

// // Variable
// let x = 2;
// let y = 2;

// var z = 2;
// var c = 2

// // Math Object
// console.log(Math.random(1));
// console.log(Math.floor(1.4));
// console.log(Math.max(2.1, 4, 5));
// console.log(Math.ceil(2.1));
// console.log(Math.min(2.3, 11, 24));

// // For Loops

// for(i = 1; i <= 10 ;i++){
//     if(i === 1 || i === 4){
//         continue;
//     }

//     if(i === 4){
//         break;
//     }
//     console.log(i);
// }

// // While

// let number = 32;

// while(number < 24){
//     console.log("Thats higher");
//     number++;
// }

// document.write("Hello");

// // Boolean

// let iLikeAlbanian = true;

// if(iLikeAlbanian){
//     console.log("Why the heck do you like that?");
// } else{
//     console.log("Why dont you like it?");
// }

// // Is NaN

// let d = "Banana";
// let b = 23;

// if(isNaN(d)){
//     console.log(d + " is not a number");
// }else{
//     console.log("You are correct that's a number");
// }

// // Comparision

// let number1 = 24;
// let number2 = 31;

// if(number1 >= number2){
//     console.log("You are too old!");
// } else{
//     console.log("You are younger than age restricted")
// }

let colourChanger = document.getElementById("change-colour");
let colours = ["red", "blue", "black"];
let counter = 0;

function changeColour() {

  if(counter >= colours.length){
    counter = 0;
  }

  colourChanger.style.background = colours[counter];
  counter++;
};

setInterval(changeColour, 3000);
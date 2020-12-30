// alert("welcome to bank");

// var deposite = prompt("how much want to deposite? ")
// alert("you deposited: "+ deposite)
// console.log("have a good day")

// alert("welcome to weight check");
// var weight = prompt("enter weight in pound: ");
// result = weight * 0.454
// alert("your weght is: " + result + " kilogram");
// console.log("conversion completed")

// if condition

// hot = false
// temp = 60

// if (temp < 60){
//     console.log("its hot")
// }else {
//     console.log("its cold")
// }

// x = 0;

// while (x <5){
//     console.log("x is currently: "+x);

//     if (x===3){
//         console.log("x is equal to 3")
//     }
//     console.log("x is currently less than 5")

//     x=x+1;
// }

// while loop

// x = 1;

// while (x < 11){
//     if (x%2===0){
//         console.log("even no is: " +x);
//     }
//     x +=1;
// }

// var word = "abcdefgh"
// for (var i = 0; i < word.length; i++){
//     console.log(word[i])
// }

// var x = 0;

// while (x<5){
//     console.log("hello")
//     x += 1;
// }

// // for loop

// for (var i = 0; i < 5; i++){
//     console.log("hello with for loop");

// }

// print odd numbers from 0 to 25 using for and while loop

// var x = 0;

// while (x < 26){
//     if (x%2 === 1){
//         console.log("odd number with while loop: "+x);
//     }
//     x += 1;
// }

// for (var i = 0; i<26; i++){
//     if (i%2 === 1){
//         console.log("odd number with for loop: "+i);
//     }
// }


var firstname = prompt("enter first name: ");
var lastname = prompt("enter last name: ");
var age = prompt("enter age: ");
var height = prompt("enter height in cm: ");
var petname = prompt("enter pet name: ");
alert("thank you so much for information!")


var firstcond = null;
var lastcond = null;
var agecond = null;
var heightcond = null;
var petnamecond = null;


if (firstname[0]===lastname[0]){
    firstcond = true;
}else{
    firstcond = false;
}

if (age >20 && age <30){
    agecond = true;
}else{
    agecond = false;
}

if (height <= 170){
    heightcond = true;
}else{
    heightcond = false;
}

if (petname[-1] === "y"){
    petnamecond = true;
}else{
    petnamecond = false;
}

if (firstcond && agecond && heightcond && petnamecond){
    console.log("welcome to spy org")
}else{
    console.log("sorry invalid user")
}
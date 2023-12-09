// ****************************************************
// [*][*][*][*][*][*][*][*][*][*][*][*] TASK # 01 - Confirm Password [*][*][*][*][*][*][*][*]
// ****************************************************

// var userName = prompt("Enter your user name:");
// var phone = prompt("Enter your phone number:");
// var email = prompt("Enter your email");
// var pass = prompt("Enter a password:");
// var confirmPass = prompt("Confirm password:");
// var flag = false;

// if (userName != "" || phone != "" || email != "" || pass != "" || confirmPass != "") {
//   if (pass === confirmPass) {
//     alert("Successfully Registered!");
//     console.log("2nd if")
//   }

//   else {
//     alert("Confirm password doesn't match!");
//   }
// }

// else {
//   alert("Please fill the fields");
// }



// ****************************************************
// [*][*][*][*][*][*][*][*][*][*][*][*] TASK # 02 - Check Palindrome [*][*][*][*][*][*][*][*]
// ****************************************************

// let string = prompt("Enter any word:");

// // *************** Method 01 ******************

// // let reversedString = "";
// // for (let i = string.length - 1; i >= 0; i--) {
// //   reversedString += string[i];
// // }

// // OR (The below method; both are correct.)


// // *************** Method 02 ******************
// let reversedString = string.split("").reverse().join("");

// document.write(reversedString);


// if (string == reversedString) {
//   alert("It is a palindrome!");
// }

// else {
//   alert("It is NOT a palindrome!");
// }


// ****************************************************
// [*][*][*][*][*][*][*][*][*] TASK # 03: FIND EVEN AND ODD IN ARRAY [*][*][*][*][*][*][*][*]
// ***************************************************

// var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// var evenElements = [""];
// var oddElements = [""];

// document.write("<h1>Given Array:</h1> ");

//  for (i = 0; i < numberArray.length; i++) {
//   document.write(numberArray[i] + ", " );
// }

// for (i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 2 == 0) {
//     evenElements.push(numberArray[i])
    
//   }
// }

// document.write("</br> <h1>Even Numbers:</h1> " + evenElements);

// for (i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 2 == 1) {
//     oddElements.push(numberArray[i])
    
//   }
// }

// document.write("</br> <h1>Odd Numbers:</h1> " + oddElements);

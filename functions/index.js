// // Function declaration 
// // Function expressions 
// // deference between them explain about let const var
// // function arguments
// // Rest operator
// // Default Parameters
// // Getters and Setters
// // Try and Catch

// // const topic = 'How to create String to Number';

// // console.log(sumNumbers(10, 20));

// function sumNumbers(a, b) {
//     let total = 0;
//     console.log(arguments);
//     for (const iterator of arguments) {
//         total += iterator;
//     }

//     return total;
// }


// function sumNumber(start, ...args) {
//     let total = start;
//     console.log(args);
//     for (const iterator of args) {
//         total += iterator;
//     }

//     return total;
// }

// function interest(principal, rate, years) {
//     let rate1 = rate || 8;
//     let year = rate || 5;
//     return principal * rate1 / 100 * year;
// }

// function interest(principal, rate = 8, years = 5) {
//     return principal * rate / 100 * years;
// }



// console.log(interest(10000));
// // var sumNumber = function (a, b) {
// //     return a + b;
// // }

// const user = {
//     firstName: 'Kevang',
//     lastName: 'Patel',
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName(value) {
//         if (typeof value !== "string") {
//             throw new Error('Value is not a string');
//         }
//         const parts = value.split(' ');
//         if (parts.length !== 2) {
//             throw new Error('Enter a first and last name');
//         }

//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// try {
//     user.fullName = 10;
// } catch (error) {
//     console.log(error);
// }


// let numberLet = 10;
// const numberConst = 10;
// var numberVar = 10;
// // console.log(number);
// debugger

// function returnTypeof (value){
//     return typeof value;
// }

// console.log(returnTypeof(10));
// console.log(returnTypeof(10));
// console.log(returnTypeof('10'));
// console.log(returnTypeof(null));

// var array = [1,2,3,4,5];


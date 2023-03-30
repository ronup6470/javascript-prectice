//  if (condition) {

//  }

//  if (condition) {

//  } else {

//  }


//  if (condition) {

//  } else if(condition){

//  } else {

//  }

// function checkTodayDay(day) {
//     switch (day) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             return 'Week days';
//             break;

//         default:
//             return 'Weekend'
//             break;
//     }
// }

// const day = checkTodayDay(new Date().getDay());
// console.log(day);


// for (let index = 1; index < 10; index++) {
//     console.log(index);
// }

const fName = 'Jaydeep';

// for (let index = 0; index < fName.length; index++) {
//     console.log(fName.charAt(index));
// }

const numberArray = [1, 2, 3, 4, 5, 'Patel', true, { a: 10 }];
// numberArray.

// for (let index = 0; index < numberArray.length; index++) {
//     console.log(numberArray[index]);
// }

// function printOddNumber(number) {
//     firstLoop: for (let index = 1; index < number; index++) {
//         if (index % 2 === 0) {
//             break firstLoop;
//         }
//         console.log(index);
//     }
// }

// printOddNumber(20);


// for (const iterator of fName) {
//     console.log(iterator);
// }

// for (const iterator of numberArray) {
//     console.log(iterator);
// }

const user = {
    firstName: 'Ronak',
    lastName: 'Patel',
    age: 30
}

// for (let index = 0; index < Object.keys(user).length; index++) {
//     console.log();

// }

// for (const iterator of Object.keys(user)) {
//     console.log(iterator, user[iterator]);
// }

for (const key in user) {
    console.log(key);
}

while (condition) {

}

do {

} while (condition);

// condition ? '' : '';

// condition ? '' : condition ? '' : '';

// user.
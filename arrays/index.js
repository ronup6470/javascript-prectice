// Declaring an array
let numbers = [3, 4];
// Adding element end
// numbers.push(5, 6);
// Adding element  beginning
// numbers.unshift(1, 2);
// Adding element  middle
// numbers.splice(2, 0, 25, 26, 40);

// console.log(
//     numbers.reduce((value, currentValue) => value + currentValue, 10)
// );




// Finding Element indexof with two includes primitive
// non primitive find and findIndex
// console.log(numbers.indexOf(250));
// console.log(numbers.includes(25));

// var users = [{ a: 10 }, { a: 20 }];

// console.log(users.findIndex(function (element) {
//     return JSON.stringify(element) === JSON.stringify({ a: 20 });
// }));

// console.log(users.find(function (element) {
//     return element.a === 20;
// }));

// var newFunction = function () { }
// var newFunction = () =>

// console.log(users.find((element)=> element.a === 20));


// Arrow function

// remove element  end
// console.log(numbers.pop());
// console.log(numbers);

// remove element  beginning

// numbers.shift();
// remove element  middle

// numbers.splice(2, 2, 35, 36)

// Emptying an array
//1 []
// let copyNumbers = numbers;
// numbers = [];
//2 length =0
// numbers.length = 0;
//3 splice
// numbers.splice(0);
// console.log(copyNumbers);
//4 pop

// Combining and Slicing
let a = [1, 2]
let b = [3, 4]

// console.log(a.concat(b));
// console.log(numbers.slice());
// console.log(...a);
// the Spread operator
// coping array

// join array show stack overflow example

// const message = 'Create array using javascript';
// const split = message.split(' ');
// console.log(split);

// console.log(split.join('-'));

// Sorting Array


//sort primitive
// numbers.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });

// numbers.reverse();
//reverse
//sort non primitive

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' }
// ]

// courses.sort((a, b) => {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// });

// console.log(courses);


// Testing the elements of array
// every with positive element
// some with positive element

// numbers = [-1, -2, -3, -4, 5, -1];

// console.log(numbers.every((value) => value >= 0));

// console.log(numbers.some((value) => value >= 0));

let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

//Filter

// console.log(cities.filter((element) => element.population >= 2900000).map((element) => element.name.toUpperCase()));


//map
// cities.map((element) => ({ name: element.name }))

//chaining

//Reducing an array
// numbers.reduce((value,currentValue) =>{
//  return value + currentValue
// },0)

// const user = {
//     firstName: 'Ronak',
//     lastName: 'Patel',
//     age: 30,
//     logFullName: function () {
//         console.log(user.firstName + ' ' + user.lastName);
//         console.log(`${user.firstName} ${user.lastName}`);
//     }
// }

// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem('user')));
// document.write(JSON.stringify(user))

// var a = { b: 20 };
// var b = { b: 20 };

// console.log(JSON.stringify(a) === JSON.stringify(b));

console.log(numbers.toString());

const output = [1, 2, 3, 4, 5, 6].map((element, index) => ({ index: element }));
output.forEach(element => console.log(element))
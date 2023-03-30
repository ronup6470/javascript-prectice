
//Example of resolve
const promiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

promiseResolve.then((value) => value).then();

// console.log(promiseResolve);

// Example of reject
// const promiseReject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('foo');
//     }, 300);
// });

// promiseReject.then((value) => {
//     console.log(value);
// });

// console.log(promiseReject);

// Example of all()
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// Example of allSettled();
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//     then((results) => results.forEach((result) => console.log(result.status)));

// Example of any();
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// Example of race()
// const promise1 = new Promise((reject, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
// });
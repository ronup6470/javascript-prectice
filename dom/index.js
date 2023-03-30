// JavaScript Events

/* The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.

For example, when a user clicks over the browser, add js code, which will execute the task to be performed on the event.

Some of the HTML events and their event handlers are: */

// 1) Mouse events:
// 2) Keyboard events:
// 3) Form events:
// 4) Window/Document events:

// const alertBtn = document.getElementById('alertBtn');
// const alertBtn = document.getElementsByTagName('button');
// const alertBtn = document.getElementsByName();
// const alertBtn = document.querySelector('#');
// const alertBtn = document.querySelector('.');
// const alertBtn = document.querySelector('button');
// const alertBtn = document.querySelectorAll('button');

// console.log(alertBtn);
// alertBtn.onclick = openAlert;
// alertBtn.onclick = openAlert;
// alertBtn.onclick = openAlert;
// alertBtn.onclick = openAlert;

// alertBtn.addEventListener('click', openAlert);
// alertBtn.addEventListener('click', openAlert);
// alertBtn.addEventListener('click', openAlert);
// alertBtn.addEventListener('click', openAlert);
// function openAlert() {
//     alertBtn.style.backgroundColor = 'red';
//     alertBtn.classList.add('button');
//     alertBtn.
// }

// const allElement = document.querySelectorAll('*');

// for (let elem of allElement) {
//     // elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
//     elem.addEventListener("click", (e) => {
//         console.log(e);
//         e.stopPropagation();
//         alert(`Bubbling: ${elem.tagName}`)
//     });
// }

const table = document.getElementById('table');
const tableHeaders = ['NAME', 'AGE', 'EMAIL'];

const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach(element => {
    const td = thRow.insertCell();
    td.appendChild(document.createTextNode(element))
});

table.createTBody();
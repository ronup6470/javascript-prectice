// variable to store our intervalID
let nIntervId;

function changeColor(callback) {
    // // check if an interval has already been set up
    // if (!nIntervId) {
    //     nIntervId = setInterval(flashText, 1000);
    // }
    callback('Javascript');
}

function flashText(name) {
    console.log(name);
}

function stopTextColor() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor(flashText));
document.getElementById("stop").addEventListener("click", stopTextColor);
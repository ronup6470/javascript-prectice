function reverseNum(params) {
    var str = String(params);
    var reverseStr = str.split("").reverse().join("");
    return Number(reverseStr);
}
let result = reverseNum(1234);
console.log(result);

function reverseNUmber(number) {
    const string = number.toString();
    let reverseString = '';
    for (const iterator of string) {
        reverseString = iterator + reverseString;

        console.log(iterator, reverseString);
    }
    return +reverseString;
}

console.log(reverseNUmber(54321));

function alphabet_order(str)
{
    return str.toLowerCase().split("").sort().join("");
}
console.log(alphabet_order("Hello world"));

function longestWord(str)
{
    str.split()
}


function reverse() {
    var str = "reverse this cool";
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
}

reverse();

function calculateValue(number: number) {
    if(number < 1) {
        return 0;
    }
    var a = 0;
    var b = 1;
    for (var i = 1; i < number; ++i) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}


// Usage example:

for (var n = 0; n < 10; ++n) {
    var value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}

calculateValue(5);

export {}
let message = "Welcome Back";
console.log(message);

let x = 10;
const y = 20;
let sum;
const title = "Codevolution";

let isBeginner : boolean = true;
let total : number = 0;
let name : string = "John";

let sentence : string = `my name is ${name}`;

console.log(sentence);

function finalValueAfterOperations(operations: string[]): number {
    let result = 0;

    for(let operation of operations) {
        const isIncrement = operation.includes('+');

        result += isIncrement ? 1 : -1;
    }

    return result;
}

console.log(finalValueAfterOperations(["--X","X++","X++"]));
console.log(finalValueAfterOperations(["++X","++X","X++"]));
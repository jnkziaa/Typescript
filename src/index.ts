

function reverse() {
    var str = "reverse this cool";
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
}

reverse();

function calculateValue(number) {
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
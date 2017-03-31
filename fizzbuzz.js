// Write a program that prints the numbers from 1 to 100.
for (var i = 0; i < 100; i++) {
    console.log(i);
}

// But for multiples of three print “Fizz” instead of the number
for (var i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
}

// and for the multiples of five print “Buzz”.
for (var i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    
    if (i % 5 === 0) {
        console.log("Buzz");
    }
}

// For numbers which are multiples of both three and five print “FizzBuzz”."
for (var i = 0; i < 100; i++) {
    var text = i;
    if (i % 3 === 0) {
        text = "Fizz";
    }
    if (i % 5 === 0) {
        text += "Buzz";
    }
    console.log(text);
}
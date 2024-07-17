function isLeapYear(year) {
    // Leap year conditions
    // 1. Years divisible by 4 are leap years,
    // 2. except for years that are divisible by 100 but not divisible by 400.

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;  // Divisible by 400, leap year
            } else {
                return false;  // Divisible by 100 but not by 400, not a leap year
            }
        } else {
            return true;  // Divisible by 4 but not by 100, leap year
        }
    } else {
        return false;  // Not divisible by 4, not a leap year
    }
}

// Examples
console.log(isLeapYear(2020));  // true
console.log(isLeapYear(2021));  // false
console.log(isLeapYear(1900));  // false
console.log(isLeapYear(2000));  // true
console.log(isLeapYear(2400));  // true


// Weather Clothing Adviser
function clothingAdvice() {
    // Ask for temperature
    let temperature = prompt("What is the current temperature in degrees Celsius?");
    
    // Convert input to a number
    temperature = parseFloat(temperature);

    // Validate temperature input
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    // Ask if it's raining
    let isRainingInput = prompt("Is it raining? (yes/no)").toLowerCase();
    let isRaining = isRainingInput === "yes";

    // Clothing advice based on temperature and rain status
    let advice = "Wear ";

    if (temperature >= 25) {
        advice += "light clothing";
    } else if (temperature >= 15) {
        advice += "a light jacket or sweater";
    } else if (temperature >= 5) {
        advice += "a warm jacket or coat";
    } else {
        advice += "very warm clothing";
    }

    if (isRaining) {
        advice += " and take an umbrella or raincoat.";
    } else {
        advice += ".";
    }

    // Display the advice to the user
    alert(advice);
}

// Call the function to start the program
clothingAdvice();


// Fibonacci Sequence:

function fibonacci(n) {
    // Base cases:
    // Fibonacci(0) = 0
    // Fibonacci(1) = 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case:
        // Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
// Calculate the 7th Fibonacci number (Fibonacci(7))
let n = 7;
let result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);


// Power Function: 

function power(base, exponent) {
    // Base case:
    // Any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case:
    // base^exponent = base * base^(exponent-1)
    else {
        return base * power(base, exponent - 1);
    }
}




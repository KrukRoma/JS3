const Fraction = function(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;

    // Function to find the greatest common divisor (GCD)
    this.gcd = function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Function to simplify the fraction
    this.simplify = function() {
        let commonDivisor = this.gcd(this.numerator, this.denominator);
        this.numerator /= commonDivisor;
        this.denominator /= commonDivisor;
    };

    // Function to add two fractions
    this.add = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    // Function to subtract two fractions
    this.subtract = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    // Function to multiply two fractions
    this.multiply = function(fraction) {
        const newNumerator = this.numerator * fraction.numerator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    // Function to divide two fractions
    this.divide = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator;
        const newDenominator = this.denominator * fraction.numerator;
        return new Fraction(newNumerator, newDenominator);
    };

    // Function to display the fraction as a string
    this.toString = function() {
        return `${this.numerator}/${this.denominator}`;
    };
};

// Create two fractions
let fraction1 = new Fraction(3, 4);
let fraction2 = new Fraction(5, 6);

// Display the fractions
document.write(`Fraction 1: ${fraction1.toString()}<br>`);
document.write(`Fraction 2: ${fraction2.toString()}<br><br>`);

// Addition of two fractions
let sum = fraction1.add(fraction2);
sum.simplify();
document.write(`Sum: ${sum.toString()}<br>`);

// Subtraction of two fractions
let difference = fraction1.subtract(fraction2);
difference.simplify();
document.write(`Difference: ${difference.toString()}<br>`);

// Multiplication of two fractions
let product = fraction1.multiply(fraction2);
product.simplify();
document.write(`Product: ${product.toString()}<br>`);

// Division of two fractions
let quotient = fraction1.divide(fraction2);
quotient.simplify();
document.write(`Quotient: ${quotient.toString()}<br>`);

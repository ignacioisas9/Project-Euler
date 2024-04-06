// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
// the smallest number that can be written as the sum of two abundant numbers is 24. 
// By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
// However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number 
// that cannot be expressed as the sum of two abundant numbers is less than this limit.
// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

const limit = 28123;

function sumOfNonAbundantSums(limit) {
    const abundantNumbers = findAbundantNumbers(limit);
    const abundantSums = findAbundantSums(abundantNumbers);

    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (!abundantSums[i]) {
            sum += i;
        }
    }
    return sum;
}

function findAbundantNumbers(limit) {
    const abundantNumbers = [];
    for (let i = 1; i <= limit; i++) {
        if (isAbundant(i)) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}

function isAbundant(number) {
    return number < d(number);
}

function d(n) {
    let sum = 1;
    const sqrtN = Math.sqrt(n);
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            sum += i;
            const divisor = n / i;
            if (divisor !== i) {
                sum += divisor;
            }
        }
    }
    return sum;
}

function findAbundantSums(abundantNumbers) {
    const abundantSums = Array(limit + 1).fill(false);
    const length = abundantNumbers.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const sum = abundantNumbers[i] + abundantNumbers[j];
            if (sum <= limit) {
                abundantSums[sum] = true;
            } else {
                break;
            }
        }
    }
    return abundantSums;
}

console.log(sumOfNonAbundantSums(limit))
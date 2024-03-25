// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(n){
    sum = 0
    for (let i = 1; i <= n; i++){
        sum += i ** 2
    }
    return sum
}

function squareOfSum(n){
    sum = 0
    for (let i = 1; i <= n; i++){
        sum += i
    }
    sum = sum ** 2
    return sum
}

console.log(squareOfSum(100) - sumOfSquares(100))
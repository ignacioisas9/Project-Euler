// The sequence of triangle numbers is generated by adding the natural numbers. 
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 
// The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:
// 1: 1
// 3: 1,3
// 6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

function divisorsOver(number) {
    let i = 1
    let numberOfDivisors = 0
    while (numberOfDivisors <= number) {
        triangle = getTriangleNumber(i)
        divisors = getDivisors(triangle)
        if (divisors >= number){
            console.log(triangle)
            return triangle
        }
        i++
    }
}

function getTriangleNumber(n) {
    return (n * (n + 1)) / 2
}

function getDivisors(number) {
    let numberOfDivisors = 0;
    const sqrtNum = Math.sqrt(number);
    for (let i = 1; i <= sqrtNum; i++) {
        if (number % i === 0) {
            numberOfDivisors += 2; // Count both i and number / i
        }
    }
    // If number is a perfect square, sqrtNum will be counted twice, so we need to subtract one
    if (sqrtNum * sqrtNum === number) {
        numberOfDivisors--;
    }
    return numberOfDivisors;
}

divisorsOver(500)
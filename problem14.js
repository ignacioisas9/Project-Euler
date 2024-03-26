// The following iterative sequence is defined for the set of positive integers:

// n -> n/2 (n is even)
// n -> 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1.

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
// Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

function longestChainUnder(number) {
    let array = []
    let steps = 0
    for (let i = 2; i <= number; i++) {
        while (value !== 1){
            if (isEven(i)) {
                step++
                i = valueIfEven(i)
            }
            if (isOdd(i) && i !== 1) {
                step++
                return valueIfOdd(i)
            }
            if (i === 1) {
                array.push(steps)
            }
        }
    }
    return Math.max(array)
}

function isEven(number) {
    return number % 2 === 0
}

function valueIfEven(number) {
    return number / 2
}

function isOdd(number) {
    return number % 2  !== 0
}

function valueIfOdd(number) {
    return 3 * number + 1
}

longestChainUnder(1000000)
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
    // initialized array with values 0 and 1 (considering cases where no terms or only one)
    let array = [0, 1]
    // lets start at 2 because cases 0 and 1 are contemplated
    for (let i = 2; i <= number; i++) {
        let terms = 1
        let value = i
        while (value !== 1) {
            terms = terms + 1
            value = functionCollatz(value)
        }
        array.push(terms)
        steps = 0
    }
    const indexOfLargestValue = array.reduce(
        (maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0
    )
    console.log(indexOfLargestValue)
    return indexOfLargestValue
}

function functionCollatz(n) {
    if (n % 2 === 0){
        return n / 2
    }
    if (n % 2  !== 0) {
        return 3 * n + 1
    }
}


longestChainUnder(1000000)
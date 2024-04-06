// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
// If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
// The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function findMillionthPermutation(digits) {
    let remainingDigits = digits.slice(); // Make a copy of the original digits array
    let permutation = '';
    let remainingPermutationIndex = 999999; // Since we start counting from 0

    for (let i = digits.length; i > 0; i--) {
        const numPermutations = factorial(i - 1);
        const index = Math.floor(remainingPermutationIndex / numPermutations);
        permutation += remainingDigits.splice(index, 1)[0];
        remainingPermutationIndex %= numPermutations;
    }

    return permutation;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findMillionthPermutation(digits));

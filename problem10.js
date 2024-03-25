// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
// Find the sum of all the primes below two million.

function sumOfPrimesUnder(number) {
    let sum = 0
    for (let i = 1; i <= number; i++){
        if (isPrime(i)){
            sum += i
        }
    }
    console.log(sum)
    return sum
}

function isPrime(number){
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0){
        return false;
    }
    root = Math.floor(Math.sqrt(number))
    for (let i = 3; i <= root; i += 2){
        if (number % i === 0){
            return false
        }
    }
    return true
}

sumOfPrimesUnder(2000000)
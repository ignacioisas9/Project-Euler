// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

function nthPrime(n){
    const primes = [2]
    let number = 3
    while (primes.length < n){
        if (isPrime(number)){
            primes.push(number)
        }
        number += 2
    }
    return primes.pop()
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

console.log(nthPrime(10001))

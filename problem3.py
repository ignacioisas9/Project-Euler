## The prime factors of 13195 are 5, 7, 13 and 29.
## What is the largest prime factor of the number 600851475143?

from math import sqrt
from math import floor

def largestPrimeFactor(number):
    if isPrime(number):
        return number
    else:
        root = floor(sqrt(number))
        if root % 2 == 0:
            root -= 1
        for i in range(root, 1, -2):  # Decrease by 2 since we're only interested in odd numbers
            if number % i == 0 and isPrime(i):
                return i

def isPrime(number):
    if number == 2:
        return True
    if number % 2 == 0 or number == 1:
        return False
    root = floor(sqrt(number))
    for i in range(3, root + 1, 2):  # Increment by 2 since we're only interested in odd numbers
        if number % i == 0:
            return False
    return True

result = largestPrimeFactor(600851475143)
print(result)

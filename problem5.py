## 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
## What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

def smallestMinimumCommonMultiple(n):
    guess = n
    found = False
    while not(found):
        if checkDivisors(guess, n):
            found = True
        else:
            guess += 1
    print(guess)
    return guess


def checkDivisors(guess, n):
    for i in range(1, n + 1):
        if guess % i != 0:
            return False
    return True

smallestMinimumCommonMultiple(20)
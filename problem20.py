# n! means n x (n - 1) x ... x 3 x 2 x 1
# For example, 10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800, 
# and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
# Find the sum of the digits in the number 100!.

def sum_of_factorial(number):
    fact = str(factorialize(number))
    sum = 0
    for i in range(len(fact)):
        sum += int(fact[i])
    return sum

def factorialize(num):
    if (num < 0):
        return -1
    elif (num == 0):
        return 1
    else:
        return (num * factorialize(num - 1))

print(sum_of_factorial(100))
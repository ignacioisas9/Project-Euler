# Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

# 1634 = 1^4 + 6^4 + 3^4 + 4^4
# 8208 = 8^4 + 2^4 + 0^4 + 8^4
# 9474 = 9^4 + 4^4 + 7^4 + 4^4

# As 1 = 1^4 is not a sum it is not included.
# The sum of these numbers is 1634 + 8208 + 9474 = 19316.
# Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

def sumOfFifthPowers():
    sum = 0
    max_num = 6 * 9 ** 5
    for number in range(10, max_num):
        if number == getFifthPowerDigits(number):
            sum = sum + number
    return sum

def getFifthPowerDigits(number):
    sum = 0
    string = str(number)
    for i in range(len(string)):
        sum = sum + int(string[i]) ** 5
    return sum


print(sumOfFifthPowers())
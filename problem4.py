## A palindromic number reads the same both ways. 
## The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
## Find the largest palindrome made from the product of two 3-digit numbers.

def largestPalindrome(numberOfDigits):
    largest = float('-inf')
    number = ''
    for i in range(numberOfDigits):
        number = number + '9'
    number = int(number)
    for i in range(1, number + 1):
        for j in range(1, number + 1):
            product = i * j
            if isPalindrome(product) and product > largest:
                largest = product
    print(largest)
    return largest

def isPalindrome(number):
    word1 = str(number)
    word2 = word1[::-1]
    return word1 == word2

largestPalindrome(3)
## largestPalindrome(2) = 9009    (91 x 99)
## largestPalindrome(3) = 906609
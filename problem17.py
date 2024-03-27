# If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
# then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
# If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
# NOTE: Do not count spaces or hyphens. 
# For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
# The use of "and" when writing out numbers is in compliance with British usage.

def numberLetterCount(limit):
    count = {
        0: '',  # Add a placeholder for 0
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        1000: 'one thousand'
    }

    def count_letters(n):
        if n in count:
            return len(count[n].replace(" ", ""))
        elif n < 100:
            return len(count[n - n % 10].replace(" ", "")) + len(count[n % 10].replace(" ", ""))
        elif n < 1000:
            return len(count[n // 100].replace(" ", "")) + len("hundred") + (len("and") if n % 100 != 0 else 0) + count_letters(n % 100)
        else:
            return len(count[1].replace(" ", "")) + len("thousand")

    total_letters = 0
    for i in range(1, limit + 1):
        total_letters += count_letters(i)
    return total_letters

print(numberLetterCount(1000))  # Output should be 21124

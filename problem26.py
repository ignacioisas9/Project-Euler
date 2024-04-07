# A unit fraction contains 1 in the numerator. 
# The decimal representation of the unit fractions with denominators 2 to 10 are given:
# 1/2 = 0.5
# 1/3 =0.(3)
# 1/4 =0.25
# 1/5 = 0.2
# 1/6 = 0.1(6)
# 1/7 = 0.(142857)
# 1/8 = 0.125
# 1/9 = 0.(1)
# 1/10 = 0.1
# Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
# Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

def longestRecurringCycle():
    max_cycle_length = 0
    max_d = 0
    for d in range(2, 1000):
        cycle_length = find_cycle_length(d)
        print(cycle_length)
        if cycle_length > max_cycle_length:
            max_cycle_length = cycle_length
            max_d = d
    
    return max_d

def find_cycle_length(d):
    remainder_position = {}
    remainder = 1 % d
    position = 0
    
    while remainder not in remainder_position and remainder != 0:
        remainder_position[remainder] = position
        remainder = (remainder * 10) % d
        position += 1
    
    if remainder == 0:
        return 0
    else:
        return position - remainder_position[remainder]

print(longestRecurringCycle())
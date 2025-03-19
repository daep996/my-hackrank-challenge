#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    # Write your code here
    valleys = 0
    i = 0
    for step in path:
        if step == 'U':
            valleys += 1
        if step == 'D':
            valleys -= 1
        if valleys == 0 and step == 'U':
            i += 1
    return i

print(countingValleys(8, 'UDDDUDUU')) # 1
print(countingValleys(8, 'DDUUUUDD')) # 1
print(countingValleys(8, 'DUDUDUDU')) # 4
print(countingValleys(8, 'UDUDUDUD')) # 0
print(countingValleys(2, 'DD')) # 0

#
# Complete the 'getTotalX' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#

def getTotalX(a: list[int], b: list[int]) -> int:
    # Write your code here
    from functools import reduce
    lmcm = reduce(mcm, a)
    mcd_b = reduce(mcd, b)
    count = 0
    
    for i in range(lmcm, mcd_b + 1, lmcm):
        if mcd_b % i == 0:
            count += 1
            
    return count

def mcd(x: int, y: int) -> int:
    while(y != 0):
        temp = y
        y = x % y
        x = temp
    return x

def mcm(x: int, y: int) -> int:
    return (x * y) // mcd(x, y)

if __name__ == '__main__':
    print(getTotalX([2, 6], [24, 36])) # 2
    print(getTotalX([2, 4], [16, 32 ,96])) # 3

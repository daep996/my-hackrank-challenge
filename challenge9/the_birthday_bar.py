#
# Complete the 'birthday' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY s
#  2. INTEGER d
#  3. INTEGER m
#

def birthday(s, d, m):
    # Write your code here
    res = 0
    for i in range(len(s) - m + 1):
        suma = sum(s[i: i + m])
        if suma == d:
            res += 1
    return res


if __name__ == '__main__':
    print(f"birthday: {birthday([1, 2, 1, 3, 2], 3, 2)}") # 2
    print(f"birthday: {birthday([1, 1, 1, 1, 1, 1], 3, 2)}") # 0
    print(f"birthday: {birthday([4], 4, 1)}") # 1
    print(f"birthday: {birthday([2,3,4,4,2,1,2,5,3,4,4,3,4,1,3,5,4,5,3,1,1,5,4,3,5,3,5,3,4,4,2,4,5,2,3,2,5,3,4,2,4,3,3,4,3,5,2,5,1,3,1,4,2,2,4,3,3,3,3,4,1,1,4,3,1,5,2,5,1,3,5,4,3,3,1,5,3,3,3,4,5,2], 26, 8)}") # 16
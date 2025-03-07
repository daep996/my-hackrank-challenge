#
# Complete the 'divisibleSumPairs' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER k
#  3. INTEGER_ARRAY ar
#

def divisibleSumPairs(n, k, ar):
    # Write your code here
    num_pairs = 0
    for i in range(n):
        for j in range(n):
            if(i < j):
                if((ar[i] + ar[j]) % k == 0):
                    num_pairs += 1
    return num_pairs

print(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); # 3
print(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); # 5
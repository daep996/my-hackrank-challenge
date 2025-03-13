 #
 # Complete the 'pageCount' function below.
 #
 # The function is expected to return an INTEGER.
 # The function accepts following parameters:
 #  1. INTEGER n
 #  2. INTEGER p
 #

def pageCount(n: int, p: int) -> int:
    # Write your code here
    if n == 1 or n == p:
        return 0
    turned_pages_from_start = p // 2
    turned_pages_from_end = n // 2 - turned_pages_from_start
    return min(turned_pages_from_start, turned_pages_from_end)

if __name__ == '__main__':
    print(pageCount(6, 2))  # 1
    print(pageCount(5, 4))  # 0
    print(pageCount(6, 5))  # 1
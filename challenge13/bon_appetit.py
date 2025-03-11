#
# Complete the 'bonAppetit' function below.
#
# The function accepts following parameters:
#  1. INTEGER_ARRAY bill
#  2. INTEGER k
#  3. INTEGER b
#

def bonAppetit(bill, k, b):
    # Write your code here
    total = 0
    for i in range(len(bill)):
        total += bill[i]
    injust_total = (total - bill[k]) / 2
    if injust_total == b:
        print("Bon Appetit")
    else:
        print(int(b - injust_total))

if __name__ == '__main__':
    bonAppetit([3, 10, 2, 9], 1, 12); # 5
    bonAppetit([3, 10, 2, 9], 1, 7); # Bon Appetit
    bonAppetit([2, 4, 6], 2, 6); # 3
    bonAppetit([2, 4, 6], 2, 3); # Bon Appetit
def kangaroo(x1, v1, x2, v2):
    # Write your code here
    if((v1 == v2 and x1 != x2) or (x1 > x2 and v1 > v2)):
        return 'NO';
    t =  int((x1-x2)/(v2-v1))
    return 'YES' if (t > 0 and ((x1 - x2) % (v2 - v1) == 0)) else 'NO'

if __name__ == '__main__':
    print(kangaroo(0, 3, 4, 2)); # YES
    print(kangaroo(0, 2, 5, 3)); # NO
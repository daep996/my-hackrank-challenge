# Complete the catAndMouse function below.
def catAndMouse(x, y, z):
    if abs(x - z) == abs(y - z):
        return 'Mouse C'
    if(abs(z - x) < abs(z - y)):
        return 'Cat A'
    else:
        return 'Cat B'
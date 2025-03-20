
def getMoneySpent(keyboards, drives, b):
    # Write your code here.
    expensive = -1
    for keyboard in keyboards:
        for mouse in drives:
            expensive = (keyboard + mouse) if (keyboard + mouse > expensive and keyboard + mouse <= b) else expensive
    return expensive

getMoneySpent([40, 50, 60], [5, 8, 12], 60) # 58
getMoneySpent([5, 1, 1], [4], 5) # -1
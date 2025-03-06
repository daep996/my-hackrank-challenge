def breakingRecords(scores: list[int]):
    # Write your code here
    min = max = scores[0]
    minCount = maxCount = 0
    if len(scores) == 0:
        return [0, 0]
    for score in scores[1:]:
        if score > max:
            max = score
            maxCount += 1
        elif score < min:
            min = score
            minCount += 1
    return [maxCount, minCount]

if __name__ == '__main__':
    print(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) # [2, 4]
    print(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) # [4, 0]

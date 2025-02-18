def countApplesAndOranges(s, t, a, b, apples: list[int], oranges):
    # Write your code here
    apples_distance = list(filter(lambda o: s <= o <= t, map(lambda apple: apple + a, apples)))
    oranges_distance = list(filter(lambda o: s <= o <= t, map(lambda orange: orange + b, oranges)))
    print(f"{len(apples_distance)}\n{len(oranges_distance)}")

if __name__ == '__main__':
    countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]) # 1 2
    countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]) # 1 1
def birthdayCakeCandles(candles):
    # Write your code here
    orderedCandles = sorted(candles, reverse=True)
    max = orderedCandles[0]
    maxFilterCandles = list(filter(lambda x: x == max, orderedCandles))
    return len(maxFilterCandles)

if __name__ == "__main__":
    birthdayCakeCandles([3, 2, 1, 3]); # 2
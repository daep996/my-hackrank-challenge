function birthdayCakeCandles(candles) {
    // Write your code here
    const orderedCandles = candles.toSorted((a, b) => b - a)
    const max = orderedCandles[0]
    const maxFilterCandles = orderedCandles.filter(candle => candle === max)
    return maxFilterCandles.length
}

birthdayCakeCandles([3, 2, 1, 3]); // 2
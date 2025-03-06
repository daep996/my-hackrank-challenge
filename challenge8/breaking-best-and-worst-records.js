function breakingRecords(scores) {
    // Write your code here
    let min = max = scores[0]
    let minCount = maxCount = 0
    if(scores.length === 1) return [0, 0];
    for (let i = 1; i < scores.length; i++) {
        if(scores[i] < min) {
            min = scores[i]
            minCount++
        }
        if(scores[i] > max) {
            max = scores[i]
            maxCount++
        }
    }
    return [maxCount, minCount]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // [2, 4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) // [4, 0]

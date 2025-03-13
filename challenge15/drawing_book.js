/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    if (n === 1 || n === p ) return 0
    const turnedPagesFromStart = Math.floor(p / 2)
    const turnedPagesFromEnd = Math.floor(n / 2) - turnedPagesFromStart
    return Math.min(turnedPagesFromStart, turnedPagesFromEnd)
}

console.log(pageCount(6, 2)) // 1
console.log(pageCount(5, 4)) // 0
console.log(pageCount(6, 5)) // 1
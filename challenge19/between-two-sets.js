// Maximo comun divisor
function mcd(x, y) {
    while (y !== 0) {
        let temp = y
        y = x % y
        x = temp
    }
    return x
}

// Minimo comun multiplo
function mcm(x, y) {
    return (x * y) / mcd(x, y)
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let lmcm = a.reduce((acc, val) => mcm(acc, val))
    let mcdB = b.reduce((acc, val) => mcd(acc, val))
    let count = 0
    for (let i = lmcm; i <= mcdB; i += lmcm) {
        if (mcdB % i === 0) {
            count++
        }
    }
    return count
}

console.log(`getTotalX([2, 6], [24, 36]): ${getTotalX([2, 6], [24, 36])}`) // 2
console.log(`getTotalX([2, 4], [16, 32 ,96]): ${getTotalX([2, 4], [16, 32 ,96])}`) // 3
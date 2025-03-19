/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valleys = 0
    let i = 0
    for (let step of path) {
        if (step === 'U')
            valleys++
        if (step === 'D')
            valleys--
        if(valleys === 0 && step === 'U')
            i++
    }
    return i
}

console.log(countingValleys(8, 'UDDDUDUU')) // 1
console.log(countingValleys(8, 'DDUUUUDD')) // 1
console.log(countingValleys(8, 'DUDUDUDU')) // 4
console.log(countingValleys(8, 'UDUDUDUD')) // 0
console.log(countingValleys(2, 'DD')) // 0
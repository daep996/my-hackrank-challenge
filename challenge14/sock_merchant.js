/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let ordened_ar = ar.sort((a,b) => a - b)
    // console.log(`ordened_ar: ${ordened_ar}`)
    let pairs = 0
    if (n === 1) {
        return pairs
    }
    for (let i = 0; i < n; i++) {
        if(ordened_ar[i] === ordened_ar[i+1]) {
            pairs++
            i++
        }
    }
    return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
console.log(sockMerchant(7, [1,2,1,2,1,3,2])) // 2
console.log(sockMerchant(1, [1])) // 0
console.log(sockMerchant(2, [1,1])) // 1
console.log(sockMerchant(3, [1,1,1])) // 1
console.log(sockMerchant(4, [1,1,1,1])) // 2
console.log(sockMerchant(4, [2,1,2,1])) // 2
console.log(sockMerchant(4, [40, 1, 5, 200])) // 0
console.log(sockMerchant(100, [50,49,38,49,78,36,25,96,10,67,78,58,98,8,53,1,4,7,29,6,59,93,74,3,67,47,12,85,84,40,81,85,89,70,33,66,6,9,13,67,75,42,24,73,49,28,25,5,86,53,10,44,45,35,47,11,81,10,47,16,49,79,52,89,100,36,6,57,96,18,23,71,11,99,95,12,78,19,16,64,23,77,7,19,11,5,81,43,14,27,11,63,57,62,3,56,50,9,13,45])) // 28

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if((v1 === v2 && x1 !== x2) || (x1 > x2 && v1 > v2)) {
        return 'NO';
    }
    const t = (x1-x2) / (v2-v1)
    return (t > 0 && ((x1 - x2) % (v2 - v1) === 0)) ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
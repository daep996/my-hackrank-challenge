/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0
    for (let i = 0; i < bill.length; i++) {
        total += bill[i]
    }
    const injustTotal = (total - bill[k]) / 2
    if(injustTotal === b) {
        console.log('Bon Appetit')
    }
    else {
        return console.log(b - injustTotal)
    }
}

bonAppetit([3, 10, 2, 9], 1, 12); // 5
bonAppetit([3, 10, 2, 9], 1, 7); // Bon Appetit
bonAppetit([2, 4, 6], 2, 6); // 3
bonAppetit([2, 4, 6], 2, 3); // Bon Appetit
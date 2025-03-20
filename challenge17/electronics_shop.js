/*
 * Complete the getMoneySpent function below.
 *
 * The function is expected to return an INTEGER.
 * Array number Keyboards
 * Array number Keyboards
 * INTEGER b
 */
function getMoneySpent(keyboards, drives, b) {
    // Write your code here.
    let expensive = -1
    for (let keyboard of keyboards) {
        for (let mouse of drives) {
            expensive = keyboard + mouse > expensive && keyboard + mouse <= b ? keyboard + mouse : expensive
        }
    }
    return expensive
}

getMoneySpent([40, 50, 60], [5, 8, 12], 60) // 58
getMoneySpent([5, 1, 1], [4], 5) // -1

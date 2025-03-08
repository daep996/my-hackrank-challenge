/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    const mapBirds = new Map()
    arr.forEach(el => mapBirds.set(el, (mapBirds.get(el) || 0) + 1))
    const max = Math.max(...Array.from(mapBirds.values()))
    return Array.from(mapBirds)
        .filter(([_, v]) => v === max)
        .sort(([a], [c]) => a - c)[0][0]
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])) // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) // 3
console.log(migratoryBirds([1, 1, 2, 2, 3])) // 1
console.log(migratoryBirds([1, 1, 0, 0, 3])) // 0

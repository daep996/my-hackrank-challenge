// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (Math.abs(x - z) === Math.abs(y - z))
        return 'Mouse C'
    if(Math.abs(z - x) < Math.abs(z - y) )
        return 'Cat A'
    else
        return 'Cat B'
}
console.log(catAndMouse(1, 2, 3)) // Cat B
console.log(catAndMouse(1, 3, 2)) // Mouse C

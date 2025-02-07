function miniMaxSum(arr) {
    // Write your code here
    let sumas = []
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = [...arr]
        sum = arr.map((arrSum, index) => {
            if(index !== i) {
                return arrSum
            } else {
                return ''
            }
        })
        sum = sum.filter(item => item !== '')
        suma = sum.reduce((a, b) => Number(a) + Number(b))
        sumas.push(suma)
    }
    console.log(`${Math.min(...sumas)} ${Math.max(...sumas)}`)
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
miniMaxSum([1,3,5,7,9]); // 16 24
miniMaxSum([7,69,2,221,8974]); // 299 9271
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesDistance = apples.map(apple => apple + a).filter( o => o >= s && o <= t)
    let orangesDistance = oranges.map(orange => orange + b).filter( o => o >= s && o <= t)
    console.log(`${applesDistance.length}\n${orangesDistance.length}`)
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]) // 1 2
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]) // 1 1
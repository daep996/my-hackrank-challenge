function miniMaxSum(arr) {
  let sumas = [];
  for (let i = 0; i < arr.length; i++) {
    let temp_arr = arr.slice();
    temp_arr.splice(i, 1);
    sumas.push(temp_arr.reduce((a, b) => a + b, 0));
  }
  console.log(`${Math.min(...sumas)} ${Math.max(...sumas)}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
miniMaxSum([1,3,5,7,9]); // 16 24
miniMaxSum([7,69,2,221,8974]); // 299 9271
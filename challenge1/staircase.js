function staircase(n) {
  // Write your code here
  let hash = n;
  let rta = "";
  for (let i = 0; i < n; i++) {
    let x = Array(n).fill(" ");
    let arr2 = x.fill("#", hash - 1, n);
    arr2 = arr2.join("");
    hash--;
    rta += arr2.toString() + "\n";
  }
  console.log(rta);
}

staircase(7);

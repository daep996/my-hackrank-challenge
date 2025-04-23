package main

import "fmt"

// Maximo comun divisor
func mcd(x int32, y int32) int32 {
	for y != 0 {
		temp := y
		y = x % y
		x = temp
	}
	return x
}

// Minimo comun multiplo
func mcm(x int32, y int32) int32 {
	return int32((x * y) / mcd(x, y))
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

func getTotalX(a []int32, b []int32) int32 {
	// Write your code here
	lmcm := a[0]
	for i := 1; i < len(a); i++ {
		lmcm = mcm(lmcm, a[i])
	}
	mcdB := b[0]
	for i := 1; i < len(b); i++ {
		mcdB = mcd(mcdB, b[i])
	}

	var count int32 = 0
	for i := lmcm; i <= mcdB; i += lmcm {
		if mcdB%i == 0 {
			count++
		}
	}
	return count
}

func main() {
	fmt.Println(getTotalX([]int32{2, 6}, []int32{24, 36}))     // 2
	fmt.Println(getTotalX([]int32{2, 4}, []int32{16, 32, 96})) // 3
}

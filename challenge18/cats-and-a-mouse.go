package main

import (
	"fmt"
	"math"
)

// Complete the catAndMouse function below.
func catAndMouse(x int32, y int32, z int32) string {
	if math.Abs(float64(x-z)) < math.Abs(float64(y-z)) {
		return "Cat A"
	} else if math.Abs(float64(x-z)) > math.Abs(float64(y-z)) {
		return "Cat B"
	} else {
		return "Mouse C"
	}
}

func main() {
	fmt.Println(catAndMouse(1, 2, 3)) // Cat B
	fmt.Println(catAndMouse(1, 3, 2)) // Mouse C
}

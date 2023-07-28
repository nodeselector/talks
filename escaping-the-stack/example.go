package main

import (
	"fmt"
)

func main() {
	exampleZero()
	exampleOne()
	exampleTwo()
	exampleThree()
	exampleFour()
}

func exampleZero() int {
	someNum := 1
	return someNum
}

func exampleOne() *int {
	someNum := 1
	return &someNum
}

func exampleTwo() {
	someNum := new(int)
	*someNum = 42

	fmt.Println(*someNum)
}

type thing struct{}

func exampleThree() {

	someThing := thing{}

	fmt.Printf("%v", &someThing)
}

func exampleFour() *int {
	return nil
}

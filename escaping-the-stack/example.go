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

// todo: this one is a bit more complicated, but has some edge cases that are interesting
func exampleTwo() {
	someNum := new(int)
	*someNum = 42

	fmt.Println(*someNum)
	someFunc(*someNum)
	someVariadicFunc(*someNum)
	someVariadicFuncThatTakesAnything(*someNum)
}

type thing struct{}

func exampleThree() {

	someThing := thing{}

	fmt.Printf("%v", &someThing)
}

func exampleFour() *int {
	return nil
}

func someFunc(someInt int) {
	// Do nothing
	fmt.Println(someInt)
}

func someVariadicFunc(someInt ...int) {
	// Do nothing
	fmt.Printf("%v", someInt)
}

func someVariadicFuncThatTakesAnything(something ...interface{}) {
	// Do nothing
	fmt.Println(something...)
}

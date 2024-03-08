---
theme: default
---

<style>
  code {
    @apply text-xs;
  }
</style>

# Escaping the Stack
@nodeselector

---

# Disclaimer

This presentation is intended to take ten minutes but we're covering a subject that you could write a PhD thesis about.
There's a lot more to this subject than what's covered here, so have a look at the linked material.

---

# The Heap and The Stack, an introduction

- What is a pointer?
- What is a stack?
- What is a heap?

---

## What is a pointer?

Pointers are a type in Golang, and they are a type of thing that holds memory addresses!

```go
func main() {
    a := 2
    fmt.Println(&a)
}
```

Output:
```
0xc0000b6000
```

This printed the string representation of the **address** where `a` is in memory.

---
layout: two-cols
---

What is a stack?
- In this case, the stack stores variables **local to a function**.
- Each goroutine has a distinct stack that no other goroutine may trespass on.
- In addition to variables declared within the function, a stack holds the function arguments, and saves space for the return values.

What is a heap?
- Memory location for values that are shared beyond the scope of a function's stack.
- Can be accessed concurrently, however, is subject to data races.

::right::

<img src="/stack.webp" width="500"/>

---

## How do we decide between the heap and the stack?

Escape analysis!
- Done at compile time to inform the runtime when doing memory allocations.
- Ensures that no goroutine can access another goroutine's stack.
- Based on how a value is shared, not how it is declared.[^1]

[^1]: <https://www.ardanlabs.com/blog/2017/05/language-mechanics-on-escape-analysis.html>

---

# Practical Examples!

You may see completely different behavior depending on what version of Go that you are using.

```
$ go version
  go version go1.19.9 linux/amd64
```

To tell the compiler to build with additional debug statements related to allocations, run something like this.[^1]

```
$ go build -gcflags '-m=3 -l' example.go

```
[^1]: <https://tip.golang.org/doc/gc-guide#Escape_analysis>

---

## Example A

```go
func exampleZero() int {
  someNum := 1
  return someNum
}
```

<details>
<summary>Escape Analysis</summary>

```bash
./example_heap_alloc.go:15:11:[1] exampleZero stmt: someNum := 1
./example_heap_alloc.go:15:3:[1] exampleZero stmt: var someNum int
./example_heap_alloc.go:16:3:[1] exampleZero stmt: return someNum
```

</details>

---

## Example B

```go
func exampleFour() *int {
        return nil
}
```

<details>
<summary>Escape Analysis</summary>

```bash
./example.go:42:2:[1] exampleFour stmt: return nil
```

</details>

---

## Example C

```go
func exampleOne() *int {
  someNum := 1
  return &someNum
}
```

<details>
<summary>Escape Analysis</summary>

```bash
./example_heap_alloc.go:20:11:[1] exampleOne stmt: someNum := 1
./example_heap_alloc.go:20:3:[1] exampleOne stmt: var someNum int
./example_heap_alloc.go:21:3:[1] exampleOne stmt: return &someNum
./example_heap_alloc.go:20:3: someNum escapes to heap:
./example_heap_alloc.go:20:3:   flow: ~r0 = &someNum:
./example_heap_alloc.go:20:3:     from &someNum (address-of) at ./example_heap_alloc.go:21:10
./example_heap_alloc.go:20:3:     from return &someNum (return) at ./example_heap_alloc.go:21:3
./example_heap_alloc.go:20:3: moved to heap: someNum
```

</details>

---

## Example D

```go
func exampleTwo() {
  someNum := new(int)
  *someNum = 42

  fmt.Println(*someNum)
}
```

<details>
<summary>Escape Analysis</summary>

```bash
./example_heap_alloc.go:25:11:[1] exampleTwo stmt: someNum := new(int)
./example_heap_alloc.go:25:3:[1] exampleTwo stmt: var someNum *int
./example_heap_alloc.go:26:12:[1] exampleTwo stmt: *someNum = 42
./example_heap_alloc.go:28:14:[1] exampleTwo stmt: fmt.Println(*someNum)
./example_heap_alloc.go:28:15: *someNum escapes to heap:
./example_heap_alloc.go:28:15:   flow: {storage for ... argument} = &{storage for *someNum}:
./example_heap_alloc.go:28:15:     from *someNum (spill) at ./example_heap_alloc.go:28:15
./example_heap_alloc.go:28:15:     from ... argument (slice-literal-element) at ./example_heap_alloc.go:28:14
./example_heap_alloc.go:28:15:   flow: {heap} = {storage for ... argument}:
./example_heap_alloc.go:28:15:     from ... argument (spill) at ./example_heap_alloc.go:28:14
./example_heap_alloc.go:28:15:     from fmt.Println(... argument...) (call parameter) at ./example_heap_alloc.go:28:14
./example_heap_alloc.go:25:17: new(int) does not escape
./example_heap_alloc.go:28:14: ... argument does not escape
./example_heap_alloc.go:28:15: *someNum escapes to heap
```

</details>


---

## Example E

```go
type thing struct {}
func exampleThree() {

  someThing := thing{}

  fmt.Printf("%v", &someThing)
}
```

<details>
<summary>Escape Analysis</summary>

```bash
./example_heap_alloc.go:34:13:[1] exampleThree stmt: someThing := thing{}
./example_heap_alloc.go:34:3:[1] exampleThree stmt: var someThing thing
./example_heap_alloc.go:36:13:[1] exampleThree stmt: fmt.Printf("%v", &someThing)
./example_heap_alloc.go:34:3: someThing escapes to heap:
./example_heap_alloc.go:34:3:   flow: {storage for ... argument} = &someThing:
./example_heap_alloc.go:34:3:     from &someThing (address-of) at ./example_heap_alloc.go:36:20
./example_heap_alloc.go:34:3:     from &someThing (interface-converted) at ./example_heap_alloc.go:36:20
./example_heap_alloc.go:34:3:     from ... argument (slice-literal-element) at ./example_heap_alloc.go:36:13
./example_heap_alloc.go:34:3:   flow: {heap} = {storage for ... argument}:
./example_heap_alloc.go:34:3:     from ... argument (spill) at ./example_heap_alloc.go:36:13
./example_heap_alloc.go:34:3:     from fmt.Printf("%v", ... argument...) (call parameter) at ./example_heap_alloc.go:36:13
./example_heap_alloc.go:34:3: moved to heap: someThing
./example_heap_alloc.go:36:13: ... argument does not escape
```

</details>


---

## A parting note on escape analysis

> Whether a Go value escapes or not is a function of the context in which it is used and the Go compiler's escape analysis algorithm.
> It would be fragile and difficult to try to enumerate precisely when values escape: the algorithm itself is fairly sophisticated and changes between Go releases.
> For more details on how to identify which values escape and which do not, see the section on eliminating heap allocations.
- _A Guide to the Go Garbage Collector_[^1]

[^1]: <https://tip.golang.org/doc/gc-guide#Where_Go_Values_Live>


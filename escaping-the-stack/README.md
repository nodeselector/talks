# Escaping The Stack

To see if a variable escapes the stack, you can use the `-gcflags` flag with the `go build` command:
```
go build -gcflags '-m=3 -l' example.go
```
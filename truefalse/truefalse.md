# True /false values   or truth falsy values

# falsy values

1. false
2. 0
3. -0
4. BigInt On
5. ""  (without space)
6. null
7. undefined
8. NaN

---

# Truthy values

1. "0"
2. "false"
3. " " (with space)
4. []
5. {}
6. function (){}

---
inko use krne se value false khelati ha 
example
```
let a = ""

if(a){      (iss condition may humesha else condition run hogi kyu if false hoga "" ka mtlb false hota ha orr upper flase value ke example ha)
    console.log("may execute hua:")
}else{
    console.log("may execute nhi hua:")
}
output
may execute nhi hua:
```

but agr
 

```
let a = []

if(a){      (iss condition may humesha if condition run hogi kyu if true hoga [] ka mtlb true hota ha)
    console.log("may execute hua:")
}else{
    console.log("may execute nhi hua:")
}
output
may execute hua:
```

# How to check if array is empty or not

```
let arr = []
 if(arr.length === 0){
    console.log("arr empty")
 } else{
    console.log("not empty")
 }


```

# How to check object is empty or not
```
let objgg = {}

if(Object.keys(objgg).length=== 0){
     console.log(" empty")
}else{
    console.log("not empty")
 }


```

# Nullish Coalescing operator (??):null undefined

```
let value ; 
 
 value= 5 ?? 10 
 output 5
 value = null ?? 10
 output 10
 value = undefined ??33
 output 33

 ```
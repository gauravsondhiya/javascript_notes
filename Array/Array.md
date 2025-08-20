# Arrays

# Declaration

```
const arr = [1,2,3,4,5]   
values         

const arr = new Array(1,2,3,4,5) 

```

# Methods

# 1. Push() and Pop()
 [koue bhi value last se add hogi push() se or last se remove hogi pop()se]

``` 
let arr = [1,2,3,4,5]

arr.push("gaurav") [ 1, 2, 3, 4, 5 ,"gaurav" ]
arr.pop() [ 1, 2, 3, 4, 5 ]

console.log(arr)

```
 
# 2. unshift() and shift()

[koue bhi value first se add hogi unshift() se or last se remove hogi shift()se]

```
let arr = [1,2,3,4,5]
 
arr.unshift(6) [ 6, 1, 2, 3, 4, 5 ]

arr.shift()    [  1, 2, 3, 4, 5 ]  
console.log(arr)
 
``` 

# 3. includes() and indexof()
 
includes()- its return true or false value arr ke andr ha ya nhi ha

indexof() -value koun se index may ha ye show krta ha

```
let arr = [1,2,3,4,5]

console.log(arr.includes(6)) false
console.log(arr.includes(4)) true

console.log(arr.indexof(5)) index value is 4

```

# 4. .join()

join() convert array into string

```
let arr = [1,2,3,4,5]

let b= arr.join()

console.log(b)  "1,2,3,4,5"

```

# 5. slice() and splice()

```
let arr = [1,2,3,4,5]

let b= arr.slice()
let c= arr.splice()

console.log(b)

```

# 6. concat()

```
let arr1= [1,2,3,4,5]

let arr2= [6,7,8,9]

let b = arr1.concat(arr2)

console.log(b) [1, 2, 3, 4, 5, 6]

```

# 7. spread operator

```
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
 
const combinedNumbers = [...numbers1, ...numbers2]; // [1, 2, 3, 4, 5, 6]

```
# 8. flat()
```

let arr= [1,2,3,[23,6,7,[45,7,8,[2,3,5,7,[6,7,8,3]]]],4,5,6]

let c= arr.flat(Infinity)

console.log(c)
[ 1, 2, 3, 23, 6, 7, 45, 7, 8, 2, 3, 5, 7, 6, 7, 8, 3, 4, 5, 6 ]
```

# interview wise topic  Array.isArray() / Array.of()  / Array.of() 

# 9. Array.isArray() 
 [for checking value jo arrhi ha vo array ha ya  nhi ]

 ```
let a = 'gaurav'
let c = Array.isArray(a)
console.log(c) false
 ```
 # 10. convert into Array "Array.from(value)"

 ```
let a = 'gaurav'
let c = Array.from(a)
console.log(c)
 [ 'g', 'a', 'u', 'r', 'a', 'v' ]

 ```
# 11. Array.of(value)
  {different value ko add kr ke new array bnana}

  ```
  let a = 'gaurav'
let b = 'sondojha'
let c = 'sheruy'

console.log(Array.of(a,b,c))

[ 'gaurav', 'sondojha', 'sheruy' ]
  ```

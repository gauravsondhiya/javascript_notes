# Stack And Heaps Memory Mangement 
                   vido link = https://youtu.be/7gwc-1czolw?si=YwqTvrMCOMBjloZa
 
 # Main difference Between Stack and Heap
 
Stack Memory may values ka copy milta ha so agr may new value may kuch update krta hu to original value update nhi hogi lekin 
Heap may memory may value ka refernce milta ha so agr may value ko update krta hu to vo original value ko bhi update krdeta ha
 
**Primitive data type**
1. string: Represents textual data.
2. number: Represents both integer and floating-point numbers.
3. bigint: Represents integers with arbitrary precision.
4. boolean: Represents logical values (true or false).
5. undefined: Represents a variable that has been declared but has not been assigned a value.
6. null: Represents the intentional absence of any object value.

**Non Primitive data type**

1. Objects: A collection of key-value pairs.
2. Arrays: An ordered collection of values.
3. Functions: A block of code that can be called to perform a task.


# Stack Memory  

stack hamesh primitive data type may apply hota ha 

```
let name1 = 'gaurav'

let name2 = name1

name2 = 'sheru'

console.log(name1)
console.log(name2)

output
gaurav
sheru

```

Heap Memory

Heap memory hamesh Non primitive datatype may apply hota ha

```
let userone = {
    name:"gaura"
    email:"gaurav@gmail.com"
}

let usertwo = userone

ab agr usertwo may muje email updata krna ha to 

usertwo.email = "sheru@gmail.com"

console.log(userone)
console.log(usertwo)

[email dono ka update hogya ha ]
output
{ name: 'gaura', email: 'sheru@gmail.com' }
{ name: 'gaura', email: 'sheru@gmail.com' }
```
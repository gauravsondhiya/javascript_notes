# VAR LET CONST  

## Topics  

1. variable shadowing
2. Declartion
3. Declaration without initialisation
4. Hoisting 
5. Temperor deadzone

## Scope

 Scope in JavaScript refers to the context in which variables and functions are accessible. It determines where a variable or function can be used within the code. There are three main types of scope: global scope, function scope, and block scope. Global scope makes variables accessible everywhere in the code, function scope restricts them to within a specific function, and block scope limits them to a particular block of code, like within curly braces {}."

**1.Global Scope**
**2.Function Scope**
**3.local Scope/Block Scope**

---

## local Scope/Block Scope

> {} in bracket ke andr jo value aayegi vo local scope hojyegi

```

if (true){
      let a= 1;
      const b=2;
      var c=3;
   local scope-> ye saari variable locally use krskte means {} means bracket ke andr ,bracket ke outside may value get kruga too error(undefined) show hojyga
}
console.log(a)
 console.log(b)
console.log(c)
 
 output -
 console.log(a) undefined

```

---

## Global Scope

Global scope mean define variable ko bracket ke andr bhi access kr skte or outside bhi in dono
case may value milegi koue error nhi aayega

```

let a= 1;
const b=2;
var c=3;

if (true){
console.log(a)
console.log(b)
console.log(c)
}

console.log(a)
console.log(b)
console.log(c)

output
1
2
3
1
2
3

```

---
**Problem with Var**

```
var a= 5;

if(true){
    var a= 10;
    console.log(a)
    iss console  may value 10 aayegi
}
console.log(a)
lekin outside vale console may bhi value 10 aayegi jo ki problem ha 
muje to 5 output chahiye tha 
```

---
NOTE = that the Reason Always use let instead var

---
**Interview question**

vs code se node may code run krne pr scopes differenct output dega or
agr vohi code chrome may run hoga to output differenct hoga

---

**Nested Scopes**

>also called "Hoisting"

```
function add(){
    <!-- parent function -->
    let a= 5
    function sun(){
        <!-- child function -->
        let b=6
child fun parent funtion ki value use krskta ha  
        console.log(a)
        output
        5 
        
    }
     console.log(b) error hoga kyuki
 parent fun child funtion ki value use nhi krskta ha  
    sun()
}
add()

```

---

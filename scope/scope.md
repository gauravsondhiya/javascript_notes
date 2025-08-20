# Differece between Normal function and function store in variable

```
<!-- normal function -->

note - agr may normal function  one() ko define hone ke phle bhi excute kru to uska output aayega 

one ()
ouput - gaurarv

function one (){
    console.log("gaurarv")
}
```
 
```
<!-- function store in variable -->

note -  function store in variable,  ko define hone ke phle agr excute kiya to error aayega 

store() 
output - error(Cannot access 'store' before initialization)

let store = function two (){
    console.log("gaurarv")
}
```

# Closure and lexical Scope

## Topics

1. Lexcial scope
2. cloure scope chainn
 
## Lexical Scope
 
 A variable is only accessible within the block of code where it is defined and any inner blocks, but not outside of it. The scope is determined at the time the code is written, not when it is executed.

[bhai dekh ek function ke andr jo bhi variable define krega usko function ke andr jo function bna ha bs usse hi tu access kr paega bhr se access nhi hoga  issi ko lexical scope bolte ha ]

```
function outerFunction() {

    let outerVar = "I am outside!";
    [outervar jo variable ha usko srif function ke andr hi use kr skte ha outerfuncion ke bhr nhi access hoga]

    function innerFunction() {
        console.log(outerVar); // Accesses outerVar from outerFunction's scope
    }

    innerFunction();
}

outerFunction();
```

## Closure

A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing. This means that the inner function "remembers" the variables from its surrounding scope, allowing it to use those variables later, even when the outer function is no longer active.
Closure एक ऐसा फीचर है JavaScript में, जहां एक inner function (अंदर का फंक्शन) अपने बाहरी (outer) function के variables को याद रखता है और उन पर काम कर सकता है, भले ही बाहरी function खत्म हो गया हो।
```

function outerFunction() {
    let counter = 0; // This variable is in the outer function's scope

    function innerFunction() {
        counter++; // The inner function can access and modify the outer function's variable
        console.log(counter);
    }

    return innerFunction; // The outer function returns the inner function
}

const incrementCounter = outerFunction(); // outerFunction is called, and its inner function is returned

incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3

```

## Pratical use of Closure and lexical scope

```


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Closure aur chai</title>
</head>
<body style="background-color: #313131;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>

    <script>
     

        function clickHandler(color){
            return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")

    </script>s
</html>

```

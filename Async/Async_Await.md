# Async Await in js

## **Async/Await**: Promise ka wrapper, jo code ko aur readable banata hai.

 ### 1. Normal Function
```
let url= 'https://dummyjson.com/products'

async function value(){
       try{
          let res = await fetch(url)
          let data = await res.json()
          console.log(data)
       }
       catch{
           console.log("error")
       }
}
value()
```

### 2. Arrow function

```
let value = async ()=>{
       try{
          let res = await fetch(url)
          let data = await res.json()
          console.log(data)
       }
       catch{
           console.log("error")
       }
}
value()
```
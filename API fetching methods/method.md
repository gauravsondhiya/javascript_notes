# **Fetch method**

```
let url= 'https://dummyjson.com/products'
 fetch(url)
 .then(data =>data.json())
 .then (data =>console.log(data.products))
 .catch(error){
   console.log(error)
 }
```

# **Async and Await Method**

## 1.Normal function

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
## 2.Arrow function
```
let url= 'https://dummyjson.com/products'
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
# 3. Axios Method

## Method 1 (async await method)

```
async function value(){
   try{
        let res = await axios.get('https://dummyjson.com/products')
        let  data = res.data
        console.log(data.products)
   }
   catch{
    console.log("eror")
   }
}
value()
```
## Method 2 (fetch method)

```
  let url = "https://dummyjson.com/products";

  useEffect(() => {
         axios.get(url)
        .then((data) => {
        console.log(data.data.products)
      });
```
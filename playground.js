function sum (num){
    console.log(...num)
 let sum = 0
 for(let i=0;i<num.length ; i++){
       sum = sum+num[i]
 }
 console.log(sum) 
}

sum(1,2,3,4)
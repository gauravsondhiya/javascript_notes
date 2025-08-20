const arr = [1,2,3,4,5,6,9]

//    Map method
arr.map((e,i,arr)=>{
    // console.log(arr)
})

// e = Element
// i = index
// arr= full value 

//   filter Method

let a = arr.filter((e)=>{
    return (e>2)
})
 
// console.log(a)

//   Reduce Method

let b= arr.reduce((acc,curr, i ,array)=>{
    return i
},0)
// console.log(b)

// accumelator means previous value
// current
// index
// array

// PolyFills for map

let students =[
    {name:"gaueed",rollno: 23 , marks:44},
    {name:"gauddfd",rollno: 23 , marks:55},
    {name:"gsdfaud",rollno: 23 , marks:77},
    {name:"gaxxud",rollno: 23 , marks:22}
]

let pass = students.filter((e)=>{
    return e.marks>33
})
      let sum =0 
let totol = students.map((e)=>{
      sum= sum+e.marks
})

let tt = students.reduce((ac,curr,i)=>{
       return ac+curr.marks
},0)

console.log(tt)
//  there are Two type of define object

//  1. construtor
//  2. literal
//  when we create construtor object that only time singleton is created it's not applicable for literal object
//   (there is concept called single ton)

//     construtor object 
//     example =  object.create

// ----------------------------------------------------------------

// 1st we explain Object literals 
// let obj = {
//   // key    value
//     name: "gaurav",
//     surname: "sondhiya",
//     "Muje access":"kro",
//     designation: "software engineer",
//     place: "Banglore",
// }
 
// how we access value of object

// 1 = console.log(obj.name)
// 2 = console.log(obj["name"])
// 3 = line no.18 ko srif console.log(obj["muje access"]) se hi access kr skte ha
// ----------------------------------------------------------------
// How we update object values

// obj.name = "Don Hu may "
// console.log(obj.name) 
// -------------------------------------------------------
// Agr muje object ki value ko update hone se rokna ha to may use kruga freeze method to phir object ki update nhi hogi 

// Object.freeze(obj)
//  Object.freeze(object ka naam)

// object.surname="may hu gangster"
// console.log(object.surname)  output is sondhiya because object freeze ha
// -----------------------------------------------------------
// interview question Symbol ko as key kese store kre

// const name= Symbol("key1")

// let obj1= {
//     [name]:"may key ka value hu"
// }
// console.log(obj1)  output => [Symbol(key1)]: 'may key ka value hu' 


// -------------------------------------------------------------

//  Object ke andr function kese define kre or kese access krna ha

// let obj3= {
//    name: function(){
//      console.log("gaurav sondhiya")
//    }
// }

// console.log(obj3.name) iss tarike se output hoga [Function:name]

// console.log(obj3.name())  output is gaurav sondhiya

// ------------------------------------------------------------

// "This""  keyword

//  This keyword sirf object ke andr jo function create hota ha uspr hi work krta ha


// let obj= {
//     name: "khalnayak",
//     fullname:function (){
//         console.log(`${this.name} sondhiya`)
//     }
// }

// console.log(obj.fullname())

// -----------------------------
//  Object ke andr jo object create hota ha ussmay this keyword work nhi krta ha


// let obj = {
//     name:"khalnayak",
//     fullname:{
//         surname:this.name
//     }
// }

// console.log(obj.fullname.surname)

// ----------------------------------------------------------------------------


// Object construtors


// const  gaurav = new Object() singleton object

// const  obj={} Nonsingleton object

// const gaurav = new Object()
// gaurav.surname ="sondhiya"
// gaurav.designation= "sde"

// console.log(gaurav)

// let obj = {
//         name: "gaurav",
//         surname: "sondhiya",
//         "Muje access":"kro",
//         designation: "software engineer",
//         place: "Banglore",
//         floorgino :{
//             isfloor:{
//                 secondfloor:{
//                     thirdfloor:{
//                         fourthfloor:"bs yhi tak hu may"
//                     }
//                 }
//             }
//         }    
//     }
    //  question mark "?" help krta  error define ke liya mention kiya to undefined aayega nhi too error aayega
    // console.log(obj.floorgino.istfloor.secondfloor.thirdfloor.fourthfloor)


//  merge 2 or more Object in Under one Object

    // let obj1 = {
    //     1:"dd",
    //     2: "gg",
    //     3:"aa"
    // }

//     let obj2={
//         4:"qq",
//         5:"rr",
//         6:"ii",
//     }
//     let obj3 =Object.assign({} ,target object,source object)
//     curly bracket new object ke andr saare obj merger krte ha
//     let obj3 =Object.assign({},obj1,obj2)
//   { '1': 'dd', '2': 'gg', '3': 'aa', '4': 'qq', '5': 'rr', '6': 'ii' }
//     but instead we use spread operator for merging

//     let obj4 = {...obj1,...obj2}
  


//   console.log(obj4)
//  { '1': 'dd', '2': 'gg', '3': 'aa', '4': 'qq', '5': 'rr', '6': 'ii' }

// How to access array of object 

//  let obj =[

//     {id:"ga"},
//     {id:"dd"},
//     {id:"ee"},
//     {id:"yy"},
//  ]

//  let ans= obj[3].id
//  console.log(obj)


// let obj1 = {
//     1:"dd",
//     2: "gg",
//     3:"aa"
// }

// Method  for creating array 
// Object.keys() 
// Object.values() 

// console.log(Object.keys(obj1))

// Object entries
// object keys values convert into array 
// console.log(Object.entries(obj1))
// [ [ '1', 'dd' ], [ '2', 'gg' ], [ '3', 'aa' ] ]
// --------------------------------------
// HasOwnProperty
// object ke andr ye values ha ki nhi ye btata ha true or false may

// console.log(obj1.hasOwnProperty(4)) 

// let obj = {
//         name: "gaurav",
//         surname: "sondhiya",
//         "Muje access":"kro",
//         designation: "software engineer",
//         place: "Banglore"
// }

// let {surname} = obj
// let {surname:s} = obj

// console.log(s)

// const user = {
//     name:"gaurav",
//     age:23,
//     "may hu don":true
// }
//  delete user.name
// console.log(user)

// const user= "firstname"
// const name = "Gaurav"

// const obj ={
//     [user]:name
// }
// console.log(obj)

// let obj = {
//             name: "gaurav",
//             surname: "sondhiya",
//             designation: "software engineer",
//             place: "Banglore"
//     }

//     for (key in obj){
//         console.log(obj[key])
//     }

 let num={
    a:100,
    b:200,
    title:"gg"
 }

 value (num)

 function value(num ){
    let sum =0
    for(key in num){
         console.log(key[num])
    }
    // console.log(num)
 }
 
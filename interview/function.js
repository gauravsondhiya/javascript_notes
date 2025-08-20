 //   value reciving ko parameter bolte ha
 function addnumber(num1, num2){
    
 console.log(num1+num2)
                    
  }
                
// addnumber(4,5) value sending ko arguments bolte ha
                
  function add(a,b){
 let ans = a+b
  return ans
 console.log(ans)
 //    return ke baad koue bhi value nhi chlti ha  
  }
                
let g = add(2,3)
 console.log(g)
function test(){     // function scope

}
// -------------------------------------
{
   let a= "gaurav" 
   console.log(a)     //  blockscope
}
console.log(a)    // showing error because let block scope ha bracket ke andr hi work krega
// ------------------------------------------------------------------

    //    variable shadowing

    function test(){
        let a = "hello"
          if(true){
            let a = "gaurav"                   // yha pr a dobaar define ha lekin block scope ke andr 
            console.log(a) //   gaurav          // ha isliye work kr rha ha  
          }
        console.log(a)  //   hello
    }
//   - output



    //illegale shawdoing

 function test(){
    var a = "hello"
    let b= "bye"
      if(true){
        let a = "gaurav"      // var a se let a convert hoskta ha 
        var b = "good"       // let b se var b convert nhi hoskta error (b already declared show hoga)
        console.log(a)
        console.log(b)
      }
 }

// -------------------------------------------------
  
//  what is declaration ? 
   

  var a ;
  var a ;      //we declare many times using var with same name

  let b;
  let b         // its show error "b" already declared because its not global scope
 
  let y;
  {
    let y;  // varible shawdo may phir se redeclare kr skte ha
  }

  const c;   // const may na redeclare kr skte ha or nahi bina value dale likh skte ha initialize krna zaruri ha
  const c

// ----------------------------------------------
   
// Declartion without initialisation( bina value ko mention kre)
                       
 var a;  

 let p;
            //  var and let may bina value dale bhi declare kr skte ha lekin 
            //  const may value daalna zaruri ha error dedeta ha bina value ke
 
     const k= 7 ;


// --------------------------------------------------

//   what is re-initialisation ?
  
var a =5
a=6

let c= 7
c=9
  
// var and let may phir se value update ki jaaskti ha lekin 
// const may nhi value update nhi hoti ha

const h=9
h=8

// -------------------------------------------------------

//  what is  temporal dead zone and hoisting

function test(){
    console.log(a)
    var a = 123

}
test( )




// -----------------------------------------------------------------------

    //    functions question 


//   1. what is function declartion?

// function test (){
//     console.log("gaurav");
// }
// test()
// ------------------------------------

//  2.what is function expression  and Anonymous Funtion ?
//(jiska naam nhi hota ha uske bolte ha )?

// const test =
//  function (num){
//     return num*num
//  }
//   line 12 se function start hua ha isko anonymous function bolte ha kyuki naam nhi ha function ka
//  console.log(test(4))

// --------------------------------------------

//  3.what is first class function?
//  ek function ke andr dusre function ko as a variable pass krna

// function square (num){
//     return num* num
// }

// function output(value){
//     console.log(value)
// }

// output(square(8))

// ------------------------------------------------

// 4.what is IIFI Function ?( immediately invoked function expression)

// (function square(num){
//     console.log(num*num)
// })

// (5)

// -----------------------------------------------













// --------------------------------------------------


        //   Closures and lexical Scope


        
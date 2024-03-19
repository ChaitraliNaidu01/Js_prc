
// const arra=[2,4,5,3]

// const sums=arra.reduce((acc,cur)=>{
//     return acc +cur
// })

// console.log(sums)


// let a=10
// (function(){
   
//     console.log(a)
// })()

// function sum(){
//     const a=90
//     console.log(a)
// }

// sum()
// 
// (function(){
//     var mess="Hello"
   
// })()
// console.log(mess)

// (function(){
//     // var names="Naidu chaitrali"

//     function printvar(){
//         var names="Naidu chaitrali"
//         // console.log(names)
//     }
//     printvar()
// })()

// console.log(names)


function sum(num){
  return function(num1){
    console.log(num*num1)
  }
}

var addsix=sum(9)
addsix(3)
addsix(2)
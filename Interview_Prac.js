// let student=[
//     {name:"chaitrali",rno:32,marks:54},
//     {name:"gayatri",rno:132,marks:697},
//     {name:"bhavesh",rno:432,marks:167},
//     {name:"bhavesh",rno:432,marks:36},
// ]

// let mix=student.map((stuname)=>stuname.name).filter((am)=>am.marks>90)

// let mix2=student.filter((markss)=>markss.marks>90).map((nam)=>nam.name)
// console.log(mix2)


// let totalstu=student.map((stu)=>{
//     if(stu.marks<60){
//         stu.marks+=20
//     }
//     return stu
// }).filter((stu)=>stu.marks>60).reduce((acc,cur)=>acc + cur.marks,0)


// console.log(totalstu)

// const square=function (num){
//     return num * num
// }

// console.log(square(4))

//first class function

// function square(num){
//     return num*num;
// }

// function squarePr(fn){
//   console.log("Square is:" + fn(7))
// }

// squarePr(square)

// (function sumsq(num){
//     console.log(num*num)
// })(6);


// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }

// function multiply(...sum){

//     console.log(sum)
// }
// console.log(9,9,9,8,7)

// var arr=[9,8,73,23,45]
// multiply(...arr)

// function greet(name){
//     console.log(name +"Hello")
// }

// function GreetYouto(callback){
//   var hello=prompt("enter ur name");
//   console.log(hello)
// }

// GreetYouto(greet)



//Closure
// let view;

// function Likevideo(){

//   let count=0;
//    return function(){
//     if(count>0)
//     {
//       console.log("Already subscribed")
//     }else{
//       view="U liked the Song",
//       console.log(view)
//       count++
//     }
 
//    }
// }

// let subscribedMen=Likevideo()

// subscribedMen()
// subscribedMen()
// subscribedMen()

// function f1(x){

//   return function(y){
//        console.log(x+y)
//   }
// }

// let add1=f1(8)
// let add2=f1(5)

// add1(7)
// add2(5)


//Currying

// sum(2)(3)(4)

// function sum(a){
//   return function(b){
//     return function(c){
//         return a+b+c
//     }
//   }
// }

// const add=(sum(2)(3)(4))

// console.log(add)


// function evaluate(operation){
//   return function(a){
//     return function (b){
//       if(operation=="sum"){
//         return a+b
//       }else if(operation=="sub"){
//         return a-b
//       }else if(operation=="mul"){
//         return a*b
//       }else if(operation=="div"){
//         return a/b
//       }else{
//         console.log("Not found")
//       }
//       }
//     }
//   }


// console.log(evaluate("sum")(5)(6))
// console.log(evaluate("sub")(15)(6))
// else

// let multiply=evaluate("sum")
// console.log(multiply(3)(2)))


//Infinite Curring

// function adds(a){
//   return function (b){
//     if (b) return adds(a+b);
//      return a;
//   }
// }

// console.log(adds(9)(1)(3)(4)(5)())


//Convert into infite curring
// function sum(a) {
//   return function(b){
//     return function(c){
//       return a+b+c;
//     }
//   }
// }
// console.log(sum(1)(2)(3)());

// function sum(a){
//    return function(b){
//     if (b) return sum(a+b);

//      return a;
//    }
// }

// console.log(sum(4)(5)(3)(1)(10)())

// let sum=a=>b=> b? sum(a+b) : a

// console.log(sum(7)(1)(2)())

//Manipulating Dom

// function updateHeading(id){

//      return function(value){
//         document.querySelector('#' + id).textContent=value
//      }
// }

// let updateHedaer=updateHeading('head')

// updateHedaer("By")


//Objects 

// let Person={
//     name:"chaitrak",
//     age:222,
//     "Hi Chiatrali":true
// }

// delete Person["Hi Chiatrali"]
// // delete Person.age
// console.log(Person["Hi Chiatrali"])


//COmputed Properties

// let property="Firstname"
// let name="Chaitrali Renuka Rajendra Naidu"

// const user={
//     [property]:name
// }
// console.log(user)


// for(key in Person){
//     console.log(Person[key])
// }


//Use function to multiple the given integer object values by 2
// let nums={
//     a:100,
//     b:200,
//     title:"HEllo"
// }

// MultibyTwo(nums)
// function MultibyTwo(obj){

//      for(key in obj){
//          if(typeof obj[key]==="number"){
//             obj[key]*=2
//          }
//      }
// }

// console.log(nums)

// let Person={
//     name:"chaitrak",
//     age:222,
//     "Hi Chiatrali":true
// }

// const stringCon=JSON.stringify(Person)
// console.log(JSON.parse(stringCon))

//Spread Operator
// console.log([..."HEllo"])

// let p1={name:"Siis",age:12}
// let p2={isAlive:true,Weight:89,...p1}

// console.log(p2)


//Destructuring

// const say={
//     Greet:"Hello",
//     age:9
//   }
  
//   const {Greet}=say;

//   console.log(Greet)


//This KeyWord

// let user={
//     name:"chaitrali",
//     age:9,
//     getName(){
//     //    console.log(this.name)
//        console.log(this)
//     }
// }

// console.log(user.getName())

//craete an calculator object

// let calculatoe={

//     read(){
//         this.a=+prompt("a=", 0)
//         this.b=+prompt("b=", 0)
//     },

//     sum(){
//         return this.a + this.b
//     },

//     mul(){
//         return  this.a * this.b
//     }
// }

// calculatoe.read()
// console.log(calculatoe.sum())
// console.log(calculatoe.mul())

// const input1={a:1,b:2,c:3,d:10,e:12}
// const input2={a:2,e:12,f:6,d:10}
// // [const input13={}]
// function PrintSame(input1,input2){

//     let obj={};

//     for(let i in input1)
//     if(input1[i]===input2[i]){
//         obj[i]=input1[i]
//     }
//     return obj
// }

// console.log(PrintSame(input1,input2))


//Second largest Number In array

const arr1=[1,2,-2,11,7,1]
const arr2=[1,4,7,2,4,7]


function Largsec(arr1){
    let arr=[...new Set(arr1)].sort((a,b)=>a-b);
    return arr[arr.length-2]
}
console.log(Largsec(arr1))
console.log(Largsec(arr2))
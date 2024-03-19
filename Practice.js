
// const s="Chaitrali Naidu"
// // s="P"  //Not allowdes In Const
// console.log(s)
// console.log(sname.substring(1,3).toUpperCase())
// console.log(sname.split(', '))

//Arrays

// const fruits=["Chaitrali","Rajendra","Naidu"]
// const fs=new  Array("Chaitrali","Rajendra","Naidu")
// console.log(fs[0])

// // fs[1]="jjj"
// fs.push("Banana")
// fs.unshift("Graps")
// fs.pop()
// fs.shift()

// console.log(fs)

// const Person={
//     name:"Chaitrali",
//     age:89,
//     isAlive:true,
//     hobbies:["dancing","Music Listening","Playing"],
//     address:{
//       street:"Bopodi",
//       city:"Pune",
//       country:"India",
//       pincode:411004
//     }
// }

// const {name,age,address:{city}}=Person

// console.log(name,city)
// console.log(Person.isAlive)
// console.log(Person.hobbies[2])
// console.log(Person.address.street)

const todos=[
    {
    id:1,
    names:"payal",
    work:true
    },
    {
    id:2,
    names:"Rutid",
    work:true
    },
    {
    id:1,
    names:"mong",
    work:false
    }

]


// const todoJson=JSON.stringify(todos)
// for(i=0;i<todoJson.length;i++){
//     console.log(todoJson[i])
// }

// let company=["Cg","danz",'microsoft']

// for (i=0;i<company.length;i++){
//     console.log(company[i].names)
// }

// for(let t in todos){
//   document.write(t)
// }



// todos.forEach(function(todo){
//     console.log(todo.names)
// })

// const t=["chai","mai","tais"]
// const useMap=t.map(function(todo){
//    return t
// })

// const useFilter=todos.filter(function(todo){
//    return todo.work===true
// }).map(function(todos){
//    return todos.names
// })


// console.log(useFilter)


const a=9;
const b=10;

// if(a<3 || b>10){
//  console.log("Hey")
// }else{
//     console.log("I thik No")
// }

//Ternary Operator

const ternaryuse=a>b?"wow" :" let it be";
// console.log(ternaryuse)

// switch(ternaryuse){
//     case "wow":
//         console.log("U r wow")
//         break
//     case " let it be":
//         console.log("Chod do bath nhi karni")
//         break
//     default:
//         console.log("HMMMM")
// }

//Function

// function addNum(a,b){
//    return a+b
// }
// console.log(addNum(7,7))

// //With arraow

// const Sums=(a=8,b)=>{
//     return a+b
// }
// console.log(Sums(1,7))

// const Suams=(a=8,b)=> a+b

// console.log(Suams(1,7))

//Constructor Function

function Person(name,age,Clg,date){
  this.name=name;
  this.age=age;
  this.Clg=Clg
  this.date=new Date(date)
}

Person.prototype.getFullYears=function(){
    return this.date.getFullYear();
}

Person.prototype.getFUllName=function(){
    return `${this.name} and age is ${this.age}`
}

const p=new Person("Chaitrali",22,"Baburaoji Gholap Clg",'12-1-2023')
const p1=new Person("Gayatri",26,"Dy Patil Clg",'14-2-2024')



console.log(p.getFUllName())
console.log(p1.getFullYears())
// console.log(p.getBirthYear())
// console.log(p1.getFUllName())
// console.log(p)
// console.log(p1)

//With help of The Classes

class Personw{
    constructor(name,age,Clg,date){
        this.name=name;
        this.age=age;
        this.Clg=Clg
        this.date=new Date(date)
    }

    getBirthYear(){
        return this.date.getFullYear();
    }

    getFUllName(){
        return `${this.name} and age is ${this.age}`

    }
}


const p2=new Personw("Chaitrali",22,"Baburaoji Gholap Clg",'12-1-2023')
const p3=new Personw("Gayatri",26,"Dy Patil Clg",'14-2-2024')

console.log(p2.getFUllName())
console.log(p2.getBirthYear())
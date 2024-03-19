// const company=[
//     {name:"Chaitrali",category:"female",age:90},
//     {name:"Gayatri",category:"female",age:76},
//     {name:"Bhavesh",category:"male",age:5},
//     {name:"Mansi",category:"female",age:12},
//     {name:"vikrant",category:"female",age:34},
// ]

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  

// let age=[12,34,516,13,90,78,56,43,33,68,532]

// for(let i=0;i<company.length;i++){
//     console.log(company[i])
// }

// //ForEach
// company.forEach(function(companies){
//   console.log(companies)
// })

//Filter

// let canDrink=[]
// for(let i=0;i<age.length;i++){
//     if(age[i]>50){
//         canDrink.push(age[i])
//     }
// }

// console.log(canDrink)

//With Filter

// let candrink=age.filter(function(age){
//     if(age>50){
//         return true
//     }
// })
// console.log(candrink)


//With Arrow function

// let canDrink=age.filter(ages=>ages>=21);

// console.log(canDrink)

// const Categorsys=company.filter(function(cat){
//     //     return cat.category==="male"
//     // })

// const Categorsys=company.filter(function(cat){
//     if(cat.category==="female"){
//         return true
//     }
// })

// console.log(Categorsys)
// let categorys=company.filter(company=>company.category==="female")

// console.log(categorys)

// MAP 
//create an array of company names

// const agesSquare=company.map(company=>Math.sqrt(company.age)).map(company=>company.age *2)
// console.log(agesSquare)

// const compnayDet=company.map(function(company){
//     return company.name
// })
// console.log(compnayDet)

// const agesSquare=company.map(company=>Math.sqrt(company.age))
// console.log(agesSquare)
// const agesqu=age.map(age=>Math.sqrt(age))
// console.log(agesqu)


//SORT

// const sortComponent=companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1
//     }else{
//         return -1
//     }
// })

// console.log(sortComponent)
// console.log("__________________________")

// const sortArrow=companies.sort((a,b)=>(a.start>b.start?1:-1))
// console.log(sortArrow)

// const Sortages=company.sort((a,b)=>(a.age>b.age?1:-1))
// console.log(Sortages)

//REDUCE

// const ageS=age.reduce(function(total,age){
//   return total+age 
// },0)

// console.log(ageS)
// const ageSum=age.reduce((total,age)=>total+age,0);
// console.log(ageSum)

//Combine methods

let age=[12,34,516,13,90,78,56,43,33,68,532]

let ageDet=age.map(age=>age*2).
          filter(age=>age>50).
          sort((a,b)=>a-b).
          reduce((a,b)=>a +b,0)

console.log(ageDet)

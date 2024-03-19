
// // // const arra=[7,8,4,12]
// // // const arrb=[9.7,12]
// // // console.log(...arrb)
// // // console.log(...arra,...arrb)


// // // // const ar=[1,34,23,56]
// // // const number=[1,2,3,4,12]

// // // function sum(a,b,c,d,e){
// // //    console.log(a+b+6+d+e)
// // // }
// // // sum(...number)



// // const obj={
// //    key:1,
// //    valuesa:"HEllo"
// // }

// // const cop={...obj}
// // console.log(cop)
// // console.log(obj)
// // console.log(obj===cop)

// // const arra=[6,7,8,2,11]

// // function sum(a,b,c,d,e){
// //    console.log(a+b+c+d+e)
// // }

// // sum(...arra)

// // function add(a,b,...c){
// //     console.log(a)
// //     console.log(b)
// //     console.log(c)
// // }

// // add(5,6,3,2)

// // const hi="Hello"
// // const h=[...hi]
// // console.log(h) 
// // console.log(hi) 


// //REST OPERATOR

// // function sum(...num){
// //    let result=0;
// //    for(let nums of num){
// //       result+=nums
// //    }
// //    return result;
// // }
// // console.log(sum(3,4,5))

// // function example(a, b, ...rest) {
// //    console.log(a);        // Outputs: 1
// //    console.log(b);        // Outputs: 2
// //    console.log(rest);     // Outputs: [3, 4, 5]
// //  }
 
// //  example(1, 2, 3, 4, 5);

// // const sum=(...number)=>{
// //       return number.reduce((acc,num)=>acc+num,0)
// // }

// // console.log(sum(4,5,2,1,11))

// //SPLICE
// // const fruits = ['apple', 'banana', 'grape'];

// // // Add 'orange' and 'kiwi' starting from index 2 (no elements removed)

// // let fr=fruits.splice(2,0,'orange','kiwi')
// // let rem=fruits.splice(3,1)
// // console.log(fruits)
// // console.log(fr)
// // console.log(rem)


// const arr=[3,4,12,6,40,7]

// // arr.map((ar)=>{
// //    console.log(ar*2)
// // })

// // arr.sort((a,b)=>a-b)
// // console.log(arr)

// // arr.sort()
// // console.log(arr)
// // const arrays=["apple","mango","graps","Yello",'white']

// // const [a,b,...c]=arrays
// // console.log(a,c)

// // let names="Chaitrali is good girl"
// // let a=names.split('').map((na)=>{
// //     return na
// // })

// // console.log(a)

// // let names = "Chaitrali is a good girl";

// // const words=names.split(' ')

// // // console.log(words)
// // const capitalizeWord=words.map(word=>word.charAt(0).toUpperCase()+ word.slice(1))
// // console.log(capitalizeWord)
// // const joining=capitalizeWord.join(' ')
// // console.log(joining)

// // console.log(names.length)

// // sum(1,3,4)

// // function sum(){
// //    console.log(arguments.length)
// //    console.log(arguments[0])
// // }


// // const awe={0:'a',1:'b',2:'c'}
// // // const asf=[...Object.values(awe)]
// // // console.log(asf)

// // const create=Object.entries(awe).map(([key,values])=>[key,values])
// // console.log(create)


// let arr3=[7,6,4,55,78]
// // for(let i=0;i<arr3.length;i++){
// //   console.log(arr3[i])
// // }

// // for(let i of arr3){
// //   console.log(i)
// // }

// // const objs={
// //     names:'chaitrali',
// //     surname:'Naidu'
// // }

// // // for(let ar in objs){
// // //     console.log(ar)
// // // }

// // Object.values(objs).forEach(value=>{console.log(value.)})



// // function sum(a,b){
// //     return a+b
// // }

// // console.log(sum(1,4))

// // const cha=(function(a,b){
// //    return a+b
// // })

// // console.log(cha(5,77))

// // const high=[5,6,2,12,33,7]

// // const order=high.map(h=>h*h)
// // console.log(order)


// // function hi(fun){
// //     fun()
// // }

// // hi(sayhello)
// // function  sayhello(){
// //     console.log("HIII")
// // }


// // function num(number){
// //     return function(value){
// //          return value + number
// //     }
// // }

// // const s1='hi'
// // const s2='Chaitua'
// // let string=[s1,s2]
// // let string1=`${s1} ${s2}`
// // let rs=string.join(' ')
// // console.log(rs)


// const obj1={
//     name:'Chaitrali',
//     age:22
// }

// Object.keys(obj1).forEach((prop)=>{
//     console.log(prop + ":" + obj1[prop])
// })

// Object.values(obj1).forEach((value)=>{
//     console.log(value)
// })


// for(let propss in obj1){
//      console.log(propss + ":" + obj1[propss])
// }

// // const gg=Object.values(obj1).map(ob=>{
// //     console.log(ob)
// //     return ob
// // })

// const rev=Object.values(obj1)
// console.log(rev)


// Q1: Write code to get an array of names from given array of users
// const users = [
// {id: 1, name: 'Jack', isActive: true},
// {id: 2, name: 'John', isActive: true},
// {id: 3, name: 'Mike', isActive: false},
// ]
// Result
// ['Jack', 'John', 'Mike']

// const val=users.map(user=>{
//     return user.name
// })

// console.log(val)

// let result=[]
// for(let i=0;i<users.length;i++){
//      result.push(users[i].name)
// }

// console.log(result)

// const namess=[]
// // users.forEach((val)=>{
// //     namess.push(val.name)
// // })

// users.map((val)=>{
//   namess.push(val.name)
// })
// console.log(namess)


// const users = [
//     {id: 1, name: 'Jack', isActive: true,age:89},
//     {id: 2, name: 'John', isActive: true,age:45},
//     {id: 3, name: 'Mike', isActive: false,age:23},
//     ]

// const newUser=users.sort((user1,user2)=>user1.age<user2.age?1:-1)
//              .filter(user=>user.isActive)
//              .map(user=>user.name)

// // users.sort((user1,user2)=>user1.age<user2.age?1:-1)
// // console.log(users)
// console.log(newUser)


// const user=[]
// for(let i=0;i<users.length;i++){
    
//     if(users[i].isActive)
//     user.push(users[i].name)
// }
// console.log(user)


// Q1: Create a counter function which has increment and getValue
// functionality



// const countervalue=()=>{
//     let count=0
//     return{
//         increment:(val=1)=>{
//             count+=val;

//         },
//         getValue:()=>{
//            return count
//         }
//     }
// }

// const counter=countervalue();
// console.log(counter.getValue())
// counter.increment();
// console.log(counter.getValue())
// counter.increment();
// console.log(counter.getValue())



// Q1: Write a function which helps to achieve multiply(a)(b) and returns
// multiplication of a and b


// function mul(a){
//     return function(b){
//         return a*b
//     }
// }

// const multiply=mul(7)
// const m=multiply(5)

// console.log(m)


// const mul1=(a)=>{
//     return (b)=>{
//         return a*b
//     }
// }

// const mul=(a)=>(b)=>a*b

// console.log(mul(3)(7))

// function curryings(a){
//     return function(b){
//         return function(c){
//             return (a+b+c)
//         }
//     }
// }

// const arr2=curryings(4)(5)(8)
// console.log(arr2)


// Q2: Write a function which can concatenate 2 arrays

// const arr1 = [1];
// const arr2 = [2,3];


// const mergee=[...arr1,...arr2]
// console.log(mergee)
// function concati(){
//     return arr1.concat(arr2)
// }
// console.log(concati())

// const merarr=(ar1,ar2)=>{
//     return [...ar1,...ar2]
// }

// console.log(merarr(arr1,arr2))


// Q1: Write a function which removes all duplicates from the array.

// const arrays=[2,3,4,1,1]


// const newarr=new Set(arrays)
// const dupli=[...newarr]
// console.log(dupli)

// const arrays=[2,3,4,1,1]

// const duplicateds=(arr)=>{

//     let result=[]
//     arr.forEach((item)=>{
//         if(!result.includes(item)){
//             result.push(item)
//         }
//     })
//     return result;
// }

// console.log(duplicateds(arrays))


// // Q1: Sort the array of numbers

//  const Arrayss=[12,45,1,2,3]

// Arrayss.sort((a,b)=>a-b)
// console.log(Arrayss)


// const arr=["apple",'mango','banss']

// console.log(arr.sort())

// // Q2: Sort an array of objects by author's lastname

// const books = [
// {name: 'Harry Potter', author: 'Joanne Rowling'},
// {name: 'Warcross', author: 'Marie Lu'},
// {name: 'Chaitrali Naidu', author: 'Suzanne Collins'}
// ];


// books.sort((book1,book2)=>{
//     const name1=book1.name.split('')[1]
//     const name2=book2.name.split('')[1]
//     return name1>name2?-1:1
// })

// console.log(books)

// Write a function which implements a range

// const Range=(start,end)=>{
//     const result=[]
//     for(let i=start;i<=end;i++){
//         result.push(i)
//     }
//     return result
// }

// console.log(Range(1,50))


// Writing Shuffle Function
// Q1: Write a shuffle function which mixes the elements

// const shuffleItems=(items)=>{

//     return items
//       .map((item)=>({sort: Math.random(),value:item}))
//       .sort((item1,item2)=>item1.sort - item2.sort)
//       .map((a)=>a.value)
// }


// console.log(shuffleItems([8,1]))

// Find the Number of Occurences of Minimum Value in List
// Q1: Find the number of occurrences of minimum value in the list of
// numbers


// const list=[3,11,12,6,31,3,3,3,3]

// const Minvalu=Math.min(...list)
// const HowMany=list.filter((el)=>el===Minvalu)
// console.log(HowMany.length)

// Q1: Design a class for employee which takes id and name in during
// construction of object and has a salary 

class Employee{
   
    constructor(id,name){
        this.id=id,
        this.name=name
    }

    setSalary(salary){
       this.salary=salary
    }

    getSalary(){
        return this.salary
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }
}


// class Manger extends Employee{

//     // constructor(departmnet){
//     //     // super(id,name)
//     //     this.departmnet=departmnet;
//     // }

//    setDepartment(dename){
//       this.dename=dename
//    }

//    getDepartment(){
//      return this.dename
//    }
// }
// const newEmp=new Employee(1,"Chaitrai")

// const Mangers=new Manger(1,"Chaitrai")
// Mangers.setDepartment('MSC')
// console.log(Mangers)


// console.log(myVar); // undefined
// let myVar = 10;
// console.log(myVar); // 10


// const ary=[1,2,3,11,45,2]
// let arr = [5, 2, 8, 1, 4];
// arr.sort();
// console.log(arr)

// const reducing=ary.reduce((acc,val)=>{
//     return acc + val
// })

// console.log(reducing)
// const inter=ary.map(ar=>{
//     return ar
// })

// console.log(inter)
// ary.splice(2,0,12)

// console.log(ary)

// let arr = [1, 2, [3, 4, [5, 6]]];

// console.log(arr.flat(2))

// let arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// let whatArry=Array.from(arrayLikeObject)

// console.log(whatArry)

// let arr = ['a', 'b', 'c'];
// let iterator = arr.values();

// for(let ke of iterator){
//     console.log(ke)
// }


// const data=10 - - 10
// console.log(data)


// function Greet(name){
//     console.log("Hello U are so cute" + name)
// }

// function PrintCallback(callback){

//     var userName=prompt("Enter a UserName")
//     callback(userName)
// }


// PrintCallback(Greet)


// Highlight all of the words in markup over 8 characters long in the
// paragraph text (with a yellow background for example)

// const coloring = document.querySelector('p');

// coloring.innerHTML = coloring.innerHTML
//   .split(' ')
//   .map((word) => {
//     return word.length > 8 ? `<span style="background-color:yellow">${word}</span>` : word;
//   })
//   .join('');


// Add a Link
// Q1: Add a link "Back to source" after a paragraph tag which goes to
// https://forcemipsum.com in the markup


// const link=document.createElement('a')

// link.href="https://forcemipsum.com"
// link.innerText="Hello Adde"

// document.body.appendChild(link)

// Split Each Sentence to a Separate Line
// Q1: Split each new sentence on to a separate line in the paragraph text.
// A sentence can be assumed to be a string of text terminated with a
// period (.)

// const paragraph = document.querySelector('p');
// paragraph.innerHTML = paragraph.innerHTML.split(/\.([^.|<])/).join('</p><p>') + '</p>';

// Event Delegation
// Q1: Implement a click on todo item which has a high performance.
{/* <ul class="todo-app">
<li class="item">Walk the dog</li>
<li class="item">Pay bills</li>
<li class="item">Make dinner</li>
<li class="item">Code for one hour</li>
</ul> */}


// const clicking=document.querySelectorAll('.item');

// clicking.forEach((item)=>{
//     item.addEventListener("click",()=>{
//         console.log("You clicked on item:" + item.innerText)
//     })
// })

// const app=document.querySelectorAll(".todo-app");
 
//   app.forEach((element)=>{
//     element.addEventListener("click",(e)=>{
//         if(e.target && e.target.classList.contains('item')){
//             console.log("you clicked on Items:" + e.target.innerText)
//         }
//         })
//   })



document.getElementById('button').addEventListener('click',loadText)
function loadText(){

    var xhr=new XMLHttpRequest();
    xhr.open('Get','https://www.linkedin.com/feed/',true)
    // xhr.onload=function(){
    //     if(this.status==200){
    //         console.log(this.responseText)
    //     }
    // }

    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)
            console.log(xhr.readyState)
        }
    }

    xhr.onprogress=function(){
        console.log("Readystate",xhr.readyState)
    }
    xhr.send()

    xhr.onerror=function(){
        console.log("Refernce Error")
    }
}





// // for(var i=1;i<=5;i++){

// //     function close(i){
// //         setTimeout(function(){
// //             console.log(i)
// //         })
// //     }
// //     close(i)

// // }

// // function x(){
// //     var name="xyz"

// //     function b(){
// //         console.log(name)
// //     }
// //     return b;
// // }

// // x()()


// var a1=function a(){
//     console.log("hello")
// }

// a1()
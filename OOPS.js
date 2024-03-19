// const s1="hello"
// console.log(typeof s1)

// const s2=new String("teelo")
// console.log(typeof s2)

// console.log(window)
// console.log(navigator.geolocation)

//Class 

// const book={
//    title:'Chaitrali Naidu',
//    author:'Renuka Rajendra Naidu',
//    year:2001,
//    getAuthor:function(){
//     return `This is ${this.title} her author is ${this.author} and ${this.title} age is ${this.year}`
//    }
// }

// console.log(book.getAuthor())
// console.log(Object.values(book))
// console.log(Object.keys(book))

// //With Constructor

// function Studetails(name,age,isAlive){
//     this.name=name;
//     this.age=age;
//     this.isAlive=isAlive;
//     this.getSummery=function(){
//         return `This is ${this.title} her author is ${this.author} and ${this.title} age is ${this.year}`

//     };
// }

// //For Storing in ProtoType

// Studetails.prototype.getSummery=function(){
//     return `This is ${this.title} her author is ${this.author} and ${this.title} age is ${this.year}`

// };

// const Stude=new Studetails("Chai",22,true)
// const Stude1=new Studetails("Pani",122,false)
// const Stude2=new Studetails("Kahi",24,true)

// // console.log(Stude.getSummery())
// // console.log(Stude1.getSummery())
// console.log(Stude2)


//inheritance

// function Studetails(name, age, isAlive) {
//     this.name = name;
//     this.age = age;
//     this.isAlive = isAlive;
//     this.getSummary = function () {
//         return `This is ${this.name}, her age is ${this.age}, and is she alive? ${this.isAlive}`;
//     };
// }

// // For storing in Prototype
// Studetails.prototype.getSummary = function () {
//     return `This is ${this.name}, her age is ${this.age}, and is she alive? ${this.isAlive}`;
// };

// // Inheriting prototype
// function Magazine(name, age, isAlive, month) {
//     Studetails.call(this, name, age, isAlive);
//     this.month = month;
// }

// Magazine.prototype = Object.create(Studetails.prototype);

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// // Instantiate the Magazine object
// const mag = new Magazine("Chaitrali", 78, true, 'Jan');

// console.log(mag.getSummary());


//With Extend Keyword

class Book{
     constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
     }

     getSummary(){
        return ` Hi ${this.title} was written by ${this.author} in year ${this.year}`;
     }

}

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);

        this.month=month;
    }
}

//Instantiating Mazine

// const det=new Magazine("U Love me","Chaitrali","2023")
const det = new Magazine("Hello", "Chaitrali", 2023, "January");

console.log(det)
console.log(det.getSummary())


// console.dir(document)
// console.log(document.title)
// console.log(document.URL)
// console.log(document.domain)

// document.title="My Journey"
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.head)
// console.log(document.all)
// console.log(document.all[10])
// // document.all[10].textContent="Chaitu"


// var items=document.getElementsByClassName('item')

// console.log(items)
// console.log(items[2])
// items[1].textContent="Content"
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor="blue"
// // items.style.backgroundColor="pink" error
// //For apply on all elements


// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="pink"
// }


//Elements By Tag Name



// var li=document.getElementsByClassName('li')

// console.log(li)
// console.log(li[2])
// li[1].textContent="Content"
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor="blue"
// items.style.backgroundColor="pink" error
//For apply on all elements


// for(var i=0;i<li.length;i++){
//     items[i].style.backgroundColor="pink"
// }


//QUERYSELECTOR

// const querySel=document.querySelector('#my-form')
// querySel.style.borderBottom="solid 4px #ccc"

// var input=document.querySelector('input');
// input.value="Hello Chaitrali"


// var submit=document.querySelector('input[type="submit"]')
// submit.value="Send"

// var itemss=document.querySelector('.item')
// itemss.style.color='pink'

// var lastItem=document.querySelector('.item:last-child')
// lastItem.style.color='pink'

// var lastItem=document.querySelector('.item:nth-child(3)')
// lastItem.style.color='orange'

///QuERYSELECTORALL

// var odd=document.querySelectorAll('li:nth-child(odd)')


// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='red'
// }


//EVENT LISTENER

// function buttonClick(){
    
//     console.log("Button Clicked")
// }
//Good methods

// var Buttons=document.getElementById('button').addEventListener(
//     'click', function(event){
//         event.preventDefault()
//         console.log("123")
//     })

//OR
// var Buttons=document.getElementById('button').addEventListener(
//     'click', buttonClick)
    

// var Buttons=document.getElementById('button').addEventListener('click',buttonClick)

// function buttonClick(e){
//     // console.log(e)
//     // document.getElementById('header-title').textContent="Minu"
//     // // document.querySelector('header').style.background="pink"
//     // console.log(e.target)

//     console.log(e.clientX)// Y
//     console.log(e.offsetX)
//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)
// }

//MOUSEEVENT

// var button=document.getElementById('button')

// // button=addEventListener('click',runEvent)
// // button.addEventListener('dblclick',runEvent)
// // button.addEventListener('mousedown',runEvent)
// button.addEventListener('mouseup',runEvent)

// function runEvent(e){
//     e.preventDefault()
//     console.log("Event Type:" +e.type)
// }

// var box=document.getElementById('box')

// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)
// box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)
// // box.addEventListener('mousemove',runEvent)

// function runEvent(e){
//     e.preventDefault()
//     console.log("Event Type:" +e.type)

//     // box.style.backgroundColor="rgb("+e.offsetX+" ,"+e.offsetY+",40)";
//     document.body.style.backgroundColor="rgb("+e.offsetX+" ,"+e.offsetY+",40)";
// }


//KEY Event


// var itemInput=document.querySelector('input[type="text"]');
// var form=document.querySelector('form')
var selects=document.querySelector('select')

// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)
// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

selects.addEventListener('change',runEvent)
selects.addEventListener('input',runEvent)
selects.addEventListener('submit',runEvent)

function runEvent(e){
    e.preventDefault()
    console.log("Event Type:" +e.type)
    console.log("Event Type:" +e.target.value)


}
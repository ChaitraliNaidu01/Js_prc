//single element

console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1'))
console.log(document.querySelector('.item'))

//Multiple Element

console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

//
const items=document.querySelectorAll('.item')

items.forEach((item)=>console.log(item))

const ul=document.querySelector('.items')
// ul.remove()
ul.firstElementChild.textContent = 'Yellow';
ul.children[1].innerHTML="Green"
// ul.children[2].innerHTML="pink"  OR
ul.lastElementChild.innerHTML='<h1>Pink</h1>';

const btn=document.querySelector('.btn')
// btn.style.background='red'

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("click")
    document.querySelector('#my-form').style.background="#ccc";
    // document.querySelector('body').style.background="black";
    document.querySelector('body').classList.add('bg-dark');
    // document.lastElementChild.innerHTML='<h1>Rosi</h1>';
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Rosi</h1>'
    
})



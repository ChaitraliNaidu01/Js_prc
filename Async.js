const posts=[
    {title:"Hello",body:"here hi Hello"},
    {title:"By",body:"A chal nikal ab"}
]

function getPost(){
    setTimeout(()=>{
        let output=""
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        });

        document.body.innerHTML=output;
    },1000)
}

// function createPost(post,callback){
//    setTimeout(()=>{
//       posts.push(post)
//       callback();
//    },2000)

// }

// createPost({title:"Mini",body:"Title"},getPost)


function createPost(post){

    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            posts.push(post)

            const error=true

            if(!error){
                reslove()
            }else{
                reject("Error:Something went wrong")
            }
        },2000)
    })
}

// createPost({title:"Hy",body:"by"}).then(details).catch(err=>console.log(err))

//Promise All

// const Promise1=Promise.resolve("Hello ");
// const Promise2=10;
// const Promise3=new Promise((resolve,reject)=>
//    setTimeout(resolve,2000,"BY By")
// );

// const Promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>
//   res.json()
// );

// Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values=>console.log(values))

//Async Await

// async function init(){
    
//     await createPost({title:"Hy",body:"by"})
//     getPost();
// }

// init();


//For Fetch

async function FetchUser(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')

    const data=await res.json()

    console.log(data)
}

FetchUser()
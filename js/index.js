// Your code goes here

const logotitle = document.querySelector('h1')
const navlink = document.querySelectorAll('.nav-link')
const allh2 = document.querySelectorAll('h2')
const allh4 = document.querySelectorAll('h4')
const allp = document.querySelectorAll('p')
const allimg = document.querySelectorAll('img')
const allbutt = document.querySelectorAll('.btn')
console.log(navlink)

//logo title mouseover
logotitle.addEventListener("mouseover", event =>{
    event.target.style.color = "blue";
    setTimeout(function(){
        event.target.style.color ="";
    },1000)
},false);

//first h2 click
allh2[0].addEventListener('click', (event) => 
{ event.target.style.color = 'blue'; });

//secound h2
allh2[1].addEventListener('click',(event) =>
{ event.target.style.color = 'orange';});

//
navlink[2].addEventListener('mouseleave',(event) =>
{ event.target.style.color = "orange";});






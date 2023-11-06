'use strict'
const singUPshow=document.querySelector('.pop-up')
let overlay=document.querySelector('.blur')
let signUpMOdal=document.querySelector('#sign-up')
let loginMOdal=document.querySelector('#login')
let loginMOdal2=document.querySelector('.login')
let closeModal=document.querySelector('.close-button')
signUpMOdal.addEventListener('click',()=>{
    singUPshow.classList.add('show')
    overlay.classList.add('show')
})
loginMOdal.addEventListener('click',()=>{
    singUPshow.classList.add('show')
    overlay.classList.add('show')
})
closeModal.addEventListener('click',()=>{
    singUPshow.classList.remove('show')
    overlay.classList.remove('show')
})
loginMOdal2.addEventListener('click',()=>{
    singUPshow.classList.add('show')
    overlay.classList.add('show')
})
const textEl=document.querySelectorAll('.textContent')
console.log(textEl)
let timer=0
function timertext(){
    textEl[timer].classList.remove('activeText')
    timer++
    if(timer>textEl.length-1){
        timer=0
    }
    textEl[timer].classList.add('activeText')
}
setInterval(timertext,4000)
const divScroll=document.querySelectorAll('.div-scroll-content')
console.log(divScroll)
function scrollbox(){
    const trigger=window.innerHeight*0.8
    divScroll.forEach((boxex)=>{
        let topboxes=boxex.getBoundingClientRect().top
        if(topboxes<trigger){
            boxex.classList.add('show-scroll')
        }
        else{
            boxex.classList.remove('show-scroll')
        }
    })

}scrollbox()
window.addEventListener('scroll',scrollbox)
const imgsEl=document.querySelectorAll('.companyImgs img')
console.log(imgsEl)
let imgtimer=0
function timerimg(){
    imgsEl[imgtimer].classList.remove('showimgs')
    imgtimer++
    if(imgtimer>imgsEl.length-1){
        imgtimer=0
    }
    imgsEl[imgtimer].classList.add('showimgs')
}
setInterval(timerimg,4000)
let burgerbtn=document.querySelector('#btn-menu')
let burgerMenu=document.querySelector('.menuBurger')
burgerbtn.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active-burger')
   
    })
    // accordion menu
    let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
const signupMenu=document.getElementById('sing-up-menu-a')
console.log(signupMenu)

 




// =============================
// MT Tech Services
// FINAL script.js
// =============================

// MOBILE MENU

const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuButton && navMenu){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("mobile-open");

});

window.addEventListener("resize",()=>{

if(window.innerWidth>768){

navMenu.classList.remove("mobile-open");

navMenu.style.display="";

}

});

}

// MOBILE MENU STYLES

const style=document.createElement("style");

style.innerHTML=`

.mobile-open{

display:flex !important;

flex-direction:column;

position:absolute;

top:80px;

right:5%;

width:220px;

padding:20px;

gap:20px;

background:rgba(255,255,255,.97);

backdrop-filter:blur(20px);

border-radius:20px;

box-shadow:0 10px 30px rgba(0,0,0,.15);

z-index:1000;

}

`;

document.head.appendChild(style);

// FAQ

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const button=item.querySelector("button");
const content=item.querySelector("div");

if(button && content){

button.addEventListener("click",()=>{

const active=item.classList.contains("active");

faqItems.forEach(f=>{

f.classList.remove("active");

const d=f.querySelector("div");

if(d){

d.style.maxHeight="0";

d.style.padding="0 22px";

}

});

if(!active){

item.classList.add("active");

content.style.maxHeight=
content.scrollHeight+"px";

content.style.padding=
"0 22px 22px";

}

});

}

});

// SCROLL REVEAL

const revealElements=document.querySelectorAll(

".glass-card,.hero-content,.section-title"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{

threshold:.15

}

);

revealElements.forEach(element=>{

observer.observe(element);

});

// NAVBAR EFFECT

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

if(window.scrollY>50){

navbar.style.background=
"rgba(255,255,255,.95)";

navbar.style.boxShadow=
"0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.background=
"rgba(255,255,255,.8)";

navbar.style.boxShadow="none";

}

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

if(navMenu){

navMenu.classList.remove("mobile-open");

}

}

});

});

// BUTTON HOVER

const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn,.nav-button"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform=

"translateY(-3px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform=

"translateY(0px)";

});

});

// AUTO COPYRIGHT YEAR

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.textContent=

`© ${new Date().getFullYear()} MT Tech Services`;

}

// SCROLL TO TOP ON REFRESH

window.onbeforeunload=function(){

window.scrollTo(0,0);

};

// CONSOLE MESSAGE

console.log(

"MT Tech Services website loaded successfully."

);

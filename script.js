// =======================
// MT Tech Services
// script.js
// =======================

// Mobile Menu

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuButton && navLinks){

menuButton.addEventListener("click",()=>{

if(navLinks.style.display==="flex"){

navLinks.style.display="none";

}else{

navLinks.style.display="flex";

navLinks.style.flexDirection="column";
navLinks.style.position="absolute";
navLinks.style.top="80px";
navLinks.style.right="5%";
navLinks.style.padding="20px";
navLinks.style.borderRadius="20px";
navLinks.style.background="rgba(255,255,255,.95)";
navLinks.style.backdropFilter="blur(20px)";
navLinks.style.gap="20px";
navLinks.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}

});

}

// FAQ Accordion

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const button=item.querySelector("button");
const content=item.querySelector("div");

if(button && content){

content.style.maxHeight="0";
content.style.overflow="hidden";
content.style.transition="0.3s";

button.addEventListener("click",()=>{

const open=content.style.maxHeight!=="0px";

faqItems.forEach(i=>{

const d=i.querySelector("div");

if(d){

d.style.maxHeight="0";

}

});

if(!open){

content.style.maxHeight=
content.scrollHeight+"px";

}

});

}

});

// Scroll Reveal

const reveals=document.querySelectorAll(
".glass-card,.section-title,.hero-content"
);

const revealObserver=
new IntersectionObserver(

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

threshold:0.15

}

);

reveals.forEach(element=>{

element.style.opacity="0";
element.style.transform=
"translateY(40px)";
element.style.transition=
"all .7s ease";

revealObserver.observe(element);

});

// Navbar Scroll Effect

const navbar=
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background=
"rgba(255,255,255,.92)";

navbar.style.boxShadow=
"0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.background=
"rgba(255,255,255,.75)";

navbar.style.boxShadow=
"none";

}

});

// Smooth Anchor Links

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Button Hover Animation

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

// Footer Year (Future Proof)

const copyright=
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=
`© ${new Date().getFullYear()} MT Tech Services`;

}

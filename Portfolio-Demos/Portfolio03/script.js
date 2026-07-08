"use strict";


const typingElement = document.getElementById("typing");

const words = [
    "Full Stack MERN Developer",
    "Java Developer",
    "Problem Solver",
    "Open Source Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );

}

typingEffect();



/* ==========================================================
   CURSOR GLOW
========================================================== */

const glow =
    document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    if (!glow) return;

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



/* ==========================================================
   STICKY NAVBAR
========================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});



/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(!target) return;

        e.preventDefault();

        window.scrollTo({

            top:
            target.offsetTop - 70,

            behavior:"smooth"

        });

    });

});



/* ==========================================================
   MOBILE MENU
========================================================== */

const menuBtn =
    document.querySelector(".menuBtn");

const navLinks =
    document.querySelector(".navLinks");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("open");

    });

}



/* ==========================================================
   CLOSE MENU WHEN LINK CLICKED
========================================================== */

document
.querySelectorAll(".navLinks a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("open");

    });

});



/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

const scrollButton =
document.createElement("div");

scrollButton.id = "scrollTop";

scrollButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(scrollButton);

scrollButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollButton.classList.add("show");

    }

    else{

        scrollButton.classList.remove("show");

    }

});



/* ==========================================================
   HERO BUTTON RIPPLE
========================================================== */

document
.querySelectorAll(".primaryBtn")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});



/* ==========================================================
   PROJECT CARD HOVER
========================================================== */

document
.querySelectorAll(".projectCard")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(37,99,235,.08),
white 55%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="white";

});

});



/* ==========================================================
   SOCIAL ICON SCALE
========================================================== */

document
.querySelectorAll(".socials a")
.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px) scale(1.1)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) scale(1)";

});

});


/* ==========================================================
   PORTFOLIO SCRIPT
   PART 2
========================================================== */


/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(
".section,.skillCard,.projectCard,.aboutCard,.profileCard"
);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

entry.target.classList.remove("hidden");

}

});

},

{
threshold:.15
}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".navLinks a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ==========================================================
   SKILL BAR ANIMATION
========================================================== */

const bars =
document.querySelectorAll(".bar div");

const barObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const percent =
entry.target.dataset.width;

entry.target.style.width=
percent+"%";

}

});

},

{
threshold:.5
}

);

bars.forEach(bar=>{

barObserver.observe(bar);

});


/* ==========================================================
   COUNTER ANIMATION
========================================================== */

const counters =
document.querySelectorAll(".counter");

function runCounter(counter){

const target=
+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=
Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

}

const counterObserver=
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{
threshold:.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================================
   FLOATING BLOBS
========================================================== */

const blobs =
document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const moveX=(x-0.5)*(index+1)*40;
const moveY=(y-0.5)*(index+1)*40;

blob.style.transform=
`translate(${moveX}px,${moveY}px)`;

});

});


/* ==========================================================
   PARALLAX HERO
========================================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=
window.scrollY*.3+"px";

}

});


/* ==========================================================
   BUTTON CLICK EFFECT
========================================================== */

document.querySelectorAll(
".primaryBtn,.secondaryBtn"
).forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=
document.createElement("span");

const rect=
this.getBoundingClientRect();

ripple.style.position="absolute";

ripple.style.width="20px";

ripple.style.height="20px";

ripple.style.borderRadius="50%";

ripple.style.background=
"rgba(255,255,255,.5)";

ripple.style.left=
e.clientX-rect.left+"px";

ripple.style.top=
e.clientY-rect.top+"px";

ripple.style.transform=
"translate(-50%,-50%)";

ripple.style.animation=
"ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load",()=>{

const loader=
document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.classList.add("hidden");

},600);

}

});


/* ==========================================================
   NAVBAR SHADOW
========================================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

navbar.style.boxShadow=
"0 10px 35px rgba(0,0,0,.08)";

}

else{

navbar.style.boxShadow="none";

}

});


/* ==========================================================
   PERFORMANCE
========================================================== */

window.addEventListener("resize",()=>{

document.body.style.overflowX="hidden";

});


/* 
   CONSOLE MESSAGE
*/

console.log(
"%cPortfolio by Prince Kumar Singh",
"color:#2563eb;font-size:18px;font-weight:bold;"
);

console.log(
"%cThanks for visiting!",
"color:#64748b;font-size:14px;"
);



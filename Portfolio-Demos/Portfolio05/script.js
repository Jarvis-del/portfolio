// ===============================
// Typing Animation
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "Backend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// Sticky Navbar
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,23,42,0.95)";

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.25)";

    } else {

        header.style.background =
            "rgba(15,23,42,.85)";

        header.style.boxShadow = "none";

    }

});


// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

        scrollBtn.style.alignItems = "center";

        scrollBtn.style.justifyContent = "center";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
    document.querySelectorAll(
        ".card, .skill-card, .project-card, .timeline-item"
    );

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        const visible = 120;

        if (top < window.innerHeight - visible) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// Button Hover Ripple Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");

        button.style.setProperty("--y", y + "px");

    });

});


// ===============================
// Current Year in Footer
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Alex Carter. All Rights Reserved.`;


// ===============================
// Smooth Fade On Load
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ============================
// MT TECH SERVICES
// Premium Animations
// ============================

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Scroll Reveal

const revealElements = document.querySelectorAll(
    ".card, .stat-card, .hero-content, .hero-visual"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// Navbar Effect

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
            "rgba(5,10,20,.9)";

        navbar.style.backdropFilter =
            "blur(30px)";

    }else{

        navbar.style.background =
            "rgba(10,15,25,.6)";

    }

});

// Hero Fade

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if(!hero) return;

    hero.style.opacity =
        1 - window.scrollY / 800;

});

// Floating Glow Motion

const glow1 =
    document.querySelector(".glow-1");

const glow2 =
    document.querySelector(".glow-2");

document.addEventListener("mousemove",(e)=>{

    const x =
        e.clientX / window.innerWidth;

    const y =
        e.clientY / window.innerHeight;

    if(glow1){

        glow1.style.transform =
            `translate(${x*40}px, ${y*40}px)`;

    }

    if(glow2){

        glow2.style.transform =
            `translate(${-x*40}px, ${-y*40}px)`;

    }

});

// Typing Effect

const badge =
    document.querySelector(".hero-badge");

if(badge){

    const originalText =
        badge.innerText;

    badge.innerText = "";

    let i = 0;

    const typeWriter = () => {

        if(i < originalText.length){

            badge.innerText +=
                originalText.charAt(i);

            i++;

            setTimeout(
                typeWriter,
                40
            );

        }

    };

    typeWriter();

}

// Button Hover Glow

const buttons =
    document.querySelectorAll(
        ".book-btn, .primary-btn"
    );

buttons.forEach(button=>{

    button.addEventListener(
        "mousemove",
        e=>{

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            button.style.setProperty(
                "--x",
                `${x}px`
            );

            button.style.setProperty(
                "--y",
                `${y}px`
            );

        }
    );

});

console.log(
    "MT Tech Services Loaded"
);

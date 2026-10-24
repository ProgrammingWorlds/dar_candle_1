/* ==========================================
   DAR CANDLE
   JAVASCRIPT + GSAP
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* ======================================
       LOADER
    ====================================== */

    const loader = document.querySelector(".loader");

    const loaderTimeline = gsap.timeline();

    loaderTimeline
        .from(".loader-candle", {
            scale: 0,
            rotation: -20,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
        .from(".loader h2", {
            opacity: 0,
            y: 20,
            duration: 0.6
        })
        .from(".loader p", {
            opacity: 0,
            y: 15,
            duration: 0.5
        })
        .to(loader, {
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.display = "none";
            }
        });


    /* ======================================
       NAVBAR
    ====================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ======================================
       CURSOR LIGHT
    ====================================== */

    const cursor = document.querySelector(".cursor-light");

    if (window.innerWidth > 850) {

        window.addEventListener("mousemove", (event) => {

            gsap.to(cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.6,
                ease: "power3.out"
            });

        });

    }


    /* ======================================
       HERO INTRO
    ====================================== */

    const heroTimeline = gsap.timeline({
        delay: 2.7
    });

    heroTimeline
        .from(".hero-small-title", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        })
        .from(".hero h1", {
            opacity: 0,
            y: 70,
            duration: 1.2,
            ease: "power4.out"
        }, "-=.6")
        .from(".hero-content > p", {
            opacity: 0,
            y: 30,
            duration: .8
        }, "-=.6")
        .from(".hero-actions", {
            opacity: 0,
            y: 25,
            duration: .8
        }, "-=.5")
        .from(".hero-candle-area", {
            opacity: 0,
            scale: .7,
            rotationY: 30,
            duration: 1.5,
            ease: "power4.out"
        }, "-=1");


    /* ======================================
       3D CANDLE MOUSE MOVEMENT
    ====================================== */

    const candle = document.querySelector(".candle-3d");

    if (candle && window.innerWidth > 850) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 15;

            const y =
                (event.clientY / window.innerHeight - 0.5) * -10;

            gsap.to(candle, {
                rotationY: x,
                rotationX: y,
                duration: 1,
                ease: "power3.out"
            });

        });

    }


    /* ======================================
       MARQUEE
    ====================================== */

    gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1
    });


    /* ======================================
       STORY IMAGE
    ====================================== */

    gsap.from(".story-image", {

        scrollTrigger: {
            trigger: ".story",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1
        },

        y: 100,
        rotate: -3,
        scale: .9,

        ease: "none"

    });


    gsap.from(".story-content", {

        scrollTrigger: {
            trigger: ".story",
            start: "top 70%"
        },

        opacity: 0,
        x: 80,

        duration: 1.2,

        ease: "power4.out"

    });


    /* ======================================
       GALLERY CARDS
    ====================================== */

    gsap.utils.toArray(".gallery-card").forEach((card, index) => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            },

            opacity: 0,

            y: 80,

            scale: .92,

            rotation:
                index % 2 === 0
                    ? -2
                    : 2,

            duration: 1,

            delay: index * .04,

            ease: "power4.out"

        });

    });


    /* ======================================
       GALLERY 3D TILT
    ====================================== */

    document
        .querySelectorAll(".gallery-card")
        .forEach(card => {

            card.addEventListener("mousemove", (event) => {

                if (window.innerWidth <= 850) return;

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 8;

                const rotateX =
                    ((y / rect.height) - .5) * -8;

                gsap.to(card, {
                    rotationY: rotateY,
                    rotationX: rotateX,
                    transformPerspective: 800,
                    duration: .4,
                    ease: "power2.out"
                });

            });


            card.addEventListener("mouseleave", () => {

                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: .7,
                    ease: "power3.out"
                });

            });

        });


    /* ======================================
       FEATURE PARALLAX
    ====================================== */

    gsap.to(".feature-image img", {

        scrollTrigger: {
            trigger: ".feature",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },

        scale: 1.15,

        ease: "none"

    });


    /* ======================================
       FEATURE CONTENT
    ====================================== */

    gsap.from(".feature-content", {

        scrollTrigger: {
            trigger: ".feature",
            start: "top 70%"
        },

        opacity: 0,
        x: -80,

        duration: 1.2,

        ease: "power4.out"

    });


    /* ======================================
       VIDEOS
    ====================================== */

    gsap.utils.toArray(".video-card").forEach((videoCard, index) => {

        gsap.from(videoCard, {

            scrollTrigger: {
                trigger: videoCard,
                start: "top 85%"
            },

            opacity: 0,

            y: 100,

            duration: 1,

            delay: index * .12,

            ease: "power4.out"

        });

    });


    /* ======================================
       DELIVERY SECTION
    ====================================== */

    gsap.from(".delivery-symbol", {

        scrollTrigger: {
            trigger: ".delivery",
            start: "top 75%"
        },

        scale: 0,

        rotation: 180,

        duration: 1,

        ease: "back.out(2)"

    });


    gsap.from(".delivery h2", {

        scrollTrigger: {
            trigger: ".delivery",
            start: "top 70%"
        },

        opacity: 0,

        y: 70,

        duration: 1.2,

        ease: "power4.out"

    });


    gsap.to(".delivery-glow", {

        scrollTrigger: {
            trigger: ".delivery",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },

        scale: 1.5,

        ease: "none"

    });


    /* ======================================
       FINAL CTA
    ====================================== */

    gsap.from(".final-cta h2", {

        scrollTrigger: {
            trigger: ".final-cta",
            start: "top 75%"
        },

        opacity: 0,

        y: 100,

        duration: 1.3,

        ease: "power4.out"

    });


    gsap.from(".cta-button", {

        scrollTrigger: {
            trigger: ".final-cta",
            start: "top 65%"
        },

        opacity: 0,

        y: 30,

        duration: .8,

        delay: .3,

        ease: "power3.out"

    });


    /* ======================================
       FLOATING HERO EFFECT
    ====================================== */

    gsap.to(".hero-candle-area", {

        y: -18,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* ======================================
       FLAME RANDOM MOVEMENT
    ====================================== */

    gsap.to(".flame", {

        rotation: 5,

        scale: 1.06,

        duration: .9,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* ======================================
       MOBILE MENU
    ====================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const navLinks =
        document.querySelector(".nav-links");

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

            menuButton.classList.toggle("active");

        });

    }


    /* ======================================
       SMOOTH ANCHOR CLOSE
    ====================================== */

    document
        .querySelectorAll("a[href^='#']")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (navLinks) {
                    navLinks.classList.remove("mobile-open");
                }

            });

        });


    /* ======================================
       VIDEO HOVER PLAY
    ====================================== */

    document
        .querySelectorAll(".video-card video")
        .forEach(video => {

            video.addEventListener("mouseenter", () => {

                video.play().catch(() => {});

            });

        });


    /* ======================================
       REFRESH SCROLL POSITION
    ====================================== */

    window.addEventListener("load", () => {

        ScrollTrigger.refresh();

    });

});
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FIX for 100vh on Mobile ---
    // This function calculates the actual viewport height and sets it as a CSS variable.
    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Run it once on initial load
    setViewportHeight();

    // Run it again whenever the window is resized
    window.addEventListener('resize', setViewportHeight);


    // --- The rest of your script remains the same ---
    const mainScrollContainer = document.querySelector('main');

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Typing Animation ---
    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: ["Embedded Software Engineer", "Firmware Engineer", "AUTOSAR Developer", "Automotive Enthusiast"],
            typeSpeed: 70,
            backSpeed: 35,
            loop: true
        });
    }

    // --- Keyboard Arrow Key Navigation ---
    const sections = Array.from(document.querySelectorAll('main section'));
    let currentSectionIndex = 0;

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSectionIndex = sections.indexOf(entry.target);
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    window.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentSectionIndex < sections.length - 1) {
            e.preventDefault();
            scrollToSection(currentSectionIndex + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentSectionIndex > 0) {
            e.preventDefault();
            scrollToSection(currentSectionIndex - 1);
        }
    });

    // --- Auto-Hide Header on Scroll ---
    const header = document.querySelector('.header');
    let lastScrollY = mainScrollContainer.scrollTop;

    mainScrollContainer.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) {
            return;
        }

        const currentScrollY = mainScrollContainer.scrollTop;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    });

});
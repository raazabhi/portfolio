document.addEventListener("DOMContentLoaded", () => {
    
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
            typeSpeed: 60,
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
        // Updated to include left and right arrow keys
        if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentSectionIndex < sections.length - 1) {
            e.preventDefault();
            scrollToSection(currentSectionIndex + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentSectionIndex > 0) {
            e.preventDefault();
            scrollToSection(currentSectionIndex - 1);
        }
    });

});
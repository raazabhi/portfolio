document.addEventListener("DOMContentLoaded", () => {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        const isExpanded = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded);

        // Prevent scrolling when menu is open
        document.body.style.overflow = isExpanded ? "hidden" : "auto";
    });

    // --- Smooth Scrolling for Nav Links & Section Tracking ---
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = Array.from(document.querySelectorAll(".snap-section"));
    let currentSectionIndex = 0;

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Close mobile menu if open
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "auto";

            // Explicitly scroll the target section into view
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
                currentSectionIndex = sections.indexOf(targetSection);
            }
        });
    });

    // --- Keyboard Navigation (Arrow Keys) ---
    window.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
            e.preventDefault();
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
            }
        } else if (["ArrowDown", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
            }
        }
    });

    // --- Track scroll to update header and current index ---
    const snapContainer = document.querySelector('.snap-container');
    const scrollTarget = snapContainer || window;

    scrollTarget.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollY = snapContainer ? snapContainer.scrollTop : window.scrollY;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (snapContainer) {
            const newIndex = Math.round(snapContainer.scrollTop / window.innerHeight);
            if (newIndex >= 0 && newIndex < sections.length) {
                currentSectionIndex = newIndex;
            }
        }
    }, { passive: true });

    // --- Typing Animation ---
    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: ["High-Performance Firmware", "Robust Automotive Systems", "AUTOSAR Architectures", "Reliable Solutions", "Real-Time Systems", "Safety-Critical Software", "Custom Protocol Stacks", "Embedded Linux Solutions", "OTA Update Mechanisms", "Scalable Embedded Software"],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // --- Intersection Observer for Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
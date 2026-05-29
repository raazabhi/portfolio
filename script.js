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

    // --- Project Hover Panel Logic ---
    const hoverPanel = document.getElementById('hoverPanel');
    const hoverTitle = document.getElementById('hoverTitle');
    const hoverTech = document.getElementById('hoverTech');
    const hoverShortDesc = document.getElementById('hoverShortDesc');
    const hoverExtendedDesc = document.getElementById('hoverExtendedDesc');

    const projectCards = document.querySelectorAll('.project-card');
    let hoverTimeout = null;
    let hideTimeout = null;

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            clearTimeout(hideTimeout);
            // Small delay to avoid flickering on quick passes
            hoverTimeout = setTimeout(() => {
                // Extract data from the hovered card
                const title = card.querySelector('h4').textContent;
                const techHTML = card.querySelector('.project-tech').innerHTML;
                const shortDesc = card.querySelector('.project-content p').textContent;
                
                const extendedNode = card.querySelector('.extended-details');
                const extendedHTML = extendedNode ? extendedNode.innerHTML : '<p>Details coming soon...</p>';

                // Populate panel
                hoverTitle.textContent = title;
                hoverTech.innerHTML = techHTML;
                hoverShortDesc.textContent = shortDesc;
                hoverExtendedDesc.innerHTML = extendedHTML;

                // Position at cursor point with smart edge detection
                positionPanel(e.clientX, e.clientY);

                // Reset scroll memory so it starts at the top
                hoverPanel.scrollTop = 0;

                // Show panel
                hoverPanel.classList.add('visible');
            }, 150);
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            // Give the user a grace period to move their mouse into the panel
            hideTimeout = setTimeout(() => {
                hoverPanel.classList.remove('visible');
            }, 300);
        });
    });

    // Keep the panel open if the mouse enters the panel itself
    hoverPanel.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });

    // Hide the panel if the mouse leaves the panel
    hoverPanel.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            hoverPanel.classList.remove('visible');
        }, 300);
    });

    function positionPanel(cursorX, cursorY) {
        const panelW = hoverPanel.offsetWidth || 420;
        const panelH = hoverPanel.offsetHeight || 400;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const offset = 20; // Gap from cursor

        // Decide: show to the right or left of cursor
        let x = cursorX + offset;
        if (x + panelW > vw - 20) {
            x = cursorX - panelW - offset;
        }
        // Keep within left edge
        if (x < 10) x = 10;

        // Decide: show below or above cursor
        let y = cursorY - 20;
        if (y + panelH > vh - 20) {
            y = vh - panelH - 20;
        }
        if (y < 10) y = 10;

        hoverPanel.style.left = x + 'px';
        hoverPanel.style.top = y + 'px';
    }

});
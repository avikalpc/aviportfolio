document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar on mobile after clicking a link
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });


    // Example of a simple scroll animation (can be expanded)
    const faders = document.querySelectorAll('.card, .lead'); // Select elements to animate

    const appearOptions = {
        threshold: 0.2, // When 20% of the item is visible
        rootMargin: "0px 0px -50px 0px" // Adjusts the viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.opacity = 0;
        fader.style.transform = 'translateY(20px)';
        appearOnScroll.observe(fader);
    });

});
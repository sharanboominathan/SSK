// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav
    const hmb = document.getElementById('hmb');
    const navMenu = document.getElementById('navMenu');
    if(hmb && navMenu) {
        hmb.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('in'), i * 60);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Nav shadow
    const siteNav = document.getElementById('siteNav');
    if (siteNav) {
        window.addEventListener('scroll', () => {
            siteNav.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(0,0,0,0.07)' : 'none';
        });
    }

    // Contact Form Fake Submit logic (if present on Contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (this.checkValidity()) {
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending...';
                btn.disabled = true;

                setTimeout(() => {
                    alert('Thank you! Your message has been sent successfully.');
                    this.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    this.classList.remove('was-validated');
                }, 1500);
            } else {
                this.classList.add('was-validated');
            }
        });
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const main = document.getElementById('main');

function setMenuOpen(isOpen) {
    if (hamburger) {
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }
    if (navMenu) {
        navMenu.classList.toggle('active', isOpen);
    }
    if (main) {
        main.inert = isOpen;
    }
    document.body.classList.toggle('menu-open', isOpen);
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = !navMenu.classList.contains('active');
        setMenuOpen(isOpen);
    });

    document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            setMenuOpen(false);
            hamburger.focus();
        }
    });
}

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                block: 'start'
            });
            if (href === '#main') {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        }
    });
});

// Navbar background change on scroll. Toggles a class rather than setting
// inline styles so the colors stay with the tokens in styles.css
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 100);
});

// Active navigation link highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 180;
    let current = '';

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (scrollPos >= top) {
            current = section.id;
        }
    });

    if (!current && sections.length) {
        current = sections[0].id;
    }

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', isActive);
    });
}

updateActiveNav();
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('load', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);

// Contact form handling with EmailJS
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        function showStatus(text, isError) {
            if (formStatus) {
                formStatus.textContent = text;
            }
            submitBtn.textContent = text;
            submitBtn.style.backgroundColor = isError ? '#57534e' : '';
            if (isError) {
                submitBtn.style.color = '#faf8f5';
            }
        }

        if (!name || !email || !message) {
            showStatus('Please fill all fields', true);
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                if (formStatus) formStatus.textContent = '';
            }, 3000);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Invalid email address', true);
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                if (formStatus) formStatus.textContent = '';
            }, 3000);
            return;
        }

        showStatus('Sending...', false);
        submitBtn.disabled = true;

        emailjs.sendForm('service_uk54upr', 'template_sw024nl', this)
            .then(() => {
                showStatus('Message sent.', false);
                submitBtn.style.backgroundColor = '#1c1917';
                submitBtn.style.color = '#faf8f5';
                this.reset();
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                    if (formStatus) formStatus.textContent = '';
                }, 3000);
            }, (error) => {
                console.log('EmailJS error:', error);
                showStatus('Send failed. Please try again.', true);
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                    if (formStatus) formStatus.textContent = '';
                }, 3000);
            });
    });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll(
        '.project-card, .project-featured, .about-text, .contact-info, .contact-form, .involvement-card'
    ).forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
        window.setTimeout(() => el.classList.add('is-visible'), 1600);
    });
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

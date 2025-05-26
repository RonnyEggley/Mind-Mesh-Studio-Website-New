// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // If using Formspree, the form will submit normally
        // For demonstration, we'll show a success message
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        contactForm.reset();
        
        // Uncomment this line to actually submit the form
        // this.submit();
    });
}

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <p>${message}</p>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Animation on scroll
const animatedElements = document.querySelectorAll('.service-card, .feature, .pricing-card, .process-step, .team-member, .mission-item');

// Add animate class to elements
animatedElements.forEach(element => {
    element.classList.add('animate');
});

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
}

// Check elements on load
function checkAnimations() {
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animated');
        }
    });
}

// Check elements on scroll
window.addEventListener('scroll', checkAnimations);
window.addEventListener('resize', checkAnimations);
window.addEventListener('load', checkAnimations);

// Add animated shapes to hero section
function addShapes() {
    const hero = document.querySelector('.hero');
    const whyUs = document.querySelector('.why-us');
    
    if (hero) {
        const shape1 = document.createElement('div');
        shape1.className = 'shape shape-1';
        hero.appendChild(shape1);
        
        const shape2 = document.createElement('div');
        shape2.className = 'shape shape-2';
        hero.appendChild(shape2);
        
        const shape3 = document.createElement('div');
        shape3.className = 'shape shape-3';
        hero.appendChild(shape3);
    }
}

// Add notification styles
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 30px;
            left: 30px;
            background-color: #fff;
            border-radius: 10px;
            padding: 15px 20px;
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            justify-content: space-between;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 9999;
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .notification.success {
            border-left: 4px solid #10b981;
        }
        
        .notification.error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
        }
        
        .notification-content i {
            font-size: 1.5rem;
            margin-right: 15px;
        }
        
        .notification.success .notification-content i {
            color: #10b981;
        }
        
        .notification.error .notification-content i {
            color: #ef4444;
        }
        
        .notification-content p {
            color: var(--dark);
            font-size: 0.95rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--gray);
            cursor: pointer;
            font-size: 0.9rem;
            margin-left: 15px;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            color: var(--dark);
        }
    `;
    document.head.appendChild(style);
}

// About Us page JS
function showSection(section) {
    document.querySelectorAll('.about-menu-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.about-section').forEach(sec => sec.classList.remove('active'));
    if(section === 'team') {
        document.getElementById('btn-team').classList.add('active');
        document.getElementById('section-team').classList.add('active');
    } else if(section === 'who') {
        document.getElementById('btn-who').classList.add('active');
        document.getElementById('section-who').classList.add('active');
    } else if(section === 'why') {
        document.getElementById('btn-why').classList.add('active');
        document.getElementById('section-why').classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    addShapes();
    addNotificationStyles();
    
    // Add current year to copyright
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
});

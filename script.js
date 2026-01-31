// FAQ Toggle Functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const question = faqItem.querySelector('.faq-question');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.querySelector('.faq-answer').classList.remove('open');
            item.querySelector('.faq-question').classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    answer.classList.toggle('open');
    question.classList.toggle('active');
}

// Configuration - Add your links here
const DONATION_LINK = ""; // Add your donation link here
const FEEDBACK_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScy2u94TG4lAwmL_S8HOtx5NxVBoNprn-M0HMWHd93VU6BFTg/viewform?usp=publish-editor"; // Add your feedback form link here

// Report Bug Function
function reportBug() {
    if (FEEDBACK_FORM_LINK) {
        window.open(FEEDBACK_FORM_LINK, '_blank');
    } else {
        alert('The link will be added soon. Please check back later!');
    }
}

// Donation Button Click Handler
document.addEventListener('DOMContentLoaded', function() {
    const donationBtn = document.getElementById('donationBtn');
    
    donationBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (DONATION_LINK) {
            window.open(DONATION_LINK, '_blank');
        } else {
            alert('The link will be added soon. Thank you for your interest in supporting Nexus Trails!');
        }
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add entrance animations
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.support-card, .faq-item');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

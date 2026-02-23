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
const DONATION_LINK = "https://ko-fi.com/nexustrails"; // Add your donation link here
const FEEDBACK_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScy2u94TG4lAwmL_S8HOtx5NxVBoNprn-M0HMWHd93VU6BFTg/viewform?usp=publish-editor"; // Add your feedback form link here
const PRODUCT1_LINK = "https://chromewebstore.google.com/detail/kecnkcajcgandpnpnblmlkopcnbfcoka?utm_source=item-share-cb"; // Add your YT Hide Search Suggestions extension link here
const PRODUCT2_LINK = "https://chromewebstore.google.com/detail/efhpeobfakahidjbpofklfalbppdbaod?utm_source=item-share-cb"; // Add your Stay Aware - Mindful Browsing extension link here

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

    // Product 1 Card Click Handler
    const product1Card = document.getElementById('product1Card');
    if (product1Card) {
        product1Card.addEventListener('click', function(e) {
            e.preventDefault();
            if (PRODUCT1_LINK) {
                window.open(PRODUCT1_LINK, '_blank');
            } else {
                alert('The link will be added soon!');
            }
        });
    }

    // Product 2 Card Click Handler
    const product2Card = document.getElementById('product2Card');
    if (product2Card) {
        product2Card.addEventListener('click', function(e) {
            e.preventDefault();
            if (PRODUCT2_LINK) {
                window.open(PRODUCT2_LINK, '_blank');
            }
            // If empty, do nothing (no redirect)
        });
    }
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


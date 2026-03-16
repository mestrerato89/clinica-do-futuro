document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sophisticated scroll animation observer
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);

    // Classy reveal for cards and sections
    const animatedElements = document.querySelectorAll('.benefit-card, .method-card, .selection-box, .case-card, .testimonial-video, .deliverables-content, .infra-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.98)';
        el.style.transition = `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Reel Navigation (Conceptual)
    const reel = document.querySelector('.testimonials-grid');
    const nextBtn = document.querySelector('.reel-nav.next');
    const prevBtn = document.querySelector('.reel-nav.prev');

    if (nextBtn && prevBtn && reel) {
        nextBtn.addEventListener('click', () => {
            const firstItem = reel.querySelector('.testimonial-video');
            const scrollAmount = firstItem ? firstItem.offsetWidth + 40 : reel.clientWidth; 
            reel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            const firstItem = reel.querySelector('.testimonial-video');
            const scrollAmount = firstItem ? firstItem.offsetWidth + 40 : reel.clientWidth;
            reel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});

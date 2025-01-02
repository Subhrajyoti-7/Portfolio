const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger at 10% visibility
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class when in view
            entry.target.classList.add('in-view');
        } else {
            // Remove animation class when out of view
            entry.target.classList.remove('in-view');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    observer.observe(card);
});

//Magnetic animation
const word = document.querySelector('.sticky');

word.addEventListener('mousemove', (e) => {
    const rect = word.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    word.style.transform = `translate(${offsetX / 5}px, ${offsetY / 5}px) scale(1.2)`;
});

word.addEventListener('mouseleave', () => {
    word.style.transition = "transform 0.6s ease-out";
    word.style.transform = 'translate(0, 0) scale(1)';
});

word.addEventListener('mouseout', () => {
    word.style.transition = "transform 0.6s ease-out";
    word.style.transform = 'translate(0, 0) scale(1)';
});

// Rotating banner JS for the homepage


const group = document.querySelector('.group');
const totalImages = group.children.length;

// Clone the first image and append it seamlessly
group.appendChild(group.firstElementChild.cloneNode(true));

let currentIndex = 0;

setInterval(() => {
    currentIndex++;
    group.style.transition = 'transform 2s ease-in-out';
    group.style.transform = `translateX(-${currentIndex * 100}vw)`;

    // When we hit the cloned final image, reset invisibly *after* the animation finishes
    if (currentIndex === totalImages) {
        group.addEventListener('transitionend', () => {
            group.style.transition = 'none';
            currentIndex = 0;
            group.style.transform = 'translateX(0)';
        }, { once: true });
    }
}, 5000);

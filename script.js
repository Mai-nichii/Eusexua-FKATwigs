function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}

function revealContent() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (isInViewport(content)) {
            content.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealContent);
window.addEventListener('DOMContentLoaded', revealContent);

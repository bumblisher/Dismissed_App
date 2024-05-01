$(document).ready(function() {
    const el = document.querySelectorAll('.sticky-ui');
    const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 1),{ threshold: [1] });
    el.forEach(element => observer.observe(element));
});


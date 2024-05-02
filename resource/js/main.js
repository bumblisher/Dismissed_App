$(document).ready(function() {
    const el = document.querySelectorAll('.grp_tit.sticky');
    const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 1),{ threshold: [1] });
    el.forEach(element => observer.observe(element));
    
});


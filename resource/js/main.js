$(document).ready(function() {
    // const el = document.querySelectorAll('.grp_tit.sticky');
    // const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 1),{ threshold: [1] });
    // el.forEach(element => observer.observe(element));
    
    $(".list_acco .acco_tit").on("click", function(){
        $(this).toggleClass("on");
        $(this).siblings(".acco_cont").slideToggle(300);
    });
});


$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll >= 300) {
            $(".sub02 header").addClass("change");
        } else {
            $(".sub02 header").removeClass("change");
        }
    });

    $('.btn_menu').on('click',function(){
        
        $('.nav').toggleClass("show");
    });
});


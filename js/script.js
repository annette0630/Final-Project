
//buttons + navigating to different sections via side navigation//

$(document).ready(function(){
    $("#first").click(function() {
        var pos = $(".solo-career").offset().top;
        $('html, body').animate({scrollTop: pos}, 1000);
    });

    $("#base-sm").click(function(){
        var pos = $(".base").offset().top;
        $('html, body').animate({scrollTop:pos}, 1000);
    });

    $("#base").click(function(){
        var pos = $(".base").offset().top;
        $('html, body').animate({scrollTop:pos}, 1000);
    });

    $("#story1-sm").click(function(){
        var pos = $(".story1").offset().top;
        console.log(pos);
        $('html, body').animate({scrollTop:pos}, 1000);
    });

    $("#story1").click(function(){
        var pos = $(".story1").offset().top;
        console.log(pos);
        $('html, body').animate({scrollTop:pos}, 1000);
    });

    $("#sheis-sm").click(function(){
        var pos=$(".sheis").offset().top;
        console.log(pos);
        $("html,body").animate({scrollTop:pos}, 1000);
    });

    $("#sheis").click(function(){
        var pos=$(".sheis").offset().top;
        console.log(pos);
        $("html,body").animate({scrollTop:pos}, 1000);
    });

    $("#story2-sm").click(function(){
        var pos=$(".story2").offset().top;
        $('html,body').animate({scrollTop:pos}, 1000);
    });

    $("#story2").click(function(){
        var pos=$(".story2").offset().top;
        $('html,body').animate({scrollTop:pos}, 1000);
    });

    $("#poetartist-sm").click(function(){
        var pos=$(".poetartist").offset().top;
        $('html, body').animate({scrollTop:pos}, 1000);
    });

    $("#poetartist").click(function(){
        var pos=$(".poetartist").offset().top;
        $('html, body').animate({scrollTop:pos}, 1000);
    });


//number counters for each album section//

    $(".base").hover(function(){
        $(".base1").animationCounter({
            start:0,
            end: 99669,
            step:333,
            delay:5
        });

        $(".base2").animationCounter2({
            start:100,
            end:1,
            step: 1,
            delay: 15
        });

        $(".base3").animationCounter2({
            start:100,
            end:1,
            step:1,
            delay:15
        });
    });

    $(".story1").hover(function(){
        $(".story1-1").animationCounter({
            start:0,
            end: 56756,
            step:222,
            delay:5
        });

        $(".story1-2").animationCounter2({
            start:100,
            end:7,
            step: 1,
            delay: 15
        });

        $(".story1-3").animationCounter2({
            start:100,
            end:3,
            step:1,
            delay:15
        });
    });

    $(".sheis").hover(function(){
        $(".sheis1").animationCounter({
            start:0,
            end: 87827,
            step:222,
            delay:5
        });

        $(".sheis2").animationCounter2({
            start:100,
            end:4,
            step: 1,
            delay: 15
        });

        $(".sheis3").animationCounter2({
            start:100,
            end:1,
            step:1,
            delay:15
        });
    });

    $(".story2").hover(function(){
        $(".story2-1").animationCounter({
            start:0,
            end: 71602,
            step:222,
            delay:5
        });

        $(".story2-2").animationCounter2({
            start:100,
            end:5,
            step: 1,
            delay: 15
        });

        $(".story2-3").animationCounter2({
            start:100,
            end:2,
            step:1,
            delay:15
        });
    });

    $(".poetartist").hover(function(){
        $(".pa1").animationCounter({
            start:0,
            end: 219081,
            step:222,
            delay:5
        });

        $(".pa2").animationCounter2({
            start:100,
            end:5,
            step: 1,
            delay: 15
        });

        $(".pa3").animationCounter2({
            start:100,
            end:2,
            step:1,
            delay:15
        });
    });


//fixing side navigation throughout site EXCEPT for top section//
    function scrollevent(){
       var fullscreen = $(window).height();
       if(document.body.scrollTop>fullscreen || document.documentElement.scrollTop > fullscreen){
        $('.all-albums').css({'position':'fixed','z-index':'999'});
    }else{
         $('.all-albums').css('position','absolute');
    }
    };
   window.onscroll=function(){scrollevent()};
});



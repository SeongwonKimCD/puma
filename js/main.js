$(function() {
    $('.navi_left>li:first-child a').mouseover(function() {
        $('.submenu_tt_1').css('display', 'flex')
        $('.submenu_tt_2').css('display', 'none')
        $('.submenu_tt_3').css('display', 'none')
        $('.submenu_tt_4').css('display', 'none')
        $('.submenu_tt_5').css('display', 'none')
        $('.submenu_tt_1').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    });
    $('.submenu_tt_1').mouseover(function() {
        $('.submenu_tt_1').css('display', 'flex')
        $('.submenu_tt_1').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    }).mouseout(function() {
        $('.submenu_tt_1').stop().slideUp(1000)
        $('#header_bg').stop().slideUp(1000)
    });
    $('.navi_left>li:nth-child(2) a').mouseover(function() {
        $('.submenu_tt_2').css('display', 'flex')
        $('.submenu_tt_1').css('display', 'none')
        $('.submenu_tt_3').css('display', 'none')
        $('.submenu_tt_4').css('display', 'none')
        $('.submenu_tt_5').css('display', 'none')
        $('.submenu_tt_2').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    });
    $('.submenu_tt_2').mouseover(function() {
        $('.submenu_tt_2').css('display', 'flex')
        $('.submenu_tt_2').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    }).mouseout(function() {
        $('.submenu_tt_2').stop().slideUp(1000)
        $('#header_bg').stop().slideUp(1000)
    });
    $('.navi_left>li:nth-child(3) a').mouseover(function() {
        $('.submenu_tt_3').css('display', 'flex')
        $('.submenu_tt_1').css('display', 'none')
        $('.submenu_tt_2').css('display', 'none')
        $('.submenu_tt_4').css('display', 'none')
        $('.submenu_tt_5').css('display', 'none')
        $('.submenu_tt_3').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    });
    $('.submenu_tt_3').mouseover(function() {
        $('.submenu_tt_3').css('display', 'flex')
        $('.submenu_tt_3').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    }).mouseout(function() {
        $('.submenu_tt_3').stop().slideUp(1000)
        $('#header_bg').stop().slideUp(1000)
    });
    $('.navi_left>li:nth-child(4) a').mouseover(function() {
        $('.submenu_tt_4').css('display', 'flex')
        $('.submenu_tt_1').css('display', 'none')
        $('.submenu_tt_2').css('display', 'none')
        $('.submenu_tt_3').css('display', 'none')
        $('.submenu_tt_5').css('display', 'none')
        $('.submenu_tt_4').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    });
    $('.submenu_tt_4').mouseover(function() {
        $('.submenu_tt_4').css('display', 'flex')
        $('.submenu_tt_4').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    }).mouseout(function() {
        $('.submenu_tt_4').stop().slideUp(1000)
        $('#header_bg').stop().slideUp(1000)
    });
    $('.navi_left>li:nth-child(5) a').mouseover(function() {
        $('.submenu_tt_5').css('display', 'flex')
        $('.submenu_tt_1').css('display', 'none')
        $('.submenu_tt_2').css('display', 'none')
        $('.submenu_tt_3').css('display', 'none')
        $('.submenu_tt_4').css('display', 'none')
        $('.submenu_tt_5').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    });
    $('.submenu_tt_5').mouseover(function() {
        $('.submenu_tt_5').css('display', 'flex')
        $('.submenu_tt_5').stop().slideDown(2000)
        $('#header_bg').stop().slideDown(2000)
    }).mouseout(function() {
        $('.submenu_tt_5').stop().slideUp(1000)
        $('#header_bg').stop().slideUp(1000)
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#topBtn').fadeIn();
        } else {
          $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    $('.count :button').on({
        'click' : function(e){
            e.preventDefault();
            var $count = $(this).parent('.count').find('.number');
            var now = parseInt($count.val());
            var min = 1;
            var max = 999;
            var num = now;
            if($(this).hasClass('minusbtn')){
                var type = 'm';
            }else{
                var type = 'p';
            }
            if(type=='m'){
                if(now>min){
                    num = now - 1;
                }
            }else{
                if(now<max){
                    num = now + 1;
                }
            }
            if(num != now){
                $count.val(num);
            }
        }
    });

    $('.tabmenu_1').click(function () {
        $('.tabmenu_1').addClass('on');
        $('.tabmenu_2').removeClass('on');
        $('.tabmenu_3').removeClass('on');
        $('.tabmenu_4').removeClass('on');
        $('.tab_1').addClass('on');
        $('.tab_2').removeClass('on');
        $('.tab_3').removeClass('on');
        $('.tab_4').removeClass('on');
    });
    $('.tabmenu_2').click(function () {
        $('.tabmenu_2').addClass('on');
        $('.tabmenu_1').removeClass('on');
        $('.tabmenu_3').removeClass('on');
        $('.tabmenu_4').removeClass('on');
        $('.tab_2').addClass('on');
        $('.tab_1').removeClass('on');
        $('.tab_3').removeClass('on');
        $('.tab_4').removeClass('on');
    });
    $('.tabmenu_3').click(function () {
        $('.tabmenu_3').addClass('on');
        $('.tabmenu_1').removeClass('on');
        $('.tabmenu_2').removeClass('on');
        $('.tabmenu_4').removeClass('on');
        $('.tab_3').addClass('on');
        $('.tab_1').removeClass('on');
        $('.tab_2').removeClass('on');
        $('.tab_4').removeClass('on');
    });
    $('.tabmenu_4').click(function () {
        $('.tabmenu_4').addClass('on');
        $('.tabmenu_1').removeClass('on');
        $('.tabmenu_2').removeClass('on');
        $('.tabmenu_3').removeClass('on');
        $('.tab_4').addClass('on');
        $('.tab_1').removeClass('on');
        $('.tab_2').removeClass('on');
        $('.tab_3').removeClass('on');
    });
});

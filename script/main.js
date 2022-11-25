$(document).ready(function(){
    let slide = $('.slide_box .slide_in:not(.slide_box .slide_in:first-child)');
    let slide_total = ($('.slide_box .slide_in').length);
    let slide_move = 0;
    let slide_nav = $('.slide_menu .pic');
    let slide_count = 1;
    let loop = 1;
    let move_speed = 1;

    $('.slide_box .slide_in:first-child').css({'z-index':5});
    $('.slide_box .slide_in:nth-child(2)').css({'z-index':4});
    $('.slide_box .slide_in:nth-child(3)').css({'z-index':3});
    $('.slide_box .slide_in:nth-child(4)').css({'z-index':2});
    function move_up(){
        slide_move = 1;
        console.log(loop, '반복횟수');
        if(slide_count < 4){
            slide_count++;
        }else{
            slide_count = 1;
        }
        console.log(slide_count, '카운트(n번째 횟수)');
        $('.slide_box .slide_in:first-child').css({'z-index':5}).animate({'opacity': 0,'top':45,'left':45}, (500/move_speed),
        function(){
            $('.slide_box .slide_in:first-child').css({'z-index':1}).animate({'opacity': 1}, (250/move_speed));
            $('.slide_box > li:first-child').insertAfter('.slide_box > li:last-child');
            slide_move = 0;
        });
        $('.slide_box .slide_in:nth-child(2)').css({'z-index':4}).animate({'top': 0,'left': 0}, (750/move_speed));
        $('.slide_box .slide_in:nth-child(3)').css({'z-index':3}).animate({'top': 15,'left': 15}, (750/move_speed));
        $('.slide_box .slide_in:nth-child(4)').css({'z-index':2}).animate({'top': 30,'left': 30}, (750/move_speed));
        loop--;
        console.log(loop, '반복횟수');
        if(loop != 0){
            var move_up_inter = setInterval(function(){
                slide_move = 1;
                console.log(loop, '반복횟수');
                if(slide_count < 4){
                    slide_count++;
                }else{
                    slide_count = 1;
                }
                console.log(slide_count, '카운트(n번째 횟수)');
                $('.slide_box .slide_in:first-child').css({'z-index':5}).animate({'opacity': 0,'top':45,'left':45}, (500/move_speed),
                function(){
                    $('.slide_box .slide_in:first-child').css({'z-index':1}).animate({'opacity': 1}, (250/move_speed));
                    $('.slide_box > li:first-child').insertAfter('.slide_box > li:last-child');
                });
                $('.slide_box .slide_in:nth-child(2)').css({'z-index':4}).animate({'top': 0,'left': 0}, (750/move_speed));
                $('.slide_box .slide_in:nth-child(3)').css({'z-index':3}).animate({'top': 15,'left': 15}, (750/move_speed));
                $('.slide_box .slide_in:nth-child(4)').css({'z-index':2}).animate({'top': 30,'left': 30}, (750/move_speed));
                loop--;
                if(loop == 0){
                    clearInterval(move_up_inter);
                    console.log('반복종료')
                    slide_move = 0;
                    loop = 1;
                }
            }, (750/move_speed), function(){
                loop = 1;
                move_speed = loop;
            })
        }else{
            slide_move = 0;
            loop = 1;
            move_speed = loop;
        }
        console.log(slide_move, '이동가능')
    }
    function move_down(){
        slide_move = 1;
        console.log(loop, '반복횟수');
        if(slide_count > 1){
            slide_count--;
        }else{
            slide_count = 4;
        }
        console.log(slide_count, '카운트(n번째 횟수)');
        $('.slide_box .slide_in:last-child').css({'z-index':1}).animate({'opacity': 0,'top':0,'left':0}, (500/move_speed),
        function(){
            $('.slide_box .slide_in:last-child').css({'z-index':5}).animate({'opacity': 1}, (250/move_speed));
            $('.slide_box > li:last-child').insertBefore('.slide_box > li:first-child');
            slide_move = 0;
        });
        $('.slide_box .slide_in:nth-child(1)').css({'z-index':3}).animate({'top': 15,'left': 15}, (750/move_speed));
        $('.slide_box .slide_in:nth-child(2)').css({'z-index':2}).animate({'top': 30,'left': 30}, (750/move_speed));
        $('.slide_box .slide_in:nth-child(3)').css({'z-index':1}).animate({'top': 45,'left': 45}, (750/move_speed));
        loop--;
        console.log(loop, '반복횟수');
        if(loop != 0){
            slide_move = 1;
            var move_down_inter = setInterval(function(){
                console.log(loop, '반복횟수');
                if(slide_count > 1){
                    slide_count--;
                }else{
                    slide_count = 4;
                }
                console.log(slide_count, '카운트(n번째 횟수)');
                $('.slide_box .slide_in:last-child').css({'z-index':1}).animate({'opacity': 0,'top':0,'left':0}, (500/move_speed),
                function(){
                    $('.slide_box .slide_in:last-child').css({'z-index':5}).animate({'opacity': 1}, (250/move_speed));
                    $('.slide_box > li:last-child').insertBefore('.slide_box > li:first-child');
                });
                $('.slide_box .slide_in:nth-child(1)').css({'z-index':3}).animate({'top': 15,'left': 15}, (750/move_speed));
                $('.slide_box .slide_in:nth-child(2)').css({'z-index':2}).animate({'top': 30,'left': 30}, (750/move_speed));
                $('.slide_box .slide_in:nth-child(3)').css({'z-index':1}).animate({'top': 45,'left': 45}, (750/move_speed));
                loop--;
                if(loop == 0){
                    clearInterval(move_down_inter);
                    console.log('반복종료')
                    slide_move = 0;
                    loop = 1;
                }
            }, (750/move_speed), function(){
                loop = 1;
                move_speed = loop;
            })
        }else{
            loop = 1;
            move_speed = loop;
        }
        console.log(slide_move, '이동가능')
    }
    
    let slide_Timer = setInterval(move_up, 5000);
    
    $('.slide_box .slide_in'),slide_nav.hover(function(){
        clearInterval(slide_Timer);
    },function(){
        clearInterval(slide_Timer);
        loop = 1;
        slide_Timer = setInterval(move_up, 5000);
    });

    slide_nav.click(function(){
        console.log(slide_move);
        if(slide_move != 1){
            if(slide_count-$(this).index()-1 > 0){
                loop = slide_count-($(this).index()+1);
                move_speed = loop;
                console.log(loop, '클릭 당시 반복횟수')
                move_down();
            }else if(slide_count-$(this).index()-1 < 0){
                loop = ($(this).index()+1)-slide_count;
                move_speed = loop;
                console.log(loop, '클릭 당시 반복횟수')
                move_up();
            }
        }
    });
});
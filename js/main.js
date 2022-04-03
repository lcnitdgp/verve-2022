$(function () {

   
    // let holder = document.querySelectorAll('.cardcontainer')[0],
    //     cards = document.querySelectorAll('.card');

    // let preActiveCard = cards[1];
    // let nextActiveCard = cards[2];

    // function scrollLeft() {
    //     holder.classList.remove('next');
    //     holder.classList.remove('reset');
    //     holder.classList.add('next');

    //     preActiveCard.classList.remove('active');
    //     nextActiveCard.classList.add('active');
    //     setTimeout(reset, 2000);
    // }

    // function reset() {
    //     holder.classList.remove('next');
    //     holder.classList.add('reset');
    //     preActiveCard.classList.add('active');
    //     nextActiveCard.classList.remove('active');
    // }

    // setInterval(scrollLeft, 3000);

    function scrollH(e){
        e.preventDefault();
        e.stopPropagation();
        e = window.event || e;
        let delta = Math.max(-1,Math.min(1,(e.wheelDelta || -e.detail)));
        document.querySelector('.container').scrollRight += (delta*80);
        document.querySelector('.container').scrollLeft -= (delta*80);
        
    }
    if(document.querySelector('.container').addEventListener){
        document.querySelector('.container').addEventListener('mousewheel',scrollH,false);
        document.querySelector('.container').addEventListener('DOMMouseScroll',scrollH,false);
    }
    // function scrollH(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e = window.event || e;
    //     let delta = Math.max(-1,Math.min(1,(e.wheelDelta || -e.detail)));
    //     document.querySelector('.container').scrollRight += (delta*80);
    //     document.querySelector('.container').scrollLeft -= (delta*80);

    // }
    // if(document.querySelector('.container').addEventListener){
    //     document.querySelector('.container').addEventListener('mousewheel',scrollH,false);
    //     document.querySelector('.container').addEventListener('DOMMouseScroll',scrollH,false);
    // }
    var link = $('.com__nav-link');
    var linkParent = link.parent('li');
    var section = $('.com__section');
    var sectionContent = section.find('*');

    var switchTab = function () {
        var p = $(this).parent('li');
        var i = p.index();
        var s = section.eq(i);
        var c = s.find('*');

        section.removeClass('active');
        sectionContent.removeAttr('style');
        s.addClass('active');

        c.css({
            transform: 'none',
            opacity: 1
        });

        linkParent.removeClass('active');
        p.addClass('active');

        return false;
    };

    link.on('click', switchTab);

    function activeFirst() {
        section.first().addClass('active');
        section.first().find('*').css({
            transform: 'none',
            opacity: 1
        });
        linkParent.first().addClass('active');
    }

    activeFirst();



});


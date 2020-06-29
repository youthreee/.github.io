$(function () {
    // $('.tabs').tabs();

    var

        $phone = $('#phone'),
        $phoneWidth = $phone.width(),

        $bodybook = $('.bodybook'),

        $menu = $('#menu'),
        $menuOpenBtn = $('#menuOpen'),

        $tabArcodian = $('.tab.arcodian'),
        $tabContents = $('.tabs .contents'),

        $play = $('#play'),
        $intro = $('.opening')

        ;

    setTimeout(function () {
        $phone.addClass('readingMode');
    }, 3500);

    setTimeout(function () {
        $intro.remove();
    }, 3500);


    $menu.addClass('show');

    // $('#otherBooks').addClass('open');

    // var didScroll;
    //
    // $menu.scroll(function(event){
    // 	var scrollTop = $(this).scrollTop();
    // 	var scrollH = this.scrollHeight;
    // 	var height = $(this).height();
    // 	var percent = ((scrollTop / (scrollH - height)) * 100) * 0.1;
    //
    // 	requestAnimationFrame(function(){
    // 		$menu.css('bottom', 0);
    // 	});
    // });

    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    // setInterval(function(){
    // 	if(didScroll){
    // 		hasScrolled();
    // 		didScroll = false;
    // 	}
    // }, 250);

    var isOpenAppbar = false

    function openAppbar() {
        $menu.addClass('show');
        isOpenAppbar = true
    }
    function closeAppbar() {
        $menu.removeClass('show');
        isOpenAppbar = false
    }
    function toggleAppbar() {
        if (!isOpenAppbar) {
            openAppbar()
        } else {
            closeAppbar()
        }
    }

    $menuOpenBtn.on('click', function () {
        toggleAppbar()
    });

    $bodybook.on('click', function () {
        var isOpenAppbar = $menu.css('opacity');
        console.log(isOpenAppbar);
        if ($play.hasClass('open')) {
            $(this).parent().addClass('audioMode', 500);
            $play.toggleClass('off');
        } else {
            if (isOpenAppbar == '0') {
                toggleAppbar()
            } else {
                closeAppbar();
                $(this).parent().toggleClass('readingMode', 500);
            }
        }
    });

    var displayHeight = $('.display').height();
    var detailHeight = $('.detail').height();

    function tabs(tab) {
        tab.on('click', function () {
            var $this = $(this);
            var kind = $this.children('div').attr('class').replace('settings', '').trim();

            //아코디언 메뉴 화살표
            // $(this).prev().toggleClass('open',500);
            //탭 오픈
            // $(this).toggleClass('open',500);
            // if($this.hasClass('open')){
            // 	switch(kind){
            // 		case "display" :
            // 		$this.height(displayHeight);
            // 		break;

            // 		case "detail" :
            // 		$this.height(detailHeight);
            // 		break;
            // 	}
            // } else {
            // 	$this.css('height','');
            // }
        });
    };

    tabs($tabContents);

    //배경선택
    $('#set_bg').children('input').on('click', function () {
        $phone.removeClass();
        var colorName = $('#set_bg').children('input:checked').attr('id');
        $phone.addClass(colorName);
    });

    //밝기 체크
    $('#deviceBrightness').on('click', function () {
        if ($(this).is(':checked')) {
            $('.brightness .slider_wrapper').addClass('auto');
            $('.brightness .slider_wrapper strong span').addClass('show');
        } else {
            $('.brightness .slider_wrapper').removeClass('auto')
            $('.brightness .slider_wrapper strong span').removeClass('show');
        }
    });

    //본문 정렬
    $('#ft_align').on('click', function () {
        if ($(this).is(':checked')) {
            $bodybook.addClass('left_align');
        } else {
            $bodybook.removeClass('left_align')
        }
    });

    //본문 
    $('.visual_detail li').on('touchstart touchmove mousedown', function () {
        $(this).siblings().css('opacity', '0');
        $menu.addClass('touching');
    });
    $('.visual_detail li').on('mouseup touchend', function () {
        var e = $(this).find('input').attr('id')
        if (e == 'ft_align') {
            setTimeout(function () {
                $('.visual_detail li').css('opacity', 1);
                $menu.removeClass('touching');
            }, 1000);
        } else {
            $menu.removeClass('touching');
            $(this).siblings().css('opacity', '1');
        }
    });


    // $tabArcodian.on('click',function(){
    // 	$(this).toggleClass('open',500);
    // 	var $this = $(this);
    // 	console.log($this.next());

    // 	var kind = $this.next().attr('class').replace('settings','').trim();
    // 	if($this.hasClass('open')){
    // 		switch(kind){
    // 			case "display" :
    // 			$this.height(displayHeight);
    // 			break;

    // 			case "detail" :
    // 			$this.height(detailHeight);
    // 			break;
    // 		}
    // 	} else {
    // 		$this.css('height','');
    // 	}
    // });

    $('input[type=range]').each(function () {
        var gageWidth = $(this).val();
        // console.log($(this).val());

        var gageBar = $("<p>").css('width', (gageWidth + '%'));
        gageBar.insertBefore($(this));
    })

    $('input[type=range]').on('input', function () {
        $(this).trigger('change');
        var gageWidth = $(this).val();
        var gageBar = $(this).prev();
        gageBar.css('width', (gageWidth + '%'));
        // console.log(gageBar);
    });

    // 여백 정의하기
    function defineOriginalValue() {
        var leftRightValue = $phoneWidth / 8;
        var topBottomValue = $phone.height() / 10;
        // console.log(leftRightValue);
        // console.log(topBottomValue);
        $bodybook.css({
            marginLeft: leftRightValue,
            marginRight: leftRightValue,
            marginTop: topBottomValue,
            marginBottom: topBottomValue
        });

    }
    defineOriginalValue();

    var t = $bodybook.css('marginTop').replace('px', '');
    var b = $bodybook.css('marginBottom').replace('px', '');

    var l = $bodybook.css('marginTop').replace('px', '');
    var r = $bodybook.css('marginBottom').replace('px', '');

    function stylingTB(t, b, n) {
        $bodybook.css({
            marginTop: t * n,
            marginBottom: b * n
        });
    }

    function stylingLR(l, r, n) {
        $bodybook.css({
            marginLeft: l * n,
            marginRight: r * n
        });
    }

    $('#topBottom').on('input', function () {
        var idx = $(this).val();
        var prompt = $("#tbValue");
        // console.log(idx);
        switch (true) {
            case (idx < 4):
                prompt.text('-5');
                stylingTB(t, b, .15);
                break;
            case (idx < 8):
                prompt.text('-4')
                stylingTB(t, b, .25);
                break;
            case (idx < 12):
                prompt.text('-3')
                stylingTB(t, b, .45);
                break;
            case (idx < 15):
                prompt.text('-2')
                stylingTB(t, b, .65);
                break;
            case (idx < 18):
                prompt.text('-1')
                stylingTB(t, b, .85);
                prompt.removeClass('org');
                break;
            case (idx < 22):
                prompt.text('원본')
                prompt.addClass('org');
                stylingTB(t, b, 1);
                break;
            case (idx < 23):
                prompt.text('1')
                stylingTB(t, b, 1.1);
                prompt.removeClass('org');
                break;
            case (idx < 26):
                prompt.text('2')
                stylingTB(t, b, 1.2);
                break;
            case (idx < 29):
                prompt.text('3')
                stylingTB(t, b, 1.3);
                break;
            case (idx < 32):
                prompt.text('4')
                stylingTB(t, b, 1.4);
                break;
            case (idx < 35):
                prompt.text('5')
                stylingTB(t, b, 1.5);
                break;
            case (idx < 38):
                prompt.text('6')
                stylingTB(t, b, 1.6);
                break;
            case (idx < 40):
                prompt.text('7')
                stylingTB(t, b, 1.7);
                break;
            case (idx < 42):
                prompt.text('8')
                stylingTB(t, b, 1.8);
                break;
            case (idx < 45):
                prompt.text('9')
                stylingTB(t, b, 1.9);
                break;
            case (idx < 48):
                prompt.text('10')
                stylingTB(t, b, 2);
                break;
            case (idx < 51):
                prompt.text('11')
                stylingTB(t, b, 2.1);
                break;
            case (idx < 54):
                prompt.text('12')
                stylingTB(t, b, 2.2);
                break;
            case (idx < 57):
                prompt.text('12')
                stylingTB(t, b, 2.3);
                break;
            case (idx < 60):
                prompt.text('13')
                stylingTB(t, b, 2.4);
                break;
            case (idx < 63):
                prompt.text('14')
                stylingTB(t, b, 2.5);
                break;
            case (idx < 66):
                prompt.text('15');
                stylingTB(t, b, 2.6);
                break;
            case (idx < 69):
                prompt.text('16');
                stylingTB(t, b, 2.7);
                break;
            case (idx < 71):
                prompt.text('17');
                stylingTB(t, b, 2.8);
                break;
            case (idx < 74):
                prompt.text('18');
                stylingTB(t, b, 2.9);
                break;
            case (idx < 77):
                prompt.text('19');
                stylingTB(t, b, 3);
                break;
            case (idx < 80):
                prompt.text('20');
                stylingTB(t, b, 3.1);
                break;
            case (idx < 83):
                prompt.text('21');
                stylingTB(t, b, 3.2);
                break;
            case (idx < 86):
                prompt.text('22');
                stylingTB(t, b, 3.3);
                break;
            case (idx < 95):
                prompt.text('23');
                stylingTB(t, b, 3.4);
                break;
            case (idx < 98):
                prompt.text('24');
                stylingTB(t, b, 3.5);
                break;
        };
    });

    $('#leftRight').on('input', function () {
        var idx = $(this).val();
        var prompt = $("#lrValue");
        // console.log(idx);
        switch (true) {
            case (idx < 6):
                prompt.text('-4');
                stylingLR(l, r, .2);
                break;
            case (idx < 12):
                prompt.text('-3')
                stylingLR(l, r, .4);
                break;
            case (idx < 18):
                prompt.text('-2')
                stylingLR(l, r, .6);
                break;
            case (idx < 24):
                prompt.text('-1')
                stylingLR(l, r, .8);
                prompt.removeClass('org');
                break;
            case (idx < 30):
                prompt.text('원본');
                prompt.addClass('org');
                stylingLR(l, r, 1);
                break;
            case (idx < 36):
                prompt.text('1')
                stylingLR(l, r, 1.05);
                prompt.removeClass('org');
                break;
            case (idx < 42):
                prompt.text('2')
                stylingLR(l, r, 1.1);
                break;
            case (idx < 48):
                prompt.text('3')
                stylingLR(l, r, 1.15);
                break;
            case (idx < 56):
                prompt.text('4')
                stylingLR(l, r, 1.2);
                break;
            case (idx < 62):
                prompt.text('5')
                stylingLR(l, r, 1.25);
                break;
            case (idx < 68):
                prompt.text('6')
                stylingLR(l, r, 1.3);
                break;
            case (idx < 74):
                prompt.text('7')
                stylingLR(l, r, 1.35);
                break;
            case (idx < 74):
                prompt.text('8')
                stylingLR(l, r, 1.4);
                break;
            case (idx < 80):
                prompt.text('9')
                stylingLR(l, r, 1.45);
                break;
            case (idx < 86):
                prompt.text('10')
                stylingLR(l, r, 1.5);
                break;
            case (idx < 92):
                prompt.text('11')
                stylingLR(l, r, 1.55);
                break;
        };
    });

    var lh = $bodybook.children().css('lineHeight');
    console.log(lh);

    function stylingLH(lh, n) {
        $bodybook.css({
            lineHeight: lh * n,
        });
    }

    $('#lineHeight').on('input', function () {
        var idx = $(this).val();
        var prompt = $("#lhValue");
        console.log(idx);
        switch (true) {
            case (idx < 6):
                prompt.text('-4');
                stylingLH(l, .2);
                break;
            case (idx < 50):
                prompt.text('원본');
                stylingLH(l, 1);
                break;
        };
    });


    $('.font_size').on('click', function () {
        $(this).toggleClass('short');
    });

    $('.btn_play').on('click', function () {
        $play.addClass('open')
    });

    $('.quitPlay').on('click', function () {
        $play.removeClass('open');
        $phone.removeClass('audioMode');
        $play.removeClass('off');
    })

    $('.pop_close').on('click', function () {
        $(this).closest('[class*=Modal-list]').removeClass('open');
        console.log($(this).parent());
    });
    $('.btn_close').on('click', function () {
        var test = $(this).parent();
        console.log(test);
    });

    $('.pop_open').on('click', function () {
        var target = $(this).attr('href');
        console.log(target);
        var targetLayer = $(target).addClass('open');
        $menu.removeClass('show');
    });

    $('header').on('click', function () {
        $('#contentsList').addClass('open');
    });


});

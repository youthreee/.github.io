function book(img, n, a, p) {

    strings =
        '<div class="bk_wrap">' +
        '<div class="book_thumb">' +
        '<img src="https://img.millie.co.kr/200x/service/cover' +
        img +
        '" alt="">' +
        '</div>' +
        '<div class="meta">' +
        ' <strong>' +
        n +
        '</strong>' +
        '<p>' +
        a +
        '</p>' +
        '<p class="percentage">' +
        p +
        '</p>' +
        '</div>' +
        '</div>';
    return strings;
}

$(function () {
    var input = $('[class^=input-search-]');

    input.on('click',function(){
        var $this = $(this);
        $this.addClass('focus')
        if($this.hasClass('input-search-main')){
            $this.toggleClass('spread');
        }
    })


    var bk_list = $('.bk_list');
    var bk_infos = {
        books: [
            {
                'img': '/1482716/95c95679c2594a3aaccdc68e28eb6190.jpg',
                'name': '그리스인 조르바',
                'author': '니코스 카잔차키스'
            },
            {
                'img': '/179466375/6ebea36b02414972b21a43167c88a622.jpg',
                'name': '함께 있으면 즐거운 사람 함께 있으면',
                'author': '아리카와 마유미'
            },
            {
                'img': '/179452697/80e19b94d0384cdb92f2fc4e143777b9.jpg',
                'name': '기후변화와 환경의 미래',
                'author': '이승은, 이문현'
            },
            {
                'img': '/179464108/cef371c7876641d880bd5132880ac5d2.jpg',
                'name': '어른의 일',
                'author': '손혜진'
            },
            {
                'img': '/179470305/eb940ebb578d4881ab854e19f603d63c.jpg',
                'name': '브랜드 스토리 : 조 말론 런던',
                'author': '인터비즈'
            }
            , { 'img': '/15830844/d3b3d45201724872a945c7f12a9e6744.jpg', 'name': '클림트', 'author': '전원경' }
            , { 'img': '/15889355/43ca8ed9ee264dec87734fb20afef493.jpg', 'name': '오늘처럼 내가 싫었던 날은 없다', 'author': '글배우' }
            , { 'img': '/14963862/ad7bde20e0af4dc4956ae14fa7696c14.jpg', 'name': '모든 것을 기억하는 남자', 'author': '데이비드 발다치' }
            , { 'img': '/15690046/27995f5dd6bf4bcd8905a175087e8ac5.jpg', 'name': '뉴 코스모스', 'author': '데이비드 아이허' }
            , { 'img': '/14279697/941b9de851214b9389a737d0814f4c10.jpg', 'name': '나의 눈부신 친구', 'author': '엘레나 페란테' }
            , { 'img': '/4457394/8d2313df35fe44c0bca6f3b78f33d401.jpg', 'name': '넌 가끔가다 내 생각을 하지 난 가끔가다 딴 생각을 해', 'author': '원태연' }
            , { 'img': '/11412938/601ea9c6bec04e7f92f1b1c60d55a1c6.jpg', 'name': '어느 소방관의 기도', 'author': '오영환' }
            , { 'img': '/15711418/392c45df88d1403cb8c16c5db65287a5.jpg', 'name': '현대미술은 처음인데요', 'author': '안휘경, 제시카 체라시' }
            , { 'img': '/15853715/6eb2493880b542d282d71d5daf16ee4c.jpg', 'name': '그리스인 조르바: 에디터스 컬렉션', 'author': '니코스 카잔차키스' }
            , { 'img': '/15841860/4353c2b2ec924950bf005cfe4dc6e21e.jpg', 'name': '술 잡학사전', 'author': '클레어 버더/정미나' }
            , { 'img': '/15563016/f22a7101e8944c8dae032f1d60280edb.jpg', 'name': '왈칵 마음이 쏟아지는 날', 'author': '가와이 하야오' }
            , { 'img': '/15903601/8600bc373618444392c64345941f80e6.jpg', 'name': '디즈니의 악당들 1 : 사악한 여왕', 'author': '세레나 발렌티노 지음, 주정자 옮김' }
            , { 'img': '/4017073/e0d36c30dd544273b91686890e03abd6.jpg', 'name': '표백', 'author': '장강명' }
            , { 'img': '/15658087/fbbf25e9a7c74457bdb5f3d68128fda8.jpg', 'name': '실전 인스타그램 마케팅', 'author': '정진수' }
            , { 'img': '/15811119/62a06f6f79804cc4b7ef55d9341c400d.jpg', 'name': '서른의 식사법', 'author': '박민정' }
            , { 'img': '/5234135/45c174ae9deb4671b6feac138e44b97a.jpg', 'name': '우울할 땐 니체', 'author': '발타자르 토마스' }
            , { 'img': '/15839534/0599add4493641e3bc3c18102aaf37b4.jpg', 'name': '아무튼, 외국어', 'author': ' 전문성우 ' }
            , { 'img': '/1558178/341b19cf317a41d08aa252838f211cfc.jpg', 'name': '군주론', 'author': '니콜로 마키아벨리' }
            , { 'img': '/15176428/8371cc43b84847d79aebd4bec347b560.jpg', 'name': '내가 널 파리에서 사랑했을 때', 'author': '제프 다이어' }
            , { 'img': '/13101908/ada31b2dc19d417fa3e4626126fc1d24.jpg', 'name': '침묵의 기술', 'author': '조제프 앙투안 투생 디누아르' }
            , { 'img': '/14479614/04d251ff2fe840f98e61713335ae8c43.jpg', 'name': '동물들의 슬픈 진실에 관한 이야기', 'author': '브룩 바커' }
            , { 'img': '/7773356/53aefd46799449a3a656ec2e810122f3.jpg', 'name': '담론', 'author': '신영복' }
            , { 'img': '/15802249/19347aeb3acf4d6fb073c4c98b036c50.jpg', 'name': '당신과 나 사이', 'author': '김혜남' }
            , { 'img': '/15898670/b4b527eb5cf64034a2908d246785c26a.jpg', 'name': '골든아워 1', 'author': '이국종' }
            , { 'img': '/15816017/6953d820c2164dff9dbce07ac67bdbf4.jpg', 'name': '하버드 첫 강의 시간관리 수업', 'author': ' 책읽찌라 ' }
            , { 'img': '/15848510/a8d6cd55591e435f9a7064051a3824fb.jpg', 'name': '말과 마음 사이', 'author': '이서원' }
            , { 'img': '/15816156/e63f9b68d7074191ba84d27703c3a990.jpg', 'name': '아무도 문밖에서 기다리지 않았다', 'author': '매슈 설리번' }
            , { 'img': '/17953953/6435c93524c54f5ea4af2b50193e1d7d.jpg', 'name': '스노우', 'author': '정용준' }
            , { 'img': '/7880738/e7d2a7aca74c4ee3a46a0f18c24bc5e2.jpg', 'name': '마션', 'author': '앤디 위어' }
            , { 'img': '/15641982/ea08ba559f4a4bf69351d4050f3bdac5.jpg', 'name': '국가란 무엇인가', 'author': '유시민' }
            , { 'img': '/15797969/903a0914e6ec483ebcc5a85a9895baee.jpg', 'name': '세상을 바꾸는 언어', 'author': '양정철' }
            , { 'img': '/12816235/46512638fd87470a84f5d82efbe4fbb8.jpg', 'name': '캐롤', 'author': '퍼트리샤 하이스미스' }
            , { 'img': '/15717044/da98a079f1af49b2b4e6e7be6db973c7.jpg', 'name': '너의 기억을 지워줄게', 'author': '웬디 워커' }
            , { 'img': '/17620430/4d537d33896847348b25de2f982decc5.jpg', 'name': '봄날아빠를 아세요?', 'author': '조남주' }
            , { 'img': '/15834436/7b96a17760f745b680c745703bd668c2.jpg', 'name': '사랑이 아닌 순간이 있을까', 'author': '수수하다' }
            , { 'img': '/15686078/d14204dff13c47b9ab448522a61cfe76.jpg', 'name': '마티네의 끝에서', 'author': '히라노 게이치로' }
            , { 'img': '/7358266/d6aca54d05b54af4884ed5096185a26d.jpg', 'name': '자기만의 방', 'author': '버지니아 울프' }
            , { 'img': '/8976135/f8ee207902cf4b14a2cc9a6c81bb3905.jpg', 'name': '일론 머스크, 미래의 설계자', 'author': '애슐리 반스' }
            , { 'img': '/15742809/9df7283fc3e2407b9f5154dcafdc459d.jpg', 'name': '더 테이블', 'author': '김종관' }
            , { 'img': '/14222232/7159375c1dd542c9a1ed73458144c000.jpg', 'name': '왜 화를 멈출 수 없을까?', 'author': '가타다 다마미' }

        ]
    };

    var i = 0;
    while (i < bk_infos['books'].length) {
        bk_list
            .append(
                book(
                    bk_infos['books'][i]['img'],
                    bk_infos['books'][i]['name'],
                    bk_infos['books'][i]['author'],
                    ''
                )
            );
        i++;
    }

    $('.dropdown-toggle').on('click', function () {
        $('#dim').toggleClass('show');
    })
    $('#dim').on('click', function () {
        $('#dim').toggleClass('show');
    });

    // $('.btn_modal').on('click',function(){
    //     $('body').addClass('modal-open');
    //     var target = $(this).attr('data-target');
    //     console.log(target);
    //     $(target).addClass('show');  
    // });

});

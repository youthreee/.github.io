function book(img,n,a,p) {
    
    strings = 
        '<div class="bk_wrap">'+
        '<div class="book_thumb">'+
            '<img src="https://img.millie.co.kr/200x/service/cover' +
            img +
            '" alt="">'+
        '</div>'+
        '<div class="meta">'+
           ' <strong>'+
           n+
           '</strong>'+
            '<p>'+
            a+
            '</p>'+
            '<p class="percentage">'+
            p+
            '</p>'+
       '</div>'+
    '</div>';
    return strings;
}

$(function () {
    var bk_list = $('.bk_list');
    var bk_infos = {
        books: [
            {
                'img':'/1482716/95c95679c2594a3aaccdc68e28eb6190.jpg',
                'name':'그리스인 조르바',
                'author':'니코스 카잔차키스'
            },
            {
                'img':'/179466375/6ebea36b02414972b21a43167c88a622.jpg',
                'name':'함께 있으면 즐거운 사람 함께 있으면',
                'author':'아리카와 마유미'
            },
            {
                'img':'/179452697/80e19b94d0384cdb92f2fc4e143777b9.jpg',
                'name':'기후변화와 환경의 미래',
                'author':'이승은, 이문현'
            },
            {
                'img':'/179464108/cef371c7876641d880bd5132880ac5d2.jpg',
                'name':'어른의 일',
                'author':'손혜진'
            },
            {
                'img':'/179470305/eb940ebb578d4881ab854e19f603d63c.jpg',
                'name':'브랜드 스토리 : 조 말론 런던',
                'author':'인터비즈'
            }
        ]
    };
        
    var i = 0;
    while(i < bk_infos['books'].length){
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

    $('.dropdown-toggle').on('click', function(){
        $('#dim').toggleClass('show');
    })
    $('#dim').on('click',function(){
        $('#dim').toggleClass('show');
    });
});

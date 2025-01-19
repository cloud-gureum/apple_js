    var button = $('.tab-button');
    var content = $('.tab-content');

    button.on('click', function(){
        // button.removeClass('orange');
        // $(this).addClass('orange');
        // content.removeClass('show');
        
        // var index = $(this).index();

        // content.eq(index).addClass('show');

        탭열기($(this));
    })


    function 탭열기(클릭된버튼){
        button.removeClass('orange');
        $(클릭된버튼).addClass('orange');
        content.removeClass('show');
        
        var index = $(클릭된버튼).index();

        content.eq(index).addClass('show');
    }

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


    var car = {name: '소나타', price: 50000, color: 'white'};
    $('#car-name').html(car.name);
    $('#car-price').html(car.price);


var pants = [28, 30, 32];
var shirts = [95, 100, 105];

    $('.form-select').on('input', function(){
        if($(this).val() == '셔츠'){
            $('.form-select').eq(1).removeClass('form-hide');
            $('.form-select').eq(1).html('');
            shirts.forEach(function(a){
                $('.form-select').eq(1).append(`<option>${a}</option>`)
            })
        }
        else if($(this).val() == '바지'){
            $('.form-select').eq(1).removeClass('form-hide');
            $('.form-select').eq(1).html('');
            pants.forEach(function(a){
                $('.form-select').eq(1).append(`<option>${a}</option>`)
            })
        }
        else{
            $('.form-select').eq(1).addClass('form-hide');
        }
    })
    
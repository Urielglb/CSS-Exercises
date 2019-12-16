$(function(){
    $('img').click(function(){
        var imgId = $(this).attr("id");
        var imgSrc = $(this).attr("src");
        showModal(imgId,imgSrc);
    });

    function showModal(imgId,imgSrc) {
        var img =  imgId;
        var src = imgSrc;
        var img = $('#imgModal')
        img.attr("src",imgSrc);
        $('#modal').css("display","block");
    }
});

$(function(){
    $('.cerrar').click(function(){
        $('#modal').css("display","none")
    });
});

$(function(){
    $('.fa-bars').click(function(){
        $('nav ul li').addClass("show");
        $('.fa-times').css("display","block")
        $('.fa-bars').css("display","none")
    });
});

$(function(){
    $('.fa-times').click(function(){
        $('nav ul li').removeClass("show");
        $('.fa-bars').css("display","block")
        $('.fa-times').css("display","none")
    });
});
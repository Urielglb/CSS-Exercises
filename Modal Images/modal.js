
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
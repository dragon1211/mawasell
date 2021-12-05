$(document).ready(function(){
    $('.question').click(function(e){
        if($(this).next('.answer').hasClass('cc')){
            $('.answer').slideUp();
            $('.answer').removeClass('cc');
            $('.question').removeClass('rotate');
        }
        else {
            $('.answer').slideUp();
            $('.answer').removeClass('cc');
            $('.question').removeClass('rotate');
            $(this).next('.answer').slideDown(); 
            $(this).next('.answer').addClass('cc');
            $(this).addClass('rotate');
        }
    });
});

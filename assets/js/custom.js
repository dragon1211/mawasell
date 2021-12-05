$(document).ready(function(){
    $('.question').click(function(e){
        if($(this).next('.answer').hasClass('cc')){
            $('.answer').slideUp();
            $('.answer').removeClass('cc');
            return;
        }
        else {
            $('.answer').slideUp();
            $('.answer').removeClass('cc');
            $(this).next('.answer').slideDown(); 
            $(this).next('.answer').addClass('cc');
            return;
        }
    });
});

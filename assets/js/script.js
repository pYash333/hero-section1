$(function(){
    $(".header .menu-btn").on("click",function(){
        $(".header .header-desktop .main_menu").slideToggle();
        $(this).toggleClass('open');
    });
    if($(".hero-section").length > 0 ){
        $('.number').counterUp(
            {
                delay: 10,
                time: 1000
            }
        );
    }
})
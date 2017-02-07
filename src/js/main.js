/**
 * Created by Administrator on 2016/8/19.
 */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true,
            autoplay: true,
            autoplayTimeout: 3000
        }
    }
});
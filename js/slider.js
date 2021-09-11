const swiper = new Swiper('.offer', {

    simulateTouch: true,

    sledesPerView: 1,
    loop: true,
    spaceBetween: 100,

    pagination: {

        el: '.swiper-paginationn',

        clickable: true,
    },

    slidesPerGroup: 1,

    autoplay: {

        delay: 12000,

        stopOnLastSlide: false,

        disableOnInteraction: false,
    },

    speed: 800,

});

const swipers = new Swiper('.team', {

    simulateTouch: true,

    sledesPerView: 1,
    loop: true,
    spaceBetween: 100,

    pagination: {

        el: '.swiper-pagination',

        clickable: true,
    },

    slidesPerGroup: 1,

    autoplay: {

        delay: 12000,

        stopOnLastSlide: false,

        disableOnInteraction: false,
    },

    speed: 800,

});
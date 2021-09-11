let pageSlider = new Swiper('.main', {

    wrapperClass: "main__wrapper",
    slideClass: "main__screen",

    direction: 'vertical',


    slidesPerView: 'auto',

    simulateTouch: false,

    keyboard: {

        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,

    },

    mousewheel: {

        sensitivity: 1,

    },

    watchOverflow: true,

    speed: 1500,

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

    init: false,

    on: {

        init: function () {
            menuSlider();
        },

        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },

    },

});

let menuLinks = document.querySelectorAll('.nav__link');
let yakorLinks = document.querySelectorAll('.down__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 1500);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}


function menuSliderRemove(params) {
    let menuLinkActive = document.querySelector('.nav__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

pageSlider.init();



const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.menu__tabs');


tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});


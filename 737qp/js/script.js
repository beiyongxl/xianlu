jconfirm.defaults = {
    title: '提示',
    titleClass: '',
    useBootstrap: false,
    boxWidth: '90vw',
    bgOpacity: '.6',
    animateFromElement: false,
    animation: 'top',
    closeAnimation: 'bottom',
    theme: 'se7en',
    backgroundDismiss: true,
    buttons: {
        ok: {
            text: '确定'
        },
        close: {
            text: '取消'
        }
    }
}
$(document).ready(function () {
    $('#window').on('click', function (e) {
        $(this).removeClass('show')
    })
    var  certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay : true,
        autoplay: {
		    disableOnInteraction: false,
		},
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.4 + .72;
                    }
                    translate = slideProgress * modify * 260 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 7;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }
    
            }
        }
    
    })
    var  certifySwiper2 = new Swiper('#certify2 .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,
        autoplay: true,
        autoplay: {
		    disableOnInteraction: false,
		},
    })
});
var browser = {
    versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1
        };
    }()
}
function showXr(){
    $('html,body').animate({ scrollTop: 0 }, 500);
    $('#xr_window').fadeIn()
}
function hideXr(){
    $('html,body').animate({ scrollTop: 0 }, 500);
    $('#xr_window').fadeOut()
}

function downIos() {
    $('#window_content').attr('src', './images/ios_window.png')
    $('#window').addClass('show')
    document.getElementById("download_if").src = 'https://178f.cc/index2.html?shareName=qbapp'
    location.href = 'itms-services://?action=download-manifest&url=https://www.178ios.com/178/com.qipai178.game/a.plist'
}

function downAndroid() {
    //$('#window_content').attr('src', './images/and_window.png')
    //$('#window').addClass('show')
    document.getElementById("download_if").src = 'http://178f.cc/index2.html?shareName=qbapp'
}
setTimeout(function () {
    $('#time1').html(Math.ceil(Math.random() * 9) + 'ms')
}, 1000)
setTimeout(function () {
    $('#time2').html(Math.ceil(Math.random() * 9) + 'ms')
}, 1500)
setTimeout(function () {
    $('#time3').html(Math.ceil(Math.random() * 9) + 'ms')
}, 2000)
var CRUMINA = {};
(function(_0xa53fx2) {
    'use strict';
    var _0xa53fx3 = _0xa53fx2(window),
        _0xa53fx4 = _0xa53fx2(document),
        _0xa53fx5 = _0xa53fx2('body'),
        _0xa53fx6 = {},
        _0xa53fx7 = _0xa53fx2('#site-header'),
        _0xa53fx8 = _0xa53fx2('#site-footer'),
        _0xa53fx9 = _0xa53fx2('.counter'),
        _0xa53fxa = _0xa53fx2('.skills-item'),
        _0xa53fxb = _0xa53fx2('#primary-menu'),
        _0xa53fxc = _0xa53fx2('#hellopreloader');
    CRUMINA['fixedHeader'] = function() {
        _0xa53fx7['headroom']({
            "\x6F\x66\x66\x73\x65\x74": 210,
            "\x74\x6F\x6C\x65\x72\x61\x6E\x63\x65": 5,
            "\x63\x6C\x61\x73\x73\x65\x73": {
                "\x69\x6E\x69\x74\x69\x61\x6C": 'animated',
                "\x70\x69\x6E\x6E\x65\x64": 'slideDown',
                "\x75\x6E\x70\x69\x6E\x6E\x65\x64": 'slideUp'
            }
        })
    
    };
    CRUMINA['parallaxFooter'] = function() {
        if (_0xa53fx8['length'] && _0xa53fx8['hasClass']('js-fixed-footer')) {
            _0xa53fx8['before']('<div class="block-footer-height"></div>');
            _0xa53fx2('.block-footer-height')['matchHeight']({
                target: _0xa53fx8
            })
        }
    };
    CRUMINA['preloader'] = function() {
        setTimeout(function() {
            _0xa53fxc['fadeOut'](800)
        }, 500);
        return false
    };
    CRUMINA['counters'] = function() {
        if (_0xa53fx9['length']) {
            _0xa53fx9['each'](function() {
                jQuery(this)['waypoint'](function() {
                    _0xa53fx2(this['element'])['find']('span')['countTo']();
                    this['destroy']()
                }, {
                    offset: '95%'
                })
            })
        }
    };
    CRUMINA['progresBars'] = function() {
        if (_0xa53fxa['length']) {
            _0xa53fxa['each'](function() {
                jQuery(this)['waypoint'](function() {
                    _0xa53fx2(this['element'])['find']('.count-animate')['countTo']();
                    _0xa53fx2(this['element'])['find']('.skills-item-meter-active')['fadeTo'](300, 1)['addClass']('skills-animate');
                    this['destroy']()
                }, {
                    offset: '90%'
                })
            })
        }
    };
    CRUMINA['toggleSearch'] = function() {
        setTimeout(function() {
            _0xa53fx2('.search-popup')['toggleClass']('open')
        }, 300);
        _0xa53fx2('.search-full-screen input')['focus']()
    };
    CRUMINA['mediaPopups'] = function() {
        _0xa53fx2('.js-popup-iframe')['magnificPopup']({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        _0xa53fx2('.js-zoom-image, .link-image')['magnificPopup']({
            type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this['st']['image']['markup'] = this['st']['image']['markup']['replace']('mfp-figure', 'mfp-figure mfp-with-anim');
                    this['st']['mainClass'] = 'mfp-zoom-in'
                }
            },
            closeOnContentClick: true,
            midClick: true
        })
    };
    CRUMINA['equalHeight'] = function() {
        _0xa53fx2('.js-equal-child')['find']('.theme-module')['matchHeight']({
            property: 'min-height'
        })
    };
    CRUMINA['IsotopeSort'] = function() {
        var _0xa53fxd = _0xa53fx2('.sorting-container');
        _0xa53fxd['each'](function() {
            var _0xa53fxe = _0xa53fx2(this);
            var _0xa53fxf = (_0xa53fxe['data']('layout')['length']) ? _0xa53fxe['data']('layout') : 'masonry';
            _0xa53fxe['isotope']({
                itemSelector: '.sorting-item',
                layoutMode: _0xa53fxf,
                percentPosition: true
            });
            _0xa53fxe['imagesLoaded']()['progress'](function() {
                _0xa53fxe['isotope']('layout')
            });
            var _0xa53fx10 = _0xa53fxe['siblings']('.sorting-menu')['find']('li');
            _0xa53fx10['on']('click', function() {
                if (_0xa53fx2(this)['hasClass']('active')) {
                    return false
                };
                _0xa53fx2(this)['parent']()['find']('.active')['removeClass']('active');
                _0xa53fx2(this)['addClass']('active');
                var _0xa53fx11 = _0xa53fx2(this)['data']('filter');
                if (typeof _0xa53fx11 != 'undefined') {
                    _0xa53fxe['isotope']({
                        filter: _0xa53fx11
                    });
                    return false
                }
            })
        })
    };
    CRUMINA['initSwiper'] = function() {
        var _0xa53fx12 = 0;
        _0xa53fx2('.swiper-container')['each'](function() {
            var _0xa53fx13 = _0xa53fx2(this);
            var _0xa53fx14 = 'swiper-unique-id-' + _0xa53fx12;
            var _0xa53fx15 = false;
            _0xa53fx13['addClass']('swiper-' + _0xa53fx14 + ' initialized')['attr']('id', _0xa53fx14);
            _0xa53fx13['closest']('.crumina-module')['find']('.swiper-pagination')['addClass']('pagination-' + _0xa53fx14);
            var _0xa53fx16 = (_0xa53fx13['data']('effect')) ? _0xa53fx13['data']('effect') : 'slide',
                _0xa53fx17 = (_0xa53fx13['data']('crossfade')) ? _0xa53fx13['data']('crossfade') : true,
                _0xa53fx18 = (_0xa53fx13['data']('loop') == false) ? _0xa53fx13['data']('loop') : true,
                _0xa53fx19 = (_0xa53fx13['data']('show-items')) ? _0xa53fx13['data']('show-items') : 1,
                _0xa53fx1a = (_0xa53fx13['data']('scroll-items')) ? _0xa53fx13['data']('scroll-items') : 1,
                _0xa53fx1b = (_0xa53fx13['data']('direction')) ? _0xa53fx13['data']('direction') : 'horizontal',
                _0xa53fx1c = (_0xa53fx13['data']('mouse-scroll')) ? _0xa53fx13['data']('mouse-scroll') : false,
                _0xa53fx1d = (_0xa53fx13['data']('autoplay')) ? parseInt(_0xa53fx13['data']('autoplay'), 10) : 0,
                _0xa53fx1e = (_0xa53fx13['hasClass']('auto-height')) ? true : false,
                _0xa53fx1f = (_0xa53fx13['data']('nospace')) ? _0xa53fx13['data']('nospace') : false,
                _0xa53fx20 = (_0xa53fx13['data']('centered-slider')) ? _0xa53fx13['data']('centered-slider') : false,
                _0xa53fx21 = (_0xa53fx13['data']('stretch')) ? _0xa53fx13['data']('stretch') : 0,
                _0xa53fx22 = (_0xa53fx13['data']('depth')) ? _0xa53fx13['data']('depth') : 0,
                _0xa53fx23 = (_0xa53fx19 > 1 && true != _0xa53fx1f) ? 20 : 0;
            if (_0xa53fx19 > 1) {
                _0xa53fx15 = {
                    480: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    }
                }
            };
            _0xa53fx6['swiper-' + _0xa53fx14] = new Swiper('.swiper-' + _0xa53fx14, {
                pagination: '.pagination-' + _0xa53fx14,
                paginationClickable: true,
                direction: _0xa53fx1b,
                mousewheelControl: _0xa53fx1c,
                mousewheelReleaseOnEdges: _0xa53fx1c,
                slidesPerView: _0xa53fx19,
                slidesPerGroup: _0xa53fx1a,
                spaceBetween: _0xa53fx23,
                keyboardControl: true,
                setWrapperSize: true,
                preloadImages: true,
                updateOnImagesReady: true,
                centeredSlides: _0xa53fx20,
                autoplay: _0xa53fx1d,
                autoHeight: _0xa53fx1e,
                loop: _0xa53fx18,
                breakpoints: _0xa53fx15,
                effect: _0xa53fx16,
                fade: {
                    crossFade: _0xa53fx17
                },
                parallax: true,
                onImagesReady: function(_0xa53fx24) {},
                coverflow: {
                    stretch: _0xa53fx21,
                    rotate: 0,
                    depth: _0xa53fx22,
                    modifier: 2,
                    slideShadows: false
                },
                onSlideChangeStart: function(_0xa53fx24) {
                    if (_0xa53fx13['closest']('.crumina-module')['find']('.slider-slides')['length']) {
                        _0xa53fx13['closest']('.crumina-module')['find']('.slider-slides .slide-active')['removeClass']('slide-active');
                        var _0xa53fx25 = _0xa53fx24['slides']['eq'](_0xa53fx24['activeIndex'])['attr']('data-swiper-slide-index');
                        _0xa53fx13['closest']('.crumina-module')['find']('.slider-slides .slides-item')['eq'](_0xa53fx25)['addClass']('slide-active')
                    }
                }
            });
            _0xa53fx12++
        });
        _0xa53fx2('.btn-prev')['on']('click', function() {
            var _0xa53fx26 = _0xa53fx2(this)['closest']('.crumina-module-slider')['find']('.swiper-container')['attr']('id');
            _0xa53fx6['swiper-' + _0xa53fx26]['slidePrev']()
        });
        _0xa53fx2('.btn-next')['on']('click', function() {
            var _0xa53fx26 = _0xa53fx2(this)['closest']('.crumina-module-slider')['find']('.swiper-container')['attr']('id');
            _0xa53fx6['swiper-' + _0xa53fx26]['slideNext']()
        });
        _0xa53fx2('.slider-slides .slides-item')['on']('click', function(_0xa53fx27) {
            _0xa53fx27['preventDefault']();
            var _0xa53fx26 = _0xa53fx2(this)['closest']('.crumina-module-slider')['find']('.swiper-container')['attr']('id');
            if (_0xa53fx2(this)['hasClass']('slide-active')) {
                return false
            };
            var _0xa53fx28 = _0xa53fx2(this)['parent']()['find']('.slides-item')['index'](this);
            _0xa53fx6['swiper-' + _0xa53fx26]['slideTo'](_0xa53fx28 + 1);
            _0xa53fx2(this)['parent']()['find']('.slide-active')['removeClass']('slide-active');
            _0xa53fx2(this)['addClass']('slide-active');
            return false
        })
    };
    CRUMINA['burgerAnimation'] = function() {
        var _0xa53fx29 = 80,
            _0xa53fx2a = 320,
            _0xa53fx2b = 80,
            _0xa53fx2c = 320;

        function _0xa53fx2d(_0xa53fx2e) {
            _0xa53fx2e['draw']('80% - 240', '80%', 0.3, {
                delay: 0.1,
                callback: function() {
                    _0xa53fx2f(_0xa53fx2e)
                }
            })
        }

        function _0xa53fx2f(_0xa53fx2e) {
            _0xa53fx2e['draw']('100% - 545', '100% - 305', 0.6, {
                easing: ease['ease']('elastic-out', 1, 0.3)
            })
        }

        function _0xa53fx30(_0xa53fx2e) {
            _0xa53fx2e['draw'](_0xa53fx2b - 60, _0xa53fx2c + 60, 0.1, {
                callback: function() {
                    _0xa53fx31(_0xa53fx2e)
                }
            })
        }

        function _0xa53fx31(_0xa53fx2e) {
            _0xa53fx2e['draw'](_0xa53fx2b + 120, _0xa53fx2c - 120, 0.3, {
                easing: ease['ease']('bounce-out', 1, 0.3)
            })
        }

        function _0xa53fx32(_0xa53fx2e) {
            _0xa53fx2e['draw']('90% - 240', '90%', 0.1, {
                easing: ease['ease']('elastic-in', 1, 0.3),
                callback: function() {
                    _0xa53fx33(_0xa53fx2e)
                }
            })
        }

        function _0xa53fx33(_0xa53fx2e) {
            _0xa53fx2e['draw']('20% - 240', '20%', 0.3, {
                callback: function() {
                    _0xa53fx34(_0xa53fx2e)
                }
            })
        }

        function _0xa53fx34(_0xa53fx2e) {
            _0xa53fx2e['draw'](_0xa53fx29, _0xa53fx2a, 0.7, {
                easing: ease['ease']('elastic-out', 1, 0.3)
            })
        }

        function _0xa53fx35(_0xa53fx2e) {
            _0xa53fx2e['draw'](_0xa53fx2b, _0xa53fx2c, 0.7, {
                delay: 0.1,
                easing: ease['ease']('elastic-out', 2, 0.4)
            })
        }

        function _0xa53fx36(_0xa53fx37) {
            _0xa53fx37['className'] = 'menu-icon-wrapper scaled'
        }

        function _0xa53fx38(_0xa53fx37) {
            _0xa53fx37['className'] = 'menu-icon-wrapper'
        }
        var _0xa53fx39 = document['getElementById']('pathD'),
            _0xa53fx3a = document['getElementById']('pathE'),
            _0xa53fx3b = document['getElementById']('pathF'),
            _0xa53fx3c = new Segment(_0xa53fx39, _0xa53fx29, _0xa53fx2a),
            _0xa53fx3d = new Segment(_0xa53fx3a, _0xa53fx2b, _0xa53fx2c),
            _0xa53fx3e = new Segment(_0xa53fx3b, _0xa53fx29, _0xa53fx2a),
            _0xa53fx3f = document['getElementById']('menu-icon-wrapper'),
            _0xa53fx40 = document['getElementById']('menu-icon-trigger'),
            _0xa53fx41 = true;
        _0xa53fx3f['style']['visibility'] = 'visible';
        _0xa53fx40['onclick'] = function() {
            _0xa53fx36(_0xa53fx3f);
            if (_0xa53fx41) {
                _0xa53fx2d(_0xa53fx3c);
                _0xa53fx30(_0xa53fx3d);
                _0xa53fx2d(_0xa53fx3e)
            } else {
                _0xa53fx32(_0xa53fx3c);
                _0xa53fx35(_0xa53fx3d);
                _0xa53fx32(_0xa53fx3e)
            };
            _0xa53fx41 = !_0xa53fx41;
            setTimeout(function() {
                _0xa53fx38(_0xa53fx3f)
            }, 450)
        }
    };
    _0xa53fx3['keydown'](function(_0xa53fx42) {
        if (_0xa53fx42['which'] == 27) {
            _0xa53fx5['removeClass']('overlay-enable');
            _0xa53fx2('.search-standard')['removeClass']('open');
            _0xa53fxb['css']({
                "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79": 'visible'
            });
            _0xa53fx2('#menu-icon-trigger')['css']({
                "\x6F\x70\x61\x63\x69\x74\x79": '1'
            });
            _0xa53fx2('.top-bar')['removeClass']('open')
        }
    });
    jQuery('.js-open-search-popup > *')['on']('click', function() {
        CRUMINA['toggleSearch']();
        return false
    });
    jQuery('.overlay_search-close')['on']('click', function() {
        _0xa53fx5['removeClass']('open');
        return false
    });
    jQuery('#top-bar-js')['on']('click', function() {
        _0xa53fx2('.top-bar')['addClass']('open');
        return false
    });
    jQuery('.js-open-search-standard > *')['on']('click', function() {
        _0xa53fxb['find']('.search-standard')['addClass']('open');
        _0xa53fxb['css']({
            "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79": 'hidden'
        });
        _0xa53fx2('#menu-icon-trigger')['css']({
            "\x6F\x70\x61\x63\x69\x74\x79": '0'
        });
        setTimeout(function() {
            _0xa53fxb['find']('.search-input')['focus']()
        }, 100);
        return false
    });
    jQuery('.js-search-close > *')['on']('click', function() {
        _0xa53fxb['find']('.search-standard')['removeClass']('open');
        _0xa53fxb['css']({
            "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79": 'visible'
        });
        _0xa53fx2('#menu-icon-trigger')['css']({
            "\x6F\x70\x61\x63\x69\x74\x79": '1'
        });
        return false
    });
    jQuery('#top-bar-close-js')['on']('click', function() {
        _0xa53fx2('.top-bar')['removeClass']('open');
        return false
    });
    jQuery('.js-message-popup')['on']('click', function() {
        setTimeout(function() {
            _0xa53fx2('.message-popup')['toggleClass']('open')
        }, 300);
        return false
    });
    jQuery('.js-popup-close')['on']('click', function() {
        setTimeout(function() {
            _0xa53fx2('.search-popup')['removeClass']('open')
        }, 400);
        setTimeout(function() {
            _0xa53fx2('.message-popup')['removeClass']('open')
        }, 400);
        setTimeout(function() {
            _0xa53fx2('.popup-gallery')['removeClass']('open')
        }, 400);
        return false
    });
    jQuery('.js-popup-clear-input')['on']('click', function() {
        _0xa53fx2('.js-popup-clear-input')['siblings']('input')['val']('')['focus']()
    });
    jQuery('.accordion-heading')['on']('click', function() {
        jQuery(this)['parents']('.panel-heading')['toggleClass']('active');
        jQuery(this)['parents']('.accordion-panel')['toggleClass']('active')
    });
    jQuery('.back-to-top')['on']('click', function() {
        _0xa53fx2('html,body')['animate']({
            scrollTop: 0
        }, 1200);
        return false
    });
    _0xa53fx4['ready'](function() {
        jQuery(function() {
            jQuery('.social__item.main')['hover'](function() {
                jQuery('.social__item.main')['siblings']('.share-product')['addClass']('open')
            });
            jQuery('.share-product')['mouseleave'](function() {
                jQuery('.share-product')['removeClass']('open')
            })
        });
        _0xa53fx2('.js-pricing-switcher')['on']('click', function() {
            var _0xa53fx43 = _0xa53fx2(this)['prev']()['is'](':checked');
            var _0xa53fx44 = _0xa53fx2(this)['closest']('.crumina-pricings');
            var _0xa53fx45 = _0xa53fx44['find']('.price');
            _0xa53fx45['each'](function() {
                if (_0xa53fx43) {
                    _0xa53fx2(this)['text'](_0xa53fx2(this)['data']('annually'))
                } else {
                    _0xa53fx2(this)['text'](_0xa53fx2(this)['data']('monthly'))
                }
            })
        });
        if (_0xa53fx2('#menu-icon-wrapper')['length']) {
            CRUMINA['burgerAnimation']()
        };
        _0xa53fxb['crumegamenu']({
            showSpeed: 300,
            hideSpeed: 200,
            trigger: 'hover',
            animation: 'drop-up',
            indicatorFirstLevel: '&#xf0d7',
            indicatorSecondLevel: '&#xf105'
        });
        CRUMINA['fixedHeader']();
        CRUMINA['initSwiper']();
        CRUMINA['equalHeight']();
        CRUMINA['mediaPopups']();
        CRUMINA.IsotopeSort();
        CRUMINA['parallaxFooter']();
        _0xa53fx2('select')['niceSelect']();
        CRUMINA['preloader']();
        CRUMINA.Protection();
        CRUMINA['counters']();
        CRUMINA['progresBars']()
    })
})(jQuery);
jQuery(document)['ready'](function(_0xa53fx2) {
    var _0xa53fx46 = _0xa53fx2('.cd-overlay-nav'),
        _0xa53fx47 = _0xa53fx2('.cd-overlay-content'),
        _0xa53fx48 = _0xa53fx2('.cd-primary-nav'),
        _0xa53fx49 = _0xa53fx2('.cd-nav-trigger');
    _0xa53fx4a();
    _0xa53fx2(window)['on']('resize', function() {
        window['requestAnimationFrame'](_0xa53fx4a)
    });
    _0xa53fx49['on']('click', function() {
        if (!_0xa53fx49['hasClass']('close-nav')) {
            _0xa53fx49['addClass']('close-nav');
            _0xa53fx46['children']('span')['velocity']({
                translateZ: 0,
                scaleX: 1,
                scaleY: 1
            }, 500, 'easeInCubic', function() {
                _0xa53fx48['addClass']('fade-in')
            })
        } else {
            _0xa53fx49['removeClass']('close-nav');
            _0xa53fx47['children']('span')['velocity']({
                translateZ: 0,
                scaleX: 1,
                scaleY: 1
            }, 500, 'easeInCubic', function() {
                _0xa53fx48['removeClass']('fade-in');
                _0xa53fx46['children']('span')['velocity']({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0
                }, 0);
                _0xa53fx47['addClass']('is-hidden')['one']('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    _0xa53fx47['children']('span')['velocity']({
                        translateZ: 0,
                        scaleX: 0,
                        scaleY: 0
                    }, 0, function() {
                        _0xa53fx47['removeClass']('is-hidden')
                    })
                });
                if (_0xa53fx2('html')['hasClass']('no-csstransitions')) {
                    _0xa53fx47['children']('span')['velocity']({
                        translateZ: 0,
                        scaleX: 0,
                        scaleY: 0
                    }, 0, function() {
                        _0xa53fx47['removeClass']('is-hidden')
                    })
                }
            })
        }
    });

    function _0xa53fx4a() {
        var _0xa53fx4b = (Math['sqrt'](Math['pow'](_0xa53fx2(window)['height'](), 2) + Math['pow'](_0xa53fx2(window)['width'](), 2)) * 2);
        _0xa53fx46['children']('span')['velocity']({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50)['velocity']({
            height: _0xa53fx4b + 'px',
            width: _0xa53fx4b + 'px',
            top: -(_0xa53fx4b / 2) + 'px',
            left: -(_0xa53fx4b / 2) + 'px'
        }, 0);
        _0xa53fx47['children']('span')['velocity']({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50)['velocity']({
            height: _0xa53fx4b + 'px',
            width: _0xa53fx4b + 'px',
            top: -(_0xa53fx4b / 2) + 'px',
            left: -(_0xa53fx4b / 2) + 'px'
        }, 0)
    }
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function () {
    var b = ("body")
            $('#fullpage').fullpage({
                navigation: true,
                // afterRender: function () {
                // },
                // anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
                // menu: '.gnb',
                afterLoad: function (origin, destination, direction) {
                    var loadedSection = this;
                    //using index
                    if ($(b).hasClass("fp-viewing-0")) {
                        $('.nav').stop().animate({
                            opacity: "0",})
                        $(".back").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        $(".front").stop().animate({
                            "bottom": "-1000px",
                        }, 600)}
                    if ($(b).hasClass("fp-viewing-1")) {
                        $('.nav').stop().animate({
                            opacity: "0",})
                        $(".back").stop().animate({
                            "top": "-6px",
                        }, 600)
                        $(".front").stop().animate({
                            "bottom": "-11px",
                        }, 600)}
                        $(".top").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        $(".left").stop().animate({
                            "bottom": "-1000px",
                        }, 600)
                        
                    if ($(b).hasClass("fp-viewing-2")) {
                        $('.nav').stop().animate({
                            opacity: "0",})
                        $(".back").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        
                        $(".front").stop().animate({
                            "bottom": "-1000px",
                        }, 600)}

                    if ($(b).hasClass("fp-viewing-3")) {
                        $('.nav').stop().animate({
                                opacity: "0",})
                        $(".top").stop().animate({
                            "top": "0px",
                        }, 600)
                        $(".left").stop().animate({
                            "bottom": "0px",
                        }, 600)}
                    
                    if ($(b).hasClass("fp-viewing-4")) {
                        $(".top").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        $(".left").stop().animate({
                            "bottom": "-1000px",
                        }, 600)
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .main').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "0px",
                            "height":"110px",
                        })
                        
                        } 
                    if ($(b).hasClass("fp-viewing-5")) {
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .main').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "110px",
                            "height":"120px",
                        }, 500)} 
                    if ($(b).hasClass("fp-viewing-6")) {
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "230px",
                            "height":"110px",
                        }, 500)}
                        $('.nav .main').stop().animate({
                                opacity: "1",}, 500)
                        $('.nav .sub').stop().animate({
                                opacity: "0",}, 500)
                         
                    if ($(b).hasClass("fp-viewing-7")) {
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .main').stop().animate({
                                opacity: "0",}, 500)
                        $('.nav .sub').stop().animate({
                                opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "0px",
                            "height":"120px",
                        }, 500)} 
                    if ($(b).hasClass("fp-viewing-8")) {
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .main').stop().animate({
                                opacity: "0",}, 500)
                        $('.nav .sub').stop().animate({
                                opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "120px",
                            "height":"150px",
                        }, 500)} 
                    if ($(b).hasClass("fp-viewing-9")) {
                        $('.nav').stop().animate({
                            opacity: "1",}, 500)
                        $('.nav .main').stop().animate({
                                opacity: "0",}, 500)
                        $('.nav .sub').stop().animate({
                                opacity: "1",}, 500)
                        $('.nav .box').stop().animate({
                            "top": "270px",
                            "height":"110px",
                        }, 500)} 
                    }
                })
                   
} )
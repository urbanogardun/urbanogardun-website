(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1OyB":function(t,o,e){"use strict";function n(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}e.d(o,"a",(function(){return n}))},Ji7U:function(t,o,e){"use strict";function n(t,o){return(n=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function i(t,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&n(t,o)}e.d(o,"a",(function(){return i}))},XujJ:function(t,o,e){"use strict";e.r(o);var n=e("1OyB"),i=e("vuIU"),a=e("md7G"),l=e("foSv"),r=e("Ji7U"),s=e("q1tI"),u=e.n(s),c=e("gY+H"),f=e("bDuQ"),d=u.a.createElement,p=function(t){function o(){return Object(n.a)(this,o),Object(a.a)(this,Object(l.a)(o).apply(this,arguments))}return Object(r.a)(o,t),Object(i.a)(o,[{key:"componentDidMount",value:function(){$(window).scrollTop();function t(){$('#header-main-menu ul li a[href^="#"], a.button, .slow-scroll').on("click",(function(t){if("#"===$(this).attr("href"))t.preventDefault();else{if(!($(window).width()<1360))return $("html, body").animate({scrollTop:$(this.hash).offset().top},1500),!1;if(!$(t.target).is(".sub-arrow"))return $("html, body").animate({scrollTop:$(this.hash).offset().top},1500),$("body").removeClass("open done"),$("#toggle").removeClass("on"),!1}}))}function o(){var t=null,o=$(".content-right .section.section-active").data("num"),e=$(window).scrollTop();$(".section").each((function(){var o=$(this).attr("id");$("#"+o).is("*")&&$(window).scrollTop()>=$("#"+o).offset().top-150&&(t=o)})),$("#header-main-menu ul li").removeClass("current").find('a[href*="#'+t+'"]').parent().addClass("current"),$(".content-right .section").removeClass("section-active"),$("#"+t).addClass("section-active"),o!==$("#"+t).data("num")&&(o=$("#"+t).data("num"),$(".current-num span").animate({opacity:"0",left:"-5px"},150,(function(){$(this).text(o).animate({opacity:"1",left:"0"},150),$(".current-big-num").text(o).data("num")}))),e}function e(){$(".skill-circle-wrapper:not(.animation-done)").each((function(){$(this).circleProgress({value:$(this).data("value"),size:254,fill:$(this).data("color"),startAngle:-Math.PI/2,thickness:45,emptyFill:$(this).data("empty-color"),reverse:!0});var t=$(this).offset().top;$(window).scrollTop()+$(window).height()-70>t&&($(this).on("circle-animation-progress",(function(t,o,e){$(this).find(".skill-circle-num").html(Math.round(100*e.toFixed(2).substr(1))+"%")})),$(this).addClass("animation-done"))}))}function n(){$(".skill-fill:not(.animation-done").each((function(t){var o=$(this).offset().top;$(window).scrollTop()+$(window).height()-70>o&&($(this).width($(this).data("fill")),$(this).addClass("animation-done"))}))}function i(){$(".image-slider").each((function(){var t=$(this).data("speed"),o=$(this).data("auto"),e=$(this).data("hover");!0===o?($(this).owlCarousel({loop:!0,autoHeight:!0,smartSpeed:1e3,autoplay:o,autoplayHoverPause:e,autoplayTimeout:t,responsiveClass:!0,items:1}),$(this).on("mouseleave",(function(){$(this).trigger("stop.owl.autoplay"),$(this).trigger("play.owl.autoplay",[o])}))):$(this).owlCarousel({loop:!0,autoHeight:!0,smartSpeed:1e3,autoplay:!1,responsiveClass:!0,items:1})}))}function a(){$("a[data-rel]").each((function(){$(this).attr("rel",$(this).data("rel"))})),$(".grid-item:visible a[rel^='prettyPhoto']").prettyPhoto({slideshow:!1,overlay_gallery:!1,default_width:1280,default_height:720,deeplinking:!1,social_tools:!1,iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'})}function l(t){t.preventDefault(),$("#toggle").off("click"),$("#toggle").toggleClass("on"),$("body").toggleClass("open").delay(300).queue((function(t){$(this).toggleClass("done"),$("#toggle").on("click",l),t()}))}$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",(function(){$("html, body").stop()})),a(),$("input, textarea").on("focus",(function(){$(this).data("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")})),$("input, textarea").on("blur",(function(){$(this).attr("placeholder",$(this).data("placeholder"))})),function(){var t=1;$(".content-right .section").each((function(){$(this).data("num",("0"+t).slice(-2)),t++}))}(),$(".total-pages-num").html(("0"+$(".content-right .section").length).slice(-2)),e(),n(),t(),function(){var t=$(".grid").imagesLoaded((function(){t.isotope({percentPosition:!0,itemSelector:".grid-item",masonry:{columnWidth:".grid-sizer"}}),$(".filters-button-group").on("click",".button",(function(){var o=$(this).attr("data-filter");t.isotope({filter:o}),t.on("arrangeComplete",(function(){a()}))})),$(".button-group").each((function(t,o){var e=$(o);e.on("click",".button",(function(){e.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")}))})),$(".category-filter").on("click",(function(){$(this).toggleClass("filter-open"),$(".category-filter-list").slideToggle("fast")}))}))}(),o(),$(".ajax-portfolio").on("click",(function(o){o.preventDefault();var e=$(this).data("id");$(this).closest(".grid-item").addClass("portfolio-content-loading"),$("#portfolio-grid").addClass("portfoio-items-mask"),$("#pcw-"+e).length?($("html, body").animate({scrollTop:$("#portfolio-wrapper").offset().top-150},400),setTimeout((function(){$("#portfolio-grid, .category-filter, .category-filter-list").addClass("hide"),setTimeout((function(){$("#pcw-"+e).addClass("show"),$(".portfolio-load-content-holder").addClass("show"),$(".grid-item").removeClass("portfolio-content-loading"),$("#portfolio-grid, .category-filter").hide().removeClass("portfoio-items-mask")}),300)}),500)):function(o){$.ajax({url:$('.ajax-portfolio[data-id="'+o+'"]').attr("href"),type:"GET",success:function(e){var n=$(e).find(".portfolio-item-wrapper").html();$(".portfolio-load-content-holder").append('<div id="pcw-'+o+'" class="portfolio-content-wrapper">'+n+"</div>"),$("#pcw-"+o+" .close-icon").length||$("#pcw-"+o).prepend('<div class="close-icon"></div>'),$("html, body").animate({scrollTop:$("#portfolio-wrapper").offset().top-150},400),setTimeout((function(){$("#pcw-"+o).imagesLoaded((function(){i(),t(),$("#portfolio-grid, .category-filter, .category-filter-list").addClass("hide"),setTimeout((function(){$("#pcw-"+o).addClass("show"),$(".portfolio-load-content-holder").addClass("show"),$(".grid-item").removeClass("portfolio-content-loading"),$("#portfolio-grid").hide().removeClass("portfoio-items-mask")}),300),$(".close-icon").on("click",(function(t){var o=$(this).closest(".portfolio-content-wrapper").attr("id").split("-")[1];$(".portfolio-load-content-holder").addClass("viceversa"),$("#portfolio-grid, .category-filter").css("display","block"),setTimeout((function(){$("#pcw-"+o).removeClass("show"),$(".portfolio-load-content-holder").removeClass("viceversa show"),$("#portfolio-grid, .category-filter, .category-filter-list").removeClass("hide")}),300),setTimeout((function(){$("html, body").animate({scrollTop:$("#p-item-"+o).offset().top-150},400)}),500)}))}))}),500)}})}(e)})),$('.contact-form [type="submit"]').on("click",(function(){var t=$("#contact-email").val();/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(t)?window.location.href="mailto:"+t+"?subject="+$("#subject").val()+"&body="+$("#message").val():alert("Your email is not in valid format")})),$(window).on("load",(function(){i(),$("#toggle").on("click",l),$(".main-menu").smartmenus({subMenusSubOffsetX:1,subMenusSubOffsetY:-8}),function(){var t=location.hash;""!==t&&$(t).length?($("html, body").animate({scrollTop:$(t).offset().top},1),$("html, body").animate({scrollTop:$(t).offset().top},1)):($(window).scrollTop(1),$(window).scrollTop(0))}(),$(".doc-loader").fadeOut()})),$(window).on("resize",(function(){e(),n(),o()})),$(window).on("scroll",(function(){e(),n(),o()}))}},{key:"render",value:function(){return d("div",{id:"content",className:"site-content"},d(c.default,null),d(f.default,null))}}]),o}(u.a.Component);o.default=p},foSv:function(t,o,e){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(o,"a",(function(){return n}))},"gY+H":function(t,o,e){"use strict";e.r(o);var n=e("1OyB"),i=e("vuIU"),a=e("md7G"),l=e("foSv"),r=e("Ji7U"),s=e("q1tI"),u=e.n(s),c=u.a.createElement,f=function(t){function o(){return Object(n.a)(this,o),Object(a.a)(this,Object(l.a)(o).apply(this,arguments))}return Object(r.a)(o,t),Object(i.a)(o,[{key:"render",value:function(){return c("div",{className:"content-left"},c("div",{className:"content-left-wrapper"},c("header",null,c("div",{className:"toggle-holder"},c("div",{id:"toggle"},c("div",{className:"menu-line"}))),c("div",{className:"top-pagination"},c("div",{className:"current-num"},c("span",null,"01")),c("div",{className:"pagination-div"}),c("div",{className:"total-pages-num"})),c("div",{className:"menu-holder"},c("div",{className:"menu-wrapper relative"},c("nav",{id:"header-main-menu"},c("ul",{className:"main-menu sm sm-clean"},c("li",null,c("a",{href:"#home"},"Home")),c("li",null,c("a",{href:"#service"},"About Me")),c("li",null,c("a",{href:"#contact"},"Contact")))))),c("div",{className:"my-info-wrapper"},c("div",{className:"my-info"},c("p",{className:"my-info-title"},"NAME"),c("p",{className:"my-info-content"},"Urbano Gardun")),c("div",{className:"my-info"},c("p",{className:"my-info-title"},"ROLE"),c("p",{className:"my-info-content"},"Full Stack Web Developer")),c("div",{className:"my-info"},c("p",{className:"my-info-title"},"EMAIL"),c("p",{className:"my-info-content"},"urbano.gardun@gmail.com")),c("img",{className:"my-info-signature",src:"images/signature.png",alt:""})),c("div",{className:"big-num"},c("div",{className:"current-big-num"},"01"),c("div",{className:"icon-scroll"})))))}}]),o}(u.a.Component);o.default=f},md7G:function(t,o,e){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function a(t,o){return!o||"object"!==i(o)&&"function"!==typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}e.d(o,"a",(function(){return a}))},vuIU:function(t,o,e){"use strict";function n(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,o,e){return o&&n(t.prototype,o),e&&n(t,e),t}e.d(o,"a",(function(){return i}))}}]);
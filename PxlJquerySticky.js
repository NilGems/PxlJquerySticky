/**
 * JQUERY LIBRARY TO APPEND AND REMOVE TO CONTAINER WHEN SCROLL
 * Author: Nilari Shekhar Mondal<niladri.m@pixelsolutionz.com>
 * Company: Pxlsys Technologies Pvt. Ltd.
 * URL: https://pixelsolutionz.com
 */
try {
    if (typeof jQuery !== 'undefined') {
        (function($){
            "use strict";
            $.fn.pixelSticky = function(options) {
                var _self = this,
                    setting = $.extend({
                        container: $('body'),
                        top: 0,
                        classes: 'sticky'
                    }, options),
                    scroll_checking = function(){
                        if(_self.scrollTop() > (+setting.top) && _self.width() > 0) {
                            setting.container.addClass(setting.classes);
                        } else {
                            setting.container.removeClass(setting.classes);
                        }
                    };
                $(_self).scroll(scroll_checking);
                scroll_checking();
            };
        })(jQuery);
    } else {
        console.warn("jQuery is undefined. Pixel Sticky plugin required jQuery to work properly.");
    }
} catch (e) {}

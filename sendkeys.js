'use strict';
(function($){
    $.fn.sendkeys = function (data){
        data = data.replace(/([^{])\n/g, '$1{enter}');
        return this.each( function(){
            bililiteRange(this).bounds('selection').sendkeys(data).select();
            this.focus();
        });
    };

    $.event.special.keydown = $.event.special.keydown || {};
    $.event.special.keydown._default = function (evt){
        if (evt.isTrusted) return false;
        if (evt.ctrlKey || evt.altKey || evt.metaKey) return false;
        if (evt.key == null) return false;
        var target = evt.target;
        if (target.isContentEditable || target.nodeName == 'INPUT' || target.nodeName == 'TEXTAREA') {
            var key = evt.key;
            if (key.length > 1 && key.charAt(0) != '{') key = '{'+key+'}';
            $(target).sendkeys(key);
            return true;
        }
        return false;
    }
})(jQuery)
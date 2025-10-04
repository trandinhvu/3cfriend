//     (c) 2012 Raymond Julin, Keyteq AS
//     Backbone.touch may be freely distributed under the MIT license.
(function (window, factory) {

    "use strict";

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['underscore', 'backbone'], function(){
            return factory.apply(window, arguments);
        });
    } else if (typeof module === 'object' && module.exports) {
        // NodeJS.
        module.exports = factory.call(window, require('underscore'), require('backbone'));
    } else {
        // Browser globals
        factory.call(window, window._, window.Backbone);
    }
}(typeof global === 'object' ? global : this, function (_, Backbone) {

    "use strict";

    // The `getValue` and `delegateEventSplitter` is copied from
    // Backbones source, unfortunately these are not available
    // in any form from Backbone itself
    var getValue = function(object, prop) {
        if (!(object && object[prop])) return null;
        return _.isFunction(object[prop]) ? object[prop]() : object[prop];
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    _.extend(Backbone.View.prototype, {
        _touching : false,

        touchPrevents : true,

        touchThreshold : 10,

        isTouch : this.document && 'ontouchstart' in this.document && !('callPhantom' in this),

        // Drop in replacement for Backbone.View#delegateEvent
        // Enables better touch support
        //
        // If the users device is touch enabled it replace any `click`
        // event with listening for touch(start|move|end) in order to
        // quickly trigger touch taps
        delegateEvents: function(events) {
            if (!(events || (events = getValue(this, 'events')))) return;
            this.undelegateEvents();
            var suffix = '.delegateEvents' + this.cid;
            _(events).each(function(method, key) {
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                var boundHandler = _.bind(this._touchHandler,this);
                method = _.bind(method, this);
                if (this._useTouchHandlers(eventName, selector)) {
                    this.$el.on('touchstart' + suffix, selector, boundHandler);
                    this.$el.on('touchend' + suffix, selector,
                        {method:method},
                        boundHandler
                    );
                    // add the original event listener for devices with touch + mouse
                    this.$el.on(eventName, selector, method);
                }
                else {
                    eventName += suffix;
                    if (selector === '') {
                        this.$el.bind(eventName, method);
                    } else {
                        this.$el.on(eventName, selector, method);
                    }
                }
            }, this);
        },

        // Detect if touch handlers should be used over listening for click
        // Allows custom detection implementations
        _useTouchHandlers : function(eventName, selector)
        {
            return this.isTouch && eventName !== 'click';
        },

        // At the first touchstart we register touchevents as ongoing
        // and as soon as a touch move happens we set touching to false,
        // thus implying that a fastclick will not happen when
        // touchend occurs. If no touchmove happened
        // inbetween touchstart and touchend we trigger the event
        //
        // The `touchPrevents` toggle decides if Backbone.touch
        // will stop propagation and prevent default
        _touchHandler : function(e) {
            var oe = e.originalEvent || e;
            if (!('changedTouches' in oe)) return;
            var touch = oe.changedTouches[0];
            var x = touch.clientX;
            var y = touch.clientY;
            switch (e.type) {
                case 'touchstart':
                    this._touching = [x, y];
                    break;
                case 'touchend':
                    var oldX = this._touching[0];
                    var oldY = this._touching[1];
                    var threshold = this.touchThreshold;
                    if (x < (oldX + threshold) && x > (oldX - threshold) &&
                        y < (oldY + threshold) && y > (oldY - threshold)) {
                        this._touching = false;
                        if (this.touchPrevents) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        e.data.method(e);
                    }
                    break;
            }
        }
    });
    return Backbone;
}));
// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// 2016-07-07, Brian Grinstead, MIT License
!function(a){function b(a,d){if(a=a?a:"",d=d||{},a instanceof b)return a;if(!(this instanceof b))return new b(a,d);var e=c(a);this._originalInput=a,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=P(100*this._a)/100,this._format=d.format||e.format,this._gradientType=d.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=e.ok,this._tc_id=O++}function c(a){var b={r:0,g:0,b:0},c=1,e=null,g=null,i=null,j=!1,k=!1;return"string"==typeof a&&(a=K(a)),"object"==typeof a&&(J(a.r)&&J(a.g)&&J(a.b)?(b=d(a.r,a.g,a.b),j=!0,k="%"===String(a.r).substr(-1)?"prgb":"rgb"):J(a.h)&&J(a.s)&&J(a.v)?(e=G(a.s),g=G(a.v),b=h(a.h,e,g),j=!0,k="hsv"):J(a.h)&&J(a.s)&&J(a.l)&&(e=G(a.s),i=G(a.l),b=f(a.h,e,i),j=!0,k="hsl"),a.hasOwnProperty("a")&&(c=a.a)),c=z(c),{ok:j,format:a.format||k,r:Q(255,R(b.r,0)),g:Q(255,R(b.g,0)),b:Q(255,R(b.b,0)),a:c}}function d(a,b,c){return{r:255*A(a,255),g:255*A(b,255),b:255*A(c,255)}}function e(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+6*(b-a)*(2/3-c):a}var e,f,g;if(a=A(a,360),b=A(b,100),c=A(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(b,c,d){b=6*A(b,360),c=A(c,100),d=A(d,100);var e=a.floor(b),f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6,k=[d,h,g,g,i,d][j],l=[i,d,d,h,g,g][j],m=[g,g,i,d,d,h][j];return{r:255*k,g:255*l,b:255*m}}function i(a,b,c,d){var e=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function j(a,b,c,d,e){var f=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16)),F(H(d))];return e&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function k(a,b,c,d){var e=[F(H(d)),F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return e.join("")}function l(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=B(d.s),b(d)}function m(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=B(d.s),b(d)}function n(a){return b(a).desaturate(100)}function o(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=B(d.l),b(d)}function p(a,c){c=0===c?0:c||10;var d=b(a).toRgb();return d.r=R(0,Q(255,d.r-P(255*-(c/100)))),d.g=R(0,Q(255,d.g-P(255*-(c/100)))),d.b=R(0,Q(255,d.b-P(255*-(c/100)))),b(d)}function q(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=B(d.l),b(d)}function r(a,c){var d=b(a).toHsl(),e=(d.h+c)%360;return d.h=0>e?360+e:e,b(d)}function s(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)}function t(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]}function u(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]}function v(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]}function w(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g}function x(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h}function y(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function z(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function A(b,c){D(b)&&(b="100%");var d=E(b);return b=Q(c,R(0,parseFloat(b))),d&&(b=parseInt(b*c,10)/100),a.abs(b-c)<1e-6?1:b%c/parseFloat(c)}function B(a){return Q(1,R(0,a))}function C(a){return parseInt(a,16)}function D(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function E(a){return"string"==typeof a&&-1!=a.indexOf("%")}function F(a){return 1==a.length?"0"+a:""+a}function G(a){return 1>=a&&(a=100*a+"%"),a}function H(b){return a.round(255*parseFloat(b)).toString(16)}function I(a){return C(a)/255}function J(a){return!!V.CSS_UNIT.exec(a)}function K(a){a=a.replace(M,"").replace(N,"").toLowerCase();var b=!1;if(T[a])a=T[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=V.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=V.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=V.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=V.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=V.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=V.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=V.hex8.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),a:I(c[4]),format:b?"name":"hex8"}:(c=V.hex6.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),format:b?"name":"hex"}:(c=V.hex4.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),a:I(c[4]+""+c[4]),format:b?"name":"hex8"}:(c=V.hex3.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),format:b?"name":"hex"}:!1}function L(a){var b,c;return a=a||{level:"AA",size:"small"},b=(a.level||"AA").toUpperCase(),c=(a.size||"small").toLowerCase(),"AA"!==b&&"AAA"!==b&&(b="AA"),"small"!==c&&"large"!==c&&(c="small"),{level:b,size:c}}var M=/^\s+/,N=/\s+$/,O=0,P=a.round,Q=a.min,R=a.max,S=a.random;b.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var b,c,d,e,f,g,h=this.toRgb();return b=h.r/255,c=h.g/255,d=h.b/255,e=.03928>=b?b/12.92:a.pow((b+.055)/1.055,2.4),f=.03928>=c?c/12.92:a.pow((c+.055)/1.055,2.4),g=.03928>=d?d/12.92:a.pow((d+.055)/1.055,2.4),.2126*e+.7152*f+.0722*g},setAlpha:function(a){return this._a=z(a),this._roundA=P(100*this._a)/100,this},toHsv:function(){var a=g(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=g(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=e(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return i(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return j(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*A(this._r,255))+"%",g:P(100*A(this._g,255))+"%",b:P(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%)":"rgba("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:U[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var c="#"+k(this._r,this._g,this._b,this._a),d=c,e=this._gradientType?"GradientType = 1, ":"";if(a){var f=b(a);d="#"+k(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+c+",endColorstr="+d+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0,e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"hex4"===a||"hex8"===a||"name"===a);return e?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},clone:function(){return b(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(q,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(n,arguments)},spin:function(){return this._applyModification(r,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(s,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(t,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}},b.fromRatio=function(a,c){if("object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]="a"===e?a[e]:G(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&&c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:S(),g:S(),b:S()})},b.mix=function(a,c,d){d=0===d?0:d||50;var e=b(a).toRgb(),f=b(c).toRgb(),g=d/100,h={r:(f.r-e.r)*g+e.r,g:(f.g-e.g)*g+e.g,b:(f.b-e.b)*g+e.b,a:(f.a-e.a)*g+e.a};return b(h)},b.readability=function(c,d){var e=b(c),f=b(d);return(a.max(e.getLuminance(),f.getLuminance())+.05)/(a.min(e.getLuminance(),f.getLuminance())+.05)},b.isReadable=function(a,c,d){var e,f,g=b.readability(a,c);switch(f=!1,e=L(d),e.level+e.size){case"AAsmall":case"AAAlarge":f=g>=4.5;break;case"AAlarge":f=g>=3;break;case"AAAsmall":f=g>=7}return f},b.mostReadable=function(a,c,d){var e,f,g,h,i=null,j=0;d=d||{},f=d.includeFallbackColors,g=d.level,h=d.size;for(var k=0;k<c.length;k++)e=b.readability(a,c[k]),e>j&&(j=e,i=b(c[k]));return b.isReadable(a,i,{level:g,size:h})||!f?i:(d.includeFallbackColors=!1,b.mostReadable(a,["#fff","#000"],d))};var T=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},U=b.hexNames=y(T),V=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{CSS_UNIT:new RegExp(c),rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):window.tinycolor=b}(Math);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore click events
    if (simulatedType == 'click') {
      return;
    }

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles
      true,             // cancelable
      window,           // view
      1,                // detail
      touch.screenX,    // screenX
      touch.screenY,    // screenY
      touch.clientX,    // clientX
      touch.clientY,    // clientY
      false,            // ctrlKey
      false,            // altKey
      false,            // shiftKey
      false,            // metaKey
      0,                // button
      null              // relatedTarget
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Effects Core
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/category/effects-core/
//>>demos: http://jqueryui.com/effect/



var dataSpace = "ui-effects-",
	dataSpaceStyle = "ui-effects-style",
	dataSpaceAnimated = "ui-effects-animated",

	// Create a local jQuery because jQuery Color relies on it and the
	// global may not exist with AMD and a custom build (#10199)
	jQuery = $;

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
( function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
		"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	// Plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

	// A set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {

			// This regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {

			// This regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		} ],

	// JQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},
	support = color.support = {},

	// Element for support tests
	supportElem = jQuery( "<p>" )[ 0 ],

	// Colors = jQuery.Color.names
	colors,

	// Local aliases of functions called often
	each = jQuery.each;

// Determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// Define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
} );

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return ( allowEmpty || !prop.def ) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	// IE will pass in empty strings as value for alpha,
	// which will hit this case
	if ( isNaN( value ) ) {
		return prop.def;
	}

	if ( type.mod ) {

		// We add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return ( value + type.mod ) % type.mod;
	}

	// For now all property types without mod have min and max
	return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// If this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// Exit each( stringParsers ) here because we matched
			return false;
		}
	} );

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// If this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// Named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = jQuery.type( red ),
			rgba = this._rgba = [];

		// More than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			} );
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				} );
			} else {
				each( spaces, function( spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// If the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// If the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// This is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					} );

					// Everything defined but alpha?
					if ( inst[ cache ] &&
							jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

						// Use the default of 1
						inst[ cache ][ 3 ] = 1;
						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				} );
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if ( isCache ) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				} );
			}
			return same;
		} );
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		} );
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// If null, don't override start value
			if ( endValue === null ) {
				return;
			}

			// If null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		} );
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {

		// If we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		} ) );
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			} );

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// Catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			} );

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// Default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		} ).join( "" );
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
} );
color.fn.parse.prototype = color.fn;

// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1 ) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};

each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// Makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// Generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = jQuery.type( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		} );

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// Makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {

		// Alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var vtype = jQuery.type( value ),
				fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
				local = this[ fn ](),
				cur = local[ prop.idx ],
				match;

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = jQuery.type( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	} );
} );

// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, curElem,
					backgroundColor = "";

				if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
						( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						while (
							( backgroundColor === "" || backgroundColor === "transparent" ) &&
							curElem && curElem.style
						) {
							try {
								backgroundColor = jQuery.css( curElem, "backgroundColor" );
								curElem = curElem.parentNode;
							} catch ( e ) {
							}
						}

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				try {
					elem.style[ hook ] = value;
				} catch ( e ) {

					// Wrapped to prevent IE from throwing errors on "invalid" values like
					// 'auto' or 'inherit'
				}
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	} );

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		} );
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {

	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

} )( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
( function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

$.each(
	[ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
	function( _, prop ) {
		$.fx.step[ prop ] = function( fx ) {
			if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
				jQuery.style( fx.elem, prop, fx.end );
				fx.setAttr = true;
			}
		};
	}
);

function getElementStyles( elem ) {
	var key, len,
		style = elem.ownerDocument.defaultView ?
			elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
			elem.currentStyle,
		styles = {};

	if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
		len = style.length;
		while ( len-- ) {
			key = style[ len ];
			if ( typeof style[ key ] === "string" ) {
				styles[ $.camelCase( key ) ] = style[ key ];
			}
		}

	// Support: Opera, IE <9
	} else {
		for ( key in style ) {
			if ( typeof style[ key ] === "string" ) {
				styles[ key ] = style[ key ];
			}
		}
	}

	return styles;
}

function styleDifference( oldStyle, newStyle ) {
	var diff = {},
		name, value;

	for ( name in newStyle ) {
		value = newStyle[ name ];
		if ( oldStyle[ name ] !== value ) {
			if ( !shorthandStyles[ name ] ) {
				if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
					diff[ name ] = value;
				}
			}
		}
	}

	return diff;
}

// Support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

$.effects.animateClass = function( value, duration, easing, callback ) {
	var o = $.speed( duration, easing, callback );

	return this.queue( function() {
		var animated = $( this ),
			baseClass = animated.attr( "class" ) || "",
			applyClassChange,
			allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

		// Map the animated objects to store the original styles.
		allAnimations = allAnimations.map( function() {
			var el = $( this );
			return {
				el: el,
				start: getElementStyles( this )
			};
		} );

		// Apply class change
		applyClassChange = function() {
			$.each( classAnimationActions, function( i, action ) {
				if ( value[ action ] ) {
					animated[ action + "Class" ]( value[ action ] );
				}
			} );
		};
		applyClassChange();

		// Map all animated objects again - calculate new styles and diff
		allAnimations = allAnimations.map( function() {
			this.end = getElementStyles( this.el[ 0 ] );
			this.diff = styleDifference( this.start, this.end );
			return this;
		} );

		// Apply original class
		animated.attr( "class", baseClass );

		// Map all animated objects again - this time collecting a promise
		allAnimations = allAnimations.map( function() {
			var styleInfo = this,
				dfd = $.Deferred(),
				opts = $.extend( {}, o, {
					queue: false,
					complete: function() {
						dfd.resolve( styleInfo );
					}
				} );

			this.el.animate( this.diff, opts );
			return dfd.promise();
		} );

		// Once all animations have completed:
		$.when.apply( $, allAnimations.get() ).done( function() {

			// Set the final class
			applyClassChange();

			// For each animated element,
			// clear all css properties that were animated
			$.each( arguments, function() {
				var el = this.el;
				$.each( this.diff, function( key ) {
					el.css( key, "" );
				} );
			} );

			// This is guarnteed to be there if you use jQuery.speed()
			// it also handles dequeuing the next anim...
			o.complete.call( animated[ 0 ] );
		} );
	} );
};

$.fn.extend( {
	addClass: ( function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return speed ?
				$.effects.animateClass.call( this,
					{ add: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	} )( $.fn.addClass ),

	removeClass: ( function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return arguments.length > 1 ?
				$.effects.animateClass.call( this,
					{ remove: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	} )( $.fn.removeClass ),

	toggleClass: ( function( orig ) {
		return function( classNames, force, speed, easing, callback ) {
			if ( typeof force === "boolean" || force === undefined ) {
				if ( !speed ) {

					// Without speed parameter
					return orig.apply( this, arguments );
				} else {
					return $.effects.animateClass.call( this,
						( force ? { add: classNames } : { remove: classNames } ),
						speed, easing, callback );
				}
			} else {

				// Without force parameter
				return $.effects.animateClass.call( this,
					{ toggle: classNames }, force, speed, easing );
			}
		};
	} )( $.fn.toggleClass ),

	switchClass: function( remove, add, speed, easing, callback ) {
		return $.effects.animateClass.call( this, {
			add: add,
			remove: remove
		}, speed, easing, callback );
	}
} );

} )();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

( function() {

if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
	$.expr.filters.animated = ( function( orig ) {
		return function( elem ) {
			return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
		};
	} )( $.expr.filters.animated );
}

if ( $.uiBackCompat !== false ) {
	$.extend( $.effects, {

		// Saves a set of properties in a data storage
		save: function( element, set ) {
			var i = 0, length = set.length;
			for ( ; i < length; i++ ) {
				if ( set[ i ] !== null ) {
					element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
				}
			}
		},

		// Restores a set of previously saved properties from a data storage
		restore: function( element, set ) {
			var val, i = 0, length = set.length;
			for ( ; i < length; i++ ) {
				if ( set[ i ] !== null ) {
					val = element.data( dataSpace + set[ i ] );
					element.css( set[ i ], val );
				}
			}
		},

		setMode: function( el, mode ) {
			if ( mode === "toggle" ) {
				mode = el.is( ":hidden" ) ? "show" : "hide";
			}
			return mode;
		},

		// Wraps the element around a wrapper that copies position properties
		createWrapper: function( element ) {

			// If the element is already wrapped, return it
			if ( element.parent().is( ".ui-effects-wrapper" ) ) {
				return element.parent();
			}

			// Wrap the element
			var props = {
					width: element.outerWidth( true ),
					height: element.outerHeight( true ),
					"float": element.css( "float" )
				},
				wrapper = $( "<div></div>" )
					.addClass( "ui-effects-wrapper" )
					.css( {
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					} ),

				// Store the size in case width/height are defined in % - Fixes #5245
				size = {
					width: element.width(),
					height: element.height()
				},
				active = document.activeElement;

			// Support: Firefox
			// Firefox incorrectly exposes anonymous content
			// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
			try {
				active.id;
			} catch ( e ) {
				active = document.body;
			}

			element.wrap( wrapper );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).trigger( "focus" );
			}

			// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
			// lose the reference to the wrapped element
			wrapper = element.parent();

			// Transfer positioning properties to the wrapper
			if ( element.css( "position" ) === "static" ) {
				wrapper.css( { position: "relative" } );
				element.css( { position: "relative" } );
			} else {
				$.extend( props, {
					position: element.css( "position" ),
					zIndex: element.css( "z-index" )
				} );
				$.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
					props[ pos ] = element.css( pos );
					if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
						props[ pos ] = "auto";
					}
				} );
				element.css( {
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				} );
			}
			element.css( size );

			return wrapper.css( props ).show();
		},

		removeWrapper: function( element ) {
			var active = document.activeElement;

			if ( element.parent().is( ".ui-effects-wrapper" ) ) {
				element.parent().replaceWith( element );

				// Fixes #7595 - Elements lose focus when wrapped.
				if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
					$( active ).trigger( "focus" );
				}
			}

			return element;
		}
	} );
}

$.extend( $.effects, {
	version: "1.12.1",

	define: function( name, mode, effect ) {
		if ( !effect ) {
			effect = mode;
			mode = "effect";
		}

		$.effects.effect[ name ] = effect;
		$.effects.effect[ name ].mode = mode;

		return effect;
	},

	scaledDimensions: function( element, percent, direction ) {
		if ( percent === 0 ) {
			return {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		}

		var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
			y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

		return {
			height: element.height() * y,
			width: element.width() * x,
			outerHeight: element.outerHeight() * y,
			outerWidth: element.outerWidth() * x
		};

	},

	clipToBox: function( animation ) {
		return {
			width: animation.clip.right - animation.clip.left,
			height: animation.clip.bottom - animation.clip.top,
			left: animation.clip.left,
			top: animation.clip.top
		};
	},

	// Injects recently queued functions to be first in line (after "inprogress")
	unshift: function( element, queueLength, count ) {
		var queue = element.queue();

		if ( queueLength > 1 ) {
			queue.splice.apply( queue,
				[ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
		}
		element.dequeue();
	},

	saveStyle: function( element ) {
		element.data( dataSpaceStyle, element[ 0 ].style.cssText );
	},

	restoreStyle: function( element ) {
		element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
		element.removeData( dataSpaceStyle );
	},

	mode: function( element, mode ) {
		var hidden = element.is( ":hidden" );

		if ( mode === "toggle" ) {
			mode = hidden ? "show" : "hide";
		}
		if ( hidden ? mode === "hide" : mode === "show" ) {
			mode = "none";
		}
		return mode;
	},

	// Translates a [top,left] array into a baseline value
	getBaseline: function( origin, original ) {
		var y, x;

		switch ( origin[ 0 ] ) {
		case "top":
			y = 0;
			break;
		case "middle":
			y = 0.5;
			break;
		case "bottom":
			y = 1;
			break;
		default:
			y = origin[ 0 ] / original.height;
		}

		switch ( origin[ 1 ] ) {
		case "left":
			x = 0;
			break;
		case "center":
			x = 0.5;
			break;
		case "right":
			x = 1;
			break;
		default:
			x = origin[ 1 ] / original.width;
		}

		return {
			x: x,
			y: y
		};
	},

	// Creates a placeholder element so that the original element can be made absolute
	createPlaceholder: function( element ) {
		var placeholder,
			cssPosition = element.css( "position" ),
			position = element.position();

		// Lock in margins first to account for form elements, which
		// will change margin if you explicitly set height
		// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
		// Support: Safari
		element.css( {
			marginTop: element.css( "marginTop" ),
			marginBottom: element.css( "marginBottom" ),
			marginLeft: element.css( "marginLeft" ),
			marginRight: element.css( "marginRight" )
		} )
		.outerWidth( element.outerWidth() )
		.outerHeight( element.outerHeight() );

		if ( /^(static|relative)/.test( cssPosition ) ) {
			cssPosition = "absolute";

			placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

				// Convert inline to inline block to account for inline elements
				// that turn to inline block based on content (like img)
				display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
					"inline-block" :
					"block",
				visibility: "hidden",

				// Margins need to be set to account for margin collapse
				marginTop: element.css( "marginTop" ),
				marginBottom: element.css( "marginBottom" ),
				marginLeft: element.css( "marginLeft" ),
				marginRight: element.css( "marginRight" ),
				"float": element.css( "float" )
			} )
			.outerWidth( element.outerWidth() )
			.outerHeight( element.outerHeight() )
			.addClass( "ui-effects-placeholder" );

			element.data( dataSpace + "placeholder", placeholder );
		}

		element.css( {
			position: cssPosition,
			left: position.left,
			top: position.top
		} );

		return placeholder;
	},

	removePlaceholder: function( element ) {
		var dataKey = dataSpace + "placeholder",
				placeholder = element.data( dataKey );

		if ( placeholder ) {
			placeholder.remove();
			element.removeData( dataKey );
		}
	},

	// Removes a placeholder if it exists and restores
	// properties that were modified during placeholder creation
	cleanUp: function( element ) {
		$.effects.restoreStyle( element );
		$.effects.removePlaceholder( element );
	},

	setTransition: function( element, list, factor, value ) {
		value = value || {};
		$.each( list, function( i, x ) {
			var unit = element.cssUnit( x );
			if ( unit[ 0 ] > 0 ) {
				value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
			}
		} );
		return value;
	}
} );

// Return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

	// Allow passing all options as the first parameter
	if ( $.isPlainObject( effect ) ) {
		options = effect;
		effect = effect.effect;
	}

	// Convert to an object
	effect = { effect: effect };

	// Catch (effect, null, ...)
	if ( options == null ) {
		options = {};
	}

	// Catch (effect, callback)
	if ( $.isFunction( options ) ) {
		callback = options;
		speed = null;
		options = {};
	}

	// Catch (effect, speed, ?)
	if ( typeof options === "number" || $.fx.speeds[ options ] ) {
		callback = speed;
		speed = options;
		options = {};
	}

	// Catch (effect, options, callback)
	if ( $.isFunction( speed ) ) {
		callback = speed;
		speed = null;
	}

	// Add options to effect
	if ( options ) {
		$.extend( effect, options );
	}

	speed = speed || options.duration;
	effect.duration = $.fx.off ? 0 :
		typeof speed === "number" ? speed :
		speed in $.fx.speeds ? $.fx.speeds[ speed ] :
		$.fx.speeds._default;

	effect.complete = callback || options.complete;

	return effect;
}

function standardAnimationOption( option ) {

	// Valid standard speeds (nothing, number, named speed)
	if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
		return true;
	}

	// Invalid strings - treat as "normal" speed
	if ( typeof option === "string" && !$.effects.effect[ option ] ) {
		return true;
	}

	// Complete callback
	if ( $.isFunction( option ) ) {
		return true;
	}

	// Options hash (but not naming an effect)
	if ( typeof option === "object" && !option.effect ) {
		return true;
	}

	// Didn't match any standard API
	return false;
}

$.fn.extend( {
	effect: function( /* effect, options, speed, callback */ ) {
		var args = _normalizeArguments.apply( this, arguments ),
			effectMethod = $.effects.effect[ args.effect ],
			defaultMode = effectMethod.mode,
			queue = args.queue,
			queueName = queue || "fx",
			complete = args.complete,
			mode = args.mode,
			modes = [],
			prefilter = function( next ) {
				var el = $( this ),
					normalizedMode = $.effects.mode( el, mode ) || defaultMode;

				// Sentinel for duck-punching the :animated psuedo-selector
				el.data( dataSpaceAnimated, true );

				// Save effect mode for later use,
				// we can't just call $.effects.mode again later,
				// as the .show() below destroys the initial state
				modes.push( normalizedMode );

				// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
				if ( defaultMode && ( normalizedMode === "show" ||
						( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
					el.show();
				}

				if ( !defaultMode || normalizedMode !== "none" ) {
					$.effects.saveStyle( el );
				}

				if ( $.isFunction( next ) ) {
					next();
				}
			};

		if ( $.fx.off || !effectMethod ) {

			// Delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args.duration, complete );
			} else {
				return this.each( function() {
					if ( complete ) {
						complete.call( this );
					}
				} );
			}
		}

		function run( next ) {
			var elem = $( this );

			function cleanup() {
				elem.removeData( dataSpaceAnimated );

				$.effects.cleanUp( elem );

				if ( args.mode === "hide" ) {
					elem.hide();
				}

				done();
			}

			function done() {
				if ( $.isFunction( complete ) ) {
					complete.call( elem[ 0 ] );
				}

				if ( $.isFunction( next ) ) {
					next();
				}
			}

			// Override mode option on a per element basis,
			// as toggle can be either show or hide depending on element state
			args.mode = modes.shift();

			if ( $.uiBackCompat !== false && !defaultMode ) {
				if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

					// Call the core method to track "olddisplay" properly
					elem[ mode ]();
					done();
				} else {
					effectMethod.call( elem[ 0 ], args, done );
				}
			} else {
				if ( args.mode === "none" ) {

					// Call the core method to track "olddisplay" properly
					elem[ mode ]();
					done();
				} else {
					effectMethod.call( elem[ 0 ], args, cleanup );
				}
			}
		}

		// Run prefilter on all elements first to ensure that
		// any showing or hiding happens before placeholder creation,
		// which ensures that any layout changes are correctly captured.
		return queue === false ?
			this.each( prefilter ).each( run ) :
			this.queue( queueName, prefilter ).queue( queueName, run );
	},

	show: ( function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "show";
				return this.effect.call( this, args );
			}
		};
	} )( $.fn.show ),

	hide: ( function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "hide";
				return this.effect.call( this, args );
			}
		};
	} )( $.fn.hide ),

	toggle: ( function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "toggle";
				return this.effect.call( this, args );
			}
		};
	} )( $.fn.toggle ),

	cssUnit: function( key ) {
		var style = this.css( key ),
			val = [];

		$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
			if ( style.indexOf( unit ) > 0 ) {
				val = [ parseFloat( style ), unit ];
			}
		} );
		return val;
	},

	cssClip: function( clipObj ) {
		if ( clipObj ) {
			return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
				clipObj.bottom + "px " + clipObj.left + "px)" );
		}
		return parseClip( this.css( "clip" ), this );
	},

	transfer: function( options, done ) {
		var element = $( this ),
			target = $( options.to ),
			targetFixed = target.css( "position" ) === "fixed",
			body = $( "body" ),
			fixTop = targetFixed ? body.scrollTop() : 0,
			fixLeft = targetFixed ? body.scrollLeft() : 0,
			endPosition = target.offset(),
			animation = {
				top: endPosition.top - fixTop,
				left: endPosition.left - fixLeft,
				height: target.innerHeight(),
				width: target.innerWidth()
			},
			startPosition = element.offset(),
			transfer = $( "<div class='ui-effects-transfer'></div>" )
				.appendTo( "body" )
				.addClass( options.className )
				.css( {
					top: startPosition.top - fixTop,
					left: startPosition.left - fixLeft,
					height: element.innerHeight(),
					width: element.innerWidth(),
					position: targetFixed ? "fixed" : "absolute"
				} )
				.animate( animation, options.duration, options.easing, function() {
					transfer.remove();
					if ( $.isFunction( done ) ) {
						done();
					}
				} );
	}
} );

function parseClip( str, element ) {
		var outerWidth = element.outerWidth(),
			outerHeight = element.outerHeight(),
			clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
			values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

		return {
			top: parseFloat( values[ 1 ] ) || 0,
			right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
			bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
			left: parseFloat( values[ 4 ] ) || 0
		};
}

$.fx.step.clip = function( fx ) {
	if ( !fx.clipInit ) {
		fx.start = $( fx.elem ).cssClip();
		if ( typeof fx.end === "string" ) {
			fx.end = parseClip( fx.end, fx.elem );
		}
		fx.clipInit = true;
	}

	$( fx.elem ).cssClip( {
		top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
		right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
		bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
		left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
	} );
};

} )();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

( function() {

// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
	baseEasings[ name ] = function( p ) {
		return Math.pow( p, i + 2 );
	};
} );

$.extend( baseEasings, {
	Sine: function( p ) {
		return 1 - Math.cos( p * Math.PI / 2 );
	},
	Circ: function( p ) {
		return 1 - Math.sqrt( 1 - p * p );
	},
	Elastic: function( p ) {
		return p === 0 || p === 1 ? p :
			-Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
	},
	Back: function( p ) {
		return p * p * ( 3 * p - 2 );
	},
	Bounce: function( p ) {
		var pow2,
			bounce = 4;

		while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
		return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
	}
} );

$.each( baseEasings, function( name, easeIn ) {
	$.easing[ "easeIn" + name ] = easeIn;
	$.easing[ "easeOut" + name ] = function( p ) {
		return 1 - easeIn( 1 - p );
	};
	$.easing[ "easeInOut" + name ] = function( p ) {
		return p < 0.5 ?
			easeIn( p * 2 ) / 2 :
			1 - easeIn( p * -2 + 2 ) / 2;
	};
} );

} )();

var effect = $.effects;


/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slide Effect
//>>group: Effects
//>>description: Slides an element in and out of the viewport.
//>>docs: http://api.jqueryui.com/slide-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectSlide = $.effects.define( "slide", "show", function( options, done ) {
	var startClip, startRef,
		element = $( this ),
		map = {
			up: [ "bottom", "top" ],
			down: [ "top", "bottom" ],
			left: [ "right", "left" ],
			right: [ "left", "right" ]
		},
		mode = options.mode,
		direction = options.direction || "left",
		ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
		positiveMotion = ( direction === "up" || direction === "left" ),
		distance = options.distance ||
			element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ),
		animation = {};

	$.effects.createPlaceholder( element );

	startClip = element.cssClip();
	startRef = element.position()[ ref ];

	// Define hide animation
	animation[ ref ] = ( positiveMotion ? -1 : 1 ) * distance + startRef;
	animation.clip = element.cssClip();
	animation.clip[ map[ direction ][ 1 ] ] = animation.clip[ map[ direction ][ 0 ] ];

	// Reverse the animation if we're showing
	if ( mode === "show" ) {
		element.cssClip( animation.clip );
		element.css( ref, animation[ ref ] );
		animation.clip = startClip;
		animation[ ref ] = startRef;
	}

	// Actually animate
	element.animate( animation, {
		queue: false,
		duration: options.duration,
		easing: options.easing,
		complete: done
	} );
} );


;(function(window, undefined){
    "use strict"

    var _valueRanges = {
            rgb:   {r: [0, 255], g: [0, 255], b: [0, 255]},
            hsv:   {h: [0, 360], s: [0, 100], v: [0, 100]},
            hsl:   {h: [0, 360], s: [0, 100], l: [0, 100]},
            cmy:   {c: [0, 100], m: [0, 100], y: [0, 100]},
            cmyk:  {c: [0, 100], m: [0, 100], y: [0, 100], k: [0, 100]},
            Lab:   {L: [0, 100], a: [-128, 127], b: [-128, 127]},
            XYZ:   {X: [0, 100], Y: [0, 100], Z: [0, 100]},
            alpha: {alpha: [0, 1]},
            HEX:   {HEX: [0, 16777215]} // maybe we don't need this
        },

        _instance = {},
        _colors = {},

        // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html for more
        XYZMatrix = { // Observer = 2° (CIE 1931), Illuminant = D65
            X: [ 0.4124564,  0.3575761,  0.1804375],
            Y: [ 0.2126729,  0.7151522,  0.0721750],
            Z: [ 0.0193339,  0.1191920,  0.9503041],
            R: [ 3.2404542, -1.5371385, -0.4985314],
            G: [-0.9692660,  1.8760108,  0.0415560],
            B: [ 0.0556434, -0.2040259,  1.0572252]
        },
        grey = {r: 0.298954, g: 0.586434, b: 0.114612}, // CIE-XYZ 1931
        luminance = {r: 0.2126, g: 0.7152, b: 0.0722}, // W3C 2.0

        _math = window.Math,
        _parseint = window.parseInt,

        Colors = window.Colors = function(options) {
            this.colors = {RND: {}};
            this.options = {
                color: 'rgba(204, 82, 37, 0.8)', // init value(s)...
                XYZMatrix: XYZMatrix,
                // XYZReference: {},
                grey: grey,
                luminance: luminance,
                valueRanges: _valueRanges
                // customBG: '#808080'
                // convertCallback: undefined,
                // allMixDetails: false
            };
            initInstance(this, options || {});
        },
        initInstance = function(THIS, options) {
            var matrix,
                importColor,
                _options = THIS.options,
                customBG;

            focusInstance(THIS);
            for (var option in options) {
                if (options[option] !== undefined) _options[option] = options[option];
            }
            matrix = _options.XYZMatrix;
            if (!options.XYZReference) _options.XYZReference = {
                X: matrix.X[0] + matrix.X[1] + matrix.X[2],
                Y: matrix.Y[0] + matrix.Y[1] + matrix.Y[2],
                Z: matrix.Z[0] + matrix.Z[1] + matrix.Z[2]
            };
            customBG = _options.customBG;
            _options.customBG = (typeof customBG === 'string') ? ColorConverter.txt2color(customBG).rgb : customBG;
            _colors = setColor(THIS.colors, _options.color, undefined, true); // THIS.colors = _colors =
        },
        focusInstance = function(THIS) {
            if (_instance !== THIS) {
                _instance = THIS;
                _colors = THIS.colors;
            }
        };

    Colors.prototype.setColor = function(newCol, type, alpha) {
        focusInstance(this);
        if (newCol) {
            return setColor(this.colors, newCol, type, undefined, alpha);
        } else {
            if (alpha !== undefined) {
                this.colors.alpha = limitValue(alpha, 0, 1);
            }
            return convertColors(type);
        }
    };

    Colors.prototype.getColor = function(type) {
        var result = this.colors, n = 0;

        if (type) {
            type = type.split('.');
            while (result[type[n]]) {
                result = result[type[n++]];
            }
            if (type.length !== n) {
                result = undefined;
            }
        }
        return result;
    };

    Colors.prototype.setCustomBackground = function(col) { // wild gues,... check again...
        focusInstance(this); // needed???
        this.options.customBG = (typeof col === 'string') ? ColorConverter.txt2color(col).rgb : col;
        // return setColor(this.colors, this.options.customBG, 'rgb', true); // !!!!RGB
        return setColor(this.colors, undefined, 'rgb'); // just recalculate existing
    };

    Colors.prototype.saveAsBackground = function() { // alpha
        focusInstance(this); // needed???
        // return setColor(this.colors, this.colors.RND.rgb, 'rgb', true);
        return setColor(this.colors, undefined, 'rgb', true);
    };

    Colors.prototype.convertColor = function(color, type) {
        var convert = ColorConverter,
            ranges = _valueRanges,
            types = type.split('2'),
            fromType = types[0],
            toType = types[1],
            test = /(?:RG|HS|CM|LA)/,
            normalizeFrom = test.test(fromType),
            normalizeTo = test.test(toType),
            exceptions = {LAB: 'Lab'},
            normalize = function(color, type, reverse) {
                var result = {},
                    Lab = type === 'Lab' ? 1 : 0;

                for (var n in color) { // faster (but bigger) way: if/else outside 2 for loops
                    result[n] = reverse ?
                        _math.round(color[n] * (Lab || ranges[type][n][1])) :
                        color[n] / (Lab || ranges[type][n][1]);
                }

                return result;
            };

        fromType = ranges[fromType] ? fromType : exceptions[fromType] || fromType.toLowerCase();
        toType = ranges[toType] ? toType : exceptions[toType] || toType.toLowerCase();

        if (normalizeFrom && type !== 'RGB2HEX') { // from ABC to abc
            color = normalize(color, fromType);
        }
        color = fromType === toType ? color : ( // same type; returns same/normalized version
            convert[fromType + '2' + toType] ? convert[fromType + '2' + toType](color, true) : // existing converter
            toType === 'HEX' ? convert.RGB2HEX(type === 'RGB2HEX' ? color : normalize(fromType === 'rgb' ? color :
                convert[fromType + '2rgb'](color, true), 'rgb', true)) :
            convert['rgb2' + toType](convert[fromType + '2rgb'](color, true), true) // not in ColorConverter
        );
        if (normalizeTo) { // from abc to ABC
            color = normalize(color, toType, true);
        }

        return color;
    };

    Colors.prototype.toString = function(colorMode, forceAlpha) {
        return ColorConverter.color2text((colorMode || 'rgb').toLowerCase(), this.colors, forceAlpha);
    };


    // ------------------------------------------------------ //
    // ---------- Color calculation related stuff  ---------- //
    // -------------------------------------------------------//

    function setColor(colors, color, type, save, alpha) { // color only full range
        if (typeof color === 'string') {
            var color = ColorConverter.txt2color(color); // new object
            type = color.type;
            _colors[type] = color[type];
            alpha = alpha !== undefined ? alpha : color.alpha;
        } else if (color) {
            for (var n in color) {
                colors[type][n] = type === 'Lab' ?
                limitValue(color[n], _valueRanges[type][n][0], _valueRanges[type][n][1]) :
                limitValue(color[n] / _valueRanges[type][n][1], 0 , 1);
            }
        }
        if (alpha !== undefined) {
            colors.alpha = limitValue(+alpha, 0, 1);
        }
        return convertColors(type, save ? colors : undefined);
    }

    function saveAsBackground(RGB, rgb, alpha) {
        var grey = _instance.options.grey,
            color = {};

        color.RGB = {r: RGB.r, g: RGB.g, b: RGB.b};
        color.rgb = {r: rgb.r, g: rgb.g, b: rgb.b};
        color.alpha = alpha;
        // color.RGBLuminance = getLuminance(RGB);
        color.equivalentGrey = _math.round(grey.r * RGB.r + grey.g * RGB.g + grey.b * RGB.b);

        color.rgbaMixBlack = mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
        color.rgbaMixWhite = mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
        color.rgbaMixBlack.luminance = getLuminance(color.rgbaMixBlack, true);
        color.rgbaMixWhite.luminance = getLuminance(color.rgbaMixWhite, true);

        if (_instance.options.customBG) {
            color.rgbaMixCustom = mixColors(rgb, _instance.options.customBG, alpha, 1);
            color.rgbaMixCustom.luminance = getLuminance(color.rgbaMixCustom, true);
            _instance.options.customBG.luminance = getLuminance(_instance.options.customBG, true);
        }

        return color;
    }

    function convertColors(type, colorObj) {
        // console.time('convertColors');
        var _Math = _math,
            colors = colorObj || _colors,
            convert = ColorConverter,
            options = _instance.options,
            ranges = _valueRanges,
            RND = colors.RND,
            // type = colorType, // || _mode.type,
            modes, mode = '', from = '', // value = '',
            exceptions = {hsl: 'hsv', cmyk: 'cmy', rgb: type},
            RGB = RND.rgb, SAVE, SMART;

        if (type !== 'alpha') {
            for (var typ in ranges) {
                if (!ranges[typ][typ]) { // no alpha|HEX
                    if (type !== typ && typ !== 'XYZ') {
                        from = exceptions[typ] || 'rgb';
                        colors[typ] = convert[from + '2' + typ](colors[from]);
                    }

                    if (!RND[typ]) RND[typ] = {};
                    modes = colors[typ];
                    for(mode in modes) {
                        RND[typ][mode] = _Math.round(modes[mode] * (typ === 'Lab' ? 1 : ranges[typ][mode][1]));
                    }
                }
            }
            if (type !== 'Lab') {
                delete colors._rgb;
            }

            RGB = RND.rgb;
            colors.HEX = convert.RGB2HEX(RGB);
            colors.equivalentGrey =
                options.grey.r * colors.rgb.r +
                options.grey.g * colors.rgb.g +
                options.grey.b * colors.rgb.b;
            colors.webSave = SAVE = getClosestWebColor(RGB, 51);
            // colors.webSave.HEX = convert.RGB2HEX(colors.webSave);
            colors.webSmart = SMART = getClosestWebColor(RGB, 17);
            // colors.webSmart.HEX = convert.RGB2HEX(colors.webSmart);
            colors.saveColor =
                RGB.r === SAVE.r && RGB.g === SAVE.g && RGB.b === SAVE.b  ? 'web save' :
                RGB.r === SMART.r && RGB.g === SMART.g && RGB.b === SMART.b  ? 'web smart' : '';
            colors.hueRGB = convert.hue2RGB(colors.hsv.h);

            if (colorObj) {
                colors.background = saveAsBackground(RGB, colors.rgb, colors.alpha);
            }
        } // else RGB = RND.rgb;

        var rgb = colors.rgb, // for better minification...
            alpha = colors.alpha,
            luminance = 'luminance',
            background = colors.background,
            rgbaMixBlack, rgbaMixWhite, rgbaMixCustom,
            rgbaMixBG, rgbaMixBGMixBlack, rgbaMixBGMixWhite, rgbaMixBGMixCustom,
            _mixColors = mixColors,
            _getLuminance = getLuminance,
            _getWCAG2Ratio = getWCAG2Ratio,
            _getHueDelta = getHueDelta;

        rgbaMixBlack = _mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
        rgbaMixBlack[luminance] = _getLuminance(rgbaMixBlack, true);
        colors.rgbaMixBlack = rgbaMixBlack;

        rgbaMixWhite = _mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
        rgbaMixWhite[luminance] = _getLuminance(rgbaMixWhite, true);
        colors.rgbaMixWhite = rgbaMixWhite;

        if (options.allMixDetails) {
            rgbaMixBlack.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBlack[luminance], 0);
            rgbaMixWhite.WCAG2Ratio = _getWCAG2Ratio(rgbaMixWhite[luminance], 1);

            if (options.customBG) {
                rgbaMixCustom = _mixColors(rgb, options.customBG, alpha, 1);
                rgbaMixCustom[luminance] = _getLuminance(rgbaMixCustom, true);
                rgbaMixCustom.WCAG2Ratio = _getWCAG2Ratio(rgbaMixCustom[luminance], options.customBG[luminance]);
                colors.rgbaMixCustom = rgbaMixCustom;
            }

            rgbaMixBG = _mixColors(rgb, background.rgb, alpha, background.alpha);
            rgbaMixBG[luminance] = _getLuminance(rgbaMixBG, true); // ?? do we need this?
            colors.rgbaMixBG = rgbaMixBG;

            rgbaMixBGMixBlack = _mixColors(rgb, background.rgbaMixBlack, alpha, 1);
            rgbaMixBGMixBlack[luminance] = _getLuminance(rgbaMixBGMixBlack, true);
            rgbaMixBGMixBlack.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixBlack[luminance],
                background.rgbaMixBlack[luminance]);
            /* ------ */
            rgbaMixBGMixBlack.luminanceDelta = _Math.abs(
                rgbaMixBGMixBlack[luminance] - background.rgbaMixBlack[luminance]);
            rgbaMixBGMixBlack.hueDelta = _getHueDelta(background.rgbaMixBlack, rgbaMixBGMixBlack, true);
            /* ------ */
            colors.rgbaMixBGMixBlack = rgbaMixBGMixBlack;

            rgbaMixBGMixWhite = _mixColors(rgb, background.rgbaMixWhite, alpha, 1);
            rgbaMixBGMixWhite[luminance] = _getLuminance(rgbaMixBGMixWhite, true);
            rgbaMixBGMixWhite.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixWhite[luminance],
                background.rgbaMixWhite[luminance]);
            /* ------ */
            rgbaMixBGMixWhite.luminanceDelta = _Math.abs(
                rgbaMixBGMixWhite[luminance] - background.rgbaMixWhite[luminance]);
            rgbaMixBGMixWhite.hueDelta = _getHueDelta(background.rgbaMixWhite, rgbaMixBGMixWhite, true);
            /* ------ */
            colors.rgbaMixBGMixWhite = rgbaMixBGMixWhite;
        }

        if (options.customBG) {
            rgbaMixBGMixCustom = _mixColors(rgb, background.rgbaMixCustom, alpha, 1);
            rgbaMixBGMixCustom[luminance] = _getLuminance(rgbaMixBGMixCustom, true);
            rgbaMixBGMixCustom.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixCustom[luminance],
                background.rgbaMixCustom[luminance]);
            colors.rgbaMixBGMixCustom = rgbaMixBGMixCustom;
            /* ------ */
            rgbaMixBGMixCustom.luminanceDelta = _Math.abs(
                rgbaMixBGMixCustom[luminance] - background.rgbaMixCustom[luminance]);
            rgbaMixBGMixCustom.hueDelta = _getHueDelta(background.rgbaMixCustom, rgbaMixBGMixCustom, true);
            /* ------ */
        }

        colors.RGBLuminance = _getLuminance(RGB);
        colors.HUELuminance = _getLuminance(colors.hueRGB);

        // renderVars.readyToRender = true;
        if (options.convertCallback) {
            options.convertCallback(colors, type); //, convert); //, _mode);
        }

        // console.timeEnd('convertColors')
        // if (colorObj)
        return colors;
    }


    // ------------------------------------------------------ //
    // ------------------ color conversion ------------------ //
    // -------------------------------------------------------//

    var ColorConverter = {
        txt2color: function(txt) {
            var color = {},
                parts = txt.replace(/(?:#|\)|%)/g, '').split('('),
                values = (parts[1] || '').split(/,\s*/),
                type = parts[1] ? parts[0].substr(0, 3) : 'rgb',
                m = '';

            color.type = type;
            color[type] = {};
            if (parts[1]) {
                for (var n = 3; n--; ) {
                    m = type[n] || type.charAt(n); // IE7
                    color[type][m] = +values[n] / _valueRanges[type][m][1];
                }
            } else {
                color.rgb = ColorConverter.HEX2rgb(parts[0]);
            }
            // color.color = color[type];
            color.alpha = values[3] ? +values[3] : 1;

            return color;
        },

        color2text: function(colorMode, colors, forceAlpha) {
            var alpha = forceAlpha !== false && _math.round(colors.alpha * 100) / 100,
                hasAlpha = typeof alpha === 'number' &&
                    forceAlpha !== false && (forceAlpha || alpha !== 1),
                RGB = colors.RND.rgb,
                HSL = colors.RND.hsl,
                shouldBeHex = colorMode === 'hex' && hasAlpha,
                isHex = colorMode === 'hex' && !shouldBeHex,
                isRgb = colorMode === 'rgb' || shouldBeHex,
                innerText = isRgb ? RGB.r + ', ' + RGB.g + ', ' + RGB.b :
                    !isHex ? HSL.h + ', ' + HSL.s + '%, ' + HSL.l + '%' :
                    '#' + colors.HEX;

            return isHex ? innerText : (shouldBeHex ? 'rgb' : colorMode) +
                    (hasAlpha ? 'a' : '') + '(' + innerText + (hasAlpha ? ', ' + alpha : '') + ')';
        },

        RGB2HEX: function(RGB) {
            return (
                (RGB.r < 16 ? '0' : '') + RGB.r.toString(16) +
                (RGB.g < 16 ? '0' : '') + RGB.g.toString(16) +
                (RGB.b < 16 ? '0' : '') + RGB.b.toString(16)
            ).toUpperCase();
        },

        HEX2rgb: function(HEX) {
            HEX = HEX.split(''); // IE7
            return {
                r: +('0x' + HEX[0] + HEX[HEX[3] ? 1 : 0]) / 255,
                g: +('0x' + HEX[HEX[3] ? 2 : 1] + (HEX[3] || HEX[1])) / 255,
                b: +('0x' + (HEX[4] || HEX[2]) + (HEX[5] || HEX[2])) / 255
            };
        },

        hue2RGB: function(hue) {
            var _Math = _math,
                h = hue * 6,
                mod = ~~h % 6, // Math.floor(h) -> faster in most browsers
                i = h === 6 ? 0 : (h - mod);

            return {
                r: _Math.round([1, 1 - i, 0, 0, i, 1][mod] * 255),
                g: _Math.round([i, 1, 1, 1 - i, 0, 0][mod] * 255),
                b: _Math.round([0, 0, i, 1, 1, 1 - i][mod] * 255)
            };
        },

        // ------------------------ HSV ------------------------ //

        rgb2hsv: function(rgb) { // faster
            var _Math = _math,
                r = rgb.r,
                g = rgb.g,
                b = rgb.b,
                k = 0, chroma, min, s;

            if (g < b) {
                g = b + (b = g, 0);
                k = -1;
            }
            min = b;
            if (r < g) {
                r = g + (g = r, 0);
                k = -2 / 6 - k;
                min = _Math.min(g, b); // g < b ? g : b; ???
            }
            chroma = r - min;
            s = r ? (chroma / r) : 0;
            return {
                h: s < 1e-15 ? ((_colors && _colors.hsl && _colors.hsl.h) || 0) :
                    chroma ? _Math.abs(k + (g - b) / (6 * chroma)) : 0,
                s: r ? (chroma / r) : ((_colors && _colors.hsv && _colors.hsv.s) || 0), // ??_colors.hsv.s || 0
                v: r
            };
        },

        hsv2rgb: function(hsv) {
            var h = hsv.h * 6,
                s = hsv.s,
                v = hsv.v,
                i = ~~h, // Math.floor(h) -> faster in most browsers
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6;

            return {
                r: [v, q, p, p, t, v][mod],
                g: [t, v, v, q, p, p][mod],
                b: [p, p, t, v, v, q][mod]
            };
        },

        // ------------------------ HSL ------------------------ //

        hsv2hsl: function(hsv) {
            var l = (2 - hsv.s) * hsv.v,
                s = hsv.s * hsv.v;

            s = !hsv.s ? 0 : l < 1 ? (l ? s / l : 0) : s / (2 - l);

            return {
                h: hsv.h,
                s: !hsv.v && !s ? ((_colors && _colors.hsl && _colors.hsl.s) || 0) : s, // ???
                l: l / 2
            };
        },

        rgb2hsl: function(rgb, dependent) { // not used in Color
            var hsv = ColorConverter.rgb2hsv(rgb);

            return ColorConverter.hsv2hsl(dependent ? hsv : (_colors.hsv = hsv));
        },

        hsl2rgb: function(hsl) {
            var h = hsl.h * 6,
                s = hsl.s,
                l = hsl.l,
                v = l < 0.5 ? l * (1 + s) : (l + s) - (s * l),
                m = l + l - v,
                sv = v ? ((v - m) / v) : 0,
                sextant = ~~h, // Math.floor(h) -> faster in most browsers
                fract = h - sextant,
                vsf = v * sv * fract,
                t = m + vsf,
                q = v - vsf,
                mod = sextant % 6;

            return {
                r: [v, q, m, m, t, v][mod],
                g: [t, v, v, q, m, m][mod],
                b: [m, m, t, v, v, q][mod]
            };
        },

        // ------------------------ CMYK ------------------------ //
        // Quote from Wikipedia:
        // "Since RGB and CMYK spaces are both device-dependent spaces, there is no
        // simple or general conversion formula that converts between them.
        // Conversions are generally done through color management systems, using
        // color profiles that describe the spaces being converted. Nevertheless, the
        // conversions cannot be exact, since these spaces have very different gamuts."
        // Translation: the following are just simple RGB to CMY(K) and visa versa conversion functions.

        rgb2cmy: function(rgb) {
            return {
                c: 1 - rgb.r,
                m: 1 - rgb.g,
                y: 1 - rgb.b
            };
        },

        cmy2cmyk: function(cmy) {
            var _Math = _math,
                k = _Math.min(_Math.min(cmy.c, cmy.m), cmy.y),
                t = 1 - k || 1e-20;

            return { // regular
                c: (cmy.c - k) / t,
                m: (cmy.m - k) / t,
                y: (cmy.y - k) / t,
                k: k
            };
        },

        cmyk2cmy: function(cmyk) {
            var k = cmyk.k;

            return { // regular
                c: cmyk.c * (1 - k) + k,
                m: cmyk.m * (1 - k) + k,
                y: cmyk.y * (1 - k) + k
            };
        },

        cmy2rgb: function(cmy) {
            return {
                r: 1 - cmy.c,
                g: 1 - cmy.m,
                b: 1 - cmy.y
            };
        },

        rgb2cmyk: function(rgb, dependent) {
            var cmy = ColorConverter.rgb2cmy(rgb); // doppelt??

            return ColorConverter.cmy2cmyk(dependent ? cmy : (_colors.cmy = cmy));
        },

        cmyk2rgb: function(cmyk, dependent) {
            var cmy = ColorConverter.cmyk2cmy(cmyk); // doppelt??

            return ColorConverter.cmy2rgb(dependent ? cmy : (_colors.cmy = cmy));
        },

        // ------------------------ LAB ------------------------ //

        XYZ2rgb: function(XYZ, skip) {
            var _Math = _math,
                M = _instance.options.XYZMatrix,
                X = XYZ.X,
                Y = XYZ.Y,
                Z = XYZ.Z,
                r = X * M.R[0] + Y * M.R[1] + Z * M.R[2],
                g = X * M.G[0] + Y * M.G[1] + Z * M.G[2],
                b = X * M.B[0] + Y * M.B[1] + Z * M.B[2],
                N = 1 / 2.4;

            M = 0.0031308;

            r = (r > M ? 1.055 * _Math.pow(r, N) - 0.055 : 12.92 * r);
            g = (g > M ? 1.055 * _Math.pow(g, N) - 0.055 : 12.92 * g);
            b = (b > M ? 1.055 * _Math.pow(b, N) - 0.055 : 12.92 * b);

            if (!skip) { // out of gammut
                _colors._rgb = {r: r, g: g, b: b};
            }

            return {
                r: limitValue(r, 0, 1),
                g: limitValue(g, 0, 1),
                b: limitValue(b, 0, 1)
            };
        },

        rgb2XYZ: function(rgb) {
            var _Math = _math,
                M = _instance.options.XYZMatrix,
                r = rgb.r,
                g = rgb.g,
                b = rgb.b,
                N = 0.04045;

            r = (r > N ? _Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
            g = (g > N ? _Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92);
            b = (b > N ? _Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92);

            return {
                X: r * M.X[0] + g * M.X[1] + b * M.X[2],
                Y: r * M.Y[0] + g * M.Y[1] + b * M.Y[2],
                Z: r * M.Z[0] + g * M.Z[1] + b * M.Z[2]
            };
        },

        XYZ2Lab: function(XYZ) {
            var _Math = _math,
                R = _instance.options.XYZReference,
                X = XYZ.X / R.X,
                Y = XYZ.Y / R.Y,
                Z = XYZ.Z / R.Z,
                N = 16 / 116, M = 1 / 3, K = 0.008856, L = 7.787037;

            X = X > K ? _Math.pow(X, M) : (L * X) + N;
            Y = Y > K ? _Math.pow(Y, M) : (L * Y) + N;
            Z = Z > K ? _Math.pow(Z, M) : (L * Z) + N;

            return {
                L: (116 * Y) - 16,
                a: 500 * (X - Y),
                b: 200 * (Y - Z)
            };
        },

        Lab2XYZ: function(Lab) {
            var _Math = _math,
                R = _instance.options.XYZReference,
                Y = (Lab.L + 16) / 116,
                X = Lab.a / 500 + Y,
                Z = Y - Lab.b / 200,
                X3 = _Math.pow(X, 3),
                Y3 = _Math.pow(Y, 3),
                Z3 = _Math.pow(Z, 3),
                N = 16 / 116, K = 0.008856, L = 7.787037;

            return {
                X: (X3 > K ? X3 : (X - N) / L) * R.X,
                Y: (Y3 > K ? Y3 : (Y - N) / L) * R.Y,
                Z: (Z3 > K ? Z3 : (Z - N) / L) * R.Z
            };
        },

        rgb2Lab: function(rgb, dependent) {
            var XYZ = ColorConverter.rgb2XYZ(rgb);

            return ColorConverter.XYZ2Lab(dependent ? XYZ : (_colors.XYZ = XYZ));
        },

        Lab2rgb: function(Lab, dependent) {
            var XYZ = ColorConverter.Lab2XYZ(Lab);

            return ColorConverter.XYZ2rgb(dependent ? XYZ : (_colors.XYZ = XYZ), dependent);
        }
    };

    // ------------------------------------------------------ //
    // ------------------ helper functions ------------------ //
    // -------------------------------------------------------//

    function getClosestWebColor(RGB, val) {
        var out = {},
            tmp = 0,
            half = val / 2;

        for (var n in RGB) {
            tmp = RGB[n] % val; // 51 = 'web save', 17 = 'web smart'
            out[n] = RGB[n] + (tmp > half ? val - tmp : -tmp);
        }
        return out;
    }

    function getHueDelta(rgb1, rgb2, nominal) {
        var _Math = _math;

        return (_Math.max(rgb1.r - rgb2.r, rgb2.r - rgb1.r) +
                _Math.max(rgb1.g - rgb2.g, rgb2.g - rgb1.g) +
                _Math.max(rgb1.b - rgb2.b, rgb2.b - rgb1.b)) * (nominal ? 255 : 1) / 765;
    }

    function getLuminance(rgb, normalized) {
        var div = normalized ? 1 : 255,
            RGB = [rgb.r / div, rgb.g / div, rgb.b / div],
            luminance = _instance.options.luminance;

        for (var i = RGB.length; i--; ) {
            RGB[i] = RGB[i] <= 0.03928 ? RGB[i] / 12.92 : _math.pow(((RGB[i] + 0.055) / 1.055), 2.4);
        }
        return ((luminance.r * RGB[0]) + (luminance.g * RGB[1]) + (luminance.b * RGB[2]));
    }

    function mixColors(topColor, bottomColor, topAlpha, bottomAlpha) {
        var newColor = {},
            alphaTop = (topAlpha !== undefined ? topAlpha : 1),
            alphaBottom = (bottomAlpha !== undefined ? bottomAlpha : 1),
            alpha = alphaTop + alphaBottom * (1 - alphaTop); // 1 - (1 - alphaTop) * (1 - alphaBottom);

        for(var n in topColor) {
            newColor[n] = (topColor[n] * alphaTop + bottomColor[n] * alphaBottom * (1 - alphaTop)) / alpha;
        }
        newColor.a = alpha;
        return newColor;
    }

    function getWCAG2Ratio(lum1, lum2) {
        var ratio = 1;

        if (lum1 >= lum2) {
            ratio = (lum1 + 0.05) / (lum2 + 0.05);
        } else {
            ratio = (lum2 + 0.05) / (lum1 + 0.05);
        }
        return _math.round(ratio * 100) / 100;
    }

    function limitValue(value, min, max) {
        // return Math.max(min, Math.min(max, value)); // faster??
        return (value > max ? max : value < min ? min : value);
    }
})(window);


(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(root, require('jquery'), require('colors'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery', 'colors'], function (jQuery, Colors) {
            return factory(root, jQuery, Colors);
        });
    } else {
        factory(root, root.jQuery, root.Colors);
    }
}(this, function(window, $, Colors, undefined){
    'use strict';

    var $document = $(document),
        _instance = $(),
        _colorPicker,
        _color,
        _options,

        _$trigger, _$UI,
        _$z_slider, _$xy_slider,
        _$xy_cursor, _$z_cursor , _$alpha , _$alpha_cursor,

        _pointermove = 'touchmove.tcp mousemove.tcp pointermove.tcp',
        _pointerdown = 'touchstart.tcp mousedown.tcp pointerdown.tcp',
        _pointerup = 'touchend.tcp mouseup.tcp pointerup.tcp',
        _GPU = false,
        _animate = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || function(cb){cb()},
        _html = '<div class="cp-color-picker"><div class="cp-z-slider"><div c' +
            'lass="cp-z-cursor"></div></div><div class="cp-xy-slider"><div cl' +
            'ass="cp-white"></div><div class="cp-xy-cursor"></div></div><div ' +
            'class="cp-alpha"><div class="cp-alpha-cursor"></div></div></div>',
            // 'grunt-contrib-uglify' puts all this back to one single string...
        _css = '.cp-color-picker{position:absolute;overflow:hidden;padding:6p' +
            'x 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helve' +
            'tica,sans-serif;font-size:12px;font-weight:400;cursor:default;bo' +
            'rder-radius:5px}.cp-color-picker>div{position:relative;overflow:' +
            'hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-' +
            'bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255' +
            ',255,0))}.cp-white{height:100%;width:100%;background:linear-grad' +
            'ient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;w' +
            'idth:10px;height:10px;margin:-5px;border:1px solid #fff;border-r' +
            'adius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin' +
            '-left:6px;height:128px;width:20px;background:linear-gradient(red' +
            ' 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-' +
            'cursor{position:absolute;margin-top:-4px;width:100%;border:4px s' +
            'olid #fff;border-color:transparent #fff;box-sizing:border-box}.c' +
            'p-alpha{clear:both;width:100%;height:16px;margin:6px 0;backgroun' +
            'd:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{' +
            'position:absolute;margin-left:-4px;height:100%;border:4px solid ' +
            '#fff;border-color:#fff transparent;box-sizing:border-box}',

        ColorPicker = function(options) {
            _color = this.color = new Colors(options);
            _options = _color.options;
            _colorPicker = this;
        };

    ColorPicker.prototype = {
        render: preRender,
        toggle: toggle
    };

    function extractValue(elm) {
        return elm.value || elm.getAttribute('value') ||
            $(elm).css('background-color') || '#FFF';
    }

    function resolveEventType(event) {
        event = event.originalEvent && event.originalEvent.touches ?
            event.originalEvent.touches[0] : event;

        return event.originalEvent ? event.originalEvent : event;
    }

    function findElement($elm) {
        return $($elm.find(_options.doRender)[0] || $elm[0]);
    }

    function toggle(event) {
        var $this = $(this),
            position = $this.offset(),
            $window = $(window),
            gap = _options.gap;

        if (event) {
            _$trigger = findElement($this);
            _$trigger._colorMode = _$trigger.data('colorMode');

            _colorPicker.$trigger = $this;

            (_$UI || build()).css(
                _options.positionCallback.call(_colorPicker, $this) ||
                {'left': (_$UI._left = position.left) -
                    ((_$UI._left += _$UI._width -
                    ($window.scrollLeft() + $window.width())) + gap > 0 ?
                    _$UI._left + gap : 0),
                'top': (_$UI._top = position.top + $this.outerHeight()) -
                    ((_$UI._top += _$UI._height -
                    ($window.scrollTop() + $window.height())) + gap > 0 ?
                    _$UI._top + gap : 0)
            }).show(_options.animationSpeed, function() {
                if (event === true) { // resize, scroll
                    return;
                }
                _$alpha.toggle(!!_options.opacity)._width = _$alpha.width();
                _$xy_slider._width = _$xy_slider.width();
                _$xy_slider._height = _$xy_slider.height();
                _$z_slider._height = _$z_slider.height();
                _color.setColor(extractValue(_$trigger[0]));

                preRender(true);
            })
            .off('.tcp').on(_pointerdown,
                '.cp-xy-slider,.cp-z-slider,.cp-alpha', pointerdown);
        } else if (_colorPicker.$trigger) {
            $(_$UI).hide(_options.animationSpeed, function() {
                preRender(false);
                _colorPicker.$trigger = null;
            }).off('.tcp');
        }
    }

    function build() {
        $('head')[_options.cssPrepend ? 'prepend' : 'append']
            ('<style type="text/css" id="tinyColorPickerStyles">' +
                (_options.css || _css) + (_options.cssAddon || '') + '</style>');

        return $(_html).css({'margin': _options.margin})
            .appendTo('body')
            .show(0, function() {
                _colorPicker.$UI = _$UI = $(this);

                _GPU = _options.GPU && _$UI.css('perspective') !== undefined;
                _$z_slider = $('.cp-z-slider', this);
                _$xy_slider = $('.cp-xy-slider', this);
                _$xy_cursor = $('.cp-xy-cursor', this);
                _$z_cursor = $('.cp-z-cursor', this);
                _$alpha = $('.cp-alpha', this);
                _$alpha_cursor = $('.cp-alpha-cursor', this);
                _options.buildCallback.call(_colorPicker, _$UI);
                _$UI.prepend('<div>').children().eq(0).css('width',
                    _$UI.children().eq(0).width()); // stabilizer
                _$UI._width = this.offsetWidth;
                _$UI._height = this.offsetHeight;
            }).hide();
    }

    function pointerdown(e) {
        var method,
            action = this.className.replace(/cp-(.*?)(?:\s*|$)/, '$1').replace('-', '_'),
            className = action;

        if ((e.button || e.which) > 1) return;

        e.preventDefault && e.preventDefault();
        e.returnValue = false;

        _$trigger._offset = $(this).offset();

        (method = action === 'xy_slider' ? xy_slider :
            action === 'z_slider' ? z_slider : alpha)(e);
        preRender();

        $document.on(_pointerup, function(e) {
            $document.off('.tcp');

            console.log("Actions", className);

            if (className === 'xy_slider') {
                toggle();
            }
        }).on(_pointermove, function(e) {
            method(e);
            preRender();
        });
    }

    function xy_slider(event) {
        var e = resolveEventType(event),
            x = e.pageX - _$trigger._offset.left,
            y = e.pageY - _$trigger._offset.top;

        _color.setColor({
            s: x / _$xy_slider._width * 100,
            v: 100 - (y / _$xy_slider._height * 100)
        }, 'hsv');
    }

    function z_slider(event) {
        var z = resolveEventType(event).pageY - _$trigger._offset.top;

        _color.setColor({h: 360 - (z / _$z_slider._height * 360)}, 'hsv');
    }

    function alpha(event) {
        var x = resolveEventType(event).pageX - _$trigger._offset.left,
            alpha = x / _$alpha._width;

        _color.setColor({}, 'rgb', alpha);
    }

    function preRender(toggled) {
        var colors = _color.colors,
            hueRGB = colors.hueRGB,
            RGB = colors.RND.rgb,
            HSL = colors.RND.hsl,
            dark = _options.dark,
            light = _options.light,
            colorText = _color.toString(_$trigger._colorMode, _options.forceAlpha),
            HUEContrast = colors.HUELuminance > 0.22 ? dark : light,
            alphaContrast = colors.rgbaMixBlack.luminance > 0.22 ? dark : light,
            h = (1 - colors.hsv.h) * _$z_slider._height,
            s = colors.hsv.s * _$xy_slider._width,
            v = (1 - colors.hsv.v) * _$xy_slider._height,
            a = colors.alpha * _$alpha._width,
            translate3d = _GPU ? 'translate3d' : '',
            triggerValue = _$trigger[0].value,
            hasNoValue = _$trigger[0].hasAttribute('value') && // question this
                triggerValue === '' && toggled !== undefined;

        _$xy_slider._css = {
            backgroundColor: 'rgb(' +
                hueRGB.r + ',' + hueRGB.g + ',' + hueRGB.b + ')'};
        _$xy_cursor._css = {
            transform: translate3d + '(' + s + 'px, ' + v + 'px, 0)',
            left: !_GPU ? s : '',
            top: !_GPU ? v : '',
            borderColor : colors.RGBLuminance > 0.22 ? dark : light
        };
        _$z_cursor._css = {
            transform: translate3d + '(0, ' + h + 'px, 0)',
            top: !_GPU ? h : '',
            borderColor : 'transparent ' + HUEContrast
        };
        _$alpha._css = {backgroundColor: '#' + colors.HEX};
        _$alpha_cursor._css = {
            transform: translate3d + '(' + a + 'px, 0, 0)',
            left: !_GPU ? a : '',
            borderColor : alphaContrast + ' transparent'
        };
        _$trigger._css = {
            backgroundColor : hasNoValue ? '' : colorText,
            color: hasNoValue ? '' :
                colors.rgbaMixBGMixCustom.luminance > 0.22 ? dark : light
        };
        _$trigger.text = hasNoValue ? '' : triggerValue !== colorText ? colorText : '';

        toggled !== undefined ? render(toggled) : _animate(render);
    }

    // As _animate() is actually requestAnimationFrame(), render() gets called
    // decoupled from any pointer action (whenever the browser decides to do
    // so) as an event. preRender() is coupled to toggle() and all pointermove
    // actions; that's where all the calculations happen. render() can now be
    // called without extra calculations which results in faster rendering.
    function render(toggled) {
        _$xy_slider.css(_$xy_slider._css);
        _$xy_cursor.css(_$xy_cursor._css);
        _$z_cursor.css(_$z_cursor._css);
        _$alpha.css(_$alpha._css);
        _$alpha_cursor.css(_$alpha_cursor._css);

        _options.doRender && _$trigger.css(_$trigger._css);
        _$trigger.text && _$trigger.val(_$trigger.text);

        _options.renderCallback.call(
            _colorPicker,
            _$trigger,
            typeof toggled === 'boolean' ? toggled : undefined
        );
    }

    $.fn.colorPicker = function(options) {
        var _this = this,
            noop = function(){};

        options = $.extend({
            animationSpeed: 150,
            GPU: true,
            doRender: true,
            customBG: '#FFF',
            opacity: true,
            renderCallback: noop,
            buildCallback: noop,
            positionCallback: noop,
            body: document.body,
            scrollResize: true,
            gap: 4,
            dark: '#222',
            light: '#DDD',
            // cssPrepend: true,
            // forceAlpha: undefined,
            // css: '',
            // cssAddon: '',
            // margin: '',
            // preventFocus: false
        }, options);

        !_colorPicker && options.scrollResize && $(window)
        .on('resize.tcp scroll.tcp', function() {
            if (_colorPicker.$trigger) {
                _colorPicker.toggle.call(_colorPicker.$trigger[0], true);
            }
        });
        _instance = _instance.add(this);
        this.colorPicker = _colorPicker || new ColorPicker(options);
        this.options = options;

        $(options.body).off('.tcp').on(_pointerdown, function(e) {
            _instance.add(_$UI).add($(_$UI).find(e.target)).
                index(e.target) === -1 && toggle();
        });

        return this.on('focusin.tcp click.tcp', function(event) {
            _colorPicker.color.options = // swap options to fake new instance
                $.extend(_colorPicker.color.options, _options = _this.options);
            toggle.call(this, event);
        })
        .on('change.tcp', function() {
            _color.setColor(this.value || '#FFF');
            _this.colorPicker.render(true);
        })
        .each(function() {
            var value = extractValue(this),
                mode = value.split('('),
                $elm = findElement($(this));

            $elm.data('colorMode', mode[1] ? mode[0].substr(0, 3) : 'HEX')
                .attr('readonly', _options.preventFocus);
            options.doRender &&
            $elm.css({'background-color': value,
                'color': function() {
                    return _color.setColor(value)
                        .rgbaMixBGMixCustom.luminance > 0.22 ?
                        options.dark : options.light
                }
            });
        });
    };

    $.fn.colorPicker.destroy = function() {
        $('*').off('.tcp'); // slower but saver
        _colorPicker.toggle(false);
        _instance = $();
        // destroy _colorPicker
    };

}));
/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.0
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */

'use strict';

(function (window, document) {

  'use strict';

/**
 * Pathformer
 * Beta version
 *
 * Take any SVG version 1.1 and transform
 * child elements to 'path' elements
 *
 * This code is purely forked from
 * https://github.com/Waest/SVGPathConverter
 */

/**
 * Class constructor
 *
 * @param {DOM|String} element Dom element of the SVG or id of it
 */
function Pathformer(element) {
  // Test params
  if (typeof element === 'undefined') {
    throw new Error('Pathformer [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
    this.el = element;
  } else {
    throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
  }

  // Start
  this.scan(element);
}

/**
 * List of tags which can be transformed
 * to path elements
 *
 * @type {Array}
 */
Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];

/**
 * List of attribute names which contain
 * data. This array list them to check if
 * they contain bad values, like percentage.
 *
 * @type {Array}
 */
Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];

/**
 * Finds the elements compatible for transform
 * and apply the liked method
 *
 * @param  {object} options Object from the constructor
 */
Pathformer.prototype.scan = function (svg) {
  var fn, element, pathData, pathDom,
      elements = svg.querySelectorAll(this.TYPES.join(','));

  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    fn = this[element.tagName.toLowerCase() + 'ToPath'];
    pathData = fn(this.parseAttr(element.attributes));
    pathDom = this.pathMaker(element, pathData);
    element.parentNode.replaceChild(pathDom, element);
  }
};


/**
 * Read `line` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Line element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.lineToPath = function (element) {
  var newElement = {},
      x1 = element.x1 || 0,
      y1 = element.y1 || 0,
      x2 = element.x2 || 0,
      y2 = element.y2 || 0;

  newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
  return newElement;
};

/**
 * Read `rect` element to extract and transform
 * data, to make it ready for a `path` object.
 * The radius-border is not taken in charge yet.
 * (your help is more than welcomed)
 *
 * @param  {DOMelement} element Rect element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.rectToPath = function (element) {
  var newElement = {},
      x      = parseFloat(element.x)      || 0,
      y      = parseFloat(element.y)      || 0,
      width  = parseFloat(element.width)  || 0,
      height = parseFloat(element.height) || 0;

  newElement.d  = 'M' + x + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
  newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
  return newElement;
};

/**
 * Read `polyline` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Polyline element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polylineToPath = function (element) {
  var newElement = {},
      points = element.points.trim().split(' '),
      i, path;

  // Reformatting if points are defined without commas
  if (element.points.indexOf(',') === -1) {
    var formattedPoints = [];
    for (i = 0; i < points.length; i+=2) {
      formattedPoints.push(points[i] + ',' + points[i+1]);
    }
    points = formattedPoints;
  }

  // Generate the path.d value
  path = 'M' + points[0];
  for(i = 1; i < points.length; i++) {
    if (points[i].indexOf(',') !== -1) {
      path += 'L' + points[i];
    }
  }
  newElement.d = path;
  return newElement;
};

/**
 * Read `polygon` element to extract and transform
 * data, to make it ready for a `path` object.
 * This method rely on polylineToPath, because the
 * logic is similar. The path created is just closed,
 * so it needs an 'Z' at the end.
 *
 * @param  {DOMelement} element Polygon element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polygonToPath = function (element) {
  var newElement = Pathformer.prototype.polylineToPath(element);

  newElement.d += 'Z';
  return newElement;
};

/**
 * Read `ellipse` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element ellipse element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.ellipseToPath = function (element) {
  var newElement = {},
      rx = parseFloat(element.rx) || 0,
      ry = parseFloat(element.ry) || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - rx,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(rx),
      endY = cy;

  newElement.d = 'M' + startX + ',' + startY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Read `circle` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Circle element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.circleToPath = function (element) {
  var newElement = {},
      r  = parseFloat(element.r)  || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - r,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(r),
      endY = cy;

  newElement.d =  'M' + startX + ',' + startY +
                  'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY +
                  'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Create `path` elements form original element
 * and prepared objects
 *
 * @param  {DOMelement} element  Original element to transform
 * @param  {object} pathData     Path data (from `toPath` methods)
 * @return {DOMelement}          Path element
 */
Pathformer.prototype.pathMaker = function (element, pathData) {
  var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg','path');
  for(i = 0; i < element.attributes.length; i++) {
    attr = element.attributes[i];
    if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
      pathTag.setAttribute(attr.name, attr.value);
    }
  }
  for(i in pathData) {
    pathTag.setAttribute(i, pathData[i]);
  }
  return pathTag;
};

/**
 * Parse attributes of a DOM element to
 * get an object of attribute => value
 *
 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
 * @return {object}                  Object of attributes
 */
Pathformer.prototype.parseAttr = function (element) {
  var attr, output = {};
  for (var i = 0; i < element.length; i++) {
    attr = element[i];
    // Check if no data attribute contains '%', or the transformation is impossible
    if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
      throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
    }
    output[attr.name] = attr.value;
  }
  return output;
};

  'use strict';

var requestAnimFrame, cancelAnimFrame, parsePositiveInt;

/**
 * Vivus
 * Beta version
 *
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 *
 * This in more than just inspired from codrops
 * At that point, it's a pure fork.
 */

/**
 * Class constructor
 * option structure
 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
 *   duration: <int> (in frames)
 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
 *   delay: <int> (delay between the drawing of first and last path)
 *   dashGap <integer> whitespace extra margin between dashes
 *   pathTimingFunction <function> timing animation function for each path element of the SVG
 *   animTimingFunction <function> timing animation function for the complete SVG
 *   forceRender <boolean> force the browser to re-render all updated path items
 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
 *
 * The attribute 'type' is by default on 'delayed'.
 *  - 'delayed'
 *    all paths are draw at the same time but with a
 *    little delay between them before start
 *  - 'sync'
 *    all path are start and finish at the same time
 *  - 'oneByOne'
 *    only one path is draw at the time
 *    the end of the first one will trigger the draw
 *    of the next one
 *
 * All these values can be overwritten individually
 * for each path item in the SVG
 * The value of frames will always take the advantage of
 * the duration value.
 * If you fail somewhere, an error will be thrown.
 * Good luck.
 *
 * @constructor
 * @this {Vivus}
 * @param {DOM|String}   element  Dom element of the SVG or id of it
 * @param {Object}       options  Options about the animation
 * @param {Function}     callback Callback for the end of the animation
 */
function Vivus (element, options, callback) {

  // Setup
  this.isReady = false;
  this.setElement(element, options);
  this.setOptions(options);
  this.setCallback(callback);

  if (this.isReady) {
    this.init();
  }
}

/**
 * Timing functions
 **************************************
 *
 * Default functions to help developers.
 * It always take a number as parameter (between 0 to 1) then
 * return a number (between 0 and 1)
 */
Vivus.LINEAR          = function (x) {return x;};
Vivus.EASE            = function (x) {return -Math.cos(x * Math.PI) / 2 + 0.5;};
Vivus.EASE_OUT        = function (x) {return 1 - Math.pow(1-x, 3);};
Vivus.EASE_IN         = function (x) {return Math.pow(x, 3);};
Vivus.EASE_OUT_BOUNCE = function (x) {
  var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
    rate = Math.pow(base,1.5),
    rateR = Math.pow(1 - x, 2),
    progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
  return (1- rateR) + (progress * rateR);
};


/**
 * Setters
 **************************************
 */

/**
 * Check and set the element in the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param {DOM|String}   element  SVG Dom element or id of it
 */
Vivus.prototype.setElement = function (element, options) {
  // Basic check
  if (typeof element === 'undefined') {
    throw new Error('Vivus [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  this.parentEl = element;

  // Create the object element if the property `file` exists in the options object
  if (options && options.file) {
    var objElm = document.createElement('object');
    objElm.setAttribute('type', 'image/svg+xml');
    objElm.setAttribute('data', options.file);
    objElm.setAttribute('built-by-vivus', 'true');
    element.appendChild(objElm);
    element = objElm;
  }

  switch (element.constructor) {
  case window.SVGSVGElement:
  case window.SVGElement:
    this.el = element;
    this.isReady = true;
    break;

  case window.HTMLObjectElement:
    // If we have to wait for it
    var onLoad, self;

    self = this;
    onLoad = function (e) {
      if (self.isReady) {
        return;
      }
      self.el = element.contentDocument && element.contentDocument.querySelector('svg');
      if (!self.el && e) {
        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
      }
      else if (self.el) {
        if (element.getAttribute('built-by-vivus')) {
          self.parentEl.insertBefore(self.el, element);
          self.parentEl.removeChild(element);
          self.el.setAttribute('width', '100%');
          self.el.setAttribute('height', '100%');
        }
        self.isReady = true;
        self.init();
        return true;
      }
    };

    if (!onLoad()) {
      element.addEventListener('load', onLoad);
    }
    break;

  default:
    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
  }
};

/**
 * Set up user option to the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {object} options Object from the constructor
 */
Vivus.prototype.setOptions = function (options) {
  var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
  var allowedStarts =  ['inViewport', 'manual', 'autostart'];

  // Basic check
  if (options !== undefined && options.constructor !== Object) {
    throw new Error('Vivus [constructor]: "options" parameter must be an object');
  }
  else {
    options = options || {};
  }

  // Set the animation type
  if (options.type && allowedTypes.indexOf(options.type) === -1) {
    throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
  }
  else {
    this.type = options.type || allowedTypes[0];
  }

  // Set the start type
  if (options.start && allowedStarts.indexOf(options.start) === -1) {
    throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
  }
  else {
    this.start = options.start || allowedStarts[0];
  }

  this.isIE         = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1 );
  this.duration     = parsePositiveInt(options.duration, 120);
  this.delay        = parsePositiveInt(options.delay, null);
  this.dashGap      = parsePositiveInt(options.dashGap, 1);
  this.forceRender  = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
  this.reverseStack = !!options.reverseStack;
  this.selfDestroy  = !!options.selfDestroy;
  this.onReady      = options.onReady;
  this.map          = [];
  this.frameLength  = this.currentFrame = this.delayUnit = this.speed = this.handle = null;

  this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;

  this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
  this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

  if (this.delay >= this.duration) {
    throw new Error('Vivus [constructor]: delay must be shorter than duration');
  }
};

/**
 * Set up callback to the instance
 * The method will not return enything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {Function} callback Callback for the animation end
 */
Vivus.prototype.setCallback = function (callback) {
  // Basic check
  if (!!callback && callback.constructor !== Function) {
    throw new Error('Vivus [constructor]: "callback" parameter must be a function');
  }
  this.callback = callback || function () {};
};


/**
 * Core
 **************************************
 */

/**
 * Map the svg, path by path.
 * The method return nothing, it just fill the
 * `map` array. Each item in this array represent
 * a path element from the SVG, with informations for
 * the animation.
 *
 * ```
 * [
 *   {
 *     el: <DOMobj> the path element
 *     length: <number> length of the path line
 *     startAt: <number> time start of the path animation (in frames)
 *     duration: <number> path animation duration (in frames)
 *   },
 *   ...
 * ]
 * ```
 *
 */
Vivus.prototype.mapping = function () {
  var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
  timePoint = totalLength = lengthMeter = 0;
  paths = this.el.querySelectorAll('path');

  for (i = 0; i < paths.length; i++) {
    path = paths[i];
    if (this.isInvisible(path)) {
      continue;
    }
    pathObj = {
      el: path,
      length: Math.ceil(path.getTotalLength())
    };
    // Test if the path length is correct
    if (isNaN(pathObj.length)) {
      if (window.console && console.warn) {
        console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
      }
      continue;
    }
    this.map.push(pathObj);
    path.style.strokeDasharray  = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
    path.style.strokeDashoffset = pathObj.length + this.dashGap;
    pathObj.length += this.dashGap;
    totalLength += pathObj.length;

    this.renderPath(i);
  }

  totalLength = totalLength === 0 ? 1 : totalLength;
  this.delay = this.delay === null ? this.duration / 3 : this.delay;
  this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);

  // Reverse stack if asked
  if (this.reverseStack) {
    this.map.reverse();
  }

  for (i = 0; i < this.map.length; i++) {
    pathObj = this.map[i];

    switch (this.type) {
    case 'delayed':
      pathObj.startAt = this.delayUnit * i;
      pathObj.duration = this.duration - this.delay;
      break;

    case 'oneByOne':
      pathObj.startAt = lengthMeter / totalLength * this.duration;
      pathObj.duration = pathObj.length / totalLength * this.duration;
      break;

    case 'sync':
    case 'async':
    case 'nsync':
      pathObj.startAt = 0;
      pathObj.duration = this.duration;
      break;

    case 'scenario-sync':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;

    case 'scenario':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;
    }
    lengthMeter += pathObj.length;
    this.frameLength = this.frameLength || this.duration;
  }
};

/**
 * Interval method to draw the SVG from current
 * position of the animation. It update the value of
 * `currentFrame` and re-trace the SVG.
 *
 * It use this.handle to store the requestAnimationFrame
 * and clear it one the animation is stopped. So this
 * attribute can be used to know if the animation is
 * playing.
 *
 * Once the animation at the end, this method will
 * trigger the Vivus callback.
 *
 */
Vivus.prototype.drawer = function () {
  var self = this;
  this.currentFrame += this.speed;

  if (this.currentFrame <= 0) {
    this.stop();
    this.reset();
  } else if (this.currentFrame >= this.frameLength) {
    this.stop();
    this.currentFrame = this.frameLength;
    this.trace();
    if (this.selfDestroy) {
      this.destroy();
    }
  } else {
    this.trace();
    this.handle = requestAnimFrame(function () {
      self.drawer();
    });
    return;
  }

  this.callback(this);
  if (this.instanceCallback) {
    this.instanceCallback(this);
    this.instanceCallback = null;
  }
};

/**
 * Draw the SVG at the current instant from the
 * `currentFrame` value. Here is where most of the magic is.
 * The trick is to use the `strokeDashoffset` style property.
 *
 * For optimisation reasons, a new property called `progress`
 * is added in each item of `map`. This one contain the current
 * progress of the path element. Only if the new value is different
 * the new value will be applied to the DOM element. This
 * method save a lot of resources to re-render the SVG. And could
 * be improved if the animation couldn't be played forward.
 *
 */
Vivus.prototype.trace = function () {
  var i, progress, path, currentFrame;
  currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    progress = (currentFrame - path.startAt) / path.duration;
    progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
    if (path.progress !== progress) {
      path.progress = progress;
      path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
      this.renderPath(i);
    }
  }
};

/**
 * Method forcing the browser to re-render a path element
 * from it's index in the map. Depending on the `forceRender`
 * value.
 * The trick is to replace the path element by it's clone.
 * This practice is not recommended because it's asking more
 * ressources, too much DOM manupulation..
 * but it's the only way to let the magic happen on IE.
 * By default, this fallback is only applied on IE.
 *
 * @param  {Number} index Path index
 */
Vivus.prototype.renderPath = function (index) {
  if (this.forceRender && this.map && this.map[index]) {
    var pathObj = this.map[index],
        newPath = pathObj.el.cloneNode(true);
    pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
    pathObj.el = newPath;
  }
};

/**
 * When the SVG object is loaded and ready,
 * this method will continue the initialisation.
 *
 * This this mainly due to the case of passing an
 * object tag in the constructor. It will wait
 * the end of the loading to initialise.
 *
 */
Vivus.prototype.init = function () {
  // Set object variables
  this.frameLength = 0;
  this.currentFrame = 0;
  this.map = [];

  // Start
  new Pathformer(this.el);
  this.mapping();
  this.starter();

  if (this.onReady) {
    this.onReady(this);
  }
};

/**
 * Trigger to start of the animation.
 * Depending on the `start` value, a different script
 * will be applied.
 *
 * If the `start` value is not valid, an error will be thrown.
 * Even if technically, this is impossible.
 *
 */
Vivus.prototype.starter = function () {
  switch (this.start) {
  case 'manual':
    return;

  case 'autostart':
    this.play();
    break;

  case 'inViewport':
    var self = this,
    listener = function () {
      if (self.isInViewport(self.parentEl, 1)) {
        self.play();
        window.removeEventListener('scroll', listener);
      }
    };
    window.addEventListener('scroll', listener);
    listener();
    break;
  }
};


/**
 * Controls
 **************************************
 */

/**
 * Get the current status of the animation between
 * three different states: 'start', 'progress', 'end'.
 * @return {string} Instance status
 */
Vivus.prototype.getStatus = function () {
  return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
};

/**
 * Reset the instance to the initial state : undraw
 * Be careful, it just reset the animation, if you're
 * playing the animation, this won't stop it. But just
 * make it start from start.
 *
 */
Vivus.prototype.reset = function () {
  return this.setFrameProgress(0);
};

/**
 * Set the instance to the final state : drawn
 * Be careful, it just set the animation, if you're
 * playing the animation on rewind, this won't stop it.
 * But just make it start from the end.
 *
 */
Vivus.prototype.finish = function () {
  return this.setFrameProgress(1);
};

/**
 * Set the level of progress of the drawing.
 *
 * @param {number} progress Level of progress to set
 */
Vivus.prototype.setFrameProgress = function (progress) {
  progress = Math.min(1, Math.max(0, progress));
  this.currentFrame = Math.round(this.frameLength * progress);
  this.trace();
  return this;
};

/**
 * Play the animation at the desired speed.
 * Speed must be a valid number (no zero).
 * By default, the speed value is 1.
 * But a negative value is accepted to go forward.
 *
 * And works with float too.
 * But don't forget we are in JavaScript, se be nice
 * with him and give him a 1/2^x value.
 *
 * @param  {number} speed Animation speed [optional]
 */
Vivus.prototype.play = function (speed, callback) {
  this.instanceCallback = null;

  if (speed && typeof speed === 'function') {
    this.instanceCallback = speed; // first parameter is actually the callback function
    speed = null;
  }
  else if (speed && typeof speed !== 'number') {
    throw new Error('Vivus [play]: invalid speed');
  }
  // if the first parameter wasn't the callback, check if the seconds was
  if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
    this.instanceCallback = callback;
  }


  this.speed = speed || 1;
  if (!this.handle) {
    this.drawer();
  }
  return this;
};

/**
 * Stop the current animation, if on progress.
 * Should not trigger any error.
 *
 */
Vivus.prototype.stop = function () {
  if (this.handle) {
    cancelAnimFrame(this.handle);
    this.handle = null;
  }
  return this;
};

/**
 * Destroy the instance.
 * Remove all bad styling attributes on all
 * path tags
 *
 */
Vivus.prototype.destroy = function () {
  this.stop();
  var i, path;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    path.el.style.strokeDashoffset = null;
    path.el.style.strokeDasharray = null;
    this.renderPath(i);
  }
};


/**
 * Utils methods
 * include methods from Codrops
 **************************************
 */

/**
 * Method to best guess if a path should added into
 * the animation or not.
 *
 * 1. Use the `data-vivus-ignore` attribute if set
 * 2. Check if the instance must ignore invisible paths
 * 3. Check if the path is visible
 *
 * For now the visibility checking is unstable.
 * It will be used for a beta phase.
 *
 * Other improvments are planned. Like detecting
 * is the path got a stroke or a valid opacity.
 */
Vivus.prototype.isInvisible = function (el) {
  var rect,
    ignoreAttr = el.getAttribute('data-ignore');

  if (ignoreAttr !== null) {
    return ignoreAttr !== 'false';
  }

  if (this.ignoreInvisible) {
    rect = el.getBoundingClientRect();
    return !rect.width && !rect.height;
  }
  else {
    return false;
  }
};

/**
 * Parse attributes of a DOM element to
 * get an object of {attributeName => attributeValue}
 *
 * @param  {object} element DOM element to parse
 * @return {object}         Object of attributes
 */
Vivus.prototype.parseAttr = function (element) {
  var attr, output = {};
  if (element && element.attributes) {
    for (var i = 0; i < element.attributes.length; i++) {
      attr = element.attributes[i];
      output[attr.name] = attr.value;
    }
  }
  return output;
};

/**
 * Reply if an element is in the page viewport
 *
 * @param  {object} el Element to observe
 * @param  {number} h  Percentage of height
 * @return {boolean}
 */
Vivus.prototype.isInViewport = function (el, h) {
  var scrolled   = this.scrollY(),
    viewed       = scrolled + this.getViewportH(),
    elBCR        = el.getBoundingClientRect(),
    elHeight     = elBCR.height,
    elTop        = scrolled + elBCR.top,
    elBottom     = elTop + elHeight;

  // if 0, the element is considered in the viewport as soon as it enters.
  // if 1, the element is considered in the viewport only when it's fully inside
  // value in percentage (1 >= h >= 0)
  h = h || 0;

  return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
};

/**
 * Alias for document element
 *
 * @type {DOMelement}
 */
Vivus.prototype.docElem = window.document.documentElement;

/**
 * Get the viewport height in pixels
 *
 * @return {integer} Viewport height
 */
Vivus.prototype.getViewportH = function () {
  var client = this.docElem.clientHeight,
    inner = window.innerHeight;

  if (client < inner) {
    return inner;
  }
  else {
    return client;
  }
};

/**
 * Get the page Y offset
 *
 * @return {integer} Page Y offset
 */
Vivus.prototype.scrollY = function () {
  return window.pageYOffset || this.docElem.scrollTop;
};

/**
 * Alias for `requestAnimationFrame` or
 * `setTimeout` function for deprecated browsers.
 *
 */
requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(/* function */ callback){
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * Alias for `cancelAnimationFrame` or
 * `cancelTimeout` function for deprecated browsers.
 *
 */
cancelAnimFrame = (function () {
  return (
    window.cancelAnimationFrame       ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame    ||
    window.oCancelAnimationFrame      ||
    window.msCancelAnimationFrame     ||
    function(id){
      return window.clearTimeout(id);
    }
  );
})();

/**
 * Parse string to integer.
 * If the number is not positive or null
 * the method will return the default value
 * or 0 if undefined
 *
 * @param {string} value String to parse
 * @param {*} defaultValue Value to return if the result parsed is invalid
 * @return {number}
 *
 */
parsePositiveInt = function (value, defaultValue) {
  var output = parseInt(value, 10);
  return (output >= 0) ? output : defaultValue;
};


  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function() {
      return Vivus;
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = Vivus;
  } else {
    // Browser globals
    window.Vivus = Vivus;
  }

}(window, document));
/**
 * Intro.js v2.7.0
 * https://github.com/usablica/intro.js
 *
 * Copyright (C) 2017 Afshin Mehrabani (@afshinmeh)
 */

(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else {
    // Browser globals
    factory(root);
  }
} (this, function (exports) {
  //Default config/variables
  var VERSION = '2.7.0';

  /**
   * IntroJs main class
   *
   * @class IntroJs
   */
  function IntroJs(obj) {
    this._targetElement = obj;
    this._introItems = [];

    this._options = {
      /* Next button label in tooltip box */
      nextLabel: 'Next &rarr;',
      /* Previous button label in tooltip box */
      prevLabel: '&larr; Back',
      /* Skip button label in tooltip box */
      skipLabel: 'Skip',
      /* Done button label in tooltip box */
      doneLabel: 'Done',
      /* Hide previous button in the first step? Otherwise, it will be disabled button. */
      hidePrev: false,
      /* Hide next button in the last step? Otherwise, it will be disabled button. */
      hideNext: false,
      /* Default tooltip box position */
      tooltipPosition: 'bottom',
      /* Next CSS class for tooltip boxes */
      tooltipClass: '',
      /* CSS class that is added to the helperLayer */
      highlightClass: '',
      /* Close introduction when pressing Escape button? */
      exitOnEsc: true,
      /* Close introduction when clicking on overlay layer? */
      exitOnOverlayClick: true,
      /* Show step numbers in introduction? */
      showStepNumbers: true,
      /* Let user use keyboard to navigate the tour? */
      keyboardNavigation: true,
      /* Show tour control buttons? */
      showButtons: true,
      /* Show tour bullets? */
      showBullets: true,
      /* Show tour progress? */
      showProgress: false,
      /* Scroll to highlighted element? */
      scrollToElement: true,
      /*
       * Should we scroll the tooltip or target element?
       *
       * Options are: 'element' or 'tooltip'
       */
      scrollTo: 'element',
      /* Padding to add after scrolling when element is not in the viewport (in pixels) */
      scrollPadding: 30,
      /* Set the overlay opacity */
      overlayOpacity: 0.8,
      /* Precedence of positions, when auto is enabled */
      positionPrecedence: ["bottom", "top", "right", "left"],
      /* Disable an interaction with element? */
      disableInteraction: false,
      /* Default hint position */
      hintPosition: 'top-middle',
      /* Hint button label */
      hintButtonLabel: 'Got it',
      /* Adding animation to hints? */
      hintAnimation: true
    };
  }

  /**
   * Initiate a new introduction/guide from an element in the page
   *
   * @api private
   * @method _introForElement
   * @param {Object} targetElm
   * @returns {Boolean} Success or not?
   */
  function _introForElement(targetElm) {
    var introItems = [],
        self = this;

    if (this._options.steps) {
      //use steps passed programmatically
      for (var i = 0, stepsLength = this._options.steps.length; i < stepsLength; i++) {
        var currentItem = _cloneObject(this._options.steps[i]);

        //set the step
        currentItem.step = introItems.length + 1;

        //use querySelector function only when developer used CSS selector
        if (typeof (currentItem.element) === 'string') {
          //grab the element with given selector from the page
          currentItem.element = document.querySelector(currentItem.element);
        }

        //intro without element
        if (typeof (currentItem.element) === 'undefined' || currentItem.element == null) {
          var floatingElementQuery = document.querySelector(".introjsFloatingElement");

          if (floatingElementQuery == null) {
            floatingElementQuery = document.createElement('div');
            floatingElementQuery.className = 'introjsFloatingElement';

            document.body.appendChild(floatingElementQuery);
          }

          currentItem.element  = floatingElementQuery;
          currentItem.position = 'floating';
        }

        currentItem.scrollTo = currentItem.scrollTo || this._options.scrollTo;

        if (typeof (currentItem.disableInteraction) === 'undefined') {
          currentItem.disableInteraction = this._options.disableInteraction;
        }

        if (currentItem.element != null) {
          introItems.push(currentItem);
        }
      }

    } else {
      //use steps from data-* annotations
      var allIntroSteps = targetElm.querySelectorAll('*[data-intro]');
      //if there's no element to intro
      if (allIntroSteps.length < 1) {
        return false;
      }

      //first add intro items with data-step
      for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
        var currentElement = allIntroSteps[i];

        // skip hidden elements
        if (currentElement.style.display == 'none') {
          continue;
        }

        var step = parseInt(currentElement.getAttribute('data-step'), 10);

        var disableInteraction = this._options.disableInteraction;

        if (typeof (currentElement.getAttribute('data-disable-interaction')) != 'undefined') {
          disableInteraction = !!currentElement.getAttribute('data-disable-interaction');
        }

        if (step > 0) {
          introItems[step - 1] = {
            element: currentElement,
            intro: currentElement.getAttribute('data-intro'),
            step: parseInt(currentElement.getAttribute('data-step'), 10),
            tooltipClass: currentElement.getAttribute('data-tooltipClass'),
            highlightClass: currentElement.getAttribute('data-highlightClass'),
            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition,
            scrollTo: currentElement.getAttribute('data-scrollTo') || this._options.scrollTo,
            disableInteraction: disableInteraction
          };
        }
      }

      //next add intro items without data-step
      //todo: we need a cleanup here, two loops are redundant
      var nextStep = 0;
      for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
        var currentElement = allIntroSteps[i];

        if (currentElement.getAttribute('data-step') == null) {

          while (true) {
            if (typeof introItems[nextStep] == 'undefined') {
              break;
            } else {
              nextStep++;
            }
          }

          var disableInteraction = this._options.disableInteraction;

          if (typeof (currentElement.getAttribute('data-disable-interaction')) != 'undefined') {
            disableInteraction = !!currentElement.getAttribute('data-disable-interaction');
          }

          introItems[nextStep] = {
            element: currentElement,
            intro: currentElement.getAttribute('data-intro'),
            step: nextStep + 1,
            tooltipClass: currentElement.getAttribute('data-tooltipClass'),
            highlightClass: currentElement.getAttribute('data-highlightClass'),
            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition,
            scrollTo: currentElement.getAttribute('data-scrollTo') || this._options.scrollTo,
            disableInteraction: disableInteraction
          };
        }
      }
    }

    //removing undefined/null elements
    var tempIntroItems = [];
    for (var z = 0; z < introItems.length; z++) {
      introItems[z] && tempIntroItems.push(introItems[z]);  // copy non-empty values to the end of the array
    }

    introItems = tempIntroItems;

    //Ok, sort all items with given steps
    introItems.sort(function (a, b) {
      return a.step - b.step;
    });

    //set it to the introJs object
    self._introItems = introItems;

    //add overlay layer to the page
    if(_addOverlayLayer.call(self, targetElm)) {
      //then, start the show
      _nextStep.call(self);

      var skipButton     = targetElm.querySelector('.introjs-skipbutton'),
          nextStepButton = targetElm.querySelector('.introjs-nextbutton');

      self._onKeyDown = function(e) {
        if (e.keyCode === 27 && self._options.exitOnEsc == true) {
          //escape key pressed, exit the intro
          //check if exit callback is defined
          _exitIntro.call(self, targetElm);
        } else if(e.keyCode === 37) {
          //left arrow
          _previousStep.call(self);
        } else if (e.keyCode === 39) {
          //right arrow
          _nextStep.call(self);
        } else if (e.keyCode === 13) {
          //srcElement === ie
          var target = e.target || e.srcElement;
          if (target && target.className.indexOf('introjs-prevbutton') > 0) {
            //user hit enter while focusing on previous button
            _previousStep.call(self);
          } else if (target && target.className.indexOf('introjs-skipbutton') > 0) {
            //user hit enter while focusing on skip button
            if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
                self._introCompleteCallback.call(self);
            }

            _exitIntro.call(self, targetElm);
          } else {
            //default behavior for responding to enter
            _nextStep.call(self);
          }

          //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
          if(e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
      };

      self._onResize = function(e) {
        self.refresh.call(self);
      };

      if (window.addEventListener) {
        if (this._options.keyboardNavigation) {
          window.addEventListener('keydown', self._onKeyDown, true);
        }
        //for window resize
        window.addEventListener('resize', self._onResize, true);
      } else if (document.attachEvent) { //IE
        if (this._options.keyboardNavigation) {
          document.attachEvent('onkeydown', self._onKeyDown);
        }
        //for window resize
        document.attachEvent('onresize', self._onResize);
      }
    }
    return false;
  }

 /*
   * makes a copy of the object
   * @api private
   * @method _cloneObject
  */
  function _cloneObject(object) {
      if (object == null || typeof (object) != 'object' || typeof (object.nodeType) != 'undefined') {
        return object;
      }
      var temp = {};
      for (var key in object) {
        if (typeof (jQuery) != 'undefined' && object[key] instanceof jQuery) {
          temp[key] = object[key];
        } else {
          temp[key] = _cloneObject(object[key]);
        }
      }
      return temp;
  }
  /**
   * Go to specific step of introduction
   *
   * @api private
   * @method _goToStep
   */
  function _goToStep(step) {
    //because steps starts with zero
    this._currentStep = step - 2;
    if (typeof (this._introItems) !== 'undefined') {
      _nextStep.call(this);
    }
  }

  /**
   * Go to the specific step of introduction with the explicit [data-step] number
   *
   * @api private
   * @method _goToStepNumber
   */
  function _goToStepNumber(step) {
    this._currentStepNumber = step;
    if (typeof (this._introItems) !== 'undefined') {
      _nextStep.call(this);
    }
  }

  /**
   * Go to next step on intro
   *
   * @api private
   * @method _nextStep
   */
  function _nextStep() {
    this._direction = 'forward';

    if (typeof (this._currentStepNumber) !== 'undefined') {
        for( var i = 0, len = this._introItems.length; i < len; i++ ) {
            var item = this._introItems[i];
            if( item.step === this._currentStepNumber ) {
                this._currentStep = i - 1;
                this._currentStepNumber = undefined;
            }
        }
    }

    if (typeof (this._currentStep) === 'undefined') {
      this._currentStep = 0;
    } else {
      ++this._currentStep;
    }

    if ((this._introItems.length) <= this._currentStep) {
      //end of the intro
      //check if any callback is defined
      if (typeof (this._introCompleteCallback) === 'function') {
        this._introCompleteCallback.call(this);
      }
      _exitIntro.call(this, this._targetElement);
      return;
    }

    var nextStep = this._introItems[this._currentStep];
    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      this._introBeforeChangeCallback.call(this, nextStep.element);
    }

    _showElement.call(this, nextStep);
  }

  /**
   * Go to previous step on intro
   *
   * @api private
   * @method _previousStep
   */
  function _previousStep() {
    this._direction = 'backward';

    if (this._currentStep === 0) {
      return false;
    }

    var nextStep = this._introItems[--this._currentStep];
    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      this._introBeforeChangeCallback.call(this, nextStep.element);
    }

    _showElement.call(this, nextStep);
  }

  /**
   * Update placement of the intro objects on the screen
   * @api private
   */
  function _refresh() {
    // re-align intros
    _setHelperLayerPosition.call(this, document.querySelector('.introjs-helperLayer'));
    _setHelperLayerPosition.call(this, document.querySelector('.introjs-tooltipReferenceLayer'));

    // re-align tooltip
    if(this._currentStep !== undefined && this._currentStep !== null) {
      var oldHelperNumberLayer = document.querySelector('.introjs-helperNumberLayer'),
        oldArrowLayer        = document.querySelector('.introjs-arrow'),
        oldtooltipContainer  = document.querySelector('.introjs-tooltip');
      _placeTooltip.call(this, this._introItems[this._currentStep].element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);
    }

    //re-align hints
    _reAlignHints.call(this);
    return this;
  }

  /**
   * Exit from intro
   *
   * @api private
   * @method _exitIntro
   * @param {Object} targetElement
   * @param {Boolean} force - Setting to `true` will skip the result of beforeExit callback
   */
  function _exitIntro(targetElement, force) {
    var continueExit = true;

    // calling onbeforeexit callback
    // 
    // If this callback return `false`, it would halt the process
    if (this._introBeforeExitCallback != undefined) {
      continueExit = this._introBeforeExitCallback.call(self);
    }

    // skip this check if `force` parameter is `true`
    // otherwise, if `onbeforeexit` returned `false`, don't exit the intro
    if (!force && continueExit === false) return;

    //remove overlay layers from the page
    var overlayLayers = targetElement.querySelectorAll('.introjs-overlay');

    if (overlayLayers && overlayLayers.length > 0) {
      for (var i = overlayLayers.length - 1; i >= 0; i--) {
        //for fade-out animation
        var overlayLayer = overlayLayers[i];
        overlayLayer.style.opacity = 0;
        setTimeout(function () {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        }.bind(overlayLayer), 500);
      };
    }

    //remove all helper layers
    var helperLayer = targetElement.querySelector('.introjs-helperLayer');
    if (helperLayer) {
      helperLayer.parentNode.removeChild(helperLayer);
    }

    var referenceLayer = targetElement.querySelector('.introjs-tooltipReferenceLayer');
    if (referenceLayer) {
      referenceLayer.parentNode.removeChild(referenceLayer);
    }

    //remove disableInteractionLayer
    var disableInteractionLayer = targetElement.querySelector('.introjs-disableInteraction');
    if (disableInteractionLayer) {
      disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
    }

    //remove intro floating element
    var floatingElement = document.querySelector('.introjsFloatingElement');
    if (floatingElement) {
      floatingElement.parentNode.removeChild(floatingElement);
    }

    _removeShowElement();

    //remove `introjs-fixParent` class from the elements
    var fixParents = document.querySelectorAll('.introjs-fixParent');
    if (fixParents && fixParents.length > 0) {
      for (var i = fixParents.length - 1; i >= 0; i--) {
        fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
      }
    }

    //clean listeners
    if (window.removeEventListener) {
      window.removeEventListener('keydown', this._onKeyDown, true);
    } else if (document.detachEvent) { //IE
      document.detachEvent('onkeydown', this._onKeyDown);
    }

    //check if any callback is defined
    if (this._introExitCallback != undefined) {
      this._introExitCallback.call(self);
    }

    //set the step to zero
    this._currentStep = undefined;
  }

  /**
   * Render tooltip box in the page
   *
   * @api private
   * @method _placeTooltip
   * @param {HTMLElement} targetElement
   * @param {HTMLElement} tooltipLayer
   * @param {HTMLElement} arrowLayer
   * @param {HTMLElement} helperNumberLayer
   * @param {Boolean} hintMode
   */
  function _placeTooltip(targetElement, tooltipLayer, arrowLayer, helperNumberLayer, hintMode) {
    var tooltipCssClass = '',
        currentStepObj,
        tooltipOffset,
        targetOffset,
        windowSize,
        currentTooltipPosition;

    hintMode = hintMode || false;

    //reset the old style
    tooltipLayer.style.top        = null;
    tooltipLayer.style.right      = null;
    tooltipLayer.style.bottom     = null;
    tooltipLayer.style.left       = null;
    tooltipLayer.style.marginLeft = null;
    tooltipLayer.style.marginTop  = null;

    arrowLayer.style.display = 'inherit';

    if (typeof(helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
      helperNumberLayer.style.top  = null;
      helperNumberLayer.style.left = null;
    }

    //prevent error when `this._currentStep` is undefined
    if (!this._introItems[this._currentStep]) return;

    //if we have a custom css class for each step
    currentStepObj = this._introItems[this._currentStep];
    if (typeof (currentStepObj.tooltipClass) === 'string') {
      tooltipCssClass = currentStepObj.tooltipClass;
    } else {
      tooltipCssClass = this._options.tooltipClass;
    }

    tooltipLayer.className = ('introjs-tooltip ' + tooltipCssClass).replace(/^\s+|\s+$/g, '');

    currentTooltipPosition = this._introItems[this._currentStep].position;

    if (currentTooltipPosition != "floating") { // Floating is always valid, no point in calculating
      if (currentTooltipPosition === "auto") {
        currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer);
      } else {
        currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
      }
    }

    targetOffset  = _getOffset(targetElement);
    tooltipOffset = _getOffset(tooltipLayer);
    windowSize    = _getWinSize();

    switch (currentTooltipPosition) {
      case 'top':
        arrowLayer.className = 'introjs-arrow bottom';

        if (hintMode) {
          var tooltipLayerStyleLeft = 0;
        } else {
          var tooltipLayerStyleLeft = 15;
        }

        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
        tooltipLayer.style.bottom = (targetOffset.height +  20) + 'px';
        break;
      case 'right':
        tooltipLayer.style.left = (targetOffset.width + 20) + 'px';
        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
          // In this case, right would have fallen below the bottom of the screen.
          // Modify so that the bottom of the tooltip connects with the target
          arrowLayer.className = "introjs-arrow left-bottom";
          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
        } else {
          arrowLayer.className = 'introjs-arrow left';
        }
        break;
      case 'left':
        if (!hintMode && this._options.showStepNumbers == true) {
          tooltipLayer.style.top = '15px';
        }

        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
          // In this case, left would have fallen below the bottom of the screen.
          // Modify so that the bottom of the tooltip connects with the target
          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
          arrowLayer.className = 'introjs-arrow right-bottom';
        } else {
          arrowLayer.className = 'introjs-arrow right';
        }
        tooltipLayer.style.right = (targetOffset.width + 20) + 'px';

        break;
      case 'floating':
        arrowLayer.style.display = 'none';

        //we have to adjust the top and left of layer manually for intro items without element
        tooltipLayer.style.left   = '50%';
        tooltipLayer.style.top    = '50%';
        tooltipLayer.style.marginLeft = '-' + (tooltipOffset.width / 2)  + 'px';
        tooltipLayer.style.marginTop  = '-' + (tooltipOffset.height / 2) + 'px';

        if (typeof(helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
          helperNumberLayer.style.left = '-' + ((tooltipOffset.width / 2) + 18) + 'px';
          helperNumberLayer.style.top  = '-' + ((tooltipOffset.height / 2) + 18) + 'px';
        }

        break;
      case 'bottom-right-aligned':
        arrowLayer.className      = 'introjs-arrow top-right';

        var tooltipLayerStyleRight = 0;
        _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
        break;

      case 'bottom-middle-aligned':
        arrowLayer.className      = 'introjs-arrow top-middle';

        var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;

        // a fix for middle aligned hints
        if (hintMode) {
          tooltipLayerStyleLeftRight += 5;
        }

        if (_checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
          tooltipLayer.style.right = null;
          _checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
        }
        tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
        break;

      case 'bottom-left-aligned':
      // Bottom-left-aligned is the same as the default bottom
      case 'bottom':
      // Bottom going to follow the default behavior
      default:
        arrowLayer.className = 'introjs-arrow top';

        var tooltipLayerStyleLeft = 0;
        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
        break;
    }
  }

  /**
   * Set tooltip left so it doesn't go off the right side of the window
   *
   * @return boolean true, if tooltipLayerStyleLeft is ok.  false, otherwise.
   */
  function _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
    if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
      // off the right side of the window
      tooltipLayer.style.left = (windowSize.width - tooltipOffset.width - targetOffset.left) + 'px';
      return false;
    }
    tooltipLayer.style.left = tooltipLayerStyleLeft + 'px';
    return true;
  }

  /**
   * Set tooltip right so it doesn't go off the left side of the window
   *
   * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
   */
  function _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
    if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
      // off the left side of the window
      tooltipLayer.style.left = (-targetOffset.left) + 'px';
      return false;
    }
    tooltipLayer.style.right = tooltipLayerStyleRight + 'px';
    return true;
  }

  /**
   * Determines the position of the tooltip based on the position precedence and availability
   * of screen space.
   *
   * @param {Object} targetElement
   * @param {Object} tooltipLayer
   * @param {Object} desiredTooltipPosition
   *
   */
  function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {

    // Take a clone of position precedence. These will be the available
    var possiblePositions = this._options.positionPrecedence.slice();

    var windowSize = _getWinSize();
    var tooltipHeight = _getOffset(tooltipLayer).height + 10;
    var tooltipWidth = _getOffset(tooltipLayer).width + 20;
    var targetOffset = _getOffset(targetElement);

    // If we check all the possible areas, and there are no valid places for the tooltip, the element
    // must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
    var calculatedPosition = "floating";

    // Check if the width of the tooltip + the starting point would spill off the right side of the screen
    // If no, neither bottom or top are valid
    if (targetOffset.left + tooltipWidth > windowSize.width || ((targetOffset.left + (targetOffset.width / 2)) - tooltipWidth) < 0) {
      _removeEntry(possiblePositions, "bottom");
      _removeEntry(possiblePositions, "top");
    } else {
      // Check for space below
      if ((targetOffset.height + targetOffset.top + tooltipHeight) > windowSize.height) {
        _removeEntry(possiblePositions, "bottom");
      }

      // Check for space above
      if (targetOffset.top - tooltipHeight < 0) {
        _removeEntry(possiblePositions, "top");
      }
    }

    // Check for space to the right
    if (targetOffset.width + targetOffset.left + tooltipWidth > windowSize.width) {
      _removeEntry(possiblePositions, "right");
    }

    // Check for space to the left
    if (targetOffset.left - tooltipWidth < 0) {
      _removeEntry(possiblePositions, "left");
    }

    // At this point, our array only has positions that are valid. Pick the first one, as it remains in order
    if (possiblePositions.length > 0) {
      calculatedPosition = possiblePositions[0];
    }

    // If the requested position is in the list, replace our calculated choice with that
    if (desiredTooltipPosition && desiredTooltipPosition != "auto") {
      if (possiblePositions.indexOf(desiredTooltipPosition) > -1) {
        calculatedPosition = desiredTooltipPosition;
      }
    }

    return calculatedPosition;
  }

  /**
   * Remove an entry from a string array if it's there, does nothing if it isn't there.
   *
   * @param {Array} stringArray
   * @param {String} stringToRemove
   */
  function _removeEntry(stringArray, stringToRemove) {
    if (stringArray.indexOf(stringToRemove) > -1) {
      stringArray.splice(stringArray.indexOf(stringToRemove), 1);
    }
  }

  /**
   * Update the position of the helper layer on the screen
   *
   * @api private
   * @method _setHelperLayerPosition
   * @param {Object} helperLayer
   */
  function _setHelperLayerPosition(helperLayer) {
    if (helperLayer) {
      //prevent error when `this._currentStep` in undefined
      if (!this._introItems[this._currentStep]) return;

      var currentElement  = this._introItems[this._currentStep],
          elementPosition = _getOffset(currentElement.element),
          widthHeightPadding = 10;

      // If the target element is fixed, the tooltip should be fixed as well.
      // Otherwise, remove a fixed class that may be left over from the previous
      // step.
      if (_isFixed(currentElement.element)) {
        helperLayer.className += ' introjs-fixedTooltip';
      } else {
        helperLayer.className = helperLayer.className.replace(' introjs-fixedTooltip', '');
      }

      if (currentElement.position == 'floating') {
        widthHeightPadding = 0;
      }

      //set new position to helper layer
      helperLayer.setAttribute('style', 'width: ' + (elementPosition.width  + widthHeightPadding)  + 'px; ' +
                                        'height:' + (elementPosition.height + widthHeightPadding)  + 'px; ' +
                                        'top:'    + (elementPosition.top    - 5)   + 'px;' +
                                        'left: '  + (elementPosition.left   - 5)   + 'px;');

    }
  }

  /**
   * Add disableinteraction layer and adjust the size and position of the layer
   *
   * @api private
   * @method _disableInteraction
   */
  function _disableInteraction() {
    var disableInteractionLayer = document.querySelector('.introjs-disableInteraction');

    if (disableInteractionLayer === null) {
      disableInteractionLayer = document.createElement('div');
      disableInteractionLayer.className = 'introjs-disableInteraction';
      this._targetElement.appendChild(disableInteractionLayer);
    }

    _setHelperLayerPosition.call(this, disableInteractionLayer);
  }

  /**
   * Setting anchors to behave like buttons
   *
   * @api private
   * @method _setAnchorAsButton
   */
  function _setAnchorAsButton(anchor){
    anchor.setAttribute('role', 'button');
    anchor.tabIndex = 0;
  }

  /**
   * Show an element on the page
   *
   * @api private
   * @method _showElement
   * @param {Object} targetElement
   */
  function _showElement(targetElement) {
    if (typeof (this._introChangeCallback) !== 'undefined') {
      this._introChangeCallback.call(this, targetElement.element);
    }

    var self = this,
        oldHelperLayer = document.querySelector('.introjs-helperLayer'),
        oldReferenceLayer = document.querySelector('.introjs-tooltipReferenceLayer'),
        highlightClass = 'introjs-helperLayer',
        elementPosition = _getOffset(targetElement.element);

    //check for a current step highlight class
    if (typeof (targetElement.highlightClass) === 'string') {
      highlightClass += (' ' + targetElement.highlightClass);
    }
    //check for options highlight class
    if (typeof (this._options.highlightClass) === 'string') {
      highlightClass += (' ' + this._options.highlightClass);
    }

    if (oldHelperLayer != null) {
      var oldHelperNumberLayer = oldReferenceLayer.querySelector('.introjs-helperNumberLayer'),
          oldtooltipLayer      = oldReferenceLayer.querySelector('.introjs-tooltiptext'),
          oldArrowLayer        = oldReferenceLayer.querySelector('.introjs-arrow'),
          oldtooltipContainer  = oldReferenceLayer.querySelector('.introjs-tooltip'),
          skipTooltipButton    = oldReferenceLayer.querySelector('.introjs-skipbutton'),
          prevTooltipButton    = oldReferenceLayer.querySelector('.introjs-prevbutton'),
          nextTooltipButton    = oldReferenceLayer.querySelector('.introjs-nextbutton');

      //update or reset the helper highlight class
      oldHelperLayer.className = highlightClass;
      //hide the tooltip
      oldtooltipContainer.style.opacity = 0;
      oldtooltipContainer.style.display = "none";

      if (oldHelperNumberLayer != null) {
        var lastIntroItem = this._introItems[(targetElement.step - 2 >= 0 ? targetElement.step - 2 : 0)];

        if (lastIntroItem != null && (this._direction == 'forward' && lastIntroItem.position == 'floating') || (this._direction == 'backward' && targetElement.position == 'floating')) {
          oldHelperNumberLayer.style.opacity = 0;
        }
      }

      //set new position to helper layer
      _setHelperLayerPosition.call(self, oldHelperLayer);
      _setHelperLayerPosition.call(self, oldReferenceLayer);

      //remove `introjs-fixParent` class from the elements
      var fixParents = document.querySelectorAll('.introjs-fixParent');
      if (fixParents && fixParents.length > 0) {
        for (var i = fixParents.length - 1; i >= 0; i--) {
          fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
        };
      }

      //remove old classes if the element still exist
      _removeShowElement();

      //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
      if (self._lastShowElementTimer) {
        clearTimeout(self._lastShowElementTimer);
      }

      self._lastShowElementTimer = setTimeout(function() {
        //set current step to the label
        if (oldHelperNumberLayer != null) {
          oldHelperNumberLayer.innerHTML = targetElement.step;
        }
        //set current tooltip text
        oldtooltipLayer.innerHTML = targetElement.intro;
        //set the tooltip position
        oldtooltipContainer.style.display = "block";
        _placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);

        //change active bullet
        if (self._options.showBullets) {
            oldReferenceLayer.querySelector('.introjs-bullets li > a.active').className = '';
            oldReferenceLayer.querySelector('.introjs-bullets li > a[data-stepnumber="' + targetElement.step + '"]').className = 'active';
        }
        oldReferenceLayer.querySelector('.introjs-progress .introjs-progressbar').setAttribute('style', 'width:' + _getProgress.call(self) + '%;');

        //show the tooltip
        oldtooltipContainer.style.opacity = 1;
        if (oldHelperNumberLayer) oldHelperNumberLayer.style.opacity = 1;

        //reset button focus
        if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null && /introjs-donebutton/gi.test(skipTooltipButton.className)) {
          // skip button is now "done" button
          skipTooltipButton.focus();
        } else if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
          //still in the tour, focus on next
          nextTooltipButton.focus();
        }

        // change the scroll of the window, if needed
        _scrollTo.call(self, targetElement.scrollTo, targetElement, oldtooltipLayer);
      }, 350);

      // end of old element if-else condition
    } else {
      var helperLayer       = document.createElement('div'),
          referenceLayer    = document.createElement('div'),
          arrowLayer        = document.createElement('div'),
          tooltipLayer      = document.createElement('div'),
          tooltipTextLayer  = document.createElement('div'),
          bulletsLayer      = document.createElement('div'),
          progressLayer     = document.createElement('div'),
          buttonsLayer      = document.createElement('div');

      helperLayer.className = highlightClass;
      referenceLayer.className = 'introjs-tooltipReferenceLayer';

      //set new position to helper layer
      _setHelperLayerPosition.call(self, helperLayer);
      _setHelperLayerPosition.call(self, referenceLayer);

      //add helper layer to target element
      this._targetElement.appendChild(helperLayer);
      this._targetElement.appendChild(referenceLayer);

      arrowLayer.className = 'introjs-arrow';

      tooltipTextLayer.className = 'introjs-tooltiptext';
      tooltipTextLayer.innerHTML = targetElement.intro;

      bulletsLayer.className = 'introjs-bullets';

      if (this._options.showBullets === false) {
        bulletsLayer.style.display = 'none';
      }

      var ulContainer = document.createElement('ul');

      for (var i = 0, stepsLength = this._introItems.length; i < stepsLength; i++) {
        var innerLi    = document.createElement('li');
        var anchorLink = document.createElement('a');

        anchorLink.onclick = function() {
          self.goToStep(this.getAttribute('data-stepnumber'));
        };

        if (i === (targetElement.step-1)) anchorLink.className = 'active';

        _setAnchorAsButton(anchorLink);
        anchorLink.innerHTML = "&nbsp;";
        anchorLink.setAttribute('data-stepnumber', this._introItems[i].step);

        innerLi.appendChild(anchorLink);
        ulContainer.appendChild(innerLi);
      }

      bulletsLayer.appendChild(ulContainer);

      progressLayer.className = 'introjs-progress';

      if (this._options.showProgress === false) {
        progressLayer.style.display = 'none';
      }
      var progressBar = document.createElement('div');
      progressBar.className = 'introjs-progressbar';
      progressBar.setAttribute('style', 'width:' + _getProgress.call(this) + '%;');

      progressLayer.appendChild(progressBar);

      buttonsLayer.className = 'introjs-tooltipbuttons';
      if (this._options.showButtons === false) {
        buttonsLayer.style.display = 'none';
      }

      tooltipLayer.className = 'introjs-tooltip';
      tooltipLayer.appendChild(tooltipTextLayer);
      tooltipLayer.appendChild(bulletsLayer);
      tooltipLayer.appendChild(progressLayer);

      //add helper layer number
      if (this._options.showStepNumbers == true) {
        var helperNumberLayer = document.createElement('span');
        helperNumberLayer.className = 'introjs-helperNumberLayer';
        helperNumberLayer.innerHTML = targetElement.step;
        referenceLayer.appendChild(helperNumberLayer);
      }

      tooltipLayer.appendChild(arrowLayer);
      referenceLayer.appendChild(tooltipLayer);

      //next button
      var nextTooltipButton = document.createElement('a');

      nextTooltipButton.onclick = function() {
        if (self._introItems.length - 1 != self._currentStep) {
          _nextStep.call(self);
        }
      };

      _setAnchorAsButton(nextTooltipButton);
      nextTooltipButton.innerHTML = this._options.nextLabel;

      //previous button
      var prevTooltipButton = document.createElement('a');

      prevTooltipButton.onclick = function() {
        if (self._currentStep != 0) {
          _previousStep.call(self);
        }
      };

      _setAnchorAsButton(prevTooltipButton);
      prevTooltipButton.innerHTML = this._options.prevLabel;

      //skip button
      var skipTooltipButton = document.createElement('a');
      skipTooltipButton.className = 'introjs-button introjs-skipbutton';
      _setAnchorAsButton(skipTooltipButton);
      skipTooltipButton.innerHTML = this._options.skipLabel;

      skipTooltipButton.onclick = function() {
        if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
          self._introCompleteCallback.call(self);
        }

        _exitIntro.call(self, self._targetElement);
      };

      buttonsLayer.appendChild(skipTooltipButton);

      //in order to prevent displaying next/previous button always
      if (this._introItems.length > 1) {
        buttonsLayer.appendChild(prevTooltipButton);
        buttonsLayer.appendChild(nextTooltipButton);
      }

      tooltipLayer.appendChild(buttonsLayer);

      //set proper position
      _placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer, helperNumberLayer);

      // change the scroll of the window, if needed
      _scrollTo.call(this, targetElement.scrollTo, targetElement, tooltipLayer);

      //end of new element if-else condition
    }

    // removing previous disable interaction layer
    var disableInteractionLayer = self._targetElement.querySelector('.introjs-disableInteraction');
    if (disableInteractionLayer) {
      disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
    }

    //disable interaction
    if (targetElement.disableInteraction) {
      _disableInteraction.call(self);
    }

    if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
      nextTooltipButton.removeAttribute('tabIndex');
    }
    if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
      prevTooltipButton.removeAttribute('tabIndex');
    }

    // when it's the first step of tour
    if (this._currentStep == 0 && this._introItems.length > 1) {
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null) {
        skipTooltipButton.className = 'introjs-button introjs-skipbutton';
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
        nextTooltipButton.className = 'introjs-button introjs-nextbutton';
      }

      if (this._options.hidePrev == true) {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
          prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-hidden';
        }
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
          nextTooltipButton.className += ' introjs-fullbutton';
        }
      } else {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
          prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-disabled';
        }
      }

      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
        prevTooltipButton.tabIndex = '-1';
      }
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null) {
        skipTooltipButton.innerHTML = this._options.skipLabel;
      }
    } else if (this._introItems.length - 1 == this._currentStep || this._introItems.length == 1) {
      // last step of tour
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null) {
        skipTooltipButton.innerHTML = this._options.doneLabel;
        // adding donebutton class in addition to skipbutton
        skipTooltipButton.className += ' introjs-donebutton';
      }
      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
        prevTooltipButton.className = 'introjs-button introjs-prevbutton';
      }

      if (this._options.hideNext == true) {
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
          nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-hidden';
        }
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
          prevTooltipButton.className += ' introjs-fullbutton';
        }
      } else {
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
          nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-disabled';
        }
      }

      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
        nextTooltipButton.tabIndex = '-1';
      }
    } else {
      // steps between start and end
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null) {
        skipTooltipButton.className = 'introjs-button introjs-skipbutton';
      }
      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton != null) {
        prevTooltipButton.className = 'introjs-button introjs-prevbutton';
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
        nextTooltipButton.className = 'introjs-button introjs-nextbutton';
      }
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton != null) {
        skipTooltipButton.innerHTML = this._options.skipLabel;
      }
    }

    //Set focus on "next" button, so that hitting Enter always moves you onto the next step
    if (typeof nextTooltipButton !== "undefined" && nextTooltipButton != null) {
      nextTooltipButton.focus();
    }

    _setShowElement(targetElement);

    if (typeof (this._introAfterChangeCallback) !== 'undefined') {
      this._introAfterChangeCallback.call(this, targetElement.element);
    }
  }

  /**
   * To change the scroll of `window` after highlighting an element
   *
   * @api private
   * @method _scrollTo
   * @param {String} scrollTo
   * @param {Object} targetElement
   * @param {Object} tooltipLayer
   */
  function _scrollTo(scrollTo, targetElement, tooltipLayer) {
    if (!this._options.scrollToElement) return;

    if (scrollTo === 'tooltip') {
      var rect = tooltipLayer.getBoundingClientRect();
    } else {
      var rect = targetElement.element.getBoundingClientRect();
    }

    if (!_elementInViewport(targetElement.element)) {
      var winHeight = _getWinSize().height;
      var top = rect.bottom - (rect.bottom - rect.top);
      var bottom = rect.bottom - winHeight;

      // TODO (afshinm): do we need scroll padding now?
      // I have changed the scroll option and now it scrolls the window to
      // the center of the target element or tooltip.

      if (top < 0 || targetElement.element.clientHeight > winHeight) {
        window.scrollBy(0, rect.top - ((winHeight / 2) -  (rect.height / 2)) - this._options.scrollPadding); // 30px padding from edge to look nice

      //Scroll down
      } else {
        window.scrollBy(0, rect.top - ((winHeight / 2) -  (rect.height / 2)) + this._options.scrollPadding); // 30px padding from edge to look nice
      }
    }
  }

  /**
   * To remove all show element(s)
   *
   * @api private
   * @method _removeShowElement
   */
  function _removeShowElement() {
    var elms = document.querySelectorAll('.introjs-showElement');

    for (var i = 0, l = elms.length; i < l; i++) {
      var elm = elms[i];
      _removeClass(elm, /introjs-[a-zA-Z]+/g);
    }
  }

  /**
   * To set the show element
   * This function set a relative (in most cases) position and changes the z-index
   *
   * @api private
   * @method _setShowElement
   * @param {Object} targetElement
   */
  function _setShowElement(targetElement) {
    // we need to add this show element class to the parent of SVG elements
    // because the SVG elements can't have independent z-index
    if (targetElement.element instanceof SVGElement) {
      var parentElm = targetElement.element.parentNode;

      while (targetElement.element.parentNode != null) {
        if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

        if (parentElm.tagName.toLowerCase() === 'svg') {
          _setClass(parentElm, 'introjs-showElement introjs-relativePosition');
        }

        parentElm = parentElm.parentNode;
      }
    }

    _setClass(targetElement.element, 'introjs-showElement');

    var currentElementPosition = _getPropValue(targetElement.element, 'position');
    if (currentElementPosition !== 'absolute' &&
        currentElementPosition !== 'relative' &&
        currentElementPosition !== 'fixed') {
      //change to new intro item
      //targetElement.element.className += ' introjs-relativePosition';
      _setClass(targetElement.element, 'introjs-relativePosition')
    }

    var parentElm = targetElement.element.parentNode;
    while (parentElm != null) {
      if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

      //fix The Stacking Context problem.
      //More detail: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
      var zIndex = _getPropValue(parentElm, 'z-index');
      var opacity = parseFloat(_getPropValue(parentElm, 'opacity'));
      var transform = _getPropValue(parentElm, 'transform') || _getPropValue(parentElm, '-webkit-transform') || _getPropValue(parentElm, '-moz-transform') || _getPropValue(parentElm, '-ms-transform') || _getPropValue(parentElm, '-o-transform');
      if (/[0-9]+/.test(zIndex) || opacity < 1 || (transform !== 'none' && transform !== undefined)) {
        parentElm.className += ' introjs-fixParent';
      }

      parentElm = parentElm.parentNode;
    }
  }

  function _setClass(element, className) {
    if (element instanceof SVGElement) {
      var pre = element.getAttribute('class') || '';

      element.setAttribute('class', pre + ' ' + className);
    } else {
      element.className += ' ' + className;
    }
  }

  function _removeClass(element, classNameRegex) {
    if (element instanceof SVGElement) {
      var pre = element.getAttribute('class') || '';

      element.setAttribute('class', pre.replace(classNameRegex, '').replace(/^\s+|\s+$/g, ''));
    } else {
      element.className = element.className.replace(classNameRegex, '').replace(/^\s+|\s+$/g, '');
    }
  }

  /**
   * Get an element CSS property on the page
   * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
   *
   * @api private
   * @method _getPropValue
   * @param {Object} element
   * @param {String} propName
   * @returns Element's property value
   */
  function _getPropValue (element, propName) {
    var propValue = '';
    if (element.currentStyle) { //IE
      propValue = element.currentStyle[propName];
    } else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
      propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
    }

    //Prevent exception in IE
    if (propValue && propValue.toLowerCase) {
      return propValue.toLowerCase();
    } else {
      return propValue;
    }
  }

  /**
   * Checks to see if target element (or parents) position is fixed or not
   *
   * @api private
   * @method _isFixed
   * @param {Object} element
   * @returns Boolean
   */
  function _isFixed (element) {
    var p = element.parentNode;

    if (!p || p.nodeName === 'HTML') {
      return false;
    }

    if (_getPropValue(element, 'position') == 'fixed') {
      return true;
    }

    return _isFixed(p);
  }

  /**
   * Provides a cross-browser way to get the screen dimensions
   * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
   *
   * @api private
   * @method _getWinSize
   * @returns {Object} width and height attributes
   */
  function _getWinSize() {
    if (window.innerWidth != undefined) {
      return { width: window.innerWidth, height: window.innerHeight };
    } else {
      var D = document.documentElement;
      return { width: D.clientWidth, height: D.clientHeight };
    }
  }

  /**
   * Check to see if the element is in the viewport or not
   * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
   *
   * @api private
   * @method _elementInViewport
   * @param {Object} el
   */
  function _elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      (rect.bottom+80) <= window.innerHeight && // add 80 to get the text right
      rect.right <= window.innerWidth
    );
  }

  /**
   * Add overlay layer to the page
   *
   * @api private
   * @method _addOverlayLayer
   * @param {Object} targetElm
   */
  function _addOverlayLayer(targetElm) {
    var overlayLayer = document.createElement('div'),
        styleText = '',
        self = this;

    //set css class name
    overlayLayer.className = 'introjs-overlay';

    //check if the target element is body, we should calculate the size of overlay layer in a better way
    if (!targetElm.tagName || targetElm.tagName.toLowerCase() === 'body') {
      styleText += 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;';
      overlayLayer.setAttribute('style', styleText);
    } else {
      //set overlay layer position
      var elementPosition = _getOffset(targetElm);
      if (elementPosition) {
        styleText += 'width: ' + elementPosition.width + 'px; height:' + elementPosition.height + 'px; top:' + elementPosition.top + 'px;left: ' + elementPosition.left + 'px;';
        overlayLayer.setAttribute('style', styleText);
      }
    }

    targetElm.appendChild(overlayLayer);

    overlayLayer.onclick = function() {
      if (self._options.exitOnOverlayClick == true) {
        _exitIntro.call(self, targetElm);
      }
    };

    setTimeout(function() {
      styleText += 'opacity: ' + self._options.overlayOpacity.toString() + ';';
      overlayLayer.setAttribute('style', styleText);
    }, 10);

    return true;
  }

  /**
   * Removes open hint (tooltip hint)
   *
   * @api private
   * @method _removeHintTooltip
   */
  function _removeHintTooltip() {
    var tooltip = this._targetElement.querySelector('.introjs-hintReference');

    if (tooltip) {
      var step = tooltip.getAttribute('data-step');
      tooltip.parentNode.removeChild(tooltip);
      return step;
    }
  }

  /**
   * Start parsing hint items
   *
   * @api private
   * @param {Object} targetElm
   * @method _startHint
   */
  function _populateHints(targetElm) {
    var self = this;
    this._introItems = [];

    if (this._options.hints) {
      for (var i = 0, l = this._options.hints.length; i < l; i++) {
        var currentItem = _cloneObject(this._options.hints[i]);

        if (typeof(currentItem.element) === 'string') {
          //grab the element with given selector from the page
          currentItem.element = document.querySelector(currentItem.element);
        }

        currentItem.hintPosition = currentItem.hintPosition || this._options.hintPosition;
        currentItem.hintAnimation = currentItem.hintAnimation || this._options.hintAnimation;

        if (currentItem.element != null) {
          this._introItems.push(currentItem);
        }
      }
    } else {
      var hints = targetElm.querySelectorAll('*[data-hint]');

      if (hints.length < 1) {
        return false;
      }

      //first add intro items with data-step
      for (var i = 0, l = hints.length; i < l; i++) {
        var currentElement = hints[i];

        // hint animation
        var hintAnimation = currentElement.getAttribute('data-hintAnimation');

        if (hintAnimation) {
          hintAnimation = (hintAnimation == 'true');
        } else {
          hintAnimation = this._options.hintAnimation;
        }

        this._introItems.push({
          element: currentElement,
          hint: currentElement.getAttribute('data-hint'),
          hintPosition: currentElement.getAttribute('data-hintPosition') || this._options.hintPosition,
          hintAnimation: hintAnimation,
          tooltipClass: currentElement.getAttribute('data-tooltipClass'),
          position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
        });
      }
    }

    _addHints.call(this);

    if (document.addEventListener) {
      document.addEventListener('click', _removeHintTooltip.bind(this), false);
      //for window resize
      window.addEventListener('resize', _reAlignHints.bind(this), true);
    } else if (document.attachEvent) { //IE
      //for window resize
      document.attachEvent('onclick', _removeHintTooltip.bind(this));
      document.attachEvent('onresize', _reAlignHints.bind(this));
    }
  }

  /**
   * Re-aligns all hint elements
   *
   * @api private
   * @method _reAlignHints
   */
  function _reAlignHints() {
    for (var i = 0, l = this._introItems.length; i < l; i++) {
      var item = this._introItems[i];

      if (typeof (item.targetElement) == 'undefined') continue;

      _alignHintPosition.call(this, item.hintPosition, item.element, item.targetElement)
    }
  }

  /**
   * Hide a hint
   *
   * @api private
   * @method _hideHint
   */
  function _hideHint(stepId) {
    _removeHintTooltip.call(this);
    var hint = this._targetElement.querySelector('.introjs-hint[data-step="' + stepId + '"]');

    if (hint) {
      hint.className += ' introjs-hidehint';
    }

    // call the callback function (if any)
    if (typeof (this._hintCloseCallback) !== 'undefined') {
      this._hintCloseCallback.call(this, stepId);
    }
  }

  /**
   * Hide all hints
   *
   * @api private
   * @method _hideHints
   */
  function _hideHints() {
    var hints = this._targetElement.querySelectorAll('.introjs-hint');

    if (hints && hints.length > 0) {
      for (var i = 0; i < hints.length; i++) {
        _hideHint.call(this, hints[i].getAttribute('data-step'));
      }
    }
  }

  /**
   * Show all hints
   *
   * @api private
   * @method _showHints
   */
  function _showHints() {
    var hints = this._targetElement.querySelectorAll('.introjs-hint');

    if (hints && hints.length > 0) {
      for (var i = 0; i < hints.length; i++) {
        _showHint.call(this, hints[i].getAttribute('data-step'));
      }
    } else {
      _populateHints.call(this, this._targetElement);
    }
  };

  /**
   * Show a hint
   *
   * @api private
   * @method _showHint
   */
  function _showHint(stepId) {
    var hint = this._targetElement.querySelector('.introjs-hint[data-step="' + stepId + '"]');

    if (hint) {
      hint.className = hint.className.replace(/introjs\-hidehint/g, '');
    }
  };

  /**
   * Removes all hint elements on the page
   * Useful when you want to destroy the elements and add them again (e.g. a modal or popup)
   *
   * @api private
   * @method _removeHints
   */
  function _removeHints() {
    var hints = this._targetElement.querySelectorAll('.introjs-hint');

    if (hints && hints.length > 0) {
      for (var i = 0; i < hints.length; i++) {
        _removeHint.call(this, hints[i].getAttribute('data-step'));
      }
    }
  };

  /**
   * Remove one single hint element from the page
   * Useful when you want to destroy the element and add them again (e.g. a modal or popup)
   * Use removeHints if you want to remove all elements.
   *
   * @api private
   * @method _removeHint
   */
  function _removeHint(stepId) {
    var hint = this._targetElement.querySelector('.introjs-hint[data-step="' + stepId + '"]');

    if (hint) {
      hint.parentNode.removeChild(hint);
    }
  };

  /**
   * Add all available hints to the page
   *
   * @api private
   * @method _addHints
   */
  function _addHints() {
    var self = this;

    var oldHintsWrapper = document.querySelector('.introjs-hints');

    if (oldHintsWrapper != null) {
      hintsWrapper = oldHintsWrapper;
    } else {
      var hintsWrapper = document.createElement('div');
      hintsWrapper.className = 'introjs-hints';
    }

    for (var i = 0, l = this._introItems.length; i < l; i++) {
      var item = this._introItems[i];

      // avoid append a hint twice
      if (document.querySelector('.introjs-hint[data-step="' + i + '"]'))
        continue;

      var hint = document.createElement('a');
      _setAnchorAsButton(hint);

      (function (hint, item, i) {
        // when user clicks on the hint element
        hint.onclick = function(e) {
          var evt = e ? e : window.event;
          if (evt.stopPropagation)    evt.stopPropagation();
          if (evt.cancelBubble != null) evt.cancelBubble = true;

          _showHintDialog.call(self, i);
        };
      }(hint, item, i));

      hint.className = 'introjs-hint';

      if (!item.hintAnimation) {
        hint.className += ' introjs-hint-no-anim';
      }

      // hint's position should be fixed if the target element's position is fixed
      if (_isFixed(item.element)) {
        hint.className += ' introjs-fixedhint';
      }

      var hintDot = document.createElement('div');
      hintDot.className = 'introjs-hint-dot';
      var hintPulse = document.createElement('div');
      hintPulse.className = 'introjs-hint-pulse';

      hint.appendChild(hintDot);
      hint.appendChild(hintPulse);
      hint.setAttribute('data-step', i);

      // we swap the hint element with target element
      // because _setHelperLayerPosition uses `element` property
      item.targetElement = item.element;
      item.element = hint;

      // align the hint position
      _alignHintPosition.call(this, item.hintPosition, hint, item.targetElement);

      hintsWrapper.appendChild(hint);
    }

    // adding the hints wrapper
    document.body.appendChild(hintsWrapper);

    // call the callback function (if any)
    if (typeof (this._hintsAddedCallback) !== 'undefined') {
      this._hintsAddedCallback.call(this);
    }
  }

  /**
   * Aligns hint position
   *
   * @api private
   * @method _alignHintPosition
   * @param {String} position
   * @param {Object} hint
   * @param {Object} element
   */
  function _alignHintPosition(position, hint, element) {
    // get/calculate offset of target element
    var offset = _getOffset.call(this, element);
    var iconWidth = 20;
    var iconHeight = 20;

    // align the hint element
    switch (position) {
      default:
      case 'top-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = offset.top + 'px';
        break;
      case 'top-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = offset.top + 'px';
        break;
      case 'bottom-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'bottom-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'middle-left':
        hint.style.left = offset.left + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'middle-right':
        hint.style.left = (offset.left + offset.width - iconWidth) + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'middle-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = (offset.top + (offset.height - iconHeight) / 2) + 'px';
        break;
      case 'bottom-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = (offset.top + offset.height - iconHeight) + 'px';
        break;
      case 'top-middle':
        hint.style.left = (offset.left + (offset.width - iconWidth) / 2) + 'px';
        hint.style.top = offset.top + 'px';
        break;
    }
  }

  /**
   * Triggers when user clicks on the hint element
   *
   * @api private
   * @method _showHintDialog
   * @param {Number} stepId
   */
  function _showHintDialog(stepId) {
    var hintElement = document.querySelector('.introjs-hint[data-step="' + stepId + '"]');
    var item = this._introItems[stepId];

    // call the callback function (if any)
    if (typeof (this._hintClickCallback) !== 'undefined') {
      this._hintClickCallback.call(this, hintElement, item, stepId);
    }

    // remove all open tooltips
    var removedStep = _removeHintTooltip.call(this);

    // to toggle the tooltip
    if (parseInt(removedStep, 10) == stepId) {
      return;
    }

    var tooltipLayer = document.createElement('div');
    var tooltipTextLayer = document.createElement('div');
    var arrowLayer = document.createElement('div');
    var referenceLayer = document.createElement('div');

    tooltipLayer.className = 'introjs-tooltip';

    tooltipLayer.onclick = function (e) {
      //IE9 & Other Browsers
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      //IE8 and Lower
      else {
        e.cancelBubble = true;
      }
    };

    tooltipTextLayer.className = 'introjs-tooltiptext';

    var tooltipWrapper = document.createElement('p');
    tooltipWrapper.innerHTML = item.hint;

    var closeButton = document.createElement('a');
    closeButton.className = 'introjs-button';
    closeButton.innerHTML = this._options.hintButtonLabel;
    closeButton.onclick = _hideHint.bind(this, stepId);

    tooltipTextLayer.appendChild(tooltipWrapper);
    tooltipTextLayer.appendChild(closeButton);

    arrowLayer.className = 'introjs-arrow';
    tooltipLayer.appendChild(arrowLayer);

    tooltipLayer.appendChild(tooltipTextLayer);

    // set current step for _placeTooltip function
    this._currentStep = hintElement.getAttribute('data-step');

    // align reference layer position
    referenceLayer.className = 'introjs-tooltipReferenceLayer introjs-hintReference';
    referenceLayer.setAttribute('data-step', hintElement.getAttribute('data-step'));
    _setHelperLayerPosition.call(this, referenceLayer);

    referenceLayer.appendChild(tooltipLayer);
    document.body.appendChild(referenceLayer);

    //set proper position
    _placeTooltip.call(this, hintElement, tooltipLayer, arrowLayer, null, true);
  }

  /**
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns Element's position info
   */
  function _getOffset(element) {
    var elementPosition = {};

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    if (element instanceof SVGElement) {
      var x = element.getBoundingClientRect()
      elementPosition.top = x.top + scrollTop;
      elementPosition.width = x.width;
      elementPosition.height = x.height;
      elementPosition.left = x.left + scrollLeft;
    } else {
      //set width
      elementPosition.width = element.offsetWidth;

      //set height
      elementPosition.height = element.offsetHeight;

      //calculate element top and left
      var _x = 0;
      var _y = 0;
      while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
        _x += element.offsetLeft;
        _y += element.offsetTop;
        element = element.offsetParent;
      }
      //set top
      elementPosition.top = _y;
      //set left
      elementPosition.left = _x;
    }

    return elementPosition;
  }

  /**
   * Gets the current progress percentage
   *
   * @api private
   * @method _getProgress
   * @returns current progress percentage
   */
  function _getProgress() {
    // Steps are 0 indexed
    var currentStep = parseInt((this._currentStep + 1), 10);
    return ((currentStep / this._introItems.length) * 100);
  }

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
   *
   * @param obj1
   * @param obj2
   * @returns obj3 a new object based on obj1 and obj2
   */
  function _mergeOptions(obj1,obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  var introJs = function (targetElm) {
    if (typeof (targetElm) === 'object') {
      //Ok, create a new instance
      return new IntroJs(targetElm);

    } else if (typeof (targetElm) === 'string') {
      //select the target element with query selector
      var targetElement = document.querySelector(targetElm);

      if (targetElement) {
        return new IntroJs(targetElement);
      } else {
        throw new Error('There is no element with given selector.');
      }
    } else {
      return new IntroJs(document.body);
    }
  };

  /**
   * Current IntroJs version
   *
   * @property version
   * @type String
   */
  introJs.version = VERSION;

  //Prototype
  introJs.fn = IntroJs.prototype = {
    clone: function () {
      return new IntroJs(this);
    },
    setOption: function(option, value) {
      this._options[option] = value;
      return this;
    },
    setOptions: function(options) {
      this._options = _mergeOptions(this._options, options);
      return this;
    },
    start: function () {
      _introForElement.call(this, this._targetElement);
      return this;
    },
    goToStep: function(step) {
      _goToStep.call(this, step);
      return this;
    },
    addStep: function(options) {
      if (!this._options.steps) {
        this._options.steps = [];
      }

      this._options.steps.push(options);

      return this;
    },
    addSteps: function(steps) {
      if (!steps.length) return;

      for(var index = 0; index < steps.length; index++) {
        this.addStep(steps[index]);
      }

      return this;
    },
    goToStepNumber: function(step) {
      _goToStepNumber.call(this, step);

      return this;
    },
    nextStep: function() {
      _nextStep.call(this);
      return this;
    },
    previousStep: function() {
      _previousStep.call(this);
      return this;
    },
    exit: function(force) {
      _exitIntro.call(this, this._targetElement, force);
      return this;
    },
    refresh: function() {
      _refresh.call(this);
      return this;
    },
    onbeforechange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introBeforeChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforechange was not a function');
      }
      return this;
    },
    onchange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onchange was not a function.');
      }
      return this;
    },
    onafterchange: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introAfterChangeCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onafterchange was not a function');
      }
      return this;
    },
    oncomplete: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introCompleteCallback = providedCallback;
      } else {
        throw new Error('Provided callback for oncomplete was not a function.');
      }
      return this;
    },
    onhintsadded: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintsAddedCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintsadded was not a function.');
      }
      return this;
    },
    onhintclick: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintClickCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintclick was not a function.');
      }
      return this;
    },
    onhintclose: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._hintCloseCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onhintclose was not a function.');
      }
      return this;
    },
    onexit: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introExitCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onexit was not a function.');
      }
      return this;
    },
    onbeforeexit: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._introBeforeExitCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforeexit was not a function.');
      }
      return this;
    },
    addHints: function() {
      _populateHints.call(this, this._targetElement);
      return this;
    },
    hideHint: function (stepId) {
      _hideHint.call(this, stepId);
      return this;
    },
    hideHints: function () {
      _hideHints.call(this);
      return this;
    },
    showHint: function (stepId) {
      _showHint.call(this, stepId);
      return this;
    },
    showHints: function () {
      _showHints.call(this);
      return this;
    },
    removeHints: function () {
      _removeHints.call(this);
      return this;
    },
    removeHint: function (stepId) {
      _removeHint.call(this, stepId);
      return this;
    },
    showHintDialog: function (stepId) {
      _showHintDialog.call(this, stepId);
      return this;
    }
  };

  exports.introJs = introJs;
  return introJs;
}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */


;(function(namespace) {
    "use strict";

    namespace.Cues = {
        "chalkysticks": "image/diagrammer/cues/generic.svg",
        "sneakypete": "image/diagrammer/cues/sneakypete.svg"
    };

    namespace.BallSets = {
        "chalkysticks": [
            "ball-cue.svg",
            "ball-ghost.svg",
            "ball-1.svg",
            "ball-2.svg",
            "ball-3.svg",
            "ball-4.svg",
            "ball-5.svg",
            "ball-6.svg",
            "ball-7.svg",
            "ball-8.svg",
            "ball-9.svg",
            "ball-10.svg",
            "ball-11.svg",
            "ball-12.svg",
            "ball-13.svg",
            "ball-14.svg",
            "ball-15.svg"
        ],

        "cyclop": [
            "ball-cue.svg",
            "ball-ghost.svg",
            "ball-1.svg",
            "ball-2.svg",
            "ball-3.svg",
            "ball-4.svg",
            "ball-5.svg",
            "ball-6.svg",
            "ball-7.svg",
            "ball-8.svg",
            "ball-9.svg",
            "ball-10.svg",
            "ball-11.svg",
            "ball-12.svg",
            "ball-13.svg",
            "ball-14.svg",
            "ball-15.svg"
        ],

        "generic": [
            "ball-cue.svg",
            "ball-ghost.svg",
            "ball-solid-generic-8.svg",
            "ball-solid-generic-ghost.svg",
            "ball-solid-generic-red.svg",
            "ball-solid-generic-yellow.svg",
            "ball-solid-generic.svg",
            "ball-stripe-generic.svg"
        ],

        "snooker": [
            "ball-cue.svg",
            "ball-ghost.svg",
            "ball-red.svg",
            "ball-yellow.svg",
            "ball-green.svg",
            "ball-brown.svg",
            "ball-pink.svg",
            "ball-blue.svg",
            "ball-black.svg"
        ],

        "billiards": [
            "ball-cue.svg",
            "ball-ghost.svg",
            "ball-red.svg",
            "ball-yellow.svg",
        ]
    };


    // Events
    // ----------------------------------------------------------------------

    namespace.Events.MASSE      = "masse";
    namespace.Events.START_LINE = "line:start";
    namespace.Events.END_LINE   = "line:end";


    // Constants
    // ----------------------------------------------------------------------

    namespace.Constants.BALLS_URL = "/image/diagrammer/balls/{setType}/{ball}";


})(window.pm || (window.pm = {}));


// Helpers
// --------------------------------------------------------------------------

// convert to string
// var markup = new XMLSerializer().serializeToString(xmlObject.documentElement);

// ready for svg
// var doc = new DOMParser().parseFromString(markup, "application/xml");

// cache
var XMLCache = {};

// xml loader
function xmlLoad(url, callback) {
    var cached;

    if (cached = XMLCache[url]) {
        cached.xmlObj = new DOMParser().parseFromString(cached.markup, "application/xml");
        return callback && callback(cached.xmlObj, cached.markup);
    }

    $.get(url, function(xmlObject) {
        var markup = xmlToString(xmlObject);

        XMLCache[url] = {
            xmlObj: xmlObject,
            markup: markup
        };

        callback && callback(xmlObject, markup);
    });
};

function xmlToString(xmlObject) {
    return new XMLSerializer().serializeToString(xmlObject.documentElement);
};


// Math
// --------------------------------------------------------------------------

function lineDistanceNS(line) {
    var x1, x2, y1, y2;

    x1 = line.getAttributeNS(null, "x1");
    x2 = line.getAttributeNS(null, "x2");
    y1 = line.getAttributeNS(null, "y1");
    y2 = line.getAttributeNS(null, "y2");

    return lineDistance(x1, y1, x2, y2);
}

function lineDistance(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) );
}

function lineAngle(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    return Math.atan2(dy, dx) * (180 / Math.PI);
}

function $overlap($one, $two) {
    var bb1 = { x: $one.offset().left, y: $one.offset().top, w: $one.width(), h: $one.height() },
        bb2 = { x: $two.offset().left, y: $two.offset().top, w: $two.width(), h: $two.height() };

    var dist = lineDistance(bb1.x + bb1.w / 2, bb1.y + bb1.h / 2, bb2.x + bb2.w / 2, bb2.y + bb2.h / 2),
        angle = lineAngle(bb1.x + bb1.w / 2, bb1.y + bb1.h / 2, bb2.x + bb2.w / 2, bb2.y + bb2.h / 2);

    if (dist < bb1.w || dist < bb2.w) {
        return {
            distance  : dist,
            angle     : angle,
            difference: bb1.w - dist
        };
    }

    return false;
}

function overlapNS(one, two) {
    var bb1 = {
            x: parseFloat(one.getAttribute("x")),
            y: parseFloat(one.getAttribute("y")),
            w: one.width.baseVal.value,
            h: one.height.baseVal.value
        },
        bb2 = {
            x: parseFloat(two.getAttribute("x")),
            y: parseFloat(two.getAttribute("y")),
            w: two.height.baseVal.value,
            h: two.height.baseVal.value
        };

    if (isNaN(bb1.x)) {
        bb1 = one.getBBox();
    }

    if (isNaN(bb2.x)) {
        bb2 = two.getBBox();
    }

    var dist = lineDistance(bb1.x + bb1.w / 2, bb1.y + bb1.h / 2, bb2.x + bb2.w / 2, bb2.y + bb2.h / 2),
        angle = lineAngle(bb1.x + bb1.w / 2, bb1.y + bb1.h / 2, bb2.x + bb2.w / 2, bb2.y + bb2.h / 2);

    if (dist < bb1.w || dist < bb2.w) {
        return {
            distance  : dist,
            angle     : angle,
            difference: bb1.w - dist
        };
    }

    return false;
}


// Colors
// --------------------------------------------------------------------------

function shadeColor(color, percent) {
    var num = parseInt(color.slice(1),16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;

    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}


// Mobile Related
// -------------------------------------------------------------------------

function enterFullscreen(element) {
    console.log( element);

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function isFullscreen() {
    return document.webkitIsFullScreen || document.mozFullScreen || false;
}

function toggleFullScreen(event) {
    var element = document.documentElement || document.body;

    if (event instanceof HTMLElement) {
        element = event;
    }

    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };

    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
}

// function toggleFullScreen() {
//     if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen();
//     } else {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//     }
// }

function convertClientX(e) {
    if (e.originalEvent.touches && e.originalEvent.touches.length) {
        return e.originalEvent.touches[0].clientX;
    }
    else {
        return e.clientX;
    }
}

function convertClientY(e) {
    if (e.originalEvent.touches && e.originalEvent.touches.length) {
        return e.originalEvent.touches[0].clientY;
    }
    else {
        return e.clientY;
    }
}

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

;(function(namespace) {
    "use strict";

    var Flags = namespace.Flags,
        State = namespace.State;

    namespace.App = Backbone.View.extend({

        initialize: function() {
            State.hasVisited = Flags.isMobile ? true : localStorage.getItem("has-visited");
            State.hasV1Banner = Flags.isMobile ? false : !!!localStorage.getItem("closed-v1-banner")
        },

        attachEvents: function() {
            window.page && window.page.attachEvents();
        },

        render: function() {
            // render
            if (window.page) {
                window.page.render();
                window.page.animateInStart();
                window.page.animateIn();
            }

            // Test if iOS
            if (Flags.isIOS && Flags.isSafari) {
                // namespace.$html.addClass("state-mobile-ios");
            }

            // css
            $("body").css("opacity", 1);
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	namespace.Settings = {
		get: function (type, name) {
			var $el, inputType;

			$el = $("[name='setting-" + type + '-' + name + "']");
			inputType = $el.attr('type');

			switch (inputType) {
				case 'checkbox':
				case 'radio':
					$el = $("[name='setting-" + type + '-' + name + "']:checked");
					break;
			}

			return $el.val();
		},

		getColor: function (type) {
			var $el = $("[name='setting-" + type + "-color']");

			return $el.val();
		},
	};
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 *
 * @status  COMPLETE
 */

(function (namespace) {
	'use strict';

	var Constants = namespace.Constants;

	namespace.View_BallTray = namespace.View_Base.extend({
		name: 'View_BallTray',

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onBallLoaded', 'onDragStart', 'onDragStop', 'onSettingsChange');

			// super
			namespace.View_Base.prototype.initialize.call(this);
		},

		attachEvents: function () {
			// super
			namespace.View_Base.prototype.attachEvents.call(this);

			namespace.on('settings:change', this.onSettingsChange);
		},

		detachEvents: function () {
			// super
			namespace.View_Base.prototype.detachEvents.call(this);

			namespace.off('settings:change', this.onSettingsChange);
		},

		/**
		 * Used when replacing tray with a new set
		 */
		clear: function () {
			this.$('.ball').remove();
		},

		load: function (setType) {
			setType || (setType = 'chalkysticks');

			var ballset = namespace.BallSets[setType],
				self = this,
				url;

			// iterate through all balls, load them in, and cache them locally
			_(ballset).each(function (ball) {
				url = Constants.BALLS_URL.replace('{setType}', setType);
				url = url.replace('{ball}', ball);

				// we load svg files for balls
				xmlLoad(
					url,
					(function (url, ball) {
						return function (xmlObj, markup) {
							var ballId = ball.split('.')[0];

							self.onBallLoaded(xmlObj, markup, url, ballId);
						};
					})(url, ball),
				);
			}, this);
		},

		// Settings
		// ----------------------------------------------------------------

		settingBallsType: function (params) {
			// clear existing
			this.clear();

			// load new
			this.load(params.value);
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onBallLoaded: function (xmlObj, markup, url, ball) {
			var $el;

			xmlObj = new DOMParser().parseFromString(markup, 'application/xml');

			// modify incoming
			xmlObj.documentElement.setAttribute('class', 'ball');

			// add to document
			this.$('#BallHolder_Tray_Balls').append(xmlObj.documentElement);

			// get element just added
			$el = this.$('.ball').last();

			// add url reference
			$el.attr('data-url', url);
			$el.attr('data-ball', ball);

			// animate in
			this.animateBallIn($el);

			// draggable for last ball
			$el.draggable({
				revert: true,
				helper: () => {
					var domTable = document.querySelector('#DOMTable');
					var scale = parseFloat(domTable.dataset.scale || 1);

					// return "<img class='ball-helper' src='/image/icon/crosshair.png' height='20'  />";
					return `
						<div class='ball-helper' style="transform: scale(${scale}); transform-origin: top left;">
							<img src='${url}' />
						</div>
					`;
				},
				start: this.onDragStart,
				stop: this.onDragStop,
			});
		},

		onDragStart: function (e) {
			$('#BallHolder_Tray').css('overflow', 'visible');

			namespace.$html.addClass('state-ball-tray-dragging');
		},

		onDragStop: function (e) {
			$('#BallHolder_Tray').css('overflow', 'hidden');

			// trigger
			namespace.trigger('hide:ballTray');

			namespace.$html.removeClass('state-ball-tray-dragging state-ball-tray-show');
		},

		onSettingsChange: function (e) {
			var settingMethod = e.name.replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});

			if (this[settingMethod]) {
				this[settingMethod](e);
			}
		},

		// Animation
		// -------------------------------------------------------------

		animateInStart: function () {
			this.$el.css('y', '100%');
		},

		animateIn: function (callback) {
			this.$el.animate(
				{
					y: '0%',
				},
				300,
			);
		},

		animateBallIn: function ($el) {
			$el.css({
				x: window.innerWidth - 250,
				rotate: Math.random() * 300 + 'deg',
			}).animate(
				{
					x: 0,
					rotate: '-360deg',
				},
				1200,
			);
		},

		animateBallsOut: function (callback) {
			// length
			if (this.$('.ball').length == 0) {
				return callback && callback();
			}

			// animate
			this.$('.ball')
				.css({
					x: 0,
				})
				.animate(
					{
						x: '-800px',
						rotate: '-960deg',
					},
					750,
					function () {
						$(this).remove();
					},
				);

			// callback
			setTimeout(callback || $.noop, 2300);
		},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	var Keys = namespace.Keys,
		Flags = namespace.Flags,
		Settings = namespace.Settings;

	namespace.View_Menu = namespace.View_Base.extend({
		events: {
			'click .btn': 'onClickButton',
			'click input': 'onClickInput',
			'input input[type=range]': 'onChangeInput',
			'keydown input': 'onKeydownInput',
			'click #Nav_Balls .action-add': 'onClickAddBall',
			'click #Nav_Cues .action-add': 'onClickAddCue',
			'click #Nav_Text .action-add': 'onClickAddText',
			'click #Nav_Shapes .action-add': 'onClickAddShape',
			'click #Nav_Cues .action-add': 'onClickAddCue',
			'click #Nav_Balls .option-rackable': 'onClickRackable',

			// order of operations
			'click section > header': 'onClickSectionHeader',
		},

		name: 'View_Menu',

		// <Boolean> Backbone Touch prevents default on touch by default
		touchPrevents: false,

		// <Number> How quickly the accordian opens/closes
		transitionDuration: 250,

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onKeyDown');

			// super
			namespace.View_Base.prototype.initialize.call(this);
		},

		attachEvents: function () {
			// super
			namespace.View_Base.prototype.attachEvents.call(this);

			// used for hotkeys
			$(document).on('keydown', this.onKeyDown);
		},

		detachEvents: function () {
			// super
			namespace.View_Base.prototype.detachEvents.call(this);

			// used for hotkeys
			$(document).off('keydown', this.onKeyDown);
		},

		toggleTab: function (sectionID) {
			var $el = this.$('#' + sectionID + ' .settings');

			if ($el.is(':visible')) {
				this.closeTab(sectionID);
			} else {
				this.openTab(sectionID);
			}
		},

		openTab: function (sectionID) {
			this.$('#' + sectionID)
				.addClass('is-open')
				.find('.settings')
				.stop()
				.slideDown(this.transitionDuration);
		},

		closeTab: function (sectionID) {
			this.$('#' + sectionID)
				.removeClass('is-open')
				.find('.settings')
				.stop()
				.slideUp(this.transitionDuration);
		},

		closeAllTabs: function () {
			this.$('.is-open').removeClass('is-open');

			this.$('.settings').stop().slideUp(this.transitionDuration);
		},

		rotateSetting: function (name) {
			var $targets = this.$("[name='" + name + "']"),
				$checked = this.$("[name='" + name + "']:checked"),
				indexOf = $targets.index($checked);

			// unset all
			$targets.attr('checked', false);

			// toggle next setting
			if (indexOf >= $targets.length - 1) {
				$targets.eq(0).prop('checked', true);
			} else {
				$targets.eq(indexOf + 1).prop('checked', true);
			}

			// change setting
			this.changeSetting(name, this.$("[name='" + name + "']:checked"));
		},

		toggleSetting: function (name) {
			var $target = this.$("[name='" + name + "']");

			// change setting
			$target.prop('checked', !$target.is(':checked'));

			// set setting
			this.changeSetting(name);
		},

		changeSetting: function (name, target) {
			var $target = target || this.$("[name='" + name + "']");

			var name = name,
				value = $target.val(),
				checked = $target.is(':checked');

			namespace.trigger('settings:change', {
				checked: checked,
				name: name,
				value: value,
			});
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onClickAddBall: function (e) {
			namespace.preventDefault(e);

			// open section
			if (!$('#Nav_Balls').hasClass('is-open')) {
				$('#Nav_Balls header').click();
			}

			// trigger
			namespace.trigger('show:ballTray');

			//
			namespace.$html.addClass('state-ball-tray-show');
		},

		onClickAddCue: function (e) {
			namespace.preventDefault(e);

			// open section
			if (!$('#Nav_Cues').hasClass('is-open')) {
				$('#Nav_Cues header').click();
			}

			// trigger
			namespace.trigger('add:cue');
		},

		onClickAddShape: function (e) {
			namespace.preventDefault(e);

			// open section
			if (!$('#Nav_Shapes').hasClass('is-open')) {
				$('#Nav_Shapes header').click();
			}

			// trigger
			namespace.trigger('add:shape');
		},

		onClickAddText: function (e) {
			namespace.preventDefault(e);

			// open section
			if (!$('#Nav_Text').hasClass('is-open')) {
				$('#Nav_Text header').click();
			}

			// trigger
			namespace.trigger('add:text');
		},

		onClickButton: function (e) {
			e.stopPropagation();

			var $target = $(e.currentTarget),
				name = $target.attr('name');

			Flags.isMobile && setTimeout(this.closeAllTabs, 1);

			name && setTimeout(this.changeSetting, 1, name, $target);
		},

		onClickInput: function (e) {
			e.stopPropagation();

			var $target = $(e.currentTarget),
				name = $target.attr('name');

			Flags.isMobile && setTimeout(this.closeAllTabs, 1);

			name && setTimeout(this.changeSetting, 1, name, $target);
		},

		onChangeInput: function (e) {
			e.stopPropagation();

			var $target = $(e.currentTarget),
				name = $target.attr('name');

			name && setTimeout(this.changeSetting, 1, name, $target);
		},

		onClickRackable: function (e) {
			var $parent = this.$('#Nav_Balls'),
				value = Settings.get('balls', 'type'),
				$target = this.$("[name='setting-balls-type'][value='" + value + "']"),
				rackType = $target.attr('data-rackable');

			$parent
				.find('.options-rack')
				.attr('class', 'options-rack')
				.addClass('rack-type-' + rackType);
		},

		onClickSectionHeader: function (e) {
			e.preventDefault();

			var id = $(e.currentTarget).parent().attr('id');

			// close others
			this.closeAllTabs();

			// toggle me
			this.toggleTab(id);
		},

		/**
		 * onKeydownInput
		 *
		 * Cancel up and down when you're highlighting a checkbox
		 */
		onKeydownInput: function (e) {
			return false;
		},

		onKeyDown: function (e) {
			var $checkbox,
				$radio,
				nodeName = e.target.nodeName.toString().toLowerCase();

			// ignore if we are an input or textarea
			if (nodeName == 'input' || nodeName == 'textarea') {
				return;
			}

			switch (e.keyCode) {
				// KEY: A
				// Toggle Arrows On/Off
				case Keys.A:
					this.toggleSetting('setting-line-arrows');
					break;

				// KEY: B
				// Change Balls, iterates through three choices
				case Keys.B:
					this.rotateSetting('setting-balls-type');
					this.onClickRackable();
					break;

				// KEY: L
				// Change Line Style, iterates through three choices
				case Keys.L:
					this.rotateSetting('setting-line-type');
					break;

				// KEY: G
				// Toggle grids
				case Keys.G:
					this.rotateSetting('setting-table-grid');
					break;

				// KEY: T
				// Change Table Style, iterates through three choices
				case Keys.T:
					this.rotateSetting('setting-table-type');
					break;
			}
		},

		// Animation
		// ----------------------------------------------------------------

		animateInStart: function () {
			this.$el.css('x', '-100%');

			this.$('nav > section').css({
				opacity: 0,
				x: '-20%',
			});

			this.$('> footer').css({
				opacity: 0,
				y: '100%',
			});
		},

		animateIn: function (callback) {
			this.$el.animate(
				{
					x: '0%',
				},
				300,
			);

			this.$('nav > section').each(function (index) {
				$(this)
					.delay(400 + index * 100)
					.animate(
						{
							opacity: 1,
							x: '0%',
						},
						250,
						function () {
							$(this).css('transform', '');
						},
					);
			});

			this.$('> footer')
				.delay(400 + 250)
				.animate(
					{
						opacity: 1,
						y: '0%',
					},
					250,
				);
		},

		animateOut: function (callback) {},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	var Events = namespace.Events;

	namespace.View_SVGTable = namespace.View_Base.extend({
		name: 'View_SVGTable',

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onActionClear', 'onWindowResize');

			// super
			namespace.View_Base.prototype.initialize.call(this);

			// views
			this.views.add(
				new namespace.View_SVGTable_Balls({
					el: this.$('.balls'),
					parent: this,
				}),
				'balls',
			);

			this.views.add(
				new namespace.View_SVGTable_Cues({
					el: this.$('.cues'),
					parent: this,
				}),
				'cues',
			);

			this.views.add(
				new namespace.View_SVGTable_Lines({
					el: this.$('.lines'),
					parent: this,
				}),
				'lines',
			);

			this.views.add(
				new namespace.View_SVGTable_Shapes({
					el: this.$('.shapes'),
					parent: this,
				}),
				'shapes',
			);

			this.views.add(
				new namespace.View_SVGTable_Text({
					el: this.$('.text'),
					parent: this,
				}),
				'text',
			);

			// fix svg table width/height
			this.$el && this.$el[0] && this.$el[0].removeAttribute('width');
			this.$el && this.$el[0] && this.$el[0].removeAttribute('height');
		},

		attachEvents: function () {
			namespace.View_Base.prototype.attachEvents.call(this);

			// clear everything
			namespace.on('action:clear', this.onActionClear);

			// only way we can really get the table right
			$(window).on('resize', this.onWindowResize);

			// start resize
			$(window).resize();
		},

		detachEvents: function () {
			namespace.View_Base.prototype.detachEvents.call(this);

			this.$el.off('click', this.onClick);
			$(window).off('resize', this.onWindowResize);
			namespace.off('action:clear', this.onActionClear);
		},

		changeTable: function (tableType, callback) {
			var url = '/image/diagrammer/tables/' + tableType + '.svg',
				$parent = this.$el.parent(),
				self = this;

			// wipe table container
			$parent.html('');

			// detach
			this.detachEvents();

			// load balls or get them from cache
			xmlLoad(
				url,
				function (xmlObject, markup) {
					var randID = tableType,
						node;

					// create node
					node = xmlObject.documentElement;
					node.setAttribute('id', 'SVGTable');

					// save
					self.el = node;
					self.$el = $(node);

					// add to group
					$parent.append(self.$el);

					// reset references
					self.$v('cues').setElement(self.$('.cues'));
					self.$v('balls').setElement(self.$('.balls'));
					self.$v('lines').setElement(self.$('.lines'));
					self.$v('shapes').setElement(self.$('.shapes'));
					self.$v('text').setElement(self.$('.text'));

					// attach
					self.attachEvents();

					// callback
					callback && callback();
				},
				true,
			);
		},

		// Helpers
		// ----------------------------------------------------------------

		addBall: function (url, x, y) {
			this.$v('balls').add(url, x, y);
		},

		addCue: function (url, x, y) {
			this.$v('cue').add(url, x, y);
		},

		addLine: function (x, y) {
			this.$v('lines').add(x, y);
		},

		addShape: function (url, x, y) {
			this.$v('shape').add(url, x, y);
		},

		addText: function (url, x, y) {
			this.$v('text').add(url, x, y);
		},

		setClothColor: function (color) {
			var darkerColor = tinycolor(color).darken(10).toString();

			// cloth color
			this.$('.cloth').css('fill', color);

			// rail color
			this.$('.rail').css('fill', darkerColor);
		},

		shuffle: function () {
			var self = this,
				balls;

			this.$v('balls')
				.$el.find('.ball')
				.each(function (index, ball) {
					var ballSize = 20,
						railSize = 10,
						bbox = self.$('.cloth')[0].getBBox(),
						x = bbox.x + railSize,
						y = bbox.y + railSize,
						w = bbox.width - ballSize * 2 - railSize * 2,
						h = bbox.height - ballSize * 2 - railSize * 2,
						x2 = x + Math.random() * w + ballSize / 2,
						y2 = y + Math.random() * h + ballSize / 2;

					// randomly move ball
					ball.setAttribute('x', x2);
					ball.setAttribute('y', y2);

					// fix collisions
					self.$v('balls').fixCollisions(ball);
				});
		},

		// Getters / Setters
		// ----------------------------------------------------------------

		// Note: Using the BBox extended the width if there were things that
		// clipped beyond the bounds of the table like shapes, cues, etc. It
		// threw off the ratio which then altered our mouse position and made
		// objects move erratically.
		getRatio: function () {
			var svg = this.$el[0],
				// bbox = svg.getBBox(),
				svgWidth = ~~svg.getAttributeNS(null, 'owidth'),
				width = this.$el.width();

			return width / svgWidth;
			// return width / bbox.width;
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onActionClear: function () {
			this.$('.balls *').remove();
			this.$('.cues *').remove();
			this.$('.lines *').remove();
			this.$('.shapes *').remove();
			this.$('.text *').remove();
		},

		onWindowResize: function () {
			// NOTE: parent.parent refers to #Table, we should
			// adjust that.

			var pHeight = this.$el.parent().parent().height(),
				pWidth = this.$el.parent().parent().width(),
				sHeight = parseFloat(this.$el[0].getAttribute('oheight')),
				sWidth = parseFloat(this.$el[0].getAttribute('owidth')),
				wRatio = pWidth / sWidth,
				hRatio = pHeight / sHeight;

			// are we too large
			if (sHeight * wRatio > pHeight) {
				this.$el.parent().attr('data-scale', hRatio);

				this.$el.css({
					height: pHeight,
					width: sWidth * hRatio,
				});
			} else {
				this.$el.parent().attr('data-scale', wRatio);

				this.$el.css({
					height: sHeight * wRatio,
					width: pWidth,
				});
			}
		},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	var Constants = namespace.Constants,
		Flags = namespace.Flags,
		Settings = namespace.Settings;

	namespace.View_Table = namespace.View_Base.extend({
		name: 'View_Table',

		// <String> Default table color
		defaultColor: '#4A98D8',

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onClickShuffle', 'onSettingsChange');

			// super
			namespace.View_Base.prototype.initialize.call(this);

			// add svg table
			this.views.add(
				new namespace.View_SVGTable({
					el: this.$('svg'),
				}),
				'svg-table',
			);

			// colors
			this.setupDroppable();
			this.setupColorPicker();
		},

		attachEvents: function () {
			// super
			namespace.View_Base.prototype.attachEvents.call(this);

			namespace.on('action:shuffle', this.onClickShuffle);
			namespace.on('settings:change', this.onSettingsChange);
		},

		detachEvents: function () {
			// super
			namespace.View_Base.prototype.detachEvents.call(this);

			namespace.off('action:shuffle', this.onClickShuffle);
			namespace.off('settings:change', this.onSettingsChange);
		},

		setupColorPicker: function () {
			var self = this;

			$('#Nav_Table .jscolor').colorPicker({
				color: this.defaultColor,
				renderCallback: function ($elm, toggled) {
					var colors = this.color.colors;

					self.$v('svg-table').setClothColor('#' + colors.HEX);
				},
			});
		},

		setupDroppable: function () {
			var svgTable = this.$v('svg-table'),
				domTable = this.$('#DOMTable');

			domTable.droppable({
				drop: function (event, ui) {
					if (!ui.helper.hasClass('ball-helper')) {
						return;
					}

					var scale = parseFloat(domTable.attr('data-scale')),
						height = ui.helper.height(),
						width = ui.helper.width();

					var uiX = ui.offset.left,
						uiY = ui.offset.top,
						sX = domTable.offset().left,
						sY = domTable.offset().top,
						sW = domTable.width(),
						sH = domTable.height();

					var translatedX = uiX - sX,
						translatedY = uiY - sY;

					// this position is TOP + LEFT of the draggable ball...
					// so we'll either need to find center
					var scaledX = translatedX / scale,
						scaledY = translatedY / scale;

					// translate it again
					scaledX += width / 2;
					scaledY += height / 2;

					console.log('Dropping ball at: ' + scaledX + ', ' + scaledY, ui.draggable);

					// add ball
					svgTable.addBall(ui.draggable.attr('data-url'), scaledX, scaledY);

					// tooltip check
					page.showHelpForBalls();
				},
			});
		},

		animateToTable: function (tableType) {
			var self = this;

			this.$v('svg-table').changeTable(tableType, function () {
				self.animateInStart();
				self.animateIn();
			});
		},

		// Settings
		// ----------------------------------------------------------------

		settingRack: function (params) {
			var type = params.value;

			switch (type) {
				case '8-ball':
					this.rack8Ball();
					break;

				case '9-ball':
					this.rack9Ball();
					break;

				case '10-ball':
					this.rack10Ball();
					break;

				case 'blackball':
					this.rackBlackball();
					break;

				case 'billiards':
					this.rackBilliards();
					break;

				case 'snooker':
					this.rackSnooker();
					break;
			}
		},

		settingTableType: function (params) {
			var tableType = params.value;

			// update table
			this.animateToTable(tableType);
		},

		settingTableClothcolor: function (params) {},

		settingTableHeadspot: function (params) {
			var $el = this.$('.headspot');

			params.checked ? $el.show() : $el.hide();
		},

		settingTableBalkline: function (params) {
			var $el = this.$('.balkline');

			params.checked ? $el.show() : $el.hide();
		},

		settingTableFootspot: function (params) {
			var $el = this.$('.footspot');

			params.checked ? $el.show() : $el.hide();
		},

		settingTableRackoutline: function (params) {
			var $el = this.$('.rackoutline');

			params.checked ? $el.show() : $el.hide();
		},

		settingTableGrid: function (params) {
			var $el = this.$('.grid');

			params.checked ? $el.show() : $el.hide();
		},

		// Racking Actions
		// ----------------------------------------------------------------

		rack8Ball: function () {
			var table = this.$v('svg-table'),
				setType = Settings.get('balls', 'type'),
				ballSize = 19,
				balls = ['ball-1.svg', 'ball-2.svg', 'ball-3.svg', 'ball-4.svg', 'ball-5.svg', 'ball-6.svg', 'ball-7.svg', 'ball-9.svg', 'ball-10.svg', 'ball-11.svg', 'ball-12.svg', 'ball-13.svg', 'ball-14.svg', 'ball-15.svg'],
				p = table.$el.find('.footspot')[0].getBBox(),
				r = 0,
				x = 0,
				y = 0,
				ox = p.x + p.width / 2,
				oy = p.y + p.height / 2,
				url;

			// clear table
			namespace.trigger('action:clear');

			// mix up balls
			balls = _.shuffle(balls);
			balls.splice(4, 0, 'ball-8.svg');

			// add
			for (var i in balls) {
				url = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join(balls[i]);

				if ([1, 3, 6, 10].indexOf(~~i) > -1) {
					x += ballSize;
					y = -ballSize / 2 - (ballSize / 2) * r;
					r++;
				}

				table.addBall(url, ox + x, oy + y);

				y += ballSize;
			}
		},

		rack9Ball: function () {
			var table = this.$v('svg-table'),
				setType = Settings.get('balls', 'type'),
				ballSize = 19,
				balls = ['ball-2.svg', 'ball-3.svg', 'ball-4.svg', 'ball-5.svg', 'ball-6.svg', 'ball-7.svg', 'ball-8.svg'],
				p = table.$el.find('.footspot')[0].getBBox(),
				r = 0,
				x = 0,
				y = 0,
				ox = p.x + p.width / 2,
				oy = p.y + p.height / 2,
				url;

			// clear table
			namespace.trigger('action:clear');

			// mix up balls
			balls = _.shuffle(balls);
			balls.unshift('ball-1.svg');
			balls.splice(4, 0, 'ball-9.svg');

			// add
			for (var i in balls) {
				url = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join(balls[i]);

				if ([1, 3, 6, 8].indexOf(~~i) > -1) {
					x += ballSize;
					y = -ballSize / 2 - (ballSize / 2) * r;

					r += i < 3 ? 1 : -1;
				}

				table.addBall(url, ox + x, oy + y);

				y += ballSize;
			}
		},

		rack10Ball: function () {
			var table = this.$v('svg-table'),
				setType = Settings.get('balls', 'type'),
				ballSize = 19,
				balls = ['ball-2.svg', 'ball-3.svg', 'ball-4.svg', 'ball-5.svg', 'ball-6.svg', 'ball-7.svg', 'ball-9.svg', 'ball-8.svg'],
				p = table.$el.find('.footspot')[0].getBBox(),
				r = 0,
				x = 0,
				y = 0,
				ox = p.x + p.width / 2,
				oy = p.y + p.height / 2,
				url;

			// clear table
			namespace.trigger('action:clear');

			// mix up balls
			balls = _.shuffle(balls);
			balls.unshift('ball-1.svg');
			balls.splice(4, 0, 'ball-10.svg');

			// add
			for (var i in balls) {
				url = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join(balls[i]);

				if ([1, 3, 6, 10].indexOf(~~i) > -1) {
					x += ballSize;
					y = -ballSize / 2 - (ballSize / 2) * r;
					r++;
				}

				table.addBall(url, ox + x, oy + y);

				y += ballSize;
			}
		},

		rackBlackball: function () {
			var table = this.$v('svg-table'),
				setType = Settings.get('balls', 'type'),
				ballSize = 19,
				balls = ['ball-solid-generic-yellow.svg', 'ball-solid-generic-yellow.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-yellow.svg', 'ball-solid-generic-yellow.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-yellow.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-yellow.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-red.svg', 'ball-solid-generic-yellow.svg'],
				p = table.$el.find('.footspot')[0].getBBox(),
				r = 0,
				x = 0,
				y = 0,
				ox = p.x + p.width / 2,
				oy = p.y + p.height / 2,
				url;

			// clear table
			namespace.trigger('action:clear');

			// mix up balls
			balls.splice(4, 0, 'ball-solid-generic-8.svg');

			// add
			for (var i in balls) {
				url = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join(balls[i]);

				if ([1, 3, 6, 10].indexOf(~~i) > -1) {
					x += ballSize;
					y = -ballSize / 2 - (ballSize / 2) * r;
					r++;
				}

				table.addBall(url, ox + x, oy + y);

				y += ballSize;
			}
		},

		rackBilliards: function () {
			var table = this.$v('svg-table'),
				setType = Settings.get('balls', 'type'),
				ballSize = 19,
				ballRed = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join('ball-red.svg'),
				ballYellow = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join('ball-yellow.svg'),
				ballWhite = Constants.BALLS_URL.split('{setType}').join(setType).split('{ball}').join('ball-cue.svg'),
				headspot = table.$el.find('.headspot')[0].getBBox(),
				footspot = table.$el.find('.footspot')[0].getBBox();

			// clear table
			namespace.trigger('action:clear');

			// add balls
			table.addBall(ballRed, headspot.x + headspot.width / 2, headspot.y + headspot.height / 2);
			table.addBall(ballWhite, headspot.x + headspot.width / 2, headspot.y + headspot.height / 2 + 50);
			table.addBall(ballYellow, footspot.x + footspot.width / 2, footspot.y + footspot.height / 2);
		},

		rackSnooker: function () {
			alert('Feature coming soon.');
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onClickShuffle: function (e) {
			e.preventDefault();

			this.$v('svg-table').shuffle();
			this.$v('svg-table lines').clear();
			this.$v('svg-table shapes').clear();
			this.$v('svg-table cues').clear();
		},

		onSettingsChange: function (e) {
			var settingMethod = e.name.replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});

			this.log('Setting captured: ' + settingMethod);

			if (this[settingMethod]) {
				this[settingMethod](e);
			}
		},

		// Animation
		// -------------------------------------------------------------

		animateInStart: function () {
			var $svg = this.$('#SVGTable');

			if (Flags.isMobile) {
				return;
			}

			this.$el.css({
				opacity: 0,
			});

			$svg.find('[fill]').each(function () {
				var fill = this.getAttribute('fill');

				if (fill.indexOf('#') === 0 || fill.indexOf('rgb') > -1) {
					this.setAttributeNS(null, 'xfill', this.getAttribute('fill'));
					this.setAttributeNS(null, 'fill', 'transparent');
				}
			});
		},

		animateIn: function (callback) {
			var $svg = this.$('#SVGTable'),
				obj = { n: 0 };

			if (Flags.isMobile) {
				return;
			}

			// animate regular
			this.$el.animate(
				{
					opacity: 1,
				},
				300,
			);

			// animate svg
			var viv = new Vivus('SVGTable', {
				type: 'sync',
				start: 'manual',
				forceRender: true,
				duration: 250,
				animTimingFunction: Vivus.EASE,
			});

			// play
			viv.stop().reset().play(2);

			$(obj)
				.delay(1000)
				.animate(
					{
						n: 100,
					},
					{
						duration: 500,
						step: function (value) {
							$svg.find('[fill]').each(function () {
								var color1 = '#ffffff',
									color2 = this.getAttribute('xfill') || '',
									color3 = tinycolor.mix(color1, color2, value);

								// ignore things like: none, transparent, null, URL, etc
								if (color2.indexOf('#') === 0 || color2.indexOf('rgb') > -1) {
									this.setAttributeNS(null, 'fill', color3);
								}
							});
						},
						complete: function () {
							// reset
							setTimeout(function () {
								viv.destroy();
							});
						},
					},
				);
		},

		animateOut: function (callback) {
			var $svg = this.$('#SVGTable'),
				obj = { n: 0 };

			// animate svg
			var viv = new Vivus('SVGTable', {
				type: 'sync',
				duration: 250,
				animTimingFunction: Vivus.EASE,
			});

			// play
			viv.stop().play(2);

			$(obj).animate(
				{
					n: 100,
				},
				{
					duration: 500,
					step: function () {
						$svg.find('[fill]').each(function () {
							var color1 = '#ffffff',
								color2 = this.getAttribute('fill'),
								color3 = tinycolor.mix(color2, color1, obj.n);

							this.setAttributeNS(null, 'fill', color3);
						});
					},
				},
			);
		},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	var Keys = namespace.Keys,
		Flags = namespace.Flags,
		Events = namespace.Events;

	namespace.View_SVGTable_Balls = namespace.View_Base.extend({
		name: 'View_SVGTable_Balls',

		// <$SVG> Table reference
		$table: null,

		// <SVGElement> Target
		target: null,

		// <SVGElement> Last target used, primarily for key interactions
		lastTarget: null,

		// <Object> SVG Table object that we belong to
		parent: null,

		// <Object>
		coords: null,

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onClick', 'onDrop', 'onKeyDown', 'onMouseMove', 'onMouseUp', 'onMouseDown');

			// super
			namespace.View_Base.prototype.initialize.call(this);

			// references
			this.coords = {};
			this.parent = options.parent;
			this.$table = options.parent.$el;
		},

		attachEvents: function () {
			// super
			namespace.View_Base.prototype.attachEvents.call(this);

			// set references
			this.$table = this.$el.closest('#SVGTable');

			this.$el.on(Events.CLICK, '.ball', this.onClick);
			$(document).on(Events.KEY_DOWN, this.onKeyDown);

			if (Flags.isMobile) {
				this.$el.on('touchstart', '.ball', this.onMouseDown);
				$(document).on('touchend', this.onMouseUp);
				this.$table.on('touchmove', this.onMouseMove);
			} else {
				this.$el.on(Events.MOUSE_DOWN, '.ball', this.onMouseDown);
				$(document).on(Events.MOUSE_UP, this.onMouseUp);
				this.$table.on(Events.MOUSE_MOVE, this.onMouseMove);
			}
		},

		detachEvents: function () {
			// super
			namespace.View_Base.prototype.detachEvents.call(this);

			this.$el.off(Events.MOUSE_DOWN, '.ball', this.onMouseDown);
			this.$el.off(Events.CLICK, '.ball', this.onClick);
			$(document).off(Events.KEY_DOWN, this.onKeyDown);
			$(document).off(Events.MOUSE_UP, this.onMouseUp);
			this.$table.off(Events.MOUSE_MOVE, this.onMouseMove);

			this.$el.off('touchstart', '.ball', this.onMouseDown);
			$(document).off('touchend', this.onMouseUp);
			this.$table.off('touchmove', this.onMouseMove);
		},

		add: function (url, x, y) {
			x || (x = 0);
			y || (y = 0);

			// no url
			if (!url) {
				return console.error('No ball URL provided');
			}

			// references
			var self = this,
				group = this.$el[0];

			// load balls or get them from cache
			xmlLoad(url, function (xmlObject, markup) {
				var width = xmlObject.documentElement.width.baseVal.value,
					height = xmlObject.documentElement.height.baseVal.value,
					randID = 'ball-' + ~(Math.random() * 9999),
					node;

				// center the x, y
				x -= width / 2;
				y -= height / 2;

				// move object
				xmlObject.documentElement.setAttribute('id', randID);
				xmlObject.documentElement.setAttribute('class', 'ball ' + randID);
				xmlObject.documentElement.setAttribute('x', x);
				xmlObject.documentElement.setAttribute('y', y);
				xmlObject.documentElement.setAttribute('url', url);

				// create node
				node = group.ownerDocument.importNode(xmlObject.documentElement, true);

				// add to group
				group.appendChild(node);

				// get last target
				self.lastTarget = $(group).find('.ball').last()[0];

				// fix collisions
				self.fixCollisions(self.lastTarget);
			});
		},

		remove: function (target) {
			$(target).remove();
		},

		clear: function () {
			this.$('svg').remove();
		},

		move: function (target, dx, dy) {
			var x = parseFloat(target.getAttribute('x')),
				y = parseFloat(target.getAttribute('y'));

			// move object
			this.moveTo(target, x + dx, y + dy);

			// fix collisions
			this.fixCollisions();
		},

		moveTo: function (target, x, y) {
			target.setAttribute('x', x);
			target.setAttribute('y', y);

			// broadcast
			namespace.trigger('ball:move', {
				target: target,
				x: x,
				y: y,
			});
		},

		stop: function () {
			this.lastTarget = this.target;
			this.target = null;
			this.coords = {};
		},

		fixCollisions: function (ball) {
			var $balls = this.$('.ball'),
				selected = ball || this.target || this.lastTarget,
				overlap;

			// only if we have more than one to check.
			if ($balls.length < 2) {
				return false;
			}

			// loop through all balls
			$balls.each(function () {
				var $el = $(this),
					el = this,
					ox,
					oy;

				if (el.id != selected.id) {
					if ((overlap = overlapNS(el, selected))) {
						var x = selected.getAttribute('x') * 1,
							y = selected.getAttribute('y') * 1;

						ox = overlap.difference * Math.cos(overlap.angle * (Math.PI / 180));
						oy = overlap.difference * Math.sin(overlap.angle * (Math.PI / 180));

						selected.setAttribute('x', x + ox);
						selected.setAttribute('y', y + oy);
					}
				}
			});
		},

		// Helpers
		// ----------------------------------------------------------------

		shouldRemove: function (target) {
			var overlaps = 0,
				x = parseFloat(this.target.getAttribute('x')),
				y = parseFloat(this.target.getAttribute('y'));

			this.$table.find('.pocket').each(function (index, pocket) {
				var rect1 = pocket.getBoundingClientRect();
				var rect2 = target.getBoundingClientRect();

				if (!(rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right)) {
					overlaps++;
				}
			});

			return overlaps > 0;
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onClick: function (e) {
			e.preventDefault();

			// trigger
			if (!this.coords.dx && !this.coords.dy) {
				this.trigger(Events.START_LINE, this.target || e.currentTarget);
			}

			// on
			this.stop();
		},

		onKeyDown: function (e) {
			var x = 0,
				y = 0;

			// disable action if we don't have a last target
			if (!this.lastTarget) {
				return;
			}

			// determine which direction the ball should move
			switch (e.keyCode) {
				case Keys.UP:
					y = -1;
					break;

				case Keys.RIGHT:
					x = 1;
					break;

				case Keys.DOWN:
					y = 1;
					break;

				case Keys.LEFT:
					x = -1;
					break;

				// remove
				// if we want to do this, we must ensure that we are the
				// overall last target... not just the last ball placed.
				// we end up deleting the last ball while doing BACKSPACE
				// on a line as well
				// case Keys.BACKSPACE:
				//     return this.remove(this.lastTarget);
			}

			// move ball
			this.move(this.lastTarget, x, y);
		},

		onMouseDown: function (e) {
			var clientX = convertClientX(e),
				clientY = convertClientY(e);

			var offsetY = clientY - this.parent.$el.position().top, // offsetY
				offsetX = clientX - this.parent.$el.position().left; // offsetX

			this.target = e.currentTarget;

			// coords
			this.coords.x = this.target.x.baseVal.value;
			this.coords.y = this.target.y.baseVal.value;
			this.coords.ox = offsetX / this.parent.getRatio();
			this.coords.oy = offsetY / this.parent.getRatio();
		},

		onMouseMove: function (e) {
			var clientX = convertClientX(e),
				clientY = convertClientY(e);

			var x, y;
			var offsetY = clientY - this.parent.$el.position().top, // offsetY
				offsetX = clientX - this.parent.$el.position().left; // offsetX

			if (!this.target) {
				return 'No target to drag';
			}

			this.coords.dx = offsetX / this.parent.getRatio();
			this.coords.dy = offsetY / this.parent.getRatio();

			x = this.coords.dx - this.coords.ox + this.coords.x;
			y = this.coords.dy - this.coords.oy + this.coords.y;

			// move object
			this.moveTo(this.target, x, y);
		},

		onMouseUp: function (e) {
			if (!this.target) {
				return 'No target to drag';
			}

			// check if clicked
			if (!this.coords.dx && !this.coords.dy) {
				// this.onClick(e);
			}

			// was dragged
			else {
				this.onDrop(e);
			}
		},

		onDrop: function (e) {
			// remove if it lands in the pocket
			if (this.shouldRemove(this.target)) {
				this.remove(this.target);
			}

			// fix collisions
			this.fixCollisions();
		},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

;(function(namespace) {
    "use strict";

    var Events   = namespace.Events,
        Settings = namespace.Settings;

    namespace.View_SVGTable_Cues = namespace.View_Base.extend({

        name: "View_SVGTable_Cues",

        // <$SVG> Table reference
        $table: null,

        // <SVGElement> Target
        target: null,

        // <SVGElement> Last target used, primarily for key interactions
        lastTarget: null,

        // <Object> SVG Table object that we belong to
        parent: null,

        // <Object>
        coords: null,


        // Public Methods
        // ----------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // bindings
            _.bindAll(this, "onAddCue", "onMouseMove", "onMouseUp", "onMouseDown");
            _.bindAll(this, "onSettingsChange");

            // super
            namespace.View_Base.prototype.initialize.call(this);

            // references
            this.coords = { };
            this.parent = options.parent;
            this.$table = options.parent.$el;
        },

        attachEvents: function() {
            // super
            namespace.View_Base.prototype.attachEvents.call(this);

            // set references
            this.$table = this.$el.closest("#SVGTable");

            // events
            namespace.on("add:cue",                 this.onAddCue);
            namespace.on("cue:start",               this.onResizeStart);
            namespace.on("cue:resize",              this.onResizeGrid);
            namespace.on("settings:change",         this.onSettingsChange);
            $(document).on(Events.MOUSE_UP,         this.onMouseUp);
            this.$table.on(Events.MOUSE_MOVE,       this.onMouseMove);
            this.$el.on(Events.MOUSE_DOWN, ".cue",  this.onMouseDown);
        },

        detachEvents: function() {
            // super
            namespace.View_Base.prototype.detachEvents.call(this);

            // events
            namespace.off("add:cue",                 this.onAddCue);
            namespace.off("cue:start",               this.onResizeStart);
            namespace.off("cue:resize",              this.onResizeGrid);
            namespace.off("settings:change",         this.onSettingsChange);
            $(document).off(Events.MOUSE_UP,         this.onMouseUp);
            this.$table.off(Events.MOUSE_MOVE,       this.onMouseMove);
            this.$el.off(Events.MOUSE_DOWN, ".cue",  this.onMouseDown);
        },

        add: function(url, x, y) {
            x   || (x = 0);
            y   || (y = 0);

            // no url
            if (!url) {
                return console.error("No cue URL provided");
            }

            // references
            var self  = this,
                group = this.$el[0];

            // load balls or get them from cache
            xmlLoad(url, function(xmlObject, markup) {
                var width  = xmlObject.documentElement.width.baseVal.value,
                    height = xmlObject.documentElement.height.baseVal.value,
                    randID = "cue-" + ~(Math.random() * 9999),
                    node;

                // center the x, y
                x -= width / 2;
                y -= height / 2;

                // move object
                xmlObject.documentElement.setAttribute("class", "cue");
                xmlObject.documentElement.setAttribute("id", randID);
                xmlObject.documentElement.setAttribute("x", x);
                xmlObject.documentElement.setAttribute("y", y);

                // create node
                node = group.ownerDocument.importNode(xmlObject.documentElement, true);

                // add to group
                group.appendChild(node);

                // get last target
                self.lastTarget = node;

                // rotate
                self.settingCuesRotation({
                    value: Settings.get("cues", "rotation") || 0
                });
            });
        },

        remove: function(target) {
            $(target).remove();
        },

        clear: function() {
            this.$("*").remove();
        },

        move: function(target, dx, dy) {
            var x = parseFloat(target.getAttribute("x")),
                y = parseFloat(target.getAttribute("y"));

            target.setAttribute("x", x + dx);
            target.setAttribute("y", y + dy);
        },

        stop: function() {
            this.coords = { };
            this.target = null;
        },


        // Settings
        // ----------------------------------------------------------------

        settingCuesRotation: function(params) {
            var el   = this.$(".rotation-wrapper")[0],
                cx   = parseFloat(this.lastTarget.getAttribute("width")) / 2,
                cy   = - 30,
                deg  = parseFloat(params.value);

            // rotate cue on the wrapper, not the top
            el.setAttributeNS(null, "transform", "rotate(" + deg + " " + cx + " " + cy + ")");
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onAddCue: function(e) {
            var w    = 20,
                h    = 200,
                tw = parseFloat(this.$table[0].getAttribute("owidth")),
                th = parseFloat(this.$table[0].getAttribute("oheight")),
                x  = tw / 2 - w / 2,
                y  = th / 2 - h / 2,
                type = Settings.get("cues", "type"),
                url  = namespace.Cues[type];

            // tooltip check
            page.showHelpForCues();

            // add to table
            this.add(url, x, y);
        },

        onMouseMove: function(e) {
            var x, y;

            var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
                offsetX = e.clientX - this.parent.$el.position().left; // offsetX

            if (!this.target) {
                return "No target to drag";
            }

            this.coords.dx = offsetX / this.parent.getRatio();
            this.coords.dy = offsetY / this.parent.getRatio();

            x = (this.coords.dx - this.coords.ox) + this.coords.x;
            y = (this.coords.dy - this.coords.oy) + this.coords.y;

            // move object
            this.target.setAttributeNS(null, "x", x);
            this.target.setAttributeNS(null, "y", y);
        },

        onMouseDown: function(e) {
            var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
                offsetX = e.clientX - this.parent.$el.position().left; // offsetX

            this.target = e.currentTarget;

            // coords
            this.coords.x  = this.target.x.baseVal.value;
            this.coords.y  = this.target.y.baseVal.value;
            this.coords.ox = offsetX / this.parent.getRatio();
            this.coords.oy = offsetY / this.parent.getRatio();
        },

        onMouseUp: function(e) {
            if (!this.target) {
                return "No target to drag";
            }

            // stop moving
            this.stop();
        },

        onSettingsChange: function(e) {
            var settingMethod = e.name.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });

            if (this[settingMethod]) {
                this[settingMethod](e);
            }
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

(function (namespace) {
	'use strict';

	var Keys = namespace.Keys,
		Flags = namespace.Flags,
		Events = namespace.Events,
		Settings = namespace.Settings,
		State = namespace.State;

	namespace.View_SVGTable_Lines = namespace.View_Base.extend({
		events: {
			'mouseover .ghost-line': 'onMouseoverGhostline',
			'mouseout .ghost-line': 'onMouseoutGhostline',
		},

		name: 'View_SVGTable_Lines',

		// <Integer> Mouse difference threshold between mouseDown / mouseUp
		MOUSE_DIFF_THRESHOLD: 3,

		// <Integer> distance between lines for connecting them
		DISTANCE_THRESHOLD: 10,

		// <Boolean> If we're drawing
		isDrawing: false,

		// <$SVG> Table reference
		$table: null,

		// <SVGElement> Target
		target: null,

		// <SVGElement> Last target used, primarily for key interactions
		lastTarget: null,

		// <SVGElement> Ghost Target
		ghostTarget: null,

		// <SVGElement> Last ghost target used, primarily for key interactions
		lastGhostTarget: null,

		// <String> ID of the highlighted line
		highlightedID: null,

		// <Float> Duration of how long  mouse was held
		mouseDuration: 0,

		// <Boolean> Flag if the mouse is down because SVG doesn't support drag
		mouseIsDown: false,

		// <Object> SVG Table object that we belong to
		parent: null,

		// <Object>
		coords: null,

		// <String> Default table color
		defaultColor: '#000000',

		// Public Methods
		// ----------------------------------------------------------------

		initialize: function (options) {
			options || (options = {});

			// bindings
			_.bindAll(this, 'onBallMove', 'onClick', 'onKeyDown', 'onMouseMove', 'onSettingsChange');
			_.bindAll(this, 'onMouseDown', 'onMouseUp', 'onHoldLine', 'onMasse');
			_.bindAll(this, 'onDrag');

			// super
			namespace.View_Base.prototype.initialize.call(this);

			// references
			this.coords = {};
			this.parent = options.parent;
			this.$table = options.parent.$el;

			// setups
			this.setupColorPicker();
		},

		attachEvents: function () {
			// super
			namespace.View_Base.prototype.attachEvents.call(this);

			// set references
			this.$table = this.$el.closest('#SVGTable');

			this.$table.on(Events.MOUSE_DOWN, this.onMouseDown);
			this.$table.on(Events.MOUSE_UP, this.onMouseUp);
			this.$table.on(Flags.isMobile ? 'touchmove' : Events.MOUSE_MOVE, this.onMouseMove);
			$(document).on(Events.KEY_DOWN, this.onKeyDown);

			this.$('.ghost-line').hammer().on('press', this.onHoldLine);

			namespace.on('ball:move', this.onBallMove);
			namespace.on(Events.MASSE, this.onMasse);
			namespace.on('settings:change', this.onSettingsChange);
		},

		detachEvents: function () {
			// super
			namespace.View_Base.prototype.detachEvents.call(this);

			this.$table.off(Events.MOUSE_DOWN, this.onMouseDown);
			this.$table.off(Events.MOUSE_UP, this.onMouseUp);
			this.$table.off(Events.MOUSE_MOVE, this.onMouseMove);
			this.$table.off('touchstart', this.onMouseMove);
			$(document).off(Events.KEY_DOWN, this.onKeyDown);

			namespace.off('ball:move', this.onBallMove);
			namespace.off('settings:change', this.onSettingsChange);
			namespace.off(Events.MASSE, this.onMasse);
		},

		setupColorPicker: function () {
			$('#Nav_Lines .jscolor').colorPicker({
				color: this.defaultColor,
			});
		},

		start: function (x, y, options) {
			options || (options = {});

			var line = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
				ghostLine = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
				randID = 'line-' + ~(Math.random() * 9999),
				group = this.$el[0],
				strokeColor = options.strokeColor || this.getStrokeColor(),
				strokeWidth = options.strokeWidth || this.getStrokeWidth(),
				strokeDash = options.strokeDash || this.getStrokeStyle(), // [5, 8] dashed,  [2, 10] dotted
				arrowType = options.arrowType || this.getArrowType(strokeColor),
				altLine,
				ball;

			// create line
			line.setAttribute('id', randID);
			line.setAttribute('fill', 'none');
			line.setAttribute('data-id', randID);
			line.setAttribute('class', 'line line-visible ' + randID);

			// Priority #1, ball connections
			if (options.event && this.isClickingBall(options.event)) {
				ball = this.getBallFromClick(options.event)[0];
				x = parseFloat(ball.getAttribute('x')) + parseFloat(ball.getAttribute('width')) / 2;
				y = parseFloat(ball.getAttribute('y')) + parseFloat(ball.getAttribute('height')) / 2;
				strokeColor = ball.getAttribute('data-linecolor') || strokeColor;
				(arrowType = this.getArrowType(strokeColor)), this.log('Found a ball to attach to.');

				// check objects
				this.attachObjects(line, ball);
			}

			// Priority #2, line connections
			else if ((altLine = this.getClosestLine(x, y, line))) {
				x = altLine.x2;
				y = altLine.y2;

				this.log('Found a line to attach to.');

				// check objects
				this.attachObjects(line, altLine.line);
			}

			// add marker
			this.addMarker(strokeColor);

			line.setAttribute('stroke', strokeColor);
			line.setAttribute('stroke-width', strokeWidth);
			line.setAttribute('stroke-dasharray', strokeDash);
			line.setAttribute('marker-end', 'url(#' + arrowType + ')');
			line.setAttribute('x1', x);
			line.setAttribute('y1', y);
			line.setAttribute('x2', x);
			line.setAttribute('y2', y);

			// create ghost line
			ghostLine.setAttribute('data-id', randID);
			ghostLine.setAttribute('class', 'ghost-line ' + randID);
			ghostLine.setAttribute('fill', 'none');
			ghostLine.setAttribute('stroke', 'rgba(0, 0, 0, 0)');
			ghostLine.setAttribute('stroke-width', 14);
			ghostLine.setAttribute('x1', x);
			ghostLine.setAttribute('y1', y);
			ghostLine.setAttribute('x2', x);
			ghostLine.setAttribute('y2', y);

			// check if attached
			if (options.attachment) {
				line.setAttribute('attached', options.attachment.id);
				ghostLine.setAttribute('attached', options.attachment.id);
			}

			group.appendChild(line);
			group.appendChild(ghostLine);

			// draw
			this.setPathAttributes();

			// set targets
			this.target = line;
			this.lastTarget = line;
			this.ghostTarget = ghostLine;
			this.lastGhostTarget = ghostLine;

			// set initial coordinates
			this.coords.ox = x;
			this.coords.oy = y;
			this.coords.x = x;
			this.coords.y = y;

			// events
			$(ghostLine).hammer().on('press', this.onHoldLine);

			// set
			this.setDrawing();
		},

		stop: function (x, y, options) {
			options || (options = {});

			var line = this.target,
				altLine,
				ball;

			// clean garbage lines
			this.removeGarbage();

			// Priority #1, ball connections
			if (options.event && this.isClickingBall(options.event)) {
				ball = this.getBallFromClick(options.event)[0];
				x = parseFloat(ball.getAttribute('x')) + parseFloat(ball.getAttribute('width')) / 2;
				y = parseFloat(ball.getAttribute('y')) + parseFloat(ball.getAttribute('height')) / 2;

				// adjust
				line.setAttributeNS(null, 'x2', x);
				line.setAttributeNS(null, 'y2', y);

				// draw
				this.setPathAttributes();

				// log
				this.log('Found a ball to attach to.');

				// check objects
				this.attachObjects(ball, line);
			}

			// Priority #2, line connections
			else if ((altLine = this.getClosestLine(x, y, line))) {
				this.log('Found a line to attach to.');

				// check objects
				this.attachObjects(altLine.line, line);
			}

			// set
			this.setNotDrawing();

			// tooltip check
			page.showHelpForLines();
		},

		clear: function () {
			this.$('path').remove();
		},

		remove: function (target, ghostTarget) {
			var $line, $ghostLine, attachedTo, attachedFrom;

			// select elements
			if (typeof target == 'string') {
				$line = $('g.lines #' + target);
				$ghostLine = $('g.lines .ghost-line[data-id=' + target + ']');
			} else {
				$line = $(target);
				$ghostLine = $(ghostTarget);
			}

			// remove attributes of who we were attached to
			attachedTo = $ghostLine[0].getAttribute('attachedTo');
			this.$('.' + attachedTo).each(function () {
				this.removeAttribute('attachedFrom');
			});

			// remove attributes of who we were attached from
			attachedFrom = $line[0].getAttribute('attachedFrom');
			this.$('.' + attachedFrom).each(function () {
				this.removeAttribute('attachedTo');
			});

			// remove lines
			$line.remove();
			$ghostLine.remove();

			// remove highlighted id
			this.highlightedID = null;
		},

		removeGarbage: function () {
			var i = 0,
				l = this.$('line').length;

			for (i; i < l; i++) {
				var line = this.$('line')[i];

				if (line) {
					var distance = lineDistanceNS(line),
						x1 = line.getAttributeNS(null, 'x1'),
						path = line.getAttributeNS(null, 'd');

					// some are path only
					if (path && path.length > 10 && !x1) {
						continue;
					}

					// if xy is low
					if (distance < 10) {
						$(line).remove();
					}
				}
			}
		},

		addMarker: function (color) {
			color || (color = '#000000');

			color = color.replace('#', '');

			if (this.$table.find('#' + color).length) {
				return 'Marker def exists';
			}

			var svg = this.$table[0];
			var svgNS = 'http://www.w3.org/2000/svg';
			var marker = document.createElementNS(svgNS, 'marker');
			marker.setAttribute('id', color);
			marker.setAttribute('viewBox', '0 0 15 15');
			marker.setAttribute('refX', '0');
			marker.setAttribute('refY', '5');
			marker.setAttribute('fill', '#' + color);
			marker.setAttribute('markerUnits', 'strokeWidth');
			marker.setAttribute('markerWidth', '14');
			marker.setAttribute('markerHeight', '13');
			marker.setAttribute('orient', 'auto');

			var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			marker.appendChild(path);
			path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');

			var defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svgNS, 'defs'), svg.firstChild);

			return defs.appendChild(marker);
		},

		attachObjects: function (object1, object2) {
			if (!object1 || !object1['getAttribute']) {
				return console.warn('No object1', object1);
			}

			if (!object2 || !object2['getAttribute']) {
				return console.warn('No object2', object2);
			}

			var id1 = object1.getAttribute('data-id'),
				id2 = object2.getAttribute('data-id');

			// mark attachments
			object1.setAttributeNS(null, 'attachedFrom', id2);
			object2.setAttributeNS(null, 'attachedTo', id1);
		},

		moveLineAttachment: function (target, x, y) {
			var attachedTo = target.getAttribute('attachedTo'),
				line2 = this.$('.line.' + attachedTo),
				ghostLine2 = this.$('.ghost-line.' + attachedTo);

			// checks our "attachedTo" line to see if it exists
			if (line2.length) {
				line2[0].setAttributeNS(null, 'x1', x);
				line2[0].setAttributeNS(null, 'y1', y);
			}

			// moves the "attachedTo" ghost line to match
			if (ghostLine2.length) {
				ghostLine2[0].setAttributeNS(null, 'x1', x);
				ghostLine2[0].setAttributeNS(null, 'y1', y);
			}
		},

		// Getters
		// ----------------------------------------------------------------

		setDrawing: function () {
			$('html').addClass('line-is-drawing');

			// drawing
			this.isDrawing = true;
		},

		setNotDrawing: function () {
			$('html').removeClass('line-is-drawing');

			// drawing
			this.isDrawing = false;

			// reset
			this.coords = {};
			this.target = null;
			this.ghostTarget = null;
		},

		getArrowType: function (strokeColor) {
			strokeColor || (strokeColor = this.getStrokeColor());

			return Settings.get('line', 'arrows') ? strokeColor.replace('#', '') : null;
		},

		getBallFromClick: function (e) {
			var $el = $(e.target);

			if ($el.hasClass('ball')) {
				return $el;
			} else {
				return $el.parents('.ball');
			}
		},

		getClosestLine: function (x1, y1, target, attributeRequirement) {
			target || (target = this.target);

			var $lines = this.$('path.line-visible'),
				distance = Infinity,
				self = this,
				item;

			$lines.each(function () {
				var line = this,
					x2 = parseFloat(line.getAttributeNS(null, 'x2')),
					y2 = parseFloat(line.getAttributeNS(null, 'y2')),
					id1 = target ? target.getAttributeNS(null, 'data-id') : null,
					id2 = line ? line.getAttributeNS(null, 'data-id') : null,
					a,
					dist;

				// if we exist
				if (!target || id1 != id2) {
					// if we require a particular attribute on this line,
					// if it exists, it MUST be of LINE type
					if (!attributeRequirement || (line.getAttribute(attributeRequirement) && line.getAttribute(attributeRequirement).indexOf('line') > -1)) {
						// must be a path
						if (!x2 && !y2) {
							a = line.getPathData({ normalize: true });
							a = a[a.length - 1].values;

							x2 = a[a.length - 2];
							y2 = a[a.length - 1];
						}

						// get distance
						dist = lineDistance(x1, y1, x2, y2);

						// check distance #1 + ids
						if (dist < distance && dist < self.DISTANCE_THRESHOLD) {
							item = {
								line: line,
								x2: parseFloat(x2),
								y2: parseFloat(y2),
							};
						}

						// try the other side
						x2 = parseFloat(line.getAttributeNS(null, 'x1'));
						y2 = parseFloat(line.getAttributeNS(null, 'y1'));

						// get distance
						dist = lineDistance(x1, y1, x2, y2);

						// check distances + ids
						if (dist < distance && dist < self.DISTANCE_THRESHOLD) {
							item = {
								line: line,
								x2: parseFloat(x2),
								y2: parseFloat(y2),
							};
						}
					}
				}
			});

			return item;
		},

		getClosestJointLine: function (x1, y1, target) {
			return this.getClosestLine(x1, y1, target, 'attachedTo');
		},

		getStrokeColor: function () {
			return Settings.getColor('line') || this.target.getAttribute('stroke') || '#000000';
		},

		getStrokeWidth: function () {
			return 1;
		},

		getStrokeStyle: function () {
			// stoke style
			if (Settings.get('line', 'type') == 'dashed') {
				return [5, 8];
			} else if (Settings.get('line', 'type') == 'dotted') {
				return [2, 10];
			}

			return null;
		},

		isClickingBall: function (e) {
			return $(e.target).parents('.ball').length || $(e.target).hasClass('ball');
		},

		setPathAttributes: function () {
			document.querySelectorAll('g.lines path', 'http://www.w3.org/2000/svg').forEach(function (e) {
				var el = e,
					x1 = parseFloat(el.getAttribute('x1')),
					x2 = parseFloat(el.getAttribute('x2')),
					y1 = parseFloat(el.getAttribute('y1')),
					y2 = parseFloat(el.getAttribute('y2')),
					ox = parseFloat(el.getAttribute('ox')) || null,
					oy = parseFloat(el.getAttribute('oy')) || null,
					distance = lineDistanceNS(el),
					qx,
					qy,
					ox,
					oy;

				qx = x1 + (x2 - x1) / 2;
				qy = y1 + (y2 - y1) / 2;

				if (ox && oy) {
					qx += distance * ox;
					qy += distance * oy;
				}

				if (x1 && x2 && y1 && y2) {
					el.setAttribute('d', ['M' + x1, y1, 'Q', qx, qy, x2, y2].join(' '));
				}
			});
		},

		setTargetByLine: function (line) {
			var id = line.getAttribute('data-id');

			// set targets
			this.target = this.$('.line.' + id)[0];
			this.ghostTarget = this.$('.ghost-line.' + id)[0];

			// apply coords
			this.coords.x = this.coords.ox = parseFloat(this.target.getAttribute('x1'));
			this.coords.y = this.coords.oy = parseFloat(this.target.getAttribute('y1'));
		},

		// Event Handlers
		// ----------------------------------------------------------------

		onBallMove: function (e) {
			var attachedTo = e.target.getAttributeNS(null, 'attachedTo') || '',
				attachedFrom = e.target.getAttributeNS(null, 'attachedFrom') || '',
				size = parseFloat(e.target.getAttributeNS(null, 'width')) || 0,
				el;

			// line started on ball click
			if (attachedTo.indexOf('line') > -1) {
				this.$('.' + attachedTo).each(function () {
					this.setAttributeNS(null, 'x1', e.x + size / 2);
					this.setAttributeNS(null, 'y1', e.y + size / 2);
				});

				this.setPathAttributes();
			}

			// line ended on ball click
			if (attachedFrom.indexOf('line') > -1) {
				this.$('.' + attachedFrom).each(function () {
					this.setAttributeNS(null, 'x2', e.x + size / 2);
					this.setAttributeNS(null, 'y2', e.y + size / 2);
				});

				this.setPathAttributes();
			}
		},

		/**
		 * onClick manually called by combo of mouseDown and mouseUp
		 */
		onClick: function (e) {
			var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
				offsetX = e.clientX - this.parent.$el.position().left; // offsetX

			// position needs to compensate for table scale. only works if it's
			// 1:1
			var ratio = this.parent.getRatio(),
				left = offsetX / ratio,
				top = offsetY / ratio,
				color = this.getStrokeColor(),
				ball;

			// start drawing a line
			if (!this.isDrawing) {
				this.start(left, top, {
					event: e,
					strokeColor: color,
				});
			} else {
				this.stop(left, top, {
					event: e,
				});
			}
		},

		/**
		 * onDrop manually called by combo of mouseDown and mouseUp
		 */
		onDrop: function (e) {
			var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
				offsetX = e.clientX - this.parent.$el.position().left; // offsetX

			// position needs to compensate for table scale. only works if it's
			// 1:1
			var ratio = this.parent.getRatio(),
				left = offsetX / ratio,
				top = offsetY / ratio;

			// start drawing a line
			if (this.isDrawing) {
				this.stop(left, top, {
					event: e,
				});
			}
		},

		onHoldLine: function (e) {
			var id = $(e.currentTarget).attr('data-id');

			// remove
			this.remove(id);
		},

		onKeyDown: function (e) {
			// disable action if we don't have a last target
			if (!this.highlightedID) {
				return;
			}

			// check our node type
			switch (e.target.nodeName.toLowerCase()) {
				case 'input':
				case 'textarea':
					return;
			}

			// remove
			switch (e.keyCode) {
				case Keys.BACKSPACE:
					this.remove(this.highlightedID);
					return namespace.preventDefault(e);
			}
		},

		onMasse: function (e) {
			this.lastTarget.setAttribute('ox', e.x);
			this.lastTarget.setAttribute('oy', e.y);
			this.lastGhostTarget.setAttribute('ox', e.x);
			this.lastGhostTarget.setAttribute('oy', e.y);

			this.setPathAttributes();
		},

		onMouseDown: function (e) {
			// e.stopPropagation();
			var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
				offsetX = e.clientX - this.parent.$el.position().left; // offsetX

			var line,
				ratio = this.parent.getRatio(),
				left = offsetX / ratio,
				top = offsetY / ratio;

			// setup starting coords for drag differential
			this.coords.sx = offsetX;
			this.coords.sy = offsetY;

			// flag
			this.mouseIsDown = true;

			// mark mouse time
			this.mouseDuration = Date.now();

			// cancel for ball
			if (e && this.isClickingBall(e)) {
				return console.warn("Don't join lines if we're moving a ball.");
			}

			// determine if we should be dragging the line
			if ((line = this.getClosestJointLine(left, top))) {
				if (line.line['getAttribute'] && (line.line.getAttribute('attachedTo') || line.line.getAttribute('attachedFrom'))) {
					this.setTargetByLine(line.line);

					this.setDrawing();
				}
			}
		},

		onMouseUp: function (e) {
			var d;
			var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
				offsetX = e.clientX - this.parent.$el.position().left; // offsetX

			// set coordinates
			this.coords.ex = offsetX;
			this.coords.ey = offsetY;

			// mouse duration
			this.mouseDuration = Date.now() - this.mouseDuration;

			// flag
			this.mouseIsDown = false;

			// check if was held
			if (this.mouseDuration >= 500) {
				return this.setNotDrawing();
			}

			// determine distance from original click point
			d = Math.sqrt((this.coords.sx - this.coords.ex) * (this.coords.sx - this.coords.ex) + (this.coords.sy - this.coords.ey) * (this.coords.sy - this.coords.ey));

			//
			if (d < this.MOUSE_DIFF_THRESHOLD) {
				this.onClick(e);
			} else {
				this.onDrop(e);
			}
		},

		onMouseMove: function (e) {
			var clientX = convertClientX(e),
				clientY = convertClientY(e);

			var x, y;
			var offsetY = clientY - this.parent.$el.position().top, // offsetY
				offsetX = clientX - this.parent.$el.position().left; // offsetX

			State.set('line-dragging', false);

			if (!this.target) {
				return 'No target to drag';
			}

			State.set('line-dragging', true);

			this.coords.dx = offsetX / this.parent.getRatio();
			this.coords.dy = offsetY / this.parent.getRatio();

			x = this.coords.dx - this.coords.ox + this.coords.x;
			y = this.coords.dy - this.coords.oy + this.coords.y;

			// move object
			this.target.setAttribute('x2', x);
			this.target.setAttribute('y2', y);
			this.ghostTarget.setAttribute('x2', x);
			this.ghostTarget.setAttribute('y2', y);

			// check for attachments
			try {
				this.moveLineAttachment(this.target, x, y);
			} catch (e) {
				this.stop();

				return console.warn('Error moving attachment.', e);
			}

			// draw
			this.setPathAttributes();
		},

		onDrag: function (e) {
			console.log('Drag');
		},

		onMouseoverGhostline: function (e) {
			this.highlightedID = $(e.currentTarget).attr('data-id');
		},

		onMouseoutGhostline: function (e) {
			this.highlightedID = null;
		},

		onSettingsChange: function (e) {
			//
			if (!this.target) {
				return 'No settings.';
			}

			var line = this.target,
				attachment = $('#' + line.getAttribute('attached'));

			var strokeColor = attachment.attr('data-linecolor') || this.getStrokeColor(),
				strokeWidth = this.getStrokeWidth(),
				strokeDash = this.getStrokeStyle(), // [5, 8] dashed,  [2, 10] dotted
				arrowType = this.getArrowType(strokeColor);

			// if target
			if (this.target) {
				strokeColor = this.target.getAttribute('stroke');
				arrowType = this.getArrowType(strokeColor);
			}

			// add marker
			this.addMarker(strokeColor);

			//
			// line.setAttribute("stroke",           strokeColor);  // @todo, replace with lineColor from settings
			line.setAttribute('stroke-width', strokeWidth);
			line.setAttribute('stroke-dasharray', strokeDash); // if dashed, try 5. if dotted, try 2.
			line.setAttribute('marker-end', 'url(#' + arrowType + ')');
		},
	});
})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

;(function(namespace) {
    "use strict";

    var Events   = namespace.Events,
        Settings = namespace.Settings;

    namespace.View_SVGTable_Shapes = namespace.View_Base.extend({

        name: "View_SVGTable_Shapes",

        // <Integer> Default width of the shape
        DEFAULT_WIDTH: 200,

        // <Integer> Default height of the shape
        DEFAULT_HEIGHT: 100,

        // <$SVG> Table reference
        $table: null,

        // <SVGElement> Target
        target: null,

        // <SVGElement> Last target used, primarily for key interactions
        lastTarget: null,

        // <Object> SVG Table object that we belong to
        parent: null,

        // <Object>
        coords: null,

        // <String> Default table color
        defaultColor: "#ffffff",

        // <Boolean> Whether or not we're dragging
        isDragging: false,


        // Public Methods
        // ----------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // bindings
            _.bindAll(this, "onAddShape", "onDragStop");
            _.bindAll(this, "onResizeGrid", "onResizeStart", "onSettingsChange");
            _.bindAll(this, "onMouseMove", "onMouseUp", "onMouseDown");

            // super
            namespace.View_Base.prototype.initialize.call(this);

            // references
            this.coords = { };
            this.parent = options.parent;
            this.$table = options.parent.$el;

            // setups
            this.setupColorPicker();
        },

        attachEvents: function() {
            // super
            namespace.View_Base.prototype.attachEvents.call(this);

            // set references
            this.$table = this.$el.closest("#SVGTable");

            // events
            namespace.on("add:shape", this.onAddShape);
            namespace.on("shape:start", this.onResizeStart);
            namespace.on("shape:resize", this.onResizeGrid);
            namespace.on("settings:change", this.onSettingsChange);

            this.$el.on(Events.MOUSE_DOWN, ".shape", this.onMouseDown);
            this.$el.on(Events.MOUSE_UP,   ".shape", this.onMouseUp);
            this.$table.on(Events.MOUSE_MOVE,        this.onMouseMove);
        },

        detachEvents: function() {
            // super
            namespace.View_Base.prototype.detachEvents.call(this);

            // events
            namespace.off("add:shape", this.onAddShape);
            namespace.off("shape:start", this.onResizeStart);
            namespace.off("shape:resize", this.onResizeGrid);
            namespace.off("settings:change", this.onSettingsChange);

            this.$el.off(Events.MOUSE_DOWN, ".shape", this.onMouseDown);
            this.$el.off(Events.MOUSE_UP,   ".shape", this.onMouseUp);
            this.$table.off(Events.MOUSE_MOVE,        this.onMouseMove);
        },

        setupColorPicker: function() {
            var self = this;

            $("#Nav_Shapes .jscolor").colorPicker({
                color: this.defaultColor,
                renderCallback: function($elm, toggled) {
                    var colors = this.color.colors;

                    self.setColor("#" + colors.HEX);
                }
            });
        },

        add: function(x, y) {
            var group = this.$el[0],
                rect  = this.makeRectangle();

            // add to markup
            group.appendChild(rect);

            // set targets
            this.lastTarget = this.target = rect;
        },

        remove: function(target) {
            $(target).remove();
        },

        clear: function() {
            this.$("*").remove();
        },

        move: function(target, dx, dy) {
            var x = parseFloat(target.getAttribute("x")),
                y = parseFloat(target.getAttribute("y"));

            target.setAttribute("x", x + dx);
            target.setAttribute("y", y + dy);
        },

        stop: function() {
            this.lastTarget = this.target;
            this.target = null;
            this.coords = { };
        },

        makeRectangle: function() {
            var w = 100,
                h = 50,
                tw = parseFloat(this.$table[0].getAttribute("owidth")),
                th = parseFloat(this.$table[0].getAttribute("oheight")),
                x  = tw / 2 - w / 2,
                y  = th / 2 - h / 2;

            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttributeNS(null, "class"            , "shape");
                rect.setAttributeNS(null, "fill"             , this.getStrokeColor());
                rect.setAttributeNS(null, "stroke"           , this.getStrokeColor());
                rect.setAttributeNS(null, "height"           , h);
                rect.setAttributeNS(null, "width"            , w);
                rect.setAttributeNS(null, "oheight"          , h);
                rect.setAttributeNS(null, "owidth"           , w);
                rect.setAttributeNS(null, "opacity"          , 0.5);
                rect.setAttributeNS(null, "stroke-width"     , this.getStrokeWidth());
                rect.setAttributeNS(null, "x"                , x);
                rect.setAttributeNS(null, "y"                , y);

            return rect;
        },

        makeTriangle: function() {

        },

        makeCircle: function() {

        },

        moveTo: function(target, x, y) {
            target.setAttribute("x", x);
            target.setAttribute("y", y);

            // broadcast
            namespace.trigger("shape:move", {
                target: target,
                x: x,
                y: y
            });

            // set path
            this.setPathAttributes();
        },

        setPathAttributes: function() {
            document.querySelectorAll("g.shapes path", "http://www.w3.org/2000/svg").forEach(function(e) {
                var el   = e,
                    x      = parseFloat(el.getAttribute("x")),
                    y      = parseFloat(el.getAttribute("y")),
                    bbox   = el.getBBox(),
                    width  = bbox.width,
                    height = bbox.height,
                    parts, d;

                // path
                if (x && y) {
                    d = [
                        "M" + x + " " + y,
                        "L" + (x + width) + " " + y,
                        "L" + (x + width) + " " + (y + height),
                        "L" + x + " " + (y + height),
                        "Z"
                    ].join(" ");

                    el.setAttribute("d", d);
                }
            });
        },


        // Helpers
        // ----------------------------------------------------------------

        getStrokeColor: function() {
            return Settings.getColor("shapes") || this.defaultColor;
        },

        getStrokeWidth: function() {
            return 2;
        },

        shouldRemove: function(target) {
            target || (target = this.target);

            var margin = 25,
                targetBBox = target.getBBox(),
                parentWidth = parseFloat(this.$table[0].getAttribute("owidth")),
                parentHeight = parseFloat(this.$table[0].getAttribute("oheight"));

            return targetBBox.x + targetBBox.width > parentWidth - margin    // right
                || targetBBox.y < margin                  // top
                || targetBBox.x < margin                  // left
                || targetBBox.y + targetBBox.height > parentHeight - margin   // bottom
        },

        setColor: function(color) {
            var darkerColor = tinycolor(color).darken(25).toString();

            // Check if we have a target
            if (this.target) {
                // cloth color
                this.target.setAttributeNS(null, "fill", color);

                // rail color
                this.target.setAttributeNS(null, "stroke", darkerColor);
            }
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onAddShape: function(e) {
            // tooltip check
            page.showHelpForShapes();

            // add to document
            this.add(this.DEFAULT_WIDTH, this.DEFAULT_HEIGHT);
        },

        onDragStop: function(e) {
            if (this.shouldRemove()) {
                this.remove(this.target);
            }
        },

        onDrop: function(e) {
            // remove if it lands in the pocket
            if (this.shouldRemove(this.target)) {
                this.remove(this.target);
            }
        },

        onMouseDown: function(e) {
            var bbox;
            var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
                offsetX = e.clientX - this.parent.$el.position().left; // offsetX

            this.target = e.currentTarget;
            bbox = this.target.getBBox();

            // coords
            this.coords.x = bbox.x;
            this.coords.y = bbox.y;
            this.coords.ox = offsetX / this.parent.getRatio();
            this.coords.oy = offsetY / this.parent.getRatio();

            // dragging
            this.isDragging = true;
        },

        onMouseMove: function(e) {
            var x, y;
            var offsetY = e.clientY - this.parent.$el.position().top, // offsetY
                offsetX = e.clientX - this.parent.$el.position().left; // offsetX

            if (!this.isDragging) {
                return "No target to drag";
            }

            this.coords.dx = offsetX / this.parent.getRatio();
            this.coords.dy = offsetY / this.parent.getRatio();

            x = (this.coords.dx - this.coords.ox) + this.coords.x;
            y = (this.coords.dy - this.coords.oy) + this.coords.y;

            console.log( this.parent.getRatio() );

            // move object
            this.moveTo(this.target, x, y);
        },

        onMouseUp: function(e) {
            if (!this.target) {
                return console.log("No target to drag");
            }

            // drop
            this.onDrop();

            // stop
            this.stop();

            // dragging
            this.isDragging = false;

            // check if clicked
            // if (!this.coords.dx && !this.coords.dy) {
            //     this.onClick(e);
            // }

            // // was dragged
            // else {
            //     this.onDrop(e);
            // }
        },

        onResizeStart: function(e) {
            if (!this.lastTarget) {
                return false;
            }

            var bbox = this.lastTarget.getBBox();

            this.lastTarget.setAttribute("owidth", bbox.width);
            this.lastTarget.setAttribute("oheight", bbox.height);
        },

        onResizeGrid: function(e) {
            if (!this.lastTarget) {
                return false;
            }

            var owidth  = Math.max(100, parseFloat(this.lastTarget.getAttribute("owidth"))),
                oheight = Math.max(50, parseFloat(this.lastTarget.getAttribute("oheight"))),
                width   = Math.max(0, owidth + (owidth * e.x * 2)),
                height  = Math.max(0, oheight + (oheight * e.y * 2));

            // Note: 12/18/18
            // The above code will increase size at a ratio 2x the object
            // so it's easier to make larger. We also use a minimum of 100x50
            // so you don't do ratios of tiny numbers.

            this.lastTarget.setAttributeNS(null, "width", width);
            this.lastTarget.setAttributeNS(null, "height", height);
        },

        onSettingsChange: function(e) {
            //
            if (!this.target) {
                return "No settings.";
            }

            //
            this.setColor(this.getStrokeColor());
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

;(function(namespace) {
    "use strict";

    var Events   = namespace.Events,
        Settings = namespace.Settings,
        State    = namespace.State;

    namespace.View_SVGTable_Text = namespace.View_Base.extend({

        name: "View_SVGTable_Text",

        // <$SVG> Table reference
        $table: null,

        // <DOMElement> Div element
        $target: null,

        // <Object> SVG Table object that we belong to
        parent: null,


        // Public Methods
        // ----------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // bindings
            _.bindAll(this, "onAddText", "onHoldText", "onPlaceArea", "onRemoveArea");

            // super
            namespace.View_Base.prototype.initialize.call(this);

            // references
            this.parent = options.parent;
            this.$table = options.parent.$el;

            //
            this.setupColorPicker();

            // set references
            this.$table = this.$el.closest("#SVGTable");
        },

        attachEvents: function() {
            // super
            namespace.View_Base.prototype.attachEvents.call(this);

            // events
            namespace.on("add:text", this.onAddText);
        },

        detachEvents: function() {
            // super
            namespace.View_Base.prototype.detachEvents.call(this);

            // events
            namespace.off("add:text", this.onAddText);
        },

        setupColorPicker: function() {
            $("#Nav_Text .jscolor").colorPicker({
                color: this.defaultColor
            });
        },

        add: function(x, y) {
            x   || (x = 0);
            y   || (y = 0);

            var size = Settings.get("text", "size"),
                color = Settings.get("text", "color") || "#000000",
                x = $("#DOMTable").width() / 2,
                y = $("#DOMTable").height() / 2;

            // get template
            var $textarea = $("<div></div>", {
                "class": "text-input",
                "html": $("#tpl-textarea").html()
            });

            // css
            $textarea.find("textarea").css({
                color: color,
                fontSize: size + "px"
            });

            // add to parent
            $("#DOMTable").prepend($textarea);

            // reposition
            x -= $textarea.width() / 2;
            y -= $textarea.height() / 2;

            // css
            $textarea.css({
                left: x + "px",
                top: y + "px"
            });

            // focus
            $textarea.find("textarea").focus();

            // make draggable
            $textarea.draggable({
                containment: "parent"
            });

            // elements
            $textarea.find(".action-add").on(Events.CLICK, this.onPlaceArea);
            $textarea.find(".action-remove").on(Events.CLICK, this.onRemoveArea);

            // set target
            this.$target = $textarea;
        },

        place: function() {
            var x, y, width, value,
                ratio, group, text, txt,
                words, fontSize, bbox,
                self   = this,
                size   = parseFloat(Settings.get("text", "size") || 12),
                color  = Settings.get("text", "color") || "#000000",
                randID = ~~(Math.random() * 9999),
                paddingTop = 15;

            // get group
            group = this.$el[0];
            ratio = this.parent.getRatio();

            // convert target to text
            x        = (this.$target.position().left + this.$target.find("textarea").position().left) / ratio;
            y        = (paddingTop + this.$target.position().top + this.$target.find("textarea").position().top + size) / ratio;
            width    = this.$target.find("textarea").width() / ratio;
            value    = this.$target.find("textarea").val();
            words    = value.split(" ");
            fontSize = size / ratio;

            // log
            var rows = 0,
                rowsMax = 1,
                i = 0,
                nextI = 0;

            do {
                text = document.createElementNS("http://www.w3.org/2000/svg", "text"),
                text.setAttributeNS(null, "x", x);
                text.setAttributeNS(null, "y", y);
                text.setAttributeNS(null, "class",       "text-" + randID);
                text.setAttributeNS(null, "data-id",     "text-" + randID);
                text.setAttributeNS(null, "fill",        color);
                text.setAttributeNS(null, "font-family", "Arial, Verdana, sans-serif");
                text.setAttributeNS(null, "font-weight", "normal");
                text.setAttributeNS(null, "font-size",   fontSize + "px");
                text.setAttributeNS(null, "text-anchor", "start");

                // add to group
                group.appendChild(text);

                // increase rows
                rows++;

                // increase row
                y += 20 / ratio;

                // run through words to see if we have enough
                for (i = nextI; i < words.length; i++) {
                    bbox = text.getBBox();

                    // width is good
                    if (bbox.width < width) {
                        text.textContent += words[i] + " ";
                    }

                    // width isn't good which means last width probably wasn't
                    // good either
                    else {
                        nextI = i - 1;
                        rowsMax = rowsMax + 1;
                        text.textContent = text.textContent.substr(0, text.textContent.length - words[nextI].length - 2);

                        break;
                    }
                }

            } while (rows < rowsMax);

            // events
            $("text.text-" + randID).on("mousedown", function(e) {
                namespace.preventDefault(e);

                $(e.currentTarget).off("mouseup");
                $(e.currentTarget).on("mouseup", self.onHoldText);
            });
        },

        remove: function() {
            this.$target.remove();
        },

        clear: function() {
            this.$("*").remove();
        },

        stop: function() {
            this.lastTarget = this.target;
            this.target     = null;
            this.coords     = { };
        },


        // Helpers
        // ----------------------------------------------------------------

        shouldRemove: function(target) {
            return false;
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onAddText: function(e) {
            this.add(200, 100);
        },

        onHoldText: function(e) {
            var self = this,
                target = e.currentTarget,
                id = target.getAttributeNS(null, "data-id");

            var $div = $("<div></div>", {
                "class": "dialog-confirm",
                "html": "Remove text from diagram?"
            });

            // add to document
            $("body").append($div);

            // open dialog
            $div.dialog({
                resizable: false,
                modal: true,
                buttons: {
                    "Remove": function() {
                        $(this).dialog("close");

                        // remove text and events
                        self.$("." + id).off("mousedown mouseup");
                        self.$("." + id).remove();
                    },
                    Cancel: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },

        onPlaceArea: function(e) {
            // tooltip check
            page.showHelpForTexts();

            this.place();
            this.remove();
        },

        onRemoveArea: function(e) {
            this.remove();
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 *
 * @status  COMPLETE
 */

;(function(namespace) {
    "use strict";

    var Events = namespace.Events;

    namespace.View_UI_Masse = namespace.View_Base.extend({

        name: "View_UI_Masse",


        // Public Methods
        // ----------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // bindings
            _.bindAll(this, "onDrag");

            // super
            namespace.View_Base.prototype.initialize.call(this);

            // masse grid
            this.$el.draggable({
                containment: "parent",
                revert: true,
                drag: this.onDrag
            });
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onDrag: function(e, ui) {
            var $container = this.$el.parent(),
                bWidth     = ui.helper.width(),
                cWidth     = $container.width(),
                cHeight    = $container.height(),
                left       = ui.position.left + bWidth / 2,
                top        = ui.position.top + bWidth / 2,
                x          = (left / cWidth) * 2.5 - 1.25,
                y          = (top / cHeight) * 2.5 - 1.25;

            // we do 2.5 / 1.25 because it determines based on the center
            // of the ball, but since containment locks our helper based
            // on the edges (11px), we won't fully reach 1.0... we reach
            // 0.87. We should reach 1.0 so we don't get confused later
            // down they road why numbers aren't adding up.
            x = Math.max(-1, Math.min(1, x));
            y = Math.max(-1, Math.min(1, y));

            // trigger
            namespace.trigger(Events.MASSE, {
                x: x,
                y: y
            });
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 *
 * @status  COMPLETE
 */

;(function(namespace) {
    "use strict";

    var Events = namespace.Events;

    namespace.View_UI_Resizer = namespace.View_Base.extend({

        name: "View_UI_Resizer",


        // Public Methods
        // ----------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // bindings
            _.bindAll(this, "onStart", "onDrag", "onStop");

            // super
            namespace.View_Base.prototype.initialize.call(this);

            // masse grid
            this.$el.draggable({
                containment: "parent",
                revert     : true,
                start      : this.onStart,
                drag       : this.onDrag,
                stop       : this.onStop
            });
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onDrag: function(e, ui) {
            var $container = this.$el.parent(),
                bWidth     = ui.helper.width(),
                cWidth     = $container.width(),
                cHeight    = $container.height(),
                left       = ui.position.left + bWidth / 2,
                top        = ui.position.top + bWidth / 2,
                x          = (left / cWidth) * 2.5 - 1.25,
                y          = (top / cHeight) * 2.5 - 1.25;

            // we do 2.5 / 1.25 because it determines based on the center
            // of the ball, but since containment locks our helper based
            // on the edges (11px), we won't fully reach 1.0... we reach
            // 0.87. We should reach 1.0 so we don't get confused later
            // down they road why numbers aren't adding up.
            x = Math.max(-1, Math.min(1, x));
            y = Math.max(-1, Math.min(1, y));

            // trigger
            this.trigger(Events.RESIZE, {
                x: x,
                y: y
            });
        },

        onStart: function(e, ui) {
            this.trigger(Events.START, {
                x: 0,
                y: 0
            });
        },

        onStop: function() {
            this.trigger(Events.STOP);
        }

    });

})(window.pm || (window.pm = {}));

/**
 * @package ChalkySticks
 * @authors Matt Kenefick (matt@polymermallard.com)
 */

;(function(namespace) {
    "use strict";

    var Events = namespace.Events,
        Settings = namespace.Settings,
        State = namespace.State;

    namespace.Page_Main = namespace.Page_Base.extend({

        events: {
            "click .action-fullscreen": "onClickFullscreen",
            "click .action-skipFullscreen": "onClickSkipFullscreen",
            "click .alert-v1-banner .action-close": "onClickCloseAlert",
            "click .action-play"   : "onClickPlay",
            "click .action-save"   : "onClickSave",
            "click .action-shuffle": "onClickShuffle",
            "click .action-clear"  : "onClickClear"
        },

        name: "Page_Main",

        /*
            mk: @todo
            hack because the stupid VMs aren't running
         */
        attached: false,


        // Public Method
        // ---------------------------------------------------------------

        initialize: function(options) {
            options || (options = {});

            // super
            namespace.Page_Base.prototype.initialize.call(this, options);

            // add views
            this.views.add(new namespace.View_Menu({
                el: $("#Settings")
            }), "menu");

            this.views.add(new namespace.View_BallTray({
                el: $("#BallHolder")
            }), "ball-tray");

            this.views.add(new namespace.View_Table({
                el: $("#Table")
            }), "table");

            this.views.add(new namespace.View_UI_Masse({
                el: $("#MasseGrid_Ball")
            }), "masse");

            this.views.add(new namespace.View_UI_Resizer({
                el: $("#ShapeResizeGrid .resize-ball")
            }), "shapes-resizer");

            console.log("Setting up");
        },

        attachEvents: function() {
            // super
            namespace.Page_Base.prototype.attachEvents.call(this);

            if (this.attached === true) {
                return;
            }
            else {
                this.attached = true;
            }

            // events
            this.$v("shapes-resizer").on(Events.START, this.onShapesStart);
            this.$v("shapes-resizer").on(Events.RESIZE, this.onShapesResize);
        },

        detachEvents: function() {
            // super
            namespace.Page_Base.prototype.detachEvents.call(this);

            //
            this.$v("shapes-resizer").off(Events.START, this.onShapesStart);
            this.$v("shapes-resizer").off(Events.RESIZE, this.onShapesResize);
        },

        render: function() {
            namespace.Page_Base.prototype.render.call(this);

            //
            this.setFullscreenClass();

            // lock orientation
            if (Flags.isMobile) {
                // screen.orientation.lock("landscape");
            }

            return this;
        },

        setFullscreenClass: function(override) {
            // check full screen
            if (override || document.fullscreenElement) {
                namespace.$html.addClass("state-fullscreen");
                namespace.$html.removeClass("state-not-fullscreen");
            }
            else {
                namespace.$html.addClass("state-not-fullscreen");
                namespace.$html.removeClass("state-fullscreen");
            }
        },


        // Tooltips
        // ----------------------------------------------------------------

        showHelpForBalls: function() {
            if (Flags.isMobile) {
                return;
            }

            if (!!localStorage.getItem("completed-balls")) {
                return;
            }

            // set setting
            localStorage.setItem("completed-balls", true);

            // show
            $("#DialogHelpBalls").dialog({
                modal: true,
                buttons: {
                    Dismiss: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },

        showHelpForLines: function() {
            if (Flags.isMobile) {
                return;
            }

            if (!!localStorage.getItem("completed-lines")) {
                return;
            }

            // set setting
            localStorage.setItem("completed-lines", true);

            // show
            $("#DialogHelpLines").dialog({
                modal: true,
                width: "600px",
                buttons: {
                    Dismiss: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },

        showHelpForTexts: function() {
            if (Flags.isMobile) {
                return;
            }

            if (!!localStorage.getItem("completed-texts")) {
                return;
            }

            // set setting
            localStorage.setItem("completed-texts", true);

            // show
            $("#DialogHelpTexts").dialog({
                modal: true,
                buttons: {
                    Dismiss: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },

        showHelpForShapes: function() {
            if (Flags.isMobile) {
                return;
            }

            if (!!localStorage.getItem("completed-shapes")) {
                return;
            }

            // set setting
            localStorage.setItem("completed-shapes", true);

            // show
            $("#DialogHelpShapes").dialog({
                modal: true,
                buttons: {
                    Dismiss: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },

        showHelpForCues: function() {
            if (Flags.isMobile) {
                return;
            }

            if (!!localStorage.getItem("completed-cues")) {
                return;
            }

            // set setting
            localStorage.setItem("completed-cues", true);

            // show
            $("#DialogHelpCues").dialog({
                modal: true,
                buttons: {
                    Dismiss: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },


        // Event Handlers
        // ----------------------------------------------------------------

        onClickCloseAlert: function(e) {
            namespace.preventDefault(e);

            $(".alert").slideUp(function(e) {
                localStorage.setItem("closed-v1-banner", true);
                $(this).remove();
            });
        },

        onClickFullscreen: function(e) {
            toggleFullScreen();

            // hide button since we wont use it again
            $(e.currentTarget).fadeOut();

            // check if it worked
            setTimeout(function(s) {
                if (isFullscreen()) {
                    s.setFullscreenClass();
                }
                else {
                    alert("Your browser may not support fullscreen unfortunately.");
                }
            }, 505, this);
        },

        onClickSkipFullscreen: function(e) {
            // hide button since we wont use it again
            $(e.currentTarget).fadeOut();

            // Go big anyway
            this.setFullscreenClass(true);
        },

        onClickSave: function(e) {
            var $svg, svg, markup,
                balls = [],
                lines = [],
                texts = [],
                shapes = [],
                cues = [];

            e.preventDefault();

            // duplicate svg
            $svg = this.$v("table svg-table").$el.clone();
            svg = $svg[0];
            svg.setAttribute("width", svg.getAttribute("owidth"));
            svg.setAttribute("height", svg.getAttribute("oheight"));

            // collect balls
            $(".balls .ball").each(function(index, target) {
                var url = target.getAttributeNS(null, "url"),
                    x = target.getAttributeNS(null, "x"),
                    y = target.getAttributeNS(null, "y");

                balls.push({
                    url: url,
                    x: x,
                    y: y
                });
            });

            // collect lines
            $(".lines .line-visible").each(function(index, target) {
                var stroke = target.getAttributeNS(null, "stroke"),
                    strokeWidth = target.getAttributeNS(null, "stroke-width"),
                    strokeDashArray = target.getAttributeNS(null, "stroke-dasharray"),
                    x1 = target.getAttributeNS(null, "x1"),
                    x2 = target.getAttributeNS(null, "x2"),
                    y1 = target.getAttributeNS(null, "y1"),
                    y2 = target.getAttributeNS(null, "y2"),
                    markerEnd = target.getAttributeNS(null, "marker-end");

                lines.push({
                    x1: x1,
                    x2: x2,
                    y1: y1,
                    y2: y2,
                    markerEnd: markerEnd,
                    stroke: stroke,
                    strokeWidth: strokeWidth,
                    strokeDashArray: strokeDashArray
                });
            });

            // collect text
            $(".text text").each(function(index, target) {
                var fill = target.getAttributeNS(null, "fill"),
                    x = target.getAttributeNS(null, "x"),
                    y = target.getAttributeNS(null, "y"),
                    fontFamily = target.getAttributeNS(null, "font-family"),
                    fontWeight = target.getAttributeNS(null, "font-weight"),
                    fontSize = target.getAttributeNS(null, "font-size"),
                    text = target.innerHTML;

                texts.push({
                    fill: fill,
                    x: x,
                    y: y,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                    text: text
                });
            });

            // collect shapes
            $(".shapes shape").each(function(index, target) {
                var fill = target.getAttributeNS(null, "fill"),
                    stroke = target.getAttributeNS(null, "stroke"),
                    x = target.getAttributeNS(null, "x"),
                    y = target.getAttributeNS(null, "y"),
                    width = target.getAttributeNS(null, "width"),
                    height = target.getAttributeNS(null, "height");

                shapes.push({
                    fill: fill,
                    stroke: stroke,
                    x: x,
                    y: y,
                    width: width,
                    height: height
                });
            });

            // collect cues
            $(".cues cue").each(function(index, target) {
                var x = target.getAttributeNS(null, "x"),
                    y = target.getAttributeNS(null, "y"),
                    width = target.getAttributeNS(null, "width"),
                    height = target.getAttributeNS(null, "height");

                cues.push({
                    x: x,
                    y: y,
                    width: width,
                    height: height
                });
            });

            // get svg data
            markup = svg.outerHTML;

            // save diagram
            $.post(config.API_URL + "/diagrams", {
                ball_type: Settings.get("balls", "type"),
                table_type: Settings.get("table", "type"),
                is_complete: balls.length > 1 && lines > 1,
                ball_count: balls.length,
                balls: JSON.stringify(balls),
                lines: JSON.stringify(lines),
                texts: JSON.stringify(texts),
                shapes: JSON.stringify(shapes),
                cues: JSON.stringify(cues),
                diagram: markup
            }, function(response) {
                if (response) {
                    // broadcast event
                    namespace.trigger(Events.SAVED, response);

                    // show diagrams
                    $("html").addClass("diagram-saved");

                    if (Flags.isMobile) {

                    }
                    else {
                        // setup href
                        $(".action-download-png").attr("href", "/" + response.hash + ".png");
                        $(".action-download-svg").attr("href", "/" + response.hash + ".svg");
                        $(".action-download-share").attr("href", "https://www.facebook.com");

                        // show dialog
                        $("#DialogSaved").dialog({
                            modal: true,
                            buttons: {
                                "Save PNG": function() {
                                    window.open("/" + response.hash + ".png", "_blank");
                                },
                                "Save SVG": function() {
                                    window.open("/" + response.hash + ".svg", "_blank");
                                }
                            }
                        });

                        namespace.$document.one(Events.CLICK, function() {
                            $("#DialogSaved").dialog("close");
                        });

                        $(".ui-dialog-titlebar").one(Events.CLICK, function() {
                            $("#DialogSaved").dialog("close");
                        });
                    }

                    // push history
                    history.pushState(null, null, response.hash);
                }
            });
        },

        onClickPlay: function(e) {
            var matches = location.href.match("chalkysticks.com\/([a-zA-Z0-9]{5})");

            // If we have
            if (matches && matches.length > 1) {
                window.open("https://game.chalkysticks.com/" + matches[1], "_blank");
            }
            else {
                alert("You must save the diagram first or load an already saved one.");
            }

            return false;
        },

        onClickShuffle: function(e) {
            namespace.trigger("action:shuffle", e);

            // reset diagram
            history.pushState(null, null, "/");
        },

        onClickClear: function(e) {
            namespace.trigger("action:clear", e);

            // reset diagram
            history.pushState(null, null, "/");
        },

        onShapesStart: function(e) {
            namespace.trigger("shape:start", e);
        },

        onShapesResize: function(e) {
            namespace.trigger("shape:resize", e);
        },


        // Animation
        // ----------------------------------------------------------------

        animateInStart: function() {
            this.views.execAll("animateInStart");

            this.$(".ui-action").css({
                opacity: 0
            });
        },

        animateIn: function(callback) {
            var delay = 250,
                self = this;

            console.warn("Animate in");

            setTimeout(function(s) {
                s.$v("table").$el.css("opacity", 1.0);
                s.$v("table").animateIn();
            }, delay * 1, this);

            setTimeout(function(s) {
                s.$v("menu").animateIn();
            }, delay * 5, this);

            setTimeout(function(s) {
                s.$v("ball-tray").animateIn();

                // load setting
                s.$v("ball-tray").load("chalkysticks");
            }, delay * 7, this);

            setTimeout(function(s) {
                s.$(".ui-action").each(function(index) {
                    $(this).delay(delay * index).animate({
                        opacity: 1
                    }, 500);
                });

                self.animateInComplete();
            }, delay * 7, this);
        },

        animateInComplete: function() {
            if (State.hasV1Banner) {
                this.$(".alert-v1-banner").removeClass("hide")
                    .hide()
                    .slideDown();
            }

            // check if we've been here before
            if (!State.hasVisited) {
                introJs()
                    .setOptions({
                        showProgress: true,
                        exitOnEsc: false,
                        exitOnOverlayClick: false,
                        showStepNumbers: true,
                        keyboardNavigation: true,
                        showBullets: false
                    })
                    .oncomplete(function() {
                        localStorage.setItem("has-visited", true);
                    })
                    .start();

                this.$el.addClass("first-visit");
            }
            else {
                this.$el.addClass("has-visited");
            }
        },

        animateOut: function(callback) {
            this.views.execAll("animateOut");
        }

    });

})(window.pm || (window.pm = {}));

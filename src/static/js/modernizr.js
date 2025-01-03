!function(e,t,n){function r(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function o(e){var t=x.className,n=T._config.classPrefix||"";if(S&&(t=t.baseVal),T._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}T._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return typeof e===t}function s(){var e,t,n,r,o,i;for(var s in _)if(_.hasOwnProperty(s)){if(e=[],(t=_[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?T[i[0]]=r:(!T[i[0]]||T[i[0]]instanceof Boolean||(T[i[0]]=new Boolean(T[i[0]])),T[i[0]][i[1]]=r),b.push((r?"":"no-")+i.join("-"))}}function l(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&l(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),i=T[r[0]];if(2==r.length&&(i=i[r[1]]),void 0!==i)return T;t="function"==typeof t?t():t,1==r.length?T[r[0]]=t:(!T[r[0]]||T[r[0]]instanceof Boolean||(T[r[0]]=new Boolean(T[r[0]])),T[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),T._trigger(e,t)}return T}function c(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:a(r=t[e[o]],"function")?u(r,n||t):r;return!1}function d(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function p(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i)i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function m(){var e=t.body;return e||((e=i(S?"svg":"body")).fake=!0),e}function h(e,n,r,o){var a,s,l,c,u="modernizr",f=i("div"),d=m();if(parseInt(r,10))for(;r--;)(l=i("div")).id=o?o[r]:u+(r+1),f.appendChild(l);return(a=i("style")).type="text/css",a.id="s"+u,(d.fake?d:f).appendChild(a),d.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),s=n(f,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=c,x.offsetHeight):f.parentNode.removeChild(f),!!s}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return h("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==p(e,null,"position")}))}return n}function g(e,t,o,s){function l(){f&&(delete D.style,delete D.modElem)}if(s=!a(s,"undefined")&&s,!a(o,"undefined")){var u=v(e,o);if(!a(u,"undefined"))return u}for(var f,d,p,m,h,g=["modernizr","tspan","samp"];!D.style&&g.length;)f=!0,D.modElem=i(g.shift()),D.style=D.modElem.style;for(p=e.length,d=0;d<p;d++)if(m=e[d],h=D.style[m],c(m,"-")&&(m=r(m)),D.style[m]!==n){if(s||a(o,"undefined"))return l(),"pfx"!=t||m;try{D.style[m]=o}catch(e){}if(D.style[m]!=h)return l(),"pfx"!=t||m}return l(),!1}function y(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(i+" ")+i).split(" ");return a(t,"string")||a(t,"undefined")?g(s,t,r,o):f(s=(e+" "+N.join(i+" ")+i).split(" "),t,n)}function C(e,t,r){return y(e,n,n,t,r)}var b=[],E="Moz O ms Webkit",x=t.documentElement,S="svg"===x.nodeName.toLowerCase();S||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=_.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=_.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),_.elements=n+" "+e,c(t)}function i(e){var t=S[e[E]];return t||(t={},x++,e[E]=x,S[x]=t),t}function a(e,n,r){return n||(n=t),v?n.createElement(e):(r||(r=i(n)),!(o=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||C.test(e)||o.tagUrn?o:r.frag.appendChild(o));var o}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();for(var o=(n=n||i(e)).frag.cloneNode(),a=0,s=r(),l=s.length;a<l;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return _.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(_,t.frag)}function c(e){e||(e=t);var r=i(e);return!_.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(f(t)));return a}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(N+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+N+"\\:$2";o--;)(t=n[o]=n[o].split("}"))[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!j||e.printShived||(void 0===s[N]&&s.add(N),l.attachEvent("onbeforeprint",(function(){t();for(var i,a,s,l=e.styleSheets,c=[],f=l.length,p=Array(f);f--;)p[f]=l[f];for(;s=p.pop();)if(!s.disabled&&T.test(s.media)){try{a=(i=s.imports).length}catch(e){a=0}for(f=0;f<a;f++)p.push(i[f]);try{c.push(s.cssText)}catch(e){}}c=d(c.reverse().join("")),o=u(e),r=n(e,c)})),l.attachEvent("onafterprint",(function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)})),e.printShived=!0),e}var h,v,g="3.7.3",y=e.html5||{},C=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E="_html5shiv",x=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){h=!0,v=!0}}();var _={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:!1!==y.shivCSS,supportsUnknownElements:v,shivMethods:!1!==y.shivMethods,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:o};e.html5=_,c(t);var w,T=/^$|\b(?:all|print)\b/,N="html5shiv",j=!(v||(w=t.documentElement,void 0===t.namespaces||void 0===t.parentWindow||void 0===w.applyElement||void 0===w.removeNode||void 0===e.attachEvent));_.type+=" print",_.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=_)}(void 0!==e?e:this,t);var _=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},T=function(){};T.prototype=w,T=new T;var N=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=N;var j,k,P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P,T.addTest("opacity",(function(){var e=i("a").style;return e.cssText=P.join("opacity:.55;"),/^0.55$/.test(e.opacity)})),k={}.hasOwnProperty,j=a(k,"undefined")||a(k.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return k.call(e,t)},w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),T.hasOwnProperty(e)&&setTimeout((function(){T._trigger(e,T[e])}),0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},T._q.push((function(){w.addTest=l}));var $=i("input"),z="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};T.inputtypes=function(e){for(var r,o,i,a=e.length,s="1)",l=0;l<a;l++)$.setAttribute("type",r=e[l]),(i="text"!==$.type&&"style"in $)&&($.value=s,$.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&$.style.WebkitAppearance!==n?(x.appendChild($),i=(o=t.defaultView).getComputedStyle&&"textfield"!==o.getComputedStyle($,null).WebkitAppearance&&0!==$.offsetHeight,x.removeChild($)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?$.checkValidity&&!1===$.checkValidity():$.value!=s)),A[e[l]]=!!i;return A}(z);var F=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=F;var L=function(t){var r,o=P.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if((r=(t=t.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<o;a++){var s=P[a];if(s.toUpperCase()+"_"+r in i)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=L;var B={elem:i("modernizr")};T._q.push((function(){delete B.elem}));var D={style:B.elem.style};T._q.unshift((function(){delete D.style})),w.testAllProps=y;w.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=r(e)),t?y(e,t,n):y(e,"pfx"))};w.testAllProps=C,T.addTest("flexbox",C("flexBasis","1px",!0)),T.addTest("cssanimations",C("animationName","a",!0)),s(),o(b),delete w.addTest,delete w.addAsyncTest;for(var M=0;M<T._q.length;M++)T._q[M]();e.Modernizr=T}(window,document);
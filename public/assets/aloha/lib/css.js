/**
 * Copyright (c) 2010 unscriptable.com
 */
/*jslint browser:true, on:true, sub:true */
(function(e){function f(e){return u[e]}function l(e,r){var i=e.link;i[t]=i[n]=function(){if(!i.readyState||i.readyState=="complete")u["event-link-onload"]=!0,b(e),r()}}function c(e,t){return e.lastIndexOf(".")<=e.lastIndexOf("/")?e+"."+t:e}function h(e){var t=e.split("!"),n,r=1,i;while(n=t[r++])i=n.split("=",2),t[i[0]]=i.length==2?i[1]:!0;return t}function p(e,t){var n=e[r]("link");return n.rel="stylesheet",n.type="text/css",t&&(n.href=t),n}function v(){return d||(d=e[r]("div"),d.id="_cssx_load_test",d.style.cssText="position:absolute;top:-999px;left:-999px;",e.body.appendChild(d)),e.defaultView.getComputedStyle(d,null).marginTop=="-5px"}function m(e){var t,n,r=!1;try{t=e.sheet||e.styleSheet,n=t.cssRules||t.rules,r=n?n.length>0:n!==s,r&&navigator.userAgent.indexOf("Chrome")>=0&&(t.insertRule("#_cssx_load_test{margin-top:-5px;}",0),r=v(),t.deleteRule(0))}catch(i){r=i.code==1e3||i.message.match(/security|denied/i)}return r}function g(e,t){m(e.link)?(b(e),t()):i||setTimeout(function(){g(e,t)},e.wait)}function y(e,t){function r(){n||(n=!0,t())}var n;l(e,r),f("event-link-onload")||g(e,r)}function b(e){var r=e.link;r[t]=r[n]=null}var t="onreadystatechange",n="onload",r="createElement",i=!1,s,o={},u={},a=e.head||(e.head=e.getElementsByTagName("head")[0]);require.onError&&(require.onError=function(e){return function(){i=!0,e.apply(this,arguments)}}(require.onError));var d,w={load:function(t,n,r,i){function f(){--u==0&&setTimeout(function(){r(b)},0)}var s=t.split(","),u=s.length;for(var l=s.length-1,d;l>=0;l--,d=g){t=s[l];var v=h(t),m=v.shift(),g=n.toUrl(c(m,"css")),b=p(e),w="nowait"in v?v["nowait"]!="false":!!i.cssDeferLoad,E={link:b,url:g,wait:i.cssWatchPeriod||50};w?r(b):y(E,f),b.href=g,d?a.insertBefore(b,o[d].previousSibling):a.appendChild(b),o[g]=b}},nameWithExt:c,parseSuffixes:h,createLink:p};define(w)})(document);
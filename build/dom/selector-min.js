/*
Copyright 2010, KISSY UI Library v1.0.3
MIT Licensed
build: 469 Mar 9 17:10
*/
KISSY.add("selector",function(j,t){function l(a,b,c){var d,e=[],g,f;if(typeof a===o){a=j.trim(a);if(p.test(a)){if(b=m(a.slice(1)))e=[b]}else if(d=u.exec(a)){g=d[1];f=d[2];d=d[3];if(b=g?m(g):v(b))if(d){if(!g||a.indexOf(i)!==-1)e=q(d,f,b)}else if(f)e=r(b,f)}else if(a.indexOf(",")>-1)if(h.querySelectorAll)e=h.querySelectorAll(a);else{g=a.split(",");f=[];e=0;for(a=g.length;e<a;++e)f=f.concat(l(g[e],b));e=w(f)}}else if(a&&a.nodeType)e=[a];else if(a&&a.item)e=a;if(e.item)e=n(e);c||x(e);return e}function v(a){if(a===
t)a=h;else if(typeof a===o&&p.test(a))a=m(a.slice(1));else if(a&&a.nodeType!==1&&a.nodeType!==9)a=null;return a}function m(a){return h.getElementById(a)}function r(a,b){return a.getElementsByTagName(b)}function q(a,b,c){c=a=c.getElementsByClassName(a);var d=0,e=0,g=a.length,f;if(b&&b!==k){c=[];for(b=b.toUpperCase();d<g;++d){f=a[d];if(f.tagName===b)c[e++]=f}}return c}function n(a){return Array.prototype.slice.call(a)}function w(a){var b=false;a.sort(function(d,e){d=d.sourceIndex-e.sourceIndex;if(d===
0)b=true;return d});if(b)for(var c=1;c<a.length;c++)a[c]===a[c-1]&&a.splice(c--,1);return a}function x(a){a.each=function(b,c){j.each(a,b,c)}}var h=document,o="string",i=" ",k="*",p=/^#[\w-]+$/,u=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var a=h.createElement("div");a.appendChild(h.createComment(""));if(a.getElementsByTagName(k).length>0)r=function(b,c){b=b.getElementsByTagName(c);if(c===k){c=[];for(var d=0,e=0,g;g=b[d++];)if(g.nodeType===1)c[e++]=g;b=c}return b}})();h.getElementsByClassName||
(q=h.querySelectorAll?function(a,b,c){return c.querySelectorAll((b?b:"")+"."+a)}:function(a,b,c){b=c.getElementsByTagName(b||k);c=[];var d=0,e=0,g=b.length,f,s;for(a=i+a+i;d<g;++d){f=b[d];if((s=f.className)&&(i+s+i).indexOf(a)>-1)c[e++]=f}return c});try{n(h.documentElement.childNodes)}catch(y){n=function(a){for(var b=[],c=0,d=a.length;c<d;++c)b[c]=a[c];return b}}j.query=l;j.get=function(a,b){return l(a,b,true)[0]||null}});

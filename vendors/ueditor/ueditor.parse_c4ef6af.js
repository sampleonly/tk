define("vendors/ueditor/ueditor.parse",function(){!function(){!function(){UE=window.UE||{};var e=!!window.ActiveXObject,t={removeLastbs:function(e){return e.replace(/\/$/,"")},extend:function(e){for(var t=arguments,n=this.isBoolean(t[t.length-1])?t[t.length-1]:!1,r=this.isBoolean(t[t.length-1])?t.length-1:t.length,i=1;r>i;i++){var a=t[i];for(var s in a)n&&e.hasOwnProperty(s)||(e[s]=a[s])}return e},isIE:e,cssRule:e?function(e,t,n){var r,i;n=n||document,r=n.indexList?n.indexList:n.indexList={};var a;if(r[e])a=n.styleSheets[r[e]];else{if(void 0===t)return"";a=n.createStyleSheet("",i=n.styleSheets.length),r[e]=i}return void 0===t?a.cssText:void(a.cssText=a.cssText+"\n"+(t||""))}:function(e,t,n){n=n||document;var r,i=n.getElementsByTagName("head")[0];if(!(r=n.getElementById(e))){if(void 0===t)return"";r=n.createElement("style"),r.id=e,i.appendChild(r)}return void 0===t?r.innerHTML:void(""!==t?r.innerHTML=r.innerHTML+"\n"+t:i.removeChild(r))},domReady:function(t){var n=window.document;"complete"===n.readyState?t():e?(!function(){if(!n.isReady){try{n.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}t()}}(),window.attachEvent("onload",function(){t()})):(n.addEventListener("DOMContentLoaded",function(){n.removeEventListener("DOMContentLoaded",arguments.callee,!1),t()},!1),window.addEventListener("load",function(){t()},!1))},each:function(e,t,n){if(null!=e)if(e.length===+e.length){for(var r=0,i=e.length;i>r;r++)if(t.call(n,e[r],r,e)===!1)return!1}else for(var a in e)if(e.hasOwnProperty(a)&&t.call(n,e[a],a,e)===!1)return!1},inArray:function(e,t){var n=-1;return this.each(e,function(e,r){return e===t?(n=r,!1):void 0}),n},pushItem:function(e,t){-1==this.inArray(e,t)&&e.push(t)},trim:function(e){return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},indexOf:function(e,t,n){var r=-1;return n=this.isNumber(n)?n:0,this.each(e,function(e,i){return i>=n&&e===t?(r=i,!1):void 0}),r},hasClass:function(e,t){t=t.replace(/(^[ ]+)|([ ]+$)/g,"").replace(/[ ]{2,}/g," ").split(" ");for(var n,r=0,i=e.className;n=t[r++];)if(!new RegExp("\\b"+n+"\\b","i").test(i))return!1;return r-1==t.length},addClass:function(e,n){if(e){n=this.trim(n).replace(/[ ]{2,}/g," ").split(" ");for(var r,i=0,a=e.className;r=n[i++];)new RegExp("\\b"+r+"\\b").test(a)||(a+=" "+r);e.className=t.trim(a)}},removeClass:function(e,t){t=this.isArray(t)?t:this.trim(t).replace(/[ ]{2,}/g," ").split(" ");for(var n,r=0,i=e.className;n=t[r++];)i=i.replace(new RegExp("\\b"+n+"\\b"),"");i=this.trim(i).replace(/[ ]{2,}/g," "),e.className=i,!i&&e.removeAttribute("className")},on:function(e,n,r){var i=this.isArray(n)?n:n.split(/\s+/),a=i.length;if(a)for(;a--;)if(n=i[a],e.addEventListener)e.addEventListener(n,r,!1);else{r._d||(r._d={els:[]});var s=n+r.toString(),l=t.indexOf(r._d.els,e);r._d[s]&&-1!=l||(-1==l&&r._d.els.push(e),r._d[s]||(r._d[s]=function(e){return r.call(e.srcElement,e||window.event)}),e.attachEvent("on"+n,r._d[s]))}e=null},off:function(e,n,r){var i=this.isArray(n)?n:n.split(/\s+/),a=i.length;if(a)for(;a--;)if(n=i[a],e.removeEventListener)e.removeEventListener(n,r,!1);else{var s=n+r.toString();try{e.detachEvent("on"+n,r._d?r._d[s]:r)}catch(l){}if(r._d&&r._d[s]){var o=t.indexOf(r._d.els,e);-1!=o&&r._d.els.splice(o,1),0==r._d.els.length&&delete r._d[s]}}},loadFile:function(){function e(e,n){try{for(var r,i=0;r=t[i++];)if(r.doc===e&&r.url==(n.src||n.href))return r}catch(a){return null}}var t=[];return function(n,r,i){var a=e(n,r);if(a)return void(a.ready?i&&i():a.funs.push(i));if(t.push({doc:n,url:r.src||r.href,funs:[i]}),!n.body){var s=[];for(var l in r)"tag"!=l&&s.push(l+'="'+r[l]+'"');return void n.write("<"+r.tag+" "+s.join(" ")+" ></"+r.tag+">")}if(!r.id||!n.getElementById(r.id)){var o=n.createElement(r.tag);delete r.tag;for(var l in r)o.setAttribute(l,r[l]);o.onload=o.onreadystatechange=function(){if(!this.readyState||/loaded|complete/.test(this.readyState)){if(a=e(n,r),a.funs.length>0){a.ready=1;for(var t;t=a.funs.pop();)t()}o.onload=o.onreadystatechange=null}},o.onerror=function(){throw Error("The load "+(r.href||r.src)+" fails,check the url")},n.getElementsByTagName("head")[0].appendChild(o)}}}()};t.each(["String","Function","Array","Number","RegExp","Object","Boolean"],function(e){t["is"+e]=function(t){return Object.prototype.toString.apply(t)=="[object "+e+"]"}});var n={};UE.parse={register:function(e,t){n[e]=t},load:function(e){t.each(n,function(n){n.call(e,t)})}},uParse=function(e,n){t.domReady(function(){var r;if(document.querySelectorAll)r=document.querySelectorAll(e);else if(/^#/.test(e))r=[document.getElementById(e.replace(/^#/,""))];else if(/^\./.test(e)){var r=[];t.each(document.getElementsByTagName("*"),function(t){t.className&&new RegExp("\\b"+e.replace(/^\./,"")+"\\b","i").test(t.className)&&r.push(t)})}else r=document.getElementsByTagName(e);t.each(r,function(r){UE.parse.load(t.extend({root:r,selector:e},n))})})}}(),UE.parse.register("insertcode",function(e){var t=this.root.getElementsByTagName("pre");if(t.length)if("undefined"==typeof XRegExp){var n,r;void 0!==this.rootPath?(n=e.removeLastbs(this.rootPath)+"/third-party/SyntaxHighlighter/shCore.js",r=e.removeLastbs(this.rootPath)+"/third-party/SyntaxHighlighter/shCoreDefault.css"):(n=this.highlightJsUrl,r=this.highlightCssUrl),e.loadFile(document,{id:"syntaxhighlighter_css",tag:"link",rel:"stylesheet",type:"text/css",href:r}),e.loadFile(document,{id:"syntaxhighlighter_js",src:n,tag:"script",type:"text/javascript",defer:"defer"},function(){e.each(t,function(e){e&&/brush/i.test(e.className)&&SyntaxHighlighter.highlight(e)})})}else e.each(t,function(e){e&&/brush/i.test(e.className)&&SyntaxHighlighter.highlight(e)})}),UE.parse.register("table",function(e){function t(t,n){var r,i=t;for(n=e.isArray(n)?n:[n];i;){for(r=0;r<n.length;r++)if(i.tagName==n[r].toUpperCase())return i;i=i.parentNode}return null}function n(t,n,i){for(var a=t.rows,s=[],l="TH"===a[0].cells[0].tagName,o=0,d=0,c=a.length;c>d;d++)s[d]=a[d];var u={reversecurrent:function(){return 1},orderbyasc:function(e,t){var n=e.innerText||e.textContent,r=t.innerText||t.textContent;return n.localeCompare(r)},reversebyasc:function(e,t){var n=e.innerHTML,r=t.innerHTML;return r.localeCompare(n)},orderbynum:function(t,n){var r=t[e.isIE?"innerText":"textContent"].match(/\d+/),i=n[e.isIE?"innerText":"textContent"].match(/\d+/);return r&&(r=+r[0]),i&&(i=+i[0]),(r||0)-(i||0)},reversebynum:function(t,n){var r=t[e.isIE?"innerText":"textContent"].match(/\d+/),i=n[e.isIE?"innerText":"textContent"].match(/\d+/);return r&&(r=+r[0]),i&&(i=+i[0]),(i||0)-(r||0)}};t.setAttribute("data-sort-type",i&&"string"==typeof i&&u[i]?i:""),l&&s.splice(0,1),s=r(s,function(e,t){var r;return r=i&&"function"==typeof i?i.call(this,e.cells[n],t.cells[n]):i&&"number"==typeof i?1:i&&"string"==typeof i&&u[i]?u[i].call(this,e.cells[n],t.cells[n]):u.orderbyasc.call(this,e.cells[n],t.cells[n])});for(var h=t.ownerDocument.createDocumentFragment(),f=0,c=s.length;c>f;f++)h.appendChild(s[f]);var g=t.getElementsByTagName("tbody")[0];o?g.insertBefore(h,a[o-range.endRowIndex+range.beginRowIndex-1]):g.appendChild(h)}function r(e,t){t=t||function(e,t){return e.localeCompare(t)};for(var n=0,r=e.length;r>n;n++)for(var i=n,a=e.length;a>i;i++)if(t(e[n],e[i])>0){var s=e[n];e[n]=e[i],e[i]=s}return e}function i(t){if(!e.hasClass(t.rows[0],"firstRow")){for(var n=1;n<t.rows.length;n++)e.removeClass(t.rows[n],"firstRow");e.addClass(t.rows[0],"firstRow")}}var a=this,s=this.root,l=s.getElementsByTagName("table");if(l.length){var o=this.selector;e.cssRule("table",o+" table.noBorderTable td,"+o+" table.noBorderTable th,"+o+" table.noBorderTable caption{border:1px dashed #ddd !important}"+o+" table.sortEnabled tr.firstRow th,"+o+" table.sortEnabled tr.firstRow td{padding-right:20px; background-repeat: no-repeat;background-position: center right; background-image:url("+this.rootPath+"themes/default/images/sortable.png);}"+o+" table.sortEnabled tr.firstRow th:hover,"+o+" table.sortEnabled tr.firstRow td:hover{background-color: #EEE;}"+o+" table{margin-bottom:10px;border-collapse:collapse;display:table;}"+o+" td,"+o+" th{ background:white; padding: 5px 10px;border: 1px solid #DDD;}"+o+" caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}"+o+" th{border-top:1px solid #BBB;background:#F7F7F7;}"+o+" table tr.firstRow th{border-top:2px solid #BBB;background:#F7F7F7;}"+o+" tr.ue-table-interlace-color-single td{ background: #fcfcfc; }"+o+" tr.ue-table-interlace-color-double td{ background: #f7faff; }"+o+" td p{margin:0;padding:0;}",document),e.each("td th caption".split(" "),function(t){var n=s.getElementsByTagName(t);n.length&&e.each(n,function(e){e.firstChild||(e.innerHTML="&nbsp;")})});var l=s.getElementsByTagName("table");e.each(l,function(r){/\bsortEnabled\b/.test(r.className)&&e.on(r,"click",function(r){var s=r.target||r.srcElement,l=t(s,["td","th"]),o=t(s,"table"),d=e.indexOf(o.rows[0].cells,l),c=o.getAttribute("data-sort-type");-1!=d&&(n(o,d,a.tableSortCompareFn||c),i(o))})})}}),UE.parse.register("charts",function(e){function t(){return f?n(f):null}function n(e){for(var t,n=[],i=e.getElementsByTagName("table"),a=0;t=i[a];a++)null!==t.getAttribute("data-chart")&&n.push(r(t));return n.length?n:null}function r(e){for(var t,n=e.getAttribute("data-chart"),r={},i=[],a=0;t=e.rows[a];a++){for(var s,l=[],o=0;s=t.cells[o];o++){var d=s.innerText||s.textContent||"";l.push("TH"==s.tagName?d:0|d)}i.push(l)}n=n.split(";");for(var c,a=0;c=n[a];a++)c=c.split(":"),r[c[0]]=c[1];return{table:e,meta:r,data:i}}function i(){a()}function a(){window.jQuery?s():e.loadFile(document,{src:h+"/third-party/jquery-1.10.2.min.js",tag:"script",type:"text/javascript",defer:"defer"},function(){s()})}function s(){window.Highcharts?l():e.loadFile(document,{src:h+"/third-party/highcharts/highcharts.js",tag:"script",type:"text/javascript",defer:"defer"},function(){l()})}function l(){e.loadFile(document,{src:h+"/dialogs/charts/chart.config.js",tag:"script",type:"text/javascript",defer:"defer"},function(){o()})}function o(){for(var e=null,t=null,n=null,r=0,i=g.length;i>r;r++)e=g[r],t=u(e),n=c(e.table),d(n,typeConfig[e.meta.chartType],t)}function d(e,t,n){$(e).highcharts($.extend({},t,{credits:{enabled:!1},exporting:{enabled:!1},title:{text:n.title,x:-20},subtitle:{text:n.subTitle,x:-20},xAxis:{title:{text:n.xTitle},categories:n.categories},yAxis:{title:{text:n.yTitle},plotLines:[{value:0,width:1,color:"#808080"}]},tooltip:{enabled:!0,valueSuffix:n.suffix},legend:{layout:"vertical",align:"right",verticalAlign:"middle",borderWidth:1},series:n.series}))}function c(e){var t=document.createElement("div");return t.className="edui-chart-container",e.parentNode.replaceChild(t,e),t}function u(e){var t=[],n=[],r=[],i=e.data,a=e.meta;if("1"!=a.dataFormat){for(var s=0,l=i.length;l>s;s++)for(var o=0,d=i[s].length;d>o;o++)r[o]||(r[o]=[]),r[o][s]=i[s][o];i=r}if(r={},a.chartType!=typeConfig.length-1){n=i[0].slice(1);for(var c,s=1;c=i[s];s++)t.push({name:c[0],data:c.slice(1)});r.series=t,r.categories=n,r.title=a.title,r.subTitle=a.subTitle,r.xTitle=a.xTitle,r.yTitle=a.yTitle,r.suffix=a.suffix}else{for(var c=[],s=1,l=i[0].length;l>s;s++)c.push([i[0][s],0|i[1][s]]);t[0]={type:"pie",name:a.tip,data:c},r.series=t,r.title=a.title,r.suffix=a.suffix}return r}e.cssRule("chartsContainerHeight",".edui-chart-container { height:"+(this.chartContainerHeight||300)+"px}");var h=this.rootPath,f=this.root,g=null;h&&(g=t())&&i()}),UE.parse.register("background",function(e){for(var t,n,r=this,i=r.root,a=i.getElementsByTagName("p"),s=0;n=a[s++];)t=n.getAttribute("data-background"),t&&n.parentNode.removeChild(n);t&&e.cssRule("ueditor_background",r.selector+"{"+t+"}",document)}),UE.parse.register("list",function(e){function t(t){var i=this;e.each(t,function(t){if(t.className&&/custom_/i.test(t.className)){var a=t.className.match(/custom_(\w+)/)[1];if("dash"==a||"dot"==a)e.pushItem(n,l+" li.list-"+r[a]+"{background-image:url("+i.liiconpath+r[a]+".gif)}"),e.pushItem(n,l+" ul.custom_"+a+"{list-style:none;} "+l+" ul.custom_"+a+" li{background-position:0 3px;background-repeat:no-repeat}");else{var s=1;e.each(t.childNodes,function(t){"LI"==t.tagName&&(e.pushItem(n,l+" li.list-"+r[a]+s+"{background-image:url("+i.liiconpath+"list-"+r[a]+s+".gif)}"),s++)}),e.pushItem(n,l+" ol.custom_"+a+"{list-style:none;}"+l+" ol.custom_"+a+" li{background-position:0 3px;background-repeat:no-repeat}")}switch(a){case"cn":e.pushItem(n,l+" li.list-"+a+"-paddingleft-1{padding-left:25px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-2{padding-left:40px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-3{padding-left:55px}");break;case"cn1":e.pushItem(n,l+" li.list-"+a+"-paddingleft-1{padding-left:30px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-2{padding-left:40px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-3{padding-left:55px}");break;case"cn2":e.pushItem(n,l+" li.list-"+a+"-paddingleft-1{padding-left:40px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-2{padding-left:55px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-3{padding-left:68px}");break;case"num":case"num1":e.pushItem(n,l+" li.list-"+a+"-paddingleft-1{padding-left:25px}");break;case"num2":e.pushItem(n,l+" li.list-"+a+"-paddingleft-1{padding-left:35px}"),e.pushItem(n,l+" li.list-"+a+"-paddingleft-2{padding-left:40px}");break;case"dash":e.pushItem(n,l+" li.list-"+a+"-paddingleft{padding-left:35px}");break;case"dot":e.pushItem(n,l+" li.list-"+a+"-paddingleft{padding-left:20px}")}}})}var n=[],r={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",num2:"num-3-",dash:"dash",dot:"dot"};e.extend(this,{liiconpath:"http://bs.baidu.com/listicon/",listDefaultPaddingLeft:"20"});var i=this.root,a=i.getElementsByTagName("ol"),s=i.getElementsByTagName("ul"),l=this.selector;a.length&&t.call(this,a),s.length&&t.call(this,s),(a.length||s.length)&&(n.push(l+" .list-paddingleft-1{padding-left:0}"),n.push(l+" .list-paddingleft-2{padding-left:"+this.listDefaultPaddingLeft+"px}"),n.push(l+" .list-paddingleft-3{padding-left:"+2*this.listDefaultPaddingLeft+"px}"),e.cssRule("list",l+" ol,"+l+" ul{margin:0;padding:0;}li{clear:both;}"+n.join("\n"),document))}),UE.parse.register("vedio",function(e){var t=this.root.getElementsByTagName("video"),n=this.root.getElementsByTagName("audio");if(document.createElement("video"),document.createElement("audio"),t.length||n.length){var r=e.removeLastbs(this.rootPath),i=r+"/third-party/video-js/video.js",a=r+"/third-party/video-js/video-js.min.css",s=r+"/third-party/video-js/video-js.swf";window.videojs?videojs.autoSetup():(e.loadFile(document,{id:"video_css",tag:"link",rel:"stylesheet",type:"text/css",href:a}),e.loadFile(document,{id:"video_js",src:i,tag:"script",type:"text/javascript"},function(){videojs.options.flash.swf=s,videojs.autoSetup()}))}})}()});
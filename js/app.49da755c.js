(function(e){function t(t){for(var c,r,a=t[0],u=t[1],s=t[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue3-memory-game/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0193":function(e,t,n){},"0755":function(e,t,n){e.exports=n.p+"img/typescript.189aacfe.svg"},2118:function(e,t,n){e.exports=n.p+"img/nodejs.8288bda3.svg"},"33a7":function(e,t,n){e.exports=n.p+"img/php.7953ce81.svg"},5088:function(e,t,n){"use strict";n("78ba")},"78ba":function(e,t,n){},"7fb2":function(e,t,n){e.exports=n.p+"img/vue.ecddc568.svg"},a56e:function(e,t,n){e.exports=n.p+"img/question.0a607ec2.svg"},ba05:function(e,t,n){e.exports=n.p+"img/svelte.8feb6e52.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=n("5530"),o=n("2909"),r=(n("4de4"),n("159b"),n("4e82"),n("99af"),[{title:"React",isFlipped:!1,wasFound:!1,icon:n("fd64"),style:{width:"80px",marginTop:"20px"}},{title:"Vue",isFlipped:!1,wasFound:!1,icon:n("7fb2"),style:{width:"80px",marginTop:"20px"}},{title:"Svelte",isFlipped:!1,wasFound:!1,icon:n("ba05"),style:{width:"80px",marginTop:"20px"}},{title:"Laravel",isFlipped:!1,wasFound:!1,icon:n("f25a"),style:{width:"80px",marginTop:"20px"}},{title:"TypeScript",isFlipped:!1,wasFound:!1,icon:n("0755"),style:{width:"80px",marginTop:"20px"}},{title:"JavaScript",isFlipped:!1,wasFound:!1,icon:n("e4ca"),style:{width:"80px",marginTop:"20px"}},{title:"PHP",isFlipped:!1,wasFound:!1,icon:n("33a7"),style:{width:"100px"}},{title:"NodeJS",isFlipped:!1,wasFound:!1,icon:n("2118"),style:{width:"100px"}}]),a=Object(c["l"])([]),u=Object(c["l"])([]),s=Object(c["l"])({}),p=Object(c["m"])(0);Object(c["q"])((function(){return a}),(function(e){p.value=e.filter((function(e){return e.wasFound})).length}),{deep:!0});var l=function(){a.length=0,[].concat(Object(o["a"])(r),Object(o["a"])(r)).sort((function(){return Math.random()-.5})).forEach((function(e,t){var n=Object(i["a"])(Object(i["a"])({},e),{},{unique:btoa(String(t))});a.push(n)}))},d=function(e){return s=e},f=function(e){u.push(e),2===u.length&&(u[0].title===u[1].title?(u.forEach((function(e){return e.wasFound=!0})),u.length=0):setTimeout((function(){u.forEach((function(e){return e.isFlipped=!1})),u.length=0}),700))},b={itens:a,validationItens:u,currentItems:s,countFounded:p,generateRandomItems:l,registerCurrentItems:d,process:f},j=["onClick"],O={class:"card__face card__face--front"},g=["src"],v={class:"card__face card__face--back"},m=["src","alt"],h={class:"container"},y={emits:["selected"],setup:function(e,t){var i=t.emit,o=b.itens,r=b.generateRandomItems;r();var a=function(e){e.wasFound||e.isFlipped||(e.isFlipped=!e.isFlipped,i("selected",e))};return function(e,t){return Object(c["i"])(),Object(c["c"])("div",null,[Object(c["d"])("ul",null,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["n"])(Object(c["p"])(o),(function(e){return Object(c["i"])(),Object(c["c"])("li",{key:e.unique},[Object(c["d"])("div",{class:Object(c["g"])(["card",{"is-flipped":e.isFlipped||e.wasFound}]),onClick:function(t){return a(e)}},[Object(c["d"])("div",O,[Object(c["d"])("img",{src:n("a56e"),alt:"Question?",width:"100"},null,8,g)]),Object(c["d"])("div",v,[Object(c["d"])("img",{src:e.icon,alt:e.title,style:Object(c["h"])(e.style)},null,12,m),Object(c["d"])("div",h,[Object(c["d"])("h4",null,[Object(c["d"])("b",null,Object(c["o"])(e.title),1)])])])],10,j)])})),128))])])}}},w=(n("d3ef"),n("6b0d")),x=n.n(w);const F=x()(y,[["__scopeId","data-v-8ba03fe2"]]);var _=F,S={key:0},k=Object(c["e"])(" Congratulations! "),T={key:1},P={setup:function(e){var t=b.itens,n=b.countFounded,i=b.generateRandomItems,o=b.process;return function(e,r){return Object(c["i"])(),Object(c["c"])(c["a"],null,[Object(c["p"])(n)===Object(c["p"])(t).length?(Object(c["i"])(),Object(c["c"])("h1",S,[k,Object(c["d"])("small",{onClick:r[0]||(r[0]=function(){return Object(c["p"])(i)&&Object(c["p"])(i).apply(void 0,arguments)})},"Restart")])):(Object(c["i"])(),Object(c["c"])("h1",T,"Lucas Nepomuceno - Vue 3 Memory Game")),Object(c["f"])(_,{onSelected:Object(c["p"])(o)},null,8,["onSelected"])],64)}}};n("5088");const I=P;var M=I;Object(c["b"])(M).mount("#app")},d3ef:function(e,t,n){"use strict";n("0193")},e4ca:function(e,t,n){e.exports=n.p+"img/javascript.9c8b1450.svg"},f25a:function(e,t,n){e.exports=n.p+"img/laravel.c2349d41.svg"},fd64:function(e,t,n){e.exports=n.p+"img/react.b9242b8f.svg"}});
//# sourceMappingURL=app.49da755c.js.map
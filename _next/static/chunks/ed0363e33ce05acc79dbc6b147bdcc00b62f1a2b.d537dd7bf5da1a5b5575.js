(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,h=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},A3ay:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n).a.createElement;t.default=function(){return i("svg",{width:"34",height:"34",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i("path",{id:"twitter",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))}},MX0m:function(e,t,r){e.exports=r("3niX")},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bDuQ:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),s=r("q1tI"),o=r.n(s),a=(r("iRqJ"),r("A3ay"),o.a.createElement);t.default=function(){return a("div",{className:"content-right"},a("div",{className:"content-right-wrapper"},a("div",{id:"home",className:"section full-width-section"},a("div",{className:"jsx-2695148139 section-wrapper block"},a("div",{className:"jsx-2695148139 home-left-part"},a("p",{className:"jsx-2695148139 site-des"}),a("h1",{className:"jsx-2695148139 entry-title"},"Hi. I'm Urbano, a full stack web developer."),a("p",{className:"jsx-2695148139 site-info"}),a("div",{className:"jsx-2695148139 social-links"},a("a",{href:"https://www.linkedin.com/in/urbanogardun",target:"_blank",className:"jsx-2695148139"},"LINKEDIN"))),a("div",{className:"jsx-2695148139 home-right-part"}),a(i.a,{id:"2695148139"},[".home-right-part.jsx-2695148139{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;height:100%;background-image:url(./images/home.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;}"]))),a("div",{id:"service",className:"section"},a("div",{className:"section-wrapper block"},a("div",{className:"content-1300"},a("div",{className:"row"},a("div",{className:"one-half width-40"},a("h2",{className:"entry-title section-title"},"About Me"),a("p",{className:"section-info"},"Lead and coordinated development of large-scale projects serving hundreds of thousands of requests daily."),a("p",null,"Working on a wide range of complex projects has forced me to rapidly acquire new skills and to constantly grow. Over time, this experience proved to be invaluable."),a("p",null,"Whenever I have time, I like to contribute to open source projects. I even have a few of my own, most notable one being ",a("a",{id:"project-link",target:"_blank",href:"https://github.com/urbanogardun/monte-note"},"MonteNote"),", a note taking application."),a("div",{className:"button-group-wrapper"},a("a",{className:"button",id:"my-resume",href:"pdf/Urbano Gardun Resume.pdf",target:"_blank"},"Resume"))))))),a("div",{id:"contact",className:"section"},a("div",{className:"section-wrapper block"},a("div",{className:"content-1300"},a("div",{className:"row"},a("h2",{className:"entry-title section-title"},"Get in touch"),a("div",{className:"one-half width-40"},a("p",{className:"section-info"},"Have an offer, a project or something else you\u2019d like to talk about?"),a("p",null,"You can contact me by email at ",a("a",{id:"contact-email-link",href:"mailto:urbano.gardun@gmail.com?Subject=Hello",target:"_top"},"urbano.gardun@gmail.com"))),a("div",{className:"one-half width-55 last"},a("div",{className:"contact-form"},a("p",null,a("input",{id:"name",type:"text",name:"your-name",placeholder:"Name",autoComplete:"off"})),a("p",null,a("input",{id:"subject",type:"text",name:"your-subject",placeholder:"Subject",autoComplete:"off"})),a("p",null,a("textarea",{id:"message",name:"your-message",placeholder:"Message"})),a("p",{className:"contact-submit-holder"},a("input",{type:"submit",value:"SEND"}))))))))))}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},iRqJ:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n).a.createElement;t.default=function(){return i("svg",{width:"34",height:"34",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i("path",{id:"linkedin",d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(35),r=n(5),i=n(20),o=n(10);function s(){Object(a.a)({callback:c,type:"error"}),Object(a.a)({callback:c,type:"unhandledrejection"})}function c(){var t=Object(o.b)();t&&(r.a.log("[Tracing] Transaction: "+i.a.InternalError+" -> Global error occured"),t.setStatus(i.a.InternalError))}},148:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(74),r=n(136);function i(t){t._metadata=t._metadata||{},void 0===t._metadata.sdk&&(t._metadata.sdk={name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:a.a}],version:a.a}),Object(r.a)(t)}},152:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var a=n(0),r=n(5),i=n(7),o=n(47),s=n(55),c=n(20),u=n(10),d=Object(i.e)();var p,m,f=n(61),l=function(t,e,n,a){var r;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(a||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(r||0),(e.delta||e.isFinal||void 0===r)&&(t(e),r=e.value))}},v=function(t,e){return void 0===e&&(e=-1),{name:t,value:e,delta:0,entries:[],id:Date.now()+"-"+(Math.floor(8999999999999*Math.random())+1e12),isFinal:!1}},h=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},g=!1,b=!1,_=function(t){g=!t.persisted},y=function(t,e){void 0===e&&(e=!1),b||(addEventListener("pagehide",_),addEventListener("beforeunload",(function(){})),b=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:g})}),{capture:!0,once:e})},T=function(){return void 0===p&&(p="hidden"===document.visibilityState?0:1/0,y((function(t){var e=t.timeStamp;return p=e}),!0)),{get timeStamp(){return p}}},O=function(t,e){void 0===e&&(e=!1);var n,a=v("LCP"),r=T(),i=function(t){var e=t.startTime;e<r.timeStamp?(a.value=e,a.entries.push(t)):a.isFinal=!0,n()},o=h("largest-contentful-paint",i);if(o){n=l(t,a,o,e);var s=function(){a.isFinal||(o.takeRecords().map(i),a.isFinal=!0,n())};(m||(m=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),m).then(s),y(s,!0)}},j=Object(i.e)(),S=function(t){var e,n=v("TTFB");e=function(){try{var e=j.performance.getEntriesByType("navigation")[0]||function(){var t=j.performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)},k=Object(i.e)(),w=function(){function t(){this._measurements={},this._performanceCursor=0,k&&k.performance&&(k.performance.mark&&k.performance.mark("sentry-tracing-init"),this._trackCLS(),this._trackLCP(),this._trackFID(),this._trackTTFB())}return t.prototype.addPerformanceEntries=function(t){var e=this;if(k&&k.performance&&k.performance.getEntries&&f.a){r.a.log("[Tracing] Adding & adjusting spans using Performance API");var n,a,i,o=Object(u.d)(f.a);if(k.document)for(var s=0;s<document.scripts.length;s++)if("true"===document.scripts[s].dataset.entry){n=document.scripts[s].src;break}if(k.performance.getEntries().slice(this._performanceCursor).forEach((function(s){var c=Object(u.d)(s.startTime),d=Object(u.d)(s.duration);if(!("navigation"===t.op&&o+c<t.startTimestamp))switch(s.entryType){case"navigation":!function(t,e,n){C(t,e,"unloadEvent",n),C(t,e,"redirect",n),C(t,e,"domContentLoadedEvent",n),C(t,e,"loadEvent",n),C(t,e,"connect",n),C(t,e,"secureConnection",n,"connectEnd"),C(t,e,"fetch",n,"domainLookupStart"),C(t,e,"domainLookup",n),function(t,e,n){x(t,{op:"browser",description:"request",startTimestamp:n+Object(u.d)(e.requestStart),endTimestamp:n+Object(u.d)(e.responseEnd)}),x(t,{op:"browser",description:"response",startTimestamp:n+Object(u.d)(e.responseStart),endTimestamp:n+Object(u.d)(e.responseEnd)})}(t,e,n)}(t,s,o);break;case"mark":case"paint":case"measure":var p=function(t,e,n,a,r){var i=r+n,o=i+a;return x(t,{description:e.name,endTimestamp:o,op:e.entryType,startTimestamp:i}),i}(t,s,c,d,o);void 0===i&&"sentry-tracing-init"===s.name&&(i=p);var m=T(),f=s.startTime<m.timeStamp;"first-paint"===s.name&&f&&(r.a.log("[Measurements] Adding FP"),e._measurements.fp={value:s.startTime},e._measurements["mark.fp"]={value:p}),"first-contentful-paint"===s.name&&f&&(r.a.log("[Measurements] Adding FCP"),e._measurements.fcp={value:s.startTime},e._measurements["mark.fcp"]={value:p});break;case"resource":var l=s.name.replace(window.location.origin,""),v=function(t,e,n,a,r,i){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return;var o={};"transferSize"in e&&(o["Transfer Size"]=e.transferSize);"encodedBodySize"in e&&(o["Encoded Body Size"]=e.encodedBodySize);"decodedBodySize"in e&&(o["Decoded Body Size"]=e.decodedBodySize);var s=i+a,c=s+r;return x(t,{description:n,endTimestamp:c,op:e.initiatorType?"resource."+e.initiatorType:"resource",startTimestamp:s,data:o}),c}(t,s,l,c,d,o);void 0===a&&(n||"").indexOf(l)>-1&&(a=v)}})),void 0!==a&&void 0!==i&&x(t,{description:"evaluation",endTimestamp:i,op:"script",startTimestamp:a}),this._performanceCursor=Math.max(performance.getEntries().length-1,0),this._trackNavigator(t),"pageload"===t.op){var c=Object(u.d)(f.a);["fcp","fp","lcp","ttfb"].forEach((function(n){if(e._measurements[n]&&!(c>=t.startTimestamp)){var a=e._measurements[n].value,i=c+Object(u.d)(a),o=Math.abs(1e3*(i-t.startTimestamp)),s=o-a;r.a.log("[Measurements] Normalized "+n+" from "+a+" to "+o+" ("+s+")"),e._measurements[n].value=o}})),this._measurements["mark.fid"]&&this._measurements.fid&&x(t,{description:"first input delay",endTimestamp:this._measurements["mark.fid"].value+Object(u.d)(this._measurements.fid.value),op:"web.vitals",startTimestamp:this._measurements["mark.fid"].value}),t.setMeasurements(this._measurements)}}},t.prototype._trackCLS=function(){var t=this;!function(t,e){void 0===e&&(e=!1);var n,a=v("CLS",0),r=function(t){t.hadRecentInput||(a.value+=t.value,a.entries.push(t),n())},i=h("layout-shift",r);i&&(n=l(t,a,i,e),y((function(t){var e=t.isUnloading;i.takeRecords().map(r),e&&(a.isFinal=!0),n()})))}((function(e){e.entries.pop()&&(r.a.log("[Measurements] Adding CLS"),t._measurements.cls={value:e.value})}))},t.prototype._trackNavigator=function(t){var e=k.navigator;if(e){var n=e.connection;n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),E(n.rtt)&&(this._measurements["connection.rtt"]={value:n.rtt}),E(n.downlink)&&(this._measurements["connection.downlink"]={value:n.downlink})),E(e.deviceMemory)&&t.setTag("deviceMemory",String(e.deviceMemory)),E(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}},t.prototype._trackLCP=function(){var t=this;O((function(e){var n=e.entries.pop();if(n){var a=Object(u.d)(performance.timeOrigin),i=Object(u.d)(n.startTime);r.a.log("[Measurements] Adding LCP"),t._measurements.lcp={value:e.value},t._measurements["mark.lcp"]={value:a+i}}}))},t.prototype._trackFID=function(){var t=this;!function(t){var e=v("FID"),n=T(),a=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,i())},r=h("first-input",a),i=l(t,e,r);r?y((function(){r.takeRecords().map(a),r.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,a){a.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:a.type,target:a.target,cancelable:a.cancelable,startTime:a.timeStamp,processingStart:a.timeStamp+t}],i())}))}((function(e){var n=e.entries.pop();if(n){var a=Object(u.d)(performance.timeOrigin),i=Object(u.d)(n.startTime);r.a.log("[Measurements] Adding FID"),t._measurements.fid={value:e.value},t._measurements["mark.fid"]={value:a+i}}}))},t.prototype._trackTTFB=function(){var t=this;S((function(e){var n,a=e.entries.pop();if(a){r.a.log("[Measurements] Adding TTFB"),t._measurements.ttfb={value:e.value};var i=e.value-(n=e.entries[0],null!=n?n:a).requestStart;t._measurements["ttfb.requestTime"]={value:i}}}))},t}();function C(t,e,n,a,r){var i=r?e[r]:e[n+"End"],o=e[n+"Start"];o&&i&&x(t,{op:"browser",description:n,startTimestamp:a+Object(u.d)(o),endTimestamp:a+Object(u.d)(i)})}function x(t,e){var n=e.startTimestamp,r=Object(a.f)(e,["startTimestamp"]);return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild(Object(a.a)({startTimestamp:n},r))}function E(t){return"number"==typeof t&&isFinite(t)}var F=n(67),D=n(35),L=Object(i.e)();var M=Object(a.a)({idleTimeout:s.a,markBackgroundTransactions:!0,maxTransactionDuration:600,routingInstrumentation:function(t,e,n){if(void 0===e&&(e=!0),void 0===n&&(n=!0),L&&L.location){var a,i=L.location.href;e&&(a=t({name:L.location.pathname,op:"pageload"})),n&&Object(D.a)({callback:function(e){var n=e.to,o=e.from;void 0===o&&i&&-1!==i.indexOf(n)?i=void 0:o!==n&&(i=void 0,a&&(r.a.log("[Tracing] Finishing current transaction with op: "+a.op),a.finish()),a=t({name:L.location.pathname,op:"navigation"}))},type:"history"})}else r.a.warn("Could not initialize routing instrumentation due to invalid location")},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0},F.a),R=function(){function t(e){this.name=t.id,this._metrics=new w,this._emitOptionsWarning=!1;var n=F.a.tracingOrigins;e&&e.tracingOrigins&&Array.isArray(e.tracingOrigins)&&0!==e.tracingOrigins.length?n=e.tracingOrigins:this._emitOptionsWarning=!0,this.options=Object(a.a)(Object(a.a)(Object(a.a)({},M),e),{tracingOrigins:n})}return t.prototype.setupOnce=function(t,e){var n=this;this._getCurrentHub=e,this._emitOptionsWarning&&(r.a.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),r.a.warn("[Tracing] We added a reasonable default for you: "+F.a.tracingOrigins));var a=this.options,i=a.routingInstrumentation,o=a.startTransactionOnLocationChange,s=a.startTransactionOnPageLoad,p=a.markBackgroundTransactions,m=a.traceFetch,f=a.traceXHR,l=a.tracingOrigins,v=a.shouldCreateSpanForRequest;i((function(t){return n._createRouteTransaction(t)}),s,o),p&&(d&&d.document?d.document.addEventListener("visibilitychange",(function(){var t=Object(u.b)();d.document.hidden&&t&&(r.a.log("[Tracing] Transaction: "+c.a.Cancelled+" -> since tab moved to the background, op: "+t.op),t.status||t.setStatus(c.a.Cancelled),t.setTag("visibilitychange","document.hidden"),t.finish())})):r.a.warn("[Tracing] Could not set up background tab detection due to lack of global document")),Object(F.b)({traceFetch:m,traceXHR:f,tracingOrigins:l,shouldCreateSpanForRequest:v})},t.prototype._createRouteTransaction=function(t){var e=this;if(this._getCurrentHub){var n=this.options,s=n.beforeNavigate,d=n.idleTimeout,p=n.maxTransactionDuration,m="pageload"===t.op?function(){var t=(e="sentry-trace",n=document.querySelector("meta[name="+e+"]"),n?n.getAttribute("content"):null);var e,n;if(t)return Object(u.a)(t);return}():void 0,f=Object(a.a)(Object(a.a)(Object(a.a)({},t),m),{trimEnd:!0}),l="function"==typeof s?s(f):f,v=void 0===l?Object(a.a)(Object(a.a)({},f),{sampled:!1}):l;!1===v.sampled&&r.a.log("[Tracing] Will not send "+v.op+" transaction because of beforeNavigate."),r.a.log("[Tracing] Starting "+v.op+" transaction on scope");var h=this._getCurrentHub(),g=Object(i.e)().location,b=Object(o.b)(h,v,d,!0,{location:g});return b.registerBeforeFinishCallback((function(t,n){e._metrics.addPerformanceEntries(t),function(t,e,n){var a=n-e.startTimestamp;n&&(a>t||a<0)&&(e.setStatus(c.a.DeadlineExceeded),e.setTag("maxTransactionDurationExceeded","true"))}(Object(u.e)(p),t,n)})),b}r.a.warn("[Tracing] Did not create "+t.op+" transaction because _getCurrentHub is invalid.")},t.id="BrowserTracing",t}()},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var a=n(0),r=n(13);function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Object(r.b)();if(i&&i[t])return i[t].apply(i,Object(a.g)(e));throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}function o(t,e){var n;try{throw new Error("Sentry syntheticException")}catch(t){n=t}return i("captureException",t,{captureContext:e,originalException:t,syntheticException:n})}function s(t){i("withScope",t)}},67:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var a=n(0),r=n(13),i=n(37),o=n(35),s=n(6),c=n(10),u={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]};function d(t){var e=Object(a.a)(Object(a.a)({},u),t),n=e.traceFetch,d=e.traceXHR,p=e.tracingOrigins,m=e.shouldCreateSpanForRequest,f={},l=function(t){if(f[t])return f[t];var e=p;return f[t]=e.some((function(e){return Object(i.a)(t,e)}))&&!Object(i.a)(t,"sentry_key"),f[t]},v=l;"function"==typeof m&&(v=function(t){return l(t)&&m(t)});var h={};n&&Object(o.a)({callback:function(t){!function(t,e,n){var i,o=null===(i=Object(r.b)().getClient())||void 0===i?void 0:i.getOptions();if(!(o&&Object(c.c)(o)&&t.fetchData&&e(t.fetchData.url)))return;if(t.endTimestamp&&t.fetchData.__span){if(p=n[t.fetchData.__span]){var u=t.response;u&&p.setHttpStatus(u.status),p.finish(),delete n[t.fetchData.__span]}return}var d=Object(c.b)();if(d){var p=d.startChild({data:Object(a.a)(Object(a.a)({},t.fetchData),{type:"fetch"}),description:t.fetchData.method+" "+t.fetchData.url,op:"http"});t.fetchData.__span=p.spanId,n[p.spanId]=p;var m=t.args[0]=t.args[0],f=t.args[1]=t.args[1]||{},l=f.headers;Object(s.g)(m,Request)&&(l=m.headers),l?"function"==typeof l.append?l.append("sentry-trace",p.toTraceparent()):l=Array.isArray(l)?Object(a.g)(l,[["sentry-trace",p.toTraceparent()]]):Object(a.a)(Object(a.a)({},l),{"sentry-trace":p.toTraceparent()}):l={"sentry-trace":p.toTraceparent()},f.headers=l}}(t,v,h)},type:"fetch"}),d&&Object(o.a)({callback:function(t){!function(t,e,n){var i,o=null===(i=Object(r.b)().getClient())||void 0===i?void 0:i.getOptions();if(!o||!Object(c.c)(o)||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url))||t.xhr.__sentry_own_request__)return;var s=t.xhr.__sentry_xhr__;if(t.endTimestamp&&t.xhr.__sentry_xhr_span_id__){return void((d=n[t.xhr.__sentry_xhr_span_id__])&&(d.setHttpStatus(s.status_code),d.finish(),delete n[t.xhr.__sentry_xhr_span_id__]))}var u=Object(c.b)();if(u){var d=u.startChild({data:Object(a.a)(Object(a.a)({},s.data),{type:"xhr",method:s.method,url:s.url}),description:s.method+" "+s.url,op:"http"});if(t.xhr.__sentry_xhr_span_id__=d.spanId,n[t.xhr.__sentry_xhr_span_id__]=d,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",d.toTraceparent())}catch(t){}}}(t,v,h)},type:"xhr"})}}}]);
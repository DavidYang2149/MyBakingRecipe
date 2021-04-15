(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{126:function(e,t,n){"use strict";var r,i=n(4),o=(n(31),n(11),n(25),n(17)),a=n(42),s={Firestore:o.e,GeoPoint:o.j,Timestamp:o.c,Blob:o.d,Transaction:o.o,WriteBatch:o.a,DocumentReference:o.b,DocumentSnapshot:o.k,Query:o.m,QueryDocumentSnapshot:o.r,QuerySnapshot:o.q,CollectionReference:o.n,FieldPath:o.p,FieldValue:o.l,setLogLevel:o.g,CACHE_SIZE_UNLIMITED:o.i};(function(e,t){e.INTERNAL.registerComponent(new a.a("firestore",(function(e){return function(e,t){return new o.e(e,new o.h(e,t),new o.f)}(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"))}),"PUBLIC").setServiceProps(Object.assign({},s)))})(r=i.a),r.registerVersion("@firebase/firestore","2.1.6")},31:function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return h}));var o,a=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));var s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},l=o.INFO,c=((i={})[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),p=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),a=c[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,r(["["+o+"]  "+e.name+":"],n))}},u=function(){function e(e){this.name=e,this._logLevel=l,this._logHandler=p,this._userLogHandler=null,a.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}();function f(e){a.forEach((function(t){t.setLogLevel(e)}))}function h(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}},r=0,i=a;r<i.length;r++){n(i[r])}}},4:function(e,t,n){"use strict";var r,i,o=n(0),a=n(11),s=n(42),l=n(31),c=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r["invalid-log-argument"]="First argument to `onLog` must be null or a function.",r),p=new a.b("app","Firebase",c),u=((i={})["@firebase/app"]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),f=new l.b("@firebase/app"),h=function(){function e(e,t,n){var r,i,l=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(a.f)(e),this.container=new s.b(t.name),this._addComponent(new s.a("app",(function(){return l}),"PUBLIC"));try{for(var c=Object(o.i)(this.firebase_.INTERNAL.components.values()),p=c.next();!p.done;p=c.next()){var u=p.value;this._addComponent(u)}}catch(e){r={error:e}}finally{try{p&&!p.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){f.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw p.create("app-deleted",{appName:this.name_})},e}();h.prototype.name&&h.prototype.options||h.prototype.delete||console.log("dc");var d=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={});if("object"!=typeof i||null===i){i={name:i}}var o=i;void 0===o.name&&(o.name="[DEFAULT]");var s=o.name;if("string"!=typeof s||!s)throw p.create("bad-app-name",{appName:String(s)});if(Object(a.d)(t,s))throw p.create("duplicate-app",{appName:s});var l=new e(n,o,r);return t[s]=l,l},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=u[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var l=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&l.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&l.push("and"),a&&l.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void f.warn(l.join(" "))}c(new s.a(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:l.c,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw p.create("invalid-log-argument",{appName:name});Object(l.d)(e,t)},apps:null,SDK_VERSION:"8.2.5",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function i(e){if(e=e||"[DEFAULT]",!Object(a.d)(t,e))throw p.create("no-app",{appName:e});return t[e]}function c(s){var l,c,u=s.name;if(n.has(u))return f.debug("There were multiple attempts to register component "+u+"."),"PUBLIC"===s.type?r[u]:null;if(n.set(u,s),"PUBLIC"===s.type){var h=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[u])throw p.create("invalid-app-argument",{appName:u});return e[u]()};void 0!==s.serviceProps&&Object(a.g)(h,s.serviceProps),r[u]=h,e.prototype[u]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this._getService.bind(this,u);return n.apply(this,s.multipleInstances?e:[])}}try{for(var d=Object(o.i)(Object.keys(t)),m=d.next();!m.done;m=d.next()){var g=m.value;t[g]._addComponent(s)}}catch(e){l={error:e}}finally{try{m&&!m.done&&(c=d.return)&&c.call(d)}finally{if(l)throw l.error}}return"PUBLIC"===s.type?r[u]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}(h);return t.INTERNAL=Object(o.a)(Object(o.a)({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(a.g)(t,e)},createSubscribe:a.e,ErrorFactory:a.b,deepExtend:a.g}),t}(),m=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(a.i)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var g=self.firebase.SDK_VERSION;g&&g.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var v=d.initializeApp;d.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(a.n)()&&f.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),v.apply(void 0,e)};var y=d;!function(e,t){e.INTERNAL.registerComponent(new s.a("platform-logger",(function(e){return new m(e)}),"PRIVATE")),e.registerVersion("@firebase/app","0.6.14",t),e.registerVersion("fire-js","")}(y),t.a=y},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),i=n(11),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.a;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(r.a)({identifier:"[DEFAULT]",optional:!1},e),n=t.identifier,i=t.optional,o=this.normalizeInstanceIdentifier(n);try{var a=this.getOrInitializeService(o);if(!a){if(i)return null;throw Error("Service "+this.name+" is not available")}return a}catch(e){if(i)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService("[DEFAULT]")}catch(e){}try{for(var i=Object(r.i)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r.e)(o.value,2),s=a[0],l=a[1],c=this.normalizeInstanceIdentifier(s);try{var p=this.getOrInitializeService(c);l.resolve(p)}catch(e){}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var e;return Object(r.d)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r.g)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}();var s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
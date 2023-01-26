"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{910:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(791),o=n(861),a=n(439),i=n(757),s=n.n(i),c=n(409);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},T=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},b=function(e){return T(e)||E(e)?e:null},O=function(e){return(0,r.isValidElement)(e)||T(e)||E(e)||y(e)};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),r.createElement(r.Fragment,null,o)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},w=function(e){var t=e.theme,n=e.type,o=d(e,h);return r.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},x={info:function(e){return r.createElement(w,f({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(w,f({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(w,f({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(w,f({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,r.useState)([]),i=(0,a.Z)(o,2),s=i[0],c=i[1],u=(0,r.useRef)(null),l=(0,r.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},v=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function C(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=v.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,a=t.staleId,i=d(t,g);if(O(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,p=i.data,m=v.props,h=function(){return C(s)},L=null==c;L&&v.count++;var k,R,P=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},i),{},{toastId:s,updateId:c,data:p,closeToast:h,isIn:!1,className:b(i.className||m.toastClassName),bodyClassName:b(i.bodyClassName||m.bodyClassName),progressClassName:b(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(k=i.autoClose,R=m.autoClose,!1===k||y(k)&&k>0?k:R),deleteToast:function(){var e=_(l.get(s),"removed");l.delete(s),I.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,w();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(E(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):T(a)||y(a)?i=a:o?i=x.spinner():function(e){return e in x}(n)&&(i=x[n](s))),i}(P),E(i.onOpen)&&(P.onOpen=i.onOpen),E(i.onClose)&&(P.onClose=i.onClose),P.closeButton=m.closeButton,!1===i.closeButton||O(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!O(m.closeButton)||m.closeButton);var j=e;(0,r.isValidElement)(e)&&!T(e.type)?j=(0,r.cloneElement)(e,{closeToast:h,toastProps:P,data:p}):E(e)&&(j=e({closeToast:h,toastProps:P,data:p})),m.limit&&m.limit>0&&v.count>m.limit&&L?v.queue.push({toastContent:j,toastProps:P,staleId:a}):y(o)?setTimeout((function(){N(j,P,a)}),o):N(j,P,a)}}function N(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),I.emit(4,_(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return v.containerId=e.containerId,I.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&C(e)})).on(5,h).emit(2,v),function(){l.clear(),I.emit(3,v)}}),[]),(0,r.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,r.useState)(!1),n=(0,a.Z)(t,2),o=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1],f=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=N(t.nativeEvent),d.y=k(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?C():O()}}function O(){i(!0)}function C(){i(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&C(),d.x=N(t),d.y=k(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),E(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=C,w.onMouseLeave=O),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:O,pauseToast:C,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function P(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,h=e.isIn,g=e.theme,y=s||d&&0===p,T=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(T.transform="scaleX(".concat(p,")"));var b=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),O=E(c)?c({rtl:m,type:i,defaultClassName:b}):v(b,c);return r.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:T},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&o()}))}var M=function(e){var t=R(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,h=e.transition,g=e.position,y=e.className,T=e.style,b=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,_=e.progressStyle,I=e.updateId,w=e.role,x=e.progress,L=e.rtl,N=e.toastId,k=e.deleteToast,M=e.isIn,D=e.isLoading,S=e.iconOut,B=e.closeOnClick,A=e.theme,Z=v("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":B}),z=E(y)?y({rtl:L,position:g,type:d,defaultClassName:Z}):v(Z,y),F=!!x||!u,q={closeToast:m,type:d,theme:A},H=null;return!1===s||(H=E(s)?s(q):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,q):P(q)),r.createElement(h,{isIn:M,done:k,position:g,preventExitTransition:o,nodeRef:a},r.createElement("div",f(f({id:N,onClick:l,className:z},i),{},{style:T,ref:a}),r.createElement("div",f(f({},M&&{role:w}),{},{className:E(b)?b({type:d}):v("Toastify__toast-body",b),style:O}),null!=S&&r.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},S),r.createElement("div",null,c)),H,r.createElement(j,f(f({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:A,delay:u,isRunning:n,isIn:M,closeToast:m,hide:p,type:d,style:_,className:C,controlledProgress:F,progress:x||0}))))},D=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},S=C(D("bounce",!0)),B=(C(D("slide",!0)),C(D("zoom")),C(D("flip")),(0,r.forwardRef)((function(e,t){var n=L(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return E(s)?s({position:e,rtl:u,defaultClassName:t}):v(t,b(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:l},o((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(M,f(f({},a),{},{isIn:i(a.toastId),style:f(f({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,Z=new Map,z=[],F=1;function q(){return""+F++}function H(e){return e&&(T(e.toastId)||y(e.toastId))?e.toastId:q()}function Q(e,t){return Z.size>0?I.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function V(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:H(t)})}function U(e){return function(t,n){return Q(t,V(e,n))}}function W(e,t){return Q(e,V("default",t))}W.loading=function(e,t){return Q(e,V("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=T(o)?W.loading(o,n):W.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=T(t)?{render:t}:t;return r?W.update(r,f(f({},a),i)):W(i.render,f(f({},a),i)),o}W.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=U("success"),W.info=U("info"),W.error=U("error"),W.warning=U("warning"),W.warn=W.warning,W.dark=function(e,t){return Q(e,V("default",f({theme:"dark"},t)))},W.dismiss=function(e){Z.size>0?I.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},W.isActive=function(e){var t=!1;return Z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=Z.get(n||A);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({},r),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,Q(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){A=e.containerId||e,Z.set(A,e),z.forEach((function(e){I.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){Z.delete(e.containerId||e),0===Z.size&&I.off(0).off(1).off(5)}));var X=n(87),G=n(184),Y=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],u=(0,r.useState)([]),l=(0,a.Z)(u,2),f=l[0],d=l[1];return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n)return W.error("\u041f\u0443\u0441\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0430! \u044f\u0432\u043d\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u0449\u043e\u0441\u044c \u0449\u0435!",{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});function t(){return(t=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.qF)(n);case 2:t=e.sent,d(t.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),i("")},children:[(0,G.jsx)("h2",{className:"formSearchTitle",children:"Search"}),(0,G.jsx)("input",{className:"formInput",type:"text",value:n,placeholder:"Fight Club",onChange:function(e){i(e.target.value)}}),(0,G.jsx)("button",{className:"formSubmit",type:"sumbit",children:"Search \ud83d\udd0d"})]}),(0,G.jsx)("ul",{className:"moviesList",children:f.map((function(e){var t=e.id,n=e.title,r=e.poster_path,o=e.overview,a=e.popularity;return(0,G.jsxs)("li",{className:"movieListItem",children:[(0,G.jsx)(X.rU,{to:"".concat(t),children:r&&(0,G.jsx)("img",{width:"300",src:"https://image.tmdb.org/t/p/w500/"+r,alt:n})}),(0,G.jsxs)("div",{className:"moviesWrap",children:[(0,G.jsx)("h2",{children:n}),(0,G.jsx)("span",{children:a}),(0,G.jsx)("p",{className:"moviesOverview",children:o})]})]},t)}))})]})},K=function(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Y,{}),(0,G.jsx)(B,{autoClose:2e3})]})}},409:function(e,t,n){n.d(t,{Mc:function(){return l},XT:function(){return c},fT:function(){return f},qF:function(){return u}});var r=n(861),o=n(757),a=n.n(o),i=n(263),s="429901df921e7a06d9fe261cd0c4ab69";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=910.7d6c312f.chunk.js.map
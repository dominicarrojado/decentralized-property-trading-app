(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{26010:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/properties/create",function(){return t(73002)}])},11337:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var r=t(34051),s=t.n(r),a=t(85893),i=t(67294),c=t(45512),o=t(90885),u=t(31965),l=t(50727),d=t(88375),f=t(35005);function v(n){var e=n.buttonLoading,t=n.buttonOnClick;return(0,a.jsxs)(d.Z,{variant:"primary",children:[(0,a.jsx)(d.Z.Heading,{children:"Connect Account"}),(0,a.jsxs)("p",{children:["Please click connect your ",(0,a.jsx)("b",{children:"MetaMask"})," account to continue."]}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"d-flex justify-content-end",children:(0,a.jsx)(f.Z,{variant:"primary",onClick:t,disabled:e,children:e?"Loading...":"Connect"})})]})}function h(n){var e=n.buttonOnClick;return(0,a.jsxs)(d.Z,{variant:"danger",children:[(0,a.jsx)(d.Z.Heading,{children:"Unexpected Error"}),(0,a.jsx)("p",{children:"Something went wrong. Please try again..."}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"d-flex justify-content-end",children:(0,a.jsx)(f.Z,{variant:"danger",onClick:e,children:"Retry Again"})})]})}function p(){return(0,a.jsxs)(d.Z,{variant:"warning",children:[(0,a.jsx)(d.Z.Heading,{children:"Install MetaMask"}),(0,a.jsxs)("p",{children:["Please install ",(0,a.jsx)("b",{children:"MetaMask"})," browser extension to continue."]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"d-flex gap-3 justify-content-end",children:[(0,a.jsx)(f.Z,{href:"https://metamask.io/download/",target:"_blank",variant:"warning",children:"Install MetaMask"}),(0,a.jsx)(f.Z,{variant:"outline-dark",onClick:function(){return window.location.reload()},children:"Reload"})]})]})}function x(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function m(n){var e=n.children,t=(0,i.useContext)(l.Z),r=(0,i.useState)(u.j4.DEFAULT),d=r[0],f=r[1],m=(0,o.s4)(),j=(0,i.useState)(!1),w=j[0],y=j[1],C=function(){var n,e=(n=s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(u.j4.CONNECTING),n.prev=1,n.next=4,(0,c.G)();case 4:(e=n.sent)?(t.setAccount({addressId:e}),f(u.j4.CONNECTED)):f(u.j4.ERROR),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),f(u.j4.ERROR);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var e=this,t=arguments;return new Promise((function(r,s){var a=n.apply(e,t);function i(n){x(a,r,s,i,c,"next",n)}function c(n){x(a,r,s,i,c,"throw",n)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){!function(){var n=window.ethereum,e=Boolean(n&&n.isMetaMask);y(e)}(),t.account&&f(u.j4.CONNECTED)}),[t.account]),m?w?d===u.j4.ERROR?(0,a.jsx)(h,{buttonOnClick:C}):d!==u.j4.CONNECTED?(0,a.jsx)(v,{buttonOnClick:C,buttonLoading:d===u.j4.CONNECTING}):(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)(p,{}):null}},90885:function(n,e,t){"use strict";t.d(e,{$s:function(){return f},s4:function(){return d}});var r=t(34051),s=t.n(r),a=t(67294),i=t(50727),c=(t(45512),t(97331)),o=t(31965);function u(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function l(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var a=n.apply(e,t);function i(n){u(a,r,s,i,c,"next",n)}function c(n){u(a,r,s,i,c,"throw",n)}i(void 0)}))}}function d(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,a.useEffect)((function(){t(!0)}),[]),e}function f(){var n=(0,a.useContext)(i.Z),e=n.hasListings,t=(0,a.useState)(o.M.DEFAULT),r=t[0],u=t[1],d=function(){var e=l(s().mark((function e(){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(o.M.LOADING),e.next=4,(0,c.N)();case 4:for(t=e.sent,r=[],a=0;a<16;a++)r.push({id:t.datatype.uuid(),name:t.company.companyName(),country:t.address.country(),contractAddress:t.finance.ethereumAddress(),description:t.lorem.sentences(),listedBy:t.finance.ethereumAddress(),imageUrl:t.image.city(0,0,!0)});n.setListings(r),n.setHasListings(!0),u(o.M.SUCCESS),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),u(o.M.ERROR);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){e||d()}),[e]),[r,n.listings]}},45512:function(n,e,t){"use strict";t.d(e,{G:function(){return u},u:function(){return d}});var r=t(34051),s=t.n(r),a=t(97331),i=t(58038);function c(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var a=n.apply(e,t);function i(n){c(a,r,s,i,o,"next",n)}function o(n){c(a,r,s,i,o,"throw",n)}i(void 0)}))}}function u(){return l.apply(this,arguments)}function l(){return(l=o(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return e=n.sent,n.abrupt("return",e[0]);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=o(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.l)();case 2:return t=n.sent,r=new t(window.ethereum),n.abrupt("return",new r.eth.Contract(i.p2,i.ez,e));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},97331:function(n,e,t){"use strict";t.d(e,{N:function(){return u},l:function(){return c}});var r=t(34051),s=t.n(r);function a(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var i=n.apply(e,t);function c(n){a(i,r,s,c,o,"next",n)}function o(n){a(i,r,s,c,o,"throw",n)}c(void 0)}))}}function c(){return o.apply(this,arguments)}function o(){return(o=i(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(482),t.e(714),t.e(389),t.e(309)]).then(t.t.bind(t,3283,23));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return(l=i(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(778),t.e(285),t.e(98),t.e(137),t.e(544)]).then(t.bind(t,67544));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},73002:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var r=t(34051),s=t.n(r),a=t(85893),i=t(67294),c=t(35005),o=t(45512),u=t(11337),l=t(50727),d=t(58038),f=t(31965),v=t(94184),h=t.n(v),p=t(76792);const x=i.forwardRef((({bsPrefix:n,bg:e,pill:t,text:r,className:s,as:i="span",...c},o)=>{const u=(0,p.vE)(n,"badge");return(0,a.jsx)(i,{ref:o,...c,className:h()(s,u,t&&"rounded-pill",r&&`text-${r}`,e&&`bg-${e}`)})}));x.displayName="Badge",x.defaultProps={bg:"primary",pill:!1};var m=x,j=t(88375);function w(n,e,t,r,s,a,i){try{var c=n[a](i),o=c.value}catch(u){return void t(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function y(){var n=(0,i.useState)(f.M.DEFAULT),e=n[0],t=n[1],r=(0,i.useState)({destinationAcc:null,tokensCount:null}),v=r[0],h=r[1],p=(0,i.useContext)(l.Z),x=function(){var n,e=(n=s().mark((function n(){var e,r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(f.M.LOADING),n.next=5,(0,o.u)({from:null===(e=p.account)||void 0===e?void 0:e.addressId,gas:d.pl});case 5:return r=n.sent,n.next=8,r.methods.createProperty(1e7,23451242,"550321",10).send();case 8:a=n.sent,h({destinationAcc:a.events.Transfer.returnValues.to,tokensCount:a.events.Transfer.returnValues.value}),t(f.M.SUCCESS),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0),t(f.M.ERROR);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})),function(){var e=this,t=arguments;return new Promise((function(r,s){var a=n.apply(e,t);function i(n){w(a,r,s,i,c,"next",n)}function c(n){w(a,r,s,i,c,"throw",n)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),y=(0,i.useMemo)((function(){switch(e){case f.M.LOADING:return"Waiting...";case f.M.ERROR:return"Try Again";default:return"Confirm Token Genration"}}),[e]),C=(0,i.useMemo)((function(){switch(e){case f.M.LOADING:return"warning";case f.M.ERROR:return"danger";default:return"primary"}}),[e]);return(0,a.jsxs)(u.Z,{children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{variant:C,onClick:x,children:y})}),(0,a.jsx)("br",{}),v.destinationAcc&&v.tokensCount&&(0,a.jsx)("div",{children:(0,a.jsxs)(j.Z,{variant:"success",children:[(0,a.jsx)(j.Z.Heading,{children:"Tokens Generated"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"Account: "}),(0,a.jsx)("span",{children:v.destinationAcc})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"Tokens: "}),(0,a.jsx)(m,{bg:"secondary",children:v.tokensCount})]})]})})]})}},88375:function(n,e,t){"use strict";var r=t(94184),s=t.n(r),a=t(67294),i=t(15446),c=t(78146),o=t(71819),u=t(76792),l=t(41068),d=t(41485),f=t(39602),v=t(66611),h=t(85893);const p=(0,f.Z)("h4");p.displayName="DivStyledAsH4";const x=(0,v.Z)("alert-heading",{Component:p}),m=(0,v.Z)("alert-link",{Component:o.Z}),j={variant:"primary",show:!0,transition:l.Z,closeLabel:"Close alert"},w=a.forwardRef(((n,e)=>{const{bsPrefix:t,show:r,closeLabel:a,closeVariant:o,className:f,children:v,variant:p,onClose:x,dismissible:m,transition:j,...w}=(0,i.Ch)(n,{show:"onClose"}),y=(0,u.vE)(t,"alert"),C=(0,c.Z)((n=>{x&&x(!1,n)})),b=!0===j?l.Z:j,k=(0,h.jsxs)("div",{role:"alert",...b?void 0:w,ref:e,className:s()(f,y,p&&`${y}-${p}`,m&&`${y}-dismissible`),children:[m&&(0,h.jsx)(d.Z,{onClick:C,"aria-label":a,variant:o}),v]});return b?(0,h.jsx)(b,{unmountOnExit:!0,...w,ref:void 0,in:r,children:k}):r?k:null}));w.displayName="Alert",w.defaultProps=j,e.Z=Object.assign(w,{Link:m,Heading:x})},35005:function(n,e,t){"use strict";var r=t(94184),s=t.n(r),a=t(67294),i=t(70861),c=t(76792),o=t(85893);const u=a.forwardRef((({as:n,bsPrefix:e,variant:t,size:r,active:a,className:u,...l},d)=>{const f=(0,c.vE)(e,"btn"),[v,{tagName:h}]=(0,i.FT)({tagName:n,...l}),p=h;return(0,o.jsx)(p,{...v,...l,ref:d,className:s()(u,f,a&&"active",t&&`${f}-${t}`,r&&`${f}-${r}`,l.href&&l.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u}},function(n){n.O(0,[774,888,179],(function(){return e=26010,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[47395],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.default)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){var t,a;return null!==(t=null===(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===a?void 0:a.filter(Boolean))&&void 0!==t?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,a,n,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,d=p(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!==(t=n.find((function(e){return e.default})))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),v=b[0],h=b[1],g=f({queryString:l,groupId:u}),k=g[0],y=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=N[0],w=N[1],I=function(){var e=null!=k?k:T;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),w(e)}),[y,w,d]),tabValues:d}}var v=a(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),l(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!==(n=c[r])&&void 0!==n?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!==(i=c[o])&&void 0!==i?i:c[c.length-1]}null===(t=a)||void 0===t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,i.default)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,i.default)("tabs-container",h.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},20525:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(74866),s=a(85162),l=["components"],u={id:"docs-notifications-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications--quickstart.png"},c="Quickstart",d={unversionedId:"notifications/docs-notifications-quickstart",id:"notifications/docs-notifications-quickstart",title:"Quickstart",description:"Everything you will need to get up and running in 2 mins or less!",source:"@site/docs/notifications/02-Quickstart-Push-Notification.mdx",sourceDirName:"notifications",slug:"/notifications/quickstart",permalink:"/docs/notifications/quickstart",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/02-Quickstart-Push-Notification.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications--quickstart.png"},sidebar:"pushNotificationSidebar",previous:{title:"Intro to Push Notification",permalink:"/docs/notifications/"},next:{title:"Important Concepts",permalink:"/docs/notifications/important-concepts"}},p={},m=[{value:"Installation",id:"installation",level:3},{value:"Import libraries",id:"import-libraries",level:3},{value:"Initialize User",id:"initialize-user",level:3},{value:"Send Notifcation",id:"send-notifcation",level:3},{value:"Stream / Real time updates / Socket",id:"stream--real-time-updates--socket",level:3}],f={toc:m},b="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Everything you will need to get up and running in 2 mins or less!"),(0,i.kt)("head",null,(0,i.kt)("title",null,"Quickstart | Push Notifcation | Push Documentation")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)(o.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n"))),(0,i.kt)(s.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n"))),(0,i.kt)(s.Z,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n")))),(0,i.kt)("h3",{id:"import-libraries"},"Import libraries"),(0,i.kt)(o.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import restapi for function calls\nimport { PushAPI } from '@pushprotocol/restapi'\n\n// Ethers v5 or Viem, both are supported\nimport { ethers } from 'ethers'\n"))),(0,i.kt)(s.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import restapi for function calls\nimport { PushAPI } from '@pushprotocol/restapi'\n\n// Ethers v5 or Viem, both are supported\nimport { ethers } from 'ethers'\n"))),(0,i.kt)(s.Z,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import restapi for function calls\nimport { PushAPI } from '@pushprotocol/restapi'\n\n// Ethers v5 or Viem, both are supported\nimport { ethers } from 'ethers'\n")))),(0,i.kt)("h3",{id:"initialize-user"},"Initialize User"),(0,i.kt)(o.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom()\n\n// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: 'staging' })\n"))),(0,i.kt)(s.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom()\n\n// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: 'staging' })\n"))),(0,i.kt)(s.Z,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom()\n\n// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: 'staging' })\n")))),(0,i.kt)("h3",{id:"send-notifcation"},"Send Notifcation"),(0,i.kt)(o.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Requires user to have a channel, see Create Channel section for more info\n// ['*'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(['*'], {\n  notification: { \n    title: 'You awesome notification', \n    body: 'from your amazing protocol' \n  }\n}) \n"))),(0,i.kt)(s.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Requires user to have a channel, see Create Channel section for more info\n// ['*'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(['*'], {\n  notification: { \n    title: 'You awesome notification', \n    body: 'from your amazing protocol' \n  }\n}) \n"))),(0,i.kt)(s.Z,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Requires user to have a channel, see Create Channel section for more info\n// ['*'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(['*'], {\n  notification: { \n    title: 'You awesome notification', \n    body: 'from your amazing protocol' \n  }\n}) \n")))),(0,i.kt)("h3",{id:"stream--real-time-updates--socket"},"Stream / Real time updates / Socket"),(0,i.kt)(o.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// To listen to real time notifications\nuserAlice.stream.on('STREAM.NOTIF', (data) => {\n  console.log(data)\n})\n"))),(0,i.kt)(s.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// To listen to real time notifications\nuserAlice.stream.on('STREAM.NOTIF', (data) => {\n  console.log(data)\n})\n"))),(0,i.kt)(s.Z,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// To listen to real time notifications\nuserAlice.stream.on('STREAM.NOTIF', (data) => {\n  console.log(data)\n})\n")))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[8401],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(o.tabItem,u),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(87462),a=n(67294),o=n(86010),u=n(12466),l=n(16550),i=n(91980),c=n(67392),s=n(50012);function f(e){return function(e){var t,n;return null!==(t=null===(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function b(e){var t,n,r,o,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,f=d(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!==(t=r.find((function(e){return e.default})))&&void 0!==t?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:f})})),v=b[0],h=b[1],y=m({queryString:i,groupId:c}),g=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],E=function(){var e=null!=g?g:N;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),C(e)}),[k,C,f]),tabValues:f}}var v=n(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,l=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],f=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(f(t),i(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!==(r=s[a])&&void 0!==r?r:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;n=null!==(o=s[u])&&void 0!==o?o:s[s.length-1]}null===(t=n)||void 0===t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},u,{className:(0,o.default)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=b(e);return a.createElement("div",{className:(0,o.default)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},40063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(74866),l=n(85162),i=n(23734),c=["components"],s={},f="ChatProfile",d={unversionedId:"chat/ui-components/Advanced/ChatProfile",id:"chat/ui-components/Advanced/ChatProfile",title:"ChatProfile",description:"Empower User Interaction: Showcase Wallet Addresses, Group Names, and Member Management with ChatProfile in Your Dapp.",source:"@site/docs/chat/03-ui-components/Advanced/04-ChatProfile.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/ChatProfile",permalink:"/docs/chat/ui-components/Advanced/ChatProfile",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/03-ui-components/Advanced/04-ChatProfile.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"pushChatSidebar",previous:{title:"ChatViewList",permalink:"/docs/chat/ui-components/Advanced/ChatViewList"},next:{title:"MessageInput",permalink:"/docs/chat/ui-components/Advanced/MessageInput"}},p={},m=[],b={toc:m},v="wrapper";function h(e){var t=e.components,s=(0,a.Z)(e,c);return(0,o.kt)(v,(0,r.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chatprofile"},"ChatProfile"),(0,o.kt)("p",null,"Empower User Interaction: Showcase Wallet Addresses, Group Names, and Member Management with ChatProfile in Your Dapp."),(0,o.kt)("head",null,(0,o.kt)("title",null,"UiWeb - ChatProfile")),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import ChatProfile from \"@pushprotocol/uiweb\";\n\nexport const ChatProfileTest () => { \nreturn (\n        <ChatProfile chatId={'330cae5f963f2df3d6d692a7075317c906468e3fe60bfb8280a7e125208939e1'} style='Info' />\n    )\n}\n")),(0,o.kt)(i.F0,{mdxType:"ModalContainer"},(0,o.kt)("img",{src:n(65508).Z})))),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"em"},"chatId"))),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")))}h.isMDXComponent=!0},65508:function(e,t,n){t.Z=n.p+"assets/images/chatprofile-7f941d02777085008f2d03827c5a9efc.png"}}]);
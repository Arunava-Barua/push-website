"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[63961],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(o.tabItem,u),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(87462),a=n(67294),o=n(86010),u=n(12466),i=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t,n;return null!==(t=null===(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function b(e){var t,n,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,p=d(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!==(t=r.find((function(e){return e.default})))&&void 0!==t?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),h=b[0],v=b[1],y=m({queryString:l,groupId:s}),g=y[0],w=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),C=k[0],I=k[1],T=function(){var e=null!=g?g:C;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&v(T)}),[T]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),I(e)}),[w,I,p]),tabValues:p}}var h=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!==(r=c[a])&&void 0!==r?r:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!==(o=c[u])&&void 0!==o?o:c[c.length-1]}null===(t=n)||void 0===t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},u,{className:(0,o.default)("tabs__item",v.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=b(e);return a.createElement("div",{className:(0,o.default)("tabs-container",v.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function k(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},46759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(23734),i=n(74866),l=n(85162),s=["components"],c={},p="Usecases",d={unversionedId:"chat/ui-components/UseCase",id:"chat/ui-components/UseCase",title:"Usecases",description:"Streamline Chat Integration for Developers: Say goodbye to the hassles of UI design and API calls. With our web components available in the @pushprotocol/uiweb package, you can effortlessly integrate push chat functionality into your dapp using just a few lines of code.",source:"@site/docs/chat/03-ui-components/01-UseCase.mdx",sourceDirName:"chat/03-ui-components",slug:"/chat/ui-components/UseCase",permalink:"/docs/chat/ui-components/UseCase",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/03-ui-components/01-UseCase.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"pushChatSidebar",previous:{title:"UI Components",permalink:"/docs/chat/ui-components"},next:{title:"ChatUIProvider",permalink:"/docs/chat/ui-components/Advanced/ChatUIProvider"}},f={},m=[],b={toc:m},h="wrapper";function v(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)(h,(0,r.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecases"},"Usecases"),(0,o.kt)("p",null,"Streamline Chat Integration for Developers: Say goodbye to the hassles of UI design and API calls. With our web components available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@pushprotocol/uiweb")," package, you can effortlessly integrate push chat functionality into your dapp using just a few lines of code."),(0,o.kt)("p",null,"As an example, take a look at how we seamlessly integrated the Push Chat View component into the ",(0,o.kt)("a",{parentName:"p",href:"https://push.org/brb"},(0,o.kt)("inlineCode",{parentName:"a"},"push.org/brb"))," website in the image below."),(0,o.kt)(u.F0,{mdxType:"ModalContainer"},(0,o.kt)("img",{src:n(36982).Z})),"in order to add the above chatview component the developer just need to write few lines of code",(0,o.kt)(i.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ChatUIProvider } from "@pushprotocol/uiweb";\nimport { darkChatTheme } from "@pushprotocol/uiweb";\nimport Chat from "./Chat";\n\nexport function App() {\n  // you can pass your own signer, if you don\'t pass a signer\n  // then it will automatically use the default onboarding kit i.e. blocknative\n  // !pgpPrivatekey && !account && !isConnected => will give the note\n  return (\n    <ChatUIProvider theme={darkChatTheme}>\n      <Chat />\n    </ChatUIProvider>\n  );\n}\n')))),(0,o.kt)(i.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"react",attributes:{className:"codetab react"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ChatViewComponent } from "@pushprotocol/uiweb";\n\nexport function Chat() {\n  return (\n    <ChatViewComponent\n      chatId="b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1"\n      limit={10}\n      isConnected={true}\n    />\n  );\n}\n')))))}v.isMDXComponent=!0},36982:function(e,t,n){t.Z=n.p+"assets/images/chat-6ad966dbd2d5595085496e8a5fc555dd.png"}}]);
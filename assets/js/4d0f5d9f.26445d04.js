"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[27850],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,u(u({ref:t},c),{},{components:n})):a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,u),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(87462),r=n(67294),o=n(86010),u=n(12466),s=n(16550),i=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){var t,n;return null!==(t=null===(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function h(e){var t,n,a,o,u=e.defaultValue,s=e.queryString,i=void 0!==s&&s,l=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!==(t=a.find((function(e){return e.default})))&&void 0!==t?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:u,tabValues:p})})),v=h[0],b=h[1],g=m({queryString:i,groupId:l}),y=g[0],_=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=k[0],T=k[1],N=function(){var e=null!=y?y:E;return f({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),_(e),T(e)}),[_,T,p]),tabValues:p}}var v=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,l=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==s&&(p(t),i(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!==(a=c[r])&&void 0!==a?a:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!==(o=c[u])&&void 0!==o?o:c[c.length-1]}null===(t=n)||void 0===t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},u,{className:(0,o.default)("tabs__item",b.tabItem,null==u?void 0:u.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function _(e){var t=h(e);return r.createElement("div",{className:(0,o.default)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},48159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),u=n(74866),s=n(85162),i=["components"],l={id:"docs-notifications-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications--push_sdk_playground.png"},c="Push SDK playground",p={unversionedId:"notifications/tutorials/docs-notifications-push-sdk-playground",id:"notifications/tutorials/docs-notifications-push-sdk-playground",title:"Push SDK Playground",description:"This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout Push SDK example that utlizes @pushprotocol/restapi and @pushprotocol/socket for more info!",source:"@site/docs/notifications/02-tutorials/05-Tutorial-Push-SDK-APIs-Playground.mdx",sourceDirName:"notifications/02-tutorials",slug:"/notifications/tutorials/push-sdk-playground",permalink:"/docs/notifications/tutorials/push-sdk-playground",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/02-tutorials/05-Tutorial-Push-SDK-APIs-Playground.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"docs-notifications-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications--push_sdk_playground.png"},sidebar:"pushNotificationSidebar",previous:{title:"Token transfer notification from smart contract",permalink:"/docs/notifications/tutorials/token-transfer-notification-from-smart-contract"},next:{title:"Push SDK React Playground",permalink:"/docs/notifications/tutorials/push-react-component-playground-example"}},d={},f=[{value:"Step 1: Clone the Push SDK Repository",id:"step-1-clone-the-push-sdk-repository",level:2},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Setup Push SDK Playground",id:"step-3-setup-push-sdk-playground",level:2},{value:"Step 4: Setup Environment Variables",id:"step-4-setup-environment-variables",level:2},{value:"Step 5: Run Playground Examples",id:"step-5-run-playground-examples",level:2},{value:"Expected Output",id:"expected-output",level:3}],m={toc:f},h="wrapper";function v(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-sdk-playground"},"Push SDK playground"),(0,o.kt)("p",null,"This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples/sdk-backend-node"},"Push SDK example")," that utlizes ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pushprotocol/restapi"},"@pushprotocol/restapi")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pushprotocol/socket"},"@pushprotocol/socket")," for more info!"),(0,o.kt)("head",null,(0,o.kt)("title",null,"Push SDK APIs playground tutorial | Push Notifcation | Push Documentation")),(0,o.kt)("h2",{id:"step-1-clone-the-push-sdk-repository"},"Step 1: Clone the Push SDK Repository"),(0,o.kt)("p",null,"Download the Push SDK repository to your local machine."),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ethereum-push-notification-service/push-sdk.git\n")))),(0,o.kt)("h2",{id:"step-2-install-dependencies"},"Step 2: Install Dependencies"),(0,o.kt)("p",null,"Navigate to the SDK directory and install required dependencies."),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd push-sdk\nyarn install\n")))),(0,o.kt)("h2",{id:"step-3-setup-push-sdk-playground"},"Step 3: Setup Push SDK Playground"),(0,o.kt)("p",null,"Navigate to the directory and install required dependencies."),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/examples/sdk-backend-node\nyarn install\n")))),(0,o.kt)("h2",{id:"step-4-setup-environment-variables"},"Step 4: Setup Environment Variables"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and add values to it according to the given ",(0,o.kt)("inlineCode",{parentName:"p"},".env.sample"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," - It is possible to run a bare minimum examples without ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),". All other examples will be skipped."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# WALLET PRIVATE KEY\nWALLET_PRIVATE_KEY=your_channel_private_key\n\n# ENVIRONMENT OF PUSH NETWORK - prod, staging OR dev\nPUSH_NODE_NETWORK=staging\n\n# TO ENABLE API RESPONSES TO BE SHOWN OR HIDDEN - true OR false\nSHOW_API_RESPONSE=false\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_1=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_1=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_1=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_1=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_1=your_nft_profile_password\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_2=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_2=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_2=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_2=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_2=your_nft_profile_password\n\n# VIDEO CHAIN ID\nVIDEO_CHAIN_ID=your_video_chain_id\n\n# VIDEO SENDER ADDRESS\nVIDEO_SENDER_ADDRESS=your_video_sender_address\n\n# VIDEO RECIPEINT ADDRESS\nVIDEO_RECIPEINT_ADDRESS=your_video_recipient_address\n\n# VIDEO CHAT ID\nVIDEO_CHAT_ID=your_video_chat_id\n")),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create .env file\ntouch .env\n\n# Add different key values according to .env.sample\n")))),(0,o.kt)("h2",{id:"step-5-run-playground-examples"},"Step 5: Run Playground Examples"),(0,o.kt)(u.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")))),(0,o.kt)("h3",{id:"expected-output"},"Expected Output"),(0,o.kt)("img",{src:n(81690).Z}))}v.isMDXComponent=!0},81690:function(e,t,n){t.Z=n.p+"assets/images/sdk-playground-0fa0602e82747a6f27c8686d2ab85015.png"}}]);
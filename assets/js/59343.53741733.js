"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[59343],{75740:function(e,t,s){s.d(t,{ConfigCtrl:function(){return O},zv:function(){return b},uA:function(){return v},ExplorerCtrl:function(){return V},jb:function(){return H},OptionsCtrl:function(){return I},AV:function(){return m},ThemeCtrl:function(){return Q},ToastCtrl:function(){return Y}});Symbol();const n=Symbol();const o=Object.getPrototypeOf,r=new WeakMap,a=e=>e&&(r.has(e)?r.get(e):o(e)===Object.prototype||o(e)===Array.prototype),i=(e,t=!0)=>{r.set(e,t)},l=e=>"object"==typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),o=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),r=new WeakMap,u=((e,t,s=o)=>{const n=r.get(e);if((null==n?void 0:n[0])===t)return n[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(a,!0),r.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const n=Reflect.get(e,t),o={value:n,enumerable:!0,configurable:!0};if(d.has(n))i(n,!1);else if(n instanceof Promise)delete o.value,o.get=()=>s(n);else if(c.has(n)){const[e,t]=c.get(n);o.value=u(e,t(),s)}Object.defineProperty(a,t,o)})),Object.preventExtensions(a)}),p=new WeakMap,f=[1,1],h=(o=>{if(!l(o))throw new Error("object required");const r=p.get(o);if(r)return r;let i=f[0];const g=new Set,m=(e,t=++f[0])=>{i!==t&&(i=t,g.forEach((s=>s(e,t))))};let b=f[1];const y=e=>(t,s)=>{const n=[...t];n[1]=[e,...n[1]],m(n,s)},v=new Map,w=e=>{var t;const s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),C={deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const n=Reflect.deleteProperty(e,t);return n&&m(["delete",[t],s]),n},set(t,o,r,i){const u=Reflect.has(t,o),f=Reflect.get(t,o,i);if(u&&(e(f,r)||p.has(r)&&e(f,p.get(r))))return!0;w(o),l(r)&&(r=(e=>a(e)&&e[n]||null)(r)||r);let b=r;if(r instanceof Promise)r.then((e=>{r.status="fulfilled",r.value=e,m(["resolve",[o],e])})).catch((e=>{r.status="rejected",r.reason=e,m(["reject",[o],e])}));else{!c.has(r)&&s(r)&&(b=h(r));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(g.size){const s=t[3](y(e));v.set(e,[t,s])}else v.set(e,[t])})(o,e)}return Reflect.set(t,o,b,i),m(["set",[o],r,f]),!0}},O=t(I,C);p.set(o,O);const W=[I,(e=++f[1])=>(b===e||g.size||(b=e,v.forEach((([t])=>{const s=t[1](e);s>i&&(i=s)}))),i),u,e=>{g.add(e),1===g.size&&v.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const n=e[3](y(s));v.set(s,[e,n])}));return()=>{g.delete(e),0===g.size&&v.forEach((([e,t],s)=>{t&&(t(),v.set(s,[e]))}))}}];return c.set(O,W),Reflect.ownKeys(o).forEach((e=>{const t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(O[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),O}))=>[h,c,d,e,t,s,o,r,u,p,f],[p]=u();function f(e={}){return p(e)}function h(e,t,s){const n=c.get(e);let o;n||console.warn("Please use proxy object");const r=[],a=n[3];let i=!1;const l=a((e=>{r.push(e),s?t(r.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,i&&t(r.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const g=f({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:g,subscribe(e){return h(g,(()=>e(g)))},push(e,t){e!==g.view&&(g.view=e,t&&(g.data=t),g.history.push(e))},reset(e){g.view=e,g.history=[e]},replace(e){g.history.length>1&&(g.history[g.history.length-1]=e,g.view=e)},goBack(){if(g.history.length>1){g.history.pop();const[e]=g.history.slice(-1);g.view=e}},setData(e){g.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return b.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(b.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},y=f({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),v={state:y,subscribe(e){return h(y.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[n,o,r]=s;return r(n,o(),t)}(y.events[y.events.length-1]))))},initialize(){y.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},w=f({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe(e){return h(w,(()=>e(w)))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=f({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:C,subscribe(e){return h(C,(()=>e(C)))},setConfig(e){var t,s;v.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(C,e)}};var W=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",U="js-2.6.2";async function D(e,t){const s=((e,t)=>{for(var s in t||(t={}))j.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))L.call(t,s)&&A(e,s,t[s]);return e})({sdkType:M,sdkVersion:U},t),n=new URL(e,k);return n.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&n.searchParams.append(e,String(t))})),(await fetch(n)).json()}const P={async getDesktopListings(e){return D("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return D("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return D("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return D("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${k}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`},getAssetImageUrl(e){return`${k}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`}};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=b.isMobile(),$=f({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),V={state:$,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return $.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),n=Object.values(s);n.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),$.recomendedWallets=n}else{const{chains:e,isAuth:s}=I.state,n=e?.join(","),o=b.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:o?t.join(","):void 0},{listings:a}=_?await P.getMobileListings(r):await P.getDesktopListings(r);$.recomendedWallets=Object.values(a)}return $.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))T.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))x.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=O.state,{recomendedWallets:o}=$;if("ALL"===n)return $.wallets;o.length?t.excludedIds=o.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:a}=e,{listings:i,total:l}=_?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(i),d=a?"search":"wallets";return $[d]={listings:[...$[d].listings,...c],total:l,page:r??1},{listings:c,total:l}},getWalletImageUrl(e){return P.getWalletImageUrl(e)},getAssetImageUrl(e){return P.getAssetImageUrl(e)},resetSearch(){$.search={listings:[],total:0,page:1}}},B=f({open:!1}),H={state:B,subscribe(e){return h(B,(()=>e(B)))},async open(e){return new Promise((t=>{const{isUiLoaded:s,isDataLoaded:n}=I.state;if(b.removeWalletConnectDeepLink(),I.setWalletConnectUri(e?.uri),I.setChains(e?.chains),m.reset("ConnectWallet"),s&&n)B.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),B.open=!0,t())}),200)}}))},close(){B.open=!1}};var K=Object.defineProperty,z=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=f({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe(e){return h(G,(()=>e(G)))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&F(e,s,t[s]);if(z)for(var s of z(t))q.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=f({open:!1,message:"",variant:"success"}),Y={state:X,subscribe(e){return h(X,(()=>e(X)))},openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}}},59343:function(e,t,s){s.d(t,{WalletConnectModal:function(){return o}});var n=s(75740);class o{constructor(e){this.openModal=n.jb.open,this.closeModal=n.jb.close,this.subscribeModal=n.jb.subscribe,this.setTheme=n.ThemeCtrl.setThemeConfig,n.ThemeCtrl.setThemeConfig(e),n.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(41391).then(s.bind(s,41391));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),n.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);
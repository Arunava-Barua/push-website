"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[29514,75837],{19963:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ie}});var n=a(67294),r=a(86010),l=a(10833),o=a(35281),i=a(43320),c=a(53791),d=a(74477),s=a(1116),u=a(56006),m=a(95999),b=a(12466),p=a(85936);var h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function f(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],o=(0,n.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(o.current?o.current=!1:n>=r?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.default)("clean-btn",o.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:a})}var v=a(91442),E=a(16550),g=a(87524),k=a(86668),_=a(21327),C=a(87462);function I(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.default)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},n.createElement(I,{className:S.collapseSidebarButtonIcon}))}var T=a(59689),x=a(63366),B=a(69688),w=Symbol("EmptyContext"),y=n.createContext(w);function L(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],o=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(y.Provider,{value:o},t)}var Z=a(86043),A=a(48596),F=a(39960),M=a(72389),H=["item","onItemClick","activePath","level","index"];function P(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function W(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,x.Z)(e,H),u=t.items,m=t.label,b=t.collapsible,p=t.className,h=t.href,f=(0,k.L)().docs.sidebar.autoCollapseCategories,v=function(e){var t=(0,M.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),g=(0,A.Mg)(h,l),_=(0,Z.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=_.collapsed,S=_.setCollapsed,N=function(){var e=(0,n.useContext)(y);if(e===w)throw new B.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=N.expandedItem,L=N.setExpandedItem,W=function(e){void 0===e&&(e=!I),L(e?null:d),S(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,B.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:I,updateCollapsed:W}),(0,n.useEffect)((function(){b&&null!=T&&T!==d&&f&&S(!0)}),[b,T,d,S,f]),n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,r.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(F.Z,(0,C.Z)({className:(0,r.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),h?W(!1):(e.preventDefault(),W())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=v?v:"#":v},s),m),h&&b&&n.createElement(P,{categoryLabel:m,onClick:function(e){e.preventDefault(),W()}})),n.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(X,{items:u,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:i+1})))}var D=a(13919),R=a(39471),V={menuExternalLink:"menuExternalLink_NmtK"},U=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,x.Z)(e,U)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),h=(0,D.Z)(s);return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:u},n.createElement(F.Z,(0,C.Z)({className:(0,r.default)("menu__link",!h&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:a?function(){return a(t)}:void 0},d),u,!h&&n.createElement(R.Z,null)))}var K={menuHtmlItem:"menuHtmlItem_M9Kj"};function j(e){var t=e.item,a=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[K.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var G=["item"];function Y(e){var t=e.item,a=(0,x.Z)(e,G);switch(t.type){case"category":return n.createElement(W,(0,C.Z)({item:t},a));case"html":return n.createElement(j,(0,C.Z)({item:t},a));default:return n.createElement(z,(0,C.Z)({item:t},a))}}var q=["items"];function O(e){var t=e.items,a=(0,x.Z)(e,q);return n.createElement(L,null,t.map((function(e,t){return n.createElement(Y,(0,C.Z)({key:t,item:e,index:t},a))})))}var X=(0,n.memo)(O),J={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Q(e){var t=e.path,a=e.sidebar,l=e.className,i=function(){var e=(0,T.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.default)("menu thin-scrollbar",J.menu,i&&J.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:a,activePath:t,level:1})))}var $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function ne(e){var t=e.path,a=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.default)($,c&&ee,o&&te)},c&&n.createElement(_.Z,{tabIndex:-1,className:ae}),n.createElement(Q,{path:t,sidebar:a}),d&&n.createElement(N,{onClick:l}))}var re=n.memo(ne),le=a(13102),oe=a(93163),ie=function(e){var t=e.sidebar,a=e.path,l=(0,oe.e)();return n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ce(e){return n.createElement(le.Zo,{component:ie,props:e})}var de=n.memo(ce);function se(e){var t=(0,g.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(re,e),r&&n.createElement(de,e))}var ue={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function me(e){var t=e.toggleSidebar;return n.createElement("div",{className:ue.expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(I,{className:ue.expandButtonIcon}))}var be={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function pe(e){var t,a=e.children,r=(0,s.V)();return n.createElement(n.Fragment,{key:null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"noSidebar"},a)}function he(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],u=(0,n.useCallback)((function(){d&&s(!1),!d&&(0,v.n)()&&s(!0),l((function(e){return!e}))}),[l,d]);return n.createElement("aside",{className:(0,r.default)(o.k.docs.docSidebarContainer,be.docSidebarContainer,a&&be.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(be.docSidebarContainer)&&a&&s(!0)}},n.createElement(pe,null,n.createElement("div",{className:(0,r.default)(be.sidebarViewport,d&&be.sidebarViewportHidden)},n.createElement(se,{sidebar:t,path:i,onCollapse:u,isHidden:d}),d&&n.createElement(me,{toggleSidebar:u}))))}var fe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ve(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,s.V)();return n.createElement("main",{className:(0,r.default)(fe.docMainContainer,(t||!l)&&fe.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.default)("container padding-top--md padding-bottom--lg",fe.docItemWrapper,t&&fe.docItemWrapperEnhanced)},a))}var Ee={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function ge(e){var t=e.children,a=(0,s.V)(),r=(0,n.useState)(!1),l=r[0],o=r[1];return n.createElement(u.Z,{wrapperClassName:Ee.docsWrapper},n.createElement(f,null),n.createElement("div",{className:Ee.docPage},a&&n.createElement(he,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(ve,{hiddenSidebarContainer:l},t)))}var ke=a(75837),_e=a(90197);function Ce(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(_e.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(ke.default,null);var i=a.docElement,u=a.sidebarName,m=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Ce,e),n.createElement(l.FG,{className:(0,r.default)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(ge,null,i)))))}},75837:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});a(16550);var n=a(67294),r=a(95999),l=a(10833),o=a(56006);function i(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}a(51854);var c=a(55634);function d(e){return n.createElement(n.Fragment,null,n.createElement(i,e),n.createElement(c.Z,null))}}}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[68645],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return m}});var i=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var c=i.createContext({}),l=function(t){var n=i.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},d=function(t){var n=l(t.components);return i.createElement(c.Provider,{value:n},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=l(e),p=o,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||r;return e?i.createElement(m,a(a({ref:n},d),{},{components:e})):i.createElement(m,a({ref:n},d))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s[u]="string"==typeof t?t:o,a[1]=s;for(var l=2;l<r;l++)a[l]=e[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},85287:function(t,n,e){e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=e(87462),o=e(63366),r=(e(67294),e(3905)),a=["components"],s={id:"docs-notifications-tutorial-token-transfer-notification-from-smart-contract",title:"Token transfer notification from smart contract",hide_title:!0,slug:"./token-transfer-notification-from-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications_tutorial--token_transfer_notification_from_smart_contract.png"},c="Overview",l={unversionedId:"notifications/tutorials/docs-notifications-tutorial-token-transfer-notification-from-smart-contract",id:"notifications/tutorials/docs-notifications-tutorial-token-transfer-notification-from-smart-contract",title:"Token transfer notification from smart contract",description:"This tutorial explains how you can integrate notifications directly in your smart contract by importing Push comm smart contract and using its interface. We will be creating a simple token transfer notification for this guide.",source:"@site/docs/notifications/02-tutorials/04-Tutorial-Smart-Contract-Notifications.mdx",sourceDirName:"notifications/02-tutorials",slug:"/notifications/tutorials/token-transfer-notification-from-smart-contract",permalink:"/docs/notifications/tutorials/token-transfer-notification-from-smart-contract",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/02-tutorials/04-Tutorial-Smart-Contract-Notifications.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs-notifications-tutorial-token-transfer-notification-from-smart-contract",title:"Token transfer notification from smart contract",hide_title:!0,slug:"./token-transfer-notification-from-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications_tutorial--token_transfer_notification_from_smart_contract.png"},sidebar:"pushNotificationSidebar",previous:{title:"Advance - Creating your channel using Safe",permalink:"/docs/notifications/tutorials/create-your-channel-using-safe"},next:{title:"Push SDK Playground",permalink:"/docs/notifications/tutorials/push-sdk-playground"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What&#39;s going to happen",id:"whats-going-to-happen",level:2},{value:"Tutorial time",id:"tutorial-time",level:2},{value:"Code",id:"code",level:3},{value:"Add delegate",id:"add-delegate",level:3}],f={toc:u},p="wrapper";function m(t){var n=t.components,e=(0,o.Z)(t,a);return(0,r.kt)(p,(0,i.Z)({},f,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This tutorial explains how you can integrate notifications directly in your smart contract by importing Push comm smart contract and using its interface. We will be creating a simple token transfer notification for this guide."),(0,r.kt)("head",null,(0,r.kt)("title",null,"Token Transfer Notification from Smart Contract | Tutorial | Push Notifications | Push Documentation")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have created your channel - ",(0,r.kt)("a",{parentName:"li",href:"/docs/notifications/tutorials/create-your-channel/",title:"Guide to create your channel for sending notifications from Push protocol"},"Creating your channel")),(0,r.kt)("li",{parentName:"ul"},"Ensure you know what are channel delegates - ",(0,r.kt)("a",{parentName:"li",href:"/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",title:"Guide to adding delegates for your channel"},"Adding channel delegates")),(0,r.kt)("li",{parentName:"ul"},"Ensure you know types of notifications to know what you want to send - ",(0,r.kt)("a",{parentName:"li",href:"/docs/notifications/build/types-of-notification/",title:"Guide explaining the types of notificaitons"},"Types of notifications"))),(0,r.kt)("h2",{id:"whats-going-to-happen"},"What's going to happen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We create a channel and copy it's address"),(0,r.kt)("li",{parentName:"ul"},"We import interface and function call to trigger notification"),(0,r.kt)("li",{parentName:"ul"},"We deploy the contract and add the contract address as delegate"),(0,r.kt)("li",{parentName:"ul"},"Watch in \ud83d\ude32 as each transfer now notifies the wallet address about tokens received")),(0,r.kt)("h2",{id:"tutorial-time"},"Tutorial time"),(0,r.kt)("p",null,"Push protocol also supports sending notifications to user wallets directly from your smart contract and that too by ",(0,r.kt)("strong",{parentName:"p"},"only adding 2 lines of extra code to your smart contract")," \ud83c\udf89."),(0,r.kt)("p",null,"The best way to do it is by creating your channel first > tweaking your smart contract with notification logic and finally adding the deployed contract address as delegate to your channel."),(0,r.kt)("p",null,"To learn more about how to import interface and the function call of send notification, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Smart contract intergace to send notification"},"send notification (via smart contract)"),"."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity ^0.6.2;\n \nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/ERC20.sol";\n\n// PUSH Comm Contract Interface\ninterface IPUSHCommInterface {\n    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;\n}\n\ncontract Push is ERC20 {\n    // EPNS COMM ADDRESS ON ETHEREUM KOVAN, CHECK THIS: https://docs.epns.io/developers/developer-tooling/epns-smart-contracts/epns-contract-addresses\n    address public EPNS_COMM_ADDRESS = 0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;\n\n    constructor ()\n        ERC20("Push Token", "PUSH")\n        public {\n        _mint(msg.sender, 1000 * 10 ** uint(decimals()));\n    }\n\n    function transfer(address to, uint amount) override public returns (bool success) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n\n        //"0+3+Hooray! ", msg.sender, " sent ", token amount, " PUSH to you!"\n        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(\n            0x050Ca75E3957c37dDF26D58046d8F9967B88190c, // from channel\n            to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send\n            bytes(\n                string(\n                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n                    abi.encodePacked(\n                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n                        "+", // segregator\n                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)\n                        "+", // segregator\n                        "Tranfer Alert", // this is notificaiton title\n                        "+", // segregator\n                        "Hooray! ", // notification body\n                        addressToString(msg.sender), // notification body\n                        " sent ", // notification body\n                        uint2str(amount.div(10 ** uint(decimals()))), // notification body\n                        " PUSH to you!" // notification body\n                    )\n                )\n            )\n        );\n        \n        return true;\n    }\n\n    // Helper function to convert address to string\n    function addressToString(address _address) internal pure returns(string memory) {\n        bytes32 _bytes = bytes32(uint256(uint160(_address)));\n        bytes memory HEX = "0123456789abcdef";\n        bytes memory _string = new bytes(42);\n        _string[0] = \'0\';\n        _string[1] = \'x\';\n        for(uint i = 0; i < 20; i++) {\n            _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];\n            _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];\n        }\n        return string(_string);\n    }\n\n    // Helper function to convert uint to string\n    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {\n        if (_i == 0) {\n            return "0";\n        }\n        uint j = _i;\n        uint len;\n        while (j != 0) {\n            len++;\n            j /= 10;\n        }\n        bytes memory bstr = new bytes(len);\n        uint k = len - 1;\n        while (_i != 0) {\n            bstr[k--] = byte(uint8(48 + _i % 10));\n            _i /= 10;\n        }\n        return string(bstr);\n    }\n}\n')),(0,r.kt)("h3",{id:"add-delegate"},"Add delegate"),(0,r.kt)("p",null,"The only remaining step is to deploy your contract and then go to your channel and ",(0,r.kt)("a",{parentName:"p",href:"/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",title:"Add delegate to your channel"},"add the smart contract address as delegate to your channel")," which will allow that smart contract address to send notification on behalf of your channel."),(0,r.kt)("p",null,"That's it! Your channel should now send notification as soon as anyone transfer your tokens from one address to the other \ud83c\udf89\ud83c\udf89\ud83c\udf89!"))}m.isMDXComponent=!0}}]);
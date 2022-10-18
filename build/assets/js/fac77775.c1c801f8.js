"use strict";(self.webpackChunkarticles=self.webpackChunkarticles||[]).push([[5952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var A=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},i=Object.keys(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=A.createContext({}),c=function(e){var t=A.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return A.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,u=g["".concat(a,".").concat(d)]||g[d]||s[d]||i;return n?A.createElement(u,o(o({ref:t},p),{},{components:n})):A.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return A.createElement.apply(null,o)}return A.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var A=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,displayed_sidebar:"techdoc"},o="Create an invite to sign for a merged document group",l={unversionedId:"techdoc/API/createinvite",id:"techdoc/API/createinvite",title:"Create an invite to sign for a merged document group",description:"POST",source:"@site/docs/techdoc/API/createinvite.md",sourceDirName:"techdoc/API",slug:"/techdoc/API/createinvite",permalink:"/docs/techdoc/API/createinvite",draft:!1,editUrl:"https://github.com/SingingFoot/articles/docs/techdoc/API/createinvite.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"techdoc"},sidebar:"techdoc",previous:{title:"How to place API in a table",permalink:"/docs/techdoc/API/api_in_the_table"},next:{title:"Four ways to make an API call in JavaScript",permalink:"/docs/techdoc/API/4waysapi"}},a={},c=[{value:"Request",id:"request",level:2},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"Request example",id:"request-example",level:3},{value:"Responses",id:"responses",level:3},{value:"Body",id:"body-1",level:3}],p={toc:c};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,A.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-invite-to-sign-for-a-merged-document-group"},"Create an invite to sign for a merged document group"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"POST",src:n(7270).Z,title:"POST",width:"56",height:"32"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api-eval.signnow.com/documentgroup/{{group_id}}/groupinvite\n")),(0,r.kt)("p",null," Creates an invite to sign for a merged document group. "),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Requirements (if any):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TBD. It is necessary to specify special requirements from the developers of the API.\n")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authorization")," string (Required)"),(0,r.kt)("p",null,"Bearer followed by token"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer {{token}}")),(0,r.kt)("p",null,"group_id TBD. (ask developers about group id data type and how to find it)"),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Body structure",src:n(4581).Z,title:"Body structure",width:"381",height:"708"})),(0,r.kt)("h3",{id:"request-example"},"Request example"),(0,r.kt)("p",null,"Content-Type: application/json"),(0,r.kt)("p",null,"TBD. It is necessary to get from the API developers versions of the code in all languages (Python, C, JS (Fetch, jQuery, Axios, XMLHttpRequest) etc.)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use this code as a request example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://api-eval.signnow.com/documentgroup/{{group_id}}/groupinvite\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{token}}\' \\\n--data-raw\n\'{\n    "invite_steps": [\n        {\n            "order": 1,\n            "invite_emails": [\n                {\n                    "email": "{{signer_email}}",\n                    "subject": "Signer 1",\n                    "expiration_days": 30\n                }\n            ],\n            "invite_actions": [\n                {\n                    "email": "{{signer_email}}",\n                    "role_name": "Signer 1",\n                    "action": "sign",\n                    "document_id": "{{doc_id1}}",\n                    "allow_reassign": "0",\n                    "decline_by_signature": "0"\n                },\n                {\n                    "email": "{{signer_email}}",\n                    "role_name": "Signer 1",\n                    "action": "sign",\n                    "document_id": "{{doc_id2}}",\n                    "allow_reassign": "0",\n                    "decline_by_signature": "0"\n                }\n            ]\n        }\n    ],\n    "completion_emails": [],\n    "sign_as_merged": true\n}\'\n\n'))),(0,r.kt)("h3",{id:"responses"},"Responses"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"200",src:n(9562).Z,title:"200",width:"92",height:"65"})),(0,r.kt)("h3",{id:"body-1"},"Body"),(0,r.kt)("p",null,"Content-Type: application/json"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use this code as a response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Code for response example. TBD. \nIt is necessary to specify the response code from the developers of the API.\n"))))}s.isMDXComponent=!0},9562:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},7270:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},4581:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/str-6d3753000fb746b54ce26ee8b9db33f2.png"}}]);
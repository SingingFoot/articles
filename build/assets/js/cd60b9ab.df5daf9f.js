"use strict";(self.webpackChunkarticles=self.webpackChunkarticles||[]).push([[1595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0,displayed_sidebar:"techdoc"},i="How to add a new horizontal sidebar item",s={unversionedId:"techdoc/Docusaurus/newsidebar",id:"techdoc/Docusaurus/newsidebar",title:"How to add a new horizontal sidebar item",description:'Every horizontal menu item has its own "Intro" markdown file. If you would like to have two different horizontal menu items (as in the figure below "Articles" and "TechCom"), you need to create its own "Intro" markdown file and its own folder inside the "docs" folder for each.',source:"@site/docs/techdoc/Docusaurus/newsidebar.md",sourceDirName:"techdoc/Docusaurus",slug:"/techdoc/Docusaurus/newsidebar",permalink:"/docs/techdoc/Docusaurus/newsidebar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/techdoc/Docusaurus/newsidebar.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,displayed_sidebar:"techdoc"},sidebar:"techdoc",next:{title:"pythondocs",permalink:"/docs/techdoc/Python/pythondocs"}},l={},d=[],c={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-new-horizontal-sidebar-item"},"How to add a new horizontal sidebar item"),(0,a.kt)("p",null,"Every horizontal menu item has its own ",(0,a.kt)("strong",{parentName:"p"},'"Intro"')," markdown file. If you would like to have two different horizontal menu items (as in the figure below ",(0,a.kt)("strong",{parentName:"p"},'"Articles"')," and ",(0,a.kt)("strong",{parentName:"p"},'"TechCom"'),"), you need to create its own ",(0,a.kt)("strong",{parentName:"p"},'"Intro"')," markdown file and its own folder inside the ",(0,a.kt)("strong",{parentName:"p"},'"docs"')," folder for each."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Two menu items",src:n(1489).Z,title:"Two menu items",width:"410",height:"179"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Let the first ",(0,a.kt)("strong",{parentName:"li"},'"Intro"')," markdown file for the ",(0,a.kt)("strong",{parentName:"li"},'"Articles"')," menu item has the name ",(0,a.kt)("strong",{parentName:"li"},'"intro.md"')," and the second ",(0,a.kt)("strong",{parentName:"li"},'"Intro"')," markdown file for the ",(0,a.kt)("strong",{parentName:"li"},'"TechCom"')," menu item has the name ",(0,a.kt)("strong",{parentName:"li"},'"introtechdoc.md"'),".")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Pay attention!")," ")),(0,a.kt)("p",null,"Both ",(0,a.kt)("strong",{parentName:"p"},'"Intro"')," markdown files and their corresponding ",(0,a.kt)("strong",{parentName:"p"},'"articles"')," and ",(0,a.kt)("strong",{parentName:"p"},'"techdoc"')," folders must be created only in the ",(0,a.kt)("strong",{parentName:"p"},'"docs"')," folder!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Two intro files",src:n(8756).Z,title:"Two intro files",width:"452",height:"162"})),(0,a.kt)("hr",null),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Open both ",(0,a.kt)("strong",{parentName:"li"},'"Intro"')," markdown files and add their own corresponding front matters to them:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"intro.md"')," should have ",(0,a.kt)("inlineCode",{parentName:"li"},"displayed_sidebar: articles"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Pay attention!"))),(0,a.kt)("p",null,"Do not rename ",(0,a.kt)("strong",{parentName:"p"},'"intro.md"')," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Front Matter for intro.md",src:n(1579).Z,title:"Front Matter for intro.md",width:"420",height:"211"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"introtechdoc.md"')," should have ",(0,a.kt)("inlineCode",{parentName:"li"},"displayed_sidebar: techdoc"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Front Matter for introtechdoc.md",src:n(7699).Z,title:"Front Matter for introtechdoc.md",width:"548",height:"191"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Open the "docusaurus.config.js" file and add two elements in the ',(0,a.kt)("inlineCode",{parentName:"li"},"items")," array. ")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Pay attention!"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarId"),"s have the same names as the corresponding folders names  (",(0,a.kt)("strong",{parentName:"p"},'"articles"')," and ",(0,a.kt)("strong",{parentName:"p"},'"techdoc"'),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"docId"),"s have the same names as the corresponding ",(0,a.kt)("strong",{parentName:"p"},'"Intro"')," markdown files (",(0,a.kt)("strong",{parentName:"p"},'"intro.md"')," and ",(0,a.kt)("strong",{parentName:"p"},'"introtechdoc.md"'),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"s have the names of your horizontal menu items (",(0,a.kt)("strong",{parentName:"p"},'"Articles"')," and ",(0,a.kt)("strong",{parentName:"p"},'"TechCom"'),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Two elements in the items array",src:n(9866).Z,title:"Two elements in the items array",width:"514",height:"584"})),(0,a.kt)("hr",null),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Open the "sidebars.js" file and add two elements (',(0,a.kt)("inlineCode",{parentName:"li"},"techdoc")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"articles"),") in the ",(0,a.kt)("inlineCode",{parentName:"li"},"const sidebars")," array. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"tutorialSidebar")," must be commented as you do not need it now.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Two elements in the const sidebars array",src:n(5491).Z,title:"Two elements in the const sidebars array",width:"740",height:"660"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"After you create new folders inside the horizontal menu item folders (",(0,a.kt)("strong",{parentName:"li"},'"articles"')," and ",(0,a.kt)("strong",{parentName:"li"},'"techdoc"'),"), they will appear as new subitems in the vertical menu. ")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Pay attention!"))),(0,a.kt)("p",null,"The new subitems in the vertical menu will appear only after you create new markdown files inside them. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Folder structure",src:n(7012).Z,title:"Folder structure",width:"768",height:"482"})))}m.isMDXComponent=!0},1579:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/articlesmdfrontmatter-021048e5e61599e6b69c8023751d7019.png"},5491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/constsidebar-50e495b3263588099399c291096d575d.png"},7012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/folderstructure-cbea97504217ee64caa838650a38b041.png"},9866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/itemsarrayelements-b4cf95760d261cda970c08582ca33a5a.png"},7699:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/techdocmdfrontmatter-8197ecf6d2cfff3fcda236e30037ef45.png"},8756:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/twointrofiles-ce15cc6da1fee8f2b3f5e128f3ad027d.png"},1489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/twomenuitems-56bcf632d097c587b3dfb2bfc617d274.png"}}]);
"use strict";(self.webpackChunkarticles=self.webpackChunkarticles||[]).push([[3171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=s,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(7462),s=(n(7294),n(3905));const r={},o="Four ways to make an API call in JavaScript",l={unversionedId:"techdoc/API/4waysapi",id:"techdoc/API/4waysapi",title:"Four ways to make an API call in JavaScript",description:"There are many ways to make an API call in different programming languages. In JavaScript an API could be called in four ways:",source:"@site/docs/techdoc/API/4waysapi.md",sourceDirName:"techdoc/API",slug:"/techdoc/API/4waysapi",permalink:"/docs/techdoc/API/4waysapi",draft:!1,editUrl:"https://github.com/SingingFoot/articles/docs/techdoc/API/4waysapi.md",tags:[],version:"current",frontMatter:{},sidebar:"techdoc",previous:{title:"Create an invite to sign for a merged document group",permalink:"/docs/techdoc/API/createinvite"},next:{title:"How to add a new top navigation bar item",permalink:"/docs/techdoc/Docusaurus/newsidebar"}},d={},i=[{value:"How to present API data in a table",id:"how-to-present-api-data-in-a-table",level:2},{value:"XMLHttpRequest",id:"xmlhttprequest",level:2},{value:"Fetch API",id:"fetch-api",level:2},{value:"Axios",id:"axios",level:2},{value:"JQuery",id:"jquery",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"four-ways-to-make-an-api-call-in-javascript"},"Four ways to make an API call in JavaScript"),(0,s.kt)("p",null,"There are many ways to make an API call in different programming languages. In JavaScript an API could be called in four ways:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"XMLHttpRequest\nFetch API\nAxios\nJQuery\n")),(0,s.kt)("p",null,"Use JSON ",(0,s.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/users"},"Placeholder")," service to get API data. It has an endpoint with 10 users data."),(0,s.kt)("h2",{id:"how-to-present-api-data-in-a-table"},"How to present API data in a table"),(0,s.kt)("p",null,"If you need to present API in the table, create an index.html file with the code showed below."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"index.html to present API data in a table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">\n</head>\n<body>\n    <h1 class="text-center">Storing API request in table</h1>\n    <div class="container">\n        <table class="table table-bordered">\n            <thead>\n              <tr class="table-primary">\n                <th scope="col">Id</th>\n                <th scope="col">Name</th>\n                <th scope="col">Username</th>\n                <th scope="col">Email</th>\n                <th scope="col">Address</th>\n              </tr>\n            </thead>\n            <tbody id="table_body">\n              <tr>\n                <td>name</td>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n                <td>@mdo</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n\n<script src="script.js"><\/script>\n</body>\n</html>\n'))),(0,s.kt)("h2",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,s.kt)("p",null,"All modern browsers have a built-in XMLHttpRequest object to request data from a server. The XMLHttpRequest object can be used to request data from a web server. One can see in the example below that API data could be presented in two ways:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"As a constant const ",(0,s.kt)("inlineCode",{parentName:"li"},"responseAPI")," to get all the data in the table."),(0,s.kt)("li",{parentName:"ol"},"In the browser console ",(0,s.kt)("inlineCode",{parentName:"li"},"console.log(responseAPI)"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"XMLHttpRequest gets API data in such a way"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'const request = new XMLHttpRequest();\nrequest.open("GET", "https://jsonplaceholder.typicode.com/users");\nrequest.send();//to get API data in Network => Preview browser tab\nrequest.onload = ()=>{\n    console.log(request);\n    if(request.status === 200) {\n        const responseAPI = JSON.parse(request.response);// to get API data as JSON in responseAPI constant\n        console.log(responseAPI); // to get API data as JSON in browser Console\n        let tableData="";\n        responseAPI.map((values)=>{\n        tableData+=`<tr>\n        <td>${values.id}</td>\n        <td>${values.name}</td>\n        <td>${values.username}</td>\n        <td>${values.email}</td>\n        <td>${values.address.street}, ${values.address.suite}, ${values.address.city}, ${values.address.zipcode},</td>\n      </tr>`;\n    });\n    document.getElementById("table_body").innerHTML=tableData;\n    } else {\n        console.log(`error ${request.status}`) // to handle errors\n    }\n}\n'))),(0,s.kt)("h2",{id:"fetch-api"},"Fetch API"),(0,s.kt)("p",null,"The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", but the new API provides a more powerful and flexible feature set.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch()")," method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request \u2014 as soon as the server responds with headers \u2014 even if the server response is an HTTP error status.\nThe API data received from the server is stored into ",(0,s.kt)("inlineCode",{parentName:"p"},"json")," object and can be placed in a constant"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"In the example below API data placed in responseAPI constant and presented in a table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'fetch(\'https://jsonplaceholder.typicode.com/users\')\n    .then(response=>{\n        return response.json();\n    }).then(json=>{\n        console.log(json);\n        const responseAPI = json;\n        let tableData="";\n        responseAPI.map((values)=>{\n        tableData+=`<tr>\n        <td>${values.id}</td>\n        <td>${values.name}</td>\n        <td>${values.username}</td>\n        <td>${values.email}</td>\n        <td>${values.address.street}, ${values.address.suite}, ${values.address.city}, ${values.address.zipcode},</td>\n      </tr>`;\n    });\n    document.getElementById("table_body").innerHTML=tableData;\n    })\n'))),(0,s.kt)("p",null,"There is also a second approach with fetch API using async function"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"There is also a second approach with fetch API using async function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'async function getUsers(){\n    let response = await fetch(\'https://jsonplaceholder.typicode.com/users\');\n    let data = await response.json();\n    return data;\n}\n\ngetUsers().then(response=>{\n    console.log(response);\n    const responseAPI = response;\n    let tableData="";\n    responseAPI.map((values)=>{\n    tableData+=`<tr>\n    <td>${values.id}</td>\n    <td>${values.name}</td>\n    <td>${values.username}</td>\n    <td>${values.email}</td>\n    <td>${values.address.street}, ${values.address.suite}, ${values.address.city}, ${values.address.zipcode},</td>\n  </tr>`;\n});\ndocument.getElementById("table_body").innerHTML=tableData;\n})\n'))),(0,s.kt)("h2",{id:"axios"},"Axios"),(0,s.kt)("p",null,"Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests."),(0,s.kt)("p",null,"To use the client visit its ",(0,s.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/intro"},"Axios website")," to find the corresponding CDN. Copy and paste that CDN to your index.html file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Use Axios like this to present API data in a table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'axios.get(\'https://jsonplaceholder.typicode.com/users\')\n     .then(response=>{\n        console.log(response.data);\n    const responseAPI = response.data;\n    let tableData="";\n    responseAPI.map((values)=>{\n    tableData+=`<tr>\n    <td>${values.id}</td>\n    <td>${values.name}</td>\n    <td>${values.username}</td>\n    <td>${values.email}</td>\n    <td>${values.address.street}, ${values.address.suite}, ${values.address.city}, ${values.address.zipcode},</td>\n  </tr>`;\n});\ndocument.getElementById("table_body").innerHTML=tableData;\n     }, err=>{\n        console.log(err);\n     })\n'))),(0,s.kt)("h2",{id:"jquery"},"JQuery"),(0,s.kt)("p",null,"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. "),(0,s.kt)("p",null,"To use the jQuery visit the ",(0,s.kt)("a",{parentName:"p",href:"https://cdnjs.com/libraries/jquery"},"CDNJS Library")," to find the corresponding CDN. Copy and paste that CDN to your index.html file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"><\/script>\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Use jQuery like this to present API data in a table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$(document).ready(function(){\n    $.ajax({\n        url:\'https://jsonplaceholder.typicode.com/users\',\n        type:"GET",\n        success:function(result){\n            console.log(result)\n            const responseAPI = result;\n            let tableData="";\n            responseAPI.map((values)=>{\n            tableData+=`<tr>\n            <td>${values.id}</td>\n            <td>${values.name}</td>\n            <td>${values.username}</td>\n            <td>${values.email}</td>\n            <td>${values.address.street}, ${values.address.suite}, ${values.address.city}, ${values.address.zipcode},</td>\n            </tr>`;\n            });\n            document.getElementById("table_body").innerHTML=tableData;\n        },\n        error:function(err){\n            console.log(err);\n        }\n\n    })\n})\n'))))}p.isMDXComponent=!0}}]);
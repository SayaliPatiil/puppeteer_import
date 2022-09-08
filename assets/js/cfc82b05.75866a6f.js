"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const p={sidebar_label:"FrameAddScriptTagOptions.path"},i="FrameAddScriptTagOptions.path property",o={unversionedId:"api/puppeteer.frameaddscripttagoptions.path",id:"version-17.1.2/api/puppeteer.frameaddscripttagoptions.path",title:"FrameAddScriptTagOptions.path property",description:"Path to a JavaScript file to be injected into the frame.",source:"@site/versioned_docs/version-17.1.2/api/puppeteer.frameaddscripttagoptions.path.md",sourceDirName:"api",slug:"/api/puppeteer.frameaddscripttagoptions.path",permalink:"/api/puppeteer.frameaddscripttagoptions.path",draft:!1,tags:[],version:"17.1.2",frontMatter:{sidebar_label:"FrameAddScriptTagOptions.path"},sidebar:"sidebar",previous:{title:"FrameAddScriptTagOptions",permalink:"/api/puppeteer.frameaddscripttagoptions"},next:{title:"FrameAddScriptTagOptions.type",permalink:"/api/puppeteer.frameaddscripttagoptions.type"}},c={},s=[{value:"Remarks",id:"remarks",level:2}],l={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameaddscripttagoptionspath-property"},"FrameAddScriptTagOptions.path property"),(0,n.kt)("p",null,"Path to a JavaScript file to be injected into the frame."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FrameAddScriptTagOptions {\n  path?: string;\n}\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," is a relative path, it is resolved relative to the current working directory (",(0,n.kt)("inlineCode",{parentName:"p"},"process.cwd()")," in Node.js)."))}d.isMDXComponent=!0}}]);
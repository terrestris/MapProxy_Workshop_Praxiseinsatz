"use strict";(self.webpackChunkmapproxy_ws=self.webpackChunkmapproxy_ws||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={},o="Seeding",s={unversionedId:"config/seed.yaml",id:"config/seed.yaml",title:"Seeding",description:"- Flexibles erzeugen, aktualisieren, l\xf6schen",source:"@site/docs/config/03-seed.yaml.md",sourceDirName:"config",slug:"/config/seed.yaml",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/config/seed.yaml",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mapproxy.yaml",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/config/mapproxy.yaml"},next:{title:"\xdcbungsaufgaben",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/exercises/"}},i={},p=[{value:"Bausteine",id:"bausteine",level:2},{value:"Beispiel einer Seed Task",id:"beispiel-einer-seed-task",level:2},{value:"Seed-Tool",id:"seed-tool",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"seeding"},"Seeding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flexibles erzeugen, aktualisieren, l\xf6schen"),(0,l.kt)("li",{parentName:"ul"},"Abh\xe4ngig von",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Zoom-Level"),(0,l.kt)("li",{parentName:"ul"},"Alter der Kacheln"),(0,l.kt)("li",{parentName:"ul"},"Lage")))),(0,l.kt)("h2",{id:"bausteine"},"Bausteine"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("i",null,"seeds")),(0,l.kt)("td",null,"Welche Kacheln (neu) erzeugt werden sollen")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("i",null,"cleanups")),(0,l.kt)("td",null,"Welche Kacheln gel\xf6scht werden sollen")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("i",null,"coverages")),(0,l.kt)("td",null,"Geometrien zum Beschr\xe4nken des Seeding")))),(0,l.kt)("h2",{id:"beispiel-einer-seed-task"},"Beispiel einer Seed Task"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"seeds:\n  myseed:\n    caches: [osm_cache]\n    grids: [GLOBAL_MERCATOR]\n    refresh_before:\n      weeks: 3\n    levels:\n      to: 12\n")),(0,l.kt)("h2",{id:"seed-tool"},"Seed-Tool"),(0,l.kt)("p",null,"Erzeugt eine \xdcbersicht \xfcber alle Tasks in einer seed-Konfiguration (-s seed.yaml) f\xfcr eine MapProxy-Konfiguration (-f mapproxy.yaml):  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mapproxy-seed -s seed.yaml -f mapproxy.yaml --summary\n")),(0,l.kt)("p",null,"Seed eines Tasks:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"% mapproxy-seed -s seed.yaml -f mapproxy.yaml --seed myseed\n")),(0,l.kt)("p",null,"Paralleles Seeden:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"% mapproxy-seed -s seed.yaml -f mapproxy.yaml -c 4\n")),(0,l.kt)("p",null,"Der Seeding-Prozess kann unterbrochen und forgesetzt werden sowie terminiert werden (siehe: ",(0,l.kt)("a",{parentName:"p",href:"https://mapproxy.org/docs/latest/seed.html#options"},"https://mapproxy.org/docs/latest/seed.html#options"),")."))}d.isMDXComponent=!0}}]);
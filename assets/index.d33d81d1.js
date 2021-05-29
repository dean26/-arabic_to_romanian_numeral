var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,l)=>{for(var a in l||(l={}))t.call(l,a)&&n(e,a,l[a]);if(r)for(var a of r(l))o.call(l,a)&&n(e,a,l[a]);return e};import{r as a,o as i,c as s,a as c,t as d,w as u,b as p,d as m,v as h,F as f,e as x,f as b,g as w,h as v}from"./vendor.673d6094.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,l)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),n(s)},onload(){r(self[t].moduleMap[a]),n(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");var g={data:function(){return{title:"Arabic numerals to romanian numerals converter"}}};const k={class:"flex items-center justify-center h-screen"},y={class:"bg-indigo-800 font-mono text-white font-bold rounded-lg border shadow-lg p-10"},j={class:"border-b-2 border-purple-500 mb-3 text-center text-4xl tracking-wide"},M={class:"border-t-2 border-purple-700 mt-4 p-2 text-center"},C=p("Home"),B=p("   "),L=p("Contact");g.render=function(e,t,r,o,n,l){const p=a("router-view"),m=a("router-link");return i(),s("div",k,[c("div",y,[c("h1",j,d(e.title),1),c(p),c("p",M,[c(m,{to:"/",class:"font-light hover:text-purple-700"},{default:u((()=>[C])),_:1}),B,c(m,{to:"/kontakt",class:"font-light hover:text-purple-700"},{default:u((()=>[L])),_:1})])])])};var O={props:{digit:Number,clickButton:{type:Function}}};const _={class:"my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2"};O.render=function(e,t,r,o,n,l){return i(),s("div",_,[c("button",{onClick:t[1]||(t[1]=e=>r.clickButton(r.digit)),class:"w-full cursor-pointer rounded bg-red-600 text-white text-2xl hover:text-black hover:bg-red-400 font-extrabold p-2"},d(r.digit),1)])};var z={convert_value:{1e3:"M",900:"CM",500:"D",400:"CD",100:"C",90:"XC",50:"L",40:"XL",10:"X",9:"IX",5:"V",4:"IV",1:"I"},convert(e){if(e>0){const t=Object.keys(this.convert_value).reverse();let r,o,n="";for(let l in t)if(e>=t[l])for(r=Math.floor(e/t[l]),e-=r*t[l],o=1;o<=r;o++)n+=this.convert_value[t[l]];return n}return""}};const U={data:function(){return{arabic:"",romanian:"",message:"Tesst"}},methods:l(l({},z),{reverseMessage:function(){this.message=this.message.split("").reverse().join("")},clickDigit:function(e){this.arabic+=e.toString()},reset:function(){this.arabic=""},backSpace:function(){this.arabic.length>0&&(this.arabic=this.arabic.substr(0,this.arabic.length-1))}}),components:{Button:O},watch:{arabic:function(){this.romanian=z.convert(Number(this.arabic))}}},R={class:"flex flex-wrap -mx-2 overflow-hidden md:-mx-2"},V={class:"my-2 px-2 w-1/2 overflow-hidden md:my-2 md:px-2"},P={class:"border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"},S={class:"my-2 px-2 w-1/2 overflow-hidden md:my-2 md:px-2"},A={class:"border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"},D={class:"my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2"},F=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})],-1),I=c("div",{class:"my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2"},null,-1),X={class:"my-2 px-2 w-1/3 overflow-hidden md:my-2 md:px-2"},$=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);U.render=function(e,t,r,o,n,l){const d=a("Button");return i(),s("div",R,[c("div",V,[c("div",P,[c("p",null,[m(c("input",{id:"name",autocomplete:"false",placeholder:"Arabic",tabindex:"0",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.arabic=t),class:"py-1 px-1 text-gray-900 outline-none block h-full w-full text-4xl"},null,512),[[h,e.arabic]])])])]),c("div",S,[c("div",A,[c("p",null,[m(c("input",{id:"name",autocomplete:"false",placeholder:"Romanian",disabled:"",tabindex:"0",type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.romanian=t),class:"py-1 px-1 text-gray-900 outline-none block h-full w-full text-4xl"},null,512),[[h,e.romanian]])])])]),(i(),s(f,null,x(9,(e=>c(d,{key:e,digit:e,clickButton:l.clickDigit},null,8,["digit","clickButton"]))),64)),c("div",D,[c("button",{onClick:t[3]||(t[3]=(...e)=>l.backSpace&&l.backSpace(...e)),class:"w-full flex items-center justify-center cursor-pointer rounded bg-gradient-to-r from-purple-400 to-indigo-800 text-white text-2xl hover:text-black font-extrabold p-2"},[F])]),I,c("div",X,[c("button",{onClick:t[4]||(t[4]=(...e)=>l.reset&&l.reset(...e)),class:"w-full flex items-center justify-center cursor-pointer rounded bg-gradient-to-r to-purple-400 from-indigo-800 text-white text-2xl hover:text-black font-extrabold p-2"},[$])])])};var E={data:function(){return{author:"Łukasz Przeździęk",email:"l.przezdziek@gmail.com",website:"dean26.pl"}}};const H={class:"relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow-xl text-purple-700"},N={class:"text-xl font-semibold my-2"},T={class:"flex space-x-2 text-gray-400 text-sm"},q=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),G={href:"https://{{ website }}",class:"hover:text-black"},J={class:"flex space-x-2 text-gray-400 text-sm my-3"},K=c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),Q={href:"mailto: {{ email }}",class:"hover:text-black"};E.render=function(e,t,r,o,n,l){return i(),s("div",H,[c("div",null,[c("p",N,"Author: "+d(e.author),1),c("div",T,[q,c("p",null,[c("a",G,d(e.website),1)])]),c("div",J,[K,c("p",null,[c("a",Q,d(e.email),1)])])])])};const W=[{path:"/",component:U},{path:"/kontakt",component:E}],Y=b({history:w(),routes:W}),Z=v(g);Z.use(Y),Z.mount("#app");
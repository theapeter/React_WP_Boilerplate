(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,n=window.React,l=function(){const[e,l]=(0,n.useState)(0);return(0,t.createElement)("div",{className:"example-react-component",onClick:()=>l((e=>e+1))},(0,t.createElement)("h1",null,"Hello from React!"),(0,t.createElement)("p",null,"You have clicked on this component ",e," times!!"))},r=function(){const[e,l]=(0,n.useState)(0);return(0,t.createElement)("div",{className:"example-react-component",onClick:()=>l((e=>e+1))},(0,t.createElement)("h1",null,"Hello from component 2!"),(0,t.createElement)("p",null,"You have clicked on this component ",e," times!!"))},o=window.ReactDOM;var c=e.n(o);new class{constructor(e){this.name=e,this.greet()}greet(){console.log(`Hello, my name is ${this.name}.`)}}("Brad"),c().render((0,t.createElement)((function(){return(0,t.createElement)("div",null,(0,t.createElement)(l,null),(0,t.createElement)(r,null))}),null),document.querySelector("#render-react-example-here"))})();
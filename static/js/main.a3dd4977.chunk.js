(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(20).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(20),n.p+"static/media/Crosshairs1.1e82ecdc.svg"),l=(n(21),n(0)),o=function(){return Object(l.jsx)("div",{className:"crosshairs-1 flicker",children:Object(l.jsx)("object",{data:i,type:"image/svg+xml",children:"Crosshairs Decoration"})})},u=n.p+"static/media/Crosshairs2.2aa8b814.svg",j=(n(23),function(){return Object(l.jsx)("div",{className:"crosshairs-2 flicker",children:Object(l.jsx)("object",{data:u,type:"image/svg+xml",children:"Crosshairs Decoration"})})}),d=n(6),m=n.n(d),b=n(9),x=n(4),h=n(13),f=n(10),O=n(11),p=n(15),v=n(12),g=n.p+"static/media/A.86945a95.svg",y=n.p+"static/media/B.39c019e1.svg",N=n.p+"static/media/Z.1e5cf138.svg",A=n.p+"static/media/K.ade2f13e.svg",k=n.p+"static/media/LineBreak.66938177.svg",w=n.p+"static/media/Underscore.a74d7d00.svg",L=(n(25),n(26),n(27),n(28),function(e){return Object(l.jsx)("img",{src:e.svg,alt:"Letter",className:"Letter flicker "+e.className})});function E(e){return new Promise((function(t,n){setTimeout((function(){t(e)}),e)}))}n(29);function T(){var e=document.querySelectorAll(".Letter, .name h1, .flicker");console.log(e);var t,n=Object(x.a)(e);try{var c=function(){var e=t.value;setTimeout((function t(){setTimeout((function(){e.classList.add("flicker-animation"),setTimeout((function(){e.classList.remove("flicker-animation"),t()}),1e3)}),C(1e4,3e4))}),C(0,1e4))};for(n.s();!(t=n.n()).done;)c()}catch(a){n.e(a)}finally{n.f()}}function C(e,t){return Math.floor(Math.random()*t)+e}var M=a.a.createRef(),R=[];var S=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{ref:M,className:"name",children:[Object(l.jsxs)("span",{className:"offset",children:[Object(l.jsx)("h1",{children:"M"}),Object(l.jsx)(L,{svg:g}),Object(l.jsx)("h1",{children:"X"}),Object(l.jsx)(L,{svg:k})]}),Object(l.jsx)("br",{}),Object(l.jsx)(L,{svg:N}),Object(l.jsx)("h1",{children:"A"}),Object(l.jsx)(L,{svg:y}),Object(l.jsx)("h1",{children:"A"}),Object(l.jsx)("h1",{children:"R"}),Object(l.jsx)(L,{svg:A}),Object(l.jsx)("h1",{children:"A"}),Object(l.jsx)(L,{className:"cursor",svg:w}),Object(l.jsx)("div",{className:"glitch-wrapper",children:Object(l.jsx)("h2",{"data-text":"_DEVELOPER",className:"glitch-text",children:"_DEVELOPER"})})]})}},{key:"componentDidMount",value:function(){this.animate(0),R=Object(h.a)(M.current.querySelectorAll("h1, img"));var e,t=Object(x.a)(R);try{for(t.s();!(e=t.n()).done;){e.value.style="visibility: hidden"}}catch(n){t.e(n)}finally{t.f()}}},{key:"animate",value:function(){var e=Object(b.a)(m.a.mark((function e(t){var n,c,a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Run"),e.next=3,E(30);case 3:if(n=R[t],c=null,!R[t+1]){e.next=10;break}c=n.cloneNode(!0),n.style="",e.next=15;break;case 10:return e.next=12,E(70);case 12:return R[t].style="",T(),e.abrupt("return");case 15:a=0;case 16:if(!(a<2)){e.next=27;break}return(s=document.createElement("h1")).innerText=(r="!<>-_\\/[]{}\u2014=+*^?#_>")[Math.floor(Math.random()*r.length+0)],s.style="transform: none",n.parentNode.replaceChild(s,n),n=s,a++,e.next=25,E(70);case 25:e.next=16;break;case 27:c.style="",n.parentNode.replaceChild(c,n),this.animate(t+1);case 30:case"end":return e.stop()}var r}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(a.a.Component),D=(n(30),function(e){var t=null;return"grid"===e.type?t="bg grid-bg":"dots-1"===e.type&&(t="bg dots-1-bg"),Object(l.jsx)("div",{className:t})}),q=n(14),_=n(7),B=function(e){var t=0,n=0,c=function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]},a=Object(_.b)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),s=Object(q.a)(a,2),r=s[0],i=s[1];return window.addEventListener("mousemove",(function(e){var a=e.clientX,s=e.clientY;requestAnimationFrame(i.bind(null,{xy:c(a,s)})),t=a,n=s})),e.mouseOnly||window.addEventListener("scroll",(function(){console.log(document.documentElement.scrollTop||document.body.scrollTop),requestAnimationFrame(i.bind(null,{xy:c(t,n)}))}),!1),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(_.a.div,{style:{transform:r.xy.interpolate((function(t,n){return"translate3d(".concat(t/e.parallaxAmount,"px,").concat(n/e.parallaxAmount-(document.documentElement.scrollTop||document.body.scrollTop)*e.parallaxAmount*.08*(e.mouseOnly?0:1),"px,0)")}))},children:e.children})})},P=n.p+"static/media/triangle7.e28a37f3.png",F=(n(31),function(){return Object(l.jsx)("div",{className:"Triangle flicker",children:Object(l.jsx)("img",{src:P,alt:"Triangle"})})}),I=n.p+"static/media/button5.46b7bbd9.png",J=n.p+"static/media/button5rectangle.37f1607b.svg",V=(n(32),n(33),function(e){return Object(l.jsxs)("div",{className:"flicker Label Label-1",children:[Object(l.jsx)("img",{class:"label-image",src:I,alt:e.alt}),Object(l.jsx)("img",{class:"label-rectangle",src:J,alt:""}),Object(l.jsx)("h2",{class:"number",children:"00"}),Object(l.jsx)("h2",{class:"text",children:"INTRO"})]})}),X=n.p+"static/media/Scroll.7e6b6b84.svg",H=(n(34),n.p+"static/media/triangle1.9799aaed.png"),K=function(){return Object(l.jsxs)("div",{class:"Scroll",children:[Object(l.jsx)("img",{className:"stripes",src:X,alt:"Scroll"}),Object(l.jsx)("div",{className:"glitch-wrapper",children:Object(l.jsx)("h2",{"data-text":"Scroll",className:"glitch-text",children:"SCROLL"})}),Object(l.jsx)("img",{className:"triangle",src:H,alt:""})]})};var U=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(B,{parallaxAmount:12,children:Object(l.jsx)(D,{type:"grid"})}),Object(l.jsx)(B,{parallaxAmount:6,children:Object(l.jsx)(D,{type:"dots-1"})}),Object(l.jsxs)("main",{className:"Main",children:[Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:13,children:Object(l.jsx)(o,{})}),Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:15,children:Object(l.jsx)(S,{})}),Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:15,children:Object(l.jsx)(j,{})}),Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:10,children:Object(l.jsx)(F,{})}),Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:13,children:Object(l.jsx)(V,{})}),Object(l.jsx)(B,{mouseOnly:!0,parallaxAmount:13,children:Object(l.jsx)(K,{})})]})]})};r.a.render(Object(l.jsx)(U,{}),document.getElementById("root"))}]),[[35,1,2]]]);
//# sourceMappingURL=main.a3dd4977.chunk.js.map
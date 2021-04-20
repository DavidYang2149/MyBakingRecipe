(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{153:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"n",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return u})),n.d(t,"o",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"b",(function(){return x}));var r=n(62);const a=r.a.label`
  display: ${e=>e.display};
  font-size: 1.1rem;
  font-weight: 700;
  min-width: 100px;
  width: ${e=>e.width};
  margin: 0.125rem;
  padding: 0.5rem;
`,i=r.a.label`
  display: ${e=>e.display};
  font-size: 1.1rem;
  font-weight: 700;
  min-width: 100px;
  width: ${e=>e.width};
  margin: 0.125rem;
  padding: 0.5rem;

  :before {
  color: #ed5464;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 5px;
  content: '*';

  }
`,o=r.a.input`
  color: #000;
  display: ${e=>e.display};
  min-width: 100px;
  width: ${e=>e.width};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  height: 24px;
  margin: 0.5rem;
  padding: 0.75rem;
`,c=r.a.select`
  color: #000;
  min-width: 100px;
  width: ${e=>e.width};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  height: 48px;
  margin: 0.5rem;
  padding: 0.75rem;
`,s=r.a.span`
  font-size: 1.2rem;
  font-weight: 700;
`,l=r.a.textarea`
  color: #000;
  min-width: 300px;
  min-height: 200px;
  width: 70%;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  margin: 0.5rem;
  padding: 0.75rem;
`,d=r.a.button`
  color: #361d74;
  padding: 5px 7px;
  font-size: 1.025rem;
  font-weight: 600;
  background: transparent;
  border-radius: 6px;
  border-color: #361d74;
  cursor: pointer;
  margin: 10px;
  transition: 0.5s;
  opacity: 0.8;
  
  :disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  :hover:enabled {
    opacity: 1.0;
    transition: 0.5s;
  }
`,m=r.a.span`
  margin-left: 8px;
  margin-bottom: 5px;
  position: relative;  
  background: #000;  
  display: inline-block;
  width: 26px;
  height: 4px;
  border-radius: 4px;

  ::before {
  position: absolute;
  background: #000;  
  top: -10px;
  width: 26px;
  height: 4px;
  border-radius: 4px;
  content: '';

  }

  ::after {
  background: #000;  
  position: absolute;
  top: 10px;
  width: 26px;
  height: 4px;
  border-radius: 4px;
  content: '';
  }
`,p=r.a.img`
  margin: 0.125rem;
  padding: 0.5rem;
`,u=r.a.div`
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`,g=r.a.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`,h=r.a.span`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1.5rem;
  
  :before {
    content: 'by ';
    font-size: 1rem;
    font-weight: 500;
  }
`,b=r.a.span`
  font-size: 0.9rem;
  font-weight: 400;
  margin-left: 1.5rem;
`,f=r.a.hr`
  margin-top: 10px;
  width: 95%;
  border: none;
  border-radius: 2px;
  padding: 2px 0;
  letter-spacing: 5px;
  background-color: rgb(245, 174, 69);
  opacity: 0.8;
  animation: showline 1s ease-out 1;

  @keyframes showline {
    0% {
      width: 0%;
    }
    100% {
      width: 96%;
    }
  }
`,x=r.a.div`
  text-align: center;

  img {
    width: 70%;
    height: 70%;
    margin-bottom: 20px;
  }
`},154:function(e,t,n){"use strict";var r=n(1),a=n.n(r),i=n(153);t.a=()=>a.a.createElement(i.b,null,a.a.createElement(i.f,{id:"displayImage",src:"images/page_not_found.svg",alt:"recipe"}),a.a.createElement(i.n,null,"해당 페이지를 찾을 수 없습니다."))},161:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(43),o=n(62);const c=o.a.article`
  margin: 0 auto;
  /* text-align: center; */
  max-width: 600px;
  min-height: 80vh;
  max-height: 100vh;
`,s=o.a.ul`
  min-height: 70vh;
  max-height: 90vh;
  overflow: scroll;
  padding: 20px 20px 10px 20px;
  border-radius: 5px;
  background-color: #f8f8ef;

  .continueMessage {
    margin-top: -9px;
  }
`,l=o.a.li`
  text-align: left;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;

  div {
    display:inline-flex;
  }

  div > div {
    display: block;
  }

  div > img {
    display: block;
    width: 40px;
    height: 40px;
    margin: 2px 5px;
    border-radius: 50%;
  }

  .hidden {
    width: 50px;
  }

  div > span {
    font-size: 1.1rem;
    font-weight: 700;
  }

  div > p {
    font-size: 1rem;
    font-weight: 400;
    border-radius: 25px 25px 25px 0px;
    padding: 10px 15px 10px 15px;
    color: black;
    background: #e5e5ea;
  }
`,d=o.a.li`
  text-align: right;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row-reverse;

  div {
    display:inline-flex;
  }

  div > div {
    display: block;
  }

  div > img {
    width: 40px;
    height: 40px;
    margin: 2px 5px;
    border-radius: 50%;
  }

  .hidden {
    width: 50px;
  }

  div > span {
    font-size: 1.1rem;
    font-weight: 700;
  }

  div > p {
    font-size: 1rem;
    font-weight: 400;
    border-radius: 25px 25px 0px 25px;
    padding: 10px 15px 10px 15px;
    color: white;
    background: #0994f6;
  }
`,m=o.a.div`
  display: flex;
  text-align: center;
`,p=o.a.input`
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  width: 80%;
  height: 24px;
  padding: 1rem;
`,u=o.a.button`
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.25rem;
  width: 20%;
  height: 60px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0.8;
  
  :disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  :hover:enabled {
    opacity: 1.0;
    transition: 0.5s;
  }
`;var g=n(9);const h=({chat:e,owner:t,preUser:n})=>Object(g.h)(e.user)(t)&&Object(g.k)(e.user)(n)?a.a.createElement(d,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("span",null,e.user),a.a.createElement("p",null,e.message)),a.a.createElement("img",{src:"images/user-solid-circle.svg",alt:"User"}))):Object(g.h)(e.user)(t)&&Object(g.h)(e.user)(n)?a.a.createElement(d,{className:"continueMessage"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("p",null,e.message)),a.a.createElement("span",{className:"hidden"}))):Object(g.k)(e.user)(t)&&Object(g.h)(e.user)(n)?a.a.createElement(l,{className:"continueMessage"},a.a.createElement("div",null,a.a.createElement("span",{className:"hidden"}),a.a.createElement("div",null,a.a.createElement("p",null,e.message)))):a.a.createElement(l,null,a.a.createElement("div",null,a.a.createElement("img",{src:"images/user-solid-circle.svg",alt:"User"}),a.a.createElement("div",null,a.a.createElement("span",null,e.user),a.a.createElement("p",null,e.message))));var b=a.a.memo(h);const f=({chatList:e,owner:t,lastChat:n})=>Object(g.i)(e)?a.a.createElement(a.a.Fragment,null):(Object(r.useEffect)(()=>{n.current.scrollIntoView({behavior:"smooth"})},[]),a.a.createElement(s,null,Object(g.j)(e.length)&&e.map((n,r)=>{const i=r?e[r-1].user:"";return a.a.createElement(b,{key:n.created,chat:n,owner:t,preUser:i})}),a.a.createElement("div",{ref:n})));var x=a.a.memo(f);const w=({message:e,onChangeMessage:t,onKeyPressMessage:n,onSubmit:r})=>a.a.createElement(m,null,a.a.createElement(p,{type:"text",name:"message",onChange:t,onKeyPress:n,placeholder:"메시지를 입력하세요",value:e}),a.a.createElement(u,{type:"button",onClick:r,disabled:Object(g.e)(e)},"Send"));var v=a.a.memo(w),E=n(88),j=n(154),O=n(90);var y=()=>{const e=Object(i.c)(),t=Object(r.useRef)(),[n,o]=Object(r.useState)(0),{user:{userId:s},chat:{chatList:l,message:d}}=Object(i.d)(e=>({user:e.user,chat:e.chat}));Object(r.useEffect)(()=>{if(e=-1,Object(g.h)(n)(e))return;var e;if((e=>Object(g.f)(5)(e))(n)&&Object(g.e)(s))return void o(-1);if((e=>Object(g.g)(5)(e))(n)&&Object(g.j)(s))return void o(0);const t=setTimeout(()=>o(n+1),1e3);return()=>clearTimeout(t)},[s,n]);const m=Object(g.d)(s)("@"),p=Object(r.useCallback)(t=>{const{name:n,value:r}=t.target;e(Object(O.a)({name:n,value:r}))},[e]),u=Object(r.useCallback)(async n=>{Object(g.e)(d.trim())||Object(g.h)(n.key)("Enter")&&(await e(Object(O.d)()),t.current.scrollIntoView({behavior:"smooth"}))},[e,d]),h=Object(r.useCallback)(async()=>{Object(g.e)(d)||(await e(Object(O.d)()),t.current.scrollIntoView({behavior:"smooth"}))},[e,d]);return Object(g.e)(s)&&Object(g.h)(n)(-1)?a.a.createElement(j.a,null):Object(g.e)(s)?a.a.createElement(E.a,null):a.a.createElement(c,null,a.a.createElement(x,{chatList:l,owner:m,lastChat:t}),a.a.createElement(v,{message:d,onChangeMessage:p,onKeyPressMessage:u,onSubmit:h}))},k=n(14);t.default=()=>{const e=Object(i.c)();return Object(r.useEffect)(()=>{e(Object(O.c)())},[]),Object(r.useEffect)(()=>{k.b.collection("messages").orderBy("created").onSnapshot(()=>{e(Object(O.c)())})},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null))}}}]);
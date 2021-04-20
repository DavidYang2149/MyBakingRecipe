(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{162:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(43),r=a(15),o=a(78),s=a(62);const l=s.a.nav`
display: flex;
justify-content: space-between;
background: #fff;
align-items: center;
padding: 10px;
`,p=s.a.h1`
  color: #1f2a37;
  font-size: 2rem;
  font-weight: 800;
  font-family: sans-serif;
  padding-left: 20px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`,m=s.a.p`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 10px;
`,d=s.a.button`
  color: #361d74;
  margin: 10px;
  padding: 5px 7px;
  font-size: 1.025rem;
  font-weight: 600;
  border-radius: 6px;
  border-color: #361d74;
  background: transparent;
  cursor: pointer;
  opacity: 0.8;
  
  :hover {
    opacity: 1.0;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`,u=s.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=s.a.img`
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,b=s.a.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;var h=a(9);const w=({userId:e,signInWithGoogle:t,signOut:a})=>{const n=Object(r.f)(),c=()=>{n.push("/recipewrite/0")},s=()=>{n.push("/chat")};return i.a.createElement(l,null,i.a.createElement("div",null,i.a.createElement(o.b,{to:"/"},i.a.createElement(g,{src:"images/home.svg",alt:"Home"})),i.a.createElement(o.b,{to:"/"},i.a.createElement(p,null,"My Baking Recipe"))),e?i.a.createElement(u,null,i.a.createElement(m,null,i.a.createElement(o.b,{to:"/"},Object(h.d)(e)("@"))),i.a.createElement(d,{type:"button",onClick:s},"Chat"),i.a.createElement(d,{type:"button",onClick:c},"New Recipe"),i.a.createElement(d,{type:"button",onClick:a},"Logout"),i.a.createElement(b,{src:"images/chat-bubble-dots.svg",onClick:s,alt:"Chat"}),i.a.createElement(b,{src:"images/new-recipe.svg",onClick:c,alt:"New Recipe"}),i.a.createElement(b,{src:"images/close-outline.svg",onClick:a,alt:"Logout"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{type:"button",onClick:t},"Sign in (Google)"),i.a.createElement(b,{src:"images/login-google.svg",onClick:t,alt:"singIn"})))};var f=i.a.memo(w),x=a(70),E=a(14),y=a(80);t.default=()=>{const e=Object(c.c)(),{user:{userId:t}}=Object(c.d)(e=>({user:e.user})),a=Object(n.useCallback)(async()=>{const{user:{email:t}}=await E.a.signInWithPopup(E.d);Object(h.j)(t)&&(Object(y.b)("user",t),e(Object(x.d)({name:"userId",value:t})))},[e]),r=Object(n.useCallback)(async()=>{await E.a.signOut(),e(Object(x.a)())},[e]);return i.a.createElement(f,{userId:t,signInWithGoogle:a,signOut:r})}}}]);
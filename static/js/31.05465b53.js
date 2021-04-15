(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{160:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),i=r(43),o=r(89),c=r(78),l=r(62);const s=l.a.ul`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }
`,m=l.a.li`
  margin: 0 1rem;
  margin-bottom: 3rem;
  background-color: #f8f8ef;
  border-radius: 5px;

  :hover {
  overflow: hidden;
  box-shadow: 0 5px 10px 0px rgba(0,0,0,0.1);
  transform: translatey(0px);
  animation: float 1s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-2px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @media (min-width: 600px) {
    width: 44%;
  }

  @media (min-width: 768px) {
    width: 29%;
  }

  /* @media (min-width: 1024px) {
    width: 30%;
  } */

  .card-image {
    height: 0;
    padding-bottom: 60%;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 5px 5px 0 0;

    img {
      display: none;
    }
  }

  .card-desc {
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 0.5rem;

      strong {
        font-weight: bold;
      }
    }

    .card-created {
      font-size: 0.8rem;
      color: gray; 
    }
  }
`;var d=r(9);const p=({recipe:e})=>!Object(d.e)(e)&&n.a.createElement(m,null,n.a.createElement(c.b,{to:"/recipe/"+e.id},n.a.createElement("figure",{className:"card-image",style:{backgroundImage:`url(${e.image||"images/cookie.jpeg"})`}},n.a.createElement("img",{src:e.image||"images/cookie.jpeg",alt:"recipe"})),n.a.createElement("div",{className:"card-desc"},n.a.createElement("h1",null,e.title),n.a.createElement("p",null,e.description.length>30?e.description.substring(0,30)+"...":e.description),n.a.createElement("p",{className:"card-created"},e.created.substr(0,10)),n.a.createElement("p",null,"by"," ",n.a.createElement("strong",null,Object(d.d)(e.userId)("@"))))));var g=n.a.memo(p);const u=({recipesBook:e})=>Object(d.i)(e)?n.a.createElement("div",null,"Empty"):n.a.createElement(s,{className:"card-list"},e.map(e=>n.a.createElement(g,{key:e.id,recipe:e})));var b=n.a.memo(u),f=r(88);var h=()=>{const{recipes:{recipesBook:e}}=Object(i.d)(e=>({recipes:e.recipes}));return Object(d.e)(e.length)?n.a.createElement(f.a,null):n.a.createElement("article",null,n.a.createElement(b,{recipesBook:e}))};var E=({root:e=null,target:t,onIntersect:r,threshold:n=1,rootMargin:i="50px"})=>{Object(a.useEffect)(()=>{const a=new IntersectionObserver(r,{root:e,rootMargin:i,threshold:n});if(!Object(d.e)(t))return a.observe(t),()=>a.unobserve(t)},[t,e,i,r,n])};t.default=()=>{const e=Object(i.c)(),[t,r]=Object(a.useState)(null);return E({target:t,onIntersect:([{isIntersecting:t}])=>{t&&e(Object(o.b)())}}),n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{ref:r}))}}}]);
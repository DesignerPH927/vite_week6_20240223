import{_ as c,r as o,o as r,c as l,a,b as n,w as e,d as s,F as p}from"./index-IZRPLD-R.js";const u={},g={class:"navbar navbar-expand-lg bg-color fixed-top"},h={class:"container-fluid"},m=a("a",{class:"navbar-brand text-white",href:"#"},"Week6",-1),f=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),$={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav"},k={class:"nav-item"},N={class:"nav-item"},C={class:"nav-item"};function w(i,_){const t=o("RouterLink");return r(),l("nav",g,[a("div",h,[m,f,a("div",$,[a("ul",x,[a("li",k,[n(t,{to:"/",class:"nav-link"},{default:e(()=>[s("首頁")]),_:1})]),a("li",N,[n(t,{to:"/products",class:"nav-link"},{default:e(()=>[s("產品列表")]),_:1})]),a("li",C,[n(t,{to:"/carts",class:"nav-link"},{default:e(()=>[s("購物車列表")]),_:1})])])])])])}const F=c(u,[["render",w]]),R={},V={class:"navbar navbar-expand-lg bg-color"},L={class:"container-fluid"},B=a("a",{class:"navbar-brand text-white",href:"#"},"Week6",-1),T=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),y={class:"collapse navbar-collapse",id:"navbarNav"},W={class:"navbar-nav"},E={class:"nav-item"};function j(i,_){const t=o("RouterLink");return r(),l("nav",V,[a("div",L,[B,T,a("div",y,[a("ul",W,[a("li",E,[n(t,{to:"/login",class:"nav-link"},{default:e(()=>[s("登入後台")]),_:1})])])])])])}const q=c(R,[["render",j]]),z={components:{NavbarComponent:F,FooterComponent:q}},A=a("div",{class:"container"},null,-1);function D(i,_,t,G,H,I){const d=o("NavbarComponent"),v=o("RouterView"),b=o("FooterComponent");return r(),l(p,null,[n(d),n(v),A,n(b)],64)}const K=c(z,[["render",D]]);export{K as default};
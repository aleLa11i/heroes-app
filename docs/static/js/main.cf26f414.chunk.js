(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t(18),n=t.n(c),s=t(11),i=Object(r.createContext)(null),o=t(2),l="[auth] login",h="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},j=Object(r.createContext)(null),d=t(5),b=t(3),p=t(0),m=function(e){var a=e.history,t=Object(r.useState)({name:"",password:"",email:""}),c=Object(s.a)(t,2),n=c[0],h=c[1],u=n.name,j=n.password,d=n.email,b=Object(r.useContext)(i).dispatch;return Object(p.jsxs)("div",{className:"container mt-5",children:[Object(p.jsx)("h1",{children:" Bienvenido "}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",placeholder:"Ingrese nombre..",name:"textValue",className:" form-control",onChange:function(e){h(Object(o.a)(Object(o.a)({},n),{},{name:e.target.value}))}}),Object(p.jsx)("input",{type:"password",placeholder:"Ingrese contrase\xf1a..",name:"textValue",className:" form-control",onChange:function(e){h(Object(o.a)(Object(o.a)({},n),{},{password:e.target.value}))}}),Object(p.jsx)("button",{className:"btn btn-success",onClick:function(e){if(e.preventDefault(),u.length>=2&&j.length>8){var t=localStorage.getItem("lastPath")||"/";a.replace(t),b({type:l,payload:{name:u,password:j,email:d}})}},children:"Login"})]})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=function(e){var a=e.id,t=e.superhero;e.publisher,e.alter_ego,e.first_appearance,e.characters;return Object(p.jsxs)("div",{className:"hero-img",children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("img",{src:"./assets/".concat(a,".jpg"),alt:"hero"}),Object(p.jsx)(d.b,{to:"./hero/".concat(a),children:"Mas..."})]})},x=function(e){var a=e.value,t=Object(r.useMemo)((function(){return function(e){if("DC Comics"!==e&&"Marvel Comics"!==e)throw new Error("".concat(e," invalido, ingrese DC Comics o Marvel"));return O.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(p.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:t.map((function(e,a){return Object(r.createElement)(v,Object(o.a)(Object(o.a)({},e),{},{key:a}))}))})},g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" DC "}),Object(p.jsx)(x,{value:"DC Comics"})]})},f=function(e){var a=e.history,t=Object(b.h)().heroID,c=Object(r.useMemo)((function(){return function(e){return O.find((function(a){return a.id===e}))}(t)}),[a]);if(!c)return Object(p.jsx)(b.a,{to:"./"});var n=c.id,s=c.superhero,i=c.publisher,o=c.characters,l=c.alter_ego,h=c.first_appearance;return Object(p.jsxs)("div",{className:"conteiner-HeroesScreen animate__animated animate__backInLeft",children:[Object(p.jsx)("img",{src:"../assets/".concat(n,".jpg"),alt:s}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:s}),Object(p.jsx)("hr",{}),Object(p.jsx)("h2",{children:l}),Object(p.jsx)("h5",{children:l!==o&&o}),Object(p.jsxs)("h5",{children:["Primera aparici\xf3n: ",h]}),Object(p.jsxs)("h5",{children:["Creador: ",i]}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?"Marvel Comics"===i?a.push("/marvel"):a.push("/dc"):a.goBack()},children:"ATRAS"})]})]})},C=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" Marvel "}),Object(p.jsx)(x,{value:"Marvel Comics"})]})},_=function(){var e=Object(r.useContext)(j).value.search,a=Object(r.useContext)(i).state,t=Object(b.g)();a.logged||(localStorage.setItem("lastPath","/search"),t.push("/login"));var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),O.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(e);return Object(p.jsxs)("div",{children:[""!==e&&Object(p.jsxs)("h4",{children:["Busqueda: ",e]}),Object(p.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:""===e?Object(p.jsx)("h3",{className:"alert alert-info",children:"Busque un heroe"}):0===c.length?Object(p.jsx)("h3",{className:"alert alert-danger",children:"No se encontro Heroe"}):c.map((function(e){return Object(p.jsx)(v,Object(o.a)({},e),e.id)}))})]})},y=function(){var e=Object(b.g)(),a=Object(r.useContext)(j),t=a.value,c=a.setValue,n=t.search;return Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:function(a){return function(a){a.preventDefault(),e.push("/search?q=".concat(n))}(a)},children:Object(p.jsx)("input",{type:"text",placeholder:"Busca un heroe..",name:"textValue",className:"input-text-heroe form-control",onChange:function(a){return function(a){c(Object(o.a)(Object(o.a)({},t),{},{search:a.target.value})),e.push("/search?q=".concat(n))}(a)},value:n})})})},M=function(){var e=Object(r.useContext)(i).state;return Object(p.jsx)("span",{className:"nav-item nav-link text-info",children:e.name})},D=function(){var e=Object(b.g)(),a=Object(r.useContext)(i).dispatch;return Object(p.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(p.jsxs)("ul",{className:"log navbar-nav ml-auto",children:[Object(p.jsx)("div",{children:Object(p.jsx)(M,{})}),Object(p.jsx)("button",{activeClassName:"active",className:"logout nav-item nav-link btn",onClick:function(){e.replace("/login"),a({type:h})},children:"Logout"})]})})},k=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("nav",{className:"nav-hero navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(p.jsx)(d.b,{className:"navbar-brand",to:"/home",children:"Heroes App"}),Object(p.jsx)("div",{className:"navbar-collapse",children:Object(p.jsxs)("div",{className:"navbar-nav",children:[Object(p.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(p.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"})]})}),Object(p.jsx)(y,{}),Object(p.jsx)(D,{})]})})},N=function(){return Object(p.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(p.jsx)("h1",{children:"Heroes App"}),Object(p.jsx)("hr",{}),Object(p.jsx)("h4",{children:"Pagina de superheroes hecha por Alesandro Lalli."}),Object(p.jsx)("img",{className:"foto-yo",src:"./assets/yo.jpg",alt:"foto-yo"})]})},S=t(12),A=["isAuthenticated","component"],w=function(e){var a=e.isAuthenticated,t=e.component,r=Object(S.a)(e,A);return localStorage.setItem("lastPath",r.location.pathname),Object(p.jsx)(b.b,Object(o.a)(Object(o.a)({},r),{},{component:function(e){return a?Object(p.jsx)(t,Object(o.a)({},e)):Object(p.jsx)(b.a,{to:"/login"})}}))},B=function(){var e=Object(r.useContext)(i).state;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(w,{isAuthenticated:e.logged,exact:!0,path:"/marvel",component:C}),Object(p.jsx)(w,{isAuthenticated:e.logged,exact:!0,path:"/dc",component:g}),Object(p.jsx)(w,{isAuthenticated:e.logged,exact:!0,path:"/hero/:heroID",component:f}),Object(p.jsx)(w,{isAuthenticated:e.logged,exact:!0,path:"/home",component:N}),Object(p.jsx)(b.b,{exact:!0,path:"/search",component:_}),Object(p.jsx)(b.a,{to:"/home"})]})})]})},I=["isAuthenticated","component"],J=function(e){var a=e.isAuthenticated,t=e.component,r=Object(S.a)(e,I);return Object(p.jsx)(b.b,Object(o.a)(Object(o.a)({},r),{},{component:function(e){return a?Object(p.jsx)(b.a,{to:"/"}):Object(p.jsx)(t,Object(o.a)({},e))}}))},P=function(){var e=Object(r.useContext)(i).state;return Object(p.jsx)(d.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(J,{exact:!0,path:"/login",isAuthenticated:e.logged,component:m}),Object(p.jsx)(b.b,{path:"/",component:B})]})})})},T=function(){var e=Object(r.useState)({search:" "}),a=Object(s.a)(e,2),t=a[0],c=a[1],n=Object(r.useReducer)(u,{},(function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}})),o=Object(s.a)(n,2),l=o[0],h=o[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(l))}),[l]),Object(p.jsx)("div",{children:Object(p.jsx)(i.Provider,{value:{state:l,dispatch:h},children:Object(p.jsx)(j.Provider,{value:{value:t,setValue:c},children:Object(p.jsx)(P,{})})})})};t(30);n.a.render(Object(p.jsx)(T,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cf26f414.chunk.js.map
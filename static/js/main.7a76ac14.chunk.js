(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(20),r=n.n(i),s=(n(26),n(4)),o=n.n(s),u=n(21),d=n(9),j=n(11),l=n(10),h=n.n(l),p=(n(46),n(47),n(0)),b=function(e){var t=e.name,n=e.image,c=e.index,a=e.type,i=e.weight,r=e.height,s=e.ability,o="card ".concat(a);return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:o,children:[Object(p.jsxs)("div",{className:"front",children:[Object(p.jsx)("img",{src:n,alt:t}),Object(p.jsx)("div",{className:"name",children:t})]}),Object(p.jsxs)("div",{className:"back",children:[c<10?"#00".concat(c):"#0".concat(c),Object(p.jsxs)("div",{children:["Type: ",a[0].type.name]}),Object(p.jsxs)("div",{children:["Weight:",i]}),Object(p.jsxs)("div",{children:["Height:",r]}),Object(p.jsxs)("div",{children:["Ability:",s.map((function(e,t){return Object(p.jsxs)("span",{children:[e.ability.name,"."]},t)}))]})]})]})})},m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1],m=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://pokeapi.co/api/v2/pokemon?limit=151");case 2:t=e.sent,n=function(e){e.forEach(function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 2:n=e.sent,a((function(e){return[].concat(Object(u.a)(e),[n.data])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},n(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return Object(p.jsxs)("div",{id:"main",children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("h1",{children:"Pokedex"}),Object(p.jsx)("input",{type:"text",placeholder:"Search Pokemon...",value:s,onChange:function(e){l(e.target.value)}})]}),Object(p.jsx)("div",{className:"pokemon",children:n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())?e:null})).map((function(e){return Object(p.jsx)(b,{index:e.id,name:e.name,image:e.sprites.other.dream_world.front_default,type:e.types,weight:e.weight,height:e.height,ability:e.abilities},e.name)}))})]})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7a76ac14.chunk.js.map
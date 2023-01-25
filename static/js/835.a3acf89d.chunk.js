"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{1835:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var r,o,i,a,s,c,d,p,x,u,l,h,f=e(5218),m=e(9434),b=e(3064),g=e(168),Z=e(6444),j=Z.ZP.li(r||(r=(0,g.Z)(["\n  width: 320px;\n  height: 70px;\n  padding: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 8px;\n  border: 1px solid black;\n  background-color: white;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),v=Z.ZP.p(o||(o=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n  color: #006600;\n"]))),w=Z.ZP.p(i||(i=(0,g.Z)(["\n  font-size: 18px;\n"]))),y=Z.ZP.button(a||(a=(0,g.Z)(["\n  width: 80px;\n  height: 35px;\n  margin: auto 0;\n  border: none;\n  border-radius: 6px;\n  font-size: 18px;\n  background-color: #ff4d4d;\n  transition: background-color 300ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #ff0000;\n  }\n"]))),k=e(4834),z=e(3329),P=function(n){var t=n.contact,e=(0,m.I0)();return(0,z.jsxs)(j,{children:[(0,z.jsxs)(k.x,{children:[(0,z.jsx)(v,{children:t.name}),(0,z.jsx)(w,{children:t.number})]}),(0,z.jsx)(y,{type:"button",onClick:function(){e((0,b.GK)(t.id)).unwrap().then((function(){return f.ZP.success("Contact is deleted",{duration:3e3,position:"top-center",style:{width:"280px",height:"60px",fontSize:"18px"}})})).catch((function(){return f.ZP.error("Something went wrong... Please, try again",{duration:3e3,position:"top-center",style:{width:"280px",height:"60px",fontSize:"18px"}})}))},children:"Delete"})]})},C=Z.ZP.p(s||(s=(0,g.Z)(["\n  font-size: 20px;\n  text-align: center;\n  color: #b30000;\n"]))),A=function(n){return n.contacts.contacts},S=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},I=function(n){return n.filter.value},L=function(){var n=(0,m.v9)(I);return(0,z.jsxs)(C,{children:[n," not found"]})},_=function(){var n=(0,m.v9)(A),t=(0,m.v9)(I),e=(0,m.v9)(S),r=t.toLowerCase(),o=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,z.jsxs)("div",{children:[(0,z.jsx)("ul",{children:o.map((function(n){return(0,z.jsx)(P,{contact:n},n.id)}))}),o.length<1&&!e&&(0,z.jsx)(L,{})]})},D=e(4808),N=Z.ZP.label(c||(c=(0,g.Z)(["\n  margin-bottom: 8px;\n  font-size: 20px;\n  text-align: center;\n"]))),q=Z.ZP.input(d||(d=(0,g.Z)(["\n  width: 250px;\n  height: 30px;\n  padding: 3px 6px;\n  margin: 0 auto;\n  border-radius: 4px;\n  border: 1px solid black;\n  font-size: 18px;\n  transition: border 300ms linear;\n\n  &:hover,\n  &:focus {\n    border: 2px solid #006600;\n  }\n"]))),K=function(){var n=(0,m.I0)();return(0,z.jsxs)(k.x,{display:"flex",flexDirection:"column",mb:"20px",children:[(0,z.jsx)(N,{htmlFor:"text",children:"Find contacts by name"}),(0,z.jsx)(q,{type:"text",id:"text",onChange:function(t){var e=t.target.value;n((0,D.Tv)(e))}})]})},B=Z.ZP.form(p||(p=(0,g.Z)(["\n  border: 2px solid black;\n  border-radius: 12px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0 auto 20px;\n  background-color: #f4f4f4;\n"]))),E=Z.ZP.label(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),G=Z.ZP.input(u||(u=(0,g.Z)(["\n  width: 250px;\n  height: 30px;\n  margin-top: 8px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  border: 1px solid black;\n  font-size: 18px;\n  transition: border 300ms linear;\n\n  &:hover,\n  &:focus {\n    border: 2px solid #008000;\n  }\n"]))),J=Z.ZP.button(l||(l=(0,g.Z)(["\n  width: 250px;\n  height: 35px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  margin: 8px auto 0px;\n  border: none;\n  font-size: 18px;\n  background-color: #3cd03c;\n  transition: background-color 300ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #198d19;\n  }\n"]))),M=function(){var n=(0,m.v9)(A),t=(0,m.I0)();return(0,z.jsxs)(B,{onSubmit:function(e){e.preventDefault();var r=e.target,o=r.elements.name.value,i=r.elements.number.value;n.find((function(n){return n.name===o}))?f.ZP.error("".concat(o," is already in contacts"),{duration:3e3,position:"top-center",style:{width:"280px",height:"60px",fontSize:"18px"}}):t((0,b.uK)({name:o,number:i})).unwrap().then((function(){return f.ZP.success("Contact is added",{duration:3e3,position:"top-center",style:{width:"280px",height:"60px",fontSize:"18px"}})})),r.reset()},children:[(0,z.jsxs)(E,{children:["Name",(0,z.jsx)(G,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(E,{children:["Number",(0,z.jsx)(G,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(J,{type:"submit",children:"Add contact"})]})},T=Z.ZP.h2(h||(h=(0,g.Z)(["\n  font-size: 28px;\n  font-weight: 600;\n  margin-bottom: 18px;\n  text-align: center;\n"]))),$=e(2791),H=function(){var n=(0,m.v9)(S),t=(0,m.v9)(F),e=(0,m.I0)();return(0,$.useEffect)((function(){e((0,b.yF)())}),[e]),(0,z.jsxs)(k.x,{width:"900px",display:"flex",justifyContent:"space-around",margin:"0 auto",pt:"50px",children:[(0,z.jsxs)(k.x,{children:[(0,z.jsx)(T,{children:"Contacts"}),(0,z.jsx)(K,{}),n&&!t&&(0,z.jsx)("b",{children:"Loading..."}),(0,z.jsx)(_,{})]}),(0,z.jsxs)(k.x,{children:[(0,z.jsx)(T,{children:"Add contact"}),(0,z.jsx)(M,{})]})]})}}}]);
//# sourceMappingURL=835.a3acf89d.chunk.js.map
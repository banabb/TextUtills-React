(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/textform",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"/about",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,onChange:e.handleOnChange,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{className:"text-center my-2",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"10"})}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Changed to Uppercase","success")},children:"Convert To Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Changed to LowerCase","success")},children:"Convert To LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(""),e.showAlert("Text has been Clear","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spcaces Removed","success")},children:"Clear Space"})]}),Object(o.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Your text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something in above text area to preview it here"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About "};var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Text Utility",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark Mode Enabled","success")):(n("light"),document.body.style.backgroundColor="white",m("Light Mode Enabled","success"))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3 ",children:Object(o.jsx)(b,{showAlert:m,heading:"Enter the text to analyze",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d450acd2.chunk.js.map
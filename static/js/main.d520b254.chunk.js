(this.webpackJsonptext=this.webpackJsonptext||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("nav",{className:"navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{href:"#",className:"navbar-brand",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-ds-targer":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle Navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSuppoertedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"mybox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert To Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert To Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r(""),e.showAlert("Text Cleared!","success")},children:"Clear"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied to Clipboard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extraspace Removed!","success")},children:"Remove Extra Space"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[n.split(" ").length," Words and ",n.length," Charcters"]}),Object(l.jsxs)("p",{children:[.008*n.split(" ").length," Minutes To Read"]}),Object(l.jsx)("h3",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter Something in the text above to Preview it"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About Us"};var b=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(l.jsx)(b,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:m,heading:"Enter The Text To Analyze Below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d520b254.chunk.js.map
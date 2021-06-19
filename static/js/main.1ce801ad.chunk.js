(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},24:function(e,t,a){},25:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),c=(a(24),a(8)),s=a(18),i=(a(25),a(7));function m(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/todos-list"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/todos-list"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/todos-list/about"},"About"))),e.searchbar?l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):""))))}m.defaultProps={title:"Your Title Here",searchbar:!1};var u=function(e){var t=e.todo,a=e.onDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-2"},l.a.createElement("hr",null),l.a.createElement("h3",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"delete")))},d=function(e){return l.a.createElement("div",{className:"container my-3 p-3",style:{minHeight:"50vh",background:"#ddd"}},l.a.createElement("h2",{className:"r"},"Todos List"),0===e.todos.length?"NO TODOS TO LISTS":e.todos.map((function(t){return l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})})))},b=function(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(c.a)(a,2),o=r[0],s=r[1],i=Object(n.useState)(""),m=Object(c.a)(i,2),u=m[0],d=m[1];return l.a.createElement("div",{className:"container my-4"},l.a.createElement("h3",null,"Add a Todo"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&u?(t(o,u),s(""),d("")):alert("Title or Description cannot be blank")}},l.a.createElement("div",{className:"mb-2"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),l.a.createElement("input",{type:"text",value:o,onChange:function(e){return s(e.target.value)},className:"form-control",id:"title","aria-describedby":"title"})),l.a.createElement("div",{className:"mb-2"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Description"),l.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm"},"Submit")))},h=function(){return l.a.createElement("footer",{className:"bg-dark text-light py-3"},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 Todolist.com"))},E=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"This is an About Component"),l.a.createElement("p",null,"In the above code, we've created a Delete button, which will call the onDelete function once the user clicks on it and the particular todo item will be removed from the list. With this, we're done with the development of the Delete button. Restart the development server and you will notice that the delete button is working as shown in the below animation "))},v=a(1);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){p(u.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(u))},a=function(e,t){var a={sno:0===u.length?0:u[u.length-1].sno+1,title:e,desc:t};p([].concat(Object(s.a)(u),[a]))},r=Object(n.useState)(e),o=Object(c.a)(r,2),u=o[0],p=o[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(u))}),[u]),l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(m,{title:"My Todos List",searchBar:!1}),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/todos-list",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{addTodo:a}),l.a.createElement(d,{todos:u,onDelete:t}))}}),l.a.createElement(v.a,{exact:!0,path:"/todos-list/about"},l.a.createElement(E,null))),l.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.1ce801ad.chunk.js.map
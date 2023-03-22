(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const L=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
                \r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let y;const S=new Uint8Array(16);function v(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(S)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function E(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:A};function k(e,t,s){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const c=e.random||(e.rng||v)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,t){s=s||0;for(let o=0;o<16;++o)t[s+o]=c[o];return t}return E(c)}class f{constructor(t){this.id=k(),this.descripcion=t,this.done=!1,this.createAt=new Date}}const a={All:"All",Completed:"Completed",Pending:"Pending"},d={todos:[new f("Piedra del alma"),new f("piedra 2"),new f("piedra 3"),new f("piedra 4")],filter:a.All},I=()=>{C(),console.log("Init store")},C=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},w=()=>{let e=JSON.stringify(d);localStorage.setItem("state",e)},P=(e=a.All)=>{switch(e){case a.All:return[...d.todos];case a.Completed:return d.todos.filter(t=>t.done===!0);case a.Pending:return d.todos.filter(t=>t.done===!1);default:throw new Error(`${a} no valido`)}},U=e=>{d.todos.push(new f(e)),w()},x=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),w()},F=e=>{d.todos=d.todos.filter(t=>t.id!==e),w()},M=()=>{d.todos=d.todos.filter(e=>!e.done),w()},D=(e=a.All)=>{d.filter=e},q=()=>d.filter,i={initStore:I,loadStore:C,addTodo:U,toggleTodo:x,deleteTodo:F,deleteComplete:M,setFilter:D,getCurrentFilter:q,getTodo:P,filters:a},N=e=>{const{done:t,descripcion:s,id:c}=e,o=`
    <div class="view">
        <input class="toggle" type="checkbox" ${t?"check":"unfalse"}>
        <label>${s}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",c),t&&n.classList.add("completed"),n};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error("No existe el elemento");g.innerHTML="",t.forEach(s=>{g.append(N(s))})};let m="";const R=e=>{if(m||(m=document.querySelector(e)),!m)throw new Error(`elemento ${m} no encontrado `);m.innerHTML=i.getTodo("Pending").length,console.log(m)},h={TodoList:".todo-list",newTodoInput:"#new-todo-input",deleteComplete:".clear-completed",selectFilters:".filtro",PendingCountId:"#pending-count"},O=e=>{const t=()=>{R(h.PendingCountId)},s=()=>{const r=i.getTodo(i.getCurrentFilter());H(h.TodoList,r),t()};(()=>{const r=document.createElement("div");r.innerHTML=L,document.querySelector(e).append(r),s()})();const c=document.querySelector(h.newTodoInput),o=document.querySelector(h.TodoList),n=document.querySelector(h.deleteComplete),p=document.querySelectorAll(h.selectFilters);c.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(i.addTodo(r.target.value),s(),r.target.value="")}),o.addEventListener("click",r=>{const u=r.target.closest("[data-id]");i.toggleTodo(u.getAttribute("data-id")),s()}),o.addEventListener("click",r=>{const u=r.target.closest("[data-id]"),T=r.target.className;!u||T!=="destroy"||(i.deleteTodo(u.getAttribute("data-id")),s())}),n.addEventListener("click",r=>{i.deleteComplete(),s()}),p.forEach(r=>{r.addEventListener("click",u=>{switch(p.forEach(T=>T.classList.remove("selected")),u.target.classList.add("selected"),u.target.text){case"Todos":i.setFilter(i.filters.All);break;case"Pendientes":i.setFilter(i.filters.Pending);break;case"Completados":i.setFilter(i.filters.Completed);break;default:throw new Error("No valido")}s()})})};i.initStore();O("#app");

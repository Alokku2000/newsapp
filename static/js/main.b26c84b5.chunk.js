(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(21),r=a.n(s),i=(a(27),a(8)),l=a(9),o=a(11),j=a(10),b=a(6),p=a(0),d=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(p.jsx)(b.b,{className:"navbar-brand",to:"/",children:"NewsMonkey"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsxs)(b.b,{className:"nav-link",to:"/",children:["Home ",Object(p.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/business",children:"business"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/entertainment",children:"entertainment"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/general",children:"general"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/health",children:"health"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/science",children:"science"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/sports",children:"sports"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/technology",children:"technology"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{className:"nav-link",to:"/AboutUs",children:"About us"})})]})})]})}}]),a}(n.Component),h=a(13),u=a.n(h),g=a(15),x=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageUrl,c=e.url;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{style:{boxShadow:"10px 10px 18px",width:"288px",borderRadius:"3px"},children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:null===n?"https://images.livemint.com/img/2021/10/28/600x338/9d0bd70a-25f8-11ec-92c5-8a3c3517e00d_1634993630963_1635436343906.jpg":n,className:"card-img-top",alt:"..."}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:t}),Object(p.jsxs)("p",{className:"card-text",children:[a,"..."]}),Object(p.jsx)("a",{rel:"noreferrer",href:c,target:"_blank",className:"btn btn-primary",children:"Read more"})]})]})})})}}]),a}(n.Component),O=x,m=a.p+"static/media/loading1.c3f9794f.gif",v=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsx)("img",{src:m,alt:"Loading...",style:{position:"relative",top:"200px"}})})}}]),a}(n.Component),y=v,f=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handlePreviosClick=Object(g.a)(u.a.mark((function t(){var a,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Previous button clicked"),a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=07d70cc113b346e2a2b374f02e10e594&page=").concat(e.state.page-1,"&pageSize=").concat(e.props.pageSize),e.setState({loading:!0}),t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:c=t.sent,e.setState({articles:c.articles,page:e.state.page-1,totalResults:c.totalResults,loading:!1});case 10:case"end":return t.stop()}}),t)}))),e.handleNextClick=Object(g.a)(u.a.mark((function t(){var a,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Next button clicked"),a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=07d70cc113b346e2a2b374f02e10e594&page=").concat(e.state.page+1,"&pageSize=").concat(e.props.pageSize),e.setState({loading:!0}),t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:c=t.sent,e.setState({articles:c.articles,page:e.state.page+1,totalResults:c.totalResults,loading:!1});case 10:case"end":return t.stop()}}),t)}))),e.state={articles:[],loading:!0,page:1,totalResults:0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=07d70cc113b346e2a2b374f02e10e594&pageSize=").concat(this.props.pageSize),this.setState({loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this.setState({articles:n.articles,totalResults:n.totalResults,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container m-auto ",children:[Object(p.jsx)("h2",{style:{textAlign:"center"},children:"News Monkey-Top headlines"}),this.state.loading&&Object(p.jsx)(y,{}),Object(p.jsxs)("div",{className:"container my-4",children:[Object(p.jsx)("div",{className:"row",children:!this.state.loading&&this.state.articles.map((function(e){return Object(p.jsx)("div",{className:"col-md-4 my-4",children:Object(p.jsx)(O,{title:e.title,description:e.description?e.description.slice(0,88):" ",imageUrl:e.urlToImage,url:e.url})},e.url)}))}),Object(p.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(p.jsx)("button",{type:"button",disabled:this.state.page<=1,className:"btn btn-primary",onClick:this.handlePreviosClick,children:"\u2190 Previous"}),Object(p.jsx)("button",{type:"button",disabled:this.state.page+1>this.state.totalResults/this.props.pageSize,className:"btn btn-primary",onClick:this.handleNextClick,children:"Next \u2192"})]})]})]})}}]),a}(n.Component);f.defualtProps={pageSize:10,country:"in"};var N=f,k=a(2),S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d,{country:""}),Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/",children:Object(p.jsx)(N,{pageSize:10,category:"general",country:"in"},"general")}),Object(p.jsx)(k.a,{exact:!0,path:"/us",children:Object(p.jsx)(N,{pageSize:10,category:"general",country:"us"},"us")}),Object(p.jsx)(k.a,{exact:!0,path:"/business",children:Object(p.jsx)(N,{pageSize:10,category:"business",country:"in"},"business")}),Object(p.jsx)(k.a,{exact:!0,path:"/entertainment",children:Object(p.jsx)(N,{pageSize:10,category:"entertainment",country:"in"},"ntertainment")}),Object(p.jsx)(k.a,{exact:!0,path:"/general",children:Object(p.jsx)(N,{pageSize:10,category:"general",country:"in"},"general")}),Object(p.jsx)(k.a,{exact:!0,path:"/health",children:Object(p.jsx)(N,{pageSize:10,category:"health",country:"in"},"health")}),Object(p.jsx)(k.a,{exact:!0,path:"/science",children:Object(p.jsx)(N,{pageSize:10,category:"science",country:"in"},"science")}),Object(p.jsx)(k.a,{exact:!0,path:"/sports",children:Object(p.jsx)(N,{pageSize:10,category:"sports",country:"in"},"sports")}),Object(p.jsx)(k.a,{exact:!0,path:"/technology",children:Object(p.jsx)(N,{pageSize:10,category:"technology",country:"in"},"technology")}),Object(p.jsx)(k.a,{exact:!0,path:"/AboutUs",children:Object(p.jsx)(N,{pageSize:10,category:"general",country:"in"},"general")})]})]})})}}]),a}(n.Component),w=S,z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),z()}},[[35,1,2]]]);
//# sourceMappingURL=main.b26c84b5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},31:function(e,t,a){e.exports=a(63)},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=a(2),s=a(3),m=a(5),o=a(4),u=a(6),h=(a(20),a(64)),d=function(){return c.a.createElement("div",{className:"header-bar"},c.a.createElement(h.a,{to:"/"},c.a.createElement("h1",{className:"header-title"},"Weeb Portal")))},p=function(e){return c.a.createElement("div",{className:"left-bar"},c.a.createElement("h2",{className:"left-bar-text-title"},e.title),c.a.createElement("p",null," ",e.subtitle," "))},E=a(65),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this.props.image,t=this.props.title;return c.a.createElement(E.a,{sm:!0},c.a.createElement(h.a,{to:this.props.link},c.a.createElement("div",{className:"appcard half-width"},c.a.createElement("img",{src:e,className:"appcard-image"}),c.a.createElement("h4",{className:"appcard-title"},t))))}}]),t}(c.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={time:(new Date).toLocaleTimeString("it-IT")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString("it-IT")})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{className:"clock-text"},this.state.time))}}]),t}(c.a.Component),f=a(13),g=a.n(f),j=(c.a.Component,a(66)),O=a(67),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"app-list-header"},c.a.createElement("h3",{className:"app-list-title"},this.props.headertitle))}}]),t}(c.a.Component),k=function(e){return c.a.createElement("div",{className:"right-column"},c.a.createElement("div",{className:"top-bar"},c.a.createElement(j.a,null,c.a.createElement(E.a,{sm:!0},c.a.createElement("h1",{className:"top-bar-text"},"Welcome ",c.a.createElement("br",null),"Home"),c.a.createElement(b,null)))),c.a.createElement(O.a,null,c.a.createElement(y,{headertitle:e.headertitle}),c.a.createElement(j.a,null,c.a.createElement(v,{title:"Watched Anime",image:"/images/seasonanime.png",link:"/watched-anime"}))))},N=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){return c.a.createElement(E.a,{sm:"12"},c.a.createElement(h.a,{to:"/animedb/"},c.a.createElement("div",{className:"listcard"},c.a.createElement("h4",{className:"animecard-title"},this.props.title),c.a.createElement("h4",{className:"animecard-title"},this.props.content))))}}]),t}(c.a.Component)),S=(a(59),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=[];console.log(e.target.value);for(var n=e.target.value.toLowerCase(),c=a.state.animelist,r=0;r<c.length;r++){var l=c[r];l.toLowerCase().indexOf(n)>-1&&t.push(l),console.log(t),a.setState({searchlist:t})}},a.state={redditlist:[],searchlist:[],pageHeader:"r/anime"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://reddit.com/r/anime/.json").then(function(t){e.setState({redditlist:t.data.data.children,searchlist:t.data.data.children}),console.log("Successful"),console.log(e.state.searchlist)}).catch(console.error)}},{key:"render",value:function(){return c.a.createElement("div",{className:"right-column"},c.a.createElement(O.a,null,c.a.createElement(y,{headertitle:this.state.pageHeader}),c.a.createElement("input",{placeholder:"Search Anime",className:"search-input",onKeyUp:this.handleChange}),c.a.createElement(j.a,null,this.state.searchlist.map(function(e,t){return c.a.createElement(N,{title:e.data.title})}))))}}]),t}(c.a.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"App-background"},c.a.createElement(j.a,{className:"App-body"},c.a.createElement(E.a,{lg:3},c.a.createElement(p,{title:"Reddit Viewer"})),c.a.createElement(E.a,{lg:8},c.a.createElement(S,null)))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this.props.title,t=this.props.watch_status;return c.a.createElement(E.a,{sm:!0},c.a.createElement(h.a,{to:this.props.link},c.a.createElement("div",{className:"animecard"},c.a.createElement("img",{alt:e,src:this.props.image,className:"animecard-image"}),c.a.createElement("div",{className:"statuscard"},c.a.createElement("h4",{className:"animecard-title"},{1:"Watching",2:"Completed",0:"Dropped"}[t])),c.a.createElement("h4",{className:"animecard-title"},e))))}}]),t}(c.a.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleSearchInputChange=function(e){var t=e.target.value.toLowerCase();a.setState({searchAnimeKeyword:t}),a.handleSearchChange(t,a.state.searchStatusKeyword)},a.handleSearchStatusChange=function(e){var t=[];t="0"===e.target.value?[0,1,2,3]:[parseInt(e.target.value)],a.setState({searchStatusKeyword:t}),a.handleSearchChange(a.state.searchAnimeKeyword,t)},a.handleSearchChange=function(e,t){var n=[],c=e,r=t;a.state.animelist.forEach(function(e){r.includes(e.watching_status)&&e.title.toLowerCase().indexOf(c)>-1&&n.push(e)}),a.setState({searchlist:n})},a.handleUserSearchChange=function(e){a.setState({searchUser:e.target.value})},a.handleSubmitSearch=function(e){e.preventDefault(),g.a.get("https://api.jikan.moe/v3/user/".concat(a.state.searchUser,"/animelist")).then(function(e){a.setState({animelist:e.data.anime,searchlist:e.data.anime,userSearched:a.state.searchUser})}).catch(console.error)},a.state={animelist:[],searchlist:[],pageHeader:"This is your anime list",searchUser:"",searchAnimeKeyword:"",userSearched:"rec_light",searchStatusKeyword:[0,1,2,3]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.jikan.moe/v3/user/Rec_light/animelist").then(function(t){e.setState({animelist:t.data.anime,searchlist:t.data.anime})}).catch(console.error)}},{key:"render",value:function(){var e="This is ".concat(this.state.userSearched,"'s anime list");return c.a.createElement("div",{className:"right-column"},c.a.createElement(O.a,null,c.a.createElement(y,{headertitle:e}),c.a.createElement("div",{class:"search-container"},c.a.createElement("form",{onSubmit:this.handleSubmitSearch},c.a.createElement("input",{placeholder:"Enter Your Username",className:"search-input",onKeyUp:this.handleUserSearchChange}),c.a.createElement("button",{type:"submit"},"Search"))),c.a.createElement("hr",null),c.a.createElement("div",{class:"search-container"},c.a.createElement("input",{placeholder:"Search Anime",className:"search-input",onKeyUp:this.handleSearchInputChange}),c.a.createElement("select",{onChange:this.handleSearchStatusChange},c.a.createElement("option",{value:"0"},"All status"),c.a.createElement("option",{value:"1"},"Watching"),c.a.createElement("option",{value:"2"},"Completed"),c.a.createElement("option",{value:"3"},"Dropped"))),c.a.createElement("hr",null),c.a.createElement(j.a,null,this.state.searchlist.map(function(e,t){return c.a.createElement(w,{key:e.mal_id,title:e.title,image:e.image_url,link:"/anime/"+e.mal_id,watch_status:e.watching_status})}))))}}]),t}(c.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"App-background"},c.a.createElement(j.a,{className:"App-body"},c.a.createElement(E.a,{lg:3},c.a.createElement(p,{title:"Your MAL List",subtitle:"My username is rec_light, enjoy my list"})),c.a.createElement(E.a,{lg:8},c.a.createElement(x,null)))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this.props.title;return c.a.createElement("div",{className:"animecard max-width-100"},c.a.createElement("img",{src:this.props.image,className:"animecard-image"}),c.a.createElement("h4",{className:"animecard-title"},e))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={animedetail:{},studiodetail:[],characterdetail:[],pageHeader:e.title},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.jikan.moe/v3/anime/".concat(this.props.id)).then(function(t){e.setState({animedetail:t.data,studiodetail:t.data.studios[0]})}).catch(console.error),g.a.get("https://api.jikan.moe/v3/anime/".concat(this.props.id,"/characters_staff")).then(function(t){e.setState({characterdetail:t.data.characters})}).catch(console.error)}},{key:"render",value:function(){return c.a.createElement("div",{className:"right-column"},c.a.createElement(O.a,null,c.a.createElement(y,{headertitle:this.state.animedetail.title}),c.a.createElement("hr",null),c.a.createElement(j.a,null,c.a.createElement(E.a,{sm:"4"},c.a.createElement("img",{className:"anime-detail-img",src:this.state.animedetail.image_url})),c.a.createElement(E.a,{sm:"8"},c.a.createElement("p",{className:"anime-detail-synopsis"},this.state.animedetail.synopsis))),c.a.createElement("div",{className:"anime-box-container"},c.a.createElement(j.a,null,c.a.createElement(E.a,{sm:!0},c.a.createElement("p",{className:"anime-box-text"},"Score: ",this.state.animedetail.score)),c.a.createElement(E.a,{sm:!0},c.a.createElement("p",{className:"anime-box-text"},"Season: ",this.state.animedetail.premiered)),c.a.createElement(E.a,{sm:!0},c.a.createElement("p",{className:"anime-box-text"},"Studio:",this.state.studiodetail.name)))),c.a.createElement("div",{className:"scrolling-wrapper"},this.state.characterdetail.map(function(e,t){return c.a.createElement(_,{image:e.image_url,title:e.name})}))))}}]),t}(c.a.Component),U=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"App-background"},c.a.createElement(j.a,{className:"App-body"},c.a.createElement(E.a,{lg:3},c.a.createElement(p,{title:"Anime Detail"})),c.a.createElement(E.a,{lg:8},c.a.createElement(D,{id:this.props.match.params.id})))))}}]),t}(n.Component);a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(68),K=a(69),L=c.a.createElement(I.a,{basename:"/MyAnimeListReactUI"},c.a.createElement("div",null,c.a.createElement(K.a,{exact:!0,path:"/",component:A}),c.a.createElement(K.a,{exact:!0,path:"/reddit",component:C}),c.a.createElement(K.a,{exact:!0,path:"/watched-anime",component:A}),c.a.createElement(K.a,{exact:!0,path:"/anime/:id",component:U})));l.a.render(L,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.c3b2a38e.chunk.js.map
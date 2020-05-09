(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{111:function(e,a,t){e.exports=t(231)},117:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},118:function(e,a,t){},231:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(106),s=t.n(c),l=t(19),i=t.n(l),o=t(34),m=t(35),d=t(36),u=t(38),p=t(37);t(117),t(118);function g(e){var a=Math.floor(Math.abs(e/1e3)),t=Math.abs(e%1e3),n=e<0?"-":"";return a?n+g(a)+","+(t<10?"00":t<100?"0":"")+t:n+t.toString()}var h=function(e){return e.cardData&&e.cardData.activeCases?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-12 row",style:{paddingRight:0}},r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-primary"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/1.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Total Cases"),r.a.createElement("h3",{className:"mb-0"},e.cardData.totalCases),r.a.createElement("p",{className:"font-12 marg"},e.cardData.totalCasesInAMil," per 1 Million")))),r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-success"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/4.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Total Recovered"),r.a.createElement("h3",{className:"mb-0"},e.cardData.totalRecovered),r.a.createElement("p",{className:"font-12 marg"},"Updated ",function(e){e=new Date(e.toString());var a=new Date,t=(a.getTime()-e)/1e3;if(console.log(e,parseInt(t)+"s"),t<60)return console.log(parseInt(t)+"s"),parseInt(t)+"s";if(t<3600)return console.log(parseInt(t)+"s"),parseInt(t/60)+"m";if(t<=86400)return console.log(parseInt(t)+"s"),parseInt(t/3600)+"h";if(t>86400){var n=e.getDate(),r=e.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ",""),c=e.getFullYear()==a.getFullYear()?"":" "+e.getFullYear();return console.log(parseInt(t)+"s"),n+" "+r+c}}(e.cardData.updatedAt)," ago")))),r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-danger"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/2.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Total Deaths"),r.a.createElement("h3",{className:"mb-0"},e.cardData.totalDeaths),r.a.createElement("p",{className:"font-12 marg"},e.cardData.totalDeathsInAMil," per 1 Million"))))),r.a.createElement("div",{className:"col-md-12 row",style:{paddingRight:0}},r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-danger"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/3.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Active Cases"),r.a.createElement("h3",{className:"mb-0"},e.cardData.activeCases)))),r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-success"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/29.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Critical Cases"),r.a.createElement("h3",{className:"mb-0"},e.cardData.seriousCritical)))),r.a.createElement("div",{className:"single-widger-cart col-md-4"},r.a.createElement("div",{className:"card bg-primary"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"float-right card-thumb-"},r.a.createElement("img",{src:"img/bg-img/30.png",alt:""})),r.a.createElement("h5",{className:"font-16"},"Recent Deaths"),r.a.createElement("h3",{className:"mb-0"},e.cardData.recentDeaths)))))):"Loading..."},v=t(107),b=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(d.a)(t,[{key:"render",value:function(){return this.props.timelineData.length>0?r.a.createElement(v.a,{data:{labels:this.props.timelineData.map((function(e){return e.date})),datasets:[{data:this.props.timelineData.map((function(e){return e.totalconfirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:this.props.timelineData.map((function(e){return e.totaldeceased})),label:"Deceased",borderColor:"red",backgroundColor:"rgba(255,0,0, 0.5)",fill:!0},{data:this.props.timelineData.map((function(e){return e.totalrecovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(58, 128, 29, 0.3803921568627451)",fill:!0}]}}):"LOADING.."}}]),t}(n.Component),E=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(d.a)(t,[{key:"generateCountryList",value:function(e){return e.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"chat-img mr-2",src:"https://www.countryflags.io/"+e.countryInfo.iso2+"/flat/64.png",alt:""}),r.a.createElement("span",null,e.country)),r.a.createElement("td",null,g(e.cases)),r.a.createElement("td",null,g(e.todayCases)),r.a.createElement("td",null,g(e.recovered)),r.a.createElement("td",null,g(e.todayDeaths)))}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"2%"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 box-margin"},r.a.createElement("div",{className:"card code-table"},r.a.createElement("div",{className:"card-body pb-0",style:{paddingLeft:"0"}},r.a.createElement("div",{className:"card-header border-none bg-transparent d-flex align-items-center justify-content-between p-0 mb-30"},r.a.createElement("div",{className:"widgets-card-title"},r.a.createElement("h5",{className:"card-title mb-0"},"Most Affected Countries"))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-sm table-hover table-nowrap table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Today"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deaths today"))),r.a.createElement("tbody",null,this.props.countryDataByCases.length>0?this.generateCountryList(this.props.countryDataByCases):"Loading..")))))),r.a.createElement("div",{className:"col-lg-4 box-margin height-card"},r.a.createElement("div",{className:"col-md-12 row"},r.a.createElement("div",{class:"col-12"},r.a.createElement("h4",{class:"card-title mb-1"},"COVID-19 Coronavirus - Symptoms")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"virus-symptoms-card mb-20"},r.a.createElement("div",{className:"icon-thumb"}," ",r.a.createElement("img",{src:"img/icon-img/8.png",alt:""})),r.a.createElement("div",{className:"single-symptoms-content text-center"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"},"Coughing And Sneezing")),r.a.createElement("p",{className:"text mb-0"},"Praesentium quis, nisi rerum accusantium.")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"virus-symptoms-card mb-20"},r.a.createElement("div",{className:"icon-thumb"}," ",r.a.createElement("img",{src:"img/icon-img/11.png",alt:""})),r.a.createElement("div",{className:"single-symptoms-content text-center"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"},"Strong Headache")),r.a.createElement("p",{className:"text mb-0"},"Praesentium quis, nisi rerum accusantium.")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"virus-symptoms-card mb-50"},r.a.createElement("div",{className:"icon-thumb"}," ",r.a.createElement("img",{src:"img/icon-img/12.png",alt:""})),r.a.createElement("div",{className:"single-symptoms-content text-center"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"},"Shortness Of Breath")),r.a.createElement("p",{className:"text mb-0"},"Praesentium quis, nisi rerum accusantium.")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"virus-symptoms-card mb-50"},r.a.createElement("div",{className:"icon-thumb"}," ",r.a.createElement("img",{src:"img/icon-img/9.png",alt:""})),r.a.createElement("div",{className:"single-symptoms-content text-center"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"},"Hot Fever")),r.a.createElement("p",{className:"text mb-0"},"Praesentium quis, nisi rerum accusantium quibusdam esse."))))))))}}]),t}(n.Component),f=t(60),y=t.n(f),N=t(44),w=t.n(N),D=t(110),x=t.n(D),k=t(59),C="https://corona-virus-world-and-india-data.p.rapidapi.com/",j="corona-virus-world-and-india-data.p.rapidapi.com",O="9920ec77e7msh522fd440cd03f5fp18cf83jsn5a79de020a2a";x()(w.a,{retries:3});var I=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n,r,c,s,l,o,m,d,u,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(C+"api",{headers:{"x-rapidapi-host":j,"x-rapidapi-key":O}});case 3:return a=e.sent,t=a.data,n=t.world_total,r=n.active_cases,c=n.total_cases,s=n.total_deaths,l=n.total_recovered,o=n.total_cases_per_1m_population,m=n.deaths_per_1m_population,d=n.serious_critical,u=n.new_deaths,p={activeCases:r,totalDeaths:s,totalCases:c,totalRecovered:l,totalCasesInAMil:o,totalDeathsInAMil:m,updatedAt:t.statistic_taken_at,seriousCritical:d,recentDeaths:u},e.abrupt("return",p);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://corona.lmao.ninja/v2/countries");case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(C+"api_india_timeline",{headers:{"x-rapidapi-host":j,"x-rapidapi-key":O}});case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://v1.api.covindia.com/zone-data");case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.covid19india.org/state_district_wise.json");case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(i.a.mark((function e(a){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://indian-cities-api-nocbegfhqg.now.sh/cities?City_like="+a);case 3:return t=e.sent,n=t.data,e.next=7,w.a.get("https://indian-cities-api-nocbegfhqg.now.sh/cities?State_like="+a);case 7:return r=e.sent,e.abrupt("return",k.a.union(n,r.data));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),T=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),n=a.call(this,e),y.a.accessToken="pk.eyJ1IjoicHJhc2hhbnRnb2Rod2FuaSIsImEiOiJjazloajZnaGQwMGVlM21scTN1dzF4OWxyIn0.zjTUI8tnUqu3mOE5OcLD3w",n.state={lng:78,lat:20,zoom:4,countiresStat:{}},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.map=new y.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/dark-v10",center:[this.state.lng,this.state.lat],zoom:this.state.zoom}),this.map.scrollZoom.disable(),this.map.doubleClickZoom.disable()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.countryData.forEach((function(a){var t=a.deaths,n=a.active,r=a.recovered,c=a.country,s=a.countryInfo,l=document.createElement("div");l.className="marker",l.innerHTML+='<div class="intro-banner-vdo-play-btn pinkBg" target="_blank"><i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i><span class="ripple pinkBg"></span><span class="ripple pinkBg"></span><span class="ripple pinkBg"></span></div>',new y.a.Marker(l).setLngLat([s.long,s.lat]).setPopup(new y.a.Popup({offset:25}).setHTML('<div class="card text-white bg-dark mb-3" style="max-width: 18rem;"><div class="card-header">              <img className="chat-img mr-2" src="https://www.countryflags.io/'+s.iso2+'/flat/16.png" alt=""/><span>&nbsp;'+c+'</span></div><div class="card-body"><p class="card-text"><span class="dot dot-yellow"></span>&nbsp;&nbsp;<b>Active</b> : '+g(n)+'<br><span class="dot dot-danger"></span>&nbsp;&nbsp;<b>Deaths</b> : '+g(t)+'<br><span class="dot dot-safe"></span>&nbsp;&nbsp;<b>Recovered</b> : '+g(r)+"</p></div></div>")).addTo(e.map)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(a){return e.mapContainer=a},className:"height-700",style:{width:"100%"}})}}]),t}(n.Component),A=function(){return r.a.createElement("div",{className:"horizontal-menu"},r.a.createElement("nav",{className:"navbar top-navbar col-lg-12 col-12 p-0"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"},r.a.createElement("a",{className:"navbar-brand brand-logo",href:"index.html"},r.a.createElement("img",{src:"img/core-img/logo.png",alt:"logo"})),r.a.createElement("a",{className:"navbar-brand brand-logo-mini",href:"index.html"},r.a.createElement("img",{src:"img/core-img/small-logo.png",alt:"logo"}))),r.a.createElement("div",{className:"navbar-menu-wrapper d-flex align-items-center justify-content-end"},r.a.createElement("ul",{className:"navbar-nav navbar-nav-right"},r.a.createElement("li",{className:"nav-item dropdown"})),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",type:"button","data-toggle":"horizontal-menu-toggle"},r.a.createElement("span",{className:"ti-menu"}))),r.a.createElement("div",{className:"preheader-area d-none d-lg-block"},r.a.createElement("div",{className:"preheader-content-wrap d-flex align-items-center"},r.a.createElement("img",{src:"https://www.mygov.in/sites/all/themes/mygov/front_assets/images/logo.png",style:{height:"50px"}}))))))},R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-12"},r.a.createElement(T,{countryData:e.countryData}))),r.a.createElement("div",{className:"row"},r.a.createElement(h,{cardData:e.cardData})),r.a.createElement("div",{className:"row",style:{marginTop:"2%"}},r.a.createElement("div",{class:"col-lg-8"},r.a.createElement(b,{timelineData:e.timelineData})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(L,{zoneStats:e.zoneStats,districtStats:e.districtStats}))),r.a.createElement(E,{countryDataByCases:e.countryDataByCases}))},L=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).debounceAPI=function(e,a){var t;clearTimeout(t),t=setTimeout(e,3e3)},n.handleInputChange=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k.a.isEmpty(n.search.value)){e.next=5;break}document.getElementById("search-results").style.display="none",document.getElementById("banner").style.display="block",e.next=13;break;case 5:return e.t0=n,e.next=8,z(n.search.value);case 8:e.t1=e.sent,e.t2={results:e.t1},e.t0.setState.call(e.t0,e.t2),document.getElementById("search-results").style.display="block",document.getElementById("banner").style.display="none";case 13:case"end":return e.stop()}}),e)}))),n.fetchDistrictsData=function(e){console.log("hello"+e),console.log(n.props.districtStats)},n.renderSearchResults=function(){var e=n.state.results;if(Object.keys(e).length&&e.length)return r.a.createElement("div",{className:"results-container"},e.map((function(e){return r.a.createElement("div",{className:"card text-white bg-dark mb-2 result-item",style:{width:"100%"},onClick:function(){return n.fetchDistrictsData(e.City)}},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,e.City),",",e.State,", ",e.District,", India")))})))},n.state={query:"",results:[]},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"card box-margin"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"country-map"},r.a.createElement("div",{class:"box-header"},r.a.createElement("h5",{class:"card-title"},"India Stats")),r.a.createElement("div",{class:"p-1 bg-dark rounded rounded-pill shadow-sm mb-4"},r.a.createElement("div",{class:"input-group"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("button",{id:"button-addon2",type:"submit",class:"btn btn-link text-success"},r.a.createElement("i",{class:"fa fa-search"}))),r.a.createElement("input",{type:"search",placeholder:"Type city / district to search..",ref:function(a){return e.search=a},"aria-describedby":"button-addon2",class:"color-white col-md-11 form-control border-0 bg-dark",onChange:k.a.debounce(this.handleInputChange,300)}))),r.a.createElement("div",{id:"search-results"},this.renderSearchResults()),r.a.createElement("div",{id:"banner"},r.a.createElement("img",{src:"https://cafindia.org/images/covid/landingpagebanner.jpg"})))))}}]),t}(n.Component),q=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={cardData:{},countryData:{},countryDataByCases:{},timelineData:{},zoneStats:{},districtStats:{}},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return a=e.sent,e.next=5,S();case 5:return t=e.sent,e.next=8,_();case 8:return n=e.sent,e.next=11,M();case 11:return r=e.sent,e.next=14,B();case 14:c=e.sent,s=t.sort((function(e,a){return e.cases>a.cases?-1:a.cases>e.cases?1:0})).slice(0,10),this.setState({cardData:a,countryData:t,countryDataByCases:s,timelineData:n,zoneStats:r,districtStats:c});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.cardData,t=e.countryData,n=e.countryDataByCases,c=e.timelineData,s=e.zoneStats,l=e.districtStats;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(A,null),r.a.createElement(R,{cardData:a,countryData:t,countryDataByCases:n,timelineData:c,zoneStats:s,districtStats:l}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.a8440749.chunk.js.map
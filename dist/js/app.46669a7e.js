(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],l=0,b=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(b.length)b.shift()();return n.push.apply(n,u||[]),c()}function c(){for(var t,e=0;e<n.length;e++){for(var c=n[e],r=!0,i=1;i<c.length;i++){var s=c[i];0!==o[s]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=c[0]))}return t}var r={},o={app:0},n=[];function a(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=t,a.c=r,a.d=function(t,e,c){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(c,r,function(e){return t[e]}.bind(null,r));return c},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=s;n.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0949":function(t,e,c){t.exports=c.p+"img/Iphone12ProMax.d3931185.png"},"0da8":function(t,e,c){t.exports=c.p+"img/OppoFindX3Pro5G.4b71d684.png"},"3e52":function(t,e,c){t.exports=c.p+"img/user.bf40b0e8.png"},"410f":function(t,e,c){t.exports=c.p+"img/SamsungGalaxyFold.6f73982a.png"},4440:function(t,e,c){t.exports=c.p+"img/facebook.1975a199.png"},4600:function(t,e,c){t.exports=c.p+"img/SamsungGalaxyS20+.3845c41a.png"},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23");function o(t,e,c,o,n,a){var i=Object(r["u"])("Header"),s=Object(r["u"])("router-view"),u=Object(r["u"])("Footer");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i),Object(r["g"])(s),Object(r["g"])(u)],64)}var n=c("3e52"),a=c.n(n),i=c("d4dd"),s=c.n(i),u=Object(r["g"])("br",null,null,-1),p={id:"nav"},l=Object(r["g"])("img",{class:"logo",src:"#",alt:"logo"},null,-1),b={class:"menu"},m=Object(r["f"])("Home"),d=Object(r["f"])("Product"),g=Object(r["f"])("About us"),h=Object(r["f"])("Contact"),O={class:"menu2"},f={class:"search"},j=Object(r["g"])("div",{class:"login"},[Object(r["g"])("img",{class:"icon",src:a.a,alt:"user-icon"}),Object(r["g"])("h4",null,"Login")],-1),v=Object(r["g"])("img",{class:"icon",src:s.a,alt:"cart-icon"},null,-1);function y(t,e,c,o,n,a){var i=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[u,Object(r["g"])("div",p,[l,Object(r["g"])("div",b,[Object(r["g"])(i,{class:"menu-item",to:"/"},{default:Object(r["B"])((function(){return[m]})),_:1}),Object(r["g"])(i,{class:"menu-item",to:"/product"},{default:Object(r["B"])((function(){return[d]})),_:1}),Object(r["g"])(i,{class:"menu-item",to:"/about"},{default:Object(r["B"])((function(){return[g]})),_:1}),Object(r["g"])(i,{class:"menu-item",to:"/contact"},{default:Object(r["B"])((function(){return[h]})),_:1})]),Object(r["g"])("div",O,[Object(r["g"])("div",f,[Object(r["g"])("form",{class:"searchForm",onSubmit:e[3]||(e[3]=Object(r["E"])((function(){}),["prevent"]))},[Object(r["C"])(Object(r["g"])("input",{type:"text",placeholder:"Search","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.searchQuery=t})},null,512),[[r["y"],n.searchQuery]]),Object(r["C"])(Object(r["g"])("span",{class:"removeInput",onClick:e[2]||(e[2]=function(){return a.removeSearchQuery&&a.removeSearchQuery.apply(a,arguments)})},"+",512),[[r["z"],n.searchQuery]])],32),Object(r["g"])("button",{class:"btn-search",onClick:e[4]||(e[4]=function(){return a.submitSearch&&a.submitSearch.apply(a,arguments)})},"Search")]),j,v])])],64)}var S={data:function(){return{isResult:!1,searchQuery:""}},methods:{removeSearchQuery:function(){this.searchQuery="",this.isResult=!1},submitSearch:function(){var t="https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&exsentences=1&exintro&explaintext&exlimit=max&prop=extracts&gsrlimit=10&gsrsearch="+this.searchQuery+"&format=json";this.$http.jsonp(t).then((function(t){this.wikiObj=t.data.query.pages,this.isResult=!0}),(function(t){console.log(t)}))}}};c("99fc");S.render=y;var w=S,P=c("4440"),x=c.n(P),C=c("8734"),k=c.n(C),_=c("ca5b"),A=c.n(_),Q=c("c2a5"),B=c.n(Q),H={class:"footer"},N=Object(r["g"])("hr",null,null,-1),G=Object(r["g"])("div",{class:"info"},[Object(r["g"])("div",{class:"info-item"},[Object(r["g"])("h2",null,"About"),Object(r["g"])("p",null,"We are OCG"),Object(r["g"])("p",null,"We are OCG"),Object(r["g"])("p",null,"We are OCG")]),Object(r["g"])("div",{class:"info-item"},[Object(r["g"])("h2",null,"Help"),Object(r["g"])("ul",null,[Object(r["g"])("li",null,"Customer service"),Object(r["g"])("li",null,"Customer service"),Object(r["g"])("li",null,"Customer service"),Object(r["g"])("li",null,"Customer service"),Object(r["g"])("li",null,"Customer service")])]),Object(r["g"])("div",{class:"info-item"},[Object(r["g"])("h2",null,"Contact"),Object(r["g"])("div",{class:"social"},[Object(r["g"])("a",{href:"https://facebook.com/hiro.6598"},[Object(r["g"])("img",{src:x.a,alt:"facebook"})]),Object(r["g"])("a",{href:"https://www.instagram.com/quang.65/"},[Object(r["g"])("img",{src:k.a,alt:"instagram"})]),Object(r["g"])("a",{href:"https://twitter.com/QV19112619"},[Object(r["g"])("img",{src:A.a,alt:"twitter"})]),Object(r["g"])("a",{href:"#"},[Object(r["g"])("img",{src:B.a,alt:"zalo"})])])])],-1),D=Object(r["g"])("div",{class:"coppyright"},[Object(r["f"])(" © Copyright by "),Object(r["g"])("a",{href:"https://www.facebook.com/hiro.6598"},"Quang Vu")],-1);function F(t,e,c,o,n,a){return Object(r["p"])(),Object(r["d"])("div",H,[N,G,D])}var L={};c("a070");L.render=F;var I=L,M={components:{Header:w,Footer:I},name:"App",component:{}};M.render=o;var E=M,T=c("6c02"),$={class:"home"};function Z(t,e,c,o,n,a){var i=Object(r["u"])("Product");return Object(r["p"])(),Object(r["d"])("div",$,[Object(r["g"])(i)])}c("ac1f"),c("841c"),c("b0c0");var z={class:"container"},R={class:"filter"},V={class:"filter-item"},X=Object(r["e"])('<option disabled selected>Sort</option><option value="Price: Low to High">Price: Low to High</option><option value="Price: High to Low">Price: High to Low</option><option value="Name: A - Z">Name: A - Z</option><option value="Name: Z - A">Name: Z - A</option>',5),q={class:"filter-item"},W={class:"filter-item"},J={class:"row"},U={key:0,class:"price"},K={class:"price-promo"},Y={key:1,class:"price"},tt={class:"row"},et={key:0,class:"price"},ct={class:"price-promo"},rt={key:1,class:"price"};function ot(t,e,c,o,n,a){return Object(r["p"])(),Object(r["d"])("div",z,[Object(r["g"])("div",R,[Object(r["g"])("span",V,[Object(r["g"])("select",{onChange:e[1]||(e[1]=function(){return a.myfunction&&a.myfunction.apply(a,arguments)})},[X],32)]),Object(r["g"])("span",q,[Object(r["C"])(Object(r["g"])("input",{type:"text",placeholder:"Search","onUpdate:modelValue":e[2]||(e[2]=function(t){return n.searchQuery=t}),onKeyup:e[3]||(e[3]=Object(r["D"])((function(){return a.search&&a.search.apply(a,arguments)}),["enter"]))},null,544),[[r["y"],n.searchQuery]])]),Object(r["g"])("span",W,[Object(r["g"])("button",{onClick:e[4]||(e[4]=function(){return a.search&&a.search.apply(a,arguments)})},"Search")])]),Object(r["C"])(Object(r["g"])("div",J,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(n.products,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"block",key:t.id},[Object(r["g"])("img",{src:t.image,alt:"This is "+t.name},null,8,["src","alt"]),Object(r["g"])("h4",null,Object(r["w"])(t.name),1),t.promo?(Object(r["p"])(),Object(r["d"])("div",U,[Object(r["g"])("p",K,"$"+Object(r["w"])(a.format(t.price)),1),Object(r["g"])("p",null,"$"+Object(r["w"])(a.format(t.price_promo)),1)])):(Object(r["p"])(),Object(r["d"])("div",Y,[Object(r["g"])("p",null,"$"+Object(r["w"])(a.format(t.price)),1)]))])})),128))],512),[[r["z"],n.inItData]]),Object(r["C"])(Object(r["g"])("div",tt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(n.productSearchs,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"block",key:t.id},[Object(r["g"])("img",{src:t.image,alt:"This is "+t.name},null,8,["src","alt"]),Object(r["g"])("h4",null,Object(r["w"])(t.name),1),t.promo?(Object(r["p"])(),Object(r["d"])("div",et,[Object(r["g"])("p",ct,"$"+Object(r["w"])(a.format(t.price)),1),Object(r["g"])("p",null,"$"+Object(r["w"])(a.format(t.price_promo)),1)])):(Object(r["p"])(),Object(r["d"])("div",rt,[Object(r["g"])("p",null,"$"+Object(r["w"])(a.format(t.price)),1)]))])})),128))],512),[[r["z"],!n.inItData]])])}c("4de4"),c("159b"),c("b680"),c("4e82"),c("caad"),c("2532");var nt={name:"Product",props:{searchText:String},data:function(){return{msg:"...",searchQuery:"",inItData:!0,products:[{id:1,name:"SamSung Galaxy S20+",image:c("4600"),price:1090,price_promo:1e3,promo:!0},{id:2,name:"Iphone 12 Pro Max",image:c("0949"),price:1500,price_promo:1350,promo:!0},{id:3,name:"Xiaomi Mi 11 5G",image:c("70bc"),price:890,price_promo:800,promo:!1},{id:4,name:"Oppo Find X3 Pro 5G",image:c("0da8"),price:1250,price_promo:1130,promo:!0},{id:5,name:"Realme 8 Pro",image:c("b46b"),price:700,price_promo:500,promo:!1},{id:6,name:"Samsung Galaxy Fold",image:c("410f"),price:2560,price_promo:2300,promo:!0}],productSearchs:[]}},methods:{totalOfPromotionalProduct:function(){var t=this.products.filter((function(t){return t.promo}));return t.length},totalPriceOfProduct:function(){var t=0;return this.products.forEach((function(e){t+=e.price})),t},avgPriceOfProduct:function(){return(this.totalPriceOfProduct()/this.products.length).toFixed(2)},myfunction:function(t){this.msg=t.target.value,"Name: A - Z"===t.target.value&&(this.products=this.sortByName(this.products,"ASC"),this.productSearchs=this.sortByName(this.productSearchs,"ASC")),"Name: Z - A"===t.target.value&&(this.products=this.sortByName(this.products,"DESC"),this.productSearchs=this.sortByName(this.productSearchs,"DESC")),"Price: Low to High"===t.target.value&&(this.products=this.sortByPrice(this.products,"ASC"),this.productSearchs=this.sortByPrice(this.productSearchs,"ASC")),"Price: High to Low"===t.target.value&&(this.products=this.sortByPrice(this.products,"DESC"),this.productSearchs=this.sortByPrice(this.productSearchs,"DESC"))},sortByName:function(t,e){return"ASC"===e?(t.sort((function(t,e){return t.name.localeCompare(e.name)})),t):(t.sort((function(t,e){return e.name.localeCompare(t.name)})),t)},sortByPrice:function(t,e){return"ASC"===e?(t.sort((function(t,e){return t.price-e.price})),t):(t.sort((function(t,e){return e.price-t.price})),t)},format:function(t){return t=(new Intl.NumberFormat).format(t),t},search:function(){var t=this;this.inItData=!1,this.productSearchs=[],this.products.forEach((function(e){e.name.toLowerCase().includes(t.searchQuery.toLowerCase())&&t.productSearchs.push(e)})),0===this.searchQuery.length&&(this.productSearchs=this.products,this.results=!1)}},computed:{}};c("a0d3");nt.render=ot;var at=nt,it={name:"Home",components:{Product:at}};it.render=Z;var st=it,ut={class:"about"},pt=Object(r["g"])("h1",null,"This is about page",-1);function lt(t,e){return Object(r["p"])(),Object(r["d"])("div",ut,[pt])}const bt={};bt.render=lt;var mt=bt,dt={class:"contact"},gt=Object(r["g"])("h1",null,"This is contact page",-1);function ht(t,e,c,o,n,a){return Object(r["p"])(),Object(r["d"])("div",dt,[gt])}var Ot={};Ot.render=ht;var ft=Ot,jt=[{path:"/",name:"Home",component:st},{path:"/product",name:"Product",component:at},{path:"/about",name:"About",component:mt},{path:"/contact",name:"Contact",component:ft}],vt=Object(T["a"])({history:Object(T["b"])(),routes:jt}),yt=vt,St=c("5502"),wt=Object(St["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(E).use(wt).use(yt).mount("#app")},"70bc":function(t,e,c){t.exports=c.p+"img/XiaomiMi11_5G.ecfa9e1c.png"},8734:function(t,e,c){t.exports=c.p+"img/insta.418822a1.png"},"99fc":function(t,e,c){"use strict";c("cac7")},a070:function(t,e,c){"use strict";c("d145")},a0d3:function(t,e,c){"use strict";c("da75")},b46b:function(t,e,c){t.exports=c.p+"img/Realme8Pro.df6e93cd.png"},c2a5:function(t,e,c){t.exports=c.p+"img/zalo.c748d854.jpg"},ca5b:function(t,e,c){t.exports=c.p+"img/twitter.2890bac9.png"},cac7:function(t,e,c){},d145:function(t,e,c){},d4dd:function(t,e,c){t.exports=c.p+"img/cart.044ac3a5.jpg"},da75:function(t,e,c){}});
//# sourceMappingURL=app.46669a7e.js.map
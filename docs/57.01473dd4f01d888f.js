"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[57],{3057:(yt,x,a)=>{a.r(x),a.d(x,{CountriesModule:()=>mt});var u=a(6814),d=a(4064),t=a(4946),y=a(6306),v=a(2096),w=a(7394);class P extends w.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const m={setInterval(n,o,...e){const{delegate:i}=m;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var F=a(9039);const T={now:()=>(T.delegate||Date).now(),delegate:void 0};class g{constructor(o,e=g.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}g.now=T.now;const Z=new class L extends g{constructor(o,e=g.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}(class J extends P{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var i;if(this.closed)return this;this.state=o;const s=this.id,r=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(r,s,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(r,this.id,e),this}requestAsyncId(o,e,i=0){return m.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&m.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let s,i=!1;try{this.work(o)}catch(r){i=!0,s=r||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,F.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}}),N=Z;var O=a(5211),A=a(8180),_=a(9360),U=a(8251),R=a(2420),M=a(975),j=a(1631),Q=a(4829);function S(n,o){return o?e=>(0,O.z)(o.pipe((0,A.q)(1),function V(){return(0,_.e)((n,o)=>{n.subscribe((0,U.x)(o,R.Z))})}()),e.pipe(S(n))):(0,j.z)((e,i)=>(0,Q.Xf)(n(e,i)).pipe((0,A.q)(1),(0,M.h)(e)))}var D=a(5592),Y=a(671);function I(n,o=Z){const e=function $(n=0,o,e=N){let i=-1;return null!=o&&((0,Y.K)(o)?e=o:i=o),new D.y(s=>{let r=function E(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;r<0&&(r=0);let c=0;return e.schedule(function(){s.closed||(s.next(c++),0<=i?this.schedule(void 0,i):s.complete())},r)})}(n,o);return S(()=>e)}var K=a(7398),l=a(9397),X=a(9862);let f=(()=>{class n{constructor(e){this.http=e,this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.apiUrl="https://restcountries.com/v3.1/",this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,y.K)(()=>(0,v.of)([])),I(1e3))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,K.U)(s=>s.length>0?s[0]:null),(0,y.K)(()=>(0,v.of)(null)))}searchCapital(e){return this.http.get(`${this.apiUrl}/capital/${e}`).pipe((0,y.K)(()=>(0,v.of)([])),I(1e3),(0,l.b)(s=>this.cacheStore.byCapital={term:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,l.b)(s=>this.cacheStore.byCountries={term:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,l.b)(s=>this.cacheStore.byRegion={region:e,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(X.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),C=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:13,vars:0,consts:[[1,"spiner-container"],["width","50","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#fff"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando..."),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"circle",2),t._UZ(5,"animate",3)(6,"animate",4),t.qZA(),t.TgZ(7,"circle",5),t._UZ(8,"animate",6)(9,"animate",7),t.qZA(),t.TgZ(10,"circle",8),t._UZ(11,"animate",3)(12,"animate",4),t.qZA()()())},styles:[".spiner-container[_ngcontent-%COMP%]{align-items:center;background-color:#86a7fc;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 0 5px #00000080}span[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}svg[_ngcontent-%COMP%]{margin-right:5px}"]})}return n})();var z=a(8645);let B=(()=>{class n{constructor(){this.debouncer=new z.x,this.placeholder="",this.value="",this.onValue=new t.vpe,this.onDebaunce=new t.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function H(n,o=Z){return(0,_.e)((e,i)=>{let s=null,r=null,c=null;const h=()=>{if(s){s.unsubscribe(),s=null;const p=r;r=null,i.next(p)}};function ft(){const p=c+n,q=o.now();if(q<p)return s=this.schedule(void 0,p-q),void i.add(s);h()}e.subscribe((0,U.x)(i,p=>{r=p,c=o.now(),s||(s=o.schedule(ft,n),i.add(s))},()=>{h(),i.complete()},void 0,()=>{r=s=null}))})}(1e3)).subscribe(e=>{this.onDebaunce.emit(e)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(e){this.onValue.emit(e)}onKeyPress(e){this.debouncer.next(e)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",value:"value"},outputs:{onValue:"onValue",onDebaunce:"onDebaunce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup.enter","keyup"],["txtInput",""]],template:function(i,s){if(1&i){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(r);const h=t.MAs(1);return t.KtG(s.emitValue(h.value))})("keyup",function(){t.CHM(r);const h=t.MAs(1);return t.KtG(s.onKeyPress(h.value))}),t.qZA()}2&i&&t.Q6J("placeholder",s.placeholder)("value",s.value)},encapsulation:2})}return n})();function G(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," No hay paises por mostrar...\n"),t.qZA())}const W=function(n){return["/countries/by",n]};function k(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Informaci\xf3n"),t.qZA()()()),2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.hij(" ",e.flag," "),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.name.common),t.xp6(2),t.hij(" ",e.name.common," "),t.xp6(2),t.hij(" ",e.capital," "),t.xp6(2),t.hij(" ",t.lcZ(13,8,e.population)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,W,e.cca3))}}function tt(n,o){if(1&n&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4," #"),t.qZA(),t.TgZ(5,"th"),t._uU(6," Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8," Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12," Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14," Poblaci\xf3n"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,k,17,12,"tr",4),t.qZA()()),2&n){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let b=(()=>{class n{constructor(){this.countries=[]}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["width","35px",3,"src","alt"],[3,"routerLink"]],template:function(i,s){if(1&i&&(t.YNc(0,G,2,0,"div",0),t.YNc(1,tt,18,1,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",0===s.countries.length)("ngIfElse",r)}},dependencies:[u.sg,u.O5,d.rH,u.JJ],encapsulation:2})}return n})();function et(n,o){1&n&&t._UZ(0,"shared-loading-spinner")}let nt=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.intitialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.intitialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(i=>{this.countries=i,this.isLoading=!1})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"value","onValue","onDebaunce"],[4,"ngIf"],[3,"countries"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return s.searchByCapital(c)})("onDebaunce",function(c){return s.searchByCapital(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t.YNc(9,et,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("value",s.intitialValue),t.xp6(4),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[u.O5,C,B,b],encapsulation:2})}return n})();function it(n,o){1&n&&t._UZ(0,"shared-loading-spinner")}let ot=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.intitialValue=""}searchByName(e){this.isLoading=!0,this.countriesService.searchCountry(e).subscribe(i=>{this.countries=i,this.isLoading=!1})}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.intitialValue=this.countriesService.cacheStore.byCountries.term}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por nombre del pa\xeds",3,"value","onValue","onDebaunce"],[4,"ngIf"],[3,"countries"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"Por nombre del pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return s.searchByName(c)})("onDebaunce",function(c){return s.searchByName(c)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t.YNc(9,it,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("value",s.intitialValue),t.xp6(4),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[u.O5,C,B,b],encapsulation:2})}return n})();const st=function(n){return{"btn-outline-dark":n}};function rt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.searchByRegion(r))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(3,st,i.selectedRegion===e))("value",i.selectedRegion),t.xp6(1),t.hij(" ",e," ")}}function at(n,o){1&n&&t._UZ(0,"shared-loading-spinner")}let ct=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.selectedRegion=this.countriesService.cacheStore.byRegion.region,this.countries=this.countriesService.cacheStore.byRegion.countries}searchByRegion(e){this.selectedRegion=e,this.isLoading=!0,this.countriesService.searchRegion(e).subscribe(i=>{this.countries=i,this.isLoading=!1})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2 mt-1",3,"ngClass","value","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2","mt-1",3,"ngClass","value","click"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"Por regi\xf3n"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,rt,2,5,"button",2),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",3),t.YNc(9,at,1,0,"shared-loading-spinner",4),t._UZ(10,"countries-table",5),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("ngForOf",s.regions),t.xp6(4),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[u.mk,u.sg,u.O5,C,b],encapsulation:2})}return n})();var ut=a(4664);function lt(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function ht(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pa\xeds: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",5)(9,"h3"),t._uU(10,"Bandera"),t.qZA(),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"div",7)(13,"h3"),t._uU(14,"Informaci\xf3n"),t.qZA(),t.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),t._uU(18,"Poblaci\xf3n"),t.qZA(),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"li",9)(22,"strong"),t._uU(23,"C\xf3digo"),t.qZA(),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"h3"),t._uU(28,"Traducciones"),t.qZA(),t.TgZ(29,"div",11)(30,"span",12),t._uU(31),t.qZA(),t.TgZ(32,"span",12),t._uU(33),t.qZA(),t.TgZ(34,"span",12),t._uU(35),t.qZA(),t.TgZ(36,"span",12),t._uU(37),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA(),t.TgZ(40,"span",12),t._uU(41),t.qZA(),t.TgZ(42,"span",12),t._uU(43),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.country.name.common),t.xp6(5),t.Q6J("src",e.country.flags.svg,t.LSH),t.xp6(8),t.hij(" ",t.lcZ(20,11,e.country.population)," "),t.xp6(5),t.hij(" ",e.country.cca3," "),t.xp6(7),t.hij(" ",e.country.translations.ara.common,""),t.xp6(2),t.hij(" ",e.country.translations.bre.common,""),t.xp6(2),t.hij(" ",e.country.translations.ces.common,""),t.xp6(2),t.hij(" ",e.country.translations.cym.common,""),t.xp6(2),t.hij(" ",e.country.translations.deu.common,""),t.xp6(2),t.hij(" ",e.country.translations.est.common,""),t.xp6(2),t.hij(" ",e.country.translations.fra.common,"")}}const pt=[{path:"by-capital",component:nt},{path:"by-country",component:ot},{path:"by-region",component:ct},{path:"by/:id",component:(()=>{class n{constructor(e,i,s){this.activatedRoute=e,this.router=i,this.countryService=s}ngOnInit(){this.activatedRoute.params.pipe((0,ut.w)(({id:e})=>this.countryService.searchCountryByAlphaCode(e))).subscribe(e=>{e?this.country=e:this.router.navigateByUrl("")})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(d.gz),t.Y36(d.F0),t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],["alt","country.name.common",1,"img-thumbnail",3,"src"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(i,s){if(1&i&&(t.YNc(0,lt,2,0,"ng-template",null,0,t.W1O),t.YNc(2,ht,44,13,"div",1)),2&i){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",s.country)("ngIfElse",r)}},dependencies:[u.O5,u.JJ],encapsulation:2})}return n})()},{path:"**",redirectTo:"by-capital"}];let dt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(pt),d.Bz]})}return n})();var gt=a(6208);let mt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.ez,dt,gt.m]})}return n})()}}]);
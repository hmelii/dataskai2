(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"SD6/":function(t,e,i){"use strict";i.r(e),i.d(e,"SubmitsPageModule",function(){return Ct});var n=i("ofXK"),o=i("tyNb"),s=i("fXoL"),a=i("rQ7a"),c=i("iB5Y"),r=i("I88u"),l=i("TC4B"),b=i("O+6x"),p=i("DCIj"),g=i("wQG6");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-metric-service-in-submits"]],decls:5,vars:0,consts:[[1,"metric-service-in-submits"],[1,"metric-service-in-submits-ico"],["type","union"],[1,"metric-service-in-submits-text"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Kb(3,"span",3),s.jc(4,"metric service"),s.Jb(),s.Jb())},directives:[g.a],styles:["[_nghost-%COMP%]{position:absolute;right:111px}.metric-service-in-submits[_ngcontent-%COMP%]{display:flex;height:20px;align-items:center;color:var(--button-color-default);font-size:1.3rem}.metric-service-in-submits-ico[_ngcontent-%COMP%]{width:16px;height:16px;font-size:0;margin-right:4px}"]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-comments-in-submits"]],decls:5,vars:0,consts:[[1,"comments-in-submits"],[1,"comments-in-submits-ico"],["type","comment"],[1,"comments-in-submits-text"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Kb(3,"span",3),s.jc(4,"9"),s.Jb(),s.Jb())},directives:[g.a],styles:["[_nghost-%COMP%]{position:absolute;right:236px}.comments-in-submits[_ngcontent-%COMP%]{display:flex;height:20px;align-items:center;color:var(--button-color-default);font-size:1.3rem}.comments-in-submits-ico[_ngcontent-%COMP%]{width:16px;height:15px;font-size:0;margin-right:4px}"]}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-table-col-switcher"]],decls:3,vars:0,consts:[[1,"table-col-switcher"],[1,"table-col-switcher-ico"],["type","table"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Jb())},directives:[g.a],styles:["[_nghost-%COMP%]{position:absolute;right:74px}.table-col-switcher[_ngcontent-%COMP%]{display:flex;height:20px;align-items:center;color:var(--button-color-default);font-size:1.3rem}.table-col-switcher-ico[_ngcontent-%COMP%]{width:12px;height:12px;font-size:0}"]}),t})();var h=i("Bz6d"),m=i("m6/c"),v=i("DNt4"),x=i("b6eW"),w=i("xniV"),y=i("sGSV"),k=i("2Vo4"),O=i("z6cu"),P=i("tk/3"),C=i("3E0/"),I=i("JIr8"),M=i("0np6");let _=(()=>{class t{constructor(t){this.http=t,this.featuresInfoStageMessage=new k.a(null),this.currentFeatureInfoStageMessage=this.featuresInfoStageMessage.asObservable()}updateFeaturesInfoMessage(t){this.featuresInfoStageMessage.next(t)}fetchFeaturesInfo(t){const e=new P.c({fromObject:{id:t}});return this.http.get(M.a.API+"/assets/taskFeaturesInfo.json",{params:e}).pipe(Object(C.a)(500),Object(I.a)(t=>(console.log("Error: ",t.message),Object(O.a)(t))))}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(P.a))},t.\u0275prov=s.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),J=(()=>{class t{constructor(){this.dynamic="positive"}ngOnInit(){this.dynamic=this.number>=0?"positive":"negative"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-dynamics"]],inputs:{number:"number"},decls:2,vars:3,consts:[[1,"dynamics"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.jc(1),s.Jb()),2&t&&(s.xb("dynamics--"+e.dynamic),s.vb(1),s.kc(e.number))},styles:[".dynamics[_ngcontent-%COMP%]{display:block;color:var(--text-color-default);font-size:1rem;line-height:1.2}.dynamics--positive[_ngcontent-%COMP%]{color:var(--accent-text-color-default)}.dynamics--negative[_ngcontent-%COMP%]{color:var(--accent-text-color-negative)}"]}),t})(),K=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-loader"]],decls:11,vars:0,consts:[[1,"loader"],[1,"loader-ico"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","3.55556","height","3.55556","rx","1.77778","transform","matrix(1 0 0 -1 10.6667 5.33329)","fill","#DCDCDC"],["width","3.55556","height","3.55556","rx","1.77778","transform","matrix(1 0 0 -1 12.4444 9.7739)","fill","#CECECE"],["x","10.6667","y","10.6666","width","3.55556","height","3.55556","rx","1.77778","fill","#B2B2B2"],["x","6.2222","y","12.4444","width","3.55556","height","3.55556","rx","1.77778","fill","#A3A3A3"],["width","3.55556","height","3.55556","rx","1.77778","transform","matrix(-1 0 0 1 5.33329 10.6666)","fill","#878787"],["width","3.55556","height","3.55556","rx","1.77778","transform","matrix(-1 0 0 1 3.55561 6.21829)","fill","#797979"],["x","5.33329","y","5.33329","width","3.55556","height","3.55556","rx","1.77778","transform","rotate(-180 5.33329 5.33329)","fill","#5D5D5D"],["x","6.2222","width","3.55556","height","3.55556","rx","1.77778","fill","#4F4F4F"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Sb(),s.Kb(2,"svg",2),s.Gb(3,"rect",3),s.Gb(4,"rect",4),s.Gb(5,"rect",5),s.Gb(6,"rect",6),s.Gb(7,"rect",7),s.Gb(8,"rect",8),s.Gb(9,"rect",9),s.Gb(10,"rect",10),s.Jb(),s.Jb(),s.Jb())},styles:[".loader[_ngcontent-%COMP%], .loader-ico[_ngcontent-%COMP%]{width:16px;height:16px}.loader-ico[_ngcontent-%COMP%]{animation:LoaderAnimation 1s linear infinite}@keyframes LoaderAnimation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})(),j=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-add-to-comparison"]],decls:3,vars:0,consts:[[1,"add-to-comparison"],[1,"add-to-comparison-ico"],["type","comparison"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Jb())},directives:[g.a],styles:[".add-to-comparison[_ngcontent-%COMP%]{display:block;border-radius:1px;width:16px;height:16px;position:relative;color:inherit}.add-to-comparison-ico[_ngcontent-%COMP%]{width:16px;height:10px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-copy-link"]],decls:3,vars:0,consts:[[1,"copy-link"],[1,"copy-link-ico"],["type","copy-link"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Jb())},directives:[g.a],styles:[".copy-link[_ngcontent-%COMP%]{border-radius:1px;display:block;width:16px;height:16px;position:relative;color:inherit}.copy-link-ico[_ngcontent-%COMP%]{width:16px;height:10px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})(),z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-add-to-basket"]],decls:3,vars:0,consts:[[1,"add-to-basket"],[1,"add-to-basket-ico"],["type","basket"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Kb(1,"span",1),s.Gb(2,"app-icon",2),s.Jb(),s.Jb())},directives:[g.a],styles:[".add-to-basket[_ngcontent-%COMP%]{display:block;border-radius:1px;width:16px;height:16px;position:relative;color:inherit}.add-to-basket-ico[_ngcontent-%COMP%]{width:11px;height:14px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-favorite"]],decls:2,vars:0,consts:[[1,"favorite"],["type","star"]],template:function(t,e){1&t&&(s.Kb(0,"a",0),s.Gb(1,"app-icon",1),s.Jb())},directives:[g.a],styles:[".favorite[_ngcontent-%COMP%]{display:block;width:16px;height:16px;font-size:0;color:inherit}"]}),t})();function G(t,e){1&t&&(s.Kb(0,"span",14),s.Gb(1,"app-icon",15),s.Jb())}function F(t,e){if(1&t&&s.jc(0),2&t){const t=s.Tb(2).$implicit;s.kc(t.name)}}function Z(t,e){if(1&t&&(s.Kb(0,"div",3),s.Kb(1,"a",8),s.Kb(2,"span",9),s.ic(3,G,2,0,"ng-template",10),s.ic(4,F,1,1,"ng-template",11),s.Jb(),s.Kb(5,"span",12),s.Gb(6,"app-icon",13),s.Jb(),s.Jb(),s.Jb()),2&t){const t=s.Tb().$implicit;s.vb(2),s.Zb("ngSwitch",t.id)}}function $(t,e){if(1&t&&(s.Kb(0,"div",3),s.jc(1),s.Jb()),2&t){const t=s.Tb().$implicit;s.vb(1),s.kc(t.name)}}function D(t,e){if(1&t&&(s.Kb(0,"th",2),s.ic(1,Z,7,1,"div",7),s.ic(2,$,2,1,"div",7),s.Jb()),2&t){const t=e.$implicit;s.vb(1),s.Zb("ngIf",t.sortable),s.vb(1),s.Zb("ngIf",!t.sortable)}}function B(t,e){if(1&t&&(s.Kb(0,"div",25),s.Kb(1,"div"),s.jc(2),s.Jb(),s.Gb(3,"app-dynamics",26),s.Jb()),2&t){const t=s.Tb(2).$implicit,e=s.Tb().$implicit;s.vb(2),s.kc(e.metrics[t.id].short_value),s.vb(1),s.Zb("number",e.metrics[t.id].delta)}}function L(t,e){1&t&&s.Gb(0,"app-loader")}function N(t,e){if(1&t&&(s.Kb(0,"div",23),s.ic(1,B,4,2,"div",24),s.ic(2,L,1,0,"app-loader",21),s.Jb()),2&t){const t=s.Tb().$implicit,e=s.Tb().$implicit;s.vb(1),s.Zb("ngIf",e.metrics[t.id]),s.vb(1),s.Zb("ngIf",!e.metrics[t.id])}}function A(t,e){1&t&&(s.Kb(0,"div",28),s.Gb(1,"app-add-to-comparison"),s.Gb(2,"app-copy-link"),s.Gb(3,"app-add-to-basket"),s.Jb())}function Y(t,e){1&t&&s.Gb(0,"app-favorite")}function Q(t,e){if(1&t&&s.ic(0,Y,1,0,"app-favorite",21),2&t){const t=s.Tb(2).$implicit,e=s.Tb().$implicit;s.Zb("ngIf",e[t.id])}}function E(t,e){if(1&t&&s.jc(0),2&t){const t=s.Tb(2).$implicit,e=s.Tb().$implicit;s.lc(" ",e[t.id]," ")}}function H(t,e){if(1&t&&(s.Kb(0,"div",23),s.Kb(1,"div",9),s.ic(2,A,4,0,"ng-template",27),s.ic(3,Q,1,1,"ng-template",10),s.ic(4,E,1,1,"ng-template",11),s.Jb(),s.Jb()),2&t){const t=s.Tb().$implicit;s.vb(1),s.Zb("ngSwitch",t.id)}}function V(t,e){if(1&t&&(s.Kb(0,"div"),s.Kb(1,"div",29),s.jc(2),s.Ub(3,"date"),s.Jb(),s.Kb(4,"div",29),s.jc(5),s.Ub(6,"date"),s.Jb(),s.Jb()),2&t){const t=s.Tb().$implicit,e=s.Tb().$implicit;s.vb(2),s.kc(s.Wb(3,2,e[t.id],"hh:mm")),s.vb(3),s.kc(s.Wb(6,5,e[t.id],"dd:MM:YYYY"))}}function W(t,e){1&t&&(s.Kb(0,"div"),s.jc(1,"Notebook"),s.Jb())}function U(t,e){if(1&t&&(s.Kb(0,"div",30),s.Kb(1,"div",31),s.Gb(2,"app-icon",32),s.Jb(),s.ic(3,W,2,0,"div",21),s.Kb(4,"div"),s.jc(5),s.Jb(),s.Jb()),2&t){const t=s.Tb().$implicit,e=s.Tb().$implicit;s.vb(3),s.Zb("ngIf",e[t.id].notebook),s.vb(2),s.mc("",e[t.id].files.length," ",e[t.id].files.length>1?"files":"file","")}}function X(t,e){if(1&t){const t=s.Lb();s.Kb(0,"div"),s.Kb(1,"a",33),s.Qb("click",function(){s.ec(t);const e=s.Tb(2).$implicit;return s.Tb().featureHandleClick(e.id)}),s.jc(2),s.Jb(),s.Jb()}if(2&t){const t=s.Tb().$implicit,e=s.Tb().$implicit;s.vb(2),s.kc(e[t.id].count)}}function q(t,e){if(1&t&&(s.Kb(0,"td",19),s.ic(1,N,3,2,"div",20),s.ic(2,H,5,1,"div",20),s.ic(3,V,7,8,"div",21),s.ic(4,U,6,3,"div",22),s.ic(5,X,3,1,"div",21),s.Jb()),2&t){const t=e.$implicit,i=s.Tb().$implicit;s.vb(1),s.Zb("ngIf","metric"===t.type),s.vb(1),s.Zb("ngIf","field"===t.type),s.vb(1),s.Zb("ngIf","date"===t.type),s.vb(1),s.Zb("ngIf","files"===t.type&&i[t.id].files),s.vb(1),s.Zb("ngIf","features"===t.type)}}function R(t,e){if(1&t&&(s.Kb(0,"tr"),s.Kb(1,"th",16),s.Kb(2,"div",17),s.jc(3),s.Jb(),s.Jb(),s.ic(4,q,6,5,"td",18),s.Jb()),2&t){const t=e.index,i=s.Tb();s.vb(3),s.kc(t+1),s.vb(1),s.Zb("ngForOf",i.cols)}}let tt=(()=>{class t{constructor(t){this.featuresInfoService=t,this.cols=[],this.rows=[],this.headDict={}}ngOnInit(){}ngOnChanges(){this.config&&this.generateTableHead(),this.items&&this.generateTableBody()}generateTableHead(){this.cols=this.config.data.columns,console.log("this.config",this.config)}generateTableBody(){console.log("this.items",this.items),this.rows=this.items.data.submits,console.log(this.rows)}featureHandleClick(t){console.log(t),this.featuresInfoService.updateFeaturesInfoMessage(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Fb(_))},t.\u0275cmp=s.zb({type:t,selectors:[["app-table"]],inputs:{config:"config",items:"items"},features:[s.ub],decls:9,vars:2,consts:[[1,"table"],[1,"table-thead"],[1,"table-thead-th"],[1,"table-thead-th-heading"],["class","table-thead-th",4,"ngFor","ngForOf"],[1,"table-tbody"],[4,"ngFor","ngForOf"],["class","table-thead-th-heading",4,"ngIf"],[1,"table-thead-th-link","table-thead-th-link--sortable"],[3,"ngSwitch"],["ngSwitchCase","favorite"],["ngSwitchDefault",""],[1,"table-thead-th-link-ico","table-thead-th-link-ico--triangle"],["type","triangle"],[1,"table-thead-th-link-ico","table-thead-th-link-ico--star"],["type","star",1,"table-thead-th-link-ico-svg"],[1,"table-tbody-th"],[1,"table-tbody-th-heading"],["class","table-tbody-td",4,"ngFor","ngForOf"],[1,"table-tbody-td"],["class","table-tbody-td-heading",4,"ngIf"],[4,"ngIf"],["class","table-files",4,"ngIf"],[1,"table-tbody-td-heading"],["class","table-metric",4,"ngIf"],[1,"table-metric"],[3,"number"],["ngSwitchCase","actions"],[1,"table-actions"],[1,"table-tbody-td-sub-sub-heading"],[1,"table-files"],[1,"table-files-ico"],["type","download"],[1,"table-link",3,"click"]],template:function(t,e){1&t&&(s.Kb(0,"table",0),s.Kb(1,"thead",1),s.Kb(2,"tr"),s.Kb(3,"th",2),s.Kb(4,"div",3),s.jc(5,"#"),s.Jb(),s.Jb(),s.ic(6,D,3,2,"th",4),s.Jb(),s.Jb(),s.Kb(7,"tbody",5),s.ic(8,R,5,2,"tr",6),s.Jb(),s.Jb()),2&t&&(s.vb(6),s.Zb("ngForOf",e.cols),s.vb(2),s.Zb("ngForOf",e.rows))},directives:[n.i,n.j,n.k,n.l,n.m,g.a,J,K,j,S,z,T],pipes:[n.d],styles:[".table[_ngcontent-%COMP%]{border:0;border-collapse:collapse;border-spacing:0;width:100%}.table-thead-th[_ngcontent-%COMP%]{background:var(--table-background-default);border:0;border-left:1px solid var(--table-border-default);padding:12px;text-align:left;vertical-align:top}.table-tbody-td[_ngcontent-%COMP%], .table-tbody-th[_ngcontent-%COMP%]{background:var(--table-background-secondary);border-left:1px solid var(--table-border-default);border-top:1px solid var(--table-border-default);padding:12px;vertical-align:top;text-align:left}.table-thead-th-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.4rem;font-weight:500;letter-spacing:.02em;text-transform:uppercase;white-space:nowrap;position:relative;overflow:hidden;text-overflow:ellipsis;max-width:180px}.table-thead-th-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.table-thead-th-sub-heading[_ngcontent-%COMP%]{margin-top:3px;color:var(--text-color-secondary);font-size:.8rem;letter-spacing:.01em;line-height:1;text-transform:uppercase}.table-tbody-th-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.2rem;line-height:1.1666666667}.table-tbody-td-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;max-width:180px;overflow:hidden;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.table-tbody-td--sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.2rem}.table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;line-height:1;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}*[_ngcontent-%COMP%] + .table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{margin-top:4px}.table-status-ico[_ngcontent-%COMP%]{display:block;width:16px;height:16px;color:var(--accent-text-color-default)}.table-thead-th-link[_ngcontent-%COMP%]{color:inherit}.table-thead-th-link--sortable[_ngcontent-%COMP%]{padding-right:12px;position:relative}.table-thead-th-link-ico[_ngcontent-%COMP%]{display:inline-block;color:inherit;font-size:0;line-height:1}.table-thead-th-link-ico--triangle[_ngcontent-%COMP%]{width:7px;height:4px;margin:auto;position:absolute;top:0;right:0;bottom:0}.table-thead-th-link-ico--star[_ngcontent-%COMP%]{width:14px;height:13px;margin-top:4px;position:relative}.table-thead-th-link-ico-svg[_ngcontent-%COMP%]{margin:auto;position:absolute;top:0;left:0;right:0;bottom:0}.table-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.table-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.table-link[_ngcontent-%COMP%]{color:inherit}.table-files[_ngcontent-%COMP%]{padding-left:21px;position:relative}.table-files-ico[_ngcontent-%COMP%]{width:10px;height:14px;position:absolute;top:2px;left:0;color:inherit}"]}),t})();const et=function(t){return{"pagination-item--active":t}};function it(t,e){if(1&t&&(s.Kb(0,"div",7),s.Kb(1,"a",8),s.jc(2),s.Jb(),s.Jb()),2&t){const t=e.index,i=s.Tb(2);s.xb(s.bc(3,et,t+1===i.currentPage)),s.vb(2),s.kc(t+1)}}const nt=function(){return[]};function ot(t,e){if(1&t&&(s.Kb(0,"div",1),s.Kb(1,"a",2),s.Kb(2,"span",3),s.Gb(3,"app-icon",4),s.Jb(),s.Jb(),s.ic(4,it,3,5,"div",5),s.Kb(5,"a",6),s.Kb(6,"span",3),s.Gb(7,"app-icon",4),s.Jb(),s.Jb(),s.Jb()),2&t){const t=s.Tb();s.vb(3),s.Zb("type","arrow"),s.vb(1),s.Zb("ngForOf",s.ac(3,nt).constructor(t.totalPages)),s.vb(3),s.Zb("type","arrow")}}let st=(()=>{class t{constructor(){this.currentPage=null,this.totalPages=null}ngOnInit(){}ngOnChanges(){this.currentPage&&this.totalPages&&console.log("this.currentPage && this.totalPages",this.currentPage,this.totalPages)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},features:[s.ub],decls:1,vars:1,consts:[["class","pagination",4,"ngIf"],[1,"pagination"],[1,"pagination-arrow","pagination-arrow--prev"],[1,"pagination-arrow-ico"],[3,"type"],["class","pagination-item",3,"class",4,"ngFor","ngForOf"],[1,"pagination-arrow","pagination-arrow--next"],[1,"pagination-item"],[1,"pagination-link"]],template:function(t,e){1&t&&s.ic(0,ot,8,4,"div",0),2&t&&s.Zb("ngIf",e.currentPage&&e.totalPages)},directives:[n.j,g.a,n.i],styles:[".pagination[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.pagination-item[_ngcontent-%COMP%]{display:block;margin:0 7px;font-size:1.3rem;line-height:1.3846153846}.pagination-item--active[_ngcontent-%COMP%]{color:var(--accent-text-color-default);font-weight:700}.pagination-link[_ngcontent-%COMP%]{color:inherit}.pagination-arrow[_ngcontent-%COMP%]{display:block;margin:0 7px;color:var(--text-color-default)}.pagination-arrow-ico[_ngcontent-%COMP%]{display:block;width:11px;height:10px;font-size:0}.pagination-arrow--next[_ngcontent-%COMP%]   .pagination-arrow-ico[_ngcontent-%COMP%]{transform:rotate(180deg)}"]}),t})();var at=i("Hicy");const ct=function(t){return{"select-item--active":t}};function rt(t,e){if(1&t){const t=s.Lb();s.Kb(0,"li",8),s.Qb("click",function(){s.ec(t);const i=e.$implicit;return s.Tb(3).handleChange(i)}),s.Kb(1,"a",9),s.jc(2),s.Jb(),s.Jb()}if(2&t){const t=e.$implicit,i=s.Tb(3);s.xb(s.bc(3,ct,t.value===i.selectedOption.value)),s.vb(2),s.kc(t.label)}}function lt(t,e){if(1&t&&(s.Kb(0,"ul",6),s.ic(1,rt,3,5,"li",7),s.Jb()),2&t){const t=s.Tb(2);s.vb(1),s.Zb("ngForOf",t.options)}}function bt(t,e){if(1&t){const t=s.Lb();s.Kb(0,"div",1),s.Qb("clickOutside",function(e){return s.ec(t),s.Tb().onClickedOutside(e)})("click",function(){return s.ec(t),s.Tb().handleClick()}),s.Kb(1,"div",2),s.jc(2),s.Jb(),s.ic(3,lt,2,1,"ul",3),s.Kb(4,"div",4),s.Gb(5,"app-icon",5),s.Jb(),s.Jb()}if(2&t){const t=s.Tb();s.vb(2),s.kc(t.selectedOption.label),s.vb(1),s.Zb("ngIf",t.isShow)}}let pt=(()=>{class t{constructor(){this.selectedOption=null,this.options=null,this.isShow=!1}ngOnInit(){}handleClick(){this.isShow=!this.isShow,console.log(this.isShow)}ngOnChanges(){this.options&&!this.options.filter(t=>t.selected).length?this.selectedOption=this.options[0]:this.options&&(this.selectedOption=this.options.find(t=>t.selected))}handleChange(t){this.selectedOption=t}onClickedOutside(t){this.isShow&&(this.isShow=!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-select"]],inputs:{options:"options"},features:[s.ub],decls:1,vars:1,consts:[["class","select",3,"clickOutside","click",4,"ngIf"],[1,"select",3,"clickOutside","click"],[1,"select-value"],["class","select-list",4,"ngIf"],[1,"select-ico"],["type","triangle"],[1,"select-list"],["class","select-item",3,"class","click",4,"ngFor","ngForOf"],[1,"select-item",3,"click"],[1,"select-link"]],template:function(t,e){1&t&&s.ic(0,bt,6,2,"div",0),2&t&&s.Zb("ngIf",e.options)},directives:[n.j,at.a,g.a,n.i],styles:[".select[_ngcontent-%COMP%]{cursor:pointer;background:var(--background-tertiary);border-radius:3px;display:inline-block;position:relative;height:32px;padding:0 24px 0 8px}.select-value[_ngcontent-%COMP%]{display:block;height:32px;font-size:1.3rem;line-height:32px}.select-list[_ngcontent-%COMP%]{background:var(--background-tertiary);border-radius:3px;display:flex;flex-direction:column-reverse;margin:0;padding:2px 0;position:absolute;bottom:100%;left:0;right:0;list-style:none;transform:translateY(-4px)}.select-item[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1.2rem;text-align:right;line-height:1.1666666667}.select-item--active[_ngcontent-%COMP%]{color:var(--accent-text-color-default);font-weight:700}.select-ico[_ngcontent-%COMP%]{width:8px;height:4px;margin:auto;position:absolute;top:0;bottom:0;right:12px;color:var(--text-color-default);font-size:0;line-height:0}.select-link[_ngcontent-%COMP%]{display:block;padding:8px;color:inherit}"]}),t})();function gt(t,e){if(1&t&&(s.Kb(0,"div",1),s.Kb(1,"div",2),s.jc(2,"Rows per page"),s.Jb(),s.Gb(3,"app-select",3),s.Jb()),2&t){const t=s.Tb();s.vb(3),s.Zb("options",t.options)}}let dt=(()=>{class t{constructor(){this.options=null}ngOnInit(){console.log("tess")}ngOnChanges(){this.rows&&this.rowsDefault&&(this.options=this.rows.map(t=>({value:t,label:t,selected:this.rowsDefault===t})))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-row-per-page"]],inputs:{rows:"rows",rowsDefault:"rowsDefault"},features:[s.ub],decls:1,vars:1,consts:[["class","row-per-page",4,"ngIf"],[1,"row-per-page"],[1,"row-per-page-label"],[1,"row-per-page-select",3,"options"]],template:function(t,e){1&t&&s.ic(0,gt,4,1,"div",0),2&t&&s.Zb("ngIf",e.rows&&e.options)},directives:[n.j,pt],styles:[".row-per-page[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.row-per-page-label[_ngcontent-%COMP%]{margin-right:8px;font-size:1.2rem;line-height:1.1666666667}"]}),t})();function ft(t,e){if(1&t&&s.Gb(0,"app-row-per-page",4),2&t){const t=s.Tb(2);s.Zb("rows",t.rows)("rowsDefault",t.rowsDefault)}}function ut(t,e){if(1&t&&(s.Kb(0,"div",1),s.Gb(1,"app-pagination",2),s.ic(2,ft,1,2,"app-row-per-page",3),s.Jb()),2&t){const t=s.Tb();s.vb(1),s.Zb("currentPage",t.currentPage)("totalPages",t.totalPages),s.vb(1),s.Zb("ngIf",t.rows)}}let ht=(()=>{class t{constructor(t){this.taskService=t,this.config=null,this.rows=null,this.totalPages=null,this.currentPage=null,this.taskService.currentTaskConfigStageMessage.subscribe(t=>{this.config=t,t.data&&(this.rows=t.data.rows_per_page_values,this.rowsDefault=t.data.rows_per_page_default)})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Fb(y.a))},t.\u0275cmp=s.zb({type:t,selectors:[["app-meta-panel"]],inputs:{totalPages:"totalPages",currentPage:"currentPage"},decls:1,vars:1,consts:[["class","meta-panel",4,"ngIf"],[1,"meta-panel"],[1,"meta-panel-pagination",3,"currentPage","totalPages"],[3,"rows","rowsDefault",4,"ngIf"],[3,"rows","rowsDefault"]],template:function(t,e){1&t&&s.ic(0,ut,3,3,"div",0),2&t&&s.Zb("ngIf",e.config)},directives:[n.j,st,dt],styles:[".meta-panel[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:24px;display:flex;flex-direction:row;align-items:center}.meta-panel-pagination[_ngcontent-%COMP%]{margin-right:26px}"]}),t})();function mt(t,e){if(1&t&&(s.Kb(0,"li",11),s.Kb(1,"div",12),s.jc(2),s.Jb(),s.Kb(3,"div",13),s.jc(4),s.Jb(),s.Jb()),2&t){const t=e.$implicit;s.vb(2),s.kc(t.name),s.vb(2),s.kc(t.description)}}function vt(t,e){if(1&t){const t=s.Lb();s.Kb(0,"div",1),s.Kb(1,"a",2),s.Qb("click",function(){return s.ec(t),s.Tb().handleClose()}),s.Kb(2,"span",3),s.Gb(3,"app-icon",4),s.Jb(),s.Jb(),s.Kb(4,"div",5),s.Kb(5,"div",6),s.jc(6,"Features"),s.Jb(),s.Kb(7,"div",7),s.jc(8,"285 321 features used"),s.Jb(),s.Jb(),s.Kb(9,"div",8),s.Kb(10,"ul",9),s.ic(11,mt,5,2,"li",10),s.Jb(),s.Jb(),s.Jb()}if(2&t){const t=s.Tb();s.vb(3),s.Zb("type","close"),s.vb(8),s.Zb("ngForOf",t.featuresNames)}}let xt=(()=>{class t{constructor(t){this.featuresInfoService=t,this.isShown=!1,this.featuresNames=[],this.loading=!1,this.error=null}ngOnInit(){this.featuresInfoService.currentFeatureInfoStageMessage.subscribe(t=>{this.isShown=!!t,this.isShown&&this.fetchFeaturesInfo(t)})}fetchFeaturesInfo(t){this.loading=!0,this.featuresInfoService.fetchFeaturesInfo(t).subscribe(t=>{this.featuresInfo=t,this.featuresNames=this.featuresInfo.data,console.log("this.featuresNames",this.featuresNames),this.loading=!1},t=>{this.error=t.message},()=>{console.log("\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u0438\u043c\u0430 \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435")})}handleClose(){this.featuresInfoService.updateFeaturesInfoMessage(null)}}return t.\u0275fac=function(e){return new(e||t)(s.Fb(_))},t.\u0275cmp=s.zb({type:t,selectors:[["app-features-info"]],decls:1,vars:1,consts:[["class","feature-info",4,"ngIf"],[1,"feature-info"],[1,"feature-info-close-btn",3,"click"],[1,"feature-info-close-btn-ico"],[3,"type"],[1,"feature-info-head"],[1,"feature-info-heading"],[1,"feature-info-used"],[1,"feature-info-body"],[1,"feature-list"],["class","feature-list-item",4,"ngFor","ngForOf"],[1,"feature-list-item"],[1,"feature-list-text"],[1,"feature-list-bubble"]],template:function(t,e){1&t&&s.ic(0,vt,12,2,"div",0),2&t&&s.Zb("ngIf",e.isShown)},directives:[n.j,g.a,n.i],styles:[".feature-info[_ngcontent-%COMP%]{background:var(--background-quinary);width:470px;position:absolute;top:80px;right:0;bottom:0;padding:16px 0 16px 8px;display:flex;flex-direction:column;align-items:stretch}.feature-info-head[_ngcontent-%COMP%]{flex:0 1 auto;padding:0 40px 5px;color:var(--text-color-secondary)}.feature-info-body[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow-y:auto;padding:20px 0 0}.feature-info-close-btn[_ngcontent-%COMP%]{position:absolute;top:16px;right:24px}.feature-info-close-btn-ico[_ngcontent-%COMP%]{display:block;width:16px;height:16px;color:var(--button-color-default)}.feature-info-heading[_ngcontent-%COMP%]{font-weight:500;font-size:1.6rem;line-height:1.5}.feature-info-used[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.1666666667}.feature-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;counter-reset:featureList}.feature-list-item[_ngcontent-%COMP%]{cursor:pointer;border-radius:4px;margin:0;padding:6px 0;position:relative;color:var(--text-color-default);font-size:1.3rem;line-height:1;display:flex;align-items:center;flex-direction:row;transition:all .3s ease}.feature-list-item[_ngcontent-%COMP%]:hover{background:var(--background-tertiary)}.feature-list-item[_ngcontent-%COMP%]:hover   .feature-list-bubble[_ngcontent-%COMP%]{opacity:1;visibility:visible}.feature-list-item[_ngcontent-%COMP%]:before{counter-increment:featureList;content:counter(featureList);color:var(--text-color-tertiary);display:inline-block;min-width:32px;font-size:1rem;margin-right:8px;text-align:right}.feature-list-bubble[_ngcontent-%COMP%]{background:var(--background-tertiary);border-radius:4px;width:300px;padding:8px;position:absolute;top:100%;right:30px;font-size:1rem;z-index:1;line-height:1.4;transform:translateY(2px);opacity:0;visibility:hidden;transition:all .3s ease}"]}),t})();function wt(t,e){if(1&t&&(s.Kb(0,"div",1),s.Gb(1,"app-table",2),s.Gb(2,"app-meta-panel",3),s.Gb(3,"app-features-info",4),s.Jb()),2&t){const t=s.Tb();s.vb(1),s.Zb("config",t.config)("items",t.submits),s.vb(1),s.Zb("currentPage",t.currentPage)("totalPages",t.totalPages)}}let yt=(()=>{class t{constructor(t,e,i,n){this.submitsService=t,this.authorsService=e,this.projectService=i,this.taskService=n,this.loading={projectInfo:!1,taskInfo:!1,taskConfig:!1,submits:!1,config:!1},this.loaded={projectInfo:!1,taskConfig:!1,taskInfo:!1,submits:!1,config:!1},this.submits=null,this.error=null,this.projectInfo=null,this.taskInfo=null,this.config=null,this.currentPage=null,this.totalPages=null}ngOnInit(){this.fetchConfig(),this.fetchSubmits(),this.fetchTaskInfo(),this.fetchProjectInfo()}fetchSubmits(){this.loading.submits=!0,this.submitsService.fetchSubmits().subscribe(t=>{console.log("submits",t),this.submits=t,this.currentPage=t.meta.current_page,this.totalPages=t.meta.total_pages,this.loaded.submits=!0},t=>{this.error=t.message},()=>{this.loading.submits=!1})}fetchConfig(){this.loading.config=!0,this.taskService.fetchTaskConfig().subscribe(t=>{this.config=t,this.taskService.updateTaskConfigMessage(t),this.loaded.taskConfig=!0},t=>{this.error=t.message},()=>{this.loading.taskConfig=!1})}fetchTaskInfo(){this.loading.taskInfo=!0,this.taskService.fetchTaskInfo().subscribe(t=>{this.taskInfo=t,this.authorsService.updateAuthorsMessage(this.taskInfo.data.authors),this.taskService.updateTaskInfoMessage(this.taskInfo.data.task_description),this.loaded.taskInfo=!0},t=>{this.error=t.message},()=>{this.loading.taskInfo=!1})}fetchProjectInfo(){this.loading.projectInfo=!0,this.projectService.fetchProjectInfo().subscribe(t=>{this.projectInfo=t,this.projectService.updateProjectMessage(this.projectInfo.data.tasks.names),this.loaded.projectInfo=!0},t=>{this.error=t.message},()=>{this.loading.projectInfo=!1})}}return t.\u0275fac=function(e){return new(e||t)(s.Fb(v.a),s.Fb(x.a),s.Fb(w.a),s.Fb(y.a))},t.\u0275cmp=s.zb({type:t,selectors:[["app-submits"]],decls:1,vars:1,consts:[["class","submits",4,"ngIf"],[1,"submits"],[3,"config","items"],[3,"currentPage","totalPages"],[1,"submits-features"]],template:function(t,e){1&t&&s.ic(0,wt,4,4,"div",0),2&t&&s.Zb("ngIf",e.submits)},directives:[n.j,tt,ht,xt],styles:[""]}),t})();const kt=[{path:"",component:(()=>{class t{constructor(){this.title="Submits"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.zb({type:t,selectors:[["app-submits-page"]],decls:13,vars:0,template:function(t,e){1&t&&(s.Kb(0,"app-main-layout"),s.Kb(1,"app-header"),s.Kb(2,"header-body"),s.Gb(3,"app-task-selection"),s.Jb(),s.Jb(),s.Kb(4,"app-filters-panel"),s.Gb(5,"app-authors-filter"),s.Gb(6,"app-submits-filter"),s.Gb(7,"app-metric-service-in-submits"),s.Gb(8,"app-comments-in-submits"),s.Gb(9,"app-table-col-switcher"),s.Gb(10,"app-search"),s.Jb(),s.Kb(11,"app-main"),s.Gb(12,"app-submits"),s.Jb(),s.Jb())},directives:[a.a,c.a,r.a,l.a,b.a,p.a,d,f,u,h.a,m.a,yt],styles:[""]}),t})()}];let Ot=(()=>{class t{constructor(){}}return t.\u0275mod=s.Db({type:t}),t.\u0275inj=s.Cb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(kt)],o.d]}),t})();var Pt=i("dFjG");let Ct=(()=>{class t{}return t.\u0275mod=s.Db({type:t}),t.\u0275inj=s.Cb({factory:function(e){return new(e||t)},imports:[[Ot,n.b,Pt.a]]}),t})()}}]);
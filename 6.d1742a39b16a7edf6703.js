(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iyif:function(t,e,n){"use strict";n.r(e),n.d(e,"ComparisonPageModule",function(){return ut});var i=n("ofXK"),o=n("dFjG"),a=n("tyNb"),s=n("fXoL"),c=n("rQ7a"),r=n("iB5Y"),b=n("I88u"),l=n("HIQp"),p=n("TC4B"),m=n("m6/c"),d=n("b6eW"),u=n("xniV"),g=n("sGSV"),h=n("FDUU"),f=n("wQG6"),v=n("WvdV");const y=function(t){return{"select-baseline--active":t}};let C=(()=>{class t{constructor(){this.isActive=!1,this.onHandleChangeBaselineID=new s.n}ngOnInit(){this.isActive=this.baselineID===this.submitID}handleChangeBaselineID(){this.onHandleChangeBaselineID.emit(this.submitID)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-comparison-table-select-baseline"]],inputs:{baselineID:"baselineID",submitID:"submitID"},outputs:{onHandleChangeBaselineID:"onHandleChangeBaselineID"},decls:4,vars:3,consts:[[1,"select-baseline",3,"ngClass"],[1,"select-baseline-button",3,"click"],[1,"select-baseline-button-ico"],["type","baseline"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"a",1),s.Wb("click",function(){return e.handleChangeBaselineID()}),s.Pb(2,"span",2),s.Kb(3,"app-icon",3),s.Ob(),s.Ob(),s.Ob()),2&t&&s.fc("ngClass",s.hc(1,y,e.isActive))},directives:[i.i,f.a],styles:[".select-baseline[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;top:6px;left:0;opacity:0;z-index:10;transition:all .3s ease}.select-baseline[_ngcontent-%COMP%]:hover{opacity:.6}.select-baseline--active[_ngcontent-%COMP%]{opacity:1}.select-baseline-button[_ngcontent-%COMP%]{display:flex;width:inherit;height:inherit;align-items:center;color:inherit;justify-content:center}.select-baseline-button-ico[_ngcontent-%COMP%]{display:block;width:10px;height:16px;font-size:0;color:inherit}"]}),t})(),O=(()=>{class t{constructor(t,e){this.comparisonService=t,this.activateRoute=e,this.subscribeRouteUpdate()}ngOnInit(){}handleClick(){console.log(this.taskID,this.submitID),this.comparisonService.updateComparisonIDSMessage({taskID:this.taskID,submitID:this.submitID})}subscribeRouteUpdate(){this.activateRoute.params.subscribe(t=>{this.taskID=t.taskID})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(h.a),s.Jb(a.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-comparison-table-remove-form-comparison"]],inputs:{submitID:"submitID"},decls:4,vars:0,consts:[[1,"remove-from-comparison"],[1,"remove-from-comparison-button",3,"click"],[1,"remove-from-comparison-button-ico"],["type","remove-form-comparison"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"a",1),s.Wb("click",function(){return e.handleClick()}),s.Pb(2,"span",2),s.Kb(3,"app-icon",3),s.Ob(),s.Ob(),s.Ob())},directives:[f.a],styles:[".remove-from-comparison[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;top:6px;right:0;z-index:10}.remove-from-comparison-button[_ngcontent-%COMP%]{display:flex;width:inherit;height:inherit;align-items:center;color:inherit;justify-content:center}.remove-from-comparison-button-ico[_ngcontent-%COMP%]{display:block;width:13px;height:6px;font-size:0;color:inherit}"]}),t})();var x=n("2/VC"),I=n("tScM");function P(t,e){if(1&t&&s.Kb(0,"app-dynamics",4),2&t){const t=s.Zb();s.fc("number",t.comparison.short_delta)}}function D(t,e){if(1&t&&s.Kb(0,"app-dynamics",4),2&t){const t=s.Zb();s.fc("number",t.comparison.delta)}}let M=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-comparison-table-metric"]],inputs:{metric:"metric",comparison:"comparison"},decls:7,vars:4,consts:[[1,"comparison-table-metric"],[1,"comparison-table-metric-value"],[3,"number",4,"ngIf"],[1,"comparison-table-metric-bubble"],[3,"number"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"a",1),s.uc(2),s.Ob(),s.sc(3,P,1,1,"app-dynamics",2),s.Pb(4,"div",3),s.uc(5),s.sc(6,D,1,1,"app-dynamics",2),s.Ob(),s.Ob()),2&t&&(s.yb(2),s.vc(e.metric.short_value),s.yb(1),s.fc("ngIf",e.comparison),s.yb(2),s.wc(" ",e.metric.value," "),s.yb(1),s.fc("ngIf",e.comparison))},directives:[i.k,I.a],styles:['.comparison-table-metric[_ngcontent-%COMP%]:hover   .comparison-table-metric-bubble[_ngcontent-%COMP%]{opacity:1;visibility:visible}.comparison-table-metric-value[_ngcontent-%COMP%]{color:inherit}.comparison-table-metric-value[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0}.comparison-table-metric-bubble[_ngcontent-%COMP%]{background:var(--background-secondary);border-radius:4px;width:200px;padding:9px 8px;position:absolute;top:100%;z-index:2;opacity:0;visibility:hidden;transform:translateY(2px);transition:all .3s ease}']}),t})();var w=n("vyQX"),k=n("SgQ0"),_=n("cZ46");function Z(t,e){1&t&&s.Lb(0)}const S=function(t){return{"comparison-table-th--align-right":t}};function $(t,e){if(1&t&&(s.Pb(0,"th",9),s.Pb(1,"div",10),s.uc(2),s.Ob(),s.Ob()),2&t){const t=s.Zb().$implicit;s.fc("ngClass",s.hc(2,S,"metric"===t.type)),s.yb(2),s.vc(t.name)}}function B(t,e){if(1&t&&(s.Pb(0,"td",9),s.Pb(1,"div",10),s.uc(2),s.Ob(),s.Ob()),2&t){const t=s.Zb().$implicit;s.fc("ngClass",s.hc(2,S,"metric"===t.type)),s.yb(2),s.vc(t.name)}}function K(t,e){1&t&&s.Lb(0)}function T(t,e){if(1&t){const t=s.Qb();s.Pb(0,"div"),s.Pb(1,"app-comparison-table-select-baseline",21),s.Wb("onHandleChangeBaselineID",function(e){return s.oc(t),s.Zb(4).handleChangeBaselineID(e)}),s.Ob(),s.Kb(2,"app-comparison-table-remove-form-comparison",22),s.Ob()}if(2&t){const t=s.Zb().$implicit,e=s.Zb(3);s.yb(1),s.fc("baselineID",e.baselineID)("submitID",t.id),s.yb(1),s.fc("submitID",t.id)}}function z(t,e){if(1&t&&s.Kb(0,"app-table-features",23),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit,n=s.Zb();s.fc("id",t.id||t.task_name)("text",t[e.id])("comparison",t.comparison?t.comparison[e.id]:null)("comparisonBaselineID",t.comparison?n.baselineID:null)}}function H(t,e){if(1&t&&s.Kb(0,"app-comparison-table-metric",24),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.fc("metric",t.metrics[e.id])("comparison",t.comparison?t.comparison[e.id]:null)}}function U(t,e){if(1&t&&(s.Pb(0,"div",25),s.uc(1),s.ac(2,"date"),s.Ob(),s.Pb(3,"div",25),s.uc(4),s.ac(5,"date"),s.Ob()),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.yb(1),s.wc(" ",s.cc(2,2,t[e.id],"hh:mm")," "),s.yb(3),s.wc(" ",s.cc(5,5,t[e.id],"dd:MM:YYYY")," ")}}function F(t,e){if(1&t&&s.Kb(0,"app-table-attachments",26),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.fc("attachments",t[e.id])}}function Y(t,e){if(1&t&&s.Kb(0,"app-table-actions",29),2&t){const t=s.Zb(2).$implicit;s.fc("id",t.id)}}function j(t,e){if(1&t&&s.Kb(0,"app-tags",30),2&t){const t=s.Zb(2).$implicit,e=s.Zb(2).$implicit;s.fc("text",t[e.id])}}function J(t,e){if(1&t&&s.uc(0),2&t){const t=s.Zb(2).$implicit,e=s.Zb(2).$implicit;s.wc(" ",t[e.id]," ")}}function Q(t,e){if(1&t&&(s.Pb(0,"div",15),s.sc(1,Y,1,1,"ng-template",27),s.sc(2,j,1,1,"ng-template",28),s.sc(3,J,1,1,"ng-template",20),s.Ob()),2&t){const t=s.Zb(3).$implicit;s.fc("ngSwitch",t.id)}}const R=function(t,e){return{"comparison-table-td--baseline":t,"comparison-table-td--align-right":e}};function q(t,e){if(1&t&&(s.Pb(0,"th",12),s.Kb(1,"div",13),s.sc(2,T,3,3,"div",14),s.Pb(3,"div",15),s.sc(4,z,1,4,"ng-template",16),s.sc(5,H,1,2,"ng-template",17),s.sc(6,U,6,8,"ng-template",18),s.sc(7,F,1,1,"ng-template",19),s.sc(8,Q,4,1,"ng-template",20),s.Ob(),s.Ob()),2&t){const t=e.$implicit,n=s.Zb(2),i=n.$implicit,o=n.index,a=s.Zb();s.fc("ngClass",s.ic(3,R,a.baselineID===t.id,"metric"===i.type||"features"===i.type||"model_version"===i.id)),s.yb(2),s.fc("ngIf",0===o),s.yb(1),s.fc("ngSwitch",i.type)}}function W(t,e){if(1&t&&s.sc(0,q,9,6,"th",11),2&t){const t=s.Zb(2);s.fc("ngForOf",t.cols)}}function G(t,e){if(1&t){const t=s.Qb();s.Pb(0,"div"),s.Pb(1,"app-comparison-table-select-baseline",21),s.Wb("onHandleChangeBaselineID",function(e){return s.oc(t),s.Zb(4).handleChangeBaselineID(e)}),s.Ob(),s.Kb(2,"app-comparison-table-remove-form-comparison",22),s.Ob()}if(2&t){const t=s.Zb().$implicit,e=s.Zb(3);s.yb(1),s.fc("baselineID",e.baselineID)("submitID",t.id),s.yb(1),s.fc("submitID",t.id)}}function A(t,e){if(1&t&&s.Kb(0,"app-table-features",23),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit,n=s.Zb();s.fc("id",t.id||t.task_name)("text",t[e.id])("comparison",t.comparison?t.comparison[e.id]:null)("comparisonBaselineID",t.comparison?n.baselineID:null)}}function V(t,e){if(1&t&&s.Kb(0,"app-comparison-table-metric",24),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.fc("metric",t.metrics[e.id])("comparison",t.comparison?t.comparison[e.id]:null)}}function E(t,e){if(1&t&&(s.Pb(0,"div",25),s.uc(1),s.ac(2,"date"),s.Ob(),s.Pb(3,"div",25),s.uc(4),s.ac(5,"date"),s.Ob()),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.yb(1),s.wc(" ",s.cc(2,2,t[e.id],"hh:mm")," "),s.yb(3),s.wc(" ",s.cc(5,5,t[e.id],"dd:MM:YYYY")," ")}}function L(t,e){if(1&t&&s.Kb(0,"app-table-attachments",26),2&t){const t=s.Zb().$implicit,e=s.Zb(2).$implicit;s.fc("attachments",t[e.id])}}function N(t,e){if(1&t&&s.Kb(0,"app-table-actions",29),2&t){const t=s.Zb(2).$implicit;s.fc("id",t.id)}}function X(t,e){if(1&t&&s.Kb(0,"app-tags",30),2&t){const t=s.Zb(2).$implicit,e=s.Zb(2).$implicit;s.fc("text",t[e.id])}}function tt(t,e){if(1&t&&s.uc(0),2&t){const t=s.Zb(2).$implicit,e=s.Zb(2).$implicit;s.wc(" ",t[e.id]," ")}}function et(t,e){if(1&t&&(s.Pb(0,"div",15),s.sc(1,N,1,1,"ng-template",27),s.sc(2,X,1,1,"ng-template",28),s.sc(3,tt,1,1,"ng-template",20),s.Ob()),2&t){const t=s.Zb(3).$implicit;s.fc("ngSwitch",t.id)}}function nt(t,e){if(1&t&&(s.Pb(0,"td",32),s.sc(1,G,3,3,"div",14),s.Pb(2,"div",15),s.sc(3,A,1,4,"ng-template",16),s.sc(4,V,1,2,"ng-template",17),s.sc(5,E,6,8,"ng-template",18),s.sc(6,L,1,1,"ng-template",19),s.sc(7,et,4,1,"ng-template",20),s.Ob(),s.Ob()),2&t){const t=e.$implicit,n=s.Zb(2),i=n.$implicit,o=n.index,a=s.Zb();s.fc("ngClass",s.ic(3,R,a.baselineID===t.id,"metric"===i.type||"features"===i.type||"model_version"===i.id)),s.yb(1),s.fc("ngIf",0===o),s.yb(1),s.fc("ngSwitch",i.type)}}function it(t,e){if(1&t&&s.sc(0,nt,8,6,"td",31),2&t){const t=s.Zb(2);s.fc("ngForOf",t.cols)}}function ot(t,e){if(1&t&&(s.Pb(0,"tr",3),s.sc(1,Z,1,0,"ng-container",4),s.sc(2,$,3,4,"ng-template",null,5,s.tc),s.sc(4,B,3,4,"ng-template",null,6,s.tc),s.sc(6,K,1,0,"ng-container",4),s.sc(7,W,1,1,"ng-template",null,7,s.tc),s.sc(9,it,1,1,"ng-template",null,8,s.tc),s.Ob()),2&t){const t=e.index,n=s.nc(3),i=s.nc(5),o=s.nc(8),a=s.nc(10);s.yb(1),s.fc("ngIf",0===t)("ngIfThen",n)("ngIfElse",i),s.yb(5),s.fc("ngIf",0===t)("ngIfThen",o)("ngIfElse",a)}}let at=(()=>{class t{constructor(){this.onHandleChangeBaselineID=new s.n}ngOnInit(){}ngOnChanges(t){}handleChangeBaselineID(t){this.onHandleChangeBaselineID.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-comparison-table"]],inputs:{rows:"rows",cols:"cols",baselineID:"baselineID"},outputs:{onHandleChangeBaselineID:"onHandleChangeBaselineID"},features:[s.wb],decls:3,vars:1,consts:[["appTableDragNDrop","",1,"comparison-table"],[1,"comparison-table-body"],["class","comparison-table-tr",4,"ngFor","ngForOf"],[1,"comparison-table-tr"],[4,"ngIf","ngIfThen","ngIfElse"],["numberTH",""],["numberTD",""],["dataTH",""],["dataTD",""],[1,"comparison-table-th",3,"ngClass"],[1,"comparison-table-th-text"],["class","comparison-table-td drag-n-drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"comparison-table-td","drag-n-drop",3,"ngClass"],[1,"table-drag-n-drop"],[4,"ngIf"],[3,"ngSwitch"],["ngSwitchCase","features"],["ngSwitchCase","metric"],["ngSwitchCase","date"],["ngSwitchCase","files"],["ngSwitchDefault",""],[3,"baselineID","submitID","onHandleChangeBaselineID"],[3,"submitID"],[3,"id","text","comparison","comparisonBaselineID"],[3,"metric","comparison"],[1,"table-tbody-td-sub-sub-heading"],[3,"attachments"],["ngSwitchCase","actions"],["ngSwitchCase","tags"],[3,"id"],[3,"text"],["class","comparison-table-td",3,"ngClass",4,"ngFor","ngForOf"],[1,"comparison-table-td",3,"ngClass"]],template:function(t,e){1&t&&(s.Pb(0,"table",0),s.Pb(1,"tbody",1),s.sc(2,ot,11,6,"tr",2),s.Ob(),s.Ob()),2&t&&(s.yb(2),s.fc("ngForOf",e.rows))},directives:[v.a,i.j,i.k,i.i,i.l,i.m,i.n,C,O,x.a,M,w.a,k.a,_.a],pipes:[i.d],styles:['.comparison-table[_ngcontent-%COMP%]{border:0;margin-bottom:100px;table-layout:fixed;border-spacing:1px;border-collapse:initial}.comparison-table-th[_ngcontent-%COMP%]{background:var(--table-background-default);border:0;padding:8px;text-align:left;vertical-align:top;font-size:1.2rem;width:140px;height:74px;position:relative;text-transform:uppercase}.drag-n-drop[_ngcontent-%COMP%]:before{content:"";cursor:move;-webkit-user-select:none;user-select:none;width:20px;height:20px;position:absolute;top:14px;left:30px;z-index:11}.comparison-table-td[_ngcontent-%COMP%]{background:var(--table-background-secondary);width:252px;height:74px;padding:8px;position:relative;vertical-align:top;text-align:left;transition:all .3s ease}.comparison-table-td--align-right[_ngcontent-%COMP%], .comparison-table-th--align-right[_ngcontent-%COMP%]{text-align:right}.comparison-table-td--baseline[_ngcontent-%COMP%]{background:var(--table-background-quinary)}.comparison-table-tr[_ngcontent-%COMP%]:first-child   .comparison-table-td[_ngcontent-%COMP%]{background:var(--table-background-default);padding:12px 32px}.comparison-table-th-text[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;position:relative;max-width:116px;text-overflow:ellipsis}.table-tbody-tr[_ngcontent-%COMP%]:hover   .table-tbody-td[_ngcontent-%COMP%], .table-tbody-tr[_ngcontent-%COMP%]:hover   .table-tbody-th[_ngcontent-%COMP%]{background:var(--table-background-tertiary)}.table-tbody-tr[_ngcontent-%COMP%]:hover   .table-tbody-td[_ngcontent-%COMP%]:hover, .table-tbody-tr[_ngcontent-%COMP%]:hover   .table-tbody-th[_ngcontent-%COMP%]:hover{background:var(--table-background-quaternary)}.table-tbody-tr--founded[_ngcontent-%COMP%]   .table-tbody-td[_ngcontent-%COMP%], .table-tbody-tr--founded[_ngcontent-%COMP%]   .table-tbody-th[_ngcontent-%COMP%]{background:var(--table-background-tertiary)!important}.table-tbody-tr--founded[_ngcontent-%COMP%]   .table-tbody-td--founded[_ngcontent-%COMP%]{background:var(--table-background-quaternary)!important}.table-tbody-tr--selected[_ngcontent-%COMP%]   .table-tbody-td[_ngcontent-%COMP%], .table-tbody-tr--selected[_ngcontent-%COMP%]   .table-tbody-th[_ngcontent-%COMP%]{background:var(--table-background-tertiary)!important}.table-thead-th-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.4rem;font-weight:500;letter-spacing:.02em;text-transform:uppercase;white-space:nowrap}.table-thead-th-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.table-thead-th-sub-heading[_ngcontent-%COMP%]{margin-top:3px;color:var(--text-color-secondary);font-size:.8rem;letter-spacing:.01em;line-height:1;text-transform:uppercase}.table-tbody-th-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.2rem;line-height:1.1666666667}.table-tbody-td-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;max-width:180px;overflow:hidden;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.table-tbody-td--sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.2rem}.table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;line-height:1;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}*[_ngcontent-%COMP%] + .table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{margin-top:4px}.table-status-ico[_ngcontent-%COMP%]{display:block;width:16px;height:16px;color:var(--accent-text-color-default)}.table-thead-th-link[_ngcontent-%COMP%]{color:inherit}.table-thead-th-link-ico[_ngcontent-%COMP%]{display:inline-block;color:inherit;font-size:0;line-height:1}.table-thead-th-link-ico--star[_ngcontent-%COMP%]{width:14px;height:13px;margin-top:4px;position:relative}.table-thead-th-link-ico-svg[_ngcontent-%COMP%]{margin:auto;position:absolute;top:0;left:0;right:0;bottom:0}.table-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.table-link[_ngcontent-%COMP%]{color:inherit}.table-drag-n-drop[_ngcontent-%COMP%]{cursor:move;-webkit-user-select:none;user-select:none;width:20px;height:20px;margin:auto;position:absolute;top:14px;left:30px;z-index:10}.table-drag-n-drop[_ngcontent-%COMP%]:before{content:"";border-top:1px solid var(--text-color-default);border-bottom:1px solid var(--text-color-default);position:absolute;top:6px;left:5px;right:5px;bottom:6px}.table-drag-n-drop[_ngcontent-%COMP%]:after{content:"";background:var(--text-color-default);height:1px;margin:auto;position:absolute;top:0;left:5px;right:5px;bottom:0}']}),t})();var st=n("UqID"),ct=n("TImZ");function rt(t,e){1&t&&(s.Pb(0,"div",3),s.Pb(1,"div",4),s.Pb(2,"div",5),s.Kb(3,"app-icon",6),s.Ob(),s.Pb(4,"div",7),s.uc(5," No submits for comparison "),s.Ob(),s.Pb(6,"div",8),s.uc(7," Use \u201cadd to comparison\u201d icon in the submits table to add one "),s.Ob(),s.Ob(),s.Ob())}function bt(t,e){1&t&&(s.Pb(0,"div",13),s.Pb(1,"div",14),s.Kb(2,"app-icon",15),s.Ob(),s.Pb(3,"div",16),s.uc(4," Add one more submit to see comparison results "),s.Ob(),s.Ob())}function lt(t,e){if(1&t){const t=s.Qb();s.Pb(0,"div",9),s.Pb(1,"app-comparison-table",10),s.Wb("onHandleChangeBaselineID",function(e){return s.oc(t),s.Zb().handleChangeBaselineID(e)}),s.Ob(),s.sc(2,bt,5,0,"div",11),s.Kb(3,"app-features-info",12),s.Kb(4,"app-table-modal"),s.Ob()}if(2&t){const t=s.Zb();s.yb(1),s.fc("rows",t.rows)("cols",t.cols)("baselineID",t.baselineID),s.yb(1),s.fc("ngIf",t.addMore)}}let pt=(()=>{class t{constructor(t,e,n,i,o){this.authorsService=t,this.projectService=e,this.taskService=n,this.comparisonService=i,this.activateRoute=o,this.rows=null,this.cols=null,this.comparisonIDs=null,this.routeTaskID=null,this.comparisonBaselineSubmitID=null,this.baselineID=null,this.empty=!1,this.addMore=!1,this.subscribeRouteUpdates(),this.subscribeTaskComparedSubmitsUpdates(),this.subscribeTaskConfigUpdates(),this.subscribeTaskComparedSubmitsIDsUpdates()}subscribeRouteUpdates(){this.activateRoute.params.subscribe(t=>{console.log("params",t),this.routeTaskID=t.taskID,this.comparisonIDs&&this.getComparedSubmits()})}subscribeTaskComparedSubmitsUpdates(){this.comparisonService.currentComparisonSubmitsStageMessage.subscribe(({loaded:t,data:e,meta:n})=>{t&&e&&e.submits&&(this.cols=e.submits,this.baselineID=n.baseline_submit)})}ngOnDestroy(){this.comparisonService.removeComparedSubmits()}subscribeTaskComparedSubmitsIDsUpdates(){this.comparisonService.currentComparisonIDSStageMessage.subscribe(t=>{this.comparisonIDs=t,console.log(this.routeTaskID,t),this.routeTaskID&&this.getComparedSubmits()})}subscribeTaskConfigUpdates(){this.taskService.currentTaskConfigStageMessage.subscribe(t=>{const{loaded:e,loading:n,data:i}=t;e||n||this.taskService.getTaskConfig(),e&&!n&&i&&(this.rows=t.data.columns)})}getComparedSubmits(){if(!this.comparisonIDs||!this.routeTaskID)return;const t=this.comparisonIDs[this.routeTaskID];if(!t||!t.length)return void(this.empty=!0);this.empty=!1,this.addMore=t&&1===t.length,console.log("\u0437\u0430\u0448\u043b\u043e \u0441\u044e\u0434\u0430");const e={};this.comparisonBaselineSubmitID&&(e.baseline_submit=this.comparisonBaselineSubmitID),console.log(e),this.comparisonService.getComparisonSubmits(Object.assign({ids:t,taskID:this.routeTaskID},e))}ngOnInit(){}handleChangeBaselineID(t){this.comparisonBaselineSubmitID=t,this.getComparedSubmits()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(d.a),s.Jb(u.a),s.Jb(g.a),s.Jb(h.a),s.Jb(a.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-compared-submits"]],decls:3,vars:2,consts:[[1,"compared-submits"],["class","compared-submits-empty",4,"ngIf"],["class","compared-submits-content",4,"ngIf"],[1,"compared-submits-empty"],[1,"compared-submits-empty-content"],[1,"compared-submits-empty-content-ico"],["type","comparison-no-data"],[1,"compared-submits-empty-content-heading"],[1,"compared-submits-empty-content-summary"],[1,"compared-submits-content"],[3,"rows","cols","baselineID","onHandleChangeBaselineID"],["class","compared-submits-add-more",4,"ngIf"],[1,"submits-features"],[1,"compared-submits-add-more"],[1,"compared-submits-add-more-ico"],["type","comparison-add-more"],[1,"compared-submits-add-more-text"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.sc(1,rt,8,0,"div",1),s.sc(2,lt,5,4,"div",2),s.Ob()),2&t&&(s.yb(1),s.fc("ngIf",e.empty),s.yb(1),s.fc("ngIf",!e.empty&&e.cols&&e.rows))},directives:[i.k,f.a,at,st.a,ct.a],styles:[".compared-submits-empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:calc(100vh - 160px)}.compared-submits-empty-content-ico[_ngcontent-%COMP%]{width:175px;height:81px;margin:0 auto 83px;font-size:0;color:var(--foreground-quaternary)}.compared-submits-empty-content-heading[_ngcontent-%COMP%]{margin:0 0 16px;font-size:4.5rem;color:var(--text-color-tertiary);line-height:.8888888889;text-align:center}.compared-submits-empty-content-summary[_ngcontent-%COMP%]{color:var(--text-color-tertiary);font-size:2.9rem;line-height:1.1724137931;text-align:center}.compared-submits-content[_ngcontent-%COMP%]{display:flex}.compared-submits-add-more[_ngcontent-%COMP%]{width:272px;padding-top:83px;margin-left:71px}.compared-submits-add-more-ico[_ngcontent-%COMP%]{width:46px;height:21px;margin-bottom:29px;font-size:0;color:var(--text-color-quaternary)}.compared-submits-add-more-text[_ngcontent-%COMP%]{color:var(--text-color-quaternary);font-size:2.1rem;line-height:1.2857142857}"]}),t})();const mt=[{path:"",component:(()=>{class t{constructor(){this.title="Favorites"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-favorites-page"]],decls:8,vars:0,template:function(t,e){1&t&&(s.Pb(0,"app-main-layout"),s.Pb(1,"app-header"),s.Pb(2,"header-body"),s.Kb(3,"app-task-selection"),s.Kb(4,"app-task-main-tabs"),s.Ob(),s.Ob(),s.Kb(5,"app-filters-panel"),s.Pb(6,"app-main"),s.Kb(7,"app-compared-submits"),s.Ob(),s.Ob())},directives:[c.a,r.a,b.a,l.a,p.a,m.a,pt],styles:[""]}),t})()}];let dt=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[a.e.forChild(mt)],a.e]}),t})(),ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[dt,i.b,o.a]]}),t})()}}]);
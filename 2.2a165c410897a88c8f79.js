(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Bz6d:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("fXoL"),o=n("wQG6");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-search"]],decls:4,vars:1,consts:[[1,"search"],[1,"search-btn"],[1,"search-btn-ico"],[3,"type"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Kb(1,"a",1),i.Kb(2,"span",2),i.Gb(3,"app-icon",3),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.vb(3),i.Zb("type","search"))},directives:[o.a],styles:[".search[_ngcontent-%COMP%]{position:absolute;top:12px;right:26px}.search-btn[_ngcontent-%COMP%]{display:inline-block}.search-btn[_ngcontent-%COMP%], .search-btn-ico[_ngcontent-%COMP%]{width:20px;height:20px}"]}),t})()},"G8Z/":function(t,e,n){"use strict";n.d(e,"a",function(){return m});var i=n("fXoL"),o=n("sGSV"),c=n("ofXK"),s=n("wQG6");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-pagination"]],decls:10,vars:2,consts:[[1,"pagination"],[1,"pagination-arrow","pagination-arrow--prev"],[1,"pagination-arrow-ico"],[3,"type"],[1,"pagination-item","pagination-item--active"],[1,"pagination-link"],[1,"pagination-arrow","pagination-arrow--next"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Kb(1,"a",1),i.Kb(2,"span",2),i.Gb(3,"app-icon",3),i.Jb(),i.Jb(),i.Kb(4,"div",4),i.Kb(5,"a",5),i.jc(6,"1"),i.Jb(),i.Jb(),i.Kb(7,"a",6),i.Kb(8,"span",2),i.Gb(9,"app-icon",3),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.vb(3),i.Zb("type","arrow"),i.vb(6),i.Zb("type","arrow"))},directives:[s.a],styles:[".pagination[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.pagination-item[_ngcontent-%COMP%]{display:block;margin:0 7px;font-size:1.3rem;line-height:1.3846153846}.pagination-item--active[_ngcontent-%COMP%]{color:var(--accent-text-color-default);font-weight:700}.pagination-link[_ngcontent-%COMP%]{color:inherit}.pagination-arrow[_ngcontent-%COMP%]{display:block;margin:0 7px;color:var(--text-color-default)}.pagination-arrow-ico[_ngcontent-%COMP%]{display:block;width:11px;height:10px;font-size:0}.pagination-arrow--next[_ngcontent-%COMP%]   .pagination-arrow-ico[_ngcontent-%COMP%]{transform:rotate(180deg)}"]}),t})();var r=n("Hicy");const l=function(t){return{"select-item--active":t}};function b(t,e){if(1&t&&(i.Kb(0,"a",9),i.jc(1),i.Jb()),2&t){const t=e.$implicit,n=i.Tb(3);i.xb(i.bc(3,l,t.value===n.selectedValue)),i.vb(1),i.kc(t.label)}}function p(t,e){if(1&t&&(i.Kb(0,"ul",6),i.Kb(1,"li",7),i.ic(2,b,2,5,"a",8),i.Jb(),i.Jb()),2&t){const t=i.Tb(2);i.vb(2),i.Zb("ngForOf",t.options)}}function d(t,e){if(1&t){const t=i.Lb();i.Kb(0,"div",1),i.Qb("clickOutside",function(e){return i.ec(t),i.Tb().onClickedOutside(e)}),i.Kb(1,"div",2),i.Qb("click",function(){return i.ec(t),i.Tb().handleClick()}),i.jc(2,"100"),i.Jb(),i.ic(3,p,3,1,"ul",3),i.Kb(4,"div",4),i.Gb(5,"app-icon",5),i.Jb(),i.Jb()}if(2&t){const t=i.Tb();i.vb(3),i.Zb("ngIf",t.isShow)}}let g=(()=>{class t{constructor(){this.selectedValue=null,this.options=null,this.isShow=!1}ngOnInit(){}handleClick(){this.isShow=!this.isShow,console.log(this.isShow)}onClickedOutside(t){this.isShow&&(this.isShow=!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-select"]],inputs:{options:"options"},decls:1,vars:1,consts:[["class","select",3,"clickOutside",4,"ngIf"],[1,"select",3,"clickOutside"],[1,"select-value",3,"click"],["class","select-list",4,"ngIf"],[1,"select-ico"],["type","triangle"],[1,"select-list"],[1,"select-item"],["class","select-link",3,"class",4,"ngFor","ngForOf"],[1,"select-link"]],template:function(t,e){1&t&&i.ic(0,d,6,1,"div",0),2&t&&i.Zb("ngIf",e.options)},directives:[c.j,r.a,s.a,c.i],styles:[".select[_ngcontent-%COMP%]{cursor:pointer;background:var(--background-tertiary);border-radius:3px;display:inline-block;position:relative;height:32px;padding:0 24px 0 8px}.select-value[_ngcontent-%COMP%]{display:block;height:32px;font-size:1.3rem;line-height:32px}.select-list[_ngcontent-%COMP%]{background:var(--background-tertiary);border-radius:3px;display:flex;flex-direction:column-reverse;margin:0;padding:2px 0;position:absolute;bottom:100%;left:0;right:0;list-style:none;transform:translateY(-4px)}.select-item[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1.2rem;text-align:right;line-height:1.1666666667}.select-item--active[_ngcontent-%COMP%]{color:var(--accent-text-color-default);font-weight:700}.select-ico[_ngcontent-%COMP%]{width:8px;height:4px;margin:auto;position:absolute;top:0;bottom:0;right:12px;color:var(--text-color-default);font-size:0;line-height:0}.select-link[_ngcontent-%COMP%]{display:block;padding:8px;color:inherit}"]}),t})();function u(t,e){if(1&t&&(i.Kb(0,"div",1),i.Kb(1,"div",2),i.jc(2,"Rows per page"),i.Jb(),i.Gb(3,"app-select",3),i.Jb()),2&t){const t=i.Tb();i.vb(3),i.Zb("options",t.options)}}let f=(()=>{class t{constructor(){this.options=null}ngOnInit(){}ngOnChanges(){console.log("this.rows",this.rows),this.rows&&(this.options=this.rows.map(t=>({value:t,label:t})))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-row-per-page"]],inputs:{rows:"rows"},features:[i.ub],decls:1,vars:1,consts:[["class","row-per-page",4,"ngIf"],[1,"row-per-page"],[1,"row-per-page-label"],[1,"row-per-page-select",3,"options"]],template:function(t,e){1&t&&i.ic(0,u,4,1,"div",0),2&t&&i.Zb("ngIf",e.rows&&e.options)},directives:[c.j,g],styles:[".row-per-page[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.row-per-page-label[_ngcontent-%COMP%]{margin-right:8px;font-size:1.2rem;line-height:1.1666666667}"]}),t})();function h(t,e){if(1&t&&i.Gb(0,"app-row-per-page",4),2&t){const t=i.Tb(2);i.Zb("rows",t.rows)}}function v(t,e){if(1&t&&(i.Kb(0,"div",1),i.Gb(1,"app-pagination",2),i.ic(2,h,1,1,"app-row-per-page",3),i.Jb()),2&t){const t=i.Tb();i.vb(2),i.Zb("ngIf",t.rows)}}let m=(()=>{class t{constructor(t){this.taskService=t,this.config=null,this.rows=null,this.taskService.currentTaskConfigStageMessage.subscribe(t=>{if(t.data)return this.rows=t.data.rows_per_page_values})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Fb(o.a))},t.\u0275cmp=i.zb({type:t,selectors:[["app-meta-panel"]],decls:1,vars:1,consts:[["class","meta-panel",4,"ngIf"],[1,"meta-panel"],[1,"meta-panel-pagination"],[3,"rows",4,"ngIf"],[3,"rows"]],template:function(t,e){1&t&&i.ic(0,v,3,1,"div",0),2&t&&i.Zb("ngIf",e.config)},directives:[c.j,a,f],styles:[".meta-panel[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:24px;display:flex;flex-direction:row;align-items:center}.meta-panel-pagination[_ngcontent-%COMP%]{margin-right:26px}"]}),t})()},I88u:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("fXoL"),o=n("xniV"),c=n("ofXK"),s=n("Hicy"),a=n("wQG6");const r=function(t){return{"select-item--active":t}};function l(t,e){if(1&t){const t=i.Lb();i.Kb(0,"li",10),i.Kb(1,"a",11),i.Qb("click",function(){i.ec(t);const n=e.index;return i.Tb(2).handleItemClick(n)}),i.jc(2),i.Jb(),i.Jb()}if(2&t){const t=e.$implicit,n=e.index,o=i.Tb(2);i.xb(i.bc(3,r,o.selectedIndex===n)),i.vb(2),i.kc(t)}}const b=function(t){return{"select--active":t}};function p(t,e){if(1&t){const t=i.Lb();i.Kb(0,"div",1),i.Qb("clickOutside",function(e){return i.ec(t),i.Tb().onClickedOutside(e)}),i.Kb(1,"div",2),i.Qb("click",function(){return i.ec(t),i.Tb().handleClick()}),i.Kb(2,"div",3),i.jc(3),i.Jb(),i.Kb(4,"div",4),i.Gb(5,"app-icon",5),i.Jb(),i.Jb(),i.Kb(6,"div",6),i.Kb(7,"div",7),i.jc(8,"Ammiak project"),i.Jb(),i.Kb(9,"ul",8),i.ic(10,l,3,5,"li",9),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=i.Tb();i.xb(i.bc(4,b,t.isShow)),i.vb(3),i.kc(t.tasks[t.selectedIndex]),i.vb(7),i.Zb("ngForOf",t.tasks)}}let d=(()=>{class t{constructor(t){this.projectService=t,this.tasks=[],this.selectedIndex=0,this.isShow=!1}ngOnInit(){this.projectService.currentProjectStageMessage.subscribe(t=>this.tasks=t)}handleClick(){this.isShow=!this.isShow}handleItemClick(t){this.selectedIndex=t}onClickedOutside(t){this.isShow&&(this.isShow=!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Fb(o.a))},t.\u0275cmp=i.zb({type:t,selectors:[["app-task-selection"]],decls:1,vars:1,consts:[["class","select",3,"class","clickOutside",4,"ngIf"],[1,"select",3,"clickOutside"],[1,"select-value",3,"click"],[1,"select-value-text"],[1,"select-ico"],["type","triangle"],[1,"select-sub"],[1,"select-heading"],[1,"select-list"],["class","select-item",3,"class",4,"ngFor","ngForOf"],[1,"select-item"],[1,"select-link",3,"click"]],template:function(t,e){1&t&&i.ic(0,p,11,6,"div",0),2&t&&i.Zb("ngIf",e.tasks.length)},directives:[c.j,s.a,a.a,c.i],styles:["[_nghost-%COMP%]{width:330px;position:absolute;top:12px;left:64px;z-index:2}.select[_ngcontent-%COMP%]{cursor:pointer;height:24px}.select[_ngcontent-%COMP%], .select-value-text[_ngcontent-%COMP%]{display:block;position:relative}.select-value-text[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.select-value[_ngcontent-%COMP%]{display:inline-block;padding-right:24px;height:24px;font-size:1.4rem;line-height:1.7142857143;max-width:218px;position:relative;color:var(--button-color-default);font-weight:500}.select-heading[_ngcontent-%COMP%]{margin-bottom:16px;padding:0 7px;font-size:1.6rem;line-height:1.5;font-weight:500}.select-sub[_ngcontent-%COMP%]{background:var(--background-secondary);border-radius:3px;padding:24px 8px;position:absolute;top:100%;left:0;right:0;transform:translateY(4px);opacity:0;visibility:hidden;transition:all .3s ease}.select--active[_ngcontent-%COMP%]   .select-sub[_ngcontent-%COMP%]{opacity:1;visibility:visible}.select-list[_ngcontent-%COMP%]{max-height:170px;overflow-y:auto;display:flex;flex-direction:column;margin:0 -8px 0 0;padding:0 8px 0 0;list-style:none}.select-item[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1.2rem;text-align:left;line-height:1.1666666667;white-space:nowrap;transition:all .3s ease}.select-item--active[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]:hover{background:var(--foreground-quaternary)}.select-ico[_ngcontent-%COMP%]{width:8px;height:4px;margin:auto;position:absolute;top:0;bottom:0;right:12px;color:var(--button-color-default);font-size:0;line-height:0;transform:rotate(0deg);transition:transform .3s ease}.select--active[_ngcontent-%COMP%]   .select-ico[_ngcontent-%COMP%]{transform:rotate(-180deg)}.select-link[_ngcontent-%COMP%]{display:block;padding:8px;color:inherit}"]}),t})()},Lab3:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var i=n("fXoL"),o=n("odkr"),c=n("ofXK"),s=n("wQG6");let a=(()=>{class t{constructor(){this.dynamic="positive"}ngOnInit(){this.dynamic=this.number>=0?"positive":"negative"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-dynamics"]],inputs:{number:"number"},decls:2,vars:3,consts:[[1,"dynamics"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.jc(1),i.Jb()),2&t&&(i.xb("dynamics--"+e.dynamic),i.vb(1),i.kc(e.number))},styles:[".dynamics[_ngcontent-%COMP%]{display:block;color:var(--text-color-default);font-size:1rem;line-height:1.2}.dynamics--positive[_ngcontent-%COMP%]{color:var(--accent-text-color-default)}.dynamics--negative[_ngcontent-%COMP%]{color:var(--accent-text-color-negative)}"]}),t})(),r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-loader"]],decls:1,vars:0,consts:[[1,"loader"]],template:function(t,e){1&t&&i.Gb(0,"div",0)},styles:[".loader[_ngcontent-%COMP%]{background:url(/assets/images/loader/loader.svg) no-repeat;width:17px;height:17px;animation:LoaderAnimation 1s steps(9) infinite}@keyframes LoaderAnimation{0%{background-position:0 0}to{background-position:-207px 0}}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-add-to-comparison"]],decls:3,vars:0,consts:[[1,"add-to-comparison"],[1,"add-to-comparison-ico"],["type","comparison"]],template:function(t,e){1&t&&(i.Kb(0,"a",0),i.Kb(1,"span",1),i.Gb(2,"app-icon",2),i.Jb(),i.Jb())},directives:[s.a],styles:[".add-to-comparison[_ngcontent-%COMP%]{display:block;border-radius:1px;width:16px;height:16px;position:relative;color:inherit}.add-to-comparison-ico[_ngcontent-%COMP%]{width:16px;height:10px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-copy-link"]],decls:3,vars:0,consts:[[1,"copy-link"],[1,"copy-link-ico"],["type","copy-link"]],template:function(t,e){1&t&&(i.Kb(0,"a",0),i.Kb(1,"span",1),i.Gb(2,"app-icon",2),i.Jb(),i.Jb())},directives:[s.a],styles:[".copy-link[_ngcontent-%COMP%]{border-radius:1px;display:block;width:16px;height:16px;position:relative;color:inherit}.copy-link-ico[_ngcontent-%COMP%]{width:16px;height:10px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-add-to-basket"]],decls:3,vars:0,consts:[[1,"add-to-basket"],[1,"add-to-basket-ico"],["type","basket"]],template:function(t,e){1&t&&(i.Kb(0,"a",0),i.Kb(1,"span",1),i.Gb(2,"app-icon",2),i.Jb(),i.Jb())},directives:[s.a],styles:[".add-to-basket[_ngcontent-%COMP%]{display:block;border-radius:1px;width:16px;height:16px;position:relative;color:inherit}.add-to-basket-ico[_ngcontent-%COMP%]{width:11px;height:14px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}"]}),t})();function d(t,e){if(1&t&&(i.Kb(0,"div",3),i.Kb(1,"a",8),i.jc(2),i.Kb(3,"span",9),i.Gb(4,"app-icon",10),i.Jb(),i.Jb(),i.Jb()),2&t){const t=i.Tb().$implicit;i.vb(2),i.lc("",t.name," ")}}function g(t,e){if(1&t&&(i.Kb(0,"div",3),i.jc(1),i.Jb()),2&t){const t=i.Tb().$implicit;i.vb(1),i.kc(t.name)}}function u(t,e){if(1&t&&(i.Kb(0,"th",2),i.ic(1,d,5,1,"div",7),i.ic(2,g,2,1,"div",7),i.Jb()),2&t){const t=e.$implicit;i.vb(1),i.Zb("ngIf",t.sortable),i.vb(1),i.Zb("ngIf",!t.sortable)}}function f(t,e){if(1&t&&(i.Kb(0,"div",19),i.Kb(1,"div"),i.jc(2),i.Jb(),i.Gb(3,"app-dynamics",20),i.Jb()),2&t){const t=i.Tb(2).$implicit,e=i.Tb().$implicit;i.vb(2),i.kc(e.metrics[t.id].short_value),i.vb(1),i.Zb("number",e.metrics[t.id].delta)}}function h(t,e){1&t&&i.Gb(0,"app-loader")}function v(t,e){if(1&t&&(i.Kb(0,"div",17),i.ic(1,f,4,2,"div",18),i.ic(2,h,1,0,"app-loader",16),i.Jb()),2&t){const t=i.Tb().$implicit,e=i.Tb().$implicit;i.vb(1),i.Zb("ngIf",e.metrics[t.id]),i.vb(1),i.Zb("ngIf",!e.metrics[t.id])}}function m(t,e){1&t&&(i.Kb(0,"div",22),i.Gb(1,"app-add-to-comparison"),i.Gb(2,"app-copy-link"),i.Gb(3,"app-add-to-basket"),i.Jb())}function x(t,e){if(1&t&&(i.Kb(0,"div"),i.jc(1),i.Jb()),2&t){const t=i.Tb(2).$implicit,e=i.Tb().$implicit;i.vb(1),i.kc(e[t.id])}}function k(t,e){if(1&t&&(i.Kb(0,"div",17),i.ic(1,m,4,0,"div",21),i.ic(2,x,2,1,"div",16),i.Jb()),2&t){const t=i.Tb().$implicit;i.vb(1),i.Zb("ngIf","actions"===t.name),i.vb(1),i.Zb("ngIf","actions"!==t.name)}}function y(t,e){if(1&t&&(i.Kb(0,"div"),i.Kb(1,"div",23),i.jc(2),i.Ub(3,"date"),i.Jb(),i.Kb(4,"div",23),i.jc(5),i.Ub(6,"date"),i.Jb(),i.Jb()),2&t){const t=i.Tb().$implicit,e=i.Tb().$implicit;i.vb(2),i.kc(i.Wb(3,2,e[t.id],"hh:mm")),i.vb(3),i.kc(i.Wb(6,5,e[t.id],"dd:MM:YYYY"))}}function w(t,e){1&t&&(i.Kb(0,"div"),i.jc(1,"Notebook"),i.Jb())}function O(t,e){if(1&t&&(i.Kb(0,"div"),i.ic(1,w,2,0,"div",16),i.Kb(2,"div"),i.jc(3),i.Jb(),i.Jb()),2&t){const t=i.Tb().$implicit,e=i.Tb().$implicit;i.vb(1),i.Zb("ngIf",e[t.id].notebook),i.vb(2),i.mc("",e[t.id].files.length," ",e[t.id].files.length>1?"files":"file","")}}function C(t,e){if(1&t){const t=i.Lb();i.Kb(0,"div"),i.Kb(1,"a",24),i.Qb("click",function(){i.ec(t);const e=i.Tb(2).$implicit;return i.Tb().featureHandleClick(e.id)}),i.jc(2),i.Jb(),i.Jb()}if(2&t){const t=i.Tb().$implicit,e=i.Tb().$implicit;i.vb(2),i.kc(e[t.id].count)}}function M(t,e){if(1&t&&(i.Kb(0,"td",14),i.ic(1,v,3,2,"div",15),i.ic(2,k,3,2,"div",15),i.ic(3,y,7,8,"div",16),i.ic(4,O,4,3,"div",16),i.ic(5,C,3,1,"div",16),i.Jb()),2&t){const t=e.$implicit,n=i.Tb().$implicit;i.vb(1),i.Zb("ngIf","metric"===t.type),i.vb(1),i.Zb("ngIf","field"===t.type),i.vb(1),i.Zb("ngIf","date"===t.type),i.vb(1),i.Zb("ngIf","files"===t.type&&n[t.id].files),i.vb(1),i.Zb("ngIf","features"===t.type)}}function P(t,e){if(1&t&&(i.Kb(0,"tr"),i.Kb(1,"th",11),i.Kb(2,"div",12),i.jc(3),i.Jb(),i.Jb(),i.ic(4,M,6,5,"td",13),i.Jb()),2&t){const t=e.index,n=i.Tb();i.vb(3),i.kc(t+1),i.vb(1),i.Zb("ngForOf",n.cols)}}let _=(()=>{class t{constructor(t){this.featuresInfoService=t,this.cols=[],this.rows=[],this.headDict={}}ngOnInit(){}ngOnChanges(){this.config&&this.generateTableHead(),this.items&&this.generateTableBody()}generateTableHead(){this.cols=this.config.data.columns,console.log("this.config",this.config)}generateTableBody(){console.log("this.items",this.items),this.rows=this.items.data.submits,console.log(this.rows)}featureHandleClick(t){console.log(t),this.featuresInfoService.updateFeaturesInfoMessage(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Fb(o.a))},t.\u0275cmp=i.zb({type:t,selectors:[["app-table"]],inputs:{config:"config",items:"items"},features:[i.ub],decls:9,vars:2,consts:[[1,"table"],[1,"table-thead"],[1,"table-thead-th"],[1,"table-thead-th-heading"],["class","table-thead-th",4,"ngFor","ngForOf"],[1,"table-tbody"],[4,"ngFor","ngForOf"],["class","table-thead-th-heading",4,"ngIf"],[1,"table-thead-th-link","table-thead-th-link--sortable"],[1,"table-thead-th-link-ico"],["type","triangle"],[1,"table-tbody-th"],[1,"table-tbody-th-heading"],["class","table-tbody-td",4,"ngFor","ngForOf"],[1,"table-tbody-td"],["class","table-tbody-td-heading",4,"ngIf"],[4,"ngIf"],[1,"table-tbody-td-heading"],["class","table-metric",4,"ngIf"],[1,"table-metric"],[3,"number"],["class","table-actions",4,"ngIf"],[1,"table-actions"],[1,"table-tbody-td-sub-sub-heading"],[3,"click"]],template:function(t,e){1&t&&(i.Kb(0,"table",0),i.Kb(1,"thead",1),i.Kb(2,"tr"),i.Kb(3,"th",2),i.Kb(4,"div",3),i.jc(5,"#"),i.Jb(),i.Jb(),i.ic(6,u,3,2,"th",4),i.Jb(),i.Jb(),i.Kb(7,"tbody",5),i.ic(8,P,5,2,"tr",6),i.Jb(),i.Jb()),2&t&&(i.vb(6),i.Zb("ngForOf",e.cols),i.vb(2),i.Zb("ngForOf",e.rows))},directives:[c.i,c.j,s.a,a,r,l,b,p],pipes:[c.d],styles:[".table[_ngcontent-%COMP%]{border:0;border-collapse:collapse;border-spacing:0;width:100%}.table-thead-th[_ngcontent-%COMP%]{background:var(--table-background-default);border:0;border-left:1px solid var(--table-border-default);padding:12px;text-align:left;vertical-align:top}.table-tbody-td[_ngcontent-%COMP%], .table-tbody-th[_ngcontent-%COMP%]{background:var(--table-background-secondary);border-left:1px solid var(--table-border-default);border-top:1px solid var(--table-border-default);padding:12px;vertical-align:top;text-align:left}.table-thead-th-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.4rem;font-weight:500;letter-spacing:.02em;text-transform:uppercase;white-space:nowrap;position:relative;overflow:hidden;text-overflow:ellipsis;max-width:180px}.table-thead-th-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.table-thead-th-sub-heading[_ngcontent-%COMP%]{margin-top:3px;color:var(--text-color-secondary);font-size:.8rem;letter-spacing:.01em;line-height:1;text-transform:uppercase}.table-tbody-th-heading[_ngcontent-%COMP%]{color:var(--text-color-tertiary);font-size:1rem}.table-tbody-td-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;max-width:180px;overflow:hidden;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.table-tbody-td--sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.2rem}.table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{color:var(--text-color-default);font-size:1.3rem;line-height:1;position:relative;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}*[_ngcontent-%COMP%] + .table-tbody-td-sub-sub-heading[_ngcontent-%COMP%]{margin-top:4px}.table-status-ico[_ngcontent-%COMP%]{display:block;width:16px;height:16px;color:var(--accent-text-color-default)}.table-thead-th-link[_ngcontent-%COMP%]{color:inherit}.table-thead-th-link--sortable[_ngcontent-%COMP%]{padding-right:12px;position:relative}.table-thead-th-link-ico[_ngcontent-%COMP%]{width:7px;height:4px;margin:auto;position:absolute;top:0;right:0;bottom:0;color:inherit;font-size:0;line-height:1}.table-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.table-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}"]}),t})()},"O+6x":function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("fXoL"),o=n("b6eW"),c=n("Hicy"),s=n("wQG6"),a=n("ofXK");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.zb({type:t,selectors:[["app-checkbox"]],decls:4,vars:0,consts:[[1,"checkbox"],["type","checkbox",1,"checkbox-input"],[1,"checkbox-ico"],["type","check"]],template:function(t,e){1&t&&(i.Kb(0,"label",0),i.Gb(1,"input",1),i.Kb(2,"span",2),i.Gb(3,"app-icon",3),i.Jb(),i.Jb())},directives:[s.a],styles:[".checkbox[_ngcontent-%COMP%]{background:var(--checkbox-color-default);border-radius:2px;display:block;width:16px;height:16px;position:relative}.checkbox-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;opacity:0}.checkbox-input[_ngcontent-%COMP%]:checked + .checkbox-ico[_ngcontent-%COMP%]{opacity:1;visibility:visible}.checkbox-ico[_ngcontent-%COMP%]{width:12px;height:9px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;color:var(--checkbox-color-secondary);font-size:0;opacity:0;visibility:hidden;transition:all .3s ease}"]}),t})();function l(t,e){if(1&t&&(i.Kb(0,"li",13),i.Kb(1,"label",8),i.Gb(2,"app-checkbox",9),i.Kb(3,"span",10),i.jc(4),i.Jb(),i.Jb(),i.Jb()),2&t){const t=e.$implicit;i.vb(4),i.kc(t)}}function b(t,e){if(1&t&&(i.Kb(0,"div",6),i.Kb(1,"div",7),i.Kb(2,"label",8),i.Gb(3,"app-checkbox",9),i.Kb(4,"span",10),i.jc(5,"All"),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ul",11),i.ic(7,l,5,1,"li",12),i.Jb(),i.Jb()),2&t){const t=i.Tb();i.vb(7),i.Zb("ngForOf",t.authors)}}let p=(()=>{class t{constructor(t){this.authorsService=t,this.isShow=!1}ngOnInit(){this.authorsService.currentAuthorsStageMessage.subscribe(t=>(console.log(t),this.authors=t))}handleClick(){this.isShow=!this.isShow,console.log(this.isShow)}handleClickedOutside(t){this.isShow&&(this.isShow=!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Fb(o.a))},t.\u0275cmp=i.zb({type:t,selectors:[["app-authors-filter"]],decls:7,vars:2,consts:[[1,"authors-filter",3,"clickOutside"],[1,"authors-filter-btn",3,"click"],[1,"author-filter-btn-ico"],[3,"type"],[1,"author-filter-btn-text"],["class","authors-filter-sub",4,"ngIf"],[1,"authors-filter-sub"],[1,"authors-filter-heading"],[1,"select-label"],[1,"select-label-checkbox"],[1,"select-label-title"],[1,"select-list"],["class","select-item",4,"ngFor","ngForOf"],[1,"select-item"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Qb("clickOutside",function(t){return e.handleClickedOutside(t)}),i.Kb(1,"a",1),i.Qb("click",function(){return e.handleClick()}),i.Kb(2,"span",2),i.Gb(3,"app-icon",3),i.Jb(),i.Kb(4,"span",4),i.jc(5,"Authors filter"),i.Jb(),i.Jb(),i.ic(6,b,8,1,"div",5),i.Jb()),2&t&&(i.vb(3),i.Zb("type","man"),i.vb(3),i.Zb("ngIf",e.isShow))},directives:[c.a,s.a,a.j,r,a.i],styles:['.authors-filter[_ngcontent-%COMP%]{position:absolute;top:10px;left:27px}.author-filter-btn-ico[_ngcontent-%COMP%]{display:inline-block;margin-right:7px;width:10px;height:10px}.authors-filter-btn[_ngcontent-%COMP%]{position:relative;display:inline-block;padding-right:16px;color:var(--text-color-default);font-size:1.3rem;line-height:1.5384615385;text-decoration:none}.authors-filter-btn[_ngcontent-%COMP%]:after{content:"";width:0;height:0;border-left:3.645px solid transparent;border-bottom:0 solid transparent;border-right:3.645px solid transparent;border-top:3.9px solid var(--text-color-default);margin:auto;position:absolute;top:0;bottom:0;right:0}.authors-filter-sub[_ngcontent-%COMP%]{width:200px;background:var(--background-secondary);padding:11px 8px;border-radius:3px;position:absolute;top:100%;left:0;z-index:1;transform:translateY(4px)}.select-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 -8px 0 0;padding:0 8px 0 0;list-style:none;max-height:450px;overflow-y:auto}.select-item[_ngcontent-%COMP%]{margin:0 0 16px;padding:0;font-size:1.2rem;line-height:1.1666666667}.select-item[_ngcontent-%COMP%]:last-child{margin:0}.authors-filter-heading[_ngcontent-%COMP%]{border-bottom:1px solid #494c50;padding-bottom:9px;margin-bottom:9px}.select-item--active[_ngcontent-%COMP%]{color:var(--accent-text-color-default);font-weight:700}.select-label-checkbox[_ngcontent-%COMP%]{margin-right:8px}.select-label[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;color:inherit}']}),t})()},UqID:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("fXoL"),o=n("odkr"),c=n("ofXK"),s=n("wQG6");function a(t,e){if(1&t&&(i.Kb(0,"li",11),i.Kb(1,"div",12),i.jc(2),i.Jb(),i.Kb(3,"div",13),i.jc(4),i.Jb(),i.Jb()),2&t){const t=e.$implicit;i.vb(2),i.kc(t.name),i.vb(2),i.kc(t.description)}}function r(t,e){if(1&t){const t=i.Lb();i.Kb(0,"div",1),i.Kb(1,"a",2),i.Qb("click",function(){return i.ec(t),i.Tb().handleClose()}),i.Kb(2,"span",3),i.Gb(3,"app-icon",4),i.Jb(),i.Jb(),i.Kb(4,"div",5),i.Kb(5,"div",6),i.jc(6,"Features"),i.Jb(),i.Kb(7,"div",7),i.jc(8,"285 321 features used"),i.Jb(),i.Jb(),i.Kb(9,"div",8),i.Kb(10,"ul",9),i.ic(11,a,5,2,"li",10),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=i.Tb();i.vb(3),i.Zb("type","close"),i.vb(8),i.Zb("ngForOf",t.featuresNames)}}let l=(()=>{class t{constructor(t){this.featuresInfoService=t,this.isShown=!1,this.featuresNames=[],this.loading=!1,this.error=null}ngOnInit(){this.featuresInfoService.currentFeatureInfoStageMessage.subscribe(t=>{this.isShown=!!t,this.isShown&&this.fetchFeaturesInfo(t)})}fetchFeaturesInfo(t){this.loading=!0,this.featuresInfoService.fetchFeaturesInfo(t).subscribe(t=>{this.featuresInfo=t,this.featuresNames=this.featuresInfo.data,console.log("this.featuresNames",this.featuresNames),this.loading=!1},t=>{this.error=t.message},()=>{console.log("\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u0438\u043c\u0430 \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435")})}handleClose(){this.featuresInfoService.updateFeaturesInfoMessage(null)}}return t.\u0275fac=function(e){return new(e||t)(i.Fb(o.a))},t.\u0275cmp=i.zb({type:t,selectors:[["app-features-info"]],decls:1,vars:1,consts:[["class","feature-info",4,"ngIf"],[1,"feature-info"],[1,"feature-info-close-btn",3,"click"],[1,"feature-info-close-btn-ico"],[3,"type"],[1,"feature-info-head"],[1,"feature-info-heading"],[1,"feature-info-used"],[1,"feature-info-body"],[1,"feature-list"],["class","feature-list-item",4,"ngFor","ngForOf"],[1,"feature-list-item"],[1,"feature-list-text"],[1,"feature-list-bubble"]],template:function(t,e){1&t&&i.ic(0,r,12,2,"div",0),2&t&&i.Zb("ngIf",e.isShown)},directives:[c.j,s.a,c.i],styles:[".feature-info[_ngcontent-%COMP%]{background:var(--background-quinary);width:470px;position:absolute;top:80px;right:0;bottom:0;padding:16px 0 16px 8px;display:flex;flex-direction:column;align-items:stretch}.feature-info-head[_ngcontent-%COMP%]{flex:0 1 auto;padding:0 40px 5px;color:var(--text-color-secondary)}.feature-info-body[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow-y:auto;padding:20px 0 0}.feature-info-close-btn[_ngcontent-%COMP%]{position:absolute;top:16px;right:24px}.feature-info-close-btn-ico[_ngcontent-%COMP%]{display:block;width:16px;height:16px;color:var(--button-color-default)}.feature-info-heading[_ngcontent-%COMP%]{font-weight:500;font-size:1.6rem;line-height:1.5}.feature-info-used[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.1666666667}.feature-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;counter-reset:featureList}.feature-list-item[_ngcontent-%COMP%]{cursor:pointer;border-radius:4px;margin:0;padding:6px 0;position:relative;color:var(--text-color-default);font-size:1.3rem;line-height:1;display:flex;align-items:center;flex-direction:row;transition:all .3s ease}.feature-list-item[_ngcontent-%COMP%]:hover{background:var(--background-tertiary)}.feature-list-item[_ngcontent-%COMP%]:hover   .feature-list-bubble[_ngcontent-%COMP%]{opacity:1;visibility:visible}.feature-list-item[_ngcontent-%COMP%]:before{counter-increment:featureList;content:counter(featureList);color:var(--text-color-tertiary);display:inline-block;min-width:32px;font-size:1rem;margin-right:8px;text-align:right}.feature-list-bubble[_ngcontent-%COMP%]{background:var(--background-tertiary);border-radius:4px;width:300px;padding:8px;position:absolute;top:100%;right:30px;font-size:1rem;z-index:1;line-height:1.4;transform:translateY(2px);opacity:0;visibility:hidden;transition:all .3s ease}"]}),t})()},odkr:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("2Vo4"),o=n("z6cu"),c=n("tk/3"),s=n("3E0/"),a=n("JIr8"),r=n("fXoL");let l=(()=>{class t{constructor(t){this.http=t,this.featuresInfoStageMessage=new i.a(null),this.currentFeatureInfoStageMessage=this.featuresInfoStageMessage.asObservable()}updateFeaturesInfoMessage(t){this.featuresInfoStageMessage.next(t)}fetchFeaturesInfo(t){const e=new c.c({fromObject:{id:t}});return this.http.get("/assets/taskFeaturesInfo.json",{params:e}).pipe(Object(s.a)(500),Object(a.a)(t=>(console.log("Error: ",t.message),Object(o.a)(t))))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(c.a))},t.\u0275prov=r.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xniV:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var i=n("2Vo4"),o=n("z6cu"),c=n("tk/3"),s=n("3E0/"),a=n("JIr8"),r=n("0np6"),l=n("fXoL");let b=(()=>{class t{constructor(t){this.http=t,this.projectStageMessage=new i.a([]),this.currentProjectStageMessage=this.projectStageMessage.asObservable()}updateProjectMessage(t){this.projectStageMessage.next(t)}fetchProjectInfo(){const t=new c.c({fromObject:{_limit:"2"}});return this.http.get(r.a.API+"/assets/projectInfo.json",{params:t}).pipe(Object(s.a)(500),Object(a.a)(t=>(console.log("Error: ",t.message),Object(o.a)(t))))}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(c.a))},t.\u0275prov=l.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
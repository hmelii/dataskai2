(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{DCIj:function(t,e,i){"use strict";i.d(e,"a",function(){return u});var n=i("or5V"),s=i("m0za"),o=i("jPzB"),c=i("qvlg"),r=i("fXoL"),a=i("tyNb"),l=i("wQG6");const b=function(t,e,i,n,s){return[t,e,i,n,s]};let u=(()=>{class t{constructor(t){this.activateRoute=t,this.routeTaskID=null,this.routeSubmits=n.a.Submits,this.routeTasks=s.a.Tasks,this.routeProject=o.a.Project,this.routeMain=c.a.Self,this.routeInfo=n.a.Info,this.routeFavorites=n.a.FavoriteSubmits,this.routeDeleted=n.a.DeletedSubmits,t.params.subscribe(t=>this.routeTaskID=t.taskID)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Fb(a.a))},t.\u0275cmp=r.zb({type:t,selectors:[["app-submits-filter"]],decls:17,vars:24,consts:[[1,"submits-filter"],[1,"submits-filter-item",3,"routerLinkActive"],[1,"submits-filter-link",3,"routerLink"],[1,"submits-filter-text"],[1,"submits-filter-ico","submits-filter-ico--star"],["type","star"],[1,"submits-filter-ico","submits-filter-ico--basket"],["type","basket"]],template:function(t,e){1&t&&(r.Kb(0,"ul",0),r.Kb(1,"li",1),r.Kb(2,"a",2),r.Kb(3,"span",3),r.lc(4,"Active submits"),r.Jb(),r.Jb(),r.Jb(),r.Kb(5,"li",1),r.Kb(6,"a",2),r.Kb(7,"span",4),r.Gb(8,"app-icon",5),r.Jb(),r.Kb(9,"span",3),r.lc(10,"Favorites 3"),r.Jb(),r.Jb(),r.Jb(),r.Kb(11,"li",1),r.Kb(12,"a",2),r.Kb(13,"span",6),r.Gb(14,"app-icon",7),r.Jb(),r.Kb(15,"span",3),r.lc(16,"1"),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&(r.vb(1),r.Zb("routerLinkActive","submits-filter-item--active"),r.vb(1),r.Zb("routerLink",r.cc(6,b,e.routeMain,e.routeProject,e.routeTasks,e.routeTaskID,e.routeSubmits)),r.vb(3),r.Zb("routerLinkActive","submits-filter-item--active"),r.vb(1),r.Zb("routerLink",r.cc(12,b,e.routeMain,e.routeProject,e.routeTasks,e.routeTaskID,e.routeFavorites)),r.vb(5),r.Zb("routerLinkActive","submits-filter-item--active"),r.vb(1),r.Zb("routerLink",r.cc(18,b,e.routeMain,e.routeProject,e.routeTasks,e.routeTaskID,e.routeDeleted)))},directives:[a.c,a.d,l.a],styles:[".submits-filter[_ngcontent-%COMP%]{height:32px;list-style:none;flex-direction:row;justify-content:flex-start}.submits-filter[_ngcontent-%COMP%], .submits-filter-item[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;align-items:stretch}.submits-filter-item[_ngcontent-%COMP%]{color:var(--button-color-default);font-size:1.3rem;justify-content:stretch}.submits-filter-item--active[_ngcontent-%COMP%]{color:var(--button-color-tertiary)}.submits-filter-link[_ngcontent-%COMP%]{display:flex;padding:0 8px;align-items:center;justify-content:center;color:inherit;white-space:nowrap;text-decoration:none}.submits-filter-item--active[_ngcontent-%COMP%]   .submits-filter-link[_ngcontent-%COMP%]{background:var(--header-button-background-tertiary);box-shadow:0 1px 2px rgba(0,0,0,.16),0 2px 4px rgba(0,0,0,.12),0 1px 8px rgba(0,0,0,.1);border-radius:4px}.submits-filter-ico[_ngcontent-%COMP%]{display:block;font-size:0}.submits-filter-text[_ngcontent-%COMP%]{display:block}.submits-filter-ico--star[_ngcontent-%COMP%]{width:14px;height:13px;margin-right:5px}.submits-filter-ico--basket[_ngcontent-%COMP%]{width:11px;height:14px;margin-right:7px}"]}),t})()},I88u:function(t,e,i){"use strict";i.d(e,"a",function(){return p});var n=i("fXoL"),s=i("xniV"),o=i("ofXK"),c=i("Hicy"),r=i("wQG6");const a=function(t){return{"select-item--active":t}};function l(t,e){if(1&t){const t=n.Lb();n.Kb(0,"li",10),n.Kb(1,"a",11),n.Qb("click",function(){n.fc(t);const i=e.index;return n.Tb(2).handleItemClick(i)}),n.lc(2),n.Jb(),n.Jb()}if(2&t){const t=e.$implicit,i=e.index,s=n.Tb(2);n.xb(n.bc(3,a,s.selectedIndex===i)),n.vb(2),n.mc(t)}}const b=function(t){return{"select--active":t}};function u(t,e){if(1&t){const t=n.Lb();n.Kb(0,"div",1),n.Qb("clickOutside",function(e){return n.fc(t),n.Tb().onClickedOutside(e)}),n.Kb(1,"div",2),n.Qb("click",function(){return n.fc(t),n.Tb().handleClick()}),n.Kb(2,"div",3),n.lc(3),n.Jb(),n.Kb(4,"div",4),n.Gb(5,"app-icon",5),n.Jb(),n.Jb(),n.Kb(6,"div",6),n.Kb(7,"div",7),n.lc(8,"Ammiak project"),n.Jb(),n.Kb(9,"ul",8),n.jc(10,l,3,5,"li",9),n.Jb(),n.Jb(),n.Jb()}if(2&t){const t=n.Tb();n.xb(n.bc(4,b,t.isShow)),n.vb(3),n.mc(t.tasks[t.selectedIndex]),n.vb(7),n.Zb("ngForOf",t.tasks)}}let p=(()=>{class t{constructor(t){this.projectService=t,this.tasks=[],this.selectedIndex=0,this.isShow=!1}ngOnInit(){this.projectService.currentProjectStageMessage.subscribe(t=>this.tasks=t)}handleClick(){this.isShow=!this.isShow}handleItemClick(t){this.selectedIndex=t}onClickedOutside(t){this.isShow&&(this.isShow=!1)}}return t.\u0275fac=function(e){return new(e||t)(n.Fb(s.a))},t.\u0275cmp=n.zb({type:t,selectors:[["app-task-selection"]],decls:1,vars:1,consts:[["class","select",3,"class","clickOutside",4,"ngIf"],[1,"select",3,"clickOutside"],[1,"select-value",3,"click"],[1,"select-value-text"],[1,"select-ico"],["type","triangle"],[1,"select-sub"],[1,"select-heading"],[1,"select-list"],["class","select-item",3,"class",4,"ngFor","ngForOf"],[1,"select-item"],[1,"select-link",3,"click"]],template:function(t,e){1&t&&n.jc(0,u,11,6,"div",0),2&t&&n.Zb("ngIf",e.tasks.length)},directives:[o.j,c.a,r.a,o.i],styles:["[_nghost-%COMP%]{width:330px;position:absolute;top:12px;left:64px;z-index:2}.select[_ngcontent-%COMP%]{cursor:pointer;height:24px}.select[_ngcontent-%COMP%], .select-value-text[_ngcontent-%COMP%]{display:block;position:relative}.select-value-text[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.select-value[_ngcontent-%COMP%]{display:inline-block;padding-right:24px;height:24px;font-size:1.4rem;line-height:1.7142857143;max-width:218px;position:relative;color:var(--button-color-default);font-weight:500}.select-heading[_ngcontent-%COMP%]{margin-bottom:16px;padding:0 7px;font-size:1.6rem;line-height:1.5;font-weight:500}.select-sub[_ngcontent-%COMP%]{background:var(--background-secondary);border-radius:3px;padding:24px 8px;position:absolute;top:100%;left:0;right:0;transform:translateY(4px);opacity:0;visibility:hidden;transition:all .3s ease}.select--active[_ngcontent-%COMP%]   .select-sub[_ngcontent-%COMP%]{opacity:1;visibility:visible}.select-list[_ngcontent-%COMP%]{max-height:170px;overflow-y:auto;display:flex;flex-direction:column;margin:0 -8px 0 0;padding:0 8px 0 0;list-style:none}.select-item[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1.2rem;text-align:left;line-height:1.1666666667;white-space:nowrap;transition:all .3s ease}.select-item--active[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]:hover{background:var(--foreground-quaternary)}.select-ico[_ngcontent-%COMP%]{width:8px;height:4px;margin:auto;position:absolute;top:0;bottom:0;right:12px;color:var(--button-color-default);font-size:0;line-height:0;transform:rotate(0deg);transition:transform .3s ease}.select--active[_ngcontent-%COMP%]   .select-ico[_ngcontent-%COMP%]{transform:rotate(-180deg)}.select-link[_ngcontent-%COMP%]{display:block;padding:8px;color:inherit}"]}),t})()}}]);
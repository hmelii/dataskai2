(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"GmZ/":function(t,s,e){"use strict";e.r(s),e.d(s,"SubmitsPageModule",function(){return y});var i=e("ofXK"),a=e("tyNb"),o=e("fXoL"),n=e("rQ7a"),r=e("iB5Y"),c=e("I88u"),f=e("TC4B"),h=e("O+6x"),b=e("Bz6d"),u=e("m6/c"),p=e("DNt4"),l=e("b6eW"),d=e("xniV"),m=e("sGSV"),g=e("Lab3"),k=e("G8Z/"),I=e("UqID");let v=(()=>{class t{constructor(t,s,e,i){this.submitsService=t,this.authorsService=s,this.projectService=e,this.taskService=i,this.loading={projectInfo:!1,taskInfo:!1,taskConfig:!1,submits:!1,config:!1},this.loaded={projectInfo:!1,taskConfig:!1,taskInfo:!1,submits:!1,config:!1},this.submits=null,this.error=null,this.projectInfo=null,this.taskInfo=null,this.config=null}ngOnInit(){this.fetchConfig(),this.fetchSubmits(),this.fetchTaskInfo(),this.fetchProjectInfo()}fetchSubmits(){this.loading.submits=!0,this.submitsService.fetchSubmits().subscribe(t=>{this.submits=t,this.loaded.submits=!0},t=>{this.error=t.message},()=>{this.loading.submits=!1})}fetchConfig(){this.loading.config=!0,this.taskService.fetchTaskConfig().subscribe(t=>{this.config=t,this.taskService.updateTaskConfigMessage(t),this.loaded.taskConfig=!0},t=>{this.error=t.message},()=>{this.loading.taskConfig=!1})}fetchTaskInfo(){this.loading.taskInfo=!0,this.taskService.fetchTaskInfo().subscribe(t=>{this.taskInfo=t,this.authorsService.updateAuthorsMessage(this.taskInfo.data.authors),this.taskService.updateTaskInfoMessage(this.taskInfo.data.task_description),this.loaded.taskInfo=!0},t=>{this.error=t.message},()=>{this.loading.taskInfo=!1})}fetchProjectInfo(){this.loading.projectInfo=!0,this.projectService.fetchProjectInfo().subscribe(t=>{this.projectInfo=t,this.projectService.updateProjectMessage(this.projectInfo.data.tasks.names),this.loaded.projectInfo=!0},t=>{this.error=t.message},()=>{this.loading.projectInfo=!1})}}return t.\u0275fac=function(s){return new(s||t)(o.Fb(p.a),o.Fb(l.a),o.Fb(d.a),o.Fb(m.a))},t.\u0275cmp=o.zb({type:t,selectors:[["app-submits"]],decls:4,vars:2,consts:[[1,"submits"],[3,"config","items"],[1,"submits-features"]],template:function(t,s){1&t&&(o.Kb(0,"div",0),o.Gb(1,"app-table",1),o.Gb(2,"app-meta-panel"),o.Gb(3,"app-features-info",2),o.Jb()),2&t&&(o.vb(1),o.Zb("config",s.config)("items",s.submits))},directives:[g.a,k.a,I.a],styles:[""]}),t})();const j=[{path:"",component:(()=>{class t{constructor(){this.title="Submits"}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=o.zb({type:t,selectors:[["app-submits-page"]],decls:9,vars:0,template:function(t,s){1&t&&(o.Kb(0,"app-main-layout"),o.Kb(1,"app-header"),o.Kb(2,"header-body"),o.Gb(3,"app-task-selection"),o.Jb(),o.Jb(),o.Kb(4,"app-filters-panel"),o.Gb(5,"app-authors-filter"),o.Gb(6,"app-search"),o.Jb(),o.Kb(7,"app-main"),o.Gb(8,"app-submits"),o.Jb(),o.Jb())},directives:[n.a,r.a,c.a,f.a,h.a,b.a,u.a,v],styles:[""]}),t})()}];let S=(()=>{class t{constructor(){}}return t.\u0275mod=o.Db({type:t}),t.\u0275inj=o.Cb({factory:function(s){return new(s||t)},imports:[[a.d.forChild(j)],a.d]}),t})();var C=e("dFjG");let y=(()=>{class t{}return t.\u0275mod=o.Db({type:t}),t.\u0275inj=o.Cb({factory:function(s){return new(s||t)},imports:[[S,i.b,C.a]]}),t})()}}]);
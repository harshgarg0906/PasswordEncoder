(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yhxE:function(t,e,n){"use strict";n.r(e),n.d(e,"WebPasswordModule",(function(){return h}));var o=n("ofXK"),a=n("tyNb"),r=n("3Pt+"),i=n("fXoL"),s=n("tk/3");let b=(()=>{class t{constructor(t){this.http=t}getPassword(t){return console.log("in thee generate service"),this.http.post("http://localhost:8765/generate/password",t)}}return t.\u0275fac=function(e){return new(e||t)(i.Wb(s.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=n("XiUz"),d=n("kmnG"),l=n("qFsG"),g=n("bTqV");function u(t,e){if(1&t&&(i.Sb(0,"h1",9),i.pc(1),i.Rb()),2&t){const t=i.cc();i.Bb(1),i.qc(t.obtainedPassword)}}const p=[{path:"",component:(()=>{class t{constructor(t){this.passwordService=t,this.webSiteData={webSiteName:""},this.obtainedPassword="sksdvbjsdvbsdvbjsdvb",this.obtained=!0}ngOnInit(){this.generatePassword=new r.d({websitename:new r.b(null,[r.l.required])})}onSubmit(){console.log("on the submit"),this.webSiteData.webSiteName=this.generatePassword.value.websitename,console.log(this.webSiteData),this.passwordService.getPassword(this.webSiteData).subscribe(t=>{console.log("Password generator function"),console.log(t),this.obtained=!0,this.obtainedPassword=t.encryptedpassword})}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(b))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-generatepassword"]],decls:16,vars:2,consts:[[1,"allignh"],[3,"formGroup","ngSubmit"],["fxLayout",""],[1,"alignfield"],["matInput","","placeholder","www.google.com","formControlName","websitename"],["mat-raised-button","","color","primary",1,"alignbutton"],["class","generatedPassword",4,"ngIf"],["fxLayout","","fxLayoutGap","20px",1,"alignsbutton"],["mat-raised-button","","color","primary"],[1,"generatedPassword"]],template:function(t,e){1&t&&(i.Sb(0,"h1",0),i.pc(1,"GENERATE NEW PASSWORD"),i.Rb(),i.Sb(2,"form",1),i.ac("ngSubmit",(function(){return e.onSubmit()})),i.Sb(3,"div",2),i.Sb(4,"mat-form-field",3),i.Sb(5,"mat-label"),i.pc(6,"Website Name"),i.Rb(),i.Ob(7,"input",4),i.Rb(),i.Sb(8,"button",5),i.pc(9,"Generate"),i.Rb(),i.Rb(),i.Rb(),i.oc(10,u,2,1,"h1",6),i.Sb(11,"div",7),i.Sb(12,"button",8),i.pc(13,"Primary"),i.Rb(),i.Sb(14,"button",8),i.pc(15,"Primary"),i.Rb(),i.Rb()),2&t&&(i.Bb(2),i.fc("formGroup",e.generatePassword),i.Bb(8),i.fc("ngIf",e.obtained))},directives:[r.m,r.i,r.e,c.a,d.b,d.e,l.a,r.a,r.h,r.c,g.a,o.i,c.b],styles:[".alignfield[_ngcontent-%COMP%]{margin-top:4%;margin-left:20%;width:50%}.alignbutton[_ngcontent-%COMP%]{height:20%;margin-top:5%;margin-left:4%}.generatedPassword[_ngcontent-%COMP%]{margin-top:1%;margin-left:20%;margin-right:40%;background-color:grey;height:22%;width:50%;text-align:center;padding-top:8%;color:#f0fff0}.alignsbutton[_ngcontent-%COMP%]{margin-top:4%;margin-left:20%}.allignh[_ngcontent-%COMP%]{margin-left:30%;margin-top:3%}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(e){return new(e||t)},imports:[[a.b.forChild(p)],a.b]}),t})();var f=n("5dmV"),w=n("YUcS");let h=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(e){return new(e||t)},imports:[[o.b,m,f.a,w.a,r.k,r.f]]}),t})()}}]);
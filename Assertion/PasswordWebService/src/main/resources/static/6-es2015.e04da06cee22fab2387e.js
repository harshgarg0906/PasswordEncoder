(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yhxE:function(t,e,n){"use strict";n.r(e),n.d(e,"WebPasswordModule",(function(){return h}));var o=n("ofXK"),r=n("tyNb"),a=n("3Pt+"),s=n("fXoL"),i=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t}getPassword(t){return console.log("in thee generate service"),this.http.post("http://localhost:8765/generate/password",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(i.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("XiUz"),l=n("kmnG"),u=n("qFsG"),d=n("bTqV");function p(t,e){if(1&t&&(s.Sb(0,"p"),s.pc(1),s.Rb()),2&t){const t=s.cc();s.Bb(1),s.qc(t.obtainedPassword)}}const w=[{path:"",component:(()=>{class t{constructor(t){this.passwordService=t,this.webSiteData={webSiteName:""},this.obtained=!1}ngOnInit(){this.generatePassword=new a.d({websitename:new a.b(null,[a.l.required])})}onSubmit(){console.log("on the submit"),this.webSiteData.webSiteName=this.generatePassword.value.websitename,console.log(this.webSiteData),this.passwordService.getPassword(this.webSiteData).subscribe(t=>{console.log("Password generator function"),console.log(t),this.obtained=!0,this.obtainedPassword=t.encryptedpassword})}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(c))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-generatepassword"]],decls:9,vars:2,consts:[[3,"formGroup","ngSubmit"],["fxLayout",""],[1,"alignfield"],["matInput","","placeholder","www.google.com","formControlName","websitename"],["mat-raised-button","","color","primary",1,"alignbutton"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Sb(0,"form",0),s.ac("ngSubmit",(function(){return e.onSubmit()})),s.Sb(1,"div",1),s.Sb(2,"mat-form-field",2),s.Sb(3,"mat-label"),s.pc(4,"Website Name"),s.Rb(),s.Ob(5,"input",3),s.Rb(),s.Sb(6,"button",4),s.pc(7,"Generate"),s.Rb(),s.Rb(),s.Rb(),s.oc(8,p,2,1,"p",5)),2&t&&(s.fc("formGroup",e.generatePassword),s.Bb(8),s.fc("ngIf",e.obtained))},directives:[a.m,a.i,a.e,b.a,l.b,l.e,u.a,a.a,a.h,a.c,d.a,o.i],styles:[".alignfield[_ngcontent-%COMP%]{margin-top:10%;margin-left:20%;width:50%}.alignbutton[_ngcontent-%COMP%]{height:20%;margin-top:11%;margin-left:4%}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[r.b.forChild(w)],r.b]}),t})();var f=n("5dmV"),g=n("YUcS");let h=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[o.b,m,f.a,g.a,a.k,a.f]]}),t})()}}]);
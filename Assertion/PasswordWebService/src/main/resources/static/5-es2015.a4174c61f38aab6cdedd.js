(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yhxE:function(t,e,a){"use strict";a.r(e),a.d(e,"WebPasswordModule",(function(){return v}));var n=a("ofXK"),i=a("tyNb"),s=a("3Pt+"),o=a("fXoL"),r=a("Rw97"),c=a("dNgK"),b=a("6ht4"),d=a("XiUz"),u=a("kmnG"),l=a("qFsG"),g=a("bTqV");function h(t,e){if(1&t&&(o.Ub(0,"h1",8),o.xc(1),o.Tb()),2&t){const t=o.gc();o.Cb(1),o.yc(t.obtainedPassword)}}function p(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",9),o.Ub(1,"button",10),o.cc("click",(function(){return o.qc(t),o.gc().onSave()})),o.xc(2,"Save"),o.Tb(),o.Ub(3,"button",10),o.cc("click",(function(){return o.qc(t),o.gc().onCancel()})),o.xc(4,"Cancel"),o.Tb(),o.Tb()}}const w=[{path:"",component:(()=>{class t{constructor(t,e,a){this.passwordService=t,this._snackBar=e,this.userAuthService=a,this.webSiteData={webSiteName:""},this.savedData={encryptedpassword:"",webSiteName:"",psid:""},this.obtainedPassword="",this.obtained=!1}ngOnInit(){this.generatePassword=new s.d({websitename:new s.b(null,[s.m.required])}),this.userAuthService.getPsidBehaviourSubject().subscribe(t=>{this.psid=t})}onSubmit(){this.webSiteData.webSiteName=this.generatePassword.value.websitename,this.passwordService.getPassword(this.webSiteData).subscribe(t=>{this.savedData=t,this.obtained=!0,this.obtainedPassword=t.encryptedpassword})}onSave(){this.obtained=!1,this.savedData.psid=this.psid,this.passwordService.savePassword(this.savedData).subscribe(t=>{1==t.duplicate?this._snackBar.open("Data Exist","Already",{duration:2e3}):this._snackBar.open("Data Saved","Succefuly",{duration:2e3})}),this.generatePassword.reset()}onCancel(){this.obtained=!1,this.generatePassword.reset()}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(r.a),o.Ob(c.a),o.Ob(b.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-generatepassword"]],decls:12,vars:3,consts:[[1,"allignh"],[3,"formGroup","ngSubmit"],["fxLayout",""],[1,"alignfield"],["matInput","","placeholder","www.google.com","formControlName","websitename"],["mat-raised-button","","color","primary",1,"alignbutton"],["class","generatedPassword",4,"ngIf"],["fxLayout","","fxLayoutGap","20px","class","alignsbutton",4,"ngIf"],[1,"generatedPassword"],["fxLayout","","fxLayoutGap","20px",1,"alignsbutton"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(o.Ub(0,"h1",0),o.xc(1,"GENERATE NEW PASSWORD"),o.Tb(),o.Ub(2,"form",1),o.cc("ngSubmit",(function(){return e.onSubmit()})),o.Ub(3,"div",2),o.Ub(4,"mat-form-field",3),o.Ub(5,"mat-label"),o.xc(6,"Website Name"),o.Tb(),o.Pb(7,"input",4),o.Tb(),o.Ub(8,"button",5),o.xc(9,"Generate"),o.Tb(),o.Tb(),o.Tb(),o.wc(10,h,2,1,"h1",6),o.wc(11,p,5,0,"div",7)),2&t&&(o.Cb(2),o.lc("formGroup",e.generatePassword),o.Cb(8),o.lc("ngIf",e.obtained),o.Cb(1),o.lc("ngIf",e.obtained))},directives:[s.n,s.i,s.e,d.a,u.b,u.e,l.a,s.a,s.h,s.c,g.a,n.k,d.b],styles:[".alignfield[_ngcontent-%COMP%]{margin-top:4%;margin-left:20%;width:50%}.alignbutton[_ngcontent-%COMP%]{height:20%;margin-top:5%;margin-left:4%}.generatedPassword[_ngcontent-%COMP%]{margin-top:1%;margin-left:20%;margin-right:40%;background-color:grey;height:22%;width:50%;text-align:center;padding-top:8%;color:#f0fff0}.alignsbutton[_ngcontent-%COMP%]{margin-top:4%;margin-left:20%}.allignh[_ngcontent-%COMP%]{margin-left:30%;margin-top:3%}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[i.c.forChild(w)],i.c]}),t})();var m=a("5dmV"),S=a("YUcS");let v=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[n.c,f,m.a,S.a,s.l,s.f]]}),t})()}}]);
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yhxE:function(e,n,t){"use strict";t.r(n),t.d(n,"WebPasswordModule",(function(){return h}));var o,c,r,s,i=t("ofXK"),a=t("tyNb"),l=t("fXoL"),u=t("tk/3"),f=((o=function(){function e(n){_classCallCheck(this,e),this.http=n}return _createClass(e,[{key:"getData",value:function(){console.log("in thee generate service"),this.http.get("http://localhost:8765/generate/password").subscribe((function(e){console.log("Password generator function"),console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||o)(l.Wb(u.a))},o.\u0275prov=l.Jb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),p=[{path:"",component:(c=function(){function e(n){_classCallCheck(this,e),this.passwordService=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){console.log("on the submit"),this.passwordService.getData()}}]),e}(),c.\u0275fac=function(e){return new(e||c)(l.Nb(f))},c.\u0275cmp=l.Hb({type:c,selectors:[["app-generatepassword"]],decls:2,vars:0,consts:[[3,"click"]],template:function(e,n){1&e&&(l.Sb(0,"button",0),l.ac("click",(function(){return n.onSubmit()})),l.pc(1,"Click"),l.Rb())},styles:[""]}),c)}],b=((s=function e(){_classCallCheck(this,e)}).\u0275mod=l.Lb({type:s}),s.\u0275inj=l.Kb({factory:function(e){return new(e||s)},imports:[[a.b.forChild(p)],a.b]}),s),h=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Lb({type:r}),r.\u0275inj=l.Kb({factory:function(e){return new(e||r)},imports:[[i.b,b]]}),r)}}]);
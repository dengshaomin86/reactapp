(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0325234e"],{"30ba":function(t,n,e){},3444:function(t,n,e){"use strict";var a=e("30ba"),s=e.n(a);s.a},"4e82":function(t,n,e){"use strict";var a=e("23e7"),s=e("1c0b"),i=e("7b0b"),r=e("d039"),o=e("a640"),c=[],u=c.sort,f=r((function(){c.sort(void 0)})),b=r((function(){c.sort(null)})),l=o("sort"),d=f||!b||!l;a({target:"Array",proto:!0,forced:d},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),s(t))}})},a94e:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tabs-wrapper"},[e("keep-alive",[e("router-view",{staticClass:"tabs-wrapper-child"})],1),e("footer",t._l(t.tabs,(function(n,a){return e("router-link",{key:a,staticClass:"active-action",attrs:{to:n.path}},[e("i",{staticClass:"iconfont",class:"icon"+n.name}),e("p",[t._v(t._s(n.name_cn))])])})),1)],1)},s=[],i=(e("7db0"),e("c975"),e("d81d"),e("4e82"),e("b64b"),{name:"tabs",data:function(){return{tabs:[]}},methods:{init:function(){this.getTabs()},getTabs:function(){var t=this.$router.options.routes.find((function(t){return"tabs"===t.name}));if(t){var n={assets:"资产",exchangeSLG:"SLG交易",market:"市场",find:"发现",setup:"设置"};this.tabs=t.children.sort((function(t,e){var a=Object.keys(n);return a.indexOf(t.name)-a.indexOf(e.name)})).map((function(t){return Object.assign(t,{name_cn:n[t.name]})}))}}},mounted:function(){this.init()}}),r=i,o=(e("3444"),e("2877")),c=Object(o["a"])(r,a,s,!1,null,"7eb15915",null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0325234e.83187655.js.map
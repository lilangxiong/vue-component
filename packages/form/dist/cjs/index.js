"use strict";function e(e,t,n,o,r,s,i,d,c,a){"boolean"!=typeof i&&(c=d,d=i,i=!1);const f="function"==typeof n?n.options:n;let l;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),o&&(f._scopeId=o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=l):t&&(l=i?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),l)if(f.functional){const e=f.render;f.render=function(t,n){return l.call(n),e(t,n)}}else{const e=f.beforeCreate;f.beforeCreate=e?[].concat(e,l):[l]}return n}const t=e({render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",[e._t("default")],2)},staticRenderFns:[]},undefined,{name:"llxForm",provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}}},"data-v-230ed5fc",false,undefined,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)},module.exports=t;

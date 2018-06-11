(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"service-业务逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-业务逻辑","aria-hidden":"true"}},[t._v("#")]),t._v(" service 业务逻辑")]),s("p",[s("code",[t._v("org.huiche.service.BaseCrudServiceImpl")]),t._v(", 作为单表的通用CrudService,主要对BaseCrudDao进行了调用封装")]),s("h2",{attrs:{id:"内置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置方法")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("dao")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("需要自行实现,返回对于的crudDao")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("create")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建数据")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("update")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("更新数据")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("save")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据id是否有值创建或更新")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("list")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("查询列表")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("page")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("分页查询")])])])]),s("h2",{attrs:{id:"crudservice示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crudservice示例","aria-hidden":"true"}},[t._v("#")]),t._v(" CrudService示例")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentService")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseCrudService")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentServiceImpl")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseCrudServiceImpl")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentService")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" StudentDao studentDao"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" BaseCrudDao"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Student"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("dao")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" studentDao"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);
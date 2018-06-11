(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"dao-数据访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dao-数据访问","aria-hidden":"true"}},[t._v("#")]),t._v(" dao 数据访问")]),s("h2",{attrs:{id:"basedao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basedao","aria-hidden":"true"}},[t._v("#")]),t._v(" BaseDao")]),s("p",[s("code",[t._v("org.huiche.dao.BaseDao")]),t._v(", 作为基础Dao, 它默认提供了SQLQueryFactory注入,用其来进行数据库操作")]),s("h2",{attrs:{id:"basecruddao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basecruddao","aria-hidden":"true"}},[t._v("#")]),t._v(" BaseCrudDao")]),s("p",[s("code",[t._v("org.huiche.dao.BaseCrudDao")]),t._v(", 作为单表查询的通用Dao,其提供了诸多方法及重载,方便进行单表数据查询")]),s("h3",{attrs:{id:"内置数据操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置数据操作方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置数据操作方法")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("create")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建单条记录")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("creates")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("批量创建多条记录")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("delete")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("删除数据")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("truncate")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("清空数据")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("update")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("更新单条记录")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("updates")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("批量更新多条记录")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("查询条数")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("exists")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("查询是否存在")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("get")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回一条记录的全部字段")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("getColumn")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回一条记录的某个字段")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("getColumns")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回一条记录的多个字段")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("list")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回多条记录的集合")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("listColumn")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回多条记录的某个字段的集合")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("listColumns")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回多条记录的某些字段的集合")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("page")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("分页获取指定记录的全部字段")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("pageColumns")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("分页获取指定记录的某些字段")])])])]),s("h3",{attrs:{id:"内置扩展方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置扩展方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置扩展方法")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认实现")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("建议重写场景")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("root")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("提供查询实体(数据表Path)")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("必须自行实现")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("pk")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("提供主键Path")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Long id")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("不建议重写")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("beforeCreate")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建数据之前")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置创建时间更新时间")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("某些字段有默认值时")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("beforeUpdate")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("更新数据之前")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置更新时间")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据实际情况")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("validOnCreate")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建数据时进行验证(主要验证非空)")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据注解验证")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("不建议重写")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("validRegular")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("验证数据规则(长度,规则等)")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据注解验证")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("不建议重写")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("doValid")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否进行验证")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("进行验证")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("需要取消验证时")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("createSetId")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建数据时是否给id赋值")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("赋值")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据实际情况")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("defaultMultiOrder")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("默认多列排序")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("默认排序")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("需要改变默认排序且多列时")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("defaultOrder")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("默认排序")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("id倒序")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("需要改变默认排序时")])])])]),s("h2",{attrs:{id:"通用cruddao示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用cruddao示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用CrudDao示例")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentDao")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseCrudDao")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Student"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nonnull")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" RelationalPath"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Student"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("root")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),s("ul",[s("li",[t._v("其中Q开头的文件是QueryDsl生成的用于数据查询的'查询实体',")]),s("li",[t._v("可以借助官方的maven插件自动生成")]),s("li",[t._v("也可以使用"),s("code",[t._v("huiche-querydsl-codegen")]),t._v("插件手动生成(推荐)")])])]),s("h2",{attrs:{id:"关联查询示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联查询示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 关联查询示例")]),s("p",[t._v("查询指定小组的学生的成绩")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentScoreDTO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String studentName"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Double score"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentDao")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseDao")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("StudentScoreDTO"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("listStudentScore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" DataUtil"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("copyList")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            QueryUtil"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{attrs:{class:"token function"}},[t._v("sql")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("select")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    QStores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("leftJoin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stores"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("eq")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("studentId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("where")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("eq")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                item "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentScoreDTO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setStudentName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setScore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也可以")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StudentDao")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseDao")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 可以将此常量直接定义到DTO里")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" QBean"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("StudentScoreDTO"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" DTO "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Projections"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fields")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        StudentScoreDTO"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("as")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"studentName"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        QStores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stores"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("StudentScoreDTO"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("listStudentScore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" QueryUtil"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{attrs:{class:"token function"}},[t._v("sql")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("select")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DTO"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("leftJoin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStore"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("eq")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStore"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("studentId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("where")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStudent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("eq")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("teamId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);
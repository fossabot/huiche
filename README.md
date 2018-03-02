# HuiChe 
[![build](https://img.shields.io/travis/jmjlbmn/huiche.svg?style=flat-square)](https://travis-ci.org/jmjlbmn/huiche)
[![maven](https://img.shields.io/maven-metadata/v/http/central.maven.org/maven2/com/github/jmjlbmn/huiche/maven-metadata.xml.svg?style=flat-square)](https://mvnrepository.com/artifact/com.github.jmjlbmn)
- 主要基于Spring boot
- 数据库连接池:druid (数据库连接池目前仅推荐使用druid或hikari)
- 数据查询 QueryDSL
- web容器 undertow

## 添加huiche-spring-boot-starter依赖即可
具体可以参考[huiche-demo](https://github.com/jmjlbmn/huiche/tree/master/huiche-demo),目前只有简单搭建,后续完善


## [sql-builder插件](https://github.com/jmjlbmn/huiche/tree/master/huiche-extra/huiche-sql-builder)
目前仅支持MySql,依赖注解
- 通过Bean创建表,
- 通过数据表和Bean对比 更新数据表 

## codegen-querydsl插件
生成QueryDSL查询实体

---
author: vguhesan
categories:
- Java
comments: true
date: 2010-07-21T21:28:03Z
excerpt: Notable difference between Ant 1.7.x and 1.8.x - path and pathelement
link: http://mythinkpond.com/2010/07/21/notable-difference-between-apache-ant-1-7-x-and-1-8-x-path-and-pathelement/
slug: notable-difference-between-apache-ant-1-7-x-and-1-8-x-path-and-pathelement
title: Notable difference between Apache Ant 1.7.x and 1.8.x - path and pathelement
url: /2010/07/21/notable-difference-between-apache-ant-1-7-x-and-1-8-x-path-and-pathelement/
wordpress_id: 148
---

On key notable difference I'm observing between Apache Ant 1.7.1 and 1.8.1 is with the path and pathelement.

a build.xml file before

===========================
<target name="init">
     <property name="web.dir" value="web" />
     <path id="servlet.class.path">
        <pathelement location="${TOMCAT_HOME}/lib/servlet.jar" />       
    </path>
</target>
===========================

If you had a path-id set in a target that may never get executed, Ant will make an attempt to find that path and use it. Whereas with 1.8.1, you will need to move those "Init" properties to the main level so that they will be properly found and used.

build.xml file after Ant 1.8.1

===========================
<property name="web.dir" value="web" />
<path id="servlet.class.path">
    <pathelement location="${TOMCAT_HOME}/lib/servlet.jar" />       
</path>

<target name="init">
</target>
===========================

I guess Ant is making it more like a language that if a property is set within a "target", it's only accessable within that target.

And so the properties and path-id fields need to be set globally at the main level.

Any thought? or comments?

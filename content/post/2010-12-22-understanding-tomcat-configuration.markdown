---
author: vguhesan
categories:
- Java
- Tomcat
comments: true
date: 2010-12-22T20:05:20Z
link: http://mythinkpond.com/2010/12/22/understanding-tomcat-configuration/
slug: understanding-tomcat-configuration
tags:
- configuration
title: Understanding Tomcat Configuration
url: /2010/12/22/understanding-tomcat-configuration/
wordpress_id: 198
---

Case #1:
When the Tomcat config is this:
[sourcecode language="jscript"]
<Host name="localhost" appBase="C:/apps/apache-tomcat/null"
       unpackWARs="true" autoDeploy="true"
       xmlValidation="false" xmlNamespaceAware="false">
				
			
<Context path="/" docBase="C:/apps/apache-tomcat/DeployedApps/HelloWorld" debug="0" reloadable="false" crossContext="false"/>
[/sourcecode]

Observe the "path" element in the "Context". Then…
http://localhost/index.jsp yields to the “index.jsp” under HelloWorld folder.
http://localhost/HelloWorld/index.jsp yields to a “404 Page”.

Case #2:
When the Tomcat setup is this:
[sourcecode language="jscript"]
<Host name="localhost" appBase="C:/apps/apache-tomcat/null"
       unpackWARs="true" autoDeploy="true"
       xmlValidation="false" xmlNamespaceAware="false">
				
			
<Context path="/HelloWorld" docBase="C:/apps/apache-tomcat/DeployedApps/HelloWorld" debug="0" reloadable="false" crossContext="false"/>

[/sourcecode]

Once again observe the "path" element in the "Context". Then…
http://localhost/index.jsp yields to a “blank page”.
http://localhost/HelloWorld/index.jsp yields to a “blank page”.
http://localhost/hw/index.jsp yields to the “index.jsp”.

So if the objective is to deliver “HelloWorld” as the default application for the root context, then the configuration for that instance should like “case #1”. If the objective of a particular application to be bound to a “path”=”application context”, then we need to deploy that instance as “case #2”.

I hope this clarifies the two models. Also note that in either one of these cases, I have modified the "Host" parameter's "appBase" to point to a non-default folder (Default folder is "webapps" under TOMCAT_HOME. Depending upon the download you fetch, you may have additional applications such as the Tomcat manager and ROOT deployed by default each and every time. You do not need them unless you are using the Tomcat manager for your deployment. So in this example, I have move the "appBase" to point to an empty folder location.





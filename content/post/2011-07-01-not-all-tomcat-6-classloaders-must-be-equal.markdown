---
author: vguhesan
categories:
- Grails
- Groovy
- Java
- Tomcat
- web development
comments: true
date: 2011-07-01T17:34:46Z
link: http://mythinkpond.com/2011/07/01/not-all-tomcat-6-classloaders-must-be-equal/
slug: not-all-tomcat-6-classloaders-must-be-equal
tags:
- class loader
- class loading
- ClassNotFoundException
- Log4jConfigListener
title: Not all Tomcat 6 classloaders must be equal
url: /2011/07/01/not-all-tomcat-6-classloaders-must-be-equal/
wordpress_id: 240
---

Today, while doing some Grails development I came across a peculiar issue that perplexed me and I'm documenting it for all others to benefit. (Also see my other blog from today for the issue that started this journey).

Here are my specifications:

**Development Machine**



	
  * Windows-7, 64-bit

	
  * java version "1.6.0_24"
Java(TM) SE Runtime Environment (build 1.6.0_24-b07)
Java HotSpot(TM) **64-Bit Server VM** (build 19.1-b02, mixed mode)

	
  * Grails 1.4.0.M1

	
  * Tomcat - apache-tomcat64-6.0.32


**Local Deployment Server**



	
  * Windows Vista, 32-bit

	
  * java version "1.6.0_26"
Java(TM) SE Runtime Environment (build 1.6.0_26-b03)
Java HotSpot(TM) Client VM (build 20.1-b02, mixed mode, sharing)

	
  * Grails (does not matter since I'll be deploying a WAR)

	
  * Tomcat - apache-tomcat-6.0.32 (32-bit version of Tomcat)


Since the issue we are taking about deals with Grails, let's get into he details of how I ended up with the WAR. In Grails, I issued the following command:

    
    >grails war abcdefg.war


This creates a war file. When deployed under the 64-bit Tomcat, no issues. But when deployed under the 32-bit Tomcat. I was getting the

Jul 1, 2011 10:08:25 AM org.apache.catalina.core.StandardContext start
SEVERE: Error listenerStart

(See my [previous article](http://mythinkpond.wordpress.com/2011/07/01/tomcat-6-infamous-severe-error-listenerstart-message-how-to-debug-this-error/) on how I enabled debugging to get to the root cause of the issue.)

But after some debugging, what it boiled down to was a "Class Cannot Be Found" error:

[sourcecode language="jscript"]


Jul 1, 2011 11:29:25 AM org.apache.catalina.core.StandardContext listenerStart
SEVERE: Error configuring application listener of class org.codehaus.groovy.grails.web.util.Log4jConfigListener
java.lang.ClassNotFoundException: org.codehaus.groovy.grails.web.util.Log4jConfigListener

[/sourcecode]

In examining the war file, the JAR file named "grails-web-1.4.0.M1.jar" under the "/WEB-INF/lib" does not contain the needed "Log4jConfigListener" class under "grails-web-1.4.0.M1.jar\org\codehaus\groovy\grails\web\util\"

But clearly this class is inside this other JAR file named "grails-plugin-logging-1.4.0.M1.jar" under "\org\codehaus\groovy\grails\web\util\".

And this identical war file works under the 64-bit Tomcat but not under the 32-bit Tomcat.

So how did I resolve the issue? I upgraded my 32-bit box to Tomcat 7.0 and this made it work. But clearly, there is an underlying issue with the class-loader under the 32-bit Tomcat 6.0.32.

Maybe someone reading this will have the answer to this issue.

Cheers!

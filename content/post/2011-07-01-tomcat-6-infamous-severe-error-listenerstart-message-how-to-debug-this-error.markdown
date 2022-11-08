---
author: vguhesan
categories:
- Grails
- Groovy
- GWT
- Java
- Spring
- Spring Framework
- Tomcat
- web development
comments: true
date: 2011-07-01T17:10:55Z
link: http://mythinkpond.com/2011/07/01/tomcat-6-infamous-severe-error-listenerstart-message-how-to-debug-this-error/
slug: tomcat-6-infamous-severe-error-listenerstart-message-how-to-debug-this-error
tags:
- Error listnerStart
- exception
- listenerStart
- severe
title: 'Tomcat 6+: Infamous "SEVERE: Error listenerStart" message - How-To debug this
  error?'
url: /2011/07/01/tomcat-6-infamous-severe-error-listenerstart-message-how-to-debug-this-error/
wordpress_id: 237
---

I'm sure if you have been developing with Java and Tomcat for sometime, you are likely to run into the infamous debug error.

**SEVERE: Error listenerStart**

You will most likely start Googling it trying to find out what the heck is going on. And in trying to see the extended logging on what that "listenerStart" error means. After some lucky searches, you will see links asking you to drop a "log4j.properties" file under '/WEB-INF/classes' directory inside your WAR to help debug which one of the listeners is throwing this crazy error.

Well, this advise will most likely work for you if you are developing under an earlier version of Tomcat. If you are using versions 6.0 or above then continue to read on...

In Tomcat 6 or above, the default logger is the"java.util.logging" logger and not Log4J. So if you are trying to add a "log4j.properties" file - **this will NOT work**. The Java utils logger looks for a file called "logging.properties" as stated here:
[http://tomcat.apache.org/tomcat-6.0-doc/logging.html](http://tomcat.apache.org/tomcat-6.0-doc/logging.html)

So to get to the debugging details create a "logging.properties" file under your"/WEB-INF/classes" folder of your WAR and you're all set.

And now when you restart your Tomcat, you will see all of your debugging in it's full glory!!!

Sample **logging.properties** file:

[sourcecode language="jscript"]
org.apache.catalina.core.ContainerBase.[Catalina].level = INFO
org.apache.catalina.core.ContainerBase.[Catalina].handlers = java.util.logging.ConsoleHandler

[/sourcecode]

and you will most likely see a "class-not-found" exception. ;-)

Look at the bright side, you're now one step closer to the solution.

Happy coding!

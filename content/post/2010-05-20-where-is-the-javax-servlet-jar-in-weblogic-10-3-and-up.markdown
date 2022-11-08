---
author: vguhesan
comments: true
date: 2010-05-20T15:40:45Z
excerpt: where is the javax.servlet jar in Weblogic 10.3 and up?
link: http://mythinkpond.com/2010/05/20/where-is-the-javax-servlet-jar-in-weblogic-10-3-and-up/
slug: where-is-the-javax-servlet-jar-in-weblogic-10-3-and-up
tags:
- javax.servlet
- servlet.jar
- Weblogic
title: where is the javax.servlet jar in Weblogic 10.3 and up?
url: /2010/05/20/where-is-the-javax-servlet-jar-in-weblogic-10-3-and-up/
wordpress_id: 129
---

With the 10.3 release, Weblogic has split the javax.servlet and others out of weblogic.jar. I'm blogging it in hopes that if others are looking for it, this entry would help them.

You can find javax.servlet and other jars under "<BEA_HOME>\modules\" folder. In my specific build, I have the servlet jar file as "<BEA_HOME>\modules\javax.servlet_1.0.0.0_2-5.jar".

So if you are looking for it that's where it is and no need to go and download the servlet.jar from Tomcat to include within your resource in your project\IDE.

Cheers.

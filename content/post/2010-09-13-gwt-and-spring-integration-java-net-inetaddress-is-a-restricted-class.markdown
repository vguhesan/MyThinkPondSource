---
author: vguhesan
categories:
- GWT
- Java
comments: true
date: 2010-09-13T02:05:51Z
excerpt: GWT and Spring Integration - java.net.InetAddress is a restricted class
link: http://mythinkpond.com/2010/09/12/gwt-and-spring-integration-java-net-inetaddress-is-a-restricted-class/
slug: gwt-and-spring-integration-java-net-inetaddress-is-a-restricted-class
tags:
- Spring
- Spring Framework
title: GWT and Spring Integration - java.net.InetAddress is a restricted class
url: /2010/09/13/gwt-and-spring-integration-java-net-inetaddress-is-a-restricted-class/
wordpress_id: 174
---

When trying to integrate both Spring and GWT, one might encounter the following error in the Spring Eclipse IDE:

"java.net.InetAddress is a restricted class". The problem happens when you try to use Spring configuration for your database. In my case, I was using Spring to update data back to a H2 database.

Well, here's one way to deal with this issue. Disable the "Google App Engine". Yes, based on my research, if you're using  GWT, you can disable Google App Engine and still continue your development with GWT.

You can right click on your project and go into properties. Under [Google] -> [App Engine], you can "uncheck" - use Google App Engine. And rebuild the application and resume your debugging.

This allows you to use Spring beans to persist your data in a database.

Cheers.

---
author: vguhesan
categories:
- GWT
- Java
- Maven
- Vaadin
comments: true
date: 2010-09-15T18:50:21Z
excerpt: Adding custom jars to your maven war file under "\web-inf\lib" folder.
link: http://mythinkpond.com/2010/09/15/maven-gwt-vaadin-including-additional-custom-jars-in-a-maven-project/
slug: maven-gwt-vaadin-including-additional-custom-jars-in-a-maven-project
tags:
- Java MVC
- mvn
title: Maven - GWT - Vaadin - including additional custom jars in a maven project
  under "\web-inf\lib"
url: /2010/09/15/maven-gwt-vaadin-including-additional-custom-jars-in-a-maven-project/
wordpress_id: 177
---

With a lot of folks trying [Google Web Toolkit (GWT)](http://code.google.com/webtoolkit/) and\or [Vaadin](http://vaadin.com/home) (combined with Maven), one of the problems that they might encounter is this:


<blockquote>How do I get my custom Vaadin themes or GWT jar files included under my "\web-inf\lib" folder inside the war</blockquote>


Here's a [link](http://stackoverflow.com/questions/2008821/how-do-i-get-maven-managed-dependencies-copied-into-war-web-inf-lib-so-i-can-run/3720589#3720589) to the such a question in detail.

The answer is a lot simpler than you think. But before we explore the answer, I should warn you that this approach is going away from what Maven would like you to do. In Maven, you can take each of your jars\libraries and add them to your local repository and then include them as needed in your projects. If you want to go the proper route [here's how](http://maven.apache.org/general.html#importing-jars) you do it. This keeps a consistent version in all your projects and can allow you to gracefully update the library as new versions become available.

But if you still want to go ahead and add these custom jars in your project then follow these steps:



	
  1. Create a "lib" folder under your project like this: "\src\main\webapp\WEB-INF\lib"

	
  2. Copy needed "jars" etc that you want included inside your WAR bundle folder.

	
  3. Invoke your maven build as you normally do. I use "mvn install", which creates builds the war file.


If you examine the WAR file, your jars that you included in step-1 and step-2 will be there.

By the way, have you tried Vaadin lately? To summarize my experience with Vaddin... "It's a breath of fresh air. Simple. Elegant. Concise."

Cheers.

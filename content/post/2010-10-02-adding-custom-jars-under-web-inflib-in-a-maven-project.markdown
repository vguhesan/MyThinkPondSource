---
author: vguhesan
categories:
- Java
- Maven
- web development
comments: true
date: 2010-10-02T18:28:00Z
excerpt: Adding custom jars under "\WEB-INF\lib" in a Maven project
link: http://mythinkpond.com/2010/10/02/adding-custom-jars-under-web-inflib-in-a-maven-project/
slug: adding-custom-jars-under-web-inflib-in-a-maven-project
tags:
- jars
title: Add custom jars under "\WEB-INF\lib" in a Maven project
url: /2010/10/02/adding-custom-jars-under-web-inflib-in-a-maven-project/
wordpress_id: 185
---

The answer is a lot simpler than you think. But before we explore the answer, I should warn you that this approach is not what is recommended by Maven. Maven builds upon consistency and structure and this process goes away from that methodology. In Maven, you can take each of your jars\libraries and add them to your local repository and then include them as needed in your projects. If you want to go the proper route [here’s how you do it](http://maven.apache.org/general.html#importing-jars). This keeps a consistent version in all your projects and can allow you to gracefully update the library as new versions become available.

But if you still want to go ahead and add these custom jars in your project then follow these steps:

1. Create a “lib” folder under your project like this: “\src\main\webapp\WEB-INF\lib”
2. Copy needed “jars” etc that you want included inside your WAR bundle folder.
3. Invoke your maven build as you normally do. I use “mvn install”, which creates builds the war file.

If you examine the WAR file, your jars that you included in step-1 and step-2 will be there.

---
author: vguhesan
categories:
- Java
- Scala
- Wicket
comments: true
date: 2009-11-05T17:31:07Z
excerpt: ContextPath in Apache Wicket or adding a page resource in Wicket
link: http://mythinkpond.com/2009/11/05/contextpath-in-apache-wicket/
slug: contextpath-in-apache-wicket
tags:
- Context Path
- contextPath
title: ContextPath in Apache Wicket
url: /2009/11/05/contextpath-in-apache-wicket/
wordpress_id: 30
---

One of the first things I found as I was getting familiar with Wicket is how do you point to resources that are part of a page. Well I did some digging around to find out so I'm documenting it here for others who might be facing the same challenges as they discover Apache Wicket.

**Problem**:
You have pages in Wicket that are HTML with "Wicket" tags. But then you might want to point to resources such as CSS style sheets or JavaScript that's part of a page. Here's an example of a typical JSP page:

[sourcecode language="html"]

<html>
<head>
<style type="text/css" media="screen">@import \" + request.getContextPath() + "/styles/site.css\";</style>
</head>
...

[/sourcecode]

Well, the above code works when you have a JSP page that gets compiled at run-time before being served. But in the case of Wicket, it does not. So how do you handle such situations?

**Solution:**

**Step-1:** Add "<wicket:head>" and "</wicket:head>" between your HTML page like this:

[sourcecode language="html"]

<html>
<head>
<wicket:head>
<!-- Other existing HTML tags can continue to go here -->
</wicket:head>
</head>
...

[/sourcecode]

**Step-2:** Get the ServletContext and in turn the Context-Path for the web application in your Java/Scala code.

For application servers implementing Servlet 2.5 and above: (Tomcat 6.x implements Servlet 2.5)
[sourcecode language="java"]

ServletContext servletContext = WebApplication.get().getServletContext();
String contextPath = servletContext.getContextPath();

[/sourcecode]

For application servers implementing Servlet 2.4: (Tomcat 5.5x implements Servlet 2.4)
[sourcecode language="java"]

String contextPath = getWebRequestCycle().getWebRequest().getHttpServletRequest().getContextPath();

[/sourcecode]



<blockquote>What's the difference? Well, in Servlet 2.5, a new method was added 
String javax.servlet.ServletContext.getContextPath()
But if you are deploying your code in an earlier Tomcat or other application servers that do not implement Servlet 2.5, you will be at a disadvantage. So in those cases, use the other approach. 
</blockquote>




**Step-3:** In your Java/Scala Wicket code, just as you add labels or other components to your page you can add the following:

[sourcecode language="java"]

add(new StringHeaderContributor("<style type=\"text/css\" media=\"screen\">@import \"" + contextPath + "/styles/site.css\";</style>"));

[/sourcecode]

So here's what happens. In step-2, we created a variable called "contextPath" with the Servlet Context Path as it's value. And when you add a "StringHeaderContributor", it adds an entry into the pages header. It's that simple!

So now after your browser goes through the request you now have the correct "ContextPath" inserted into your application:

[sourcecode language="html"]

<style type="text/css" media="screen">@import "/sampleapp/styles/site.css";</style>

[/sourcecode]

After I posted the article I noticed I had left out a few additional details on this topic. If you are
adding resources such as images on your page, Wicket provides you with a easy way to do this. There is a org.apache.wicket.markup.html.image.ContextImage class that you can use to create image html tags in your
page.

In your Java or Scala class you can do the following:
[sourcecode language="html"]

add(new ContextImage("logo", contextPath + "/i/logo.jpg"))

[/sourcecode]

and in your html (Wicket) page you can add a html-wicket element like this:
[sourcecode language="html"]

<img wicket:id="logo"/>

[/sourcecode]

Wicket matches the wicket:id "logo" with the element added in the code and displays the image with the correct context-path.







<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

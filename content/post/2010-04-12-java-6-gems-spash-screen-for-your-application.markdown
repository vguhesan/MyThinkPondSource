---
author: vguhesan
categories:
- Java
- Programming
comments: true
date: 2010-04-12T16:19:55Z
excerpt: 'Java 6 Gems: Spash Screen for your application'
link: http://mythinkpond.com/2010/04/12/java-6-gems-spash-screen-for-your-application/
slug: java-6-gems-spash-screen-for-your-application
title: 'Java 6 Gems: Spash Screen for your application'
url: /2010/04/12/java-6-gems-spash-screen-for-your-application/
wordpress_id: 109
---

In my coverage of all the new features that are part of Java SE 6, there is a new gem added that makes the user experience very clean and concise when you bring up a web-start or applet or desktop based Java application. Namely, the splash screen.

When you load up a native application, it's very traditional to display a "splash screen" with the company logo and branding of the particular product. In the past, you had to write your own loader class that did this. But now Java has added support for it. Class - [java.awt.SplashScreen](http://java.sun.com/javase/6/docs/api/java/awt/SplashScreen.html) does the job for you.


<blockquote>The splash screen is displayed as an   undecorated window containing an image. You can use GIF, JPEG, and PNG  files  for the image. Animation (for GIF) and transparency (for GIF, PNG) are  supported. The window is positioned at the center of the screen (the  position on multi-monitor systems is not specified - it is platform and    implementation dependent).  The window is closed automatically as soon as the first window is  displayed by  Swing/AWT</blockquote>


- excerpt from the Java SplashScreen API

There are two ways to invoke the splash screen:

[sourcecode language="jscript"]

java -splash:filename.png MyApplication

[/sourcecode]

or add it within your manifest.mf file like this

[sourcecode language="jscript"]

Manifest-Version: 1.0
Main-Class: Test
SplashScreen-Image: filename.png

[/sourcecode]

Now you have a common, concise way to display the splash screen. And if your application does anything like reloading classes or has a built in feature to restart certain parts of the application. You can even get the latest from a remote URL. Since it exposes, the following API [ setImageURL(URL imageURL) ], you can programatically invoke a URL like this on the server-side:

http://www.myapplication.com/getVersion.jsp?ver=1.2.3

And this can return a binary stream of "content-type: image/png". But on the back-end you can tally the number of folks using version 1.2.3, etc. 

Cheers.



<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

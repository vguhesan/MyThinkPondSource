---
author: vguhesan
categories:
- Scala
comments: true
date: 2009-11-04T17:20:52Z
excerpt: First Date with IntelliJ Community Edition and Scala
link: http://mythinkpond.com/2009/11/04/first-date-with-intellij-community-edition-and-scala/
slug: first-date-with-intellij-community-edition-and-scala
tags:
- intelliJ
title: First Date with IntelliJ Community Edition and Scala
url: /2009/11/04/first-date-with-intellij-community-edition-and-scala/
wordpress_id: 18
---

Downloaded the [Community Edition of IntelliJ](http://www.jetbrains.com/idea/nextversion/free_java_ide.html) a few days ago. Although most J2EE features are not available in the community edition, one of the features that did like was the [Scala Plugin](http://www.jetbrains.net/confluence/display/SCA/Scala+Plugin+for+IntelliJ+IDEA).

After I downloaded it and added the scala plug-in, I was very impressed with the tool. I have been using Eclipse (a little Netbeans) for most of my Java development and although I have tried the scala plugin that's available for Eclipse, I wasn't all that impressed. But the plug-in for IntelliJ was well worth the try.

So far it's been very positive experience. Attached below is a screen-shot of a sample Scala Wicket "Hello World". As you can see the syntax highlighting is awesome.

![sample scala code](http://mythinkpond.files.wordpress.com/2009/11/sample_scala_code1.jpg)

**Update from November 09, 2009 [Issues with the latest Scala Plugin]
**

A few folks have expressed concern that after their plug-in update (version: 0.3.108 from Nov 06, 2009) their Scala facelet failed to load. Well, I updated today and had the same issue. Rather than trying to fix the root cause, I felt that it's better for now to get IntelliJ working again. So here's what I did to fix my Scala Plugin issue.

Close intelliJ (if you haven't already done so) but make sure you have installed the broken scala plugin.

In windows, the plugins are located here:
C:\Documents and Settings\<usernamehere>\.IntelliJIdea90\config\plugins
I went to the location where I can download the earlier version of the Scala Plugin:
http://plugins.intellij.net/plugin/?id=1347
Downloaded the version: 0.3.75 manually and unzipped it's contents under above "...\plugins\Scala\lib\" folder. This replaces all the files under the lib directory with the earlier version.

Start intelliJ and you should be golden. This is a quick fix until the issues are resolved.


<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

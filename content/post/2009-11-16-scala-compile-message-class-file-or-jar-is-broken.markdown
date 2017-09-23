---
author: vguhesan
categories:
- Scala
comments: true
date: 2009-11-16T15:51:05Z
excerpt: Scala compile message - Class file or Jar is broken
link: http://mythinkpond.com/2009/11/16/scala-compile-message-class-file-or-jar-is-broken/
slug: scala-compile-message-class-file-or-jar-is-broken
title: Scala compile message - Class file or Jar is broken
url: /2009/11/16/scala-compile-message-class-file-or-jar-is-broken/
wordpress_id: 55
---

Sometimes when compiling my Scala code, the compiler output may need a little bit of help in sorting out what's the real issue.

For example, when I compiled today I received the following error:

[sourcecode language="jscript"]

[scalac] error: error while loading DefaultHttpClient, class file 'C:\A_OpenSource\WicketNotesApp\lib\httpclient-4.0.jar(org/apache/http/impl/client/DefaultHttpClient.class)' is broken
[scalac] (class net.jcip.annotations.ThreadSafe not found.)

[scalac] error: error while loading AbstractHttpClient, class file 'C:\A_OpenSource\WicketNotesApp\lib\httpclient-4.0.jar(org/apache/http/impl/client/AbstractHttpClient.class)' is broken
[scalac] (class net.jcip.annotations.ThreadSafe not found.)

[/sourcecode]

And my instinct tells me to focus on the jar file or the class file and in this case, "DefaultHttpClient.class" or "AbstractHttpClient.class" or "httpclient-4.0.jar". There's noting wrong with your jar file or the Java class. The actual problem is in the next line, namely "class net.jcip.annotations.ThreadSafe not found." It's a class-not-found error.

So if you encounter a "broken" error when compiling Scala - the following line after the broken message can help you find the real error. It can save you a whole lot of head-aches and chasing the wrong tail.



<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

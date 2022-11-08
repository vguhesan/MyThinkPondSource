---
author: vguhesan
categories:
- Java
- Programming
comments: true
date: 2010-03-31T21:39:30Z
excerpt: Speeding up your load time for your Java applets and webstart applications
link: http://mythinkpond.com/2010/03/31/speeding-up-your-load-time-for-your-java-applets-and-webstart-applications/
slug: speeding-up-your-load-time-for-your-java-applets-and-webstart-applications
title: Speeding up your load time for your Java applets and webstart applications
url: /2010/03/31/speeding-up-your-load-time-for-your-java-applets-and-webstart-applications/
wordpress_id: 95
---

Today we are going to look at a new feature available in Java 5 and above that can speed up your load time of your jar's within your applets and web start (provided you have a web server that's hosting the jar that's HTTP/1.1 compatible server).

Let's first take a look at what happens on the back-end:

In a typical applet (same applies to a web-start application), you have a src/source tag that points to a JAR file like this:

[sourcecode language="jscript"]

<applet CODE = "com.MyApplet.class" ARCHIVE = "/archive/MyAppletArchive.jar">
</applet>

[/sourcecode]

Here your browser requests a JAR containing the needed class files under "/archive/".  If the web server finds the JAR, it sends it back to the requesting code.

Well in Java 5 and above, they have a new compression scheme called "Pack200" - see (java.util.jar.Pack200) that allows you to send an alternative file that has it's content compressed further using Pack200 format. The file's can usually be reduced by 1/8th the original deflated jar file.

So when the browser requests the server for that JAR file, in the request header it will send all the formats that it can accept, namely -

Accept-Encoding=pack200-gzip, gzip

This tells the server that if you have a pack200-gzip then send that but in the case you do not, then send me the gzip-ed version of the JAR file.

So the next step in making this magic trick work is to modify the ARCHIVE tag to a servlet instead of a resource request. So now your ARCHIVE tag looks like this:

    
    
    
    
    ARCHIVE = "/archive/MyJARServlet.do?file=MyAppletArchive.jar"
    





And in your MyJARServlet, you can scan on the file-system first for a"MyAppletArchive.pack.jar.gz" file and send it and in the case that the request does not have a Accept_Encoding of "pack200-gzip" then your code can default to sending in the plain-old "gzip" JAR file.

To see a sample of how this work, see the following URL:
[http://java.sun.com/j2se/1.5.0/docs/guide/deployment/deployment-guide/pack200.html](http://java.sun.com/j2se/1.5.0/docs/guide/deployment/deployment-guide/pack200.html)

Now the next question one would ask is "How do I pack it using Pack200 format?"

Simple, within the JRE/bin or JDK/bin directory of Java 5 or later, you will find a utility called "pack200.exe" (windows). You can take an existing JAR file and pack it into that format by using the following command:

JRE/bin>pack200 myjarfile.jar

By using this strategy, you can decrease the time it takes to send that file. Smaller file = less time to send and less bandwidth that's used.  If you plan on implementing this, bear in mind that there is a little bit of overhead to unpacking a Pack200 or compressed-gzip file as opposed to a JAR-ed non-compressed file. So you decide which approach makes sense.

Cheers.



<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

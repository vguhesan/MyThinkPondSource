---
author: vguhesan
categories:
- Brix-cms
comments: true
date: 2010-03-09T20:02:55Z
excerpt: Brix-cms and Weblogic 10.3 - Content Length Error - Didn't meet stated Content-Length
link: http://mythinkpond.com/2010/03/09/brix-cms-and-weblogic-10-3-content-length-error-didnt-meet-stated-content-length/
slug: brix-cms-and-weblogic-10-3-content-length-error-didnt-meet-stated-content-length
tags:
- Weblogic
- Wicket
title: Brix-cms and Weblogic 10.3 - Content Length Error - Didn't meet stated Content-Length
url: /2010/03/09/brix-cms-and-weblogic-10-3-content-length-error-didnt-meet-stated-content-length/
wordpress_id: 86
---

When you deploy Brix-cms under Weblogic you will encounter the following issue or error:


<blockquote><Mar 4, 2010 11:56:35 AM EST> <Error> <HTTP> <BEA-101104> <Servlet execution in servlet context "weblogic.servlet.internal.WebAppServletContext@5470a0 - appName : 'brixdemo', name: 'BPortal.war', context-path: '/BPortal', spec-version: 'null'" failed, java.net.ProtocolException: Didn't meet stated Content-Length, wrote: '0' bytes instead of stated: '318' bytes..
java.net.ProtocolException: Didn't meet stated Content-Length, wrote: '0' bytes instead of stated: '318' bytes.
at weblogic.servlet.internal.ServletOutputStreamImpl.ensureContentLength(ServletOutputStreamImpl.java:422)
at weblogic.servlet.internal.ServletResponseImpl.ensureContentLength(ServletResponseImpl.java:1416)
at weblogic.servlet.internal.ServletResponseImpl.send(ServletResponseImpl.java:1459)
at weblogic.servlet.internal.ServletRequestImpl.run(ServletRequestImpl.java:1415)
at weblogic.work.ExecuteThread.execute(ExecuteThread.java:201)
Truncated. see log file for complete stacktrace
></blockquote>


Details of the error are documented [here](http://groups.google.com/group/brix-cms-discuss/browse_thread/thread/e5c20a2f03f07dd7?hl=en).

>>>>>>>>>>>>>>>>>

We are trying to evaluate using Brix and in the demo when deployed under Weblogic, we're seeing an issue. But  we have been unsuccessful in isolating the problem to one area, namely if it's Brix or Wicket or Weblogic.

Issue: When we deploy the demo (latest from SVN from Mar. 4th, 2010), under Weblogic - and upon the first request everything works fine. But when we hit refresh (F5) on the  index.html page, we see the following errors in the Weblogic console:

==========
<Mar 4, 2010 11:56:35 AM EST> <Error> <HTTP> <BEA-101104> <Servlet execution in servlet context "weblogic.servlet.internal.WebAppServletContext@5470a0 - appName :
'brixdemo', name: 'brixdemo.war', context-path: '/brixdemo', spec-version: 'null'" failed, java.net.ProtocolException:
Didn't meet stated Content-Length, wrote: '0' bytes instead of stated:
'318' bytes.. java.net.ProtocolException: Didn't meet stated Content-Length, wrote: '0' bytes instead of stated: '318' bytes.
at weblogic.servlet.internal.ServletOutputStreamImpl.ensureContentLength(ServletOutputStreamImpl.java: 422)
at weblogic.servlet.internal.ServletResponseImpl.ensureContentLength(ServletResponseImpl.java: 1416)
at weblogic.servlet.internal.ServletResponseImpl.send(ServletResponseImpl.java: 1459)
at weblogic.servlet.internal.ServletRequestImpl.run(ServletRequestImpl.java: 1415)
at weblogic.work.ExecuteThread.execute(ExecuteThread.java:201)
Truncated. see log file for complete stacktrace

==========

The same code deployed against Tomcat works fine. And in researching the issue, it seems that in Weblogic when the Servlet does not set the "Content-Length" appropriately, it throws the above error.

Since I'm not all that familiar with the code, I'm not sure if it's an issue to be addressed in Wicket or in Brix.

The problem only happens when we refresh the page and in sniffing the HTML headers the following differences were noted between the first request and any consecutive requests where it fails:
[REQUEST HEADERS]
In IE7:
Pragma: no-cache

In FireFox:
Cache-Control: max-age=0

When I (using webscrab) intercept and remove the above mentioned headers from my request stream, the page shows up fine.

Some of the results from Google search also pointed out that this may be as a result of trying to fetch a cached content that's GZIPed.

Has anyone out there deployed Brix in Weblogic or has anyone encountered a similar issue in Weblogic???

The same code (WAR file) works fine in Tomcat but not in Weblogic.

Also I believe it's unique to Weblogic+Wicket+Brix because of the nature of Brix serving the resources as opposed to the web container serving the content.

Any help is greatly appreciated?

>>>>>>>>>>>>>

One additional observation we made is this (and this may shed some light on the problem):

Within Brix the "home page" refers to a page named "index.html". Which has the following dependencies:

index.html
+
|___ css/style1.css
|___ ../images/bg1.jpg
|___ ../images/header.png
|___ ../images/main-menu-bg.png

and others.

When we created a new page in the Brix content repository under the name "index.do" with no templates attached (the additional dependencies with the .css and .jpg and .png are no longer there) and fetched it via this: [http://localhost/brixdemo/index.do](http://www.google.com/url?sa=D&q=http://localhost/brixdemo/index.do&usg=AFQjCNG5R31JDBynVnn_4U8JUjHENeBfYw)

The page worked fine and when we did a F5 to refresh, there were NO ERRORS.

Next we applied template "/includes/template-with-right-menu.html" to that same page and loaded up the page. And this time each of the request for resources such as the style1.css and .jpg's and .png's threw the same error upon refresh.

So based on this behavior, Weblogic must somehow treat a consecutive request for the same content differently. And some where in where it treats each mime-type, it must treat the "*.do"s differently compared to a ".css" or a ".html".

Does anyone have any suggestions on how to deal with this issue???

>>>>>>>>>>>>>>>>>>>>>>

Here's more of my findings:

When deployed under Weblogic after a restart when I request this:

Request-1: [http://localhost/brixdemo/images/header.png](http://www.google.com/url?sa=D&q=http://hv-vguhesan/brixdemo/images/header.png&usg=AFQjCNEQtuS9nYdNDHpVzWK8ZBiEQLBmGw) > works fine and I get the image
Request-2: [http://localhost/brixdemo/images/header.png](http://www.google.com/url?sa=D&q=http://hv-vguhesan/brixdemo/images/header.png&usg=AFQjCNEQtuS9nYdNDHpVzWK8ZBiEQLBmGw) > (Refresh) Throws the error defined in my main email and I get zero bytes back.
Request-3: [http://localhost/BPortal/images/header.png?foo=bar](http://www.google.com/url?sa=D&q=http://hv-vguhesan/BPortal/images/header.png%3Ffoo%3Dbar&usg=AFQjCNEWnB-D6tKZJldE3U2p4fSbk1NMPQ) > notice the additional parameters I'm passing in - works once again
Request-4: [http://localhost/BPortal/images/header.png?foo=bar](http://www.google.com/url?sa=D&q=http://hv-vguhesan/BPortal/images/header.png%3Ffoo%3Dbar&usg=AFQjCNEWnB-D6tKZJldE3U2p4fSbk1NMPQ) > (refresh) - once again, I get the error on Weblogic and zero bytes sent back.
Request-5: [http://localhost/BPortal/images/header.png?foo=bar2](http://www.google.com/url?sa=D&q=http://hv-vguhesan/BPortal/images/header.png%3Ffoo%3Dbar2&usg=AFQjCNF2VHsVjXSZYm9Fr-esG8BcGt7QgA) > once again works.

So it seems that something different happens when deployed in Weblogic and a request for cached content is requested.

Any help you can offer is greatly appreciated.

>>>>>>>>>>>>>>>>>>>

And when you search in Google for "Weblogic Didn't meet stated Content-Length", you will find tons of others who have encountered a similar issue.

http://osdir.com/ml/users-wicket.apache.org/2009-03/msg00560.html

Well here's a fix that can help you get by without addressing the issue with Oracle Weblogic.


### **Fix:**


Modify the following file: <BRIX_HOME>\brix-core\src\main\java\brix\plugin\site\resource\ResourceRequestTarget.java

Commented out the line that says the following:
//Line. 98
response.setContentLength(node.getContentLength());
// below the following line and recompile and deploy code
// if (d.after(lastModified) || d.toString().equals(lastModified.toString()))

And that should take care of this issue.

Cheers.

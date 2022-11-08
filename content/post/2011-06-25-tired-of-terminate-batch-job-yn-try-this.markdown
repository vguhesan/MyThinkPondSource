---
author: vguhesan
categories:
- General
- Scripting
comments: true
date: 2011-06-25T03:56:13Z
link: http://mythinkpond.com/2011/06/24/tired-of-terminate-batch-job-yn-try-this/
slug: tired-of-terminate-batch-job-yn-try-this
tags:
- Batch execution
- DOS
- Scripting Tip
- Terminate batch job (Y/N)?
title: Tired of "Terminate batch job (Y/N)?", try this
url: /2011/06/25/tired-of-terminate-batch-job-yn-try-this/
wordpress_id: 231
---

When you invoke a batch file or most applications in a command-prompt and when you wish to close the application by doing a CTRL+C, you get the annoying "Terminate batch job (Y/N)?" prompt. And in most cases, even if you type a "n", it still kills the application. Example is the Tomcat startup. To avoid this, try this:

[sourcecode language="jscript"]

YourScript.cmd < Nul

[/sourcecode]

This should no longer ask you with the annoying prompt "Terminate batch job (Y/N)?". 

Now for a few examples from my everyday usage:

[sourcecode language="jscript"]

grails run-app < Nul
h2.bat < Nul
startup.bat < Nul
mvn tomcat:run < Nul
mvn jetty:run < Nul

[/sourcecode]



Cheers.

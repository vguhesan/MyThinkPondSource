---
author: vguhesan
categories:
- GreaseMonkey
- JackRabbit
comments: true
date: 2010-04-21T13:09:27Z
link: http://mythinkpond.com/2010/04/21/greasemonkey-to-the-rescue-fixing-apache-jackrabbit-site/
slug: greasemonkey-to-the-rescue-fixing-apache-jackrabbit-site
tags:
- Apache Jackrabbit
- Java
- SyntaxHighlighter
title: GreaseMonkey to the rescue - fixing Apache Jackrabbit Site
url: /2010/04/21/greasemonkey-to-the-rescue-fixing-apache-jackrabbit-site/
wordpress_id: 114
---

Starting yesterday the [Apache JackRabbit JCR](http://jackrabbit.apache.org/) website had an interesting problem. Someone must have made a change to the base template such that they had removed the [SyntaxHighlighter](http://alexgorbatchev.com/wiki/SyntaxHighlighter) code that needs to be appended to the header. I've opened an issue in their jira issue tracker.

>>>>>>>> Contents of JIRA Issue >>>>>>>>
It started happening today. When I visit the website, for example:
http://jackrabbit.apache.org/node-type-notation.html

All the artifacts that contain a "SCRIPT" of type syntaxhighlighter does not get displayed.

So basically all examples on the site fails to show up.

Example:
Upon view-source, you will find artifacts like this:

<pre><code class="language-html line-numbers">
<script class="toolbar: false; theme: default; brush: java; gutter: false" type="syntaxhighlighter">// <![CDATA[
 public class FirstHop { // Some Code... }
// ]]></script>
</code></pre>

None of the artifacts that are using "syntaxhighlighter" gets displayed. Which leaves the site almost useless when it comes to documentation.

Problem must have started today (April 19, 2010) since I was able to see them last night.
>>>>>>>> Contents of JIRA Issue  >>>>>>>>

But while I wait for a fix the site is pretty much unusable. Let me show you an example,


[![](http://mythinkpond.files.wordpress.com/2010/04/jackrabbit-issue.jpg)](http://mythinkpond.files.wordpress.com/2010/04/jackrabbit-issue.jpg)


So essentially you have a website that has no examples, no configuration details, etc. While I wait for a fix (which can happen any day), I thought this is a good opportunity to whip out a Greasemonkey Script to fix the issue. So this article focuses on creating a GreaseMonkey script that addresses this issue in my browser while the site is broken.

Let's first look at the problem:

Apache Jackrabbit site needs to include the following in their header tag:

<pre><code class="language-html line-numbers">

<link href='http://alexgorbatchev.com/pub/sh/current/styles/shCore.css' rel='stylesheet' type='text/css'/>
<link href='http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css' rel='stylesheet' type='text/css'/>
<script src='http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js' type='text/javascript'></script>
<script src='http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJava.js' type='text/javascript'></script>
<script src='http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js' type='text/javascript'></script>
<script language='javascript'>
SyntaxHighlighter.config.bloggerMode = true;
SyntaxHighlighter.config.clipboardSwf = 'http://alexgorbatchev.com/pub/sh/current/scripts/clipboard.swf';
SyntaxHighlighter.all();
</script>
</code></pre>

Using GreaseMonkey, you can insert any script at any point in the document or site (from the browsers perspective). So here's the script that does that:

<pre><code class="language-javascript line-numbers">

// ==UserScript==
// @name           Apache JackRabbit Script
// @namespace      jackrabbit.apache.org
// @description    fixes the SyntaxHighlighter
// @include        http://jackrabbit.apache.org/*
// ==/UserScript==

function addHeaderForSyntaxHighlighter(){

	var addStyle1 = document.createElement('style');
	addStyle1.type = 'text/css';
	addStyle1.link = 'http://alexgorbatchev.com/pub/sh/current/styles/shCore.css';

	var addStyle2 = document.createElement('style');
	addStyle2.type = 'text/css';
	addStyle2.link = 'http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css';

	var addScript1 = document.createElement('script');
	addScript1.type = 'text/javascript';
	addScript1.src = 'http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js';

	var addScript2 = document.createElement('script');
	addScript2.type = 'text/javascript';
	addScript2.src = 'http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJava.js';

	var addScript3 = document.createElement('script');
	addScript3.type = 'text/javascript';
	addScript3.src = 'http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js';

	var addBaseScript = document.createElement('script');
	addBaseScript.type = 'text/javascript';
	addBaseScript.src = 'http://www.avedatech.com/js/fixForJackRabbitSyntaxHighlighter.js';

	var headID = document.getElementsByTagName("head")[0];
	headID.appendChild(addStyle1);
	headID.appendChild(addStyle2);
	headID.appendChild(addScript1);
	headID.appendChild(addScript2);
	headID.appendChild(addScript3);
	headID.appendChild(addBaseScript);

}

addHeaderForSyntaxHighlighter();

</code></pre>

The above greesemonkey script adds the styles and necessary javascript to the page so that all the artifacts that use the SyntaxHighlighter are displayed. I'm attaching the file here for anyone who wants to use it in their greesemonkey script in FireFox.

[Greesemonkey JackRabbit Site Fix Script](http://www.avedatech.com/js/apache_jackrabbit_script.user.js)

If you have GreeseMonkey installed in your FireFox browser, you can then click on the above link and GreeseMonkey will prompt you to approve the installation of the script. So you don't need to do anything fancy. And you can uninstall it at anytime.


<blockquote>

> 
> ### PS: If you are someone (or if you know of someone) who manages the Apache JackRabbit website, please fix the SyntaxHighlighter issue. We need the documentation! Thank You.
> 
> 
</blockquote>


Cheers.

>>>>>>>>>>>>>>>

UPDATE from Sébastien Launay on Thurs., April 22, 2010 - Thank you for the information. Helps to know that someone out there is aware of the issue.


Hi Venkatt,

Thanks for reporting this issue.

The bug appears to be global to Apache projects websites and related
to the confluence auto-export feature:
[https://issues.apache.org/jira/browse/INFRA-2638](https://issues.apache.org/jira/browse/INFRA-2638)

--
Sébastien Launay

>>>>>>>>>>>>>>>>>>>>>

Update - on Friday, April 23rd, 2010 - this bug has been resolved and verified. So no need for the patch with Grease Monkey.




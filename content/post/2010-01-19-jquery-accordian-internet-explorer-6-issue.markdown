---
author: vguhesan
categories:
- Javascript
- JQuery
comments: true
date: 2010-01-19T15:22:01Z
link: http://mythinkpond.com/2010/01/19/jquery-accordian-internet-explorer-6-issue/
slug: jquery-accordian-internet-explorer-6-issue
title: jQuery Accordian Internet Explorer 6 Issue
url: /2010/01/19/jquery-accordian-internet-explorer-6-issue/
wordpress_id: 66
---

If you are using the Accordian UI from jQuery and your accordion body (the content in div.ui-accordion-content tag) contains anchor tags then you might experience a few glitches in IE6 where the display might not render properly when selected.

One way to address this issue is the following:
Add this to the header...

[sourcecode language="jscript"]

<style>
.ui-accordion-content{ zoom: 1; }
</style>

[/sourcecode]

This will force a refresh of the content when expanded.

The other thing that you may not have is a doctype defined in the header.

Here's an example of a DOCTYPE defined:

[sourcecode language="jscript"]

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
...

[/sourcecode]

[Recommended list](http://www.w3.org/QA/2002/04/valid-dtd-list.html) of DOCTYPES available.


<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

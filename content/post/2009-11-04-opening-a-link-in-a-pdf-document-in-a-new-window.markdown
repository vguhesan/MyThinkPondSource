---
author: vguhesan
categories:
- General
comments: true
date: 2009-11-04T16:33:38Z
excerpt: Opening a link in a PDF document in a new window
link: http://mythinkpond.com/2009/11/04/opening-a-link-in-a-pdf-document-in-a-new-window/
slug: opening-a-link-in-a-pdf-document-in-a-new-window
tags:
- Acrobat
- link
- open links in windows
- PDF
title: Opening a link in a PDF document in a new window
url: /2009/11/04/opening-a-link-in-a-pdf-document-in-a-new-window/
wordpress_id: 7
---

![Adobe Acrobat](http://mythinkpond.files.wordpress.com/2009/11/adobe_acrobat1.gif)

**Open Link In PDF In New Window**

Sometimes you like to link out to other URL's or other PDF's from within a PDF document. And you will notice that this replaces the existing HTML frame (if you had served the original PDF from a website) or window with the new document making it hard to navigate. In these cases, you would prefer to open the link in the PDF onto it's own new window.

Well here how you do it...

So within Acrobat Professional (not Acrobat Reader), you will have options to add a URL or link. Instead, you can add a "Javascript" code as the action item on a link. And enter the following as the code that you use:
[sourcecode language="jscript"]

app.launchURL("https://mythinkpond.wordpress.com/", true);

[/sourcecode]
where the a "true" in the second attribute tells Acrobat reader to open the link in a new window and a "false" will open it up in the existing window.

To learn more about the Javascript API supported in the Acrobat Reader try this link:
[http://www.adobe.com/devnet/acrobat/pdfs/js_api_reference.pdf](http://www.adobe.com/devnet/acrobat/pdfs/js_api_reference.pdf)

Or this link: [Acrobat Developer Center](http://www.adobe.com/devnet/acrobat/javascript.html)

Happy Coding!

---
author: vguhesan
categories:
- Javascript
- JQuery
comments: true
date: 2011-10-31T23:52:28Z
link: http://mythinkpond.com/2011/10/31/copy-to-clipboard-a-browser-agnostic-way-to-script-this-functionality/
slug: copy-to-clipboard-a-browser-agnostic-way-to-script-this-functionality
tags:
- clipboard
- copy
- copy to clipboard
- zClip
- zeroClipboard
title: Copy to Clipboard - a browser agnostic way to script this functionality
url: /2011/10/31/copy-to-clipboard-a-browser-agnostic-way-to-script-this-functionality/
wordpress_id: 263
---

Have you tried to present some code or sample content for the end-user that you wanted to allow them to easily copy to their clip-board?

If you use the JQuery Javascript library then you can use the plugin called zClip available here - [zClip](http://www.steamdev.com/zclip/)

Using zclip you can attach an event to a button or a text-area such that when the event occurs, the content is copied to the clipboard.

Well, if you are not using JQuery as the swiss-army knife for your Javascript toolkit, then here is an alternative that can come in handy:

It's called "[ZeroClipboard](http://code.google.com/p/zeroclipboard/)" and it's available from code.google.com

Both tools do the following, they replace or overlay a flash plugin on top which then passes the needed content to the native clipboard. Both solutions do not have a graceful way to do copy to clipboard especially if you do not have flash enabled or installed for your platform - browser.

As the browser matures, maybe this functionality might be allowed natively from a Javascript code but until then, the ZeroClipboard and zClip are the best ways to implement a "copy-to-clipboard".



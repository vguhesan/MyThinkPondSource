---
author: vguhesan
categories:
- WebSockets
comments: true
date: 2012-11-13T19:26:39Z
link: http://mythinkpond.com/2012/11/13/cross-browser-testing-for-websockets/
slug: cross-browser-testing-for-websockets
tags:
- browser support
- Firefox
- mozilla
- websockets
title: Cross-Browser Testing for WebSockets
url: /2012/11/13/cross-browser-testing-for-websockets/
wordpress_id: 435
---

The traditional way to test for websockets is this:

[sourcecode]
function WebSocketTest()
{
  if ("WebSocket" in window)
  {
     alert("Browser supports websocket");
  }
  else
  {
     alert("Browser does not support websocket");
  }
}
...
[Run WebSocket test](WebSocketTest()")
[/sourcecode]

Although the above example will be technically correct for modern browsers it is important to consider some of the "experimental" implementation of this feature in earlier FireFox (Mozilla) browsers.

In FireFox (Mozilla), experimental features (until they graduate) gets added with a prefix of "Moz". This has been done for quite some time. So either a feature graduates from the Mozilla academy (which means that they no longer have the prefix of "Moz") or they may get removed in future releases. This has been the case for WebSockets.

So how do we test for both WebSockets and MozWebSocket? Here's how:

[sourcecode]

var wssupport = "MozWebSocket" in window ? 'MozWebSocket' : ("WebSocket" in window ? 'WebSocket' : null);

function WebSocketTest()
{
  if (support == null)
  {
     alert("Browser supports websocket");
  }
  else
  {
     alert("Browser does not support websocket");
  }
}

//To create a websocket using this strategy use the following:
var ws = new window[wssupport]("wss://your-domain/path");
//Use "wss://" for secure-sockets or use "ws://" for plain-sockets w/o encryption.
...
[Run WebSocket test](WebSocketTest()")
[/sourcecode]

The variable "wssupport" contains an elaborate nested-if-else statement. It first checks for "MozWebSocket", if found, then returns  "MozWebSocket" as a string. Else it tests for "WebSocket", if found returns "WebSocket" as a string else returns "null".

Here is a useful URL for determining Browser Support for Web Sockets:[
https://developer.mozilla.org/en-US/docs/WebSockets#Browser_compatibility](https://developer.mozilla.org/en-US/docs/WebSockets#Browser_compatibility)

If you have found this article useful, consider subscribing to my posts and/or share them.

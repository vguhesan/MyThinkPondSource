---
author: vguhesan
categories:
- Node JS
- VertX
comments: true
date: 2012-11-15T18:12:15Z
link: http://mythinkpond.com/2012/11/15/getting-started-with-vertx-vert-io-an-alternative-to-node-js-2/
slug: getting-started-with-vertx-vert-io-an-alternative-to-node-js-2
tags:
- Node.js
- Vert.io
- Vertx.io
title: Getting started with vertx (vert.io) - an alternative to node.js
url: /2012/11/15/getting-started-with-vertx-vert-io-an-alternative-to-node-js-2/
wordpress_id: 458
---

Lately there has been a lot of synergy and publicity around node.js (especially if you want to utilize the robust features of a JavaScript language on the server-side). If you are not familiar with this, I would suggest you look at the following link:

[Node.js](http://nodejs.org/) - Event-driven I/O server-side _JavaScript_ environment based on V8.

If you are a Java developer and as you try out the examples, you will notice how this will be a great addition into your infrastructure. But then as you delve deeper, you may notice some of the short comings such as having to support another full stack of package manager (Node uses [NPM](https://npmjs.org/) as it's package manager) and it has it's own deployment, unit testing, etc. to support. And then the thought might occur that - what-if I had the same infrastructure available natively in the Java stack??? Would that not solve a lot of the logistical challenges? If your answer is "yes", then you should look at this library...

[VertX](http://vertx.io/) from [vert.io](http://vertx.io/) - Effortless asynchronous application development for the modern web and enterprise

The VertX solution is built upon (and requires) a JDK/JRE under the skin. But then because Java support other languages under it's skin, you can leverage the benefits of languages such as - JavaScript, CoffeeScript, Ruby, Python, Groovy or Java.

According to the VertX website - it says and I quote "Write your application components in **JavaScript**, **CoffeeScript**, **Ruby**, **Python**, **Groovy** or **Java**. Or mix and match several programming languages in a single app."

Here's their "Hello-World":

[sourcecode language="JavaScript"]
load('vertx.js')

vertx.createHttpServer().requestHandler(function(req) {
    var file = req.path === '/' ? 'index.html' : req.path;
    req.response.sendFile('webroot/' + file);
}).listen(8080)
[/sourcecode]

As always, you need to evaluate this option to see if this solution fits in your infrastructure and it's pros and cons.

If you find this article useful, share this with others and/or subscribe to this blog.

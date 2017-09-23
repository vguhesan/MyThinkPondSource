---
author: vguhesan
categories:
- ES6
- Javascript
comments: true
date: 2017-05-03T19:23:37Z
link: http://mythinkpond.com/2017/05/03/javascript-embrace-arrow-functions/
slug: javascript-embrace-arrow-functions
tags:
- arrow functions
- currying
- JS
title: 'Javascript: Embrace Arrow Functions'
url: /2017/05/03/javascript-embrace-arrow-functions/
wordpress_id: 1481
---

[![](/img/2017/05/es6icon1.png)](/img/2017/03/es6icon1.png)Great article on JavaScript currying and arrow functions.

Here is an example of a function in Javascript:
<pre><code language="javascript">
const secret = function (msg) {
    return function () {
        return msg;
    };
};
</code></pre>

The same function as currying or arrow function:
<pre><code language="javascript">
const secret = msg =&gt; () =&gt; msg;
</code></pre>

To learn more about the basics, visit the link below.
Source: [Familiarity Bias is Holding You Back: It’s Time to Embrace Arrow Functions](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

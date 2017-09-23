---
author: vguhesan
categories:
- Mac OS X
comments: true
date: 2016-11-17T19:15:50Z
link: http://mythinkpond.com/2016/11/17/mac-os-x-idrac7-filenotfoundexception-javadeploymentsecuritytrusted-certs/
slug: mac-os-x-idrac7-filenotfoundexception-javadeploymentsecuritytrusted-certs
tags:
- FileNotFoundException
- iDRAC7
- Mac
- OS X
- trusted.certs
title: Mac OS X iDRAC7 FileNotFoundException .java/deployment/security/trusted.certs
url: /2016/11/17/mac-os-x-idrac7-filenotfoundexception-javadeploymentsecuritytrusted-certs/
wordpress_id: 1230
---

[![macosx_blogarticle_100px](/img/2016/11/macosx_blogarticle_100px.png)](/img/2016/11/macosx_blogarticle_100px.png)When you connect with a Dell iDRAC virtual console you may encounter the following exception on a Mac OS X

FileNotFoundException ~/.java/deployment/security/trusted.certs

Here is a simple fix for this:





<pre><code>
mkdir -p ~/.java/deployment/security
cp ~/Library/Application\ Support/Oracle/Java/Deployment/security/trusted.certs ~/.java/deployment/security/
</code></pre>

Cheers.

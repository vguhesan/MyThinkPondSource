+++
title = "firebase-tools install throws 'root does not have permission' error repeatedly"
description = "During installtion of firebase-tools, you see a repeated output about 'root does not have permission' error. This is one way to fix that issue."
date = "2017-11-24T15:50:58-05:00"
categories = [
	"firebase",
	"firebase-tools",
	"npm",
	"installation"
]
tags = [
	"firebase",
	"firebase-tools",
	"npm",
	"installation"
]
thumbnail = "/img/logo/firebase.png"
+++

During installtion of firebase-tools, you see a repeated output about 'root does not have permission' error. This is one way to fix that issue.


<pre><code class="language-bash line-numbers">sudo npm install -g firebase-tools
</code></pre>


*Error/Warning*

<pre><code class="language-bash line-numbers">gyp WARN EACCES user "root" does not have permission to access the dev dir "/usr/local/lib/node_modules/firebase-tools/node_modules/grpc/.node-gyp/8.9.1"
gyp WARN EACCES attempting to reinstall using temporary dev dir "/usr/local/lib/node_modules/firebase-tools/node_modules/grpc/.node-gyp"
</code></pre>

Here is what I did to avoid this:

<pre><code class="language-bash line-numbers">sudo mkdir -p /usr/local/lib/node_modules/firebase-tools/node_modules/grpc/.node-gyp/8.9.1/
</code></pre>

This creates an empty directory with the path specified then rerun the following:
<pre><code class="language-bash line-numbers">$ sudo npm install -g firebase-tools
Password: ###YOUR_PASSWORD_HERE###
/usr/local/bin/firebase -> /usr/local/lib/node_modules/firebase-tools/bin/firebase
+ firebase-tools@3.15.3
updated 1 package in 11.755s
</code></pre>

I hope this helps. 

Cheers.

<blockquote>If you find this article useful, consider signing up for my email or repost this on your favorite social site. See links on the right navigation.</blockquote>

**Now for Today's Inspiration** 

<blockquote>No work is stressful. It is your inability to manage your body, mind, and emotions that makes it stressful.</blockquote>

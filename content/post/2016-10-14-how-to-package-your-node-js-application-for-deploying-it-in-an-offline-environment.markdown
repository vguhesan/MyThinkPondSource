---
author: vguhesan
categories:
- Javascript
- Node JS
comments: true
date: 2016-10-14T18:42:15Z
link: http://mythinkpond.com/2016/10/14/how-to-package-your-node-js-application-for-deploying-it-in-an-offline-environment/
slug: how-to-package-your-node-js-application-for-deploying-it-in-an-offline-environment
tags:
- Node.js
- offline
- pack dependencies
title: How to package your node.js application for deploying it in an offline environment?
url: /2016/10/14/how-to-package-your-node-js-application-for-deploying-it-in-an-offline-environment/
wordpress_id: 1126
---

[![node2](/img/2016/10/node2.png)](/img/2016/10/node2.png)Personally speaking, I prefer to have a self-contained bundle with all the artifacts and modules that might be required to deploy an application (not just Node.js application) in Production. In that way, I know exactly the bits that were installed and nothing more and nothing less. It also eliminates the availability of the NPM modules and network connectivity issues, etc. The following procedure shows you how to create a simple "Hello World" Node.js application with one dependency - Express.js (which has dependency on other modules) and to bundle (pack) it and deploy it to an environment that may not have an internet connection.

**Brief Summary:**
"bundledDependencies": ["package-name1"] in the package.js does the trick in combination with "npm pack" and "npm install <Project>.tar.gz

Below is the **step-by-step walk-thru.**

So let's get started:
**In Development Computer:**

Make sure you have Node.js installed and you can verify the installation by running:

<pre><code language="bash">
$node -v
v6.8.0
</code></pre>

Now let's get started on a simple "Hello World" - Node.js project:

Follow the steps outlined [here](http://expressjs.com/en/starter/installing.html) for setting up a simple Hello World using Node.js and Express. In my case, running "npm install express --save" created additional module dependencies on the following:

<pre><code language="bash">
$npm install express --save
guhelloproject
└─┬ express@4.14.0
├─┬ accepts@1.3.3
│ ├─┬ mime-types@2.1.12
│ │ └── mime-db@1.24.0
│ └── negotiator@0.6.1
├── array-flatten@1.1.1
├── content-disposition@0.5.1
├── content-type@1.0.2
├── cookie@0.3.1
├── cookie-signature@1.0.6
├─┬ debug@2.2.0
│ └── ms@0.7.1
├── depd@1.1.0
├── encodeurl@1.0.1
├── escape-html@1.0.3
├── etag@1.7.0
├─┬ finalhandler@0.5.0
│ ├── statuses@1.3.0
│ └── unpipe@1.0.0
├── fresh@0.3.0
├── merge-descriptors@1.0.1
├── methods@1.1.2
├─┬ on-finished@2.3.0
│ └── ee-first@1.1.1
├── parseurl@1.3.1
├── path-to-regexp@0.1.7
├─┬ proxy-addr@1.1.2
│ ├── forwarded@0.1.0
│ └── ipaddr.js@1.1.1
├── qs@6.2.0
├── range-parser@1.2.0
├─┬ send@0.14.1
│ ├── destroy@1.0.4
│ ├─┬ http-errors@1.5.0
│ │ ├── inherits@2.0.1
│ │ └── setprototypeof@1.0.1
│ └── mime@1.3.4
├── serve-static@1.11.1
├─┬ type-is@1.6.13
│ └── media-typer@0.3.0
├── utils-merge@1.0.0
└── vary@1.1.0
</code></pre>

Now edit, package.js and add define the [bundleDependencies](http://npm.github.io/using-pkgs-docs/package-json/types/bundleddependencies.html) section like so:

<pre><code language="bash">
{
  "name": "guhelloproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0"
  },
  "bundledDependencies": ["express"]
}
</code></pre>

Let's create index.js

<pre><code language="javascript">
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
</code></pre>

Test the code locally in development to ensure that it works.

<pre><code language="javascript">
$node index.js
Example app listening on port 3000!
# You should see "Hello World", if you point your browser to http://localhost:3000/
</code></pre>

Now for the bundling magic.

<pre><code language="javascript">
$npm pack
guhelloproject-1.0.0.tgz
</code></pre>

**In your Production server (which has no internet connection):**



 	
  1. Make sure you install Node.js so that the Node executable is available. Verify once again by running "node -v" (as shown above)

 	
  2. Move the "guhelloproject-1.0.0.tgz" file to the Production server.



<pre><code language="bash">
$npm install guhelloproject-1.0.0.tgz
# This unzips the bundle into a 'node_modules' directory 
$cd cd node_modules/guhelloproject/
$node index.js
Example app listening on port 3000!
</code></pre>

Point your browser to http://:3000/ and you should see "hello world".

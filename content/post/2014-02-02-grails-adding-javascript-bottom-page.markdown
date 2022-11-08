---
author: vguhesan
categories:
- Grails
- Groovy
- Java
comments: true
date: 2014-02-02T17:10:04Z
link: http://mythinkpond.com/2014/02/02/grails-adding-javascript-bottom-page/
slug: grails-adding-javascript-bottom-page
tags:
- Javascript
- layoutBody
- Template
title: Grails - Adding JavaScript to bottom of page
url: /2014/02/02/grails-adding-javascript-bottom-page/
wordpress_id: 670
---

In Grails using the templating (Sitemesh) if you were to include per-page JavaScript resources then it shows up much earlier in the layout content as part of the <g:layoutBody>

Here is an example illustrating the problem:

SamplePage.gsp
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<meta name="layout" content="layoutPage"/>
<head>MyThinkPond.com Custom Page</head>
...
</head>
<body>
Some this page content
<script type="text/javascript" src="${request.contextPath}js/samplePage.js"></script>
</body>
</html>

[/sourcecode]

and the layout page (layoutPage.gsp)
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<title><g:layoutTitle default="MyThinkPond.com"/></title>
...
</head>
<body>
<div>
Some template (header) content
<g:layoutBody/>
</div>
<!-- Common JS Files -->
<script type="text/javascript" src="${request.contextPath}js/common.js"></script>
<!-- Begin: Custom Page JavaScript Should Go Here -->
<!-- End: Custom Page JavaScript Should Go Here -->
</body>
</html>

[/sourcecode]

results in the following page in browser
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<titleMyThinkPond.com Custom Page</title>
...
</head>
<body>

<div>
Some template (header) content
Some this page content
<script type="text/javascript" src="${request.contextPath}js/samplePage.js"></script>
</div>

<!-- Common JS Files -->
<script type="text/javascript" src="${request.contextPath}js/common.js"></script>
<!-- Begin: Custom Page JavaScript Should Go Here -->
<!-- End: Custom Page JavaScript Should Go Here -->
</body>
</html>
[/sourcecode]

You can see that the JavaScript is included as part of the body and not at the bottom.

Here's how you resolve this issue:

In your custom page, define a content block like this:

SamplePage.gsp
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<meta name="layout" content="layoutPage"/>
<head>MyThinkPond.com Custom Page</head>
...
</head>
<body>
Some this page content
<content tag="javascript">
<script type="text/javascript" src="${request.contextPath}js/samplePage.js"></script>
</content>
</body>
</html>
[/sourcecode]

In your template layout page add the content block to the bottom as needed like this:
layoutPage.gsp
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<title><g:layoutTitle default="MyThinkPond.com"/></title>
...
</head>
<body>
<div>
Some template (header) content
<g:layoutBody/>
</div>
<!-- Common JS Files -->
<script type="text/javascript" src="${request.contextPath}js/common.js"></script>
<!-- Begin: Custom Page JavaScript Should Go Here -->
<g:pageProperty name="page.javascript"/>
<!-- End: Custom Page JavaScript Should Go Here -->
</body>
</html>

[/sourcecode]

This will extract the JavaScript portion from samplePage and insert at the bottom of the layoutPage. 

Here is the result of this magic in a page in the browser:
[sourcecode language="html"]
<!DOCTYPE html>
<html>
<head>
<titleMyThinkPond.com Custom Page</title>
...
</head>
<body>

<div>
Some template (header) content
Some this page content
</div>

<!-- Common JS Files -->
<script type="text/javascript" src="${request.contextPath}js/common.js"></script>
<!-- Begin: Custom Page JavaScript Should Go Here -->
<script type="text/javascript" src="${request.contextPath}js/samplePage.js"></script>
<!-- End: Custom Page JavaScript Should Go Here -->
</body>
</html>
[/sourcecode]

You can see that the page specific JavaScript content got added towards the bottom as you intended it to be.

If this article has helped you, please add this article to your favorite social links so that others may also find this article.

Cheers & Happy Coding!




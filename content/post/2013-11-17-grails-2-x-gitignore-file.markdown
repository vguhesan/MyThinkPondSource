---
author: vguhesan
categories:
- Grails
- Groovy
- Java
- SourceControl - GIT
comments: true
date: 2013-11-17T02:16:15Z
link: http://mythinkpond.com/2013/11/16/grails-2-x-gitignore-file/
slug: grails-2-x-gitignore-file
tags:
- .gitignore
- GIT
title: Grails 2.X .gitignore file
url: /2013/11/17/grails-2-x-gitignore-file/
wordpress_id: 634
---

[![Grails](/img/2013/11/grails.png?w=150)](/img/2013/11/grails.png)

With a new Grails 2.X project you run into challenges on which folders to check-in into a GIT repository. You want to remove any non-essential files that Grails can rebuild at run-time. And if you are using either GITHub or BitBucket for your GIT repo's the default .gitignore file created or provided by GITHub is setup for configured for a Grails 1.X project and not a Grails 2.X project.







So here are a few simple steps to help you create the correct .gitignore file for a Grails 2.X project:

Step-1: Create the following .gitignore file under the root Grails project folder:

[sourcecode language="jscript"]
*.iws
*Db.properties
*Db.script
.settings
.classpath
.project
.idea
eclipse
stacktrace.log
target
target-eclipse
/plugins
/web-app/plugins
/web-app/WEB-INF/classes
web-app/WEB-INF/tld/c.tld
web-app/WEB-INF/tld/fmt.tld
[/sourcecode]

Step-2: Git does not allow you to check in empty (but essential folders). To avoid this you can run the following command:

[sourcecode language="jscript"]
find . -type d -empty -exec touch {}/.gitignore \;
[/sourcecode]

The above command creates a empty ".gitignore" file below all folders. And since you now have non-empty folders, you can now check them in into Git so that if you check-out/clone the project in the future, you will have those essential but empty folders.


<blockquote>If you find this article useful, Tweet me on your Twitter account or +1 me on Google-Plus so that others can also benefit from this information.</blockquote>


Cheers

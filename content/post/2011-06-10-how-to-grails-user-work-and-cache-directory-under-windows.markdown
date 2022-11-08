---
author: vguhesan
categories:
- Grails
- Groovy
- Java
comments: true
date: 2011-06-10T21:14:22Z
link: http://mythinkpond.com/2011/06/10/how-to-grails-user-work-and-cache-directory-under-windows/
slug: how-to-grails-user-work-and-cache-directory-under-windows
tags:
- work directory
title: 'How-To: Change Grails User work and cache directory under windows'
url: /2011/06/10/how-to-grails-user-work-and-cache-directory-under-windows/
wordpress_id: 219
---

The directions below will help you move the Grails user work and cache directory to a different location.

**Why?**

Sometimes your default "primary drive" may be running out of space and you need to move your workspace else where.

**How?**



	
  1. Create a file called "settings.groovy" under "C:/Users/.grails" directory.

	
  2. Edit this file and add the following line:
[sourcecode language="jscript"]

grails.work.dir="D:/grailswork"

[/sourcecode]

        
  3. Make sure that the defined folder exists.

        
  4. Remove all other content, files and folders in the ".grails" folder.



Your are all set

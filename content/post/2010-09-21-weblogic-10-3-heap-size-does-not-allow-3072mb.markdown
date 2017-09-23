---
author: vguhesan
categories:
- Java
- Weblogic
comments: true
date: 2010-09-21T18:08:52Z
excerpt: Weblogic 10.3 Heap Size (does not allow 3072mb)
link: http://mythinkpond.com/2010/09/21/weblogic-10-3-heap-size-does-not-allow-3072mb/
slug: weblogic-10-3-heap-size-does-not-allow-3072mb
title: Weblogic 10.3 Heap Size (does not allow 3072mb)
url: /2010/09/21/weblogic-10-3-heap-size-does-not-allow-3072mb/
wordpress_id: 180
---

Has anyone experienced a similar issue? In tuning Weblogic 10.3 R27.6.0-50 for Windows, we were trying various values for the heap size.

Startup jRockit options:

[sourcecode language="jscript"]
-Xms1024m -Xmx1024m
[/sourcecode]

We were setting both values to the same.

1024m = worked
2048m = worked
3072m = did not work
4096m = worked

Did anyone experience a similar problem in allocating? Is there something special about 3072MB?

**Update from Sept. 28th, 2010:**
When we tried this additional property in the start-up parameter the 3GB option works:
`-XxcompressedRefs=0`

You can learn more about that parameter [here](http://download.oracle.com/docs/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/memman.html#wp1087753).

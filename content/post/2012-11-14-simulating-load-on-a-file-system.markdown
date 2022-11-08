---
author: vguhesan
categories:
- Linux
comments: true
date: 2012-11-14T12:27:22Z
link: http://mythinkpond.com/2012/11/14/simulating-load-on-a-file-system/
slug: simulating-load-on-a-file-system
tags:
- benchmark
- create load
- Filesystem
- IO
- load-testing
- test IO
title: Simulating Load on a File-System
url: /2012/11/14/simulating-load-on-a-file-system/
wordpress_id: 444
---

[![load](http://mythinkpond.files.wordpress.com/2012/11/load.jpg)](/img/2012/11/load.jpg)

Sometimes you want an easy way to simulate load on a file-system that you are trying to test. Here's a quick and easy way.

Suppose your mount point you want to perform this IO is "/myspecialmount". (Assuming you have plenty of space to test)

Then the easiest way to load some IO is through the following bash-script:

[sourcecode language="bash"]
#!/bin/bash

while true
do
  echo "=== Starting clean-up ===="
  rm -fr /myspecialmount/usr
  echo "=== Starting load ===="
  rsync -avp /usr /myspecialmount
done
[/sourcecode]

In the above code sample, Line-6 - cleans up the filesystem sub-folder "/myspecialmount/usr". The options "-fr" allows you to perform the clean-up recursively with a force option. And in Line-8, we synchronize the systems "/usr" folder and files onto "/myspecialmount/usr". And these two steps are done on an infinite-loop.

Please note that this is not a true load-testing where you have parallel-simultaneous IO requests being sent to a filesystem but rather a simple way to create some load.

There are some specialized tools such as "[iozone](http://www.iozone.org/)", "[bonnie](http://www.coker.com.au/bonnie++/)" and "[dbench](http://www.samba.org/ftp/tridge/dbench/)" and [others](http://ltp.sourceforge.net/tooltable.php) (see Filesystems section) that are sophisticated bench-marking tools available to the Linux community.

If you find this article useful, please subscribe to my blog and/or share my link with others.

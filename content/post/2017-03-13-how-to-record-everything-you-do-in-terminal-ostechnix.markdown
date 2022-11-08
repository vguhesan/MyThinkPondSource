---
author: vguhesan
categories:
- CentOS 6.X
- CentOS7
- Linux
- Scripting
comments: true
date: 2017-03-13T19:27:16Z
link: http://mythinkpond.com/2017/03/13/how-to-record-everything-you-do-in-terminal-ostechnix/
slug: how-to-record-everything-you-do-in-terminal-ostechnix
tags:
- Bash
- history
- record commands in ssh
- ssh
- terminal
title: How To Record Everything You Do In Terminal - OSTechNix
url: /2017/03/13/how-to-record-everything-you-do-in-terminal-ostechnix/
wordpress_id: 1371
---

[![](/img/2017/03/record-everything-you-do-in-terminal.png)](https://www.ostechnix.com/record-everything-terminal/)

Synopsis:

<pre><code language="bash">

script -a my_history

mkdir test

cd test

touch hello_world.txt

echo 'Hello World' > ./hello_world.txt

# This closes the "script -a my_history" file
exit

</code></pre>

Source: [How To Record Everything You Do In Terminal - OSTechNix](https://www.ostechnix.com/record-everything-terminal/)

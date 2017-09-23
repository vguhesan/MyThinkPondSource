---
author: vguhesan
categories:
- CentOS7
- Linux
comments: true
date: 2016-03-24T14:56:03Z
link: http://mythinkpond.com/2016/03/24/merging-bash-ssh-session-history/
slug: merging-bash-ssh-session-history
tags:
- Bash
- history
title: merging bash ssh session history
url: /2016/03/24/merging-bash-ssh-session-history/
wordpress_id: 1011
---

[![linuxlogo](/img/2016/11/linuxlogo.png)](/img/2016/11/linuxlogo.png)You may have observed once in a while that when you SSH onto a server and you try to look up a command you ran earlier (maybe the previous day) in the "history" output but you do not see it. This is because of how a SSH session works! Each time you ssh into a server, it leverages a set of TTY screens to maintain an individual history for that session. So for example, the first ssh login (for the same userid) may get TTY session #1 and the second ssh login may get TTY session #2 and the server maintains individual session history. So unless, you end up on the same TTY ID the next day (or the next time you login), the commands you ran on the previous day will not appear on the "history" output.

Linux & Bash (I said 'bash' for a reasons mentioned below) provides a very simple solution to merge your history so that all commands you (and many users logging in under the same ID like 'root') in all TTY sessions gets consolidated under one history. This is *rarely* known to Linux users but can come in very handy during investigations.


<blockquote>This is a great command to know especially when you're trying to investigate how files went missing on the server. Most likely, a user with 'root' permissions ran a "rm (remove) * -Rf" command not realizing they were removing files under a different directory such as /var or /usr/bin.</blockquote>



<pre><code>
# Run the following to merge
history -a
# Now if you type history, you will now see all of the commands you ran merged under one space
history
</code></pre>

**WARNING**: The command may or may not work in your environment. To learn why, read on...

Please note that the "history" command is not a "Linux" command but rather a command offered by the respective shell such as "BASH". And that is why when you run "man history", you get all the commands provided by BASH. In most cases, BASH is the default preferred shell so when you SSH into a server you may end up in a BASH shell. But there are many others such as KORN, ASH, BSH, KSH, ZSH and so on. Each shell tries to overcome some kind of limitation. So depending upon the shell you're using some of the commands such as "history -a" may or may not work accurately. Consult your favorite shells' man pages to determine how to merge the history.

Cheers.

Today, considering a comment made by my daughter, I thought I'd end all my blogs with a famous quote that inspires me in hopes that others that read my blog daily can also find inspiration and solace in their daily lives.

Now for the quote that has moved me today:


<blockquote>History will judge us by the difference we make in the everyday lives of children.
- **[Nelson Mandela](https://en.wikipedia.org/wiki/Nelson_Mandela#Presidency_of_South_Africa:_1994.E2.80.9399)**
[Freedom fighter, Anti-apartheid Revolutionary, President of South Africa]</blockquote>


.AUM.

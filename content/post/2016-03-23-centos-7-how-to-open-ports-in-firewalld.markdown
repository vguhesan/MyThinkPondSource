---
author: vguhesan
categories:
- CentOS7
- Linux
comments: true
date: 2016-03-23T15:42:15Z
link: http://mythinkpond.com/2016/03/23/centos-7-how-to-open-ports-in-firewalld/
slug: centos-7-how-to-open-ports-in-firewalld
tags:
- firewall
- Firewalld
- open ports
title: CentOS 7 - How to open ports in firewalld?
url: /2016/03/23/centos-7-how-to-open-ports-in-firewalld/
wordpress_id: 1000
---

[![centos_logo](/img/2016/11/centos_logo.png)](/img/2016/11/centos_logo.png)Prior to CentOS 7, "iptables" and "shorewall" were the two options avaiable. Since CentOS-7, the default firewall tool is "firewalld".

Here is a short-guide on how to open two ports in the firewalld application:

<pre><code>
firewall-cmd --get-active-zones
# Lets open Jetty Web Server port
firewall-cmd --zone=public --add-port=8080/tcp --permanent
# Lets open some other port 4242 for TCP
firewall-cmd --zone=public --add-port=4242/tcp --permanent
# Commit changes
firewall-cmd --reload
firewall-cmd --list-all
</code></pre>

Cheers.

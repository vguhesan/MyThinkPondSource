---
author: vguhesan
categories:
- CentOS7
- Linux
comments: true
date: 2016-12-09T21:17:09Z
link: http://mythinkpond.com/2016/12/09/centos7-missing-net-tools-package-and-why-you-should-not-install-it-moving-forward/
slug: centos7-missing-net-tools-package-and-why-you-should-not-install-it-moving-forward
tags:
- arp
- ipconfig
- iptunnel
- iwconfig
- missing
- nameif
- Net-Tools
- netstat
- route
- where are the network tools?
title: CentOS7 missing Net-Tools Package and why you should not install it moving
  forward
url: /2016/12/09/centos7-missing-net-tools-package-and-why-you-should-not-install-it-moving-forward/
wordpress_id: 1260
---

[![centos_logo](/img/2016/11/centos_logo.png)](/img/2016/11/centos_logo.png)In CentOS 7, a lot of the command-line utilities for configuring and troubleshooting network properties like arp, ifconfig, iptunnel, iwconfig, nameif, netstat, route - are no longer there in the new CentOS 7 version. While still included in many Linux Distributions, (and you may be tempted to run - 'yum install net-tools' - to get them back into your Linux footprint). But they are considered **deprecated** and therefore should be phased out in favor of more modern replacements. If you visit the link to [net-tools project](https://sourceforge.net/projects/net-tools/files/?source=navbar) [and [here](https://wiki.linuxfoundation.org/networking/net-tools)] you will see that the last build of the tar.bz2 file was sometime back in October 14th, 2011.

This opens up some possibility for security vulnerabilities that may not get adequately patched. When you are developing applications for the Linux Platforms or running server configurations on Linux out in the cloud, you should move away from leveraging the net-tools as part of your portfolio. You will also notice that the modern tools leverage multi-core processing & parallelization (in some cases) to speed things up and you may notice a slight performance improvement in some of the commands. If your script is iterating through a collection running a certain net-tools command, your script will see a noticeable difference in time.

The CentOS 7 team has decided to move to [iproute2](https://en.wikipedia.org/wiki/Iproute2) but some of the commands are not as trivial and requires a bit of familiarization before you can readily use it.

For example, the **ss** command that aids in determining if a port is open or used when compared with **netstat** can yield faster results because it directly queries the kernel using [Netlink](https://en.wikipedia.org/wiki/Netlink) and the classic [sockets](http://www.linuxjournal.com/article/7356) API rather than going through the **proc-fs** file system (/proc/net/tcp) to acquire the system network information. So this approach makes the results come back faster. You can see the fun and gory code details [here](https://github.com/shemminger/iproute2/blob/master/misc/ss.c).

Here is a quick table that summarizes the older net-tools command and it's new IPRoute2 equivalent:
<table cellpadding="5" cellspacing="0" border="1" >
<tbody >
<tr >

<td >**Net-Tool *old* Command**
</td>

<td >**IPRoute2 *new* Command**
</td>

<td >**Purpose/Notes**
</td>
</tr>
<tr >

<td >arp
</td>

<td >ip neigh (ip neighbor)
</td>

<td >Neighbors
</td>
</tr>
<tr >

<td >ifconfig
</td>

<td >ip addr, ip link, ip -s
</td>

<td >Address and Link Configuration
</td>
</tr>
<tr >

<td >route
</td>

<td >ip r, ip route
</td>

<td >Routing Tables
</td>
</tr>
<tr >

<td >iptunnel
</td>

<td >ip tunnel
</td>

<td >Tunnels (but simplified)
</td>
</tr>
<tr >

<td >nameif
</td>

<td >ip link, ifrename
</td>

<td >Rename Network Interfaces (very useful since CentOS 7 names tdem like enp0s3 instead of tdaditional etd0)
</td>
</tr>
<tr >

<td >netstat
</td>

<td >ss, ip route (for netstat -r), ip -s link (for netstat -i), ip maddr (for netstat -g)
</td>

<td >Display networking statistics (good for monitoring your net stack)
</td>
</tr>
<tr >

<td >ipmaddr
</td>

<td >ip maddr
</td>

<td >For multicasting - very useful for all tde micro-services, auto-discovery protocols etc
</td>
</tr>
</tbody>
</table>
Cheers!
<table >
<tbody >
<tr >

<td colspan="2" bgcolor="#C2C9CC" >_Today's inspirational quote:_
</td>
</tr>
<tr >

<td valign="middle" >[![bust_of_marcusaurelius](/img/2016/11/bust_of_marcusaurelius.jpg)](/img/2016/11/bust_of_marcusaurelius.jpg)
</td>

<td valign="middle" >



 	
  * The impediment to action advances action. What stands in the way becomes the way.

 	
  * Here is one way to think of hardship: I am a failure. I have met the end. Finito. I'm stupid. or
Here is another way to think of the same hardship: A chance to learn about endurance, patience, resilience, struggle. An opportunity to prove. An opportunity to learn from the mistakes.When faced with an obstacle, think of it as **the way forward**. Until you acknowledge it and accept it as defeat within your confines of your mind, it remains as an opportunity and a way forward!




- [Emperor Marcus Aurelius](https://en.wikipedia.org/wiki/Marcus_Aurelius) in [Meditations](https://en.wikipedia.org/wiki/Meditations)

</td>
</tr>
</tbody>
</table>

---
author: vguhesan
categories:
- CentOS 6.X
- CentOS7
- Linux
comments: true
date: 2016-11-06T14:38:38Z
link: http://mythinkpond.com/2016/11/06/centos-6-8-7-change-timezone/
slug: centos-6-8-7-change-timezone
tags:
- CentOS
- centos 6.8
- CentOS 7
- change timezone
- timezone
title: CentOS 6.8 & 7 - Change Timezone
url: /2016/11/06/centos-6-8-7-change-timezone/
wordpress_id: 1222
---

[![centos_logo](/img/2016/11/centos_logo.png)](/img/2016/11/centos_logo.png)[![timezones](/img/2016/11/timezones.png)](/img/2016/11/timezones.png)

Here is a cheat sheet on changing the timezone in a linux system (CentOS 6.8 or 7):

<pre><code language="bash">
# Remove the current timezone file
rm /etc/localtime

# Create a symbolic link to the new timezone you want
# ls -la /usr/share/zoneinfo/
# ls -la /usr/share/zoneinfo/US/

# For GMT
ln -s /usr/share/zoneinfo/GMT /etc/localtime
# For EST
ln -s /usr/share/zoneinfo/EST /etc/localtime
# For UTC
ln -s /usr/share/zoneinfo/UTC /etc/localtime
# For GMT
ln -s /usr/share/zoneinfo/GMT /etc/localtime
# For New York (Eastern)
ln -s /usr/share/zoneinfo/US/Eastern /etc/localtime
# For Central
ln -s /usr/share/zoneinfo/US/Central /etc/localtime
# For Mountain time
ln -s /usr/share/zoneinfo/US/Mountain /etc/localtime
# For Pacific time
ln -s /usr/share/zoneinfo/US/Pacific /etc/localtime

# Set Date and Time (as needed)
# MMDDHHmmYYYY
date 072522172010
hwclock --systohc

# If you're using NTPD Service
# CentOS 6.8
service ntpd stop && service ntpd start
# In CentOS 7 
systemctl stop ntpd && systemctl start ntpd

</code></pre>

You may also be interested in NTP Service blog article [here](/2016/11/05/how-to-sync-your-date-when-you-restore-a-virtualbox-snapshot/).
<table >
<tbody >
<tr >

<td colspan="2" >_Today's inspirational quote:_
</td>
</tr>
<tr >

<td valign="middle" >[![epictetus](/img/2016/11/epictetus.png)](/img/2016/11/epictetus.png)
</td>

<td valign="middle" >



 	
  * Men (people) are disturbed not by events but by their opinion about events.

 	
  * Wealth consists not in having great possessions, but in having few wants.




- [Epictetus](https://en.wikipedia.org/wiki/Epictetus) in [Enchiridion](https://en.wikipedia.org/wiki/Enchiridion_of_Epictetus)

</td>
</tr>
</tbody>
</table>

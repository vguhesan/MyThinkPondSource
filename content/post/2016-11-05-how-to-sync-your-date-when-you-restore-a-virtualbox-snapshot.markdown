---
author: vguhesan
categories:
- CentOS 6.X
- CentOS7
- Hypervisior Images
- Kernel
- Linux
comments: true
date: 2016-11-05T16:45:30Z
link: http://mythinkpond.com/2016/11/05/how-to-sync-your-date-when-you-restore-a-virtualbox-snapshot/
slug: how-to-sync-your-date-when-you-restore-a-virtualbox-snapshot
tags:
- CentOS
- clock
- date
- Hypervisor
- ntp
- time
title: How to sync your date when you restore a VirtualBox snapshot?
url: /2016/11/05/how-to-sync-your-date-when-you-restore-a-virtualbox-snapshot/
wordpress_id: 1174
---

[![hypervisor_logo](/img/2016/11/hypervisor_logo1.png)](/img/2016/11/hypervisor_logo1.png)This article focuses on synchronizing/updating the clock in your guest linux VM after you restore a VirtualBox snapshot.

When you create a VirtualBox snapshot, it's essentially a photo taken and frozen in time. All bits including the date and time are frozen to that instant. When you restore a snapshot, the Linux guest VM system is restored back to that snapshot including the date and time. This may not be desired all the time especially if the purpose is to restore the configuration and settings to an earlier time but your want to roll forward the clock on the VM to the present instance. The outlined steps below can also apply to other virtual hypervisors like Qemu, VMWare, Amazon S3 images, etc. (essentially where ever you may have a CentOS or Red Hat Linux Virtual instance and with slight modifications the same can be applied to any Linux guest hypervised image)

Below are a few simple steps you can take to reset the clock:

**Steps to perform before you create a VirtualBox snapshot:**

<pre><code language="bash">
# Install ntp service 
yum -y install ntp
# Turn it on so that it starts up automatically on reboot
chkconfig ntpd on
# Point it to your nearest internet accessable NTP server available around the globe for time-services 
ntpdate pool.ntp.org
# Manually start it up and ensure that it comes up
service ntpd start
</code></pre>

**Now take a VirtualBox snapshot as needed.**

**When you restore a snapshot, do the following after the snapshot is restored:**

<pre><code language="bash">
# After snapshot restore, run 
ntpdate pool.ntp.org
</code></pre>

That's it! Your date & time should now be updated but all of the other settings and modifications you have done will be restored to it's former glory!

**What is NTP?**
NTP stands for Network Time Protocol, and it is an Internet protocol used to synchronize the clocks of computers to some time reference.

Cheers!

_Today's Inspirational Quotes:_

[![bust_of_marcusaurelius](/img/2016/11/bust_of_marcusaurelius.jpg)](/img/2016/11/bust_of_marcusaurelius.jpg)If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.

- [Marcus Aurelius, ](https://en.wikipedia.org/wiki/Marcus_Aurelius)[Meditations ](https://en.wikipedia.org/wiki/Meditations)



-AUM

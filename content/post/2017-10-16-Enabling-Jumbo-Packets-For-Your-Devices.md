+++
title = "Configure Jumbo Packets for all your devices including Windows/Linux/Mac OS X on your network"
description = "Article goes into how to configure Jumbo packets on all devices in your network. It goes into setup details for Windows, Linux and Mac OS X systems."
date = "2017-10-16T13:22:49-04:00"
categories = [
  "Networking Tips",
  "Windows Tips",
  "Linux Tips",
  "Mac OS X Tips"
]
tags = [
  "Windows",
  "Linux",
  "Mac OS X",
  "Jumbo Packets",
  "Jumbo",
  "packet size"
]
thumbnail = "/img/logo/network.png"
+++

## Summary

This article focus on how to setup Jumbo packets on all your various devices in your network. This includes Windows 10+, Linux, Mac OS X+.

## What is Jumbo packet or Jumbo Frame?

> A jumbo frame is an Ethernet frame with a payload greater than the standard maximum transmission unit (MTU) of 1,500 bytes. Jumbo frames are used on local area networks that support at least 1 Gbps and can be as large as 9,000 bytes.
> -- Definition from WhatIs.com

{{<img src="/img/2017/10/jumbo-frames.gif" alt="Jumbo Framess" width="250" align="center" class="imgframe">}}

When you purchase [1Gb] Gigabit or 10GB switches and routers lately, you may have seen something on the specifications that may say something like this "supports Jumbo packets" or "Jumbo Frame support". If you are one of the lucky ones that has a switch that supports Jumbo packets, chances are that you may not have configured your devices to leverage this Jumbo packet technology and may be suffering from network lags that could have been easily avoided.

If you are shopping for a new switch then take a look at a few of the Trendnet switches that supports jumbo packets:

  * [Trendnet 16-port switch on Amazon - ~$52](https://www.amazon.com/TRENDnet-GREENnet-Polycarbonate-Switching-TEG-S16D/dp/B0126TJEOK/)
  * [TP-Link 8-port switch on Amazon - ~$25](https://www.amazon.com/dp/B00A121WN6/)

## How will this help me?

Suppose you are copying a very large file (like a movie or your mp3 collection from one computer to another computer) or streaming movies or files, then it requires all three parties to have enabled jumbo packet support for the transmission to be effective. The sender (source-computer), the receiver (target-computer) and the switch (middle-man). If any one of them is not configured for jumbo packet support then you're not really moving data in the most optimal way possible.

Note: This is not applicable to WiFi connections since wifi speeds are not nearly close to direct wired at this time.

So let's get to business on how you can configure Jumbo Frame/Packet support for each of your devices in your network.

## MTU (Maximum Transfer Unit)

The Jumbo Frames support or Jumbo Packets are controlled at your network card level and is typically associated with MTU (maximum transfer unit) property of your network settings. Most OS's have a default of 1,500 bytes. And Jumbo Frames can support upto 9,000 bytes per packet.

**Determine what your router or switch supports by looking into the Router or Switch specifications. You will need to set the MTU parameter accordingly in the next sections.**

## Configuring Jumbo Packets/Jumbo Frames in Linux

### CentOS/Red Hat/Ubuntu variety of Linux

<pre><code class="language-bash line-numbers"># To check your MTU size
$ ip link show | grep mtu

# To Set a new mtu size
$ ip link set eth0 mtu 9000

# Above change is *only* temporary, when you reboot your computer you
# will be back to 1500.
# To make the above change permanent add this as part of your startup script

</code></pre>

### Pre-CentOS 7 versions of Linux (that supports ifconfig)

<pre><code class="language-bash line-numbers">ifconfig eth0 mtu 9000 up

</code></pre>

### Mac OS X

<pre><code class="language-bash line-numbers"># To check your MTU size
$ networksetup -getMTU en0

# To Set a new mtu size
$ networksetup -setMTU en0 9000

</code></pre>

Also follow this article on how to do this using your Network setting GUI:
[Changing it on the Mac GUI](https://www.codeotaku.com/journal/2010-02/mac-os-x-jumbo-frames/index)

### Windows 10 (not tested)

> Have Windows, let me know if this works

<pre><code class="language-bash line-numbers"># Open command-prompt in Administrative mode

# To check your MTU size
$ netsh interface ipv4 show subinterfaces

# To Set a new mtu size
$ netsh interface ipv4 set subinterface "Local Area Connection" mtu=nnnn store=persistent
# where
#   Local Area Connection is the name of the network connection on your
#     computer, from the list obtained above.
#   nnnn is the desired value for MTU.
</code></pre>

Cheers!

### Today's Quote

{{<figure src="/img/logo/zen.png" caption="" width="100" class="alignleft round-img-border imgframe-left-pad" >}}
<br/>
Before Enlightenment - chop wood, carry water.<br/>
After enlightenment - chop wood, carry water.<br/>
**Zen Proverb**


&nbsp;

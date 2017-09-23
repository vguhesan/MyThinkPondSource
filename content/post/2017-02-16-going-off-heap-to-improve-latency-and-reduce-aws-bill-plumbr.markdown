---
author: vguhesan
categories:
- Java
comments: true
date: 2017-02-16T16:21:23Z
link: http://mythinkpond.com/2017/02/16/going-off-heap-to-improve-latency-and-reduce-aws-bill-plumbr/
slug: going-off-heap-to-improve-latency-and-reduce-aws-bill-plumbr
tags:
- Chronicle
- Memory Management
- Off Heap
title: Going off-heap to improve latency and reduce AWS bill
url: /2017/02/16/going-off-heap-to-improve-latency-and-reduce-aws-bill-plumbr/
wordpress_id: 1326
---

[![java_logo_2b](/img/2017/02/java_logo_2b.png)](/img/2017/02/java_logo_2b.png)Great read - shows you the power of Java and Chronicle Map.

Describing how going off-heap with the help of Chronicle Map helped us to get rid of the latency hiccups and cut our Amazon AWS bill in half.

Source: [Going off-heap to improve latency and reduce AWS bill – Plumbr](https://plumbr.eu/blog/java/going-off-heap-to-improve-latency-and-reduce-aws-bill)

**Caution**: Before you go diving into using the open source version of Chronicle Map, there are some gotchas to be aware of from a features point-of-view.


<blockquote>Chronicle Map could be persisted to disk. **Durability with Chronicle Map is provided by another level of architecture,** for example all requests are sent to several nodes - master and hot standby. Clustering/distributed architecture is out of the scope of the Chronicle Map project, there are projects _on top_ of Chronicle Map which address these questions, e. g. [Chronicle Enterprise](http://chronicle.software/products/chronicle-enterprise/).</blockquote>


If your needs are to persist off-heap data on the local JVM to disk (and to have multiple processes interact with data within one physical machine) then you can use the open-source edition but if your needs are to talk across JVMs that are across IPs (physical/virtual machines) for synchronization/replication features then you are looking at the closed source (paid) version of their product stack as seen from this [link](https://github.com/OpenHFT/Chronicle-Map#features). Your needs may vary.

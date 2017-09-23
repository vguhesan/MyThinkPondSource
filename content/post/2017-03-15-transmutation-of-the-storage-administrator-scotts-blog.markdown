---
author: vguhesan
categories:
- Storage
comments: true
date: 2017-03-15T19:13:05Z
link: http://mythinkpond.com/2017/03/15/transmutation-of-the-storage-administrator-scotts-blog/
slug: transmutation-of-the-storage-administrator-scotts-blog
tags:
- Evolution of a Storage Administrator
- host connection
- IBM Spectrum Scale
- networking
- Object Storage
- Operating Systems
- storage access protocol
- Storage Administrator
- storage devices
title: 'Transmutation of the Storage Administrator : Scott''s Blog'
url: /2017/03/15/transmutation-of-the-storage-administrator-scotts-blog/
wordpress_id: 1380
---

![StorageIcon](/img/2017/03/storageicon.png)This article discusses the evolution of the storage administrator in the era of cloud storage.






<blockquote>The job (storage administrator) role is changing, not only is there a need to understand storage devices and host connection technologies that knowledge scope is extending to include networking, operating systems and new storage access protocols (like Object)...IBM Spectrum Scale is the logical next step to help storage administrators expand their offering portfolio and provide additional value to their customers. Now instead of simply providing a volume with a capacity, reliability and performance characteristic they can provide a dynamic storage platform that can support, tiered storage, high performance backups, integrated archive and still provide the high performance demanded by their current block storage customers.</blockquote>


This article is a good read. It starts first by describing "what is a block storage?". It then moves into the transformation happening with commoditization of storage into a cloud environment where you are moving from a typical SAN environment to a TCP/IP based storage clusters. And the article ends with how every tier in the data-management will become commoditized/virtualized in the cloud.

It would be interesting to hear the author's (Scott Fadden) view today since that article was written back in July 2015 and we are in the midst of that transformation with KVM's [virtIO](https://wiki.libvirt.org/page/Virtio), Open Stack's [Cinder](https://wiki.openstack.org/wiki/Cinder) plugins.

Source: [IBM Spectrum Scale Wiki : Scott's Blog](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/General%20Parallel%20File%20System%20(GPFS)/page/Scott%27s%20Blog)

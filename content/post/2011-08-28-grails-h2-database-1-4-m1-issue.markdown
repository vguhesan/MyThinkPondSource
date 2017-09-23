---
author: vguhesan
categories:
- Grails
comments: true
date: 2011-08-28T22:14:37Z
link: http://mythinkpond.com/2011/08/28/grails-h2-database-1-4-m1-issue/
slug: grails-h2-database-1-4-m1-issue
tags:
- H2
- H2 Database
title: Grails H2 Database 1.4.M1 Issue
url: /2011/08/28/grails-h2-database-1-4-m1-issue/
wordpress_id: 256
---

I've noticed a peculiar behavior that I'm documenting here for others. I'm using Grails 1.4.M1 and it bundles with it H2 database version [H2 1.2.147 (2010-11-21)]

If you decide to run H2 in a server mode, you would most likely download the latest version of H2 Database from the website. As of writing this article, the stable version of H2 is [H2 1.3.158 (2011-07-17)].

**Issue:** If you run your Grails application using 1.2.147 and your external H2 database happens to be 1.3.158, then the SELECT's work fine but when you run INSERT or UPDATE statements, they are not committed.

When I switched the H2 version to 1.2.147, then the <DOMAIN>.save() worked fine.



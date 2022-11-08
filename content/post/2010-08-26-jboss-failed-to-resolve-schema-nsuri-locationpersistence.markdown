---
author: vguhesan
categories:
- Java
- JBoss AS6
comments: true
date: 2010-08-26T19:22:16Z
excerpt: Common porting error to JBoss AS6 - "Failed to resolve schema nsURI= location=persistence"
link: http://mythinkpond.com/2010/08/26/jboss-failed-to-resolve-schema-nsuri-locationpersistence/
slug: jboss-failed-to-resolve-schema-nsuri-locationpersistence
title: JBoss AS6 - Failed to resolve schema nsURI= location=persistence
url: /2010/08/26/jboss-failed-to-resolve-schema-nsuri-locationpersistence/
wordpress_id: 164
---

If you encounter the following error when deploying under JBoss AS6:
"Failed to resolve schema nsURI= location=persistence"

The chances are that you are missing the name-space for the persistence.xml file. So examine your persistence.xml file and replace the <persistence> tag with the following:

[sourcecode language="jscript"]

<persistence
 xmlns="http://java.sun.com/xml/ns/persistence"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://java.sun.com/xml/ns/persistence
 http://java.sun.com/xml/ns/persistence/persistence_1_0.xsd"
 version="1.0">

[/sourcecode]

And this should help you get rid of the above error.

cheers.

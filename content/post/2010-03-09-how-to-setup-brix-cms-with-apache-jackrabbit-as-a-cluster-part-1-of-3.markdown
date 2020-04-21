---
author: vguhesan
categories:
- Brix-cms
- Wicket
comments: true
date: 2010-03-09T04:37:11Z
excerpt: All about Brix-cms and Jackrabbit Clustering. Our objective is to setup two
  instances of Brix-cms backed by a clustered Jackrabbit JCR on the back-end persisted
  onto a H2 database.
link: http://mythinkpond.com/2010/03/08/how-to-setup-brix-cms-with-apache-jackrabbit-as-a-cluster-part-1-of-3/
slug: how-to-setup-brix-cms-with-apache-jackrabbit-as-a-cluster-part-1-of-3
tags:
- Apache Jackrabbit
- Java CMS
title: How to setup Brix-cms (with Apache Jackrabbit as a cluster) - Part 1 of 3
url: /2010/03/09/how-to-setup-brix-cms-with-apache-jackrabbit-as-a-cluster-part-1-of-3/
wordpress_id: 72
---

PS: This tutorial assumes that you are familiar with deploying applications (war files) in Tomcat, setting up datasource\connection pooling using Apache DBCP and in using H2 Database.

**Objective**: Setup two instances of Brix-cms backed by a clustered Jackrabbit JCR on the back-end persisted onto a H2 database.

Because there is so much to cover, I will cover the pieces in three installments.

**Installment #1:**



	
  * What and why of Brix-cms.

	
  * Intro into why we care about Brix and JCR.

	
  * Deploy the Brix-Demo.war and get familiar with the parts of JackRabbit repository.


**Installment #2:**



	
  * More on the parts of Jackrabbit and understanding the repository.xml and how Brix uses this configuration.

	
  * Moving the repository to a H2 Database back-end.


**Installment #3:**



	
  * Clustering Jackrabbit such that we have two instances of Brix talking to a clustered Jackrabbit and one back-end H2 Database.


------------------------------

**Disclaimer**: I don't claim to be an expert at Brix-cms or Wicket. My experience with Brix has been a few months. The creators of Wicket and Brix-cms know a lot more about the internals and the best way to set them up. My goal is to expose you to the knowledge I have gained and offer you one of the ways in which you can set things up in a scalable environment.

**Installment #1:**

Today (Monday, March 8th, 2010) marks an important day for [Brix Portal and Content Manager](http://code.google.com/p/brix-cms/) (called Brix-cms) - It's announcement of it's version 1.1.0 release. One of the [comments](http://groups.google.com/group/brix-cms-discuss/msg/4c3704ca6fb5444c?hl=en) made by a Brix supporter is that it lacks documentation and tutorials. So this is my attempt to share some of my experiences with Brix and ow to setup Brix backed by a Jackrabbit cluster.

So let's get started:

**1. What is Brix-CMS?**
Well, it's a Wicket based content manager framework. It contains a content manager and a portal that comes bundled in a neat little package.

**2. What can you do with it?**
Pretty much anything that requires a clean consistent templating and rendering engine backed by a content manager to manage the content.

**3. Why would you use Brix-cms when there are other content managers out there?**
Well, if your company is focused on developing your applications in Wicket then pluging in Brix-cms makes integrating your application with a portal front-end a breeze. But even if you are developing your application in another framework such as SpringMVC or Struts-2, you can still plug into the Brix-cms using portlets or override the Brix-Demo Servlet to embed your plug to your application. Or if you are looking for a simple easy to use Portal with a Content Manager - then Brix can get you there quick. [Alfresco ](http://www.alfresco.com/)is the other content manager in this space but has more document management functionality and workflow built around their product but also backed by JCR. I will explain more about the JCR shortly. One of the other paid solution is from a company called Day Software (They have been instrumental in the JCR specification). And their product is called [Web Content Management](http://www.day.com/day/en/products/web_content_management.html). But I can't speak on that because I am not all that familiar with their product line.

**4. What makes Brix-cms better than other content manager portals out there?**
When the "Internet" became the beast that it is today, there was need for portals - a centralized place to get all the information about a company, a product, a key set of services, etc. And so to meet the demand people built portals in various languages such as PHP, Perl, Java, etc. And each used the benefits of each language to meet the demand. When Java was used, people wrote portal pages using JSP's. Where each page consisted of a JSP with content embedded in them - persisted to the file system. The next generation of these portal demanded a non-developer to add/edit and delete content. So so began the need for content managers with file based back-end that kept this content. The next generation needed the same versatility but the content was stored in a database making it scalable. But then each implementation had their own way of fetching and retrieving this content from the back end. Well, a solution was needed to allow a clear consistent way to fetch and manage this content from a persistent storage - the solution was  [Java Content Repository](http://en.wikipedia.org/wiki/Content_repository_API_for_Java) (JCR). The Java consortium just recently released version JCR-2.0.  According to Wikipedia,


<blockquote>Content Repository API for Java (JCR) is a specification for a Java platform API for accessing content repositories in a uniform manner. A JCR is a type of Object Database tailored to the storage, searching, and retrieval of hierarchical data. The JCR API grew out of the needs of content management systems, which require storage of documents and other binary objects with associated metadata; however, the API is applicable to many additional types of application. In addition to object storage, the JCR provides: APIs for versioning of data; transactions; observation of changes in data; and import or export of data to XML in a standard way.</blockquote>


So with the industry looking for a clean and concise way to save, manage and retrieve data - the solution was JCR. So people developing these portals and content managers can use a common concise way to work with the content. So now we need someone or something that implements a java content repository. And that brings us to the next guy in the puzzle, namely [Apache Jackrabbit](http://jackrabbit.apache.org/). Apache Jackrabbit implements the JCR 1.0 (and JCR 2.0) specification. And guess who uses this Jackrabbit - bingo - Brix-cms. So now I hope you can see the powerhouse behind Brix-cms. Basically content (page content, templates, images, pdf's, and other binary content) within Brix-cms are all saved within the JCR (Jackrabbit) repository and fetched on demand using some clever techniques to render on the front-end Portal. I hope this little trip down memory lane has shown you how important the various parts of the puzzle play out in making Brix-cms, a powerful solution. Enough said, moving on.

In a typical mid-level or enterprise organization - scalability, redundancy and fail-over  all become the mantra that we use on a daily basis. So my objective here is to show you how to get started with Brix development and on one of the ways you can build a solution that allows you to scale, provide redundancy and fail-over support.

_**Brix-cms - First glances.**_
Goto [Brix-cms Downloads](http://code.google.com/p/brix-cms/downloads/list) (http://code.google.com/p/brix-cms/downloads/list) and download the latest war available from them. When I was writing this article, their latest was brix-demo-1.1.0.war. Download this and deploy it in Tomcat or your favorite application server.

Here's my Tomcat context:
<Context path="/brix" docBase="C:\A_OpenSource\brix\2_brix_demo-unzip" reloadable="false" />

And when I start Tomcat, here's a sample of the output:
<pre><code class="language-bash line-numbers">

INFO: Starting Servlet Engine: Apache Tomcat/6.0.24
INFO  - AbstractWicketApplication  - **Using JCR repository url: file://C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository**
INFO  - RepositoryImpl             - Starting repository...
INFO  - LocalFileSystem            - **LocalFileSystem** initialized at path C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository\repository
INFO  - NodeTypeRegistry           - no custom node type definitions found
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\version**
INFO  - ConnectionRecoveryManager  - **Database: Apache Derby** / 10.2.1.6 - (452058)
INFO  - ConnectionRecoveryManager  - Driver: Apache Derby Embedded JDBC Driver / 10.2.1.6 - (452058)
INFO  - RepositoryImpl             - initializing workspace 'default'...
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\workspaces\default**
INFO  - ConnectionRecoveryManager  - Database: Apache Derby / 10.2.1.6 - (452058)
INFO  - ConnectionRecoveryManager  - Driver: Apache Derby Embedded JDBC Driver / 10.2.1.6 - (452058)
INFO  - RepositoryImpl             - workspace 'default' initialized
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\repository\index**
INFO  - SearchIndex                - Index initialized: C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository/repository/index Version: 3
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\workspaces\default\index**
INFO  - SearchIndex                - Index initialized: C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository\workspaces\default/index Version: 3
INFO  - RepositoryImpl             - Repository started
INFO  - SimpleSecurityManager      - init: using Repository LoginModule configuration for Jackrabbit
INFO  - RepositoryImpl             - SecurityManager = class org.apache.jackrabbit.core.security.simple.SimpleSecurityManager
INFO  - BrixRepositoryInitializer  - Registering Brix JCR Namespace: brix
INFO  - Brix                       - Registering node type: brix:node in workspace default
INFO  - Brix                       - Registering node type: brix:folder in workspace default
INFO  - Brix                       - Registering node type: brix:tile in workspace default
INFO  - Brix                       - Registering node type: brix:hidden in workspace default
INFO  - Brix                       - Registering node type: brix:globalContainer in workspace default
INFO  - Brix                       - Registering node type: brix:tilePage in workspace default
INFO  - Brix                       - Registering node type: brix:tileTemplate in workspace default
INFO  - Brix                       - Registering node type: brix:webDavContainer in workspace default
INFO  - RepositoryImpl             - **initializing workspace 'brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0'**...
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\workspaces\brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0**
INFO  - ConnectionRecoveryManager  - Database: Apache Derby / 10.2.1.6 - (452058)
INFO  - ConnectionRecoveryManager  - Driver: Apache Derby Embedded JDBC Driver / 10.2.1.6 - (452058)
INFO  - RepositoryImpl             - workspace 'brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0' initialized
INFO  - LocalFileSystem            - LocalFileSystem initialized at path C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\workspaces\brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0\index**
INFO  - SearchIndex                - Index initialized: C:\Apps\apache-tomcat-6.0.24\temp\**brix.demo.repository\workspaces\brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0/index** Version: 3
INFO  - Application                - [WicketApplication] init: Wicket extensions initializer
INFO  - Application                - [WicketApplication] init: Wicket core library initializer
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IBehaviorListener, method=public abstract void org.apache.wicket.behavior.IBehaviorListener.onRequest()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IBehaviorListener, method=public abstract void org.apache.wicket.behavior.IBehaviorListener.onRequest()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IFormSubmitListener, method=public abstract void org.apache.wicket.markup.html.form.IFormSubmitListener.onFormSubmitted()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IFormSubmitListener, method=public abstract void org.apache.wicket.markup.html.form.IFormSubmitListener.onFormSubmitted()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=ILinkListener, method=public abstract void org.apache.wicket.markup.html.link.ILinkListener.onLinkClicked()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=ILinkListener, method=public abstract void org.apache.wicket.markup.html.link.ILinkListener.onLinkClicked()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IOnChangeListener, method=public abstract void org.apache.wicket.markup.html.form.IOnChangeListener.onSelectionChanged()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IOnChangeListener, method=public abstract void org.apache.wicket.markup.html.form.IOnChangeListener.onSelectionChanged()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IRedirectListener, method=public abstract void org.apache.wicket.IRedirectListener.onRedirect()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IRedirectListener, method=public abstract void org.apache.wicket.IRedirectListener.onRedirect()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IResourceListener, method=public abstract void org.apache.wicket.IResourceListener.onResourceRequested()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IResourceListener, method=public abstract void org.apache.wicket.IResourceListener.onResourceRequested()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IActivePageBehaviorListener, method=public abstract void org.apache.wicket.behavior.IBehaviorListener.onRequest()]
INFO  - RequestListenerInterface   - registered listener interface [RequestListenerInterface name=IActivePageBehaviorListener, method=public abstract void org.apache.wicket.behavior.IBehaviorListener.onRequest()]
INFO  - WebApplication             - [WicketApplication] Started Wicket version 1.4.1 in deployment mode

</code></pre>

I've highlighted some of the parts of application. When you point to the application at
[http://locahost:8080/brixdemo](http://locahost:8080/brixdemo) you get this:


[![](http://mythinkpond.files.wordpress.com/2010/03/brix-defaultpage.jpg)](http://mythinkpond.files.wordpress.com/2010/03/brix-defaultpage.jpg)


And when you click on the "Admin" link you get to the content manager portion of Brix-cms.


[![](http://mythinkpond.files.wordpress.com/2010/03/brix-cmgr.jpg)](http://mythinkpond.files.wordpress.com/2010/03/brix-cmgr.jpg)


Since our focus is to gain a better understanding on setting up and configuring Jackrabbit repository, lets move on. I will cover that in a later discussion. Now go ahead and edit the index.html and shutdown and restart Tomcat. What you should observe is that the change you had made is retained and that Brix has restored your changes. So let's see what happened on the back-end.

Within brix-demo, when you fire up it creates a Jackrabbit repository and two workspaces (one called '**default**' and another with a UID - '**brix_ws_869e3fa0** ...') that's backed by a Java Derby database and this repository and workspace are persisted within Derby here "C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository" defined by "Using JCR repository url" comment. And as long as this folder remains within the reach of Brix when you startup, your changes and content will be persistent across restarts.

If you go to that folder on your file system, you will find the following structure:

[C:\Apps\apache-tomcat-6.0.24\temp\brix.demo.repository]
<pre><code class="language-bash line-numbers">|   **repository.xml**
|
+---repository
|   +---index
|   +---meta
|   +---namespaces
|   \---nodetypes
+---version
|   \---db
\---**workspaces**
+---**brix_ws_869e3fa0_e06c_48dd_a66f_4b0f251c42d0**
|       **workspace.xml**
|
\---**default**
**workspace.xml**
</code></pre>
And in particular if you examine the "repository.xml" file, you will begin to see a pattern beginning to evolve. This file will be the key in setting up and configuring our Jackrabbit repository. In our next discussion, we will begin by examining the parts that make up Jackrabbit repository and how we can move the repository to a H2 database. This should give us a better understanding on how one would move the repository to a database like "MySQL" or "Oracle" or "SQL Server". And in the third installment of this discussion, we will look at clustering the applications such that we have two instances of Brix-cms talking to a centralized H2 database and how modifying a content on one instance is reflected in the other instance.

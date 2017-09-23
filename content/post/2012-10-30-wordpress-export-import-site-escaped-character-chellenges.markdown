---
author: vguhesan
categories:
- General
- WordPress
comments: true
date: 2012-10-30T18:15:37Z
link: http://mythinkpond.com/2012/10/30/wordpress-export-import-site-escaped-character-chellenges/
slug: wordpress-export-import-site-escaped-character-chellenges
tags:
- Export
- Import
- Import Blog
- quot
- Wordpress
title: 'Wordpress Export Import Site Escaped Character Challenges - " '
url: /2012/10/30/wordpress-export-import-site-escaped-character-chellenges/
wordpress_id: 407
---

When you export a Wordpress site and import the site into a new Wordpress site you will notice that a few HTML entities that are not allowed in an XML output got escaped. In simple terms, you will see a lot of &quot; and if you use a Mac OSx system, your will see - &ldquo; and &rdquo; displayed as content in your blog pages.

Well here's a way to correct them.

1. Identify a list of these escaped XML entities using the [HTML Entities Table](http://www.htmlhelp.com/reference/html40/entities/special.html). For most folks it would be just &quot;

2. Within your hosting environment, find out how to get to a MySQL query window to run your SQL commands.

3. Backup your current database. And know how to restore it. (I am not liable).

4. Run the following SQL command:

[sourcecode]

UPDATE wp_posts
SET post_content= REPLACE(post_content, '&quot;', '"');
UPDATE wp_posts
SET post_content=REPLACE(post_content, '&lt;', '<');
UPDATE wp_posts
SET post_content=REPLACE(post_content, '&gt;', '>');

[/sourcecode]

Here in this example, I'm replacing all occurrences of &amp;quot; with a double-quote. Now load up a sample blog article and verify that the issue is resolved.

Repeat steps-4 for each escaped HTML entity.

Now you're all set to begin blogging with your newly imported WordPress blog. Happy Blogging!

---
author: vguhesan
categories:
- General
- Linux
comments: true
date: 2016-03-15T14:45:14Z
link: http://mythinkpond.com/2016/03/15/fixing-vim-editor-for-dark-backgrounds-so-comments-are-not-dark-blue/
slug: fixing-vim-editor-for-dark-backgrounds-so-comments-are-not-dark-blue
tags:
- background
- vim
title: Fixing vim editor for dark backgrounds so comments are not dark blue
url: /2016/03/15/fixing-vim-editor-for-dark-backgrounds-so-comments-are-not-dark-blue/
wordpress_id: 984
---

[![vim_logo](/img/2016/03/vim_logo.png)](/img/2016/03/vim_logo.png)Here is a simple command that can fix your vim editor for dark backgrounds so that your comments are not showing up in dark blue (unreadable).

Example screenshot:

[![vim-example](/img/2016/03/vim-example.png)](/img/2016/03/vim-example.png)

The **temporary** fix is to run the following command in the vim editor:

<pre><code>
:set background=dark
</code></pre>

instead of

<pre><code>
:set background=light
</code></pre>

The permanent fix for this is to add the command inside $HOME/.vimrc file

<pre><code> set background=dark </code></pre>

Please note that when you're adding the property into the .vimrc file, you do not need to prefix it with ":"

Cheers

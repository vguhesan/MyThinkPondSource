---
author: vguhesan
categories:
- Hugo
- Wiki
comments: true
date: 2016-06-05T20:58:17Z
link: http://mythinkpond.com/2016/06/05/two-static-website-generators-explored-hugo-jekyll/
slug: two-static-website-generators-explored-hugo-jekyll
tags:
- bootstrap
- bootswatch
- disqus
- generate static blig
- generate static wiki
- hugo-bootswatch
- markdown
- Static blog
title: Two static website generators explored - Hugo & Jekyll
url: /2016/06/05/two-static-website-generators-explored-hugo-jekyll/
wordpress_id: 1043
---

Today I had to quickly assemble a wiki/blog website for our family temple back in India. At first, I considered doing my traditional option to leverage Wordpress (this blog MyThinkPond.com uses Wordpress). Then I thought of all the complexities of setting up a MySQL database, creating and registering the site with WP Jetpack, etc. I wanted something quick, easy to maintain and something that I can hand over to someone else for maintaining. Most software developers are used to GIT for source-control and if there was a way to keep the source files in a GIT then this opens up the possibility of merely giving thee end-user the access to the GIT repo and they can then either maintain it in the long run or branch it into their own copy. Spending a bit of time researching my options, I came across a suit of tools that allows you to generate [static-blogs and wiki](http://www.staticgen.com/). Out of the dozen or so options, I decided to explore the one with the most traffic (namely [Jekyll](https://jekyllrb.com/)) and one that is ranking fourth but built on GoLang (namely [Hugo](https://gohugo.io/)).

Both Jekyll and Hugo had similar features when it came to Content, Front-Matter, Templates, Taxonomies, Themes, Categories, Sections, support for static content besides blogs, ability to support Markdown syntax for editing. So I would highly recommend both Jekyll and Hugo. What made me opt for Hugo is the simplicity of setup/installation. With Hugo, I had to download one executable [since it was developed in GoLang (one of my *new* favorite languages), it allows for native compilation for many different architectures and operating systems including Windows, Linux, FreeBSD, NetBSD and OS X (Darwin) for x64, i386 and ARM architectures (essentially wherever the Go compiler tool chain can run). Once I unzipped the executable to a directory, all I had to do is to add it onto my $PATH either in Linux or in Windows. And that is all you need to do to get started. Whereas with Jekyll, I had to first install Ruby, then  Ruby Gems, then (gem install jekyll) then NodeJS and optionally Python 2.7 for Jekyll 2 or earlier. The installation steps for getting Jekyll was way too complex. Granted I had most of those tools already installed but for non-developers, this would be a pain-point.

Once Hugo was available on my $path, then to create a blank site all I had to do is as follows:

<pre><code>
mkdir myproject
cd myproject
hugo new site sivavishnu .
# Creates a blank starter site with default theme
</code></pre>

Now in my case, I am a big fan of [Bootstrap](http://getbootstrap.com/). So I googled for a themes built on Bootstrap for Hugo. I came across a few options, which led me to [BootsWatch](https://bootswatch.com/). I found that Nicholas Whittier had created a Hugo-Bootswatch (Thank you Nicholas) theme built on top of Bootswatch&gt;Bootstrap. So to integrate Hugo-Bootswatch to my site, I followed directions on Hugo as follows:

<pre><code>
cd myproject
mkdir themes
git clone https://github.com/nilproductions/hugo-bootswatch.git
# This clones a copy of the "hugo-bootswatch" project under my "themes" folder
</code></pre>

Now to create some sample blog articles using Hugo:

<pre><code>
cd myproject
hugo new post/first.md
# This creates a markdown file under myproject/sivavishnu/content/post/first.md
# You can now edit this file and using Markdown syntax for the headers and HTML for the body
</code></pre>

Here is a link to [learning Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Now here are two options in Hugo to preview and to generate the site:

<pre><code>
# To run a webserver with latest blog (including drafts):
hugo --theme=hugo-bootswatch server --buildDrafts
# To generate the latest blog (under public folder)
hugo --theme=hugo-bootswatch
</code></pre>

If you want to then go crazy and create static pages, exclusions from list, customize the CSS by adding some colors, etc you can do
all of this! :-)

But here are two options that you will need to consider:



	
  1. Since this is a static site (with no back-end server engine like PHP, NodeJS, Tomcat, etc), you will need a way to allow users to search your site. I chose to add [Google Site Search](https://cse.google.com/cse/all) as an option. It's free but the catch is that until Google indexes your site the search option is not functional.

	
  2. Analytics for your site to trach your hits. See the [link in Hugo document](https://gohugo.io/extras/analytics/) for steps.

	
  3. Adding the ability under blog pages for external users to comment. Again Hugo gives you the option to integrate with [Disqus](https://disqus.com/). See link on Hugo document [how-to integrate Hugo with Disqus](https://gohugo.io/extras/comments/).


This way, all your site is doing is serve a static site. Did I mention that Hugo also generates your static site wicked fast?

So as a last step, I generated the static website and uploaded it to my [BlueHost hosting](https://www.bluehost) provider.

And don't forget to check in your code into a GIT repo of your choice. In my case, I've checked in my code at BitBucket.org.

Here are the links:



	
  * [SivaVishnu.org Site](http://sivavishnu.org/)

	
  * [Source code on BitBucket](https://bitbucket.org/vguhesan/sivavishnu.org)


Hope you enjoyed reading this article. Consider subscribing and sharing!

-- update

Few folks emailed me asking what those fonts were on the site. It's one of the oldest spoken languages that exists in Southern India called [Tamil](https://en.wikipedia.org/wiki/Tamil_language).

And now for today's inspirational quote:


<blockquote>When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.
- Erma Bombeck</blockquote>


.AUM.

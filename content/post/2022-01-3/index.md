+++
title = "Remove .DS_Store and ._.DS_Store under Windows"
description = "Article shows you how to remove all occurrences of files .DS_Store and ._.DS_Store in the current directory and all sub-directories under Windows."
date = "2022-01-16"
draft = "false"
categories = ["Windows"]
tags = ["Windows","cygwin"]
thumbnail = "/img/logo/script1.png"
lead = "Article shows you how to remove all occurrences of files .DS_Store and ._.DS_Store in the current directory and all sub-directories under Windows."
+++

{{<figure src="img/unsplash.jpg" width="100%" class="aligncenter round-img-border imgframe-left-pad" >}}

### What is this article about?

When you move from a Mac OSX onto Windows, the file system will contain two files under every directory labeled ".DS_Store" and "._.DS_Store". These files are not useful especially if you're trying to commit code under a Git source control. It can sometime get very annoying and to eliminate this "noise" from your day to day development, you may want to remove these artifacts from your Windows system. This article will walk you through the simple steps of removing those files.

### Performing the steps

Windows "find" utility works differently than Linux "find". I highly recommend you use <a href="" target="_blank">Cygwin</a> (free). Cygwin provides you with Linux utilities under Windows. (Examples includes ls, rm, xargs, etc.) Once you have Cygwin, you can navigate to the base directory of you choice:

Example: To navigate to the c:\projects, you will run: 

<pre><code class="language-shell line-numbers">cd /cygdrive/c/projects
</code></pre>

Once you're in the folder/directory of your choosing, you can then run the following two commands.

<pre><code class="language-shell line-numbers"># First let's find all occurrences of both ".DS_Store" and "._.DS_Store" (recursive)     
find . -type f \( -name ".DS_Store" -o -name "._.DS_Store" \) -print0
    
# After we have ensured that the results are good then let's rerun and pipe it to the rm (remove) command via xargs
find . -type f \( -name ".DS_Store" -o -name "._.DS_Store" \) -print0 | xargs -0 rm 
</code></pre>

This should now remove all occurrences of those two files from a Windows directory (recursive)

Cheers

<hr>

<a href="https://www.buymeacoffee.com/vguhesan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Today's Quote

{{<figure src="/img/logo/thiruvalluvar.png" caption="" width="100" class="alignleft round-img-border imgframe-left-pad" >}}
<br/>
The roof of Peace rests upon the walls of understanding.<br/>
**- <a href="https://en.wikipedia.org/wiki/Thiruvalluvar" target="_blank">Thiru Valluvar</a>** ( <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">His Work</a> )


&nbsp;
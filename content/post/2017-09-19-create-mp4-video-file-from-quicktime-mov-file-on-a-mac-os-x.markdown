---
author: vguhesan
categories:
- Mac OS X
comments: true
date: 2017-09-19T02:06:43Z
link: http://mythinkpond.com/2017/09/18/create-mp4-video-file-from-quicktime-mov-file-on-a-mac-os-x/
slug: create-mp4-video-file-from-quicktime-mov-file-on-a-mac-os-x
tags:
- ffmpeg
- Mac
- OS X
- osx
title: Create MP4 video file from Quicktime Mov file on a Mac OS X
url: /2017/09/19/create-mp4-video-file-from-quicktime-mov-file-on-a-mac-os-x/
wordpress_id: 1559
thumbnail: "/img/logo/macosx_blogarticle_100px.png"
---

![macosx_blogarticle_100px](/img/2016/11/macosx_blogarticle_100px.png)If you do a screen recording on a Mac, you are most likely using the free Quicktime player that comes with Mac OS X. If you are lucky enough to own a Quicktime Pro then you can simply do an Export > Save-As MP4. For those of you that do not have a Quicktime Pro, then you can use this option.

<pre><code class="language-bash line-numbers">brew install ffmpeg

# After installation, you can traverse into the directory where you have the .mov file and run the following

ffmpeg -i input-file-name.mov output-file-name.mp4
</code></pre>

Not sure what Brew is? It's the missing package package manager for Mac OS X.
Use the following link to learn more:

[https://brew.sh/](https://brew.sh/)

Cheers!

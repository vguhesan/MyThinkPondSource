---
author: vguhesan
categories:
- Mac OS X
comments: true
date: 2015-09-24T19:10:17Z
link: http://mythinkpond.com/2015/09/24/solved-git-status-failed-with-code-69-error-when-opening-sourcetree-in-mac-os-x/
slug: solved-git-status-failed-with-code-69-error-when-opening-sourcetree-in-mac-os-x
tags:
- Xcode/iOS license
title: 'Solved: git status failed with code 69 error when opening SourceTree in Mac
  OS X'
url: /2015/09/24/solved-git-status-failed-with-code-69-error-when-opening-sourcetree-in-mac-os-x/
wordpress_id: 777
---

If you receive the following error when opening SourceTree or other applications installed in your Mac OS X, then here is how you can solve it. Sometimes people make things more cryptic than it needs to be.


<blockquote>Error encountered

'git status' failed with code 69:'

Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.</blockquote>


and here is the example of the screenshot:

[![2015-09-24_14-50-56](/img/2015/09/2015-09-24_14-50-56.jpg)](/img/2015/09/2015-09-24_14-50-56.jpg)



**Solution**:


What that message is telling you is that you need to open the application XCode on your Mac OS X and since it hasn't run since the last update, you need to accept the new license EULA agreement that's part of the updated XCode. Once you accept the license and close the XCode application and then go back to your other application that was throwing the error and try opening it. The error no longer happens.

Cheers

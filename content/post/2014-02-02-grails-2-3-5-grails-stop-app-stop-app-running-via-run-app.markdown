---
author: vguhesan
categories:
- Grails
- Groovy
- Java
comments: true
date: 2014-02-02T19:40:57Z
link: http://mythinkpond.com/2014/02/02/grails-2-3-5-grails-stop-app-stop-app-running-via-run-app/
slug: grails-2-3-5-grails-stop-app-stop-app-running-via-run-app
tags:
- run-app
- stop-app
title: Grails 2.3.5 - grails stop-app - does not stop the app running via run-app
url: /2014/02/02/grails-2-3-5-grails-stop-app-stop-app-running-via-run-app/
wordpress_id: 642
---

If you're using Grails 2.3.X and you're developing, most likely you're running your app like this:

[sourcecode language="jscript"]
grails run-app
#in one command-prompt/shell-terminal and
grails stop-app
#in another command-prompt/shell-terminal
[/sourcecode]

With the latest version of Grails (version 2.3.5), the stop-app say:

[sourcecode language="jscript"]
grails stop-app
| Server Stopped
# But nothing happens and the server-process continues to run#
[/sourcecode]

Here's an undocumented fix that can come in handy:

[sourcecode language="jscript"]
# On terminal/command-prompt #1
# Run the way you do today
grails run-app
# On terminal/command-prompt #2, change-directory (cd) to the root folder where you have your Grails project
# Create a file with a file-name ".kill-run-app"
# For Linux (*Nix) environments
touch .kill-run-app
# For Windows where you do not have 'touch' command do the following instead
echo hello > .kill-run-app
# Wait for a few seconds and Grails will kill the app that's running
[/sourcecode]

Now you can resume with starting a new instance of "grails run-app".

Cheers & Happy Coding!

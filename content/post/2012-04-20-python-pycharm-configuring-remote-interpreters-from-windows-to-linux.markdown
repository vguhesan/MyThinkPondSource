---
author: vguhesan
categories:
- Programming
- PyCharm
- Python
- Technology
comments: true
date: 2012-04-20T19:32:53Z
link: http://mythinkpond.com/2012/04/20/python-pycharm-configuring-remote-interpreters-from-windows-to-linux/
slug: python-pycharm-configuring-remote-interpreters-from-windows-to-linux
tags:
- CentOS
- enterprise-it
- IDE
- Linux
- remote interpreter
- remote interpreters
- software
- technology
- Virtual Box
- VirtualBox
- Windows
title: Python pycharm - configuring remote interpreters from Windows to Linux
url: /2012/04/20/python-pycharm-configuring-remote-interpreters-from-windows-to-linux/
wordpress_id: 337
---

If you are an avid Python developer, you may all be excited about the new features available in the Pycharm 2.5 release, especially the remote interpreters, virtualenv and setup.py support. You can read more about the new exciting features [here](http://www.jetbrains.com/pycharm/whatsnew/).

But as I started to tinker with the "remote interpreter" feature - I stumbled upon some challenges and I thought I'd document them for other PyCharm users who might benefit from this blog entry.

Let's get right into the issue:


## My Setup:


I have a Windows 7 host where I do most of my development. I develop software for a Linux based system and most of the Python libraries that I need to work from third-party vendors are only available for Linux. And so my PyCharm IDE runs on Windows and I have a VirtualBox instance of CentOS linux running within my host machine accessible via a Virtual Box - Bridged Adapter. This Linux could also be running in a separate  physical host accessible via TCP-IP. Now that we have a good idea about my development environment, let's go over why I want to use the "remote interpreters" feature.


## Remote Interpreters


This feature allows you to connect with a Python environment and all's of it's SITE_PACKAGES available on the remote machine as if you were running it locally on your native PC. Furthermore, you can perform step-through of your code right from your development platform as if you ran the IDE right within the Linux machine. (Please note that this feature can then lend itself to running the Linux server as a terminal without a GUI/Windows Manager like KDE/Gnome). This will simplify your footprint on the server side.


## Challenges


When you run the interpreter, you will run into issues such as "No such file or directory." That's because when you execute a file natively in Windows under c:\temp\abc.py - the "remote interpreter" is now looking for a file under that same path in the remote server under Linux. To avoid this issue, here's the solution I have engaged.



	
  1. Share my c:\projects\MyProject to myself so that I can map a new drive under Windows such as "K:\MyProjects".

	
  2. Shared a "Machine Folder" to my Virtual machine. If you have a remote host, then either setup a GIT push scheme or a SFTP from your Windows to this remote server. See image below for illustration.
[![Virtual Box - Machine Target](/img/2012/04/ri-screen4.png)](/img/2012/04/ri-screen4.png)

	
  3. At this time, My "c:\projects" folder is shared to the Linux environment as "/media/sf_K_DRIVE/" and "auto-mounted". (I have also added my user-id to the "vboxsf" group because of permissions. But that's another blog...)

	
  4. Now every modification of my Python files in my "K:\MyProject", is exactly the same on the Linux virtual-box.

	
  5. The first setting to change is the "Line Seperator" (unless you want to execute Dos2Unix each time you run the file on Linux). This can be done under "Code Style" in PyCharm Settings. See image below:[![PyCharm Settings Line Seperator](/img/2012/04/ri-screen1.png)](/img/2012/04/ri-screen1.png)

	
  6. Next, configure the "Remote Python Interpreter". See screenshot below:[![PyCharm - Configure Remote Interpreter](/img/2012/04/ri-screen2.png)](/img/2012/04/ri-screen2.png)

	
  7. In the previous step, when you choose a path on the Linux server for the "PyCharm helpers", PyCharm pushes via SSH a set of libraries and software that helps with the remote debugging and scaffolding.

	
  8. The next step is to Run (or Debug) your code. See the screenshot below that shows the details of the "Run/Debug Configuration" screen. The important parts are "Working Directory" and "Path Mappings". This is the trick that allows you to map your Windows Path to an equivalent Linux Path.[![PyCharm - Run/Debug Configuration Screen](/img/2012/04/ri-screen3c.png)](/img/2012/04/ri-screen3c.png)

	
  9. Now run (or debug) away your code as if it was running locally on your native Windows development platform.


That should get the job done.

Update on May 18th, 2012

#This shows you an example of how you would invoke a Python UnitTest via remote-interpreter to another script located in the same folder.

[sourcecode language="jscript"]

#Invoked from sendfoo_test.py
scriptName = "sendfoo.py"
# BASE_PATH is the absolute path of ../.. relative to this script location
BASE_PATH = reduce(lambda l,r: l + os.path.sep + r, os.path.dirname( os.path.realpath( __file__ ) ).split( os.path.sep ) )
#print BASE_PATH
# add ../../scripts (relative to the file (!) and not to the CWD)
NEWSCRIPTPATH = os.path.join( BASE_PATH, scriptName )
#print NEWSCRIPTPATH

#Further down in code…
p1 = os.popen("%s" % self.NEWSCRIPTPATH, "w")
p1.close()

[/sourcecode]

For early Pythons...

[sourcecode language="jscript"]

#If you are using Python 2.6.6 (not Python 2.7+)
scriptLocation = "sendfoo.py"
scriptLocation = os.path.join( os.path.dirname( os.path.realpath( __file__ ) ), scriptLocation )
print scriptLocation

#Further down in code…
p1 = os.popen("%s" % self.NEWSCRIPTPATH, "w")
p1.close()

[/sourcecode]

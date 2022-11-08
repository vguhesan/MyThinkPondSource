---
author: vguhesan
categories:
- mod_python
- Python
comments: true
date: 2011-12-29T03:09:12Z
link: http://mythinkpond.com/2011/12/28/installing-mod_python-compile-error-apxserror-command-failed-with-rc65536/
slug: installing-mod_python-compile-error-apxserror-command-failed-with-rc65536
tags:
- configuration
- mod_python setup
title: 'How-To Install mod_python and the compile error - apxs:Error: Command failed
  with rc=65536'
url: /2011/12/29/installing-mod_python-compile-error-apxserror-command-failed-with-rc65536/
wordpress_id: 312
---

Below are my steps to installing mod_python under Apache HTTPD in CentOS 6.2.

Download mod_python-3.3.1.tgz or a later version of mod_python available here: 
http://archive.apache.org/dist/httpd/modpython/

[sourcecode]
curl -O http://archive.apache.org/dist/httpd/modpython/mod_python-3.3.1.tgz
tar zxvf mod_python-3.3.1.tgz
cd mod_python-3.3.1
./configure
make
[/sourcecode]

You may encounter the following error at this point:
apxs:Error: Command failed with rc=65536

If so... no worries...

This bug has been addressed here:
https://bugzilla.redhat.com/show_bug.cgi?id=465246

Download the patch and (if you can figure out how to patch like I did, I manually opened the file and examined the contents:
`
diff -rNu mod_python-3.3.1/src/connobject.c mod_python-3.3.1-atomix/src/connobject.c
--- mod_python-3.3.1/src/connobject.c	2006-12-03 05:36:37.000000000 +0100
+++ mod_python-3.3.1-atomix/src/connobject.c	2008-10-02 14:10:02.000000000 +0200
@@ -139,7 +139,7 @@
     bytes_read = 0;
 
     while ((bytes_read < len || len == 0) &&
-           !(b == APR_BRIGADE_SENTINEL(b) ||
+           !(b == APR_BRIGADE_SENTINEL(bb) ||
              APR_BUCKET_IS_EOS(b) || APR_BUCKET_IS_FLUSH(b))) {
 
         const char *data;
`

Based on the file contents... Edit the following file below the unzipped folder (/mod_python-3.3.1/src/connobject.c)

Change line 142 from 
`!(b == APR_BRIGADE_SENTINEL(b) ||`
to
`!(b == APR_BRIGADE_SENTINEL(bb) ||` 

Save the file. And then run "make" again.

This time you should see no errors. The last step is to run "make install" and you're all set.



<blockquote>
Now don't forget to edit your main config and add
    LoadModule python_module /usr/lib64/httpd/modules/mod_python.so
and if your configuration uses ClearModuleList, then also
    AddModule mod_python.c
</blockquote>



Next, Configure mod_python to work with Apache

Edit your httpd.conf (/etc/httpd/conf/httpd.conf), add:

[sourcecode]

LoadModule python_module /usr/lib64/httpd/modules/mod_python.so

#Under the AddHandler section

<Directory /var/www/html>
    AddHandler mod_python .py
    PythonHandler myscript
    PythonDebug On
</Directory>

[/sourcecode]

To learn what the "AddHandler" does go here:
http://www.modpython.org/live/mod_python-3.2.8/doc-html/tut-what-it-do.html

Stop and Start Apache HTTPD (/etc/init.d/httpd restart)

You're all set.

To verify, create a file in your DocumentRoot (/var/www/html)

<myscript.py>
[sourcecode]
#!/usr/bin/python
from mod_python import apache

def handler(req):

    req.content_type = "text/plain"
    req.write("Hello World from Apache HTTPD!")

    return apache.OK
[/sourcecode]

As a last step, goto http://<your_ip>:<your_port_80>/abc.py

You should see, "Hello World from Apache HTTPD!". Notice that I didn't goto "myscript.py". And I have pointed to "myscript" in the AddHandler parameter. This "myscript.py" acts like the Controller in a MVC framework. So if you were installing an application like Django... then Django will act as the gatekeeper passing requests back and forth.

To learn more about the handler, go here:
http://www.modpython.org/live/current/doc-html/inst-testing.html

or here's an excerpt from that site:


<blockquote>
Note that according to the configuration written above, you can also point your browser to any URL ending in .py in the test directory. You can for example point your browser to /test/foobar.py and it will be handled by mptest.py. That's because you explicitely set the handler to always be mptest, whatever the requested file was. If you want to have many handler files named handler1.py, handler2.py and so on, and have them accessible on /test/handler1.py, /test/handler2.py, etc., then you have to use a higher level handler system such as the mod_python publisher (see 3.1), mpservlets or Vampire. Those are just special mod_python handler that know how to map requests to a dynamically loaded handler. 
</blockquote>



After writing this blog, I noticed that some users may prefer a PHP like feel. This can be done by adding a "Publisher Handler" (PSP).

Edit your httpd.conf (/etc/httpd/conf/httpd.conf), add:

[sourcecode]

LoadModule python_module /usr/lib64/httpd/modules/mod_python.so

#Change AddHandler to the following

<Directory /var/www/html>
   AddHandler mod_python .psp .psp_
   PythonHandler mod_python.psp
   PythonDebug On
</Directory>

[/sourcecode]

Stop and start httpd (/etc/init.d/httpd restart).

Now create a file "test.psp" under DocumentRoot (/var/www/html)

[sourcecode]

<%
import time
weekday = time.strftime('%A', time.localtime(time.time()))
message = 'Today is %s.' % weekday
%>
<html><body>
<h2><%= message %></h2>
</html></body>

[/sourcecode]

When you visit http://<your_ip>:<your_port_80>/test.psp

You should see "Today is ---" message.

You can learn more about the PSP handler here:
http://webpython.codepoint.net/mod_python_tutorial


Cheers!


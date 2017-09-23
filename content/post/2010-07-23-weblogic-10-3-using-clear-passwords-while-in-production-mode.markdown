---
author: vguhesan
categories:
- Java
- Weblogic
comments: true
date: 2010-07-23T20:39:34Z
excerpt: Weblogic 10.3 - Using clear passwords while in production mode
link: http://mythinkpond.com/2010/07/23/weblogic-10-3-using-clear-passwords-while-in-production-mode/
slug: weblogic-10-3-using-clear-passwords-while-in-production-mode
title: Weblogic 10.3 - Using clear passwords while in production mode
url: /2010/07/23/weblogic-10-3-using-clear-passwords-while-in-production-mode/
wordpress_id: 152
---

In Weblogic, (on your development server or workstation), you might want to run it in "production mode" but you don't want to go through and encrypt all the database passwords in the JDBC files for your development database servers.

Well, this article shows you how. Before you do this, make sure you are NOT doing this in a production environment. By doing this in a real-production environment, you may be compromising the security of  your production infrastructure. Also backup all files before modifying them so that if you run into any errors, you can revert back.

1. In startWeblogic.cmd file (located here: <BEA_HOME>\user_projects\domains\<YourDomain>\bin\) there will a line that says the following:

[sourcecode language="jscript"]
set SAVE_JAVA_OPTIONS=%JAVA_OPTIONS%
[/sourcecode]

edit that line and add the following "-Dweblogic.management.allowClearTextPasswords=true". Please note that in your case you may have additional java options pre-defined for your environment. Here's the end result:

[sourcecode language="jscript"]
set SAVE_JAVA_OPTIONS=%JAVA_OPTIONS% -Dweblogic.management.allowClearTextPasswords=true
 [/sourcecode]

2. Next in each of your jdbc files (located here: <BEA_HOME>\user_projects\domains\<YourDomain>\config\jdbc), remove the following tag:

[sourcecode language="jscript"]
<password-encrypted>...</password-encrypted>
[/sourcecode]

and replace the password with a JDBC property called "password" with the clear-text password like this:

[sourcecode language="jscript"]
<properties>
 <property>
 <name>user</name>
 <value>testuser</value>
 </property>
 <property>
 <name>password</name>
 <value>mypasswordfortest</value>
 </property>
 </properties>
[/sourcecode]

3. Start up your server and you should be good to go.

Also as an added bonus, you can also bypass Weblogic from asking for your weblogic userid and password by adding the below two lines to your startWeblogic.cmd file (right after the line in step #1 above).

[sourcecode language="jscript"]
set WLS_USER=your_weblogic_id
set WLS_PW=your_weblogic_password
[/sourcecode]

Cheers

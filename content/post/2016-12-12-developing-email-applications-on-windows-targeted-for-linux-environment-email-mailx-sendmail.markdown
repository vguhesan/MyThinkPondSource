---
author: vguhesan
categories:
- Bash
- CentOS 6.X
- CentOS7
- Grails
- Groovy
- Java
- Linux
- Spring
- Windows
comments: true
date: 2016-12-12T01:53:04Z
link: http://mythinkpond.com/2016/12/11/developing-email-applications-on-windows-targeted-for-linux-environment-email-mailx-sendmail/
slug: developing-email-applications-on-windows-targeted-for-linux-environment-email-mailx-sendmail
tags:
- development on windows
- email
- Java mail
- mailx
- sendmail
- SMTP
title: Developing email applications on Windows, targeted for Linux environment -
  email, mailx, sendmail
url: /2016/12/12/developing-email-applications-on-windows-targeted-for-linux-environment-email-mailx-sendmail/
wordpress_id: 1264
---

[![linux_centos_logo](/img/2016/12/linux_centos_logo.png)](/img/2016/12/linux_centos_logo.png)If you're developing on a Windows platform for an application targeted for Linux or Unix that deals with email, then this article will be useful.

Let us begin by  understand the problem.


## Problem


If you are a **Java/Spring developer**, (developing in Java is platform independent - runs on any platform where a JVM is available) then you have two options in front of you for sending emails from a Java application:

Option #1: **JavaMail API**

Option #2: Linux **[sendmail ](https://linux.die.net/man/8/sendmail.sendmail)**or **[mailx ](https://linux.die.net/man/1/mailx)**invoked via **Runtime.getRuntime().exec**(invoke - linux - mail - command) [[example here](https://www.tutorialspoint.com/java/lang/runtime_exec_envp.htm)]

If you are a PHP or Ruby or Bash or Python developer, you can do the same using a native library available within the language or invoke a native Linux execute-command to invoke either sendmail or mailx.

What happens if you are developing a hybrid library that needs to send email both from Java and Python. Then most likely you want to leverage a common library accessible to all the various libraries. In this case, you're going to depend on either sendmail or mailx.   Now let us throw in a additional problem into this mix. Suppose you are developing on a Windows platform but the end application is targeted to run on Linux. This now creates a new additional problem. Sendmail or Mailx do not exist for Windows. Well, this article provides a way to develop on Windows by invoking execute mailx calls from your native code to the underlying emulation of Linux on Windows.

Now that we have established the problem, let us walk through a solution.

Please note that this is not the only solution but a potential solution. If you know of other mechanisms, feel free to send me a link and I'll add them in.


## Solution


**Step-1**: Make sure that you have Cygwin installed (with email tool selected additionally) on your Windows computer.

<pre><code language="bash">
# Download  setup-x86_64.exe from https://cygwin.com/setup-x86_64.exe
# and run it.

# When you run the setup, please additionally select "email" tool additionally. It is not added by default.
</code></pre>

Once Cygwin is installed, most people traditionally use all the Cygwin tools from within a Cygwin Command-Prompt. The executables are located under "\bin\**" directory. Which means that if you run a "ls" in a DOS command-prompt, it will error saying "command not found". There is a undocumented\not so known secret to emulating Linux commands natively in Windows. This is where your true Linux power comes in under native Windows.

**Step-2**: Add Cygwin\bin path natively to Windows PATH.

<pre><code language="bash">
# In my computer, I have Cygwin installed at the following path: c:\cygwin64\

To add "c:\cygwin64\bin" the system path, perform these steps:

1. Start the System Control Panel applet (Start - Settings - Control Panel - System).
2. Select the Advanced tab.
3. Click the Environment Variables button.
4. Under System Variables, select Path, then click Edit.
5. Add c:\cygwin64\bin to the path.

</code></pre>

Once Step-2 is completed. If you start a new DOS command-prompt and run a "ls" command, you should see the directory listing (same as a 'dir' command under Windows).

**Step-3**: The send email application uses "c:\cygwin64\etc\email\email.conf" for SMTP and other email properties.

<pre><code language="bash">
# Edit c:\cygwin64\etc\email\email.conf and add your SMTP details (domain/server name, user-id, password)
# For this example, I have setup a *special* GMail Email account specially to test [Don't use your private GMail] so I will use the user-id and password for that Gmail account.

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = '587'
USE_TLS = 'true'
SMTP_AUTH = 'LOGIN'
SMTP_AUTH_USER = 'YOUR_TEST_GMAIL_ADDRESS@gmail.com'
SMTP_AUTH_PASS = 'YOUR_GMAIL_PASSWORD_GOES_HERE'
MY_NAME  = 'Venkatt Guhesan'
MY_EMAIL = 'foobar7634@gmail.com'

</code></pre>

**Step-4**: Let's test this under a DOS command-prompt.

<pre><code language="bash">
# Open a DOS Command-Prompt and run the following:

echo "Test from Cygwin in Windows under DOS command-prompt" | email -s "Testing Email from Windows DOS" recipient_email_address@gmail.com 

# Within minutes, you should see an email in the Gmail inbox as expected.

# If you are not seeing it, then you can use the example below where you can pass in the SMTP arguments for validation. Maybe you typed in the password for the Gmail account incorrectly or you entered one of the parameters incorrectly in the c:\cygwin64\etc\email\email.conf file.

############### HERE IS AN EXAMPLE WITH SMTP PARAMETERS PASSED IN AS ARGUMENTS #######################
echo "Test from Cygwin in Windows under DOS command-prompt" | email -s "Tetsing Email" recipient_email_address@gmail.com -r smtp.gmail.com -p 587 -m login -u YOUR_TEST_GMAIL_ADDRESS@gmail.com -i YOUR_GMAIL_PASSWORD_GOES_HERE -tls
######################################################################################################
</code></pre>

[![ss1](/img/2016/12/ss1.jpg?w=1024)](/img/2016/12/ss1.jpg)

Once you have confirmed a successful email then the next step is to create a mailx application.

**Step-5**: Create a mailx.exe (mailx) within Cygwin's bin directory.

For emulating mailx from Cygwin's email.exe, you're in luck. The format for mailx is identical to the email.exe's arguments. All you are missing is mailx.exe. So simply copy email.exe under Cygwin's bin directory to mailx.exe under the same Cygwin's bin directory. And you're all set!

<pre><code language="bash">
# simply copy email.exe under Cygwin's bin directory to mailx.exe under the same Cygwin's bin directory

cd c:\cygwin64\bin
cp email.exe mailx.exe

# Now just like you running email (without the .exe suffix) you can run mailx (without the .exe suffix)

</code></pre>

**Step-6**: Test sending an email using mailx

<pre><code language="bash">

echo "Test from Cygwin-mailx in Windows under DOS command-prompt" | mailx -s "Testing Email from Windows DOS" recipient_email_address@gmail.com 

</code></pre>

[![ss2](/img/2016/12/ss2.jpg?w=1024)](/img/2016/12/ss2.jpg)

As a last step, now within your Java application, test Runtime.getRuntime().exec("mailx command");

<pre><code language="bash">
Runtime.getRuntime().exec("echo 'Test from Cygwin-mailx in Windows under DOS command-prompt' | mailx -s 'Testing Email from Windows DOS' recipient_email_address@gmail.com");
</code></pre>

Now your Java application as well as any Python, Bash, Linux shell applications and/or scripts are now leveraging the common "mailx" and your development is now consistently the same using one common mailx library.

Cheers!
<table >
<tbody >
<tr >

<td colspan="2" bgcolor="#C2C9CC" >_Today's inspirational quote:_
</td>
</tr>
<tr >

<td valign="middle" >![theodore-roosevelt](/img/2016/12/theodore-roosevelt.jpg)
</td>

<td valign="middle" >



 	
  * We must all either wear out or rust out, every one of us. My choice is to wear out.




- Theodore Roosevelt, an American statesman, author, explorer, soldier, naturalist, and reformer who served as the 26th President of the United States from 1901 to 1909.

</td>
</tr>
</tbody>
</table>

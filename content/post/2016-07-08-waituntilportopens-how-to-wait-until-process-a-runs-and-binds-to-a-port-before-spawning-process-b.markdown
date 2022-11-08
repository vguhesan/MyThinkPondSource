---
author: vguhesan
categories:
- Bash
- CentOS7
- Linux
comments: true
date: 2016-07-08T16:03:02Z
link: http://mythinkpond.com/2016/07/08/waituntilportopens-how-to-wait-until-process-a-runs-and-binds-to-a-port-before-spawning-process-b/
slug: waituntilportopens-how-to-wait-until-process-a-runs-and-binds-to-a-port-before-spawning-process-b
tags:
- Port Bind
- Wait Until Port
- WaitUntilPort
title: WaitUntilPortOpens() - How to wait until process A runs and binds to a port
  before spawning process B?
url: /2016/07/08/waituntilportopens-how-to-wait-until-process-a-runs-and-binds-to-a-port-before-spawning-process-b/
wordpress_id: 1081
---

Sometimes we have situations where you need to wait until one application is loaded that may bind to a certain port before kicking off a second application that may depend on that port. This process is typically described as "Wait-Until-Port-Opens" (or it could be the reverse - where you want to wait until a port closes).

Here are some use-cases for this method or script:



 	
  * You have a Java web application (Jetty, Tomcat, WildFly, etc) that listens on port 8080 and you want your Nginx or Apache HTTPd server to start as a proxy-server once that back-end web server is bound to port 8080.

 	
  * You want to spin off your Kong (microserver management) after, your back-end REST server is up and listening on port 123.

 	
  * Or the reverse, where you want to kick off an email alert-notification, if you are unable to bind to a certain port where your web server runs and it has now crashed.


On a Linux system, this can be accomplished in many ways. Tools like netcat (nc), netstat, telnet makes this very simple. You can write a bash script that accomplishes this easy. But not all footprints may have those libraries installed. For example, if you're switching from CentOS 6.8 to CentOS 7. A lot of the network tools are no longer available or their binaries are not yet ready for prime-time on the new SystemD footprint in CentOS 7. Netcat is one of those tools not yet ready in the CentOS 7. So you will need a common independent way to scan for the port.

First, let's look at how this can be done using the above tools:

<pre><code language="bash">
# Depends on netcat (nc)
# Run netcat and try binding to port 8080 on localhost. 
# If not sleep for five-seconds and repeat until it's available
while ! echo exit | nc localhost 8080; do sleep 5; done

# Variation of the above that depends on netstat utility
while netstat -lnt | awk '$4 ~ /:8080$/ {exit 1}'; do sleep 5; done

# If you know the process-id of your service, then you
PID=1234
while ! lsof -n -Fn -p $PID | grep -q '^n.*:8080$'; do sleep 5; done

# Variation that depends on netchat (nc)
# If the port is open, then do nothing but if the port goes down then react
while ! nc -q 1 localhost 8080 </dev/null; do sleep 5; done
</code></pre>

As you can see all the above examples depend on other network tools to be installed on the Linux footprint. This design is good, if you have complete control of the OS and dependent RPMs and libraries that are installed.

If on the other case, if you do not have any of the above libraries such as netcat (nc), netstat, lsof then here is a Linux method to doing the same:

<pre><code language="bash">
# Most (99.999%) Linux systems have "timeout" and "sleep" commands available so the below 
while ! timeout 1 bash -c "echo > /dev/tcp/localhost/8080"; do sleep 5; done;
# Do something here such as spawning a new service
</code></pre>

So how does the above code work? Through the use of "Bash TCP Sockets". You can learn more about then in the references below:

[Tech Tip: TCP/IP Access Using bash](http://www.linuxjournal.com/node/1008804)

[More on Using Bash's Built-in /dev/tcp File (TCP/IP)](http://www.linuxjournal.com/content/more-using-bashs-built-devtcp-file-tcpip)

Cheers!

_Today's Inspirational Quote:_


<blockquote>Doing what you love is the cornerstone of having abundance in your life.
- [Wayne Dyer](https://en.wikipedia.org/wiki/Wayne_Dyer) (American philosopher, self-help author, and a motivational speaker)</blockquote>



-AUM

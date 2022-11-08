---
author: vguhesan
categories:
- Java
- ZeroMQ
comments: true
date: 2013-06-25T03:36:43Z
link: http://mythinkpond.com/2013/06/24/working-with-zeromq-0mq-java-jzmq-on-a-centos-platform/
slug: working-with-zeromq-0mq-java-jzmq-on-a-centos-platform
tags:
- CentOS
- client-server
- example
- jzmq
- Linux
- zeromq
title: Working with zeromq (0mq), Java, JZMQ on a CentOS platform
url: /2013/06/25/working-with-zeromq-0mq-java-jzmq-on-a-centos-platform/
wordpress_id: 495
---

Recently I decided to port some of my development using ZeroMQ onto my CentOS development machine and I ran into some challenges. I'm documenting those challenges so that if someone else runs into the same pitfalls I did, they can avoid it.

In this example today, we will work with the first "HelloWorld" examples in the ZeroMQ guide found [here](http://zguide.zeromq.org/page:all#Ask-and-Ye-Shall-Receive). I added a few modifications to the sample such as a package name and a try-catch around the Thread and an exception.tostring() to display any stack-trace.

Source code for src/zmq/hwserver.java

[sourcecode language="java"]

package zmq;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.zeromq.ZMQ;

//
// Hello World server in Java
// Binds REP socket to tcp://*:5555
// Expects "Hello" from client, replies with "World"
//

public class hwserver {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		ZMQ.Context context = ZMQ.context(1);
		// Socket to talk to clients
		ZMQ.Socket socket = context.socket(ZMQ.REP);
		socket.bind ("tcp://*:5555");
		try {
			while (!Thread.currentThread ().isInterrupted ()) {
				byte[] reply = socket.recv(0);
				System.out.println("Received Hello");
				String request = "World" ;
				socket.send(request.getBytes (), 0);
				Thread.sleep(1000); // Do some 'work'
			}
		} catch(Exception e) {
			StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			System.out.println(sw.toString());
		}
		socket.close();
		context.term();

	}

}
[/sourcecode]

Similarly, source code for the client, src/zmq/hwclient.java

[sourcecode language="java"]
package zmq;

import org.zeromq.ZMQ;

public class hwclient {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		ZMQ.Context context = ZMQ.context(1);

		// Socket to talk to server
		System.out.println("Connecting to hello world server");

		ZMQ.Socket socket = context.socket(ZMQ.REQ);
		socket.connect ("tcp://localhost:5555");

		for(int requestNbr = 0; requestNbr != 10; requestNbr++) {
			String request = "Hello" ;
			System.out.println("Sending Hello " + requestNbr );
			socket.send(request.getBytes (), 0);

			byte[] reply = socket.recv(0);
			System.out.println("Received " + new String (reply) + " " + requestNbr);
		}

		socket.close();
		context.term();

	}

}
[/sourcecode]

Now that you have the sample code, how do you compile using the ZeroMQ?

**Assumption:** You have installed Java (1.7 or above)

**Step-1: Installing ZeroMQ onto CentOS [Following steps are performed under root account]
**



	
  1. Install "Development Tools" if it's not already installed on your CentOS as root:       _ yum groupinstall "Development Tools"_

	
  2. Download the "[POSIX tarball](http://download.zeromq.org/zeromq-3.2.3.tar.gz)"  ZeroMQ source code onto your CentOS development machine from [here](http://www.zeromq.org/intro:get-the-software). At the time of writing this article, ZeroMQ version 3.2.3 was the stable release. You might want to download the latest stable release.

	
  3. Unpack the .tar.gz source archive.

	
  4. Run ./configure, followed by "make" then "make install".

	
  5. Run ldconfig after installation.


**Step-2: Installing a Language Binding for Java. In this case, we will use JZMQ from**[ **https://github.com/zeromq/jzmq**](https://github.com/zeromq/jzmq)



	
  1. Download the latest stable release from GITHub link above. (git clone git://github.com/zeromq/jzmq.git)

	
  2. Change directory, cd jzmq

	
  3. Compile and Install:[sourcecode language="java"]
./autogen.sh
./configure
make
make install
[/sourcecode]

	
  4. Where did it install?
[sourcecode language="java"]
# JAR is located here: /usr/local/share/java/zmq.jar
# .so link files are located here: /usr/local/lib
[/sourcecode]

	
  5. Important Step: Add /usr/local/lib to a line in /etc/ld.so.conf (here is my copy after editing)
[sourcecode language="java"]
include ld.so.conf.d/*.conf
/usr/local/lib
[/sourcecode]

	
  6. Reload "ldconfig". This clears the cache.




**Step-3: Compile and run the Java examples above.**

[sourcecode language="java"]
cd ~/dev/zeromq/example/
# Compile hwserver.java
javac -classpath  /usr/local/share/java/zmq.jar ./zmq/hwserver.java
# Compile hwclient.java
javac -classpath  /usr/local/share/java/zmq.jar ./zmq/hwclient.java
# Run hwserver in a separate prompt
java -classpath .: /usr/local/share/java/zmq.jar -Djava.library.path=/usr/local/lib zmq.hwserver
# Run hwclient in a seperate prompt
java -classpath .:/usr/local/share/java/zmq.jar -Djava.library.path=/usr/local/lib zmq.hwclient
[/sourcecode]

**Output on the hwserver console:**

[sourcecode language="java"]
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
Received Hello
[/sourcecode]

**output on the hwclient console:**

[sourcecode language="java"]
Connecting to hello world server
Sending Hello 0
Received World 0
Sending Hello 1
Received World 1
Sending Hello 2
Received World 2
Sending Hello 3
Received World 3
Sending Hello 4
Received World 4
Sending Hello 5
Received World 5
Sending Hello 6
Received World 6
Sending Hello 7
Received World 7
Sending Hello 8
Received World 8
Sending Hello 9
Received World 9
[/sourcecode]

Few interesting points to note are as follows:



	
  * What happens if you started the client first and then the server? Well, the client waits until the server becomes available (or in other words, until some process connects to socket port 5555) and then sends the message. When you say socket.send(...), ZeroMQ actually _enqueues_ a message to be sent later by a dedicated communication thread and this thread waits until a bind on port 5555 happens by "server".

	
  * Also observe that the "server" is doing the connecting, and the "client" is doing the binding.




### 




### What is ZeroMQ (ØMQ)?


(Excerpt from the[ ZeroMQ website](http://zguide.zeromq.org/page:all#-MQ-in-a-Hundred-Words)!)

ØMQ (also seen as ZeroMQ, 0MQ, zmq) looks like an embeddable networking library but acts like a concurrency framework. It gives you sockets that carry atomic messages across various transports like in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fanout, pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a score of language APIs and runs on most operating systems. ØMQ is from [iMatix](http://www.imatix.com) and is LGPLv3 open source.

_If you find this article useful, please subscribe to my blog and/or share my link with others._

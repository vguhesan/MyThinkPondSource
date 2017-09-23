---
author: vguhesan
categories:
- C - C++ - gcc - cpp
- Kernel
- Linux
- ZeroMQ
comments: true
date: 2015-09-07T02:02:54Z
link: http://mythinkpond.com/2015/09/06/how-to-install-and-configure-zeromq-libsodium-on-centos-6-7/
slug: how-to-install-and-configure-zeromq-libsodium-on-centos-6-7
tags:
- CentOS
- libsodium
- undefined reference
- zeromq
title: How to configure and install ZeroMQ (libsodium) on CentOS 6.7?
url: /2015/09/07/how-to-install-and-configure-zeromq-libsodium-on-centos-6-7/
wordpress_id: 753
---

[![zeromq_logo](/img/2015/09/zeromq_logo.png)](/img/2015/09/zeromq_logo.png)When getting started on ZeroMQ (version 4.2.0 or above) can be quite challenging especially with all the prerequisites. I've spent a good two days to get the process ironed out. So I'm sharing this so that others can avoid the same pitfalls and can have a good head-start with setting up their environment.

**Pitfall #1**: Develop for your platform. I'm accustomed to developing in Ubuntu 14.04.3 LTE but in this case my deployment environment happens to be CentOS 6.7 (minimal server). Because the dependencies such as GLIBC versions are different, it's best to stick to a setup with the target platform in mind.

This exercise assumes that you've installed CentOS 6.7 (minimal server option).

**Pitfall #2**:

In your research you may have come across the following errors below. I'm including them in hopes that the search engine bots will bring you to this blog so that you can save some headaches.

[sourcecode language="jscript"]
checking whether the C compiler works… configure: error: in `/root/downloads/libzmq-master’:
configure: error: cannot run C compiled programs.
If you meant to cross compile, use `–host’.
[/sourcecode]


[sourcecode language="jscript"]
libsodium is not installed
[/sourcecode]


[sourcecode language="jscript"]
src/.libs/libzmq.so: undefined reference to `crypto_secretbox_open'
src/.libs/libzmq.so: undefined reference to `crypto_box_beforenm'
src/.libs/libzmq.so: undefined reference to `crypto_secretbox'
src/.libs/libzmq.so: undefined reference to `crypto_box'
src/.libs/libzmq.so: undefined reference to `crypto_box_keypair'
src/.libs/libzmq.so: undefined reference to `sodium_init'
src/.libs/libzmq.so: undefined reference to `crypto_box_open'
src/.libs/libzmq.so: undefined reference to `randombytes_close'
src/.libs/libzmq.so: undefined reference to `crypto_box_open_afternm'
src/.libs/libzmq.so: undefined reference to `randombytes'
src/.libs/libzmq.so: undefined reference to `crypto_box_afternm'
collect2: ld returned 1 exit status
make[1]: *** [tools/curve_keygen] Error 1
make[1]: Leaving directory `/root/downloads/libzmq-<wbr />master'
make: *** [all-recursive] Error 1
[/sourcecode]


[sourcecode language="jscript"]
GLIB 2.14 not found
[/sourcecode]



## Solution:


The following steps provides you a step-by-step instruction to get you to a point where you can compile the standard ZeroMQ HelloWorld Server and HelloWorld Client.

[sourcecode language="jscript"]
# Steps to a working ZeroMQ 4+ code on CentOS67

# Login as root or make sure you have sudo access
# The following instructions assume you are logged in as "root"
# Assumes the following path /root/downloads
mkdir download
cd download

# ZeroMQ 4+ requires libsodium 
# You also need a C compiler

# Pre-requisites
yum update
# Gets your system upto date with the latest updates

yum install libtool gcc-c++ glib*
# This installs autoconf, automake, cloog-ppl, cpp, gcc, mpfr, ppl
yum groupinstall "development tools"



# Let us install and build libsodium
wget https://download.libsodium.org/libsodium/releases/libsodium-1.0.3.tar.gz
tar -xvf libsodium-1.0.3.tar.gz
cd libsodium-1.0.3
./configure
make clean
make
make install
# libsodium libraries are now installed under /usr/local/lib directory
# Next we need to tell libzmq and other development code where to find these libraries

# Add the following exports defining the following environmental libraries
# Edit the root users .bashrc file
vim /root/.bashrc
# Add the following
#-----
export sodium_CFLAGS="-I/usr/local/include"
export sodium_LIBS="-L/usr/local/lib"
export CPATH=/usr/local/include
export LIBRARY_PATH=/usr/local/lib
export LD_LIBRARY_PATH=/usr/local/lib
export LD_RUN_PATH=/usr/local/lib
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
export CFLAGS=$(pkg-config --cflags libsodium)
export LDFLAGS=$(pkg-config --libs libsodium)
#-----

# Reinitialize settings under .bashrc
source ~/.bashrc

# Add libsodium to ldconfig 
echo '/usr/local/lib' > tee -a /etc/ld.so.conf.d/libsodium.conf

# Download the latest lizmq from the GIT repository
cd /root/downloads
wget https://github.com/zeromq/libzmq/archive/master.zip
unzip master.zip
cd libzmq-master

# Lets begin building it
# Generate the configure script from template
./autogen.sh
./configure
make clean
make
make install

# ZeroMQ libraries are installed in /usr/local/lib path
# Need to add the libraries to ldconfig so that they can be
# statically linked in C code
# Since ZMQ is installed in the same path as libsodium,
# we do not need to add another path into /etc/ld.so.conf.d/*.conf
# we just need to reload the "ldconfig"
ldconfig

# Let try compiling and testing a sample code
mkdir /root/downloads/zmqtest
cd /root/downloads/zmqtest

# vim helloserver.c
# Copy hwserver code from the following url:
wget https://github.com/imatix/zguide/raw/master/examples/C/hwserver.c

# Copy hwclient code from the following url:
wget https://github.com/imatix/zguide/raw/master/examples/C/hwclient.c

# Compile hwserver 
gcc hwserver.c -o hwserver -lzmq
gcc hwclient.c -o hwclient -lzmq

# Open two SSH terminals to /root/downloads/zmqtest
# Run hello-world server in terminal #1
# Run hello-world client in terminal #2

# If it runs, you're all set to go
# Please link me from your blog/social places so that others can easily find this article
# Also provide me with feedback so that I can ammend this guide for others

[/sourcecode]

# Thank you & cheers!





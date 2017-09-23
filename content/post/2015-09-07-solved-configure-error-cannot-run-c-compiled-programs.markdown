---
author: vguhesan
categories:
- C - C++ - gcc - cpp
- Kernel
comments: true
date: 2015-09-07T01:11:46Z
link: http://mythinkpond.com/2015/09/06/solved-configure-error-cannot-run-c-compiled-programs/
slug: solved-configure-error-cannot-run-c-compiled-programs
tags:
- cannot run C compiled programs
title: '[Solved] configure: error: cannot run C compiled programs.'
url: /2015/09/07/solved-configure-error-cannot-run-c-compiled-programs/
wordpress_id: 750
---

Common error when you run configure before make && make install:

checking whether the C compiler works... configure: error: in `/root/downloads/libzmq-master':
configure: error: cannot run C compiled programs.
If you meant to cross compile, use `--host'.

Add the following into your /root/.bashrc or /home/{username}/.bashrc

[sourcecode language="jscript"]

export CPATH=/usr/local/include
export LIBRARY_PATH=/usr/local/lib
export LD_LIBRARY_PATH=/usr/local/lib
export LD_RUN_PATH=/usr/local/lib

[/sourcecode]

Logout and login to reinitialize .bashrc or do the following:

[sourcecode language="jscript"]

source /root/.bashrc

# or

source /home/{username}/.bashrc

[/sourcecode]

Return back to running "configure" and that should get you past the error.

Cheers

+++
title = "uvloop - Python replacement for asyncio event loop"
description = "uvloop - Python replacement for asyncio event loop"
date = "2017-04-01T16:26:27Z"
categories = [
	"Python",
	"Programming",
	"Software Development"
]
tags = [
	"uvloop",
	"Python",
	"Programming",
	"Software Development"
]
thumbnail = "/img/logo/python_logo.png"
+++

[![](/img/2016/09/python_logo.png)](/img/2016/09/python_logo.png)

uvloop is a fast, drop-in replacement of the built-in asyncio event loop. uvloop is implemented in Cython and uses libuv under the hood.

**Benefits**: uvloop makes asyncio 2-4x faster.

**Cons**: uvloop is available from PyPI but it requires Python 3.5. (The reason for this is asyncio was introduced in Python 3.4 and above.) Unless your project is based on Python 3.4+ - you may not be able to leverage this library.

**Alternatives**: For the folks that are using Python 2.7 (including me), if you search for "asyncio alternatives" you will quickly come across the Trollius project. But unfortunately this project is no longer under development. Eventually, you will arrive a discussion on GIL and multi-cores like this [article](http://python-notes.curiousefficiency.org/en/latest/python3/multicore_python.html). Yes, the Python community is torn between 2.7 and 3.x. Your best bet at this point of time for Python 2.7 users is to leverage [Tornado's async](http://www.tornadoweb.org/en/stable/guide/async.html) facility using Callbacks, futures, promises and deferred.  A hybrid but elegant alternative is to use [Cyclone](http://cyclone.io/) (Takes Tornado's elegance and applies it to [Twisted](https://twistedmatrix.com/trac/) library).

Read more about uvloop here: [https://goo.gl/lEC7tt](https://goo.gl/lEC7tt)

To learn more about the other libraries mentioned here refer to this blog article:
[https://goo.gl/TDkEkJ](https://goo.gl/TDkEkJ)

Cheers!

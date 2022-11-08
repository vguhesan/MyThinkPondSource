---
author: vguhesan
categories:
- Python
comments: true
date: 2011-12-28T17:58:32Z
link: http://mythinkpond.com/2011/12/28/how-to-upgrade-to-python-2-7-on-centos/
slug: how-to-upgrade-to-python-2-7-on-centos
tags:
- CentOS
- python 2.7
- upgrade
title: How to upgrade to Python 2.7 on CentOS
url: /2011/12/28/how-to-upgrade-to-python-2-7-on-centos/
wordpress_id: 302
---

If you tried upgrading to Python 2.7 on CentOS, you will quickly find out that the RPM's don't exist for this in the repos. So here's a short summary of what I did to upgrade my Python to 2.7 on CentOS.

Based on a few Google searches... I discovered that a few dependent packages are required before you try upgrading to Python 2.7.

[sourcecode]

yum -y groupinstall 'Development Tools'
yum -y install openssl-devel* ncurses-devel* zlib*.x86_64</pre>
yum -y install bzip2 bzip2-devel bzip2-libs

[/sourcecode]

Next download the latest tar/gzip/tgz available here:
[http://python.org/ftp/python/2.7/](http://python.org/ftp/python/2.7/)

[sourcecode]

#Download the latest available at this time
curl -O http://python.org/ftp/python/2.7/Python-2.7.tgz
#Unzip/expand file
tar xfz Python-2.7.tgz
#Change Directory to the unzipped folder
cd Python-2.7
#read README file or you can follow the lines below
./configure
#you could also run configure with threads and shared enabled
#./configure --prefix=/opt/python2.7 --with-threads --enable-shared
#Compile
make
#Install
make install
# Exit from your shell and open a new shell/SSH session
# Use the command below to display which path of python is currently active
which python
#To verify if the install succeeded
python -V
#Use UPPERCASE 'V' - not lower-case.
#Output will be "Python 2.7"
#Sometimes you may need to exit out of your shell
#and them come back in to see the version changes.
#So best exit your current shell prompt and reopen
#a new before checking the version.

[/sourcecode]

You're all set. You've just upgraded to Python 2.7.

The next logical step that you need to perform is to install the setup tools that allows you to install modules. (Please note that setuptools is not available for Python 3.0+, instead use Distrubute available here - http://pypi.python.org/pypi/distribute)

Download the latest setuptools for your version of Python (2.7 in this case) from here:
http://pypi.python.org/pypi/setuptools#downloads

[sourcecode]

curl -O http://pypi.python.org/packages/2.7/s/setuptools/setuptools-0.6c11-py2.7.egg

chmod 775 setuptools-0.6c11-py2.7.egg

sh setuptools-0.6c11-py2.7.egg

#This should install the egg here: /usr/local/lib/python2.7/site-packages/

[/sourcecode]

Next you want to install "PIP", this enables the download and install of modules in Python:

[sourcecode]
$ curl -O http://pypi.python.org/packages/source/p/pip/pip-1.0.tar.gz
$ tar xvfz pip-1.0.tar.gz
$ cd pip-1.0
$ python setup.py install # may need to be root</pre>
[/sourcecode]

Now you're all set. Suppose you wanted to install a module called 'simplejson'.

You can now do this using command syntax like this:

    
    pip install simplejson


Cheers.

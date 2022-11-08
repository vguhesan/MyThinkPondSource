---
author: vguhesan
categories:
- Python
comments: true
date: 2016-09-30T15:22:59Z
link: http://mythinkpond.com/2016/09/30/uninstall-python-eggs-that-you-installed-using-setup-py/
slug: uninstall-python-eggs-that-you-installed-using-setup-py
tags:
- pip
- setup.py
- uninstall
title: Uninstall python eggs that you installed using setup.py
url: /2016/09/30/uninstall-python-eggs-that-you-installed-using-setup-py/
wordpress_id: 1110
---

[![python_logo](/img/2016/09/python_logo.png)](/img/2016/09/python_logo.png)In Python, most libraries are available using the pip install process. But for cases, where you are distributing code to be installed in customer sites where you may or may not have a internet connection to the pip libraries, you resort to the legacy setup.py process.

When you install using the setup.py process, the setup.py copies it's collection of python files to the site-packages folder for your python virtual-environment. On a CentOS, this might be a location under (/usr/lib/python2.7/site-packages/) directory. This may also write it's files to other locations such as config files and resource files.

Once installed and if you decide you want to uninstall or upgrade the package or egg, it's hard to identify all the files that this egg touched. Within the setup.py process there are some other options that can help you in identifying the python files that are placed in these locations. Here is an example of how you can identify the files and remove the files before upgrading.

<pre><code language="bash">
# To note down the list of files that are installed
python setup.py install --record egg-files.txt
# To remove those files you can do the following using the egg-files.txt
cat egg-files.txt | xargs rm -rf
# This would remove the individual files but will leave the "<project>.egg-info" directory and other artifacts under site-packages. 
# You can remove the package directories manually
</code></pre>

On the other hand, if you have access to pip then you can leverage "pip freeze" options ([read more here](https://pip.pypa.io/en/stable/reference/pip_freeze/)) along with "pip uninstall" option ([read more here](https://pip.pypa.io/en/stable/reference/pip_uninstall/)).

Cheers.

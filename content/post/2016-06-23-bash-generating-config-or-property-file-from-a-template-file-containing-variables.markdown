---
author: vguhesan
categories:
- Linux
comments: true
date: 2016-06-23T23:14:21Z
link: http://mythinkpond.com/2016/06/23/bash-generating-config-or-property-file-from-a-template-file-containing-variables/
slug: bash-generating-config-or-property-file-from-a-template-file-containing-variables
tags:
- Bash
- config
- configuration
- property
- Template
- variable
title: bash script to generate config or property file from a template file containing
  variables
url: /2016/06/23/bash-generating-config-or-property-file-from-a-template-file-containing-variables/
wordpress_id: 1070
---

Sometimes we have configuration or properties file (as templates) such as httpd.conf or server.conf where we want to dynamically replace $variables with values before writing the output to a new file.

Example:

<pre><code language="xml">
# httpd.conf.tmpl
<Location $STATUS_URI>
    SetHandler server-status
    Order deny,allow
    Deny from all
    Allow from $MONITOR_IP
</Location>
</code></pre>

We want to develop an install script in Bash such that it reads the httpd.conf.tmpl and replaces the $STATUS_URI and $MONITOR_IP with appropriate values (either passed in as script arguments or coded in the bash script) and then write out the resulting output to a new file such as /tmp/httpd.conf

Here is such as script:

<pre><code language="bash">
#!/usr/bin/env bash

# Define the variables with values you want replaced
STATUS_URI="foobar"
MONITOR_IP="192.168.1.1"
# This could also be read in via bash arguments. 
# Google "bash getopts" for more information

# render a template configuration file
# expand variables + preserve formatting
# user="Venkatt"
# referenced inside the template.txt as $user
# render_template /path/to/template.txt > path/to/configuration_file
function render_template() {
  eval "echo \"$(cat $1)\""
}

function generate_httpd_conf {
  echo "#### Creating /tmp/httpd.conf from template ./httpd.conf.tmpl"
  render_template httpd.conf.tmpl > /tmp/httpd.conf
}
</code></pre>

Generated output:

<pre><code language="xml">
<Location foobar>
    SetHandler server-status
    Order deny,allow
    Deny from all
    Allow from 192.168.1.1
</Location>
</code></pre>

This can be a useful method to generate .conf .prop (configuration or properties) files.

Cheers.

And now for today's inspirational quote:


<blockquote>Let us sacrifice our today so that our children can have a better tomorrow.
- [Abdul Kalam](https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam)
- 11th President of India from 2002 to 2007
- Chief 'Rocket' Scientist born from a poor family with humble beginnings.
- Lived as a "Man of simplicity"</blockquote>

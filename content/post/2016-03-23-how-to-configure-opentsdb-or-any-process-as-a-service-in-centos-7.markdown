---
author: vguhesan
categories:
- CentOS7
- Linux
comments: true
date: 2016-03-23T15:00:37Z
link: http://mythinkpond.com/2016/03/23/how-to-configure-opentsdb-or-any-process-as-a-service-in-centos-7/
slug: how-to-configure-opentsdb-or-any-process-as-a-service-in-centos-7
tags:
- opentsdb
- serviced
title: How to configure OpenTSDB (or any process) as a systemd service in CentOS 7?
url: /2016/03/23/how-to-configure-opentsdb-or-any-process-as-a-service-in-centos-7/
wordpress_id: 994
---

[![centos_logo](/img/2016/11/centos_logo.png)](/img/2016/11/centos_logo.png)CentOS 7 uses Systemd for managing services (prior to CentOS 7 it was using upstart-init.d to manage the services).

**Step-1**: Create CentOS 7 Service file: vim /usr/lib/systemd/system/opentsdb.service

<pre><code>

[Unit]
Description=OpenTSDB Service
After=network.target hbase.service

[Service]
Type=forking
PrivateTmp=yes
ExecStart=/usr/share/opentsdb/etc/init.d/opentsdb start
ExecStop=/usr/share/opentsdb/etc/init.d/opentsdb stop
Restart=on-abort

[Install]
WantedBy=multi-user.target

</code></pre>

**Step-2**: Let's test the start and stop of this new OpenTSDB service

<pre><code>

$ sudo systemctl start opentsdb
# If it starts up good, you should see the website when you goto http://&amp;amp;lt;servername&amp;amp;gt;:4242/
ps -leaf | grep &amp;amp;quot;tsdb&amp;amp;quot;
# shows you something similar then you can add it as a service to auto-start
sudo systemctl enable opentsdb

</code></pre>

**Step-3**: (optional) Reboot node and make sure that the service starts up accordingly after a reboot.

If you want to learn more about the available options under systemd refer to this link [here](https://www.freedesktop.org/software/systemd/man/systemd.service.html).

Some useful options to learn are:
[`ExecStartPre=`, `ExecStartPost=`](https://www.freedesktop.org/software/systemd/man/systemd.service.html#ExecStartPre=)

Some other examples for including options like the ones below can be seen [here](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Command%20lines):

<pre><code script="bash">
WorkingDirectory=/usr/share/grafana
ExecStart=/usr/sbin/grafana-server                                \
                            --config=${CONF_FILE}                 \
                            --pidfile=${PID_FILE}                 \
                            cfg:default.paths.logs=${LOG_DIR}     \
                            cfg:default.paths.data=${DATA_DIR}    \
                            cfg:default.paths.plugins=${PLUGINS_DIR}
</code></pre>

Additionally [here](https://wiki.archlinux.org/index.php/Systemd) is one more resource.

Cheers.

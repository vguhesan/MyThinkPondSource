---
author: vguhesan
comments: true
date: 2016-03-14T19:34:11Z
link: http://mythinkpond.com/2016/03/14/kairosdb-cassandra-localhost9160-connection-refused/
slug: kairosdb-cassandra-localhost9160-connection-refused
tags:
- BigData
- Cassandra
- KairosDB
title: Kairosdb - Cassandra - localhost:9160 - connection refused
url: /2016/03/14/kairosdb-cassandra-localhost9160-connection-refused/
wordpress_id: 981
---

[![kairosdb_cassandra](/img/2016/03/kairosdb_cassandra.png)](/img/2016/03/kairosdb_cassandra.png)

If you install the latest KariosDB and Cassandra, when you try starting KariosDB pointing to the Cassandra storage, you will see the following exception:

<pre><code>

03-14|14:24:42.331 [main] ERROR [HConnectionManager.java:71] - Could not start connection pool for host localhost(127.0.0.1):9160
03-14|14:24:42.331 [main] INFO  [CassandraHostRetryService.java:68] - Host detected as down was added to retry queue: localhost(127.0.0.1):9160
03-14|14:24:42.332 [Hector.me.prettyprint.cassandra.connection.CassandraHostRetryService-1] DEBUG [HThriftClient.java:152] - Creating a new thrift connection to localhost(127.0.0.1):9160
03-14|14:24:42.334 [Hector.me.prettyprint.cassandra.connection.CassandraHostRetryService-1] DEBUG [HThriftClient.java:183] - Unable to open transport to localhost(127.0.0.1):9160
03-14|14:24:42.334 [Hector.me.prettyprint.cassandra.connection.CassandraHostRetryService-1] WARN  [CassandraHostRetryService.java:217] - Downed localhost(127.0.0.1):9160 host still appears to be down: Unable to open transport to localhost(127.0.0.1):9160 , java.net.ConnectException: Connection refused
03-14|14:24:42.348 [main] ERROR [Main.java:315] - Failed starting up services
com.google.inject.ProvisionException: Guice provision errors:

1) Error injecting constructor, org.kairosdb.core.exception.DatastoreException: me.prettyprint.hector.api.exceptions.HectorException: All host pools marked down. Retry burden pushed out to client.
at org.kairosdb.datastore.cassandra.CassandraDatastore.<init>(CassandraDatastore.java:114)
at org.kairosdb.datastore.cassandra.CassandraModule.configure(CassandraModule.java:66)
while locating org.kairosdb.datastore.cassandra.CassandraDatastore
at org.kairosdb.datastore.cassandra.CassandraModule.configure(CassandraModule.java:65)
while locating org.kairosdb.core.datastore.Datastore
for parameter 0 at org.kairosdb.core.datastore.KairosDatastore.<init>(KairosDatastore.java:69)
at org.kairosdb.core.CoreModule.configure(CoreModule.java:74)
while locating org.kairosdb.core.datastore.KairosDatastore
for parameter 1 at org.kairosdb.core.jobs.CacheFileCleaner.<init>(CacheFileCleaner.java:41)
at org.kairosdb.core.CoreModule.configure(CoreModule.java:79)
while locating org.kairosdb.core.jobs.CacheFileCleaner

1 error
at com.google.inject.internal.InjectorImpl$4.get(InjectorImpl.java:987) ~[guice-3.0.jar:na]
at com.google.inject.internal.InjectorImpl.getInstance(InjectorImpl.java:1013) ~[guice-3.0.jar:na]
at org.kairosdb.core.scheduler.KairosDBScheduler.start(KairosDBScheduler.java:68) ~[kairosdb-1.1.1-1.jar:1.1.1-1.20151207194217]
at org.kairosdb.core.Main.startServices(Main.java:451) ~[kairosdb-1.1.1-1.jar:1.1.1-1.20151207194217]
at org.kairosdb.core.Main.main(Main.java:304) ~[kairosdb-1.1.1-1.jar:1.1.1-1.20151207194217]
Caused by: org.kairosdb.core.exception.DatastoreException: me.prettyprint.hector.api.exceptions.HectorException: All host pools marked down. Retry burden pushed out to client.
at org.kairosdb.datastore.cassandra.CassandraDatastore.<init>(CassandraDatastore.java:225) ~[kairosdb-1.1.1-1.jar:1.1.1-1.20151207194217]
at org.kairosdb.datastore.cassandra.CassandraDatastore$$FastClassByGuice$$ccf4844f.newInstance(<generated>) ~[guice-3.0.jar:1.1.1-1.20151207194217]

</code></pre>

This happens with Cassandra 3.3.0 and above. The reason for this error is that by default Cassandra turns off the RPC service. To fix this edit "/etc/cassandra/default.conf/cassandra.yaml" and toggle the "start_rpc" flag from "false" to "true":

<pre><code>

start_rpc: true

</code></pre>

Restart Cassandra (service cassandra restart #For CentOS 6.7 or below) or (systemctl restart cassandra #For CentOS 7.0 or above)



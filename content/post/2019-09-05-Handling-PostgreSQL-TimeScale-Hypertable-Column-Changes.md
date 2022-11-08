+++
title = "Handling PostgreSQL TimeScale Hyper-table Column Changes Efficiently"
description = "This article shows you how to efficiently alter column data-types that leverages PostgreSQL TimeScale hyper-tables."
date = "2019-09-05T21:04:14-04:00"
categories = ["PostgreSQL"]
tags = ["PostgreSQL","TimeScale","hypertable","time-series","ALTER"]
thumbnail = "/img/logo/postgresql.png"
+++

> **tl;dr** This article shows you how to efficiently alter column data-types that leverages PostgreSQL TimeScale hyper-tables.

{{<img src="/img/2019/09/05/img_5503.jpg" alt="Beautiful Skies Over Baltimore" align="center" class="imgframe">}}

Driving home from a long day of work, I see the beautiful sky and so I pull over to the side of the road to snap this picture. What a glorious sunset! But then you get back into your car and reality kicks in! :-) I was once again reminded of today's challenges. (It's funny how your mind works). And so I drive home, boot up my personal server. I try to recreate the issue and refine my process and understanding. At the end of the night, I felt that it's best to document my findings for posterity and to share it with the rest of the world in hopes that someone running into the same challenge can benefit from this knowledge. If you find this article useful, drop me a line. It will be reassuring to know that these journals that I keep, helps others along the way! ;-)

Let's dive into the problem!


#### Problem Statement

{{<img src="/img/logo/postgresql.png" alt="PostgreSQL TimeScale hypertable" align="left" class="imgframe">}}  When you work with PostgreSQL tables with time-series data, you may end up choosing [TimeScale](https://www.timescale.com/) as a product for storing time-series data in a relational database. You other options to consider will be - <a href="https://kairosdb.github.io/" target="_blank" alt="kairosdb">KairosDB</a> on top of <a href="http://cassandra.apache.org/" target="_blank" alt="Cassandra - Big Data">Cassandra</a>, <a href="https://www.influxdata.com/" target="_blank" alt="InfluxDB">InfluxDB</a>, <a href="https://graphiteapp.org/" target="_blank" alt="Graphite">Graphite</a>, or to build your own using <a href="https://hbase.apache.org/" target="_blank" alt="HBase">HBase</a> or <a href="https://github.com/facebook/rocksdb" target="_blank" alt="RocksDB">RocksDB</a> or <a href="https://github.com/google/leveldb" target="_blank" alt="LevelDB">LevelDB</a>, etc. But each option you consider has various implications on the <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" alt="CAP Theorem">CAP Theorem</a> (WRT to Consistency/Availability/Partition Tolerance). But that's another article for a later date. Back to the story...

As your schema design evolves, you will need to modify the table-columns to support the changes. TimeScale uses hyper-tables to shard/chunk the time-series data into smaller tables that uses your time column as an index. This has a penalty when you save the data (WRITE) but has very good READ benefits. There may be cases where you need to modify a column type from one type to another. Example in this case is that you created one of the time columns as type TIMESTAMP (timestamp with no timezone data) and then realize later on that you need to convert it to TIMESTAMPZ (timestamp with timezone data).  

Here is a clean way you can make that modification.

> **WARNING**: Do not attempt to drop the _hyper tables. They contain the actual data that you INSERTed into your primary table. These tables are created as child tables and the actual data is stored within the _hyper tables. 


#### Step-1: Create a temporary table that will hold the real table data

<pre><code class="language-sql line-numbers">
CREATE TABLE tmp_SmartDiskMetrics AS
    SELECT * FROM SmartDiskMetrics;

# This creates a tmp_* table with no constraints or foreign key maps 
# tmp table will be owned by the user you are currently logged in into psql    
</code></pre>

#### Step-2: Truncate table that requires column change

<pre><code class="language-sql line-numbers">
TRUNCATE TABLE SmartDiskMetrics;

# This will be free of any constraints
# When you run "\d+ SmartDiskMetrics", your table will not have any Child table references to hyper-tables  
</code></pre>

#### Step-3: Convert table column

<pre><code class="language-sql line-numbers">
ALTER TABLE SmartDiskMetrics ALTER COLUMN time TYPE timestamp with time zone;
ALTER TABLE SmartDiskMetrics ALTER COLUMN time SET DEFAULT now();
ALTER TABLE SmartDiskMetrics ALTER COLUMN time SET NOT NULL;

# When you run "\d+ SmartDiskMetrics" now, your table schema will have "timestamp with time zone", not-null, now() 
</code></pre>

#### Step-4: Move back the data from tmp_ table to the real table

<pre><code class="language-sql line-numbers">
INSERT INTO SmartDiskMetrics SELECT * FROM tmp_SmartDiskMetrics;

# When you run "\d+ SmartDiskMetrics" now, your table ** will have ** Child table with references pointing to hyper-tables 
# like _timescaledb_internal._hyper_1_245_chunk 
</code></pre>


That's it! You have now modified a PostgreSQL table with time-series (with timezone) data backed by TimeScale hyper-table.

If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share the more my content can reach others. Thank you for helping spread the word!

#### Now for Today's Inspiration:

> Three Steps In Cultivating **Willpower**:
>
> 1. **Finish** what you begin.
> 2. Do a little **bit more** than you think you can.
> 3. Do a little **bit better** than you think you can.

Cheers!




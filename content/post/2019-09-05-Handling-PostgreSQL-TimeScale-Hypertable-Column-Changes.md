+++
title = "Handling PostgreSQL TimeScale Hypertable Column Changes Efficiently"
description = "This article shows you how to efficiently alter column datatypes that leverages PostgreSQL TimeScale hypertables."
date = "2019-09-05T21:04:14-04:00"
categories = ["PostgreSQL"]
tags = ["PostgreSQL","TimeScale","hypertable","time-series","ALTER"]
thumbnail = "/img/logo/sharedstorageicon.png"
+++

{{<img src="/img/2019/09/05/img_5503.jpg" alt="Beautiful Skies Over Baltimore" align="center" class="imgframe">}}

{{<img src="/img/logo/sharedstorageicon.png" alt="PostgreSQL TimeScale hypertable" align="left" class="imgframe">}} Driving home from a long day of work, I see the beautiful sky and so to not miss the beauty, I decided to pull over to take this picture. But then coming home, I was reminded of today's challenges and I felt that it's best to document my findings for posterity and to share it with the rest of the world in hopes that someone running into the same challenge can benefit from this knowledge. If you find this article useful, drop me a line. ;-)

&nbsp;&nbsp;&nbsp;&nbsp;

> This article shows you how to efficiently alter column datatypes that leverages PostgreSQL TimeScale hypertables.

#### Problem Statement

When you work with PostgreSQL tables with time-series data, you may end up choosing [TimeScale](https://www.timescale.com/) as a product for storing time-series data. And as your schema design evolves, you will need to modify the table-columns to support the changes. TimeScale uses hypertables to shard/chunk the time-series data into smaller tables that uses your time column as an index. There may be cases where you created one of the time columns as type TIMESTAMP and then realize later on that you need to convert it to TIMESTAMPZ (timestamp with timezone). Here is a clean way you can make that modification.

#### Step-1: Create a temporary table that will hold the real table data

<pre><code language="sql">
CREATE TABLE tmp_SMART_DISK_METRICS AS
    SELECT * FROM SMART_DISK_METRICS;

# This creates a tmp_* table with no constraints or foreign key maps 
# tmp table will be owned by the user you are currently logged in into psql    
</code></pre>

#### Step-2: Truncate table that requires column change

<pre><code language="sql">
TRUNCATE TABLE SMART_DISK_METRICS;

# This will be free of any constraints
# When you run "\d+ SMART_DISK_METRICS", your table will not have any Child table references to hypertables  
</code></pre>

#### Step-3: Convert table column

<pre><code language="sql">
ALTER TABLE SMART_DISK_METRICS ALTER COLUMN time TYPE timestamp with time zone;
ALTER TABLE SMART_DISK_METRICS ALTER COLUMN time SET DEFAULT now();
ALTER TABLE SMART_DISK_METRICS ALTER COLUMN time SET NOT NULL;

# When you run "\d+ SMART_DISK_METRICS" now, your table schema will have "timestamp with time zone", not-null, now() 
</code></pre>

#### Step-4: Move back the data from tmp_ table to the real table

<pre><code language="sql">
INSERT INTO SMART_DISK_METRICS SELECT * FROM tmp_SMART_DISK_METRICS;

# When you run "\d+ SMART_DISK_METRICS" now, your table ** will have ** Child table with references pointing to hypertables 
# like _timescaledb_internal._hyper_1_245_chunk 
</code></pre>

That's it! You have now modified a PostgreSQL table with time-series data backed by TimeScale hypertable.

If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share the more my content can reach others. Thank you for helping spread the word!

Now for Today's Inspiration:

> Three Steps In Cultivating **Willpower**:
>
> 1. **Finish** what you begin.
> 2. Do a little **bit more** than you think you can.
> 3. Do a little **bit better** than you think you can.

Cheers!




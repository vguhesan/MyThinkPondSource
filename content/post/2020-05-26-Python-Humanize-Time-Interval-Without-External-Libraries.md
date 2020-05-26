+++
title = "Python humanize time-interval without Arrow or Humanize libraries"
description = "Python humanize time interval without Arrow or Humanize libraries"
date = "2020-05-26"
categories = ["Python"]
tags = ["Python", "DateTime", "timedelta", "Interval", "Humanize", "Arrow", "time difference"]
thumbnail = "/img/logo/python_logo2.png"
+++

> **tl;dr** Sometimes when we need to debug functions in Python, we need a way to write some quick timer code to capture the time-delta and to compute the time it took for the function to execute. This article shows you a quick and easy way to humanize a time-interval/time-delta without bringing in additional dependencies or libraries like Arrow or Humanize.

<pre><code class="language-python">Elapsed Time: 2 Days, 5 Hours, 7 Minutes, 13 Seconds 
</code></pre> 

{{<figure src="/img/2020/05/unsplash1.jpg" caption="Yucel Moral (@yucelmoran) at Unsplash" class="aligncenter round-img-border imgframe-left-pad" >}}

{{<figure src="/img/logo/python_logo.png" caption="" width="120" class="alignleft round-img-border imgframe-left-pad" >}}

Sometimes when we need to debug functions in Python, we need a way to write some quick timer code to capture the time-delta and to compute the time it took for the function to execute. As an example:

<pre><code class="language-python line-numbers">from datetime import datetime 
start = datetime.now()
# Then call some long running code or function here
end = datetime.now()
diff = end - start
print diff
</code></pre>  

And this gives you:

<pre><code class="language-python line-numbers">print diff
123 days, 16:48:22
</code></pre>

Now the variable "diff" holds a value of type: timedelta (elapsed-time or time-interval in seconds) as shown with the Python type() function below:

<pre><code class="language-python line-numbers">print type(diff)
&lt;class 'datetime.timedelta'&gt;
</code></pre>



To get it formatted into a human-readable friendly format, you can bring in a library such as <a href="https://arrow.readthedocs.io/" target="_blank">Arrow</a> or <a href="https://github.com/jmoiron/humanize" target="_blank">Humanize</a>. There is nothing wrong with these libraries. In fact, they are two great libraries that I use frequently. But sometimes, you just need to display the time-interval or time-delta in a human readable format without brining in an additional library into the mix to display "Elapsed Time" in a friendly format like this:

<pre><code class="language-python">Elapsed Time: 2 Days, 5 Hours, 7 Minutes, 13 Seconds 
</code></pre>

The snippet below will get you the results you need:

<pre><code class="language-python">days = diff.days # Get Day 
hours,remainder = divmod(diff.seconds,3600) # Get Hour
minutes,seconds = divmod(remainder,60) # Get Minute & Second

print(f'Elapsed Time: {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds.') 
</code></pre>

Sample Output:
<pre><code class="language-python">Elapsed Time: 2 Days, 5 Hours, 7 Minutes, 13 Seconds 
</code></pre>

<hr>
<b>Full Working Example:</b>
<pre><code class="language-python">from datetime import datetime 
start = datetime.now()
# Then call some long running code or function here
end = datetime.now()
diff = end - start
print type(diff)
print diff
days = diff.days # Get Day 
hours,remainder = divmod(diff.seconds,3600) # Get Hour
minutes,seconds = divmod(remainder,60) # Get Minute & Second

print(f'Elapsed Time: {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds.') 
</code></pre>
<hr>

The trick to this example/implementation is to use the <a href="https://docs.python.org/3/library/functions.html#divmod" target="_blank">divmod</a> function in Python. The divmod() function in python takes two numbers and returns a pair of numbers (tuple) consisting of their quotient and remainder.

Syntax:
<pre><code class="language-python">divmod(x, y)
x and y : x is numerator and y is denominator
x and y must be non complex
Returns tuple (quotient, remainder)
</code></pre>

Examples:
<pre><code class="language-python">Input: x = 9, y = 3
Output: (3, 0)
# 3 is quotient, 0 is remainder
Input: x = 16, y = 3
Output:(5, 1)
# 5 is quotient, 1 is remainder
</code></pre>

If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share, the more my content can reach others. 

Thank you for helping spread the word. 

Find your passion and inspiration today! And help someone else find theirs!


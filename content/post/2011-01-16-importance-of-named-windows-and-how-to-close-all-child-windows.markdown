---
author: vguhesan
categories:
- Javascript
comments: true
date: 2011-01-16T23:00:44Z
link: http://mythinkpond.com/2011/01/16/importance-of-named-windows-and-how-to-close-all-child-windows/
slug: importance-of-named-windows-and-how-to-close-all-child-windows
tags:
- child windows
- close child windows
- close windows
- Javascript window
- window.open
title: Importance of named windows and how to close all child windows
url: /2011/01/16/importance-of-named-windows-and-how-to-close-all-child-windows/
wordpress_id: 201
---

One of the questions posed by a friend of mine is this. 





<blockquote>In a typical website-application, you spawn a few child windows here and there and because of the nature of the application, you do not have a handle to all the child windows you spawn open... Then how do you close all the child windows that belong to your application when the user logs out of your application or closes the main window with the intent that he/she wants to log out?</blockquote>




Well, Javascript "Named" widows to your rescue.

Let's say you have a parent page/application that has a bunch of links:

[sourcecode language="jscript"]

<script type="text/javascript">
function openChildWindow(windowID){
	window.open("./WindowOne.html",'MYAPP_'+windowID,'height=400,width=200');
}
</script>

	<a href="Javascript: openChildWindow(1);">Open child window 1</a>.

	<a href="./WindowOne.html" target="MYAPP_2">Open child window 2</a>.

	<a href="Javascript: openChildWindow(3);">Open child window 3</a>.

	<a href="Javascript: openChildWindow(4);">Open child window 4</a>.

	<a href="./WindowOne.html" target="MYAPP_5">Open child window 5</a>.

	<a href="Javascript: openChildWindow(6);">Open child window 6</a>.

	<a href="./WindowOne.html" target="MYAPP_7">Open child window 7</a>.

	Now goto <a href="./secondPage.html">second page</a> which looses all knowledge of these windows...

[/sourcecode]

Now in the secondPage.html

[sourcecode language="jscript"]
<script type="text/javascript">
function closeAllChildWindows(){
	
	for (var i=0; i<10; i++){
		var childWindowName = "MYAPP_"+i;
		var handle = window.open("",childWindowName);
		if (handle && handle.open && !handle.closed){
			handle.close();
		}
	}
	
}
</script>
<a href="Javascript: closeAllChildWindows();">Close All Child Windows</a>.

[/sourcecode]

Essentially the code looks for all windows with a following convention. In this case, all window-names that start with "MYAPP_*" where *=[0 to 10]. You can do the same trick to see if a window is already opened up under a name so that you can open up a window under a new name but based on your convention.

You can download the [sample here](https://docs.google.com/leaf?id=0B5XFQsjBD9fdZGNmZmI0MjktZjkwYS00MDY5LWE0MzYtMzI2NTAxYTRlZmQ1&hl=en).

Cheers!



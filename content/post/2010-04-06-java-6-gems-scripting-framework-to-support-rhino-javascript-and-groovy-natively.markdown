---
author: vguhesan
categories:
- Java
- Programming
comments: true
date: 2010-04-06T20:15:53Z
excerpt: 'Java 6 Gems: Scripting Framework to support Rhino Javascript and Groovy
  (natively)'
link: http://mythinkpond.com/2010/04/06/java-6-gems-scripting-framework-to-support-rhino-javascript-and-groovy-natively/
slug: java-6-gems-scripting-framework-to-support-rhino-javascript-and-groovy-natively
title: 'Java 6 Gems: Scripting Framework to support Rhino Javascript and Groovy (natively)'
url: /2010/04/06/java-6-gems-scripting-framework-to-support-rhino-javascript-and-groovy-natively/
wordpress_id: 100
---

**What is it?** With Java 6 there is a new addition (package: javax.script) that allows you to work with scripting languages like Javascript (using Rhino) and Groovy. Although there is built in support for adding scripting engines like Groovy, PHP, Perl, etc - what's bundled in this release is Mozilla's Rhino Javascript Engine.

**Why embed a scripting language?** Most scripting languages out there are dynamically typed. Meaning, your code does not need to know what type of value you will be storing in a particular field at compile time. So for example, using JavaScript as a scripting language, you can store "John" [var name = "John";] or the numerical value of five (5) [var name = 5;] in a var. And since the variables are loosely typed, the language takes care of storing the data by guessing at what's being stored in that variable. Well why does this benefit us? Well, these technologies help us in prototyping quick, build applications faster, and for situations where you can execute commands repeatedly as well as in tying different technologies together. Developers usually agree that for processing\parsing, Perl has always had an upper hand. So imaging using the perl scripting engine to develop an application that can parse a file efficiently. The other situation where embedding a scripting language comes in handy is - when you are developing a Java FX or Java Swing based application. Now you can develop libraries that can work seamlessly whether they are deployed on a FireFox browser or on a custom Java application on your smart-phone. The third arena where this makes sense is in server-side processing. Imaging a back-end application that needs to perform some text manipulation. You can tie a perl or sed or awk script engine on the back-end via a command shell like bash or ksh to perform the operations right within the Java application and all along work with variables right in the Java memory space.

**Simple Example**: Let's take a look at an example, where we print the string "Hello World" onto the System.out.

[sourcecode language="jscript"]

ScriptEngineManager mgr = new ScriptEngineManager();
ScriptEngine jsEngine = mgr.getEngineByExtension("js");
try {
jsEngine.eval("print('Hello, world!')");
} catch (ScriptException ex) {
ex.printStackTrace();
}

[/sourcecode]

Well, your first thought will be that I could have done this in one Java line [ System.out.println("Hello World"); ] but the point here to see the profound impact that this option can bring to the Java language.

Now let's look at a way to access a variable in the Java space:

[sourcecode language="jscript"]

String name = "John";

ScriptEngineManager mgr = new ScriptEngineManager();

ScriptEngine jsEngine = mgr.getEngineByExtension("js");

try {

jsEngine.put("jsname", name);

jsEngine.eval("print('My name is ' + jsname)");

} catch (ScriptException ex) {

ex.printStackTrace();

}
[/sourcecode]

Well you can learn to use this technology with relevant examples [here](http://java.sun.com/developer/technicalArticles/J2SE/Desktop/scripting/). Interested in learning more about this technology and how it impacts Java, then look at [JSR 223](http://java.sun.com/javase/6/docs/technotes/guides/scripting/index.html). Now almost every web developer using Java has at one point of time explored [Groovy](http://groovy.codehaus.org/). In the past, you would run your Groovy code using an interpreter available when you download Groovy. But now using this technology, you can embed Groovy into the JVM such that you have access to data and variables in both namespaces. To cover the basis for using Groovy natively is beyond today's blog but you can see the possibilities of what you can do [here](http://groovy.codehaus.org/JSR+223+Scripting+with+Groovy).

Here is a list of [available Scripting Engines](https://scripting.dev.java.net/) that you can drop into Java including support for Awk, Freemarker, Groovy, Javascript (using Rhino), Python, Ruby, Tcl, PHP, Smalltalk, etc. As I'm writing this blog, the **jsr223-engines.zip **contains the following scripting languages:

browserjs, ejs, freemarker, groovy, jacl, jaskell, java, javascript, jawk, jelly, jep, jexl, jruby, jst, judo, juel, jython, ognl, pnuts, scheme, velocity, xpath, xslt.

So if you need to prototype fast and don't want to run an separate instance of Apache server with mod_php or mod_python to develop using these scripting languages. Now you can do this all within Tomcat or in native Java with a few simple drop-in JAR's.

Happy Scripting!!!


<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

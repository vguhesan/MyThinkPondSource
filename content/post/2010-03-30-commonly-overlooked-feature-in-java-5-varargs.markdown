---
author: vguhesan
categories:
- Java
comments: true
date: 2010-03-30T14:16:09Z
excerpt: Commonly overlooked feature in Java 5 - varargs (variable arguments)
link: http://mythinkpond.com/2010/03/30/commonly-overlooked-feature-in-java-5-varargs/
slug: commonly-overlooked-feature-in-java-5-varargs
title: Commonly overlooked feature in Java 5 - varargs
url: /2010/03/30/commonly-overlooked-feature-in-java-5-varargs/
wordpress_id: 93
---

Today I'll comment on a commonly overlooked feature now available in Java (since Java 5.0) called "varargs".

How many times have you done this?

[sourcecode language="jscript"]

public ConstructorOne(String personFullName){
// Does something
}

//and later on added another constructor that took another parameter

public ConstructorOne(String personFirstName, String personLastName){
// Now breaks down the name to pass along two strings instead of one.
}

// and so on...

[/sourcecode]

Well, not anymore. You now have a new arsenal in your toolkit. In comes, "varargs" - stands for variable arguments.

You can rewrite that as this.

[sourcecode language="jscript"]

public constructorOne(String... parts){
if (parts.length == 2){
//process personFirstName, personLastName here
} else{

//process personFullName logic here  }

}

[/sourcecode]

Although this functionality exists in Scala (called [Tuples](http://www.codecommit.com/blog/scala/scala-for-java-refugees-part-6)) and does a better job - even while returning data of multiple types. This is a good start for Java.

Now the next question one would ask is - what happens when you want to pass a list of arguments of different types. Well here's the solution:

[sourcecode language="jscript"]

public constructorOne(Object... parts){

//your logic here

}

[/sourcecode]

Cheers.

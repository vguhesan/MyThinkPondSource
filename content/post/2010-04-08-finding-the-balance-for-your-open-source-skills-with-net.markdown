---
author: vguhesan
categories:
- .NET
- Programming
comments: true
date: 2010-04-08T18:07:06Z
excerpt: Finding the balance for your open source skills with .NET
link: http://mythinkpond.com/2010/04/08/finding-the-balance-for-your-open-source-skills-with-net/
slug: finding-the-balance-for-your-open-source-skills-with-net
title: Finding the balance for your open source skills with .NET
url: /2010/04/08/finding-the-balance-for-your-open-source-skills-with-net/
wordpress_id: 105
---

I have been a strong supporter of Open Source technologies including Java, Python, Scala, Ruby and Perl for many, many years. But in order to be a strong Enterprise Architect, it's best to also understand the various other technologies (some proprietary) to gain a broader-balanced view of technology and whats out there. And in this ever changing world of technology - knowing the various options you have can make the difference between being nimble and creative to an implementation that bites the dust. So today let's explore some options you have with learning and getting on board with the .NET technology.

The first and foremost option that comes to everyone's mind is to buy (or download the 90-day trial version) of Microsoft Visual Studio. But did you know that there are some other "free" options that are available to get you started?

Yes, I said - "free" and Microsoft in the same paragraph. Surprisingly, in order to compete with all the open source options available out there, especially with Java, PHP, Ruby, etc, Microsoft is giving away their base development products for free. They are called Express Editions. Well, before we look at the options of Express Editions, let's take a short trip on what exactly is .NET.

With the introduction of the ".NET" framework, Microsoft has gotten on the Java wagon (where a compiled byte code runs on a Java Runtime Engine instead of running natively as an executable). And in Microsoft's case the compiled code runs on a "Common Language Runtime" layer (CLR). So with this advantage, now a Microsoft developer can develop code in their favorite language of their choice - C++.NET (pronounced C-plus-plus), C#.NET (pronounced C-sharp), or VB.NET (Visual Basic) or Silverlight or ASP.NET (using the Visual Web Developer) and have the compiled code run in the CLR layer regardless of the source. This makes your development language agnostic. Write code in the language that you are most comfortable with and run it on the .NET platform. But now you need a common set of API's to drive this .NET engine. And hence the "unified programming classes and API's". By creating a common set of API's across all programming languages, the common language run-time enables cross-language inheritance, error handling, and debugging. But keep in mind that this allows you to run your code where the .NET run-time platform is available. And at present, Microsoft has only made this framework available on Windows and Windows compatible operating systems. Which means - no Linux.

But help is on the way with an open source project called [Mono](http://www.mono-project.com). The folks at Mono have implemented the run-time engine and .NET specification for other platforms and as I write this, there is support for this run-time in Linux and other OS's (Mono runs on Linux, Microsoft Windows, Mac OS X, BSD, and Sun Solaris, Nintendo Wii, Sony PlayStation 3, Apple iPhone. - taken from Mono's project site). But what this means is that you need to use Mono's API instead of the "unified programming classes and API's". So depending on your goal, it may be better to use the Mono API instead of Microsoft's API. And also if you plan on using Mono, then make sure you are thinking in C# (c sharp) because that's the language that's currently supported.

Now that we have a good understanding of our options, let's look at tools we can use, depending on the language you decide to learn:

[Visual Basic 2008 Express  Edition](http://www.microsoft.com/express/Downloads/#2008-Visual-Basic)

[Visual C# 2008 Express Edition](http://www.microsoft.com/express/Downloads/#2008-Visual-CS)

[Visual C++ 2008 Express Edition](http://www.microsoft.com/express/Downloads/#2008-Visual-CPP)

[Visual Web Developer  2008 Express                 Edition](http://www.microsoft.com/express/Downloads/#2008-Visual-Web-Developer)

And when you install the first three, you also get the option to install SQL Server lite version as well. And if you are developing for SilverLight, you want to use the Visual Web Developer Express Edition.

To begin your learning in the .NET technology, one of the sites I have always found very helpful is [RampUp from Microsoft](http://msdn.microsoft.com/en-us/rampup/default.aspx). Below is a link to the RampUp website:

RampUp : [http://msdn.microsoft.com/en-us/rampup/default.aspx](http://msdn.microsoft.com/en-us/rampup/default.aspx)

So if .NET is your flavor of the month or if you are trying to learn a new language, give .NET a try.  You may find greener pastures on the other side.

;-)

Cheers.


<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

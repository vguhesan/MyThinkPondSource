---
author: vguhesan
categories:
- Code Analysis
- Java
comments: true
date: 2011-07-14T11:50:57Z
link: http://mythinkpond.com/2011/07/14/java-tools-for-source-code-optimization-and-analysis/
slug: java-tools-for-source-code-optimization-and-analysis
tags:
- Optimization
- Source Code Analysis
title: Java Tools for Source Code Optimization and Analysis
url: /2011/07/14/java-tools-for-source-code-optimization-and-analysis/
wordpress_id: 246
---

Below is a list of some tools that can help you examine your Java source code for potential problems:

**1. PMD from [http://pmd.sourceforge.net/](http://pmd.sourceforge.net/)**
_License:_ PMD is licensed under a "BSD-style" license

PMD scans Java source code and looks for potential problems like:

* Possible bugs - empty try/catch/finally/switch statements
* Dead code - unused local variables, parameters and private methods
* Suboptimal code - wasteful String/StringBuffer usage
* Overcomplicated expressions - unnecessary if statements, for loops that could be while loops
* Duplicate code - copied/pasted code means copied/pasted bugs

You can download everything from here, and you can get an overview of all the rules at the rulesets index page.

PMD is integrated with JDeveloper, Eclipse, JEdit, JBuilder, BlueJ, CodeGuide, NetBeans/Sun Java Studio Enterprise/Creator, IntelliJ IDEA, TextPad, Maven, Ant, Gel, JCreator, and Emacs.

**2. FindBug from [http://findbugs.sourceforge.net](http://findbugs.sourceforge.net)**
_License:_ L-GPL

FindBugs, a program which uses static analysis to look for bugs in Java code. And since this is a project from my alumni university (IEEE - University of Maryland, College Park - Bill Pugh) , I have to definitely add this contribution to this list.

**3. Clover from [http://www.cenqua.com/clover/](http://www.cenqua.com/clover/)**
_License:_ Free for Open Source (more like a GPL)

Measures statement, method, and branch coverage and has XML, HTML, and GUI reporting. and comprehensive plug-ins for major IDEs.

* Improve Test Quality
* Increase Testing Productivity
* Keep Team on Track

Fully integrated plugins for NetBeans, Eclipse , IntelliJ IDEA, JBuilder and JDeveloper. These plugins allow you to measure and inspect coverage results without leaving the IDE.
Seamless Integration with projects using Apache Ant and Maven. * Easy integration into legacy build systems with command line interface and API.
Fast, accurate, configurable, detailed coverage reporting of Method, Statement, and Branch coverage.
Rich reporting in HTML, PDF, XML or a Swing GUI
Precise control over the coverage gathering with source-level filtering.
Historical charting of code coverage and other metrics.
Fully compatible with JUnit 3.x & 4.x, TestNG, JTiger and other testing frameworks. Can also be used with manual, functional or integration testing.

**4. Macker from [http://innig.net/macker/](http://innig.net/macker/)**
_License:_ GPL

Macker is a build-time architectural rule checking utility for Java developers. It's meant to model the architectural ideals programmers always dream up for their projects, and then break -- it helps keep code clean and consistent. You can tailor a rules file to suit a specific project's structure, or write some general "good practice" rules for your code. Macker doesn't try to shove anybody else's rules down your throat; it's flexible, and writing a rules file is part of the development process for each unique project.

**5 EMMA from [http://emma.sourceforge.net/](http://emma.sourceforge.net/)**
_License:_ EMMA is distributed under the terms of Common Public License v1.0 and is thus free for both open-source and commercial development.

Reports on class, method, basic block, and line coverage (text, HTML, and XML).

EMMA can instrument classes for coverage either offline (before they are loaded) or on the fly (using an instrumenting application classloader).

Supported coverage types: class, method, line, basic block. EMMA can detect when a single source code line is covered only partially.

Coverage stats are aggregated at method, class, package, and "all classes" levels.

Output report types: plain text, HTML, XML. All report types support drill-down, to a user-controlled detail depth. The HTML report supports source code linking.

Output reports can highlight items with coverage levels below user-provided thresholds.

Coverage data obtained in different instrumentation or test runs can be merged together.

EMMA does not require access to the source code and degrades gracefully with decreasing amount of debug information available in the input classes.

EMMA can instrument individial .class files or entire .jars (in place, if desired). Efficient coverage subset filtering is possible, too.

Makefile and ANT build integration are supported on equal footing.

EMMA is quite fast: the runtime overhead of added instrumentation is small (5-20%) and the bytecode instrumentor itself is very fast (mostly limited by file I/O speed). Memory overhead is a few hundred bytes per Java class.

EMMA is 100% pure Java, has no external library dependencies, and works in any Java 2 JVM (even 1.2.x).

**6. XRadar from [http://xradar.sourceforge.net/](http://xradar.sourceforge.net/)**
_License:_ BSD (me thinks)

The XRadar is an open extensible code report tool currently supporting all Java based systems. The batch-processing framework produces HTML/SVG reports of the systems current state and the development over time - all presented in sexy tables and graphs.

The XRadar gives measurements on standard software metrics such as package metrics and dependencies, code size and complexity, code duplications, coding violations and code-style violations.

**7. Hammurapi from Hammurapi Group**
_License:_ (if anyone knows the license for this email me Venkatt.Guhesan at Y! dot com)

Hammurapi is a tool for execution of automated inspection of Java program code. Following the example of 282 rules of Hammurabi's code, we are offered over 120 Java classes, the so-called inspectors, which can, at three levels (source code, packages, repository of Java files), state whether the analysed source code contains violations of commonly accepted standards of coding.

Relevant Links:
http://en.sdjournal.org/products/articleInfo/93
http://wiki.hammurapi.biz/index.php?title=Hammurapi_4_Quick_Start

**8. Relief from [http://www.workingfrog.org/](http://www.workingfrog.org/)**
_License:_ GPL

Relief is a design tool providing a new look on Java projects. Relying on our ability to deal with real objects by examining their shape, size or relative place in space it gives a "physical" view on java packages, types and fields and their relationships, making them easier to handle.

**9. Hudson from [http://hudson-ci.org/](http://hudson-ci.org/)**
License: MIT

Hudson is a continuous integration (CI) tool written in Java, which runs in a servlet container, such as Apache Tomcat or the GlassFish application server. It supports SCM tools including CVS, Subversion, Git and Clearcase and can execute Apache Ant and Apache Maven based projects, as well as arbitrary shell scripts and Windows batch commands.

**10. Cobertura from [http://cobertura.sourceforge.net/](http://cobertura.sourceforge.net/)**
License: GNU GPL

Cobertura is a free Java tool that calculates the percentage of code accessed by tests. It can be used to identify which parts of your Java program are lacking test coverage. It is based on jcoverage.

**11. SonarSource from [http://www.sonarsource.org/](http://www.sonarsource.org/)** (recommended by Vishwanath Krishnamurthi - thanks)
License: LGPL

Sonar is an open platform to manage code quality. As such, it covers the 7 axes of code quality:

Architecture & Design, Duplications, Unit Tests, Complexity, Potential bugs, Coding rules, Comments.

(Article was originally published on my first blog at blogspot.com)

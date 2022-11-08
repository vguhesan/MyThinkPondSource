---
author: vguhesan
categories:
- Gradle
- Grails
- Spring
- Spring Framework
comments: true
date: 2016-11-03T20:47:00Z
link: http://mythinkpond.com/2016/11/03/gradle-spring-woes-issues-in-creating-single-jar-bundle-with-all-dependency-jars-nested-within/
slug: gradle-spring-woes-issues-in-creating-single-jar-bundle-with-all-dependency-jars-nested-within
tags:
- fatJar
- shadowJar
- spring.handlers
- spring.schemas
title: 'Gradle Spring Woes: Issues in creating single jar bundle with all dependency
  jars nested within'
url: /2016/11/03/gradle-spring-woes-issues-in-creating-single-jar-bundle-with-all-dependency-jars-nested-within/
wordpress_id: 1161
---

[![springframework](/img/2016/11/springframework.png)](/img/2016/11/springframework.png)If you're implementing any projects with Spring and Gradle (for build), as your project grows you may run into this issue. Or you've landed on this page by searching on Google for "Unable to locate Spring NamespaceHandler for XML schema namespace" (your actual XML that it's error-ing out may vary).

Either way, you're in luck! Most likely, you're using the fatjar gradle plugin to create a single JAR for executing as "java -jar one-big-bundle.jar". The problem that happens is that if two or more dependent jar libraries contain the same file/artifact, then the last one wins the race in the fatjar bundle.

Let me illustrate this with an example:

Let's say that your project depends on Spring-Context and Spring-Core. Within each jar, there maybe resources that have a common name such as META-INF/[spring.schemas](http://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/extensible-xml.html#extensible-xml-registration-spring-schemas) and/or META-INF/[spring.handler](http://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/extensible-xml.html#extensible-xml-registration-spring-handlers) (To learn more about the two individual files and their purpose in Spring, click on the links). When the fatjar combines the two JAR file, depending upon who goes last, the version of the above two files may belong to one or the other library. What should happen in reality is that it merges the two files contents. They maybe good for some files. But if you have a specific file in a format where you simply cannot concatenate the two files (such as a nested XML or JSON), simply combining the two files will not work. You may need to extend the Gradle plugin tasks to perform something selective and unique to your situation.

But if you ended up here after searching for "Unable to locate Spring NamespaceHandler for XML schema namespace" message, there is hope. You can simply, add the following to the [fatJar](https://github.com/musketyr/gradle-fatjar-plugin) Gradle plugin and problem is solved:

<pre><code language="javascript">
fatJarPrepareFiles {
  include 'META-INF/spring.handlers'
  include 'META-INF/spring.schemas'
}
</code></pre>

A second option is to use a newer plugin called [shadow](https://github.com/johnrengelman/shadow). [[User Guide](http://imperceptiblethoughts.com/shadow/)]

<pre><code language="javascript">
...
apply plugin: 'com.github.johnrengelman.shadow'
...
buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.github.jengelman.gradle.plugins:shadow:1.2.4'
    }
}
...
//For building a single jar with all dependencies run "gradlew shadowJar"
// Configure the shadow jar task
shadowJar {
    mergeServiceFiles()
}

jar {
    manifest {
        attributes 'Implementation-Title': 'application name',
                'Implementation-Version': version,
                'Main-Class': 'com.guhesan.fooapp.Application'
    }
}
</code></pre>

Cheers!

_Today's Inspirational Quote:_


<blockquote>...Bliss is not something to be got.
On the other hand you are always Bliss.
This desire [for Bliss] is born of the sense of incompleteness.
To whom is this sense of incompleteness? Enquire.
In deep sleep you were blissful.
Now you are not so.
What has interposed between that Bliss and this non-bliss?
It is the ego.
Seek its source and find you are Bliss.
- [Ramana Maharishi](http://peacefulrivers.homestead.com/maharshi.html)|[2nd link](https://en.wikipedia.org/wiki/Ramana_Maharshi) (Spiritual Teacher & one of the great minds of this century)</blockquote>


-AUM

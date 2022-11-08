---
author: vguhesan
categories:
- Gradle
- Grails
- Java
- Spring
- Spring Framework
comments: true
date: 2016-11-29T13:42:47Z
link: http://mythinkpond.com/2016/11/29/grails-no-profile-found-for-name-web-illegalstateexception/
slug: grails-no-profile-found-for-name-web-illegalstateexception
tags:
- Grails Profile
- IllegalStateException
- No profile found
- web
title: Grails No profile found for name [web] illegalstateexception
url: /2016/11/29/grails-no-profile-found-for-name-web-illegalstateexception/
wordpress_id: 1244
---

[![Grails](/img/2013/11/grails.png)](/img/2013/11/grails.png)Most likely you've landed on this page because you've searched for the error in a search engine and it brought you here.

**Symptom:** When you run "grails" under an existing project that you previously had (either on a different PC or from a source-control like GIT or SVN and you've mistakenly included the "build" directory).

The associated error would have been one of the following:

<pre><code language="shell">
Grails No profile found for name [web]

or

java.lang.IllegalStateException: No profile found for name [web].
at org.grails.cli.GrailsCli.initializeProfile(GrailsCli.groovy:507)
at org.grails.cli.GrailsCli.initializeApplication(GrailsCli.groovy:308)
at org.grails.cli.GrailsCli.execute(GrailsCli.groovy:271)
at org.grails.cli.GrailsCli.main(GrailsCli.groovy:162)
| Error Error occurred running Grails CLI: No profile found for name [web]
</code></pre>

Either way, here's how you can quickly resolve this issue and get back in business.

**Solution:**

**Step-1**: Remove ".grails" under your "home" directory.

<pre><code language="shell">
rm -rf ~/.grails/
</code></pre>

**Step-2**: Create a temporary *new* project

<pre><code language="shell">
cd /temp/</pre>

grails create-app bookstore
# This will create a new scafolding and download the dependencies
</code></pre>

**Step-3**: Remove the "build" directory under your *original* Grails project where you had the problem to begin with.

<pre><code language="shell">
cd ~/my_original_grails_project/;
rm -rf ./build/
# Remove the old "build" directory
</code></pre>

**Step-4**: Run Grails once again under your *original* Grails project

<pre><code language="shell">
cd ~/my_original_grails_project/;
grails
</code></pre>

You should see a whole bunch of dependencies being downloaded for this project like the following and you will end up with the Grails prompt:

<pre><code language="shell">
Download https://repo.grails.org/grails/core/com/google/guava/guava/18.0/guava-18.0.pom
Download https://repo.grails.org/grails/core/com/google/guava/guava-parent/18.0/guava-parent-18.0.pom
Download https://repo.grails.org/grails/core/net/java/dev/jna/jna/4.1.0/jna-4.1.0.pom
Download https://repo.grails.org/grails/core/org/eclipse/jetty/jetty-util/9.2.18.v20160721/jetty-util-9.2.18.v20160721.pom
Download https://repo.grails.org/grails/core/org/eclipse/jetty/jetty-io/9.2.18.v20160721/jetty-io-9.2.18.v20160721.pom
Download https://repo.grails.org/grails/core/org/eclipse/jetty/websocket/websocket-common/9.2.18.v20160721/websocket-common-9.2.18.v20160721.pom
Download https://repo.grails.org/grails/core/org/eclipse/jetty/websocket/websocket-api/9.2.18.v20160721/websocket-api-9.2.18.v20160721.pom
Download https://repo.grails.org/grails/core/org/grails/grails-plugin-testing/3.1.10/grails-plugin-testing-3.1.10.jar
Download https://repo.grails.org/grails/core/org/grails/grails-test/3.1.10/grails-test-3.1.10.jar
Download https://repo.grails.org/grails/core/org/springframework/boot/spring-boot-starter-test/1.3.7.RELEASE/spring-boot-starter-test-1.3.7.RELEASE.jar
Download https://repo.grails.org/grails/core/org/seleniumhq/selenium/selenium-support/2.47.1/selenium-support-2.47.1.jar
Download https://repo.grails.org/grails/core/org/seleniumhq/selenium/selenium-remote-driver/2.47.1/selenium-remote-driver-2.47.1.jar
Download https://repo.grails.org/grails/core/org/eclipse/jetty/websocket/websocket-client/9.2.18.v20160721/websocket-client-9.2.18.v20160721.jar
Download https://repo.grails.org/grails/core/org/seleniumhq/selenium/selenium-api/2.47.1/selenium-api-2.47.1.jar
Download https://repo.grails.org/grails/core/com/google/guava/guava/18.0/guava-18.0.jar
Download https://repo.grails.org/grails/core/net/java/dev/jna/jna/4.1.0/jna-4.1.0.jar
Download https://repo.grails.org/grails/core/org/eclipse/jetty/jetty-util/9.2.18.v20160721/jetty-util-9.2.18.v20160721.jar
Download https://repo.grails.org/grails/core/org/eclipse/jetty/jetty-io/9.2.18.v20160721/jetty-io-9.2.18.v20160721.jar
Download https://repo.grails.org/grails/core/org/eclipse/jetty/websocket/websocket-common/9.2.18.v20160721/websocket-common-9.2.18.v20160721.jar
Download https://repo.grails.org/grails/core/org/eclipse/jetty/websocket/websocket-api/9.2.18.v20160721/websocket-api-9.2.18.v20160721.jar
Download https://repo.grails.org/grails/core/org/grails/profiles/web/3.1.9/web-3.1.9.pom
Download https://repo.grails.org/grails/core/org/grails/profiles/base/3.1.9/base-3.1.9.pom
Download https://repo.grails.org/grails/core/org/grails/profiles/web/3.1.9/web-3.1.9.jar
Download https://repo.grails.org/grails/core/org/grails/profiles/base/3.1.9/base-3.1.9.jar
| Enter a command name to run. Use TAB for completion:
grails>
</code></pre>

Now you're all set and ready to go.

Cheers!
<table >
<tbody >
<tr >

<td colspan="2" bgcolor="#C2C9CC" >_Today's inspirational quote:_
</td>
</tr>
<tr >

<td valign="middle" >[![bust_of_marcusaurelius](/img/2016/11/bust_of_marcusaurelius.jpg)](/img/2016/11/bust_of_marcusaurelius.jpg)
</td>

<td valign="middle" >



 	
  * When you need encouragement, think of the qualities the people around you have: this one’s energy, that one’s modesty, another’s generosity, and so on. Nothing is as encouraging as when virtues are visibly embodied in the people around us, when we’re practically showered with them. It’s good to keep this in mind.

 	
  * You have power over your mind—not outside events. Realize this, and you will find strength.




- [Emperor Marcus Aurelius](https://en.wikipedia.org/wiki/Marcus_Aurelius) in [Meditations](https://en.wikipedia.org/wiki/Meditations)

</td>
</tr>
</tbody>
</table>

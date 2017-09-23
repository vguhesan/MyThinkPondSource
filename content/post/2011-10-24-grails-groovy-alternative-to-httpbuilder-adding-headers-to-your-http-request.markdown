---
author: vguhesan
categories:
- Grails
- Groovy
comments: true
date: 2011-10-24T16:37:56Z
link: http://mythinkpond.com/2011/10/24/grails-groovy-alternative-to-httpbuilder-adding-headers-to-your-http-request/
slug: grails-groovy-alternative-to-httpbuilder-adding-headers-to-your-http-request
tags:
- http
- set headers
- URL
title: Grails - Groovy - Alternative to HttpBuilder - adding headers to your HTTP
  request
url: /2011/10/24/grails-groovy-alternative-to-httpbuilder-adding-headers-to-your-http-request/
wordpress_id: 258
---

Developing with Grails and Groovy can be a blessing and and pain all at the same time. The development moves at a rapid rate but when you decide to include libraries that depend on other libraries, your pain starts to build up. For example, when you include the module "HttpBuilder"in your project you may run into issues with Xerces and xml-apis, especially when you attempt to deploy the WAR file under Tomcat. These libraries are included as part of Tomcat and so an older version of those classes may give you a heartburn.

If your objective is to use some raw HTTP classes to create your requests and responses, then you can use the basic URL class to do most of the raw connection options. Although using HttpBuilder makes it a clean implementation, the URL class gives you very similar power without all the overhead of including the dependency classes.

[sourcecode language="jscript"]

def urlConnect = new URL(url)
def connection = urlConnect.openConnection()
//Set all of your needed headers
connection.setRequestProperty("X-Forwarded-For", "<your ip address>")

if(connection.responseCode == 200){
responseText = connection.content.text
}
else{
println "An error occurred:"
println connection.responseCode
println connection.responseMessage
}
[/sourcecode]

So the trick to the Groovy URL class is to use the "openConnection()" method and then gain access to some of the raw functionality.

Cheers.

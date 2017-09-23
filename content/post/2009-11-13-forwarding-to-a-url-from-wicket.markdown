---
author: vguhesan
categories:
- Java
- Scala
- Wicket
comments: true
date: 2009-11-13T18:21:56Z
excerpt: Forwarding to a URL from Wicket
link: http://mythinkpond.com/2009/11/13/forwarding-to-a-url-from-wicket/
slug: forwarding-to-a-url-from-wicket
title: Forwarding to a URL from Wicket
url: /2009/11/13/forwarding-to-a-url-from-wicket/
wordpress_id: 43
---

Sometimes we need to forward to a servlet or resource that's outside of Wicket such as a servlet. Here's how:

1. Modify your web.xml to define your servlet as well as your Wicket application "ignorePaths" init-param:

[sourcecode language="xml"]
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN" "http://java.sun.com/dtd/web-app_2_3.dtd">
<web-app>
 <display-name>Wicket Example</display-name>
 <filter>
 <filter-name>MyApplication</filter-name>
 <filter-class>org.apache.wicket.protocol.http.WicketFilter</filter-class>
 <init-param>
 <param-name>applicationClassName</param-name>
 <param-value>com.gu.MyApplication</param-value>
 </init-param>
 <init-param>
 <param-name>wicket.configuration</param-name>
 <param-value>deployment</param-value>
 </init-param>
 <init-param>
 <param-name>ignorePaths</param-name>
 <param-value>images/,s/</param-value>
 </init-param>
 </filter>
 <filter-mapping>
 <filter-name>MyApplication</filter-name>
 <url-pattern>/*</url-pattern>
 </filter-mapping>
 <servlet>
 <servlet-name>SomeServlet</servlet-name>
 <servlet-class>com.gu.SomeServlet</servlet-class>
 </servlet>
 <servlet-mapping>
 <servlet-name>SomeServlet</servlet-name>
 <url-pattern>/s/koolkat.do</url-pattern>
 </servlet-mapping>
</web-app>
[/sourcecode]

The first observation is that Wicket is running as a Filter and not a Servlet. Second, the init-param - "ignorePaths" says that anything in the "/images" and "/s/*" will be ignored by Wicket Filter and passed along downstream.

2. Next in your Wicket Form, within your onSubmit method override you can do the following:

[sourcecode language="Java"]
class TestForm extends Form(id){
  @override
  public TestForm(String id, SomeFormModel ghfm)
  {
    //Code removed
  }
  @override
  public onSubmit()
  {
    String url = "/s/koolkat.do"; //some url within the same web-context
    getRequestCycle().setRequestTarget(new RedirectRequestTarget(url));
  }
}
[/sourcecode]

Notice that the url field **does not** contain the "ContextPath". Wicket takes care of that in the background. On the other hand, suppose you wanted to redirect to a URL ourside of your web context or to an external site then you would set the variable like this.

[sourcecode language="Java"]
String url = "http://mythinkpond.wordpress.com/2009/11/13/forwarding-to-a-url-from-wicket/";  //or
url = "http://myserver:port/othercontext/someurl";  
[/sourcecode]

On some rare occasions, you might want to get the servlet Request Dispatcher to forward a request. For that it gets a little tricky.

-- In your  class you want to grab the "HttpServletResponse". I've been unsuccessful in getting it in the  class.
[sourcecode language="Java"]
class xyz extends WebPage{
  public xyz()
  {
     HttpServletResponse response = getWebRequestCycle().getWebResponse().getHttpServletResponse();
     //additional code
     xyxForm thisForm = new xyzForm(thisModel, response);
  }
}

class xyzForm extends Form{
  HttpServletResponse response;

  public xyzForm(xyzModel model, HttpServletResponse thisResponse)
  {
     response = thisResponse;
  }
    
   public onSubmit() {
     HttpServletRequest request = getWebRequest().getHttpServletRequest();
     //additional code here
     getWebRequest().getHttpServletRequest().getRequestDispatcher(url).forward(request, response);
  }
}
[/sourcecode]



<blockquote>Please note that the above code is pseudo-code and not actual code because I was writing it in Scala and not Java. But for the audience, I'm trying to express it in Java so that it can have the greatest impact.</blockquote>



That's it! Happy Coding!



<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

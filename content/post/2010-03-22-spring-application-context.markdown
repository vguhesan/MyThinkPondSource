---
author: vguhesan
categories:
- Programming
- Spring
comments: true
date: 2010-03-22T17:09:21Z
excerpt: 'Spring 3.0 - Application Context - two ways to get the context '
link: http://mythinkpond.com/2010/03/22/spring-application-context/
slug: spring-application-context
title: 'Spring 3.0 - Application Context - three ways to get the context '
url: /2010/03/22/spring-application-context/
wordpress_id: 90
---

In searching Google for "Spring [ApplicationContextAware](http://static.springframework.org/spring/docs/2.0.x/api/org/springframework/context/ApplicationContextAware.html)", you come across a lot of recommendations and I also see a lot of folks continuing to complain saying that their setApplicationContext method does not get invoked. So to help clarify, I'm blogging a few notes in hope that it helps clarify a few things.

Two Ways to Get Application Context:

**Method #1**:  In your class you implement [ApplicationContextAware](http://static.springframework.org/spring/docs/2.0.x/api/org/springframework/context/ApplicationContextAware.html) class like this:

[sourcecode language="jscript"]

public class MyClass implements ApplicationContextAware {

    static final long serialVersionUID = 02L;

    ApplicationContext applicationContext = null;

    public void doSomething(){
        if (applicationContext != null && applicationContext.containsBean("accessKeys")){
            MyBean beanA = (MyBean) applicationContext.getBean("mybean");
            //Do something with this AccessBean
        }

        return null;
    }

    @Override
    public void setApplicationContext(final ApplicationContext applicationContext) throws BeansException {
        System.out.println("setting context");
        this.applicationContext = applicationContext;
    }

}

[/sourcecode]

**Method #2**: If you are in a Java Servlet, you can do the following:

[sourcecode language="jscript"]

public class gzservlet extends HttpServlet {
    static final long serialVersionUID = 02L;

    ApplicationContext applicationContext = null;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (applicationContext == null){
            System.out.println("setting context in get");
            applicationContext = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext());
        }
        if (applicationContext != null && applicationContext.containsBean("accessKeys")){
            AccessBean thisAccessBean = (AccessBean) applicationContext.getBean("accessKeys");
            req.setAttribute("keys", thisAccessBean.toString());
            System.out.println("setting keys");
        }

        req.getRequestDispatcher("/index2.jsp").include(req,resp);
    }

}

[/sourcecode]

So the question one would ask is when to use what? And the answer is. Depends on how you are invoking Spring.

What works for Method #1: when you invoke Spring you are using the DispatcherServlet link this. Then Method #1 will resolve the implementation of ApplicationContextAware and call the setApplicationContext() method to set the context.

[sourcecode language="jscript"]
In web.xml.

<servlet>
	<servlet-name>dispatchservlet</servlet-name>
	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
	<servlet-name>dispatchservlet</servlet-name>
	<url-pattern>/*</url-pattern>
</servlet-mapping>

[/sourcecode]

If you are not using the DispatcherServlet and you are initializing Spring using a Listener and you have your own Servlet that's driving the Request\Response scope then use Method #2. Below is an example of how the web.xml will look like in this case.

[sourcecode language="jscript"]

<listener>
   <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>

<servlet>
  <servlet-name>MyOwnServlet</servlet-name>
  <servlet-class>com.something.myservlet</servlet-class>
  <load-on-startup>2</load-on-startup>
</servlet>

<servlet-mapping>
  <servlet-name>MyOwnServlet</servlet-name>
  <url-pattern>*.do</url-pattern>
</servlet-mapping>

[/sourcecode]

I hope this clarifies why sometimes even though you have implemented the ApplicationContextAware interface, your setter does not get invoked.

[09/12/2010] Here is a third way to get your context:

Create the following class with a static method to get your context:

[sourcecode language="jscript"]

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class ApplicationContextProvider implements ApplicationContextAware{
 private static ApplicationContext ctx = null;
 public static ApplicationContext getApplicationContext() {
return ctx;
 }
 public void setApplicationContext(ApplicationContext ctx) throws BeansException {
this.ctx = ctx;
 }
}
[/sourcecode]

and in your spring bean configuration xml file add the following:

[sourcecode language="jscript"]

<bean id="applicationContextProvider" class="ApplicationContextProvider"></bean>

[/sourcecode]

And now in your classes, you can do the following:

    
    ApplicationContext ctx = ApplicationContextProvider.getApplicationContext();


That's it!!!

Cheers.


<blockquote>If you find this article useful, consider signing up for my RSS feed or Email Newsletter. See links on the right side.</blockquote>

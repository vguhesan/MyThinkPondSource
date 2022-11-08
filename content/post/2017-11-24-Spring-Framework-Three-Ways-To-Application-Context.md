+++
title = "Spring Framework - Application Context - three ways to get to the application context"
description = "Three ways to get to the application context in Spring Framework"
date = "2017-11-24T13:28:10-05:00"
categories = [
  "Programming",
  "Spring Framework"
]
tags = [
  "Spring Framework",
  "Spring",
  "application context",
  "Context",
  "applicationContext",
  "Spring Boot"
]
thumbnail = "/img/logo/spring.png"
+++

![Semiconductor](/img/logo/springframework.png)

This article shows you three different ways how to get to the Spring Framework Application Context in your code. 

## Summary

(This is a repost of an older article I wrote in 2010). 
In searching Google for "Spring [ApplicationContextAware](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/ApplicationContextAware.html)", you will come across a lot of recommendations and I also see a lot of folks continuing to complain saying that their setApplicationContext method does not get invoked. So to help clarify, I'm blogging a few notes in hope that it helps clarify how the context works.

## Method-1

In your class you implement [ApplicationContextAware](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/ApplicationContextAware.html) class like this:

<pre><code class="language-java line-numbers">public class MyClass implements ApplicationContextAware {

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
</code></pre>

## Method-2

If you are in a Java Servlet, you can do the following:


<pre><code class="language-java line-numbers">public class gzservlet extends HttpServlet {
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
</code></pre>

So the question one would ask is when to use what? And the answer is. Depends on how you are invoking Spring.

What works for Method #1: when you invoke Spring you are using the DispatcherServlet link this. Then Method #1 will resolve the implementation of ApplicationContextAware and call the setApplicationContext() method to set the context.

In web.xml:

<script type="text/plain" class="language-markup">
<servlet>
	<servlet-name>dispatchservlet</servlet-name>
	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
	<servlet-name>dispatchservlet</servlet-name>
	<url-pattern>/*</url-pattern>
</servlet-mapping>
</script>


If you are not using the DispatcherServlet and you are initializing Spring using a Listener and you have your own Servlet that's driving the Request\Response scope then use Method #2. Below is an example of how the web.xml will look like in this case.

<script type="text/plain" class="language-markup">
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
</script>


I hope this clarifies why sometimes even though you have implemented the ApplicationContextAware interface, your setter does not get invoked.

[09/12/2010] Here is a third way to get your context:

Create the following class with a static method to get your context:

<pre><code class="language-java line-numbers">
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
</code></pre>

and in your spring bean configuration xml file add the following:

<script type="text/plain" class="language-markup">
<bean id="applicationContextProvider" class="ApplicationContextProvider"></bean>
</script>

And now in your classes, you can do the following:

<pre><code class="language-java line-numbers">    
ApplicationContext ctx = ApplicationContextProvider.getApplicationContext();
</code></pre>

That's it!!!

Cheers.

<blockquote>If you find this article useful, consider signing up for my email or repost this on your favorite social site. See links on the right navigation.</blockquote>

**Now for Today's Inspiration** 
<blockquote>To be innovative, we can't look to what others have done. The whole idea of blazing a path is that there was no path there before. Be innovative today!</blockquote>


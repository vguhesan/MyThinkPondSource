+++
categories = []
date = "2018-11-30T17:23:34+00:00"
description = "How-To create nested Components within Components?"
tags = []
thumbnail = "/img/logo/angularicon1.png"
title = "Angular - Components within Components"

+++
> It's good to be back blogging after a long hiatus. :-)

With the earlier versions of Angular creating nested components was not possible but with Angular6+ you can create nested components within components. Here's how you can create them using the angular-cli. You can also perform the steps manually by creating the needed files one by one under a hierarchical structure as shown below.

Let's take a look at an example of what we are trying to create.

#### Why nest Angular Components?

Let's say we have a "Shopping" feature (as shown in this example below) and we want to have sub-components such as "Shopping-List", "Shopping-List-Edit" option and so on. Traditionally, you would have created that as a flat list of components all organized under the /app directory. But as the project grows or as you have more team-members added to your project, you project gets more complex and you end up with too many files under /app directory making it difficult to manage and support. So having a hierarchical structure for your components makes sense. This also creates a mental visual as to how each of the components are related.

![](/img/11-2018/Angular-Components.jpg)

Here is how you will create the nested components under Angular (using the Angular-cli)

<pre><code class="language-javascript line-numbers">
// long-form, generates shopping component artifacts
ng generate component shopping
// short-form
ng g c shopping
// Create shopping-list below shopping
// Generates shopping-list artifacts under shopping component
ng g c shopping/shopping-list

// ** Complex Use-Case - Adding Components Into A Different Module **

// Using components with same name (not recommended)
// Let's say you had multiple modules,
// where you may have app.module.ts and leftnav.module.ts
// and you wanted to create this about-us under each module but
// use the same name then you can do the following
ng g c shopping/about-us --module=app.module
ng g c left-nav/about-us --module=leftnav.module
// This will add the newly created components as a member of that particular module.
</code></pre>
    
    
    

It's that simple.

If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share the more my content can reach others. Thank you for helping spread the word!

Now for Today's Inspiration:

> Three Steps In Cultivating **Willpower**:
>
> 1. **Finish** what you begin.
> 2. Do a little **bit more** than you think you can.
> 3. Do a little **bit better** than you think you can.

Cheers!
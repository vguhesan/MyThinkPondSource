+++
categories = []
date = "2018-11-30T17:23:34+00:00"
description = "How-To create nested Components within Components?"
draft = true
tags = []
thumbnail = "/img/logo/angularicon1.png"
title = "Angular - Components within Components"

+++
> It's good to be back blogging after a long hiatus. :-)

With the earlier versions of Angular creating nested components was not possible but with Angular6+ you can create nested components within components. Here's how you can create them using the angular-cli. You can also perform the steps manually by creating the needed files one by one under a hierarchical structure as shown below.

Let's take a look at an example of what we are trying to create.

#### Why nest Angular Components?

Let's say we have a "Shopping" feature (as shown in this example below) and we want to have sub-components such as "Shopping-List", "Shopping-List-Edit" option and so on. Traditionally, you would have created that as a flat list of components all organized under the /app directory. But as the project grows or as you have more team-members added to your project, you project gets more complex and you end up with too many files under /app directory making it difficult to manage and support. So having a hierarchical structure for your components makes sense. This also creates a mental visual as to how each of the components are related.
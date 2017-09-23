---
author: vguhesan
categories:
- GoLang
- Revel Web Framework
comments: true
date: 2016-01-26T01:05:42Z
link: http://mythinkpond.com/2016/01/25/go-lang-revel-web-framework-gitignore-file-starter-sample/
slug: go-lang-revel-web-framework-gitignore-file-starter-sample
tags:
- .gitignore
- GIT
- Go
- Revel
title: Go lang - Revel Web Framework - .gitignore file starter sample
url: /2016/01/26/go-lang-revel-web-framework-gitignore-file-starter-sample/
wordpress_id: 977
---

[![gorevelframework](/img/2016/01/gorevelframework.png)](/img/2016/01/gorevelframework.png)For those of you trying to create a new Go Language - Revel Web Framework based project, here is a sample .gitignore file.

But before I provide you with the information, we need to discuss the project structure. If you visit the Revel site [here](https://revel.github.io/manual/organization.html), you will see their organization structure of a Revel project. In my case, their my_gocode/ folder is much deeper in what I store in my BitBucket account (or GitHub for that matter).

    
    .
    ├── code
    │   ├── bin
    │   │   └── revel
    │   ├── pkg
    │   └── src
    │       ├── github.com
    ...
    │       ├── golang.org
    ...
    │       ├── gopkg.in
    ...
    │       └── mywebsite.com
    │           └── web
    │               ├── app
    │               │   ├── controllers
    │               │   │   └── app.go
    │               │   ├── init.go
    │               │   └── views
    │               │       ├── App
    │               │       │   └── Index.html
    │               │       ├── debug.html
    │               │       ├── errors
    │               │       │   ├── 404.html
    │               │       │   └── 500.html
    │               │       ├── flash.html
    │               │       ├── footer.html
    │               │       └── header.html
    │               ├── conf
    │               │   ├── app.conf
    │               │   └── routes
    │               ├── messages
    │               │   └── sample.en
    │               ├── public
    │               │   ├── css
    │               │   │   └── bootstrap.css
    │               │   ├── img
    │               │   │   ├── favicon.png
    │               │   │   ├── glyphicons-halflings.png
    │               │   │   └── glyphicons-halflings-white.png
    │               │   └── js
    │               │       └── jquery-1.9.1.min.js
    │               ├── README.md
    │               └── tests
    │                   └── apptest.go
    ├── design
    │   ├── logo-design1.png
    │   ├── logo-design1.psd
    │   ├── logo-final.png
    │   └── logo-design2.psd
    ├── resources
    │   └── some-materialcss-templates
    ...
    
    


As you can see my structure also includes some PhotoShop artefacts that also needs to be stored in my BitBucket (GIT) project. In my case, I want to ignore some of the go lang artefacts and revel artefacts.

So in the project-root, I created a .gitignore with the following contents relative to my project-root:

    
    code/bin/
    code/pkg/
    code/src/github.com/
    code/src/golang.org/
    code/src/gopkg.in/
    


The above tells GIT to ignore the "github.com/**", "golang.org/**" and "gopkg.in/**" subdirectories. As you add additional dependencies, you can revise and add to the above .gitignore file as needed.

Cheers!



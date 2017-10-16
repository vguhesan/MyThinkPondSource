# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Notes ###

git clone https://github.com/vimux/mainroad ./themes/mainroad
hugo server --theme=mainroad

To generate static public content run:
hugo
Copy /public/** to static hosting website

To write a new blog post:
hugo new post/2017-10-28-{title}.md

Google Firebase Hosting:
https://firebase.google.com/docs/hosting/quickstart

$ firebase init

# Generated updated version of public directory
$ hugo
# Deploys content under public
$ firebase deploy

+++
title = "Converted Wordpress.com Hosted Blog to Hugo Static Blog :-)"
description = "Finally spent the time porting over the Wordpress.com hosted MyThinkPond blog over to a static Hugo blog."
date = "2017-09-23T23:42:33Z"
categories = [
	"Blog",
	"General",
	"Design",
	"Wordpress",
	"Hugo"
	]
tags = [
	"Blog",
	"General",
	"Design",
	"Wordpress",
	"Hugo"
	]
thumbnail = "/img/logo/webdevelopment3.png"
+++

## Summary

Thanks to [Hugo](https://gohugo.io/) Static Site generator written in GoLang and [Mainroad](https://github.com/Vimux/Mainroad/) Theme, I was able to port over my personal blog [MyThinkPond](http://www.mythinkpond.com) as a static generated website.

## Before and After

Here is a screenshot of the belore site:

**MyThinkPond under Wordpress hosting**

{{<img src="/img/2017/09/MyThinkPond-Screenshot-befoew.jpg" alt="MyThinkPond under Wordpress" width="640" align="center" class="imgframe">}}

Here is a screenshot of the belore site:

**MyThinkPond under Wordpress hosting**

{{<img src="/img/2017/09/MyThinkPond-Screenshot-after.jpg" alt="MyThinkPond under Hugo" width="640" align="center" class="imgframe">}}

I think it's a move in the right direction. Putting me in complete control of the content, images and all artifacts that goes into bundling the site.

## Why move away from Wordpress.com Hosted Blog?

Here are some reasons why I made the switch:

1. Felt locked down with their free with ads or paid model.
2. I needed to add some plugins available under Wordpress but since it is hosted under Wordpress.com, the paid version that allowed me to install the plugins was quite expensive (and only an annual payment option was available.)
3. Export option is very misleading. The comments on the site makes it sound like you own your content. But what gets bundled in the Export option is only an XML containing the blog content with URLs for all the image resources. 

	* First, you need to write some nifty script to extract all URLs out of the XML document.

	* Second, if you had more images under Media compared to the ones you linked then there is no clear way to download them except to create a page with all the images and then using a download software to pull down all the images.

	* Third, since Wordpress auto-scales the images to save on bandwidth, if you had a resized image on a blog page, then your download will contain the downsized image and not the original image. Unless you do some URL manupulation to arrive at the original image.

4. To install a Wordpress plugin such as Downloader requires a paid annual Business account. This is not worth the cost.
5. My cost to maintain the site was going up as I was adding individual services such as an SSL HTTPS site and ad-free and so on. Not worth the annual cost.
6. Noticed inconsistent load speeds of the same page throughout the day.
7. Supporting Videos required additional fees.
8. Not happy with the new admin interface. Eventhough it was designed to help the admin-user focus, I felt that the interface was making me go through loops to get something done.
9. Felt locked down with the short-URLs and eco-system. I noticed that over the years I have beeen using their short-URLs all over the place and now changing blog sites was becoming a dream. It felt that it's now or never.
10. Needed to version my content and being able to push the content into a GIT repository seemed like the missing ingredient that I needed.

## Why Hugo?

Here are some things that attracted me to Hugo:

1. See my earlier article [Hugo and Jekyll Compared](/2016/06/05/two-static-website-generators-explored-hugo-jekyll/). I have already done another website for a temple as a prototype using Hugo. See [SivaVishnu.org](http://sivavishnu.org/) 
2. With Hugo, it is one executable that's platform agnostic (Mac, Windows, Linux - coverage) for content creation. Deployment is the same for both Hugo and Jekyll. They both generate static content hosted on any flavor of web-server.
3. Felt comfortable working with Hugo written in GoLang than with Jekyll written in Ruby.

But if you are considering switching you should look at this site - [StaticGen](https://www.staticgen.com/). You will see that Jekyll has more hits with respect to development, forks and fewer bug counts. 

## Tips and Tricks

### Conversion Woes

Converting the Wordpress hosted site directly to Hugo was not easy. Here are the steps that I had to take:

1. Run Export under Wordpress Admin. This generates an XML file with all the blog content.
2. Write a Linux regular-expression parser that pulled all the Media (JPG, GIF, PNG) links out of the XML.
3. Download the media files using wget (while retaining the folder structure of the media files).
4. Identify the missing Media files that was not linked in any Wordpress blog content. I had about 30 images that did not have a link. Added those 30+ images to a temporary blog page.
5. Used a FireFox Media Downloader plugin to download those 30+ images (while retaining the folder path to the images). 
6. Use Jekyll's Wordpress XML to Jekyll converter utility (works with Python 2.7). [ExitWP](https://github.com/thomasf/exitwp)
7. Generated Jekyll site contains all Media resources still pointing to https://mythinkpond.files.wordpress.com/. Converted the URLs to all relative static path within the /static/img/** directory.
8. Then I used Hugo's Jekyll import command found at this location. [hugo import jekyll](https://gohugo.io/commands/hugo_import_jekyll/). This transformed my Jekyll site to Hugo based static site.
9. Investigated the variety of Themes available under Hugo and settled on [Mainroad](https://github.com/Vimux/Mainroad/).
10. Created some custom shortcodes to deal with IMG tags. Hugo does not provide a easy to use tag that can allow me to control the height and width of a img tag. The expectation is that it will be controlled via a style. With varying sizes for my images, it's hard to create many, many image style tags for each. So, I resorted to created a custom shortcode to deal with this.
11. Enabled highlight.js for the Programming Code Syntax Highlighter functionality.
12. Enabled Disqus for comments feature. (Although I cannot test it until it's live.)
13. Decided to leave the default Google Site Search (eventhough it is reported to go away)
14. Customized the Theme to include a background heade image. Some minor color changes. Chaged the theme to be full-width site for large UHD monitors. (Why waste the real-estate when you don't need to).
15. Edit each of the converted content to fix syntax and image resizes, thumbnails, etc. (Just got through the first set - still have few hundered more blog articles to go).
16. Generate "public" static site version.
17. Deciding on where it will be cheap to host the static HTML website. Now that I no longer have the complexity of a Wordpress/PHP hosting, I have many, many options available.

### Launch Site and change Nameservers (Yet to be done)

### Some missing features

* Auto-Social-Posting feature. Within Wordpress, when I published an article, it automatically sent a blurb of the post to social sites like Facebook, LinkedIn, Google+, etc. I need to figure out what my options are here with a static site. Maybe this is a feature that can be added by someone into Hugo. (Repost to Social Sites)
* Jet-Pack features that auto notified subscribers with a gist of any new article I published.
* I am going to loose my present subscribers. I will need to find a way to bring them back. Wordpress does not give me the email IDs of my subscribers. So I may need to post a farewell blog on the Wordpress version of MyThinkPond and ask them to resubscribe under the new Static sites functionality. Maybe Feedburner is a good replacement for this.
* Contact-Me functioanlity will need to be built.
* All the one-million or so plugins available under Wordpress. Eventhough I do not depend on them at this time but Wordpress has built a nice little eco-stream that has helped developers earn some serios bucks on Themes and Plugins.

So hopefully, you found this article worth while. 

PS: If you are reading this article, then I have successfully made the switch and you are now looking at the new MyThinkPond blog site. :-)

Cheers!


 


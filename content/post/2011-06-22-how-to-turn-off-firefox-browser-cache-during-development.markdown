---
author: vguhesan
categories:
- web development
comments: true
date: 2011-06-22T14:13:36Z
link: http://mythinkpond.com/2011/06/22/how-to-turn-off-firefox-browser-cache-during-development/
slug: how-to-turn-off-firefox-browser-cache-during-development
tags:
- Firefox
title: 'How-To: Turn off Firefox browser cache during development'
url: /2011/06/22/how-to-turn-off-firefox-browser-cache-during-development/
wordpress_id: 224
---

Sometimes (when your are developing) you may want to force fetching all content fresh all the time including images, resources such as style sheet etc. To facilitate this you can do the following:



	
  1. Open a new window or tab in Firefox.

	
  2. Type `about:config `in the address bar.

	
  3. Search for "cache" in the search bar and look for `network.http.use-cache` in the filtered results.

	
  4. Double-click it will toggle it from "true" to "false". Default should be "true".


And you're all set.

Sometime you want to force the cache on one particular page\request. You can do that by holding the "Ctrl" key while clicking reload or F5.

Cheers

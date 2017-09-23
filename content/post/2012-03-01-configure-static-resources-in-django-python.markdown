---
author: vguhesan
categories:
- Django
- Python
comments: true
date: 2012-03-01T17:53:35Z
link: http://mythinkpond.com/2012/03/01/configure-static-resources-in-django-python/
slug: configure-static-resources-in-django-python
tags:
- css
- django
- images
- static resources
title: Configure static resources in Django - Python
url: /2012/03/01/configure-static-resources-in-django-python/
wordpress_id: 333
---

Working on a Django project, one of the first things that one would encounter is configuring Django for static resources such as "css", "images", "jpeg" and "js". In looking at the "[StaticResources](https://docs.djangoproject.com/en/dev/howto/static-files/)" link that's part of the Django documentation, it's a bit cryptic for someone who's starting out in Django and Python. So here's a step-by-step on two ways to configure your static-resources in a Django project.

This method is described in the Django documentation and is probably the preferred approach.

1. Edit "settings.py" under your Django project and define the following variables:

[sourcecode language="jscript"]
STATIC_ROOT = ''
STATIC_URL = '/s/'
STATICFILES_DIRS = (
    'C://Projects//mydjangoproject//static//',
)
[/sourcecode]

2. Edit "urls.py" and add the following:

[sourcecode language="jscript"]
from spog import settings
...
if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^s/(?P<path>.*)$', 'django.views.static.serve',
           {'document_root': settings.STATIC_ROOT}),
    )
[/sourcecode]

Notice the extra comma at the end. That's very important!

3. Edit your html file, in this example index.html

[sourcecode language="html"]

<link rel="stylesheet" type="text/css" href="/s/css/grid960.css"/>

[/sourcecode]

4. Copy your resources to "C:\Projects\mydjangoproject\static\css\grid960.css".

5. python manage.py runserver 8080

6. Open browser and visit "http://localhost:8080/[YOUR_PAGE]".

If you notice the step-2 syntax, it is wrapped inside a "if settings.DEBUG" if-block. This variable will be false when you deploy to a production environment where you may have something like an Apache Web server serving all your static resources. So when you move to production, you can push all your static resources to be outside the project.


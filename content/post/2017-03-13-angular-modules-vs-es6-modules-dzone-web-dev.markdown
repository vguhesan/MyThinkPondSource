---
author: vguhesan
categories:
- Angular
- ES6
- Javascript
comments: true
date: 2017-03-13T14:19:53Z
link: http://mythinkpond.com/2017/03/13/angular-modules-vs-es6-modules-dzone-web-dev/
slug: angular-modules-vs-es6-modules-dzone-web-dev
tags:
- differences
- Module
title: Angular Modules vs ES6 Modules - DZone Web Dev
url: /2017/03/13/angular-modules-vs-es6-modules-dzone-web-dev/
wordpress_id: 1366
---

[![](/img/2017/03/angularicon1.png)](/img/2017/03/angularicon1.png)In this post, you'll find a quick tutorial explaining the difference between Angular Module and ESG Modules, and how to best use each of these platforms.

Here is a quick summary:

**ES6 Module Example:**

<pre><code language="JavaScript">

import { sqrt } from 'math-utils';

const addition = (val1, val2) =&gt; val1 + val2;
const subtraction = (val1, val2) =&gt; val1 - val2;
const multiplication = (val1, val2) =&gt; val1 * val2;
const calculateSquareRoot = (val) =&gt; sqrt(val);

export { addition, multiplication }

</code></pre>

**Angular Module Example:**

<pre><code language="JavaScript">

@NgModule({
imports: [ BrowserModule, HttpModule, FormsModule ],
declarations: [ PersonComponent, ContactComponent, ContactListComponent ],
providers: [ PersonService, ContactService ],
exports: [ ContactListComponent, ContactComponent ]
})

export class ContactModule {}

</code></pre>

Source: [Angular Modules vs ES6 Modules - DZone Web Dev](https://dzone.com/articles/angular-modules-vs-es6-modules)

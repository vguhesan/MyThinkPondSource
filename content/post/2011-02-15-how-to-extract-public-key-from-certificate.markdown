---
author: vguhesan
categories:
- Programming
comments: true
date: 2011-02-15T18:28:07Z
link: http://mythinkpond.com/2011/02/15/how-to-extract-public-key-from-certificate/
slug: how-to-extract-public-key-from-certificate
title: How to extract public key from certificate?
url: /2011/02/15/how-to-extract-public-key-from-certificate/
wordpress_id: 208
---

**How to extract public key from certificate?**

Recently I had to extract the public key from a certificate. Each time I do this I end up looking up the man pages for openssl and so I thought I'd blog it for myself and for others to use when needed.

$ openssl x509 -inform pem -in certificate.pem -pubkey -noout > publickey.pem

Enjoy


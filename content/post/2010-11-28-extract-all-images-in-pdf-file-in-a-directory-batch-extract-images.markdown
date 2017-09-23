---
author: vguhesan
categories:
- Programming
comments: true
date: 2010-11-28T23:08:37Z
link: http://mythinkpond.com/2010/11/28/extract-all-images-in-pdf-file-in-a-directory-batch-extract-images/
slug: extract-all-images-in-pdf-file-in-a-directory-batch-extract-images
tags:
- extract images from PDF
- perl
- script
title: Extract all images in PDF file in a directory (batch extract images)
url: /2010/11/28/extract-all-images-in-pdf-file-in-a-directory-batch-extract-images/
wordpress_id: 190
---

Sometimes you need a way to extract all images in a PDF but then you have a directory of files and you need to extract them iteratively.

Prerequisites:

1. Install [Cygwin](http://www.cygwin.com/) or linux environment with Perl support.

2. Install [ImageMagick](http://www.imagemagick.org/script/index.php).

3. Install [GhostScript](http://pages.cs.wisc.edu/~ghost/).

Afterward run the following script:

[sourcecode language="jscript"]

#!/bin/perl

my $directory = $ARGV[0];
opendir (DIR, $directory) or die $!;
while (my $file = readdir(DIR))
{
if ($file =~ m/\.pdf/)
{
my $newfile = $file;
$newfile =~ s/\.pdf/_%01d\.jpg/;
print "Processing " . $file . " ; newfilename: " . $newfile . "...\n";
`convert -density 150 $file $newfile`;
}
}

[/sourcecode]

How to invoke:
scriptname path_to_pdf_files

Cheers.

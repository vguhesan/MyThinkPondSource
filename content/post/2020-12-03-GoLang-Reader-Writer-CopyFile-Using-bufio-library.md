+++
title = "GoLang: Reader-Writer implemented via bufio library to copy file"
description = "Copy source file to target location implemented via the bufio library."
date = "2020-09-24"
draft = "false"
categories = ["GoLang"]
tags = ["GoLang","Copy File"]
thumbnail = "/img/logo/GoLangLogo1.png"
lead = "Copy source file to target location implemented via the bufio library."
+++

### How to copy a file in small portions into a target file?

Let's talk about the why?

When you copy large files, you want to ensure that you are copying it piece by piece to avoid out-of-memory errors. As a good practice, it's best to consider optimizations during development to avoid edge cases that might creep up in production.

Imagine a scenario where your copy file has been working flawlessly until one fine day when a 5GB file is thrown at it to be copied from one location to another. If memory is a problem, then it will throw a out-of-memory and crash.
 

### Now the complete example 

<pre id="codeblkA" class="line-numbers" data-line="37"><code class="lang-go">package main

import (
	"bufio"
	"io"
	"os"
)

func main() {
	// Objective: Copy contents of FileA to FileB
	// Perform this step in chuncks instead of using the
	// built-in copy functionality.
	// Why?
	// Illustrates how to use bufio library with a reader and writer

	// Source
	inFile, err := os.Open("./source-file.txt")
	if err != nil {
		panic(err)
	}
	defer inFile.Close()

	// Target
	outFile, err := os.Create("./target-file.txt")
	if err != nil {
		panic(err)
	}
	defer outFile.Close()

	// Read a bit then write a bit -- repeat until EOF
	reader := bufio.NewReader(inFile)
	writer := bufio.NewWriter(outFile)
	for {
		if slice, err := reader.ReadSlice('\n'); err == nil || err == io.EOF {
			writer.Write(slice)
			// IMPORTANT: Invoke flush()
			writer.Flush()
			if err == io.EOF {
				break
			}
		}
	}

}

</code></pre>

### Deeper analysis

<ul>
	<li><a href="#codeblkA.17-20">In lines 17-20</a>, we Open() the source and panic if we have a file error.</li>
	<li><a href="#codeblkA.21">In line 21</a>, we defer closing the file when we exit that function. You got to love Go for this one capability alone! :-)</li>
	<li><a href="#codeblkA.24-28">In lines 24-28</a>, we repeat the same process for the outgoing file.</li>
	<li><a href="#codeblkA.31-32">In lines 31,32</a>, we create the NewReader and NewWriter.</li>
	<li><a href="#codeblkA.33-42">In lines 33-42</a>, we create loop until we reach the End-Of-File marker and in line 35 we write the output out to the file.</li>
	<li><a href="#codeblkA.35">In lines 35</a>, It is important to always call writer.Flush() to commit the writes to file. Failure to do this will end up with an empty file.</li>
</ul>


### Ready to try this on your local system?

Feel free to check out the project located here:

<a href="https://github.com/vguhesan/GoLang-CopyFile" target="_blank">GoLang-CopyFile</a>

All source code and steps to compile have been included at the repository above. Ping me if you run into any issues.

Cheers!

### Today's Quote

{{<figure src="/img/logo/zen.png" caption="" width="100" class="alignleft round-img-border imgframe-left-pad" >}}
<br/>
When you talk, you are only repeating what you already know. <br/>
But if you listen, you may learn something new.<br/>
**- The Dalai Lama, XIV**


&nbsp;
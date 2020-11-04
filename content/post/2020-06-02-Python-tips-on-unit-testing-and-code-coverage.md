+++
title = "Python Tips: On Getting Started, Unit Testing and Code Coverage"
description = "Python: Tips on Unit Testing and Code Coverage"
date = "2020-06-02"
categories = ["Python"]
tags = ["Python", "UnitTesting", "Unit Testing", "Code Coverage", "Coverage"]
thumbnail = "/img/logo/python_logo2.png"
+++

> **tl;dr** Here is a collection of useful Python tips, a starter "Hello World" Python template for both web (using Flask) and stand-alone script. And additional tips in writing effective Python code, getting started, Unit Tests and using the Coverage tool to improve code. 

{{<figure src="/img/2020/06/02/fabian-grohs-XMFZqrGyV-Q-unsplash.jpg" caption="Photo by <a href='https://unsplash.com/@grohsfabian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText' target='_blank'>Fabian Grohs</a> on <a href='https://unsplash.com/' target='_blank'>Unsplash</a>" class="aligncenter round-img-border imgframe-left-pad" >}}

## Getting Started - Introducing "Python Hello World" Template ##

{{<figure src="/img/logo/python_logo.png" caption="" width="120" class="alignleft round-img-border imgframe-left-pad" >}}

Sometimes when we need to get started in Python, we need an easy "Hello World" template that gets us started with all the basics including unit test and coverage reports. I've searched and searched and I have not found something that fits my needs and so I decided to create one. I have placed it in the public domain for others to use under MIT license (free as water). If it solves a little bit of your headache, send me a note and share your feedback. Don't forget to share the link with others. :blush:

In summary, if you're trying to get started with a Python 3+ project, then feel free to use the template I have for you.

> Link to the public repository (on GitHub): <a href="https://github.com/vguhesan/python-hello-world-with-unit-test" target="_bank">Hello World Python Starter Kit</a> 

First step, choose your poison:
- [For Linux]({{<ref "#for-nixast-linux-environment-">}})
- [For Windows]({{<ref "#for-windows-environment-">}}) (work pending) 
- [For GitHub Users]({{<ref "#for-github-account-holders-">}})

### For nix&ast; (Linux) environment: ###
<pre><code class="language-python line-numbers">cd your_project_directory
git clone https://github.com/vguhesan/python-hello-world-with-unit-test.git ./myprojectname
cd ./myprojectname

# For development setup (includes test and coverage tools in PipEnv)
./nix/run_firsttime_setup_dev.sh 
# For production setup 
./nix/run_firsttime_setup_prd.sh 
# For sample standalone script
./nix/run_standalone_py_script.sh
# For sample Flask application (in foreground)
./nix/run_flash_web.sh
# For running Unit Tests and Coverage Report
./nix/run_tests_and_coverage.sh

</code></pre>  

### For Windows environment: (work pending) ###
<pre><code class="language-python line-numbers">cd your_project_directory
git clone https://github.com/vguhesan/python-hello-world-with-unit-test.git .\myprojectname
cd .\myprojectname

# For development setup (includes test and coverage tools in PipEnv)
.\win\run_firsttime_setup_dev.cmd 
# For production setup 
.\win\run_firsttime_setup_prd.cmd 
# For sample standalone script
.\win\run_standalone_py_script.cmd
# For sample Flask application (in foreground)
.\win\run_flash_web.cmd
# For running Unit Tests and Coverage Report
.\win\run_tests_and_coverage.cmd

</code></pre>  

### For GitHub account holders: ###
<pre><code class="language-python line-numbers">Simply visit:
https://github.com/vguhesan/python-hello-world-with-unit-test

And click on "Use this template" (green) button and follow instructions on GitHub.
</code></pre>

What is in the 'Hello World' project (File Structure):
<pre><code class="language-shell line-numbers">.
├── LICENSE
├── Pipfile
├── Pipfile.lock
├── README.md
├── nix
│   ├── run_firsttime_setup_dev.sh
│   ├── run_firsttime_setup_prd.sh
│   ├── run_flask_web.sh
│   ├── run_standalone_py_script.sh
│   └── run_tests_and_coverage.sh
├── src
│   ├── __init__.py
│   ├── sample_flask_app.py
│   └── sample_hello_world_script.py
└── test
    ├── __init__.py
    ├── test_flask_app.py
    └── test_hello_world_script.py

3 directories, 15 files
</code></pre>

Output from Tests and Coverage script:
<pre><code class="language-shell line-numbers">.....
----------------------------------------------------------------------
Ran 5 tests in 0.012s

OK
Name                               Stmts   Miss  Cover   Missing
----------------------------------------------------------------
src/sample_flask_app.py                4      0   100%
src/sample_hello_world_script.py       3      0   100%
----------------------------------------------------------------
TOTAL                                  7      0   100%
</code></pre>

### How did I achieve a 100% coverage ###

**Tips:**

Examine file: <a href='https://github.com/vguhesan/python-hello-world-with-unit-test/blob/master/nix/run_tests_and_coverage.sh' target='_blank'>/nix/run_tests_and_coverage.sh</a>

- Use effective "omit" and "include" options to only include (and exclude) what you want (and don't want) in your coverage. 
  - By default, Coverage will include all python files including the ones that are under "/test" folder. Exclude the tests from coverage.
  - By default, Coverage will include all the "__init__.py" files that marks the folder as a module to Python. These files are always 100%. Why include them in the report. Adds too much noise. Omit them from the report.
- Sometimes your debug code like print(f'Full Name: {person.name}') maybe enclosed in a "if DEBUG:" clause, and that particular branch does not serve any useful purpose other than debugging the variables. You don't need to cover them in your tests. To avoid this use "# pragma: no cover" (see <a href="https://coverage.readthedocs.io/en/latest/excluding.html" target="_blank">this link</a> for more details)
  - In your production code use effective "<a href="https://coverage.readthedocs.io/en/latest/excluding.html" target="_blank"># pragma: no cover</a>" to denote areas which you don't want to include in your coverage. 
  - If you have a block of code (multiple lines) that you want to exclude, you don't want to add "# pragma: no cover" to every line, use something like:

<pre><code class="language-python line-numbers">  if True: # pragma: no cover
	  print('Line1')
	  print('Line2')
	  print('Line3')
</code></pre>

The above sample will ignore all four lines from the coverage while the code is syntactically the same without the "if True:" (from the Python Compilers point-of-view. That's another future article. But for now, if you want to learn more about Python ByteCode, check out <a href='https://docs.python.org/3/library/dis.html#dis' target='_blank'>dis</a> [stands for "disassembler"] - or <a href='https://akaptur.com/blog/2013/08/14/python-bytecode-fun-with-dis/' target='_blank'>here</a>.)

**Important Rule**

Using the tips above, you'll be tempted to go globally and remove all code from coverage to reach that 100%. Don't do that. By doing so, you will pay back later when your code is missing real coverage and the issue creeps in production. So find your right balance between writing unit tests and coverage.


If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share, the more my content can reach others. 

Thank you for helping me spread the word. 

- Find your passion and inspiration today! 
- Love what you do [and when life gives you lemons, make lemonade (or better - an <a href="https://en.wikipedia.org/wiki/Arnold_Palmer_(drink)" target="_blank">Arnold Palmer</a> drink) :lemon:+:tea: = :tropical_drink:]
- Help someone else discover their passion!

Cheers & Peace!

